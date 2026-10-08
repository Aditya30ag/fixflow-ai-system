'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { Container } from './Primitives';
import { ArrowRight, Eye } from 'lucide-react';

interface DeckCard {
  title: string;
  category: string;
  description: string;
  screen: string;
  webp: string;
  alt: string;
  href: string;
  rotateZ: number;
  badge: string;
}

const deckCards: DeckCard[] = [
  {
    title: 'Executive Portfolio & Property Map',
    category: 'PROPERTIES',
    description: 'Multi-family buildings, live rent rolls, occupancy counts, and location maps in one executive view.',
    screen: '/screens/properties.png',
    webp: '/screens/properties.webp',
    alt: 'FixNet Properties overview interface',
    href: '/properties',
    rotateZ: -5,
    badge: 'Rent Roll',
  },
  {
    title: 'Real-Time Telephony & Operations Hub',
    category: 'CENTRAL OS',
    description: 'Live operations hub monitoring 24/7 call dispatching, income velocity, and work order workflows.',
    screen: '/screens/dashboard.png',
    webp: '/screens/dashboard.webp',
    alt: 'FixNet Main Dashboard interface',
    href: '/dashboard',
    rotateZ: 0,
    badge: 'Live Software',
  },
  {
    title: 'Autonomous Dispatch & Work Orders',
    category: 'AI VOICE',
    description: 'Every resident call transcript, diagnostic summary, and automated contractor arrival confirmation.',
    screen: '/screens/ai_dispatch.png',
    webp: '/screens/ai_dispatch.webp',
    alt: 'FixNet AI Voice Dispatch and call logs interface',
    href: '/ai-call-logs',
    rotateZ: 5,
    badge: 'Sub-400ms SLA',
  },
];

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [activeHoverCard, setActiveHoverCard] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (prefersReducedMotion || !isDesktop || !deckRef.current) return;

    const deck = deckRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = deck.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(deck, {
        rotateY: x * 10,
        rotateX: -y * 10,
        duration: 0.35,
        ease: 'power1.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(deck, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    deck.addEventListener('mousemove', handleMouseMove);
    deck.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      deck.removeEventListener('mousemove', handleMouseMove);
      deck.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-[#f5f5f7] border-t border-[#d8dde7] relative overflow-hidden">
      <Container size="default">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f4fd] border border-[#d4e1fb] text-[#081b45] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>[ 04 // 3D SOFTWARE DECK ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0d12] tracking-tight leading-tight">
            High-density interfaces dealt for speed
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#404555] max-w-2xl mx-auto leading-relaxed">
            Hover over any interface card in the dealt deck to tilt in 3D perspective and inspect full software workflows.
          </p>
        </div>

        {/* Well-proportioned 3D Dealt Deck Arena */}
        <div
          ref={containerRef}
          style={{ perspective: '1400px' }}
          className="relative w-full max-w-5xl mx-auto py-6 sm:py-8"
        >
          <div
            ref={deckRef}
            style={{ transformStyle: 'preserve-3d' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 will-change-transform"
          >
            {deckCards.map((card, index) => {
              const isCenter = index === 1;
              const isHovered = activeHoverCard === index;

              return (
                <div
                  key={card.title}
                  onMouseEnter={() => setActiveHoverCard(index)}
                  onMouseLeave={() => setActiveHoverCard(null)}
                  style={{
                    transform: `rotateZ(${card.rotateZ}deg) translateY(${isCenter ? '-12px' : '8px'})`,
                    transformStyle: 'preserve-3d',
                  }}
                  className={`group relative rounded-2xl sm:rounded-3xl bg-white border border-[#d8dde7] p-4.5 sm:p-5 shadow-[0_16px_38px_rgba(18,24,35,0.08)] transition-all duration-300 hover:z-30 hover:shadow-[0_24px_50px_rgba(18,24,35,0.14)] hover:scale-[1.03] ${
                    isHovered ? 'z-30' : isCenter ? 'z-20' : 'z-10'
                  }`}
                >
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#081b45] bg-[#eef1f6] px-2.5 py-0.5 rounded border border-[#d8dde7] shrink-0 whitespace-nowrap">
                      {card.category}
                    </span>

                    <span className="text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {card.badge}
                    </span>
                  </div>

                  {/* Browser Window Frame with Screenshot */}
                  <div className="rounded-xl border border-[#d8dde7] bg-[#f8f9fb] shadow-2xs overflow-hidden p-2 mb-3.5">
                    {/* Browser Pill Header */}
                    <div className="px-2.5 py-1.5 bg-[#edf0f5] rounded-t-lg border-b border-[#e2e6ed] flex items-center justify-between mb-1.5 text-xs text-[#6b7386]">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#ef4646]" />
                        <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                        <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                      </div>
                      <span className="text-[9px] font-mono text-[#4b5563]">1080p Live</span>
                    </div>

                    {/* Screenshot Canvas */}
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#eaedf3] bg-white">
                      <picture>
                        <source srcSet={card.webp} type="image/webp" />
                        <Image
                          src={card.screen}
                          alt={card.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </picture>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-[#081b45]/0 group-hover:bg-[#081b45]/15 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#081b45] flex items-center gap-1.5 shadow-md border border-[#d8dde7]">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content & Direct Action Link */}
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-[#0b0d12] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#404555] leading-relaxed line-clamp-2">
                      {card.description}
                    </p>

                    <div className="pt-2.5 flex items-center justify-between border-t border-[#eaedf3]">
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#081b45] hover:text-[#18aae3] transition-colors"
                      >
                        <span>Open Screen</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <span className="text-[10px] font-mono text-[#6b7386]">Live OS</span>
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
