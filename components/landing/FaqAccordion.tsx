'use client';

import React, { useState } from 'react';
import { landingData } from './landingData';
import { Container, SectionHeader } from './Primitives';
import { ChevronDown } from 'lucide-react';

export function FaqAccordion() {
  const { faqs } = landingData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#f3f3f5] border-t border-[#d8dde7] relative">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <SectionHeader
              eyebrow={faqs.sectionTag}
              title={faqs.heading}
              subtitle={faqs.subheading}
              align="left"
              className="mb-0"
            />

            <div className="pt-6 border-t border-[#d8dde7]">
              <p className="text-xs sm:text-sm text-[#6b7386]">
                Have a proprietary property management software or custom SIP telephony stack?
              </p>
              <a
                href="mailto:support@fixnet.ai"
                className="inline-block mt-2.5 text-xs sm:text-sm font-bold text-[#081b45] hover:text-[#18aae3] underline underline-offset-4 transition-colors"
              >
                Contact our proptech engineering team →
              </a>
            </div>
          </div>

          {/* Right Column: Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#081b45] shadow-[0_6px_20px_rgba(18,24,35,0.06)]'
                      : 'bg-white/80 border-[#d8dde7] hover:border-[#b0b8c8] hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
                  >
                    <span className="font-extrabold text-base sm:text-[1.05rem] text-[#0b0d12] leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6b7386] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#081b45]' : ''
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
                    <p className="text-sm text-[#404555] leading-relaxed font-normal pt-2 border-t border-[#eaedf3]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
