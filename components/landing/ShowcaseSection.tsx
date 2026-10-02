'use client';

import React from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Headphones,
  Smartphone,
  LayoutDashboard
} from 'lucide-react';

export function ShowcaseSection() {
  const { showcase } = landingData;

  return (
    <section id="showcase" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono-tag uppercase text-indigo-400 tracking-[0.2em] mb-3">
              {showcase.sectionTag}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {showcase.heading}
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed font-normal">
              {showcase.subheading}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>LIVE INTERFACES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>FULLY FUNCTIONAL</span>
          </div>
        </div>

        {/* Project Showcase Cards */}
        <div className="space-y-8">
          {showcase.projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl md:rounded-3xl p-6 sm:p-10 bg-[#0C0D12] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 group overflow-hidden relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text & Specs Details (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-[11px] font-mono-tag uppercase text-indigo-400 font-semibold tracking-wider">
                      {project.tag}
                    </span>
                    <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-1 border-t border-white/[0.06]">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link with sliding arrow on hover */}
                  <div className="pt-2">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-indigo-600 text-white font-medium text-xs border border-white/[0.1] hover:border-indigo-500 transition-all duration-200 group/btn shadow-md"
                    >
                      <span>{project.buttonLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>

                {/* Visual Preview Window (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-white/[0.08] bg-[#07080B] p-4 sm:p-5 shadow-2xl relative overflow-hidden group-hover:border-white/[0.15] transition-colors">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px] font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        {index === 0 && <LayoutDashboard className="w-4 h-4 text-indigo-400" />}
                        {index === 1 && <Smartphone className="w-4 h-4 text-indigo-400" />}
                        {index === 2 && <Headphones className="w-4 h-4 text-indigo-400" />}
                        <span className="text-slate-200">{project.stats}</span>
                      </div>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Connected
                      </span>
                    </div>

                    {/* Preview UI Mock Details */}
                    {index === 0 && (
                      <div className="pt-4 space-y-3 text-xs">
                        <div className="grid grid-cols-3 gap-2.5">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                            <span className="text-[10px] font-mono text-slate-500">MONTHLY NOI</span>
                            <p className="font-bold text-base text-white mt-1">$198,900</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                            <span className="text-[10px] font-mono text-slate-500">OCCUPANCY</span>
                            <p className="font-bold text-base text-emerald-400 mt-1">98.2%</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                            <span className="text-[10px] font-mono text-slate-500">ACTIVE TICKETS</span>
                            <p className="font-bold text-base text-indigo-300 mt-1">3 Pending</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                          <span className="text-slate-300 text-[11px]">Autonomous Voice Telephony Line: Active</span>
                          <span className="font-mono text-emerald-400 text-[11px]">0 Missed Calls</span>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="pt-4 space-y-3 text-xs">
                        <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                          <p className="text-[11px] font-mono text-indigo-300">Martin &amp; Co Public Portal</p>
                          <p className="text-white font-medium mt-1">&quot;What can we help you resolve today?&quot;</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[11px]">
                          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05] text-slate-300 text-center">
                            Plumbing
                          </div>
                          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05] text-slate-300 text-center">
                            Heating / AC
                          </div>
                          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05] text-slate-300 text-center">
                            Electrical
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="pt-4 space-y-3 text-xs">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono text-indigo-300">Agent: Elena (Maintenance Dispatch)</span>
                            <span className="text-[10px] font-mono text-slate-400">Duration: 02:18</span>
                          </div>
                          <p className="text-slate-300 text-xs italic">
                            &quot;Verified tenant water shutoff under bathroom vanity. Paged certified contractor #18.&quot;
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">Sentiment: Calm</span>
                          <span className="px-2 py-0.5 rounded bg-white/[0.04]">Audio WAV Synced</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
