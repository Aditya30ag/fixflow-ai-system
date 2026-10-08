import type { Metadata } from 'next';
import { SmoothScrollProvider } from '@/components/landing/SmoothScrollProvider';
import { ScrollProgressBar } from '@/components/landing/ScrollProgressBar';
import { FloatingNavbar } from '@/components/landing/FloatingNavbar';
import { RealProductHero } from '@/components/landing/RealProductHero';
import { TrustMarquee } from '@/components/landing/TrustMarquee';
import { RealProductFeatures } from '@/components/landing/RealProductFeatures';
import { ShowcaseSection } from '@/components/landing/ShowcaseSection';
import { RealHowItWorks } from '@/components/landing/RealHowItWorks';
import { LandingTestimonials } from '@/components/landing/Testimonials';
import { LandingFaq } from '@/components/landing/FaqSection';
import { FinalCta } from '@/components/landing/FinalCta';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'FixNet — Property Management & 24/7 AI Voice Dispatch',
  description:
    'Manage your entire property portfolio with real-time software. 24/7 automated emergency phone dispatch, repair work orders, and digital lease renewals.',
  openGraph: {
    title: 'FixNet — Property Management & 24/7 AI Voice Dispatch',
    description:
      'Manage your entire property portfolio with real-time software. 24/7 automated emergency phone dispatch, repair work orders, and digital lease renewals.',
    type: 'website',
  },
};

export default function LandingPage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#f5f5f7] text-[#232533] selection:bg-[#081b45] selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Global Viewport Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* 1. Header / Navbar with Compact State & Section Spy */}
        <FloatingNavbar />

        <main className="relative z-10">
          {/* 2. Hero: Staggered words, 3D tilt flattening, chips & scroll cue */}
          <RealProductHero />

          {/* 3. Trust Marquee: Dual-row infinite ticker */}
          <TrustMarquee />

          {/* 4. Feature Sections: 4 distinct alternating cards & Voice Dispatch widget */}
          <RealProductFeatures />

          {/* 5. Software Showcase: Expanded 3D dealt deck with cursor tilt */}
          <ShowcaseSection />

          {/* 6. How It Works: Scroll-pinned card stack on desktop & full-screen modal */}
          <RealHowItWorks />

          {/* 7. Proof / Customer Testimonials: Carousel with swipe & counter */}
          <LandingTestimonials />

          {/* 8. FAQ: Smooth accordion with rotating plus icon */}
          <LandingFaq />

          {/* 9. Final CTA: Heading scale/fade entrance & magnetic buttons */}
          <FinalCta />
        </main>

        {/* 10. Footer with pulsing operational indicator */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
