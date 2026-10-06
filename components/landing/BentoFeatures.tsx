'use client';

import React from 'react';
import { landingData, BentoFeature } from './landingData';
import { Container, SectionHeader } from './Primitives';
import { ShieldCheck, Volume2, Wrench } from 'lucide-react';

export function BentoFeatures() {
  const { bento } = landingData;

  return (
    <section id="features" className="py-24 lg:py-32 bg-white text-[#232533] border-t border-[#d8dde7] relative">
      <Container size="default">
        {/* Section Header */}
        <SectionHeader
          eyebrow={bento.sectionTag}
          title={bento.heading}
          subtitle={bento.subheading}
          isDark={false}
          align="center"
          className="mb-16"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bento.features.map((feature: BentoFeature) => (
            <div
              key={feature.id}
              className={`rounded-3xl p-7 sm:p-9 bg-[#f8f9fb] border border-[#d8dde7] shadow-[0_4px_20px_rgba(18,24,35,0.04)] hover:shadow-[0_16px_36px_rgba(18,24,35,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group ${feature.colSpan}`}
            >
              {/* Top Tag & Title */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#081b45]">
                    {feature.tag}
                  </span>
                  {feature.badge && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-[#d8dde7] text-[#081b45] shadow-xs">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b0d12] tracking-tight leading-snug">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm text-[#404555] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Micro Visual Preview */}
              <div className="mt-8 pt-6 border-t border-[#eaedf3]">
                {feature.previewType === 'voice' && (
                  <div className="p-4 rounded-xl bg-white border border-[#d8dde7] shadow-sm space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-[#0b0d12]">
                        <Volume2 className="w-4 h-4 text-[#18aae3] animate-pulse" />
                        <span className="font-mono text-[11px] font-bold">Cartesia Neural Telephony</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#22c55e] font-semibold">Streaming: 88ms latency</span>
                    </div>

                    <div className="flex items-center gap-1.5 h-6">
                      {[60, 95, 45, 80, 100, 70, 30, 85, 90, 60, 40, 75, 90, 50, 65, 80, 100, 85, 40, 70].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-[#18aae3] rounded-full"
                          style={{ height: `${h}%`, opacity: i % 2 === 0 ? 0.95 : 0.6 }}
                        />
                      ))}
                    </div>

                    <p className="text-[11px] text-[#6b7386] font-mono italic">
                      &quot;Isolating master main shutoff valve on Unit 402... Dispatching technician.&quot;
                    </p>
                  </div>
                )}

                {feature.previewType === 'lease' && (
                  <div className="p-4 rounded-xl bg-white border border-[#d8dde7] shadow-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6b7386]">Automated Renewal Rate</span>
                      <span className="text-xs font-mono font-bold text-[#22c55e]">94.2%</span>
                    </div>
                    <div className="w-full bg-[#eef1f6] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#22c55e] h-full rounded-full w-[94%]" />
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-[#6b7386] pt-1">
                      <span>60 Days Out: Pinged</span>
                      <span className="text-[#081b45] font-bold">DocuSign Synced</span>
                    </div>
                  </div>
                )}

                {feature.previewType === 'triage' && (
                  <div className="p-4 rounded-xl bg-white border border-[#d8dde7] shadow-sm space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#0b0d12] font-bold flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-[#081b45]" />
                        Interactive Self-Resolution
                      </span>
                      <span className="text-[#22c55e] font-mono text-[11px] font-semibold">72% Deflected</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#353a4b] pt-1">
                      <div className="p-2 rounded-lg bg-[#f8f9fb] border border-[#eaedf3] text-center font-medium">
                        ✓ GFCI Breaker Reset
                      </div>
                      <div className="p-2 rounded-lg bg-[#f8f9fb] border border-[#eaedf3] text-center font-medium">
                        ✓ Flapper Valve Fix
                      </div>
                    </div>
                  </div>
                )}

                {feature.previewType === 'metrics' && (
                  <div className="p-4 rounded-xl bg-white border border-[#d8dde7] shadow-sm space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#0b0d12] font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#081b45]" />
                        Contractor Pre-Audit Engine
                      </span>
                      <span className="text-[11px] font-mono text-[#22c55e] font-semibold">100% Insured</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#6b7386]">
                      <span>General Liability ($2M)</span>
                      <span className="text-[#0b0d12] font-bold">COI Verified</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#6b7386]">
                      <span>Median Technician Arrival</span>
                      <span className="text-[#081b45] font-bold">24 Minutes</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
