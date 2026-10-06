import type { Metadata } from 'next';
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
    <div className="min-h-screen bg-[#f5f5f7] text-[#232533] selection:bg-[#081b45] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Sticky Navbar */}
      <FloatingNavbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 2. Hero Section with Signature Deepdale Pill Enclosure & Live Call Card */}
        <HeroSection />

        {/* 3. Trusted-by Smooth Marquee */}
        <TrustStrip />

        {/* 4. Institutional Stats Row */}
        <StatsRow />

        {/* 5. Core Capabilities (Signature Deepdale #040611 Obsidian Bento with Inset Rim Glow) */}
        <BentoFeatures />

        {/* 6. Live Environments Dual Showcase */}
        <ShowcaseSection />

        {/* 7. How It Works Timeline Steps */}
        <HowItWorksSteps />

        {/* 8. Operator Testimonials */}
        <TestimonialsMarquee />

        {/* 9. Accessible FAQ Accordion */}
        <FaqAccordion />

        {/* 10. High-Contrast Final CTA */}
        <FinalCta />
      </main>

      {/* 11. Institutional Enterprise Footer */}
      <Footer />
    </div>
  );
}
