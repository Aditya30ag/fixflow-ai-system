'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Container, Button } from './Primitives';

export function RealProductHero() {
  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <Container size="default">
        {/* Luminous Enclosure */}
        <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border border-white/80 bg-[#e4e6ed] shadow-[0_20px_70px_rgba(18,22,33,0.08)] p-6 sm:p-10 lg:p-14">
          {/* Multi-stop gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,245,249,0.98)_0%,rgba(230,233,240,0.92)_50%,rgba(218,222,230,0.95)_100%)] -z-10" />

          {/* Soft ambient blurs */}
          <div className="pointer-events-none absolute -left-20 top-[140px] h-[340px] w-[280px] rounded-full bg-[#1e2738]/08 blur-[60px] -z-10" />
          <div className="pointer-events-none absolute left-[30%] top-[80px] h-[320px] w-[240px] rounded-full bg-[#18aae3]/10 blur-[70px] -z-10" />
          <div className="pointer-events-none absolute right-[20%] top-[90px] h-[380px] w-[300px] rounded-full bg-[#202a3a]/10 blur-[65px] -z-10" />

          {/* Headline & Value Proposition */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-[clamp(2.3rem,5vw,4.2rem)] font-extrabold tracking-[-0.04em] leading-[1.08] text-[#0b0d12]">
              The simple property software that manages your rentals{' '}
              <span className="relative inline-block font-serif-italic font-normal bg-gradient-to-r from-[#081b45] via-[#18aae3] to-[#081b45] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(24,170,227,0.35)] px-1">
                automatically.
              </span>{' '}
              <span className="text-black font-extrabold">Day and night.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-[#353a4b] leading-relaxed font-normal max-w-2xl mx-auto">
              FixNet answers tenant phone calls 24/7, dispatches repair contractors, tracks rental income, and organizes all your buildings in one easy dashboard.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Button href="/dashboard" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                <span>Open Executive Dashboard</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button href="/ai-call-logs" variant="secondary" size="lg" className="w-full sm:w-auto bg-white/95">
                <PhoneCall className="w-4 h-4 text-[#081b45]" />
                <span>Listen to AI Call Recordings</span>
              </Button>
            </div>

            {/* Trust bullet points */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#404555]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>No tenant app required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Real phone numbers answered in seconds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Zero complicated setup</span>
              </div>
            </div>
          </div>

          {/* Real Software UI Screenshot in Browser Frame */}
          <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl border border-[#d8dde7] bg-white shadow-[0_24px_60px_rgba(18,24,35,0.14)] overflow-hidden">
              {/* Browser Frame Header */}
              <div className="px-4 py-3 bg-[#f8f9fb] border-b border-[#eaedf3] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4646]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#22c55e] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span>LIVE SOFTWARE VIEW</span>
                </div>
              </div>

              {/* Real Dashboard Screenshot */}
              <div className="relative aspect-[16/10] w-full bg-[#f4f6fa] overflow-hidden">
                <picture>
                  <source srcSet="/screens/dashboard.webp" type="image/webp" />
                  <Image
                    src="/screens/dashboard.png"
                    alt="FixNet live software dashboard showing real-time property operations, rental income, and active maintenance tickets"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                    className="object-cover object-top"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
