import type { Metadata } from 'next';
import { FloatingNavbar } from '@/components/landing/FloatingNavbar';
import { RealProductHero } from '@/components/landing/RealProductHero';
import { RealHowItWorks } from '@/components/landing/RealHowItWorks';
import { RealProductFeatures } from '@/components/landing/RealProductFeatures';
import { FinalCta } from '@/components/landing/FinalCta';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'FixNet — Property Management & 24/7 AI Voice Dispatch',
  description: 'Manage your entire property portfolio with real-time software. 24/7 automated emergency phone dispatch, repair work orders, and digital lease renewals.',
  openGraph: {
    title: 'FixNet — Property Management & 24/7 AI Voice Dispatch',
    description: 'Manage your entire property portfolio with real-time software. 24/7 automated emergency phone dispatch, repair work orders, and digital lease renewals.',
    type: 'website',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#232533] selection:bg-[#081b45] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Header / Navbar */}
      <FloatingNavbar />

      <main className="relative z-10">
        {/* 2. Hero: One-line plain English value proposition + Real Dashboard Screenshot */}
        <RealProductHero />

        {/* 3. How It Works: 3 simple steps with real software screenshots */}
        <RealHowItWorks />

        {/* 5. Feature Sections: Real screenshots per feature with plain language captions */}
        <RealProductFeatures />

        {/* 6. Simple Final CTA */}
        <FinalCta />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
