'use client';

import React from 'react';
import { landingData } from './landingData';
import { Container, SectionHeader } from './Primitives';
import { Quote } from 'lucide-react';

export function TestimonialsMarquee() {
  const { testimonials } = landingData;
  const items = testimonials.items;

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#f5f5f7] border-t border-[#d8dde7] relative overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <SectionHeader
          eyebrow={testimonials.sectionTag}
          title={testimonials.heading}
          subtitle={testimonials.subheading}
          align="left"
          className="mb-16"
        />

        {/* Testimonials Static Grid with High Readability (De-duplicated) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.author}
              className="rounded-3xl p-8 sm:p-9 bg-white border border-[#d8dde7] shadow-[0_8px_24px_rgba(18,24,35,0.04)] hover:shadow-[0_16px_36px_rgba(18,24,35,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 text-[#081b45]/30 mb-5" />
                <p className="text-base sm:text-[17px] text-[#1c202b] leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#eaedf3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#081b45] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0b0d12]">
                      {item.author}
                    </h3>
                    <p className="text-xs text-[#6b7386]">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#eef1f6] border border-[#d8dde7] text-[#1a2232]">
                  {item.units}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
