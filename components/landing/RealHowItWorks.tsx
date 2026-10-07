'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeader } from './Primitives';

interface StepItem {
  step: string;
  title: string;
  description: string;
  screen: string;
  pngFallback: string;
  alt: string;
  highlights: string[];
}

const steps: StepItem[] = [
  {
    step: '01',
    title: 'Tenant reports an issue or calls the hotline',
    description: 'A tenant can call your 24/7 automated line or submit a photo through the web link. The voice agent answers right away without any wait time.',
    screen: '/screens/tenant_repair.webp',
    pngFallback: '/screens/tenant_repair.png',
    alt: 'FixNet tenant repair portal on smartphone and desktop for quick issue submission',
    highlights: ['Zero hold time', 'Voice or web photo submission', 'Instant ticket creation'],
  },
  {
    step: '02',
    title: 'Automated triage and vendor assignment',
    description: 'FixNet diagnoses the issue, checks emergency rules (like shutting off a water valve), and automatically notifies an insured contractor.',
    screen: '/screens/ai_dispatch.webp',
    pngFallback: '/screens/ai_dispatch.png',
    alt: 'FixNet AI voice dispatch logs showing complete phone audio recordings and contractor dispatches',
    highlights: ['Automated severity score', 'Emergency safety instructions', 'Dispatches preferred vendor'],
  },
  {
    step: '03',
    title: 'Everything updates on your dashboard',
    description: 'You see the completed repair details, contractor invoices, and unit status updated on your dashboard without making a single phone call.',
    screen: '/screens/issues.webp',
    pngFallback: '/screens/issues.png',
    alt: 'FixNet issues management workspace showing active maintenance tickets and repair progress',
    highlights: ['Live status timeline', 'Digital invoice tracking', 'Complete audit trail'],
  },
];

export function RealHowItWorks() {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const selectedStep = activeStepIndex !== null ? steps[activeStepIndex] : null;

  const closeModal = useCallback(() => {
    setActiveStepIndex(null);
  }, []);

  const nextStep = useCallback(() => {
    if (activeStepIndex === null) return;
    setActiveStepIndex((prev) => ((prev! + 1) % steps.length));
  }, [activeStepIndex]);

  const prevStep = useCallback(() => {
    if (activeStepIndex === null) return;
    setActiveStepIndex((prev) => ((prev! - 1 + steps.length) % steps.length));
  }, [activeStepIndex]);

  // Handle ESC and Arrow key navigation
  useEffect(() => {
    if (activeStepIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextStep();
      if (e.key === 'ArrowLeft') prevStep();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStepIndex, closeModal, nextStep, prevStep]);

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white border-t border-[#d8dde7]">
      <Container size="default">
        <SectionHeader
          eyebrow="HOW IT WORKS"
          title="From tenant problem to finished repair in 3 simple steps"
          subtitle="No complicated software to learn. Click any card below to inspect the full high-resolution software screen in detail."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              onClick={() => setActiveStepIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveStepIndex(index);
                }
              }}
              className="group relative flex flex-col rounded-3xl bg-[#f8f9fb] border border-[#d8dde7] p-6 shadow-xs hover:shadow-xl hover:border-[#081b45]/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#081b45]"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#081b45] text-white shadow-xs">
                  STEP {item.step}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6b7386] group-hover:text-[#081b45] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Click to expand</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-extrabold text-xl text-[#0b0d12] tracking-tight mb-2 group-hover:text-[#081b45] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#404555] leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* Real UI Screenshot Card with Hover Overlay */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#d8dde7] bg-white shadow-xs group-hover:shadow-md transition-all">
                <picture>
                  <source srcSet={item.screen} type="image/webp" />
                  <Image
                    src={item.pngFallback}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </picture>

                {/* Subtle visual hover cue */}
                <div className="absolute inset-0 bg-[#081b45]/0 group-hover:bg-[#081b45]/15 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#d8dde7] flex items-center gap-2 text-xs font-semibold text-[#081b45]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Screen</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Aesthetic Modal Lightbox Dialog */}
      {selectedStep && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-step-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200"
        >
          {/* Backdrop with frosted blur */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-[#0b0d12]/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-white border border-white/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-6 py-4.5 bg-[#f8f9fb] border-b border-[#e2e6ed] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#081b45] text-white">
                  STEP {selectedStep.step}
                </span>
                <h3
                  id="modal-step-title"
                  className="font-bold text-base md:text-lg text-[#0b0d12] truncate"
                >
                  {selectedStep.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Step indicator pagination dots */}
                <div className="hidden sm:flex items-center gap-1.5 mr-2">
                  {steps.map((s, idx) => (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeStepIndex
                          ? 'w-6 bg-[#081b45]'
                          : 'w-2 bg-[#d8dde7] hover:bg-[#a6b0c3]'
                      }`}
                      aria-label={`Go to step ${s.step}`}
                    />
                  ))}
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#eef2f6] border border-[#d8dde7] flex items-center justify-center text-[#232533] hover:text-black transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable if viewport is compact */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#f5f6f9]">
              {/* Screenshot frame with browser styling */}
              <div className="rounded-2xl border border-[#d8dde7] bg-white shadow-sm overflow-hidden">
                {/* Browser top pill bar */}
                <div className="bg-[#f0f2f6] px-4 py-2.5 border-b border-[#e2e6ed] flex items-center justify-between text-xs text-[#6b7386]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-[#081b45] bg-white px-2.5 py-0.5 rounded-full border border-[#d8dde7]">
                    Live Software Preview
                  </span>
                </div>

                {/* Full Resolution Image View */}
                <div className="relative aspect-[16/10] w-full bg-[#fafbfc]">
                  <picture>
                    <source srcSet={selectedStep.screen} type="image/webp" />
                    <Image
                      src={selectedStep.pngFallback}
                      alt={selectedStep.alt}
                      fill
                      priority
                      sizes="(max-width: 1200px) 95vw, 1100px"
                      className="object-contain object-top"
                    />
                  </picture>
                </div>
              </div>

              {/* Informative details banner under the screenshot */}
              <div className="bg-white rounded-2xl p-5 border border-[#d8dde7] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b7386] mb-1">
                    What you are seeing:
                  </div>
                  <p className="text-sm text-[#232533] leading-relaxed">
                    {selectedStep.description}
                  </p>
                </div>

                {/* Highlights pill tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {selectedStep.highlights.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f4fd] border border-[#d4e1fb] text-[#081b45] text-xs font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066cc]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Carousel Step Controls */}
            <div className="px-6 py-3.5 bg-white border-t border-[#e2e6ed] flex items-center justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#404555] hover:text-[#0b0d12] hover:bg-[#f0f2f6] border border-[#d8dde7] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Step
              </button>

              <span className="text-xs font-mono text-[#6b7386]">
                Step {activeStepIndex! + 1} of {steps.length} &middot; Press <kbd className="px-1.5 py-0.5 rounded bg-[#edf0f5] border border-[#d8dde7] text-[10px]">Esc</kbd> to close
              </span>

              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#081b45] hover:bg-[#0c245c] shadow-xs transition-all"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

