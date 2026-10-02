'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does FixFlow handle life-safety emergencies (gas leaks, active structural floods)?",
      a: "Our AI agents are strictly programmed with life-safety screening protocols. If a resident mentions gas smells, sparks near water, or structural instability, the agent immediately instructs them to evacuate or shut off main breakers, while instantaneously dialing emergency services and dispatching an alert to the designated on-call property manager."
    },
    {
      q: "Do residents need to download an app or remember login credentials?",
      a: "No! The Martin & Co tenant repair portal is completely web-based and mobile-optimized. Residents simply click a link or scan a QR code placed on their kitchen cabinet or thermostat. Our voice agents answer standard telephone calls without requiring the resident to use any app whatsoever."
    },
    {
      q: "How does FixFlow integrate with existing Property Management Systems (PMS)?",
      a: "FixFlow connects via RESTful Webhooks and direct APIs with major property management systems including AppFolio, Yardi Voyager, RealPage, and Buildium. Leases, tenant rosters, and generated work orders sync in real time without duplicating records."
    },
    {
      q: "What speech technology powers the conversational AI voice calls?",
      a: "We integrate state-of-the-art neural voice pipelines combining Cartesia and ElevenLabs for natural, empathetic voice rendering with sub-400ms end-to-end latency. The conversations sound entirely human, responsive, and patient."
    },
    {
      q: "Can we customize the AI voice agents' tone, rules, and trade contacts?",
      a: "Yes. From the /ai-agents and /settings interfaces, managers can fine-tune agent personas, adjust spending authority thresholds (e.g. automatically approve plumbing up to $350), upload custom contractor contact lists, and specify lease agreement rules."
    },
    {
      q: "How quickly can a property portfolio go live with FixFlow?",
      a: "Most portfolios are fully active within 24 to 48 hours. Simply import your property unit roster and tenant contact list, assign your dedicated local phone number, and share the self-service repair link with residents."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Everything you need to know about implementing autonomous AI property operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
