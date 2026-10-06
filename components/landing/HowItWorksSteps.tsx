'use client';

import React from 'react';
import { landingData } from './landingData';
import { Container, SectionHeader } from './Primitives';

export function HowItWorksSteps() {
  const { howItWorks } = landingData;

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#eef1f6] relative">
      <Container size="default">
        {/* Section Header */}
        <SectionHeader
          eyebrow={howItWorks.sectionTag}
          title={howItWorks.heading}
          subtitle={howItWorks.subheading}
          align="left"
          className="mb-16 md:mb-20"
        />

        {/* Steps Grid */}
        <div className="relative">
          {/* Subtle Horizontal Connector Bar on Desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#d8dde7] -z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col p-7 rounded-2xl bg-white border border-[#d8dde7] shadow-[0_4px_16px_rgba(18,24,35,0.03)] hover:shadow-[0_12px_28px_rgba(18,24,35,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#081b45] text-white flex items-center justify-center font-mono font-bold text-base shadow-sm">
                    {step.number}
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d8dde7] group-hover:bg-[#081b45] transition-colors" />
                </div>

                {/* Step Title & Summary */}
                <h3 className="font-extrabold text-lg text-[#0b0d12] tracking-tight leading-snug">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs font-mono uppercase font-bold tracking-wider text-[#081b45]">
                  {step.summary}
                </p>

                {/* Details */}
                <p className="mt-4 text-xs sm:text-[13px] text-[#404555] leading-relaxed font-normal flex-1">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
