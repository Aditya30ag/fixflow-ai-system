import type { Metadata } from 'next';
import { SpaceStarfield } from '@/components/landing/SpaceStarfield';
import { FloatingNavbar } from '@/components/landing/FloatingNavbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { TrustStrip } from '@/components/landing/TrustStrip';
import { StatsRow } from '@/components/landing/StatsRow';
import { BentoFeatures } from '@/components/landing/BentoFeatures';
import { ShowcaseSection } from '@/components/landing/ShowcaseSection';
import { HowItWorksSteps } from '@/components/landing/HowItWorksSteps';
import { TestimonialsMarquee } from '@/components/landing/TestimonialsMarquee';
import { FaqAccordion } from '@/components/landing/FaqAccordion';
import { FinalCta } from '@/components/landing/FinalCta';
import { Footer } from '@/components/landing/Footer';
import { landingData } from '@/components/landing/landingData';

export const metadata: Metadata = {
  title: landingData.meta.title,
  description: landingData.meta.description,
  openGraph: {
    title: landingData.meta.title,
    description: landingData.meta.description,
    type: 'website',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans antialiased overflow-x-hidden bg-grain relative">
      {/* Background Space Starfield & Celestial Atmosphere (Fixed in viewport at z-0) */}
      <SpaceStarfield />

      {/* 1. Floating Pill Navbar */}
      <FloatingNavbar />

      {/* Main Content Layout with explicit z-10 stacking */}
      <main className="relative z-10">
        {/* 2. Hero Section with 3D perspective mockup */}
        <HeroSection />

        {/* 3. Trust Strip Marquee with faded edges */}
        <TrustStrip />

        {/* 4. Stats Row with animated count-up numbers */}
        <StatsRow />

        {/* 5. Bento Grid Features with cursor glow */}
        <BentoFeatures />

        {/* 6. Showcase / Work with sliding arrow hover */}
        <ShowcaseSection />

        {/* 7. How It Works with numbered connected steps */}
        <HowItWorksSteps />

        {/* 8. Testimonials Marquee */}
        <TestimonialsMarquee />

        {/* 9. Accessible FAQ Accordion */}
        <FaqAccordion />

        {/* 10. Final CTA Full-Width Block */}
        <FinalCta />
      </main>

      {/* 11. Footer with big wordmark and status indicator */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
