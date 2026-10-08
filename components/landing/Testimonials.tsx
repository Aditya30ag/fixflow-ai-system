'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Container } from './Primitives';

const testimonials = [
  {
    quote:
      'FixNet eliminated 73% of our middle-of-the-night emergency calls. When a burst pipe occurred at 2:30 AM, Elena guided the tenant through shutting off the main valve in 40 seconds, then dispatched our plumber automatically.',
    author: 'Rachel Vance',
    title: 'VP of Asset Management',
    company: 'Apex Residential Holdings (420 Units)',
    rating: 5,
    highlight: 'Saved $34,000 in water damage & callouts',
  },
  {
    quote:
      'Our maintenance staff was drowning in routine boiler and breaker calls. With FixNet’s step-by-step diagnostic portal, tenants resolve simple issues themselves before we spend $200 on an unnecessary truck roll.',
    author: 'David Thorne',
    title: 'Director of Property Operations',
    company: 'Martin & Co Estates (850 Doors)',
    rating: 5,
    highlight: 'Cut monthly contractor dispatches by 54%',
  },
  {
    quote:
      'The autonomous lease renewal bot Lucas closed 19 renewals in our first month alone without our team lifting a finger. The voice sounds completely human — tenants don’t even realize they’re talking to AI.',
    author: 'Samantha Lin',
    title: 'Senior Portfolio Manager',
    company: 'Vanguard Living Properties (1,200 Units)',
    rating: 5,
    highlight: '+28% higher lease renewal rate',
  },
];

export function LandingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white text-[#232533] border-t border-[#d8dde7] relative">
      <Container size="default">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f4fd] border border-[#d4e1fb] text-[#081b45] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>[ 03 // PROOF &amp; REVIEWS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0d12] tracking-tight">
              Trusted by demanding property operators
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6b7386] max-w-xl">
              See how modern landlords and property management teams scale doors without adding headcount.
            </p>
          </div>

          {/* Carousel Controls & Counter */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="font-mono text-sm font-semibold text-[#081b45]">
              0{currentIndex + 1} <span className="text-[#9ca3af]">/ 0{testimonials.length}</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl bg-white border border-[#d8dde7] flex items-center justify-center text-[#232533] hover:bg-[#f3f5f9] hover:border-[#081b45]/40 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl bg-black border border-black flex items-center justify-center text-white hover:bg-[#1f2430] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Card with touch swipe */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-3xl bg-[#f8f9fb] border border-[#d8dde7] p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_rgba(18,24,35,0.06)] overflow-hidden transition-all duration-300"
        >
          <Quote className="w-12 h-12 text-[#081b45]/10 absolute top-8 right-8 pointer-events-none" />

          <div className="max-w-4xl space-y-6">
            {/* Rating Stars & Highlight Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f0f4fd] text-[#081b45] border border-[#d4e1fb]">
                {current.highlight}
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#0b0d12] leading-relaxed tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author Profile */}
            <div className="pt-4 border-t border-[#eaedf3] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#081b45] text-white flex items-center justify-center font-bold text-base shadow-sm">
                {current.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <h4 className="font-extrabold text-[#0b0d12] text-base">{current.author}</h4>
                <p className="text-xs text-[#6b7386]">{current.title}</p>
                <p className="text-xs font-semibold text-[#081b45]">{current.company}</p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-[#081b45]' : 'w-2 bg-[#d8dde7] hover:bg-[#a6b0c3]'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
