'use client';

import React from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  Volume2
} from 'lucide-react';

export function HeroSection() {
  const { hero } = landingData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Radial Glow Lighting behind hero */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#bdf033]/15 via-[#bdf033]/05 to-transparent blur-[140px] rounded-full -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-48 left-1/4 w-[350px] h-[300px] bg-[#bdf033]/08 blur-[120px] rounded-full -z-10" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow / Status Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#23272f] backdrop-blur-md shadow-inner text-xs font-mono text-slate-300 hover:border-[#bdf033]/30 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide text-slate-200">{hero.statusBadge}</span>
            <span className="text-white/20">•</span>
            <span className="text-[#bdf033] font-sans font-semibold">Sub-30s Dispatch</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-[clamp(2.25rem,5.6vw,4.5rem)] font-bold tracking-[-0.035em] leading-[1.08] text-white">
            <span className="block sm:whitespace-nowrap">{hero.titleLine1}</span>
            <span className="block mt-1 sm:mt-2">
              runs{' '}
              <span className="font-serif-italic font-normal text-[#bdf033] bg-clip-text text-transparent bg-gradient-to-r from-[#bef033] via-[#d4f968] to-[#a8d82a] pr-1">
                {hero.highlightWord}
              </span>{' '}
              <span className="text-slate-400">{hero.titleLine2}</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-7 text-base sm:text-xl text-slate-300/90 leading-relaxed font-normal max-w-2xl mx-auto">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href={hero.primaryCta.href}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#bdf033] hover:bg-[#a8d82a] text-[#121419] font-semibold text-sm shadow-xl shadow-[#bdf033]/20 hover:shadow-[#bdf033]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group border border-[#bdf033]/40"
            >
              <span>{hero.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 text-[#121419] group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href={hero.secondaryCta.href}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-sm border border-[#23272f] hover:border-white/[0.2] backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#bdf033]" />
              <span>{hero.secondaryCta.label}</span>
            </Link>
          </div>

          {/* Micro Trust Proof */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {hero.microTrust.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Mockup Frame with Subtle 3D Perspective Tilt */}
        <div className="mt-14 sm:mt-20 [perspective:1400px]">
          <div className="relative rounded-2xl md:rounded-3xl p-1 bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent shadow-2xl shadow-black/80 transition-transform duration-500 hover:[transform:rotateX(0deg)] [transform:rotateX(3.5deg)]">
            {/* Glow Aura */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-0.5 bg-gradient-to-r from-[#bdf033]/15 via-[#a8d82a]/08 to-[#bdf033]/15 rounded-2xl md:rounded-3xl blur-xl opacity-60 -z-10" 
            />

            {/* Inner Dashboard Frame */}
            <div className="bg-[#16181d] rounded-[14px] md:rounded-[22px] border border-[#23272f] overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#121419] border-b border-[#23272f] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-[11px] font-mono text-slate-400 hidden sm:inline">
                    fixflow-telephony-node-us-east // live-dispatch
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AGENT ACTIVE
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">92ms latency</span>
                </div>
              </div>

              {/* Mockup Content Grid */}
              <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gradient-to-b from-[#16181d] to-[#121419]">
                {/* Left Column: Live Call Audio & Turn-by-Turn Transcript (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-4 rounded-xl bg-[#121419]/60 border border-[#23272f]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#bdf033]/10 border border-[#bdf033]/25 flex items-center justify-center text-[#bdf033]">
                          <Volume2 className="w-4 h-4 animate-pulse" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">Inbound Emergency Call: Unit 408</p>
                          <p className="text-[11px] text-slate-400 font-mono">Resident: Marcus Green • Highland Park Tower</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#bdf033] px-2 py-0.5 rounded bg-[#bdf033]/10 border border-[#bdf033]/25">
                        01:42
                      </span>
                    </div>

                    {/* Simulated Voice Waveform */}
                    <div className="h-8 bg-black/40 rounded-lg p-2 flex items-center justify-between gap-1 overflow-hidden border border-white/[0.04]">
                      {[40, 70, 30, 85, 95, 60, 45, 90, 100, 75, 40, 60, 80, 50, 30, 90, 85, 45, 65, 90, 100, 70, 35, 50, 80, 65].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-gradient-to-t from-[#bdf033] to-[#a8d82a] rounded-full transition-all duration-300"
                          style={{ height: `${h}%`, opacity: (i % 2 === 0 ? 0.9 : 0.6) }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Transcript Bubbles */}
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] flex gap-3">
                      <div className="text-[10px] font-mono uppercase text-slate-400 font-bold shrink-0 mt-0.5">
                        Resident
                      </div>
                      <p className="text-slate-300">
                        &quot;Water is rushing out under the kitchen sink and flooding onto the wood floor!&quot;
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#bdf033]/10 border border-[#bdf033]/25 flex gap-3">
                      <div className="text-[10px] font-mono uppercase text-[#bdf033] font-bold shrink-0 mt-0.5">
                        AI Agent
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        &quot;Marcus, look directly under the sink for the silver oval valve and turn it clockwise right now. I have already paged Apex Emergency Plumbing and sent your digital gate pass.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Automated Dispatch & SLA Verification (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-xl bg-[#121419]/60 border border-[#23272f] space-y-3.5">
                    <div className="flex items-center justify-between border-b border-[#23272f] pb-2.5">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Autonomous Action
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> SLA Rule #4 Executed
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">Assigned Vendor</span>
                        <span className="font-semibold text-white">Apex Plumbing 24/7</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">Insurance & COI</span>
                        <span className="text-emerald-400 font-mono text-[11px]">Active ($2M Policy)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">Arrival ETA</span>
                        <span className="font-mono text-[#bdf033] font-bold">19 Mins (On Route)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">Expense Cap</span>
                        <span className="font-mono text-slate-200">$350 Pre-authorized</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#23272f] flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-mono">Manager Escalation:</span>
                      <span className="text-slate-300 font-mono">Not Required (Resolved)</span>
                    </div>
                  </div>

                  {/* Portfolio Health Metric Chip */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#bdf033]/10 to-transparent border border-[#bdf033]/25 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#bdf033]" />
                      <span className="text-xs font-medium text-slate-200">Executive NOI Protected</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#bdf033]">+$2,100 saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
