'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from './Primitives';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VoiceDispatchWidget } from './VoiceDispatchWidget';

interface FeatureItem {
  tag: string;
  title: string;
  caption: string;
  screenWebp: string;
  screenPng: string;
  alt: string;
  bullets: string[];
  ctaText: string;
  ctaLink: string;
}

const featureList: FeatureItem[] = [
  {
    tag: 'PORTFOLIO OVERVIEW',
    title: 'See all your properties and units at a glance',
    caption:
      'Browse every building, track unit occupancies, and check monthly rental income without opening ten spreadsheets.',
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
    caption:
      'When pipes burst at 2 AM, the AI voice agent answers the phone, diagnoses the emergency, and calls the plumber for you.',
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
    caption:
      'From a leaky faucet to a roof repair, see the status of every ticket, who is working on it, and how much it costs.',
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
    caption:
      'FixNet alerts you before leases expire and helps send digital renewal notices automatically, keeping your occupancy high.',
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!containerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Cards gentle entrance on scroll
      const cards = containerRef.current?.querySelectorAll('.feature-card');
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });

      // 2. Parallax on screenshots
      const screens = containerRef.current?.querySelectorAll('.feature-screen-parallax');
      screens?.forEach((screen) => {
        gsap.fromTo(
          screen,
          { y: -25 },
          {
            y: 25,
            ease: 'none',
            scrollTrigger: {
              trigger: screen,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      });

      // 3. Staggered bullet reveals per card
      const bulletGroups = containerRef.current?.querySelectorAll('.feature-bullets-group');
      bulletGroups?.forEach((group) => {
        const bullets = group.querySelectorAll('.feature-bullet');
        if (bullets.length > 0) {
          gsap.fromTo(
            bullets,
            { opacity: 0, x: -16 },
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: group,
                start: 'top 85%',
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={containerRef}
      className="py-24 lg:py-32 bg-[#f5f5f7] border-t border-[#d8dde7] relative"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f4fd] border border-[#d4e1fb] text-[#081b45] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>[ 02 // PRODUCT FEATURES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0d12] tracking-tight leading-tight">
            Real software built for real property owners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#404555] leading-relaxed">
            Everything you see here is actual software ready to use today. No concept designs, no mockups.
          </p>
        </div>

        {/* 4 Feature Cards with Alternating Grid Layout */}
        <div className="space-y-12 lg:space-y-16">
          {featureList.map((item, index) => {
            const isEven = index % 2 === 1;
            const isVoiceFeature = index === 1;

            return (
              <div
                key={item.tag}
                className="feature-card rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-[#d8dde7] shadow-[0_10px_30px_rgba(18,24,35,0.04)] hover:shadow-[0_20px_45px_rgba(18,24,35,0.07)] transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Column (5 cols) */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#081b45] bg-[#eef1f6] px-3 py-1 rounded-md border border-[#d8dde7]">
                      [ {item.tag} ]
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b0d12] tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#404555] leading-relaxed">
                      {item.caption}
                    </p>

                    <div className="feature-bullets-group space-y-2.5 pt-3 border-t border-[#eaedf3]">
                      {item.bullets.map((b, i) => (
                        <div
                          key={i}
                          className="feature-bullet flex items-center gap-2.5 text-xs sm:text-sm text-[#1c202b]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={item.ctaLink}
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-xs font-semibold text-white hover:bg-[#1a2232] transition-all shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Screenshot / Media Column (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="feature-screen-parallax space-y-4 will-change-transform">
                      {/* Browser Frame Window */}
                      <div className="rounded-2xl border border-[#d8dde7] bg-[#f8f9fb] shadow-sm overflow-hidden p-2.5 sm:p-3">
                        {/* Browser Top Bar */}
                        <div className="px-3 py-2 bg-[#edf0f5] rounded-t-xl border-b border-[#e2e6ed] flex items-center justify-between mb-2 text-xs text-[#6b7386]">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4646]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                          </div>
                          <span className="text-[10px] font-mono font-medium text-[#081b45] bg-white px-2.5 py-0.5 rounded-full border border-[#d8dde7]">
                            FixNet Live Software
                          </span>
                        </div>

                        {/* High-res Screenshot */}
                        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#eaedf3] bg-white">
                          <picture>
                            <source srcSet={item.screenWebp} type="image/webp" />
                            <Image
                              src={item.screenPng}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 58vw"
                              loading="lazy"
                              className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                            />
                          </picture>
                        </div>
                      </div>

                      {/* Signature Moment: Voice Dispatch Widget for Feature 2 */}
                      {isVoiceFeature && (
                        <div className="mt-4">
                          <VoiceDispatchWidget />
                        </div>
                      )}
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
