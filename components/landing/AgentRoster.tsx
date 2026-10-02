'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Bot, 
  PhoneCall, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sliders, 
  Volume2
} from 'lucide-react';

export function LandingAgentRoster() {
  const agents = [
    {
      name: "Elena Torres",
      role: "Maintenance Coordinator",
      voice: "ElevenLabs • Rachel (Warm & Empathetic)",
      badge: "24/7 Inbound",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Answers tenant distress calls in <1s. Guides basic emergency shutoffs and dispatches certified plumbers and electricians.",
      stats: { resolved: "94.2%", avgTime: "1m 18s", calls: "1,240+" }
    },
    {
      name: "Marcus Vance",
      role: "After-Hours Emergency Guard",
      voice: "Cartesia • Marcus (Calm & Authoritative)",
      badge: "Priority Escalate",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      description: "Screens life-safety issues (gas leaks, main water bursts, lockouts). Escalates to on-call manager when thresholds are breached.",
      stats: { resolved: "98.1%", avgTime: "45s", calls: "680+" }
    },
    {
      name: "Lucas Wright",
      role: "Lease Renewal Negotiator",
      voice: "ElevenLabs • Brian (Professional & Friendly)",
      badge: "Outbound AI",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Proactively calls residents 60 and 30 days prior to lease expiry. Negotiates terms using manager-approved concession bands.",
      stats: { resolved: "82.4%", avgTime: "2m 30s", calls: "450+" }
    },
    {
      name: "Maya Patel",
      role: "Rent Collection Specialist",
      voice: "Cartesia • Maya (Diplomatic & Clear)",
      badge: "Revenue Ops",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "Handles overdue rent conversations with tact. Sends SMS payment links while on the phone and logs immediate receipts.",
      stats: { resolved: "91.0%", avgTime: "1m 05s", calls: "890+" }
    },
    {
      name: "Chloe Bennett",
      role: "Tenant Inquiry & Smart Access",
      voice: "ElevenLabs • Nicole (Helpful & Upbeat)",
      badge: "Resident Care",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      description: "Answers amenity booking questions, parking rules, trash schedules, and issues 30-minute smart lock guest passcodes.",
      stats: { resolved: "96.5%", avgTime: "52s", calls: "2,100+" }
    },
    {
      name: "David Miller",
      role: "Vendor & Contractor Dispatcher",
      voice: "ElevenLabs • Dave (Direct & Efficient)",
      badge: "Contractor SLA",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Validates trade insurance, checks key availability, dispatches work orders, and confirms repair completion with resident sign-off.",
      stats: { resolved: "93.8%", avgTime: "1m 40s", calls: "520+" }
    }
  ];

  return (
    <section id="agents" className="py-20 lg:py-28 bg-slate-50/70 text-slate-900 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
              <Bot className="w-3.5 h-3.5 text-emerald-600" />
              <span>Specialized Autonomous Workforce</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              6 Dedicated AI Voice Agents at Your Command
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Each agent is trained on real estate protocols, local building codes, 
              and tenant communication best practices.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/ai-agents"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200 shadow-xs transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              <span>Customize Prompt Personas</span>
            </Link>
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-lg text-blue-600 shadow-xs">
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                        {agent.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">{agent.role}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${agent.badgeColor}`}>
                    {agent.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-3 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                  <Volume2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{agent.voice}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {agent.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{agent.stats.resolved}</div>
                  <div className="text-[10px] text-slate-500 uppercase mt-0.5 font-semibold">Success Rate</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{agent.stats.avgTime}</div>
                  <div className="text-[10px] text-slate-500 uppercase mt-0.5 font-semibold">Avg Handle</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{agent.stats.calls}</div>
                  <div className="text-[10px] text-slate-500 uppercase mt-0.5 font-semibold">Calls Handled</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Need a custom AI voice agent for your portfolio?</h4>
              <p className="text-xs text-slate-600">Clone your property manager's voice or upload your custom lease agreement rules.</p>
            </div>
          </div>
          <Link
            href="/settings"
            className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span>Open Telephony Settings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
