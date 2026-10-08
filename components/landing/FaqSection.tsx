'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Container } from './Primitives';

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does FixNet handle life-safety emergencies (gas leaks, active structural floods)?',
      a: 'Our AI agents are strictly programmed with life-safety screening protocols. If a resident mentions gas smells, sparks near water, or structural instability, the agent immediately instructs them to evacuate or shut off main breakers, while instantaneously dialing emergency services and dispatching an alert to the designated on-call property manager.',
    },
    {
      q: 'Do residents need to download an app or remember login credentials?',
      a: 'No! The tenant repair portal is completely web-based and mobile-optimized. Residents simply click a link or scan a QR code placed on their kitchen cabinet or thermostat. Our voice agents answer standard telephone calls without requiring the resident to use any app whatsoever.',
    },
    {
      q: 'How does FixNet integrate with existing Property Management Systems (PMS)?',
      a: 'FixNet connects via RESTful Webhooks and direct APIs with major property management systems including AppFolio, Yardi Voyager, RealPage, and Buildium. Leases, tenant rosters, and generated work orders sync in real time without duplicating records.',
    },
    {
      q: 'What speech technology powers the conversational AI voice calls?',
      a: 'We integrate state-of-the-art neural voice pipelines combining Cartesia and ElevenLabs for natural, empathetic voice rendering with sub-400ms end-to-end latency. The conversations sound entirely human, responsive, and patient.',
    },
    {
      q: 'Can we customize the AI voice agents’ tone, rules, and trade contacts?',
      a: 'Yes. From the /ai-agents and /settings interfaces, managers can fine-tune agent personas, adjust spending authority thresholds (e.g. automatically approve plumbing up to $350), upload custom contractor contact lists, and specify lease agreement rules.',
    },
    {
      q: 'How quickly can a property portfolio go live with FixNet?',
      a: 'Most portfolios are fully active within 24 to 48 hours. Simply import your property unit roster and tenant contact list, assign your dedicated local phone number, and share the self-service repair link with residents.',
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white text-[#232533] border-t border-[#d8dde7] relative">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f4fd] border border-[#d4e1fb] text-[#081b45] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>[ 05 // FREQUENTLY ASKED QUESTIONS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b0d12]">
              Got Questions? Answers below
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6b7386]">
              Everything you need to know about implementing autonomous AI property operations.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-answer-${index}`;
              const triggerId = `faq-trigger-${index}`;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#f8f9fb] border-[#081b45]/30 shadow-xs'
                      : 'bg-white border-[#d8dde7] hover:border-[#b0b8c8]'
                  }`}
                >
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#081b45]"
                  >
                    <span className="font-bold text-[#0b0d12] text-base sm:text-lg">
                      {faq.q}
                    </span>

                    {/* Rotating Plus Icon */}
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-45 bg-[#081b45] text-white border-[#081b45]'
                          : 'bg-[#f0f2f6] text-[#404555] border-[#d8dde7]'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Height Animation Container */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-1 text-[#404555] text-sm sm:text-[15px] leading-relaxed border-t border-[#eaedf3]">
                        {faq.a}
                      </div>
                    </div>
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
