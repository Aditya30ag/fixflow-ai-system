'use client';

import React from 'react';
import { landingData } from './landingData';
import { Container, Button } from './Primitives';
import { ArrowRight } from 'lucide-react';

export function FinalCta() {
  const { finalCta } = landingData;

  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f7] relative">
      <Container size="default">
        {/* Deepdale Signature Pill Enclosure matching Hero Section */}
        <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] p-8 sm:p-14 lg:p-20 border border-white/80 bg-[#e4e6ed] text-center shadow-[0_20px_70px_rgba(18,22,33,0.08)]">
          {/* Lighter Multi-Stop Gradient Background matching Hero Section */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,245,249,0.98)_0%,rgba(230,233,240,0.92)_50%,rgba(218,222,230,0.95)_100%)] -z-10" />

          {/* Soft Diffused Ambient Diffusion Orbs */}
          <div className="pointer-events-none absolute -left-20 top-[60px] h-[340px] w-[280px] rounded-full bg-[#1e2738]/08 blur-[60px] -z-10" />
          <div className="pointer-events-none absolute left-[35%] top-[20px] h-[320px] w-[260px] rounded-full bg-[#18aae3]/10 blur-[70px] -z-10" />
          <div className="pointer-events-none absolute -right-20 top-[40px] h-[380px] w-[300px] rounded-full bg-[#202a3a]/10 blur-[65px] -z-10" />

          {/* Eyebrow badge */}
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white/90 shadow-sm text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#081b45] backdrop-blur-md">
              {finalCta.sectionTag}
            </span>
          </div>

          {/* Heading with glowing highlight & ultra-crisp typography */}
          <h2 className="text-[clamp(2.4rem,4.8vw,4.5rem)] font-extrabold tracking-[-0.04em] leading-[1.05] max-w-3xl mx-auto text-[#0b0d12]">
            <span>{finalCta.heading} </span>
            <span className="relative inline-block text-[#081b45] drop-shadow-[0_0_24px_rgba(24,170,227,0.35)]">
              {finalCta.highlight}
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#353a4b] max-w-xl mx-auto leading-relaxed font-normal">
            {finalCta.subheading}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={finalCta.primaryBtn.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-md"
            >
              <span>{finalCta.primaryBtn.label}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>

            <Button
              href={finalCta.secondaryBtn.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white/95"
            >
              <span>{finalCta.secondaryBtn.label}</span>
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-[#d8dde7]/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-medium text-[#404555]">
            <span>Deploy in &lt; 48 hours</span>
            <span>•</span>
            <span>No long-term contracts</span>
            <span>•</span>
            <span>99.9% uptime SLA</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
