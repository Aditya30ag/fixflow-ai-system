'use client';

import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Sliders,
  CheckCircle2,
  Volume2,
  PhoneCall,
  Shield,
  Activity,
  Plus,
  Play,
  Save,
} from 'lucide-react';
import { AgentCard } from '@/components/AgentCard';
import { Modal } from '@/components/Modal';
import { mockAIAgents, AIAgent, mockProperties } from '@/lib/mockData';

export default function AIAgentsPage() {
  const [agents, setAgents] = useState<AIAgent[]>(mockAIAgents);
  const [globalEnabled, setGlobalEnabled] = useState(true);
  const [selectedAgentForConfig, setSelectedAgentForConfig] = useState<AIAgent | null>(null);

  // Configuration modal state
  const [configForm, setConfigForm] = useState({
    name: '',
    role: '',
    voiceType: '',
    systemInstructions: '',
    escalationThreshold: 'Medium',
    assignedProperties: [] as string[],
  });

  const handleToggleStatus = (id: string) => {
    setAgents((prev) =>
      prev.map((agent) =>
        agent.id === id ? { ...agent, isActive: !agent.isActive } : agent
      )
    );
  };

  const handleGlobalToggle = () => {
    const nextVal = !globalEnabled;
    setGlobalEnabled(nextVal);
    setAgents((prev) => prev.map((a) => ({ ...a, isActive: nextVal })));
  };

  const openConfigModal = (agent: AIAgent) => {
    setSelectedAgentForConfig(agent);
    setConfigForm({
      name: agent.name,
      role: agent.role,
      voiceType: agent.voiceType,
      systemInstructions: `You are ${agent.name}, an autonomous property operations specialist for Fiflow. Always verify tenant identity, log detailed action items, and confirm whether issues require urgent technician dispatch.`,
      escalationThreshold: 'Medium',
      assignedProperties: agent.assignedProperties,
    });
  };

  const handleSaveConfig = () => {
    if (!selectedAgentForConfig) return;
    setAgents((prev) =>
      prev.map((a) =>
        a.id === selectedAgentForConfig.id
          ? {
              ...a,
              name: configForm.name,
              voiceType: configForm.voiceType,
              assignedProperties: configForm.assignedProperties,
            }
          : a
      )
    );
    setSelectedAgentForConfig(null);
  };

  const activeCount = agents.filter((a) => a.isActive).length;
  const totalCalls = agents.reduce((acc, a) => acc + a.stats.callsMade, 0);
  const totalResolved = agents.reduce((acc, a) => acc + a.stats.issuesResolved, 0);

  return (
    <div className="space-y-6">
      {/* Top Banner & Global Switch */}
      <div className="card-base p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
              <Bot className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Autonomous AI Voice Agents
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Configure neural voice agents that autonomously handle incoming and outbound calls, emergency triage, lease renewal negotiations, and maintenance vendor dispatches.
          </p>
        </div>

        {/* Global Master Switch */}
        <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold text-slate-900">
              Global AI Automation
            </span>
            <span className="text-[11px] text-slate-500">
              {globalEnabled
                ? `${activeCount} of ${agents.length} bots running`
                : 'All AI bots paused'}
            </span>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={globalEnabled}
            onClick={handleGlobalToggle}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              globalEnabled ? 'bg-blue-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                globalEnabled ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Aggregate Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl card-base flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-medium">Total AI Calls Handled</span>
            <div className="text-xl font-bold text-slate-900 mt-1">
              {totalCalls.toLocaleString()}
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
            <PhoneCall className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl card-base flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-medium">Autonomous Resolutions</span>
            <div className="text-xl font-bold text-emerald-600 mt-1">
              {totalResolved.toLocaleString()}
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl card-base flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-medium">Average Tenant Satisfaction</span>
            <div className="text-xl font-bold text-purple-600 mt-1">
              97.2%
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Grid of AI Agent Cards (3-4 per row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onToggleStatus={handleToggleStatus}
            onConfigure={openConfigModal}
          />
        ))}
      </div>

      {/* Agent Configuration Modal */}
      <Modal
        isOpen={!!selectedAgentForConfig}
        onClose={() => setSelectedAgentForConfig(null)}
        title={`Configure ${selectedAgentForConfig?.name}`}
        description="Fine-tune persona prompt, voice synthesis model, assigned properties, and escalation behavior."
        maxWidth="2xl"
      >
        {selectedAgentForConfig && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Agent Display Name
                </label>
                <input
                  type="text"
                  value={configForm.name}
                  onChange={(e) =>
                    setConfigForm({ ...configForm, name: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Neural Voice Persona
                </label>
                <select
                  value={configForm.voiceType}
                  onChange={(e) =>
                    setConfigForm({ ...configForm, voiceType: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                >
                  <option value="Eleanor (Warm British / Professional)">
                    Eleanor (Warm British / Professional)
                  </option>
                  <option value="Marcus (Deep / Calm Authoritative)">
                    Marcus (Deep / Calm Authoritative)
                  </option>
                  <option value="Sarah (Empathetic / Clear)">
                    Sarah (Empathetic / Clear)
                  </option>
                  <option value="David (Friendly / Energetic)">
                    David (Friendly / Energetic)
                  </option>
                  <option value="Rachel (Efficient / Concise)">
                    Rachel (Efficient / Concise)
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                System Instructions & Knowledge Base Prompt
              </label>
              <textarea
                rows={4}
                value={configForm.systemInstructions}
                onChange={(e) =>
                  setConfigForm({
                    ...configForm,
                    systemInstructions: e.target.value,
                  })
                }
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 leading-relaxed font-mono"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Inject custom knowledge like building rules, preferred plumbing vendors, or renewal discount thresholds.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Manager Escalation Threshold
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Low (Flag Often)', 'Medium (Balanced)', 'High (Only Emergencies)'].map(
                  (level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() =>
                        setConfigForm({ ...configForm, escalationThreshold: level })
                      }
                      className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                        configForm.escalationThreshold.includes(level.split(' ')[0])
                          ? 'bg-blue-50 text-blue-700 border-blue-300 ring-2 ring-blue-100'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {level}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedAgentForConfig(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSaveConfig}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Agent Configuration</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
