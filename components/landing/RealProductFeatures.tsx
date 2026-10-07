'use client';

import React from 'react';
import Image from 'next/image';
import { Container, SectionHeader, Button } from './Primitives';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const featureList = [
  {
    tag: 'PORTFOLIO OVERVIEW',
    title: 'See all your properties and units at a glance',
    caption: 'Browse every building, track unit occupancies, and check monthly rental income without opening ten spreadsheets.',
    screenWebp: '/screens/properties.webp',
    screenPng: '/screens/properties.png',
    alt: 'FixNet properties management page showing residential and commercial portfolio buildings',
    bullets: [
      'Visual building cards with address and unit counts',
      'Real-time rent roll totals per property',
      'Instant search and status filtering',
    ],
    ctaText: 'View Properties Screen',
    ctaLink: '/properties',
  },
  {
    tag: '24/7 AI VOICE DISPATCH',
    title: 'AI phone agents that talk to tenants like a human',
    caption: 'When pipes burst at 2 AM, the AI voice agent answers the phone, diagnoses the emergency, and calls the plumber for you.',
    screenWebp: '/screens/ai_dispatch.webp',
    screenPng: '/screens/ai_dispatch.png',
    alt: 'FixNet AI telephony logs showing turn-by-turn conversation transcripts and audio playback',
    bullets: [
      'Zero hold times and answers within 2 rings',
      'Full call audio recordings and written transcripts',
      'Automatic contractor dispatch with confirmed ETA',
    ],
    ctaText: 'Listen to Call Logs',
    ctaLink: '/ai-call-logs',
  },
  {
    tag: 'REPAIRS & WORK ORDERS',
    title: 'Track every maintenance request until it gets fixed',
    caption: 'From a leaky faucet to a roof repair, see the status of every ticket, who is working on it, and how much it costs.',
    screenWebp: '/screens/issues.webp',
    screenPng: '/screens/issues.png',
    alt: 'FixNet issues dashboard displaying open maintenance tickets and contractor assignments',
    bullets: [
      'Emergency, Urgent, and Routine issue categorization',
      'Contractor insurance verification on every job',
      'Clear invoice records and photo attachments',
    ],
    ctaText: 'Open Issues Workspace',
    ctaLink: '/dashboard/issues',
  },
  {
    tag: 'LEASE MANAGEMENT',
    title: 'Never miss an expiring tenant lease',
    caption: 'FixNet alerts you before leases expire and helps send digital renewal notices automatically, keeping your occupancy high.',
    screenWebp: '/screens/leases.webp',
    screenPng: '/screens/leases.png',
    alt: 'FixNet lease rollover and tenant agreements list with expiry dates and rent terms',
    bullets: [
      'Automatic 60-day and 30-day lease expiration notices',
      'Tenant contact information and rent rate records',
      'Digital renewal status tracking',
    ],
    ctaText: 'Check Leases Screen',
    ctaLink: '/leases',
  },
];

export function RealProductFeatures() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[#f5f5f7] border-t border-[#d8dde7]">
      <Container size="default">
        <SectionHeader
          eyebrow="PRODUCT FEATURES"
          title="Real software built for real property owners"
          subtitle="Everything you see here is actual software ready to use today. No concept designs, no mockups."
          align="center"
          className="mb-16"
        />

        <div className="space-y-16 lg:space-y-24">
          {featureList.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={item.tag}
                className="rounded-3xl p-7 sm:p-10 lg:p-12 bg-white border border-[#d8dde7] shadow-[0_10px_30px_rgba(18,24,35,0.04)] overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Column: Description & Bullets */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#081b45]">
                      {item.tag}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b0d12] tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#404555] leading-relaxed">
                      {item.caption}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-[#eaedf3]">
                      {item.bullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1c202b]">
                          <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Button href={item.ctaLink} variant="primary" size="md">
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Real Software Screenshot */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="rounded-2xl border border-[#d8dde7] bg-[#f8f9fb] shadow-sm overflow-hidden p-2 sm:p-3">
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#e5e7eb] bg-white">
                        <picture>
                          <source srcSet={item.screenWebp} type="image/webp" />
                          <Image
                            src={item.screenPng}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            loading="lazy"
                            className="object-cover object-top"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
