'use client';

import React from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { ArrowRight } from 'lucide-react';

export function FinalCta() {
  const { finalCta } = landingData;

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl md:rounded-[32px] p-8 sm:p-14 lg:p-20 bg-[#16181d] border border-[#23272f] overflow-hidden text-center">
          {/* Radial Gradient Glow Aura */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#bdf033]/15 via-[#a8d82a]/06 to-transparent blur-[120px] rounded-full -z-10" 
          />

          <p className="text-xs font-mono-tag uppercase text-[#bdf033] tracking-[0.25em] mb-4">
            {finalCta.sectionTag}
          </p>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
            <span>{finalCta.heading} </span>
            <span className="font-serif-italic font-normal text-[#bdf033]">
              {finalCta.highlight}
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            {finalCta.subheading}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={finalCta.primaryBtn.href}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#bdf033] hover:bg-[#a8d82a] text-[#121419] font-semibold text-sm shadow-xl shadow-[#bdf033]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group border border-[#bdf033]/40"
            >
              <span>{finalCta.primaryBtn.label}</span>
              <ArrowRight className="w-4 h-4 text-[#121419] group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href={finalCta.secondaryBtn.href}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-sm border border-[#23272f] hover:border-white/[0.2] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{finalCta.secondaryBtn.label}</span>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-[#23272f] flex items-center justify-center gap-6 text-xs text-slate-400">
            <span>Deploy in &lt; 48 hours</span>
            <span>•</span>
            <span>No long-term contracts</span>
            <span>•</span>
            <span>99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
