'use client';

import React, { useState } from 'react';
import { landingData } from './landingData';
import { ChevronDown } from 'lucide-react';

export function FaqAccordion() {
  const { faqs } = landingData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono-tag uppercase text-[#bdf033] tracking-[0.2em]">
              {faqs.sectionTag}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              {faqs.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              {faqs.subheading}
            </p>

            <div className="pt-6 border-t border-[#23272f]">
              <p className="text-xs text-slate-400">
                Have a proprietary property management software or custom SIP telephony stack?
              </p>
              <a
                href="mailto:support@fixflow.ai"
                className="inline-block mt-2 text-xs font-semibold text-[#bdf033] hover:text-[#d4f968] underline underline-offset-4"
              >
                Contact our proptech engineering team →
              </a>
            </div>
          </div>

          {/* Right Column: Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#1c2029] border-[#bdf033]/40'
                      : 'bg-[#16181d] border-[#23272f] hover:border-[#bdf033]/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bdf033]"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-white leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#bdf033]' : ''
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1 border-t border-white/[0.04]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
