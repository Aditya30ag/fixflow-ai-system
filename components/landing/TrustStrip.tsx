'use client';

import React from 'react';
import { landingData } from './landingData';

export function TrustStrip() {
  const { trustStrip } = landingData;
  // Duplicate for seamless infinite loop
  const marqueeItems = [...trustStrip.partners, ...trustStrip.partners];

  return (
    <section className="relative py-12 border-y border-white/[0.06] bg-[#070709]/60 overflow-hidden">
      {/* Side Fade Masks */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#070709] to-transparent z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#070709] to-transparent z-10" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="text-[11px] font-mono-tag uppercase text-slate-500 tracking-[0.2em]">
          {trustStrip.eyebrow}
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 shrink-0">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
              <span className="font-display font-semibold text-xs sm:text-sm tracking-wider text-slate-300 uppercase whitespace-nowrap">
                {partner.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-400 whitespace-nowrap">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
