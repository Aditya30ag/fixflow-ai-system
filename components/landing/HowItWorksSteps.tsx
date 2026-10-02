'use client';

import React from 'react';
import { landingData } from './landingData';

export function HowItWorksSteps() {
  const { howItWorks } = landingData;

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs font-mono-tag uppercase text-indigo-400 tracking-[0.2em] mb-3">
            {howItWorks.sectionTag}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {howItWorks.heading}
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed font-normal">
            {howItWorks.subheading}
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Subtle Horizontal Connector Bar on Desktop */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -z-10" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.025] transition-all duration-300 group"
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 flex items-center justify-center transition-all duration-300">
                    <span className="font-mono font-bold text-base text-indigo-300 group-hover:text-indigo-200">
                      {step.number}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-white/[0.1] group-hover:bg-indigo-400 group-hover:scale-125 transition-all duration-300" />
                </div>

                {/* Step Title & Summary */}
                <h3 className="font-display font-bold text-lg text-white tracking-tight leading-snug group-hover:text-indigo-100 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs font-mono text-indigo-400 uppercase tracking-wide">
                  {step.summary}
                </p>

                {/* Details */}
                <p className="mt-4 text-xs text-slate-400 leading-relaxed font-normal flex-1">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
