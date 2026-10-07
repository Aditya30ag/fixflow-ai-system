'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  PhoneCall, 
  Wrench, 
  ArrowRight, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Building2, 
  UserCheck, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Flame,
  Droplets,
  Key,
  Maximize2
} from 'lucide-react';

export function LandingShowcase() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'voice' | 'tenant'>('dashboard');

  // AI Call Simulator State
  const [selectedScenario, setSelectedScenario] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const callScenarios = [
    {
      title: "Burst Pipe Under Sink (2:15 AM)",
      caller: "Sarah Jenkins",
      unit: "Sunset Heights • Apt 304",
      urgency: "Urgent",
      sentiment: "High Anxiety → Reassured",
      agent: "Elena — Maintenance Coordinator",
      duration: "1m 42s",
      transcript: [
        { speaker: "Sarah (Resident)", text: "Hi, water is spraying all over my kitchen floor right now from under the sink! Who do I call?!", time: "00:03" },
        { speaker: "Elena (AI Agent)", text: "Hello Sarah, don't worry, I'm here to help. First, look directly under the sink for the oval silver shutoff valve and turn it clockwise right away.", time: "00:09" },
        { speaker: "Sarah (Resident)", text: "Okay, turning it... wait, yes, the water stopped spraying! What now?", time: "00:28" },
        { speaker: "Elena (AI Agent)", text: "Wonderful job. I have already logged Emergency Ticket #8492 and dispatched Apex Priority Plumbing. Plumber Dave is en route with an ETA of 32 minutes.", time: "00:36" },
      ],
      automatedAction: "Auto-dispatched Apex Priority Plumbing • Work order #8492 created • Water shutoff guided remotely"
    },
    {
      title: "No Heat in Winter (Sub-Zero)",
      caller: "Marcus Vance",
      unit: "Pine Crest Lofts • Unit 112",
      urgency: "High",
      sentiment: "Frustrated → Resolved",
      agent: "Marcus — Emergency Guard",
      duration: "2m 10s",
      transcript: [
        { speaker: "Marcus (Resident)", text: "It's 18 degrees outside and our thermostat screen is completely black. The heat is off.", time: "00:04" },
        { speaker: "Marcus (AI Agent)", text: "I understand how urgent that is, Marcus. Let's check the breaker switch labeled 'Furnace' in your hallway panel.", time: "00:12" },
        { speaker: "Marcus (Resident)", text: "Found the panel... the HVAC switch was tripped halfway! Let me flip it fully off and back on.", time: "00:45" },
        { speaker: "Marcus (AI Agent)", text: "Did the screen power back up and the blower start humming?", time: "00:52" },
        { speaker: "Marcus (Resident)", text: "Yes! Air is warming up now. Wow, thank you, that saved a huge hassle.", time: "01:05" },
      ],
      automatedAction: "Self-resolved through breaker panel guidance • Prevented $250 after-hours HVAC callout fee"
    },
    {
      title: "Smart Lock Lockout at Midnight",
      caller: "Jessica Miller",
      unit: "Harbor View Towers • Unit 802",
      urgency: "Medium",
      sentiment: "Stressed → Satisfied",
      agent: "Chloe — Tenant Inquiry Assistant",
      duration: "58s",
      transcript: [
        { speaker: "Jessica (Resident)", text: "My phone battery died and my keypad lock isn't accepting my usual code.", time: "00:02" },
        { speaker: "Chloe (AI Agent)", text: "Hi Jessica! I've verified your phone number with Unit 802 on file. Generating a 30-minute one-time entry PIN for your door right now.", time: "00:11" },
        { speaker: "Chloe (AI Agent)", text: "Please enter 9 2 8 4 followed by the pound key on your Schlage lock.", time: "00:20" },
        { speaker: "Jessica (Resident)", text: "It unlocked! You are a lifesaver, Chloe. Thank you so much.", time: "00:32" },
      ],
      automatedAction: "Instant identity verification • One-time smart lock PIN issued • Security event logged in audit ledger"
    }
  ];

  return (
    <section id="showcase" className="py-16 lg:py-24 bg-slate-50/50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            See FixNet in Real-Time Action
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Toggle between the Executive Command Center, live AI voice call telephony, 
            and the tenant self-service portal.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 flex flex-wrap items-center justify-center gap-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-white text-slate-900 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-blue-600" />
              <span>Executive Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('voice')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'voice'
                  ? 'bg-white text-slate-900 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <PhoneCall className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Live AI Voice Call Agent</span>
            </button>

            <button
              onClick={() => setActiveTab('tenant')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'tenant'
                  ? 'bg-white text-slate-900 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Wrench className="w-4 h-4 text-indigo-600" />
              <span>Martin & Co Tenant Portal</span>
            </button>
          </div>
        </div>

        {/* Showcase Canvas Frame */}
        <div className="relative rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-6 lg:p-8 shadow-xl shadow-slate-200/60">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Cloud Sync
              </span>

              {activeTab === 'dashboard' && (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  <span>Open Full Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}

              {activeTab === 'voice' && (
                <Link
                  href="/ai-call-logs"
                  className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  <span>View All Call Logs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}

              {activeTab === 'tenant' && (
                <Link
                  href="/tenant/repair"
                  className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                >
                  <span>Open Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

          {/* TAB 1: EXECUTIVE DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* KPI Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Monthly Revenue</span>
                    <div className="text-2xl font-bold text-slate-900 mt-1">$198,900</div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +12.4% vs last month
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <span className="text-sm font-bold">$</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Occupancy Rate</span>
                    <div className="text-2xl font-bold text-slate-900 mt-1">94.3%</div>
                    <div className="text-[11px] text-blue-600 font-semibold mt-1 flex items-center gap-1">
                      66 of 70 units leased
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Active AI Voice Agents</span>
                    <div className="text-2xl font-bold text-slate-900 mt-1">6 Online</div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 100% SLA Coverage
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Open Maintenance Dispatches</span>
                    <div className="text-2xl font-bold text-amber-600 mt-1">3 Active</div>
                    <div className="text-[11px] text-slate-500 font-semibold mt-1">
                      Avg dispatch time: 4m
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Wrench className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Middle Section: Chart Simulation & Live Activity Audit */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue & Operations Chart Mock */}
                <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Monthly Rent Collection vs Target</h4>
                      <p className="text-xs text-slate-500">Collected $198.9k of $205.0k projected (97.0%)</p>
                    </div>
                    <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      Real-Time Ledger
                    </span>
                  </div>

                  {/* Simulated Bar Visual */}
                  <div className="space-y-3.5 my-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-600">
                        <span className="font-medium text-slate-800">Sunset Heights (24 Units)</span>
                        <span className="font-semibold text-slate-900">$72,400 / $74,000 (98%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full" style={{ width: '98%' }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-600">
                        <span className="font-medium text-slate-800">Pine Crest Lofts (18 Units)</span>
                        <span className="font-semibold text-slate-900">$53,200 / $55,000 (96%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full" style={{ width: '96%' }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-600">
                        <span className="font-medium text-slate-800">Harbor View Towers (28 Units)</span>
                        <span className="font-semibold text-slate-900">$73,300 / $76,000 (96%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2.5 rounded-full" style={{ width: '96%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Next automated rent cycle in 4 days</span>
                    <span className="text-emerald-600 font-semibold">Stripe Auto-Debit Active</span>
                  </div>
                </div>

                {/* Live AI Activity Stream */}
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live AI Activity Feed
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono">Real-time</span>
                  </div>

                  <div className="space-y-3 my-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-900">Elena (Maintenance Bot)</span>
                        <span className="text-[10px] text-slate-500">2 min ago</span>
                      </div>
                      <p className="text-slate-700 text-[11px]">Dispatched Apex Plumbing to Apt 304 (Shutoff completed).</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-900">Lease Renewal Agent</span>
                        <span className="text-[10px] text-slate-500">14 min ago</span>
                      </div>
                      <p className="text-slate-700 text-[11px]">Sent 12-month lease renewal offer with +3% rate to Unit 112.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-purple-50/50 border border-purple-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-purple-900">Rent Collection Bot</span>
                        <span className="text-[10px] text-slate-500">1 hr ago</span>
                      </div>
                      <p className="text-slate-700 text-[11px]">Successfully collected $2,400 via SMS instant checkout link.</p>
                    </div>
                  </div>

                  <Link
                    href="/dashboard"
                    className="mt-3 text-center py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold transition-colors block"
                  >
                    Open Executive Dashboard →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AI VOICE CALL SIMULATOR */}
          {activeTab === 'voice' && (
            <div className="space-y-6">
              {/* Scenario Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {callScenarios.map((scenario, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedScenario(idx);
                      setIsPlaying(true);
                    }}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedScenario === idx
                        ? 'bg-blue-50 border-blue-500 text-slate-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-blue-600">Scenario {idx + 1}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        scenario.urgency === 'Urgent' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {scenario.urgency}
                      </span>
                    </div>
                    <div className="font-bold text-sm text-slate-900 line-clamp-1">{scenario.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{scenario.unit}</div>
                  </button>
                ))}
              </div>

              {/* Audio Player & Waveform Visualizer */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md shadow-blue-500/30 transition-transform active:scale-95"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span>{callScenarios[selectedScenario].caller}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600 font-normal">{callScenarios[selectedScenario].unit}</span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="text-emerald-700 font-semibold">Assigned: {callScenarios[selectedScenario].agent}</span>
                        <span>•</span>
                        <span>Duration: {callScenarios[selectedScenario].duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sentiment & Urgency Badges */}
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {callScenarios[selectedScenario].sentiment}
                    </span>
                  </div>
                </div>

                {/* Animated Waveform Visualization */}
                <div className="flex items-center gap-1.5 h-10 px-4 rounded-lg bg-white border border-slate-200 overflow-hidden shadow-xs">
                  {[40, 65, 80, 45, 95, 30, 70, 85, 60, 40, 90, 75, 55, 35, 80, 60, 95, 45, 70, 85, 30, 60, 90, 40, 75, 55, 85, 30, 70, 95, 50, 65, 40].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isPlaying
                          ? 'bg-gradient-to-t from-blue-600 to-indigo-500 animate-pulse'
                          : 'bg-slate-300'
                      }`}
                      style={{
                        height: isPlaying ? `${Math.max(20, (h + (i % 3) * 15) % 100)}%` : `${h * 0.4}%`,
                        animationDelay: `${i * 45}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Automated Resolution Banner */}
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Autonomous AI Action:</strong> {callScenarios[selectedScenario].automatedAction}</span>
                  </div>
                  <span className="font-mono text-emerald-700 hidden sm:inline">&lt; 1.2s response</span>
                </div>
              </div>

              {/* Turn-by-Turn Transcript Stream */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-800">Turn-by-Turn Telephony Transcript</span>
                  <span>Speech-to-Text: ElevenLabs & Cartesia Neural TTS</span>
                </div>

                <div className="space-y-3 pt-2">
                  {callScenarios[selectedScenario].transcript.map((item, idx) => {
                    const isAgent = item.speaker.includes('Agent');
                    return (
                      <div
                        key={idx}
                        className={`flex gap-3 text-xs ${isAgent ? 'pl-4 sm:pl-8' : 'pr-4 sm:pr-8'}`}
                      >
                        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isAgent 
                            ? 'bg-blue-600 text-white shadow-xs' 
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {isAgent ? 'AI' : 'RES'}
                        </div>
                        <div className={`flex-1 p-3.5 rounded-xl border ${
                          isAgent 
                            ? 'bg-blue-50/70 border-blue-200 text-blue-950' 
                            : 'bg-slate-50 border-slate-200 text-slate-800'
                        }`}>
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className={`font-bold ${isAgent ? 'text-blue-700' : 'text-slate-700'}`}>
                              {item.speaker}
                            </span>
                            <span className="text-slate-400 font-mono">{item.time}</span>
                          </div>
                          <p className="leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MARTIN & CO TENANT REPAIR PORTAL */}
          {activeTab === 'tenant' && (
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-50 text-slate-900 space-y-6 border border-slate-200">
                {/* Simulated Tenant Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                      M
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 leading-tight">Martin & Co</h4>
                      <p className="text-[11px] text-slate-500">24/7 AI Tenant Repair Center</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    AI Triage Assistant Online
                  </div>
                </div>

                {/* Hero Query */}
                <div className="text-center max-w-lg mx-auto py-2">
                  <h3 className="text-xl font-bold text-slate-900">What issue are you experiencing today?</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Select a category below to initiate immediate AI diagnostics and step-by-step troubleshooting.
                  </p>
                </div>

                {/* Category Grid Simulator */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border-2 border-indigo-600 shadow-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900">Plumbing & Leaks</div>
                    <div className="text-[10px] text-indigo-600 font-semibold mt-0.5">3 active self-guides</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs cursor-pointer hover:border-indigo-400 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900">Heating & Boiler</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">Thermostat check</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs cursor-pointer hover:border-indigo-400 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                      <Key className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900">Locks & Keys</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">Smart pass issuance</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs cursor-pointer hover:border-indigo-400 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900">Appliances</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">Fridge, oven, washer</div>
                  </div>
                </div>

                {/* Interactive Diagnostic Checklist Mock */}
                <div className="p-4 rounded-xl bg-white border border-indigo-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                      Step 1 of 3: Sink & Pipe Diagnostic Guide
                    </span>
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-semibold border border-indigo-100">
                      Self-Fix First
                    </span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Locate the oval chrome shut-off handle directly below the basin. Turn clockwise until firm. Did the water stop flowing?
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <button className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Yes, issue resolved!
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-300 transition-colors">
                      No, request technician visit
                    </button>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="text-center pt-2">
                  <Link
                    href="/tenant/repair"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <span>Launch Full Martin & Co Tenant Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
