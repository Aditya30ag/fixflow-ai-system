'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export function LandingPricing() {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: "Starter",
      badge: "Small Portfolios",
      description: "Ideal for independent landlords and boutique property managers under 50 units.",
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        "Up to 50 residential units",
        "2 AI voice agents (Maintenance & Inquiries)",
        "Standard tenant repair self-service portal",
        "SMS & Email notification alerts",
        "Call recordings & 30-day transcripts",
        "Stripe payment gateway integration",
        "Standard email support (24h SLA)",
      ],
      ctaText: "Launch Starter Demo",
      href: "/dashboard",
      popular: false,
    },
    {
      name: "Growth Pro",
      badge: "Most Popular",
      description: "Full autonomous suite for mid-size operators scaling up to 250 doors.",
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        "Up to 250 units included",
        "All 6 specialized AI voice agents",
        "Custom inbound/outbound telephony phone number",
        "White-label Martin & Co tenant repair portal",
        "Autonomous contractor dispatch & insurance verification",
        "Predictive 60/30-day lease renewal automation",
        "Unlimited audio call transcripts & sentiment logs",
        "Priority 24/7 phone & Slack channel support",
      ],
      ctaText: "Explore Growth Suite",
      href: "/dashboard",
      popular: true,
    },
    {
      name: "Portfolio Enterprise",
      badge: "250+ Units",
      description: "Custom speech models, bespoke PMS integrations, and SLA guarantees.",
      monthlyPrice: 899,
      annualPrice: 719,
      features: [
        "Unlimited units & portfolio buildings",
        "Custom ElevenLabs voice cloning for your team",
        "Bi-directional API sync with Yardi, AppFolio & RealPage",
        "Multi-region smart lock & access control hooks",
        "Custom emergency escalation tree & dispatch SLA",
        "Dedicated Customer Success Architect",
        "SOC-2 Type II compliance & HIPAA / PCI encryption",
      ],
      ctaText: "Contact Enterprise Team",
      href: "/settings",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50/70 text-slate-900 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Invest in Autopilot. Save 10x in Labor.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            No hidden implementation fees. Scale doors effortlessly with predictable monthly pricing.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${!annual ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-7 rounded-full bg-slate-200 p-1 border border-slate-300 relative transition-colors focus:outline-none"
            >
              <div
                className={`w-5 h-5 rounded-full bg-blue-600 transition-transform ${
                  annual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${annual ? 'text-slate-900' : 'text-slate-500'}`}>
              <span>Annual Billing</span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  tier.popular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200/90 hover:border-slate-300 shadow-sm'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {tier.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                    {tier.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">${price}</span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {annual ? 'Billed annually (2 months free)' : 'Billed monthly, cancel anytime'}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                      Included with {tier.name}:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={tier.href}
                    className={`w-full py-3.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/30'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
