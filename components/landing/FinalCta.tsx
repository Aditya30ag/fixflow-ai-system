'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { landingData } from './landingData';
import { Container } from './Primitives';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function MagneticButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btnRef.current, {
      x: x * 0.22,
      y: y * 0.22,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  return (
    <Link
      ref={btnRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
    >
      {children}
    </Link>
  );
}

export function FinalCta() {
  const { finalCta } = landingData;
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !headingRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { scale: 0.93, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f5f5f7] relative">
      <Container size="default">
        {/* Deepdale Signature Pill Enclosure */}
        <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] p-8 sm:p-14 lg:p-20 border border-white/80 bg-[#e4e6ed] text-center shadow-[0_20px_70px_rgba(18,22,33,0.08)]">
          {/* Multi-Stop Gradient Background */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,245,249,0.98)_0%,rgba(230,233,240,0.92)_50%,rgba(218,222,230,0.95)_100%)] -z-10" />

          {/* Soft Diffused Ambient Diffusion Orbs */}
          <div className="pointer-events-none absolute -left-20 top-[60px] h-[340px] w-[280px] rounded-full bg-[#1e2738]/08 blur-[60px] -z-10" />
          <div className="pointer-events-none absolute left-[35%] top-[20px] h-[320px] w-[260px] rounded-full bg-[#18aae3]/10 blur-[70px] -z-10" />
          <div className="pointer-events-none absolute -right-20 top-[40px] h-[380px] w-[300px] rounded-full bg-[#202a3a]/10 blur-[65px] -z-10" />

          {/* Eyebrow badge with Monospace brackets */}
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#081b45] backdrop-blur-md">
              [ {finalCta.sectionTag} ]
            </span>
          </div>

          {/* Heading with scale & fade entrance */}
          <h2
            ref={headingRef}
            className="text-[clamp(2.4rem,4.8vw,4.5rem)] font-extrabold tracking-[-0.04em] leading-[1.05] max-w-3xl mx-auto text-[#0b0d12] will-change-transform"
          >
            <span>{finalCta.heading} </span>
            <span className="relative inline-block text-[#081b45] drop-shadow-[0_0_24px_rgba(24,170,227,0.35)]">
              {finalCta.highlight}
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#353a4b] max-w-xl mx-auto leading-relaxed font-normal">
            {finalCta.subheading}
          </p>

          {/* Magnetic CTA Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href={finalCta.primaryBtn.href}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-black text-sm font-semibold text-white shadow-md hover:bg-[#1f2430] active:scale-[0.98] transition-colors"
            >
              <span>{finalCta.primaryBtn.label}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </MagneticButton>

            <MagneticButton
              href={finalCta.secondaryBtn.href}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/95 border border-[#d8dde7] text-sm font-semibold text-[#1a2232] hover:bg-[#f3f5f9] transition-colors shadow-2xs"
            >
              <span>{finalCta.secondaryBtn.label}</span>
            </MagneticButton>
          </div>

          <div className="mt-10 pt-8 border-t border-[#d8dde7]/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-medium text-[#404555]">
            <span>Deploy in &lt; 48 hours</span>
            <span>&bull;</span>
            <span>No long-term contracts</span>
            <span>&bull;</span>
            <span>99.9% uptime SLA</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
