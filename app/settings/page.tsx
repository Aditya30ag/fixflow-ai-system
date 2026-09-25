'use client';

import React, { useState } from 'react';
import {
  Settings,
  Phone,
  Shield,
  Bell,
  Save,
  CheckCircle2,
  Lock,
  Globe,
  Database,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'ai' | 'organization' | 'notifications'>('ai');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          System & AI Configuration
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Manage voice phone routing, AI agent escalation thresholds, and portfolio integrations
        </p>
      </div>

      {savedNotice && (
        <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Configuration saved successfully. AI bots updated in real-time.</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-slate-200 text-xs font-semibold gap-6">
        <button
          type="button"
          onClick={() => setActiveTab('ai')}
          className={`pb-3 border-b-2 transition-all ${
            activeTab === 'ai'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          AI Telephony & Voice Models
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('organization')}
          className={`pb-3 border-b-2 transition-all ${
            activeTab === 'organization'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Portfolio Organization
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('notifications')}
          className={`pb-3 border-b-2 transition-all ${
            activeTab === 'notifications'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Notifications & Alerts
        </button>
      </div>

      {/* Tab 1: AI Telephony */}
      {activeTab === 'ai' && (
        <div className="card-base p-6 bg-white space-y-5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Inbound AI Voice Phone Number
              </label>
              <input
                type="text"
                defaultValue="+1 (800) 555-FIXF"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Tenants calling this line are automatically greeted by Fiflow AI.
              </p>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Speech Synthesis Engine
              </label>
              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800">
                <option>ElevenLabs Turbo v2.5 (Sub-180ms Latency)</option>
                <option>OpenAI Realtime Voice</option>
                <option>Deepgram Nova-2 + Cartesia</option>
              </select>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <h4 className="font-bold text-slate-800 mb-2">After-Hours Emergency Protocol</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                <span>Automatically dispatch on-call plumber for active water flooding between 10 PM - 7 AM</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                <span>Record and transcribe all calls with automated tenant sentiment tagging</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Organization */}
      {activeTab === 'organization' && (
        <div className="card-base p-6 bg-white space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Company / Legal Name
              </label>
              <input
                type="text"
                defaultValue="Fiflow Property Group LLC"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Portfolio Base Currency
              </label>
              <input
                type="text"
                defaultValue="USD ($)"
                disabled
                className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Notifications */}
      {activeTab === 'notifications' && (
        <div className="card-base p-6 bg-white space-y-4 text-xs">
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              <span>SMS notification to manager on Urgent maintenance tickets</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              <span>Weekly portfolio revenue and occupancy summary PDF</span>
            </label>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm"
        >
          <Save className="w-3.5 h-3.5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}
