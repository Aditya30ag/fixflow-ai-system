'use client';

import React from 'react';
import { landingData } from './landingData';

export function TrustStrip() {
  const { trustStrip } = landingData;

  return (
    <div className="w-full border-y border-[#d8dde7] bg-[#f0f2f6]/60 py-6 overflow-hidden">
      <div className="max-w-[1312px] mx-auto px-4 mb-4 text-center">
        <p className="text-[0.75rem] sm:text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[#6b7386]">
          {trustStrip.eyebrow}
        </p>
      </div>

      {/* Infinite Smooth Pausable Marquee */}
      <div className="relative w-full overflow-hidden flex select-none group">
        {/* Left Fade Mask */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f0f2f6] to-transparent z-10" 
        />
        {/* Right Fade Mask */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f0f2f6] to-transparent z-10" 
        />

        <div className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16 animate-marquee-slow group-hover:[animation-play-state:paused]">
          {trustStrip.partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 shrink-0 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#18aae3]" />
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#1a2232]">
                {partner.name}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-[#d8dde7] text-[#6b7386]">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Cloned Set for Seamless Infinite Loop */}
        <div 
          aria-hidden="true" 
          className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16 animate-marquee-slow group-hover:[animation-play-state:paused]"
        >
          {trustStrip.partners.map((partner, index) => (
            <div
              key={`clone-${partner.name}-${index}`}
              className="flex items-center gap-3 shrink-0 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#18aae3]" />
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#1a2232]">
                {partner.name}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-[#d8dde7] text-[#6b7386]">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
