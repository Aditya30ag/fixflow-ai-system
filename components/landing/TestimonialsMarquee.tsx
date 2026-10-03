'use client';

import React from 'react';
import { landingData } from './landingData';
import { Quote } from 'lucide-react';

export function TestimonialsMarquee() {
  const { testimonials } = landingData;
  const items = [...testimonials.items, ...testimonials.items];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative border-t border-[#23272f] overflow-hidden">
      {/* Side Fade Overlays */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#121419] to-transparent z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#121419] to-transparent z-10" 
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <p className="text-xs font-mono-tag uppercase text-[#bdf033] tracking-[0.2em] mb-3">
            {testimonials.sectionTag}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed font-normal">
            {testimonials.subheading}
          </p>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee-slow flex items-stretch gap-6 shrink-0 px-4">
          {items.map((item, index) => (
            <div
              key={`${item.author}-${index}`}
              className="w-[340px] sm:w-[420px] rounded-2xl p-7 sm:p-8 bg-[#16181d] border border-[#23272f] hover:border-[#bdf033]/30 transition-all duration-300 flex flex-col justify-between shrink-0 group"
            >
              <div>
                <Quote className="w-6 h-6 text-[#bdf033]/50 mb-4 group-hover:text-[#bdf033] transition-colors" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#23272f] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#bef033] to-[#a8d82a] p-[1px]">
                    <div className="w-full h-full rounded-full bg-[#121419] flex items-center justify-center text-xs font-bold text-[#bdf033]">
                      {item.initials}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-white">
                      {item.author}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-[#23272f] text-slate-400">
                  {item.units}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
