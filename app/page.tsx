import type { Metadata } from 'next';
import { LandingNavbar } from '@/components/landing/Navbar';
import { LandingHero } from '@/components/landing/HeroSection';
import { LandingLogoTicker } from '@/components/landing/LogoTicker';
import { LandingShowcase } from '@/components/landing/InteractiveShowcase';
import { LandingFeatures } from '@/components/landing/BentoFeatures';
import { LandingAgentRoster } from '@/components/landing/AgentRoster';
import { LandingDualPortals } from '@/components/landing/DualPortals';
import { LandingRoiCalculator } from '@/components/landing/InteractiveRoiCalculator';
import { LandingTestimonials } from '@/components/landing/Testimonials';
import { LandingPricing } from '@/components/landing/PricingSection';
import { LandingFaq } from '@/components/landing/FaqSection';
import { LandingCtaBanner } from '@/components/landing/CtaBanner';
import { LandingFooter } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'FixFlow AI — Autonomous Property Management & AI Voice Dispatch',
  description: 'Automate 2 AM tenant repair emergencies, lease renewal negotiations, rent collections, and contractor dispatching with 24/7 conversational voice agents.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Fixed/Sticky Top Navigation */}
      <LandingNavbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <LandingHero />

        {/* Enterprise Brand Trust Bar */}
        <LandingLogoTicker />

        {/* Interactive Showcase & Real-Time Voice/Dashboard Simulator */}
        <LandingShowcase />

        {/* Bento Grid Features */}
        <LandingFeatures />

        {/* Autonomous AI Agents Roster */}
        <LandingAgentRoster />

        {/* Dual Portal Architecture (Executive vs Tenant) */}
        <LandingDualPortals />

        {/* Dynamic ROI & Cost Reduction Calculator */}
        <LandingRoiCalculator />

        {/* Real Customer Testimonials */}
        <LandingTestimonials />

        {/* Pricing Tiers with Annual Toggle */}
        <LandingPricing />

        {/* Frequently Asked Questions */}
        <LandingFaq />

        {/* Pre-Footer Action Banner */}
        <LandingCtaBanner />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
