'use client';

import React, { useState } from 'react';
import { landingData, BentoFeature } from './landingData';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Volume2,
  Wrench
} from 'lucide-react';

interface GlowCardProps {
  feature: BentoFeature;
}

function BentoCard({ feature }: GlowCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative rounded-2xl md:rounded-3xl p-6 sm:p-8 bg-[#16181d] border border-[#23272f] hover:border-[#bdf033]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group ${feature.colSpan}`}
    >
      {/* Dynamic Cursor-Following Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(189, 240, 51, 0.12), transparent 70%)`,
        }}
      />

      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-[11px] font-mono-tag uppercase text-[#bdf033] font-semibold tracking-wider">
            {feature.tag}
          </span>
          {feature.badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#bdf033]/10 border border-[#bdf033]/25 text-[#bdf033]">
              {feature.badge}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-white transition-colors">
          {feature.title}
        </h3>

        <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>

      {/* Interactive Micro-Visual Preview per Feature Type */}
      <div className="mt-8 pt-6 border-t border-[#23272f]">
        {feature.previewType === 'voice' && (
          <div className="p-4 rounded-xl bg-[#121419]/60 border border-[#23272f] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Volume2 className="w-3.5 h-3.5 text-[#bdf033] animate-pulse" />
                <span className="font-mono text-[11px]">Cartesia Neural Telephony</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">Streaming: 88ms latency</span>
            </div>
            {/* Audio visualization bars */}
            <div className="flex items-center gap-1.5 h-6">
              {[60, 95, 45, 80, 100, 70, 30, 85, 90, 60, 40, 75, 90, 50, 65, 80, 100, 85, 40, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#bdf033]/40 group-hover:bg-[#bdf033] transition-colors rounded-full"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-[11px] text-slate-400 font-mono italic">
              &quot;Isolating master main shutoff valve on Unit 402... Dispatching technician.&quot;
            </p>
          </div>
        )}

        {feature.previewType === 'lease' && (
          <div className="p-4 rounded-xl bg-[#121419]/60 border border-[#23272f] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Automated Renewal Rate</span>
              <span className="text-xs font-mono font-bold text-emerald-400">94.2%</span>
            </div>
            <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#bdf033] to-[#a8d82a] h-full rounded-full w-[94%]" />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-1">
              <span>60 Days Out: Pinged</span>
              <span className="text-[#bdf033]">DocuSign Synced</span>
            </div>
          </div>
        )}

        {feature.previewType === 'triage' && (
          <div className="p-4 rounded-xl bg-[#121419]/60 border border-[#23272f] space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Wrench className="w-3.5 h-3.5 text-[#bdf033]" />
              <span>Tenant Self-Resolution Tree</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
              <div className="px-2 py-1 rounded bg-white/[0.04] text-slate-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Breaker Reset
              </div>
              <div className="px-2 py-1 rounded bg-white/[0.04] text-slate-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Disposal Key
              </div>
            </div>
          </div>
        )}

        {feature.previewType === 'metrics' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-[#121419]/60 border border-[#23272f]">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Vendor COI</span>
              <p className="font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#121419]/60 border border-[#23272f]">
              <span className="text-[10px] font-mono text-slate-400 uppercase">SLA Window</span>
              <p className="font-semibold text-white mt-1 font-mono">&lt; 45 Mins</p>
            </div>
            <div className="p-3 rounded-lg bg-[#121419]/60 border border-[#23272f]">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Ledger Audit</span>
              <p className="font-semibold text-[#bdf033] mt-1 font-mono">Auto-Reconciled</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function BentoFeatures() {
  const { bento } = landingData;

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono-tag uppercase text-[#bdf033] tracking-[0.2em] mb-3">
            {bento.sectionTag}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {bento.heading}
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed font-normal">
            {bento.subheading}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bento.features.map((feature) => (
            <BentoCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
