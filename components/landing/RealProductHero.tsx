'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, PhoneCall, CheckCircle2, ChevronDown } from 'lucide-react';
import { Container, Button } from './Primitives';

export function RealProductHero() {
  const rootRef = useRef<HTMLElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Instant static display for reduced motion
        gsap.set('.hero-word, .hero-chip, .hero-cta-btn', { opacity: 1, y: 0 });
        return;
      }

      // 1. Staggered headline word reveal
      const words = rootRef.current?.querySelectorAll('.hero-word');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.035,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }

      // 2. Staggered trust points chips
      const chips = rootRef.current?.querySelectorAll('.hero-chip');
      if (chips && chips.length > 0) {
        gsap.fromTo(
          chips,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: 'power2.out',
            delay: 0.45,
          }
        );
      }

      // 3. CTAs entry
      const ctas = rootRef.current?.querySelectorAll('.hero-cta-btn');
      if (ctas && ctas.length > 0) {
        gsap.fromTo(
          ctas,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 0.35,
          }
        );
      }

      // 4. 3D tilted screenshot flattening on scroll (desktop only)
      if (screenRef.current && isDesktop) {
        gsap.fromTo(
          screenRef.current,
          {
            rotateX: 12,
            scale: 0.92,
            transformPerspective: 1200,
            transformOrigin: '50% 0%',
          },
          {
            rotateX: 0,
            scale: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: screenRef.current,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );

        // Soft glow pulse / intensity shift
        if (glowRef.current) {
          gsap.fromTo(
            glowRef.current,
            { opacity: 0.35, scale: 0.9 },
            {
              opacity: 0.75,
              scale: 1.05,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: screenRef.current,
                start: 'top 85%',
                end: 'top 30%',
                scrub: 1,
              },
            }
          );
        }
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
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
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-[clamp(2.3rem,4.5vw,3.9rem)] font-extrabold tracking-[-0.04em] leading-[1.12] text-[#0b0d12]">
              {/* Line 1 (Concise & High Impact) */}
              <span className="block sm:whitespace-nowrap">
                {['The', 'property', 'software', 'that', 'runs'].map((w, i) => (
                  <React.Fragment key={i}>
                    <span className="inline-block overflow-hidden">
                      <span className="hero-word inline-block">{w}</span>
                    </span>{' '}
                  </React.Fragment>
                ))}
              </span>

              {/* Line 2 */}
              <span className="block mt-1 sm:mt-2 sm:whitespace-nowrap">
                <span className="inline-block overflow-hidden">
                  <span className="hero-word relative inline-block font-serif-italic font-normal bg-gradient-to-r from-[#081b45] via-[#18aae3] to-[#081b45] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(24,170,227,0.35)] px-1">
                    automatically.
                  </span>
                </span>{' '}
                {['Day', 'and', 'night.'].map((w, i) => (
                  <React.Fragment key={`tail-${i}`}>
                    <span className="inline-block overflow-hidden">
                      <span className="hero-word inline-block text-black font-extrabold">{w}</span>
                    </span>{' '}
                  </React.Fragment>
                ))}
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-[#353a4b] leading-relaxed font-normal max-w-2xl mx-auto">
              FixNet answers tenant phone calls 24/7, dispatches repair contractors, tracks rental income, and organizes all your buildings in one easy dashboard.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <div className="hero-cta-btn w-full sm:w-auto">
                <Button href="/dashboard" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                  <span>Open Executive Dashboard</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="hero-cta-btn w-full sm:w-auto">
                <Button href="/ai-call-logs" variant="secondary" size="lg" className="w-full sm:w-auto bg-white/95">
                  <PhoneCall className="w-4 h-4 text-[#081b45]" />
                  <span>Listen to AI Call Recordings</span>
                </Button>
              </div>
            </div>

            {/* Trust bullet points */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#404555]">
              <div className="hero-chip flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/60 border border-[#d8dde7]/80 backdrop-blur-xs shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>No tenant app required</span>
              </div>
              <div className="hero-chip flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/60 border border-[#d8dde7]/80 backdrop-blur-xs shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>Real phone numbers answered in seconds</span>
              </div>
              <div className="hero-chip flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/60 border border-[#d8dde7]/80 backdrop-blur-xs shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>Zero complicated setup</span>
              </div>
            </div>
          </div>

          {/* Real Software UI Screenshot with 3D Tilt and Soft Glow */}
          <div className="mt-12 sm:mt-14 max-w-5xl mx-auto relative">
            {/* Soft ambient back-glow */}
            <div
              ref={glowRef}
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 bg-gradient-to-b from-[#18aae3]/25 via-[#081b45]/15 to-transparent rounded-[36px] blur-2xl -z-10 transition-opacity"
            />

            <div
              ref={screenRef}
              style={{ transformStyle: 'preserve-3d' }}
              className="rounded-2xl sm:rounded-3xl border border-[#d8dde7] bg-white shadow-[0_24px_60px_rgba(18,24,35,0.14)] overflow-hidden transition-transform will-change-transform"
            >
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

            {/* Animated Scroll Cue at bottom */}
            <div className="mt-8 flex flex-col items-center justify-center gap-1.5 text-slate-500 select-none">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#6b7386]">
                Scroll
              </span>
              <div className="w-5 h-8 rounded-full border-2 border-[#b0b8c8] flex items-start justify-center p-1">
                <div className="w-1.5 h-2 rounded-full bg-[#081b45] animate-bounce" />
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#6b7386] animate-pulse -mt-0.5" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
