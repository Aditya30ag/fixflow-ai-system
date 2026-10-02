'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  Wrench, 
  Play,
  Zap,
  Building,
  Star
} from 'lucide-react';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white">
      {/* Background Ambient Lighting & Grid Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-blue-100/70 via-indigo-100/50 to-sky-100/40 blur-[120px] rounded-full" />
        <div className="absolute top-60 left-1/4 w-[350px] h-[250px] bg-cyan-100/50 blur-[100px] rounded-full" />
        <div className="absolute top-40 right-1/4 w-[350px] h-[250px] bg-blue-100/50 blur-[100px] rounded-full" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-medium mb-8 shadow-xs hover:border-slate-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-blue-600 font-semibold">Autonomous Proptech 2.4</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Zero-Touch Maintenance & AI Voice Dispatch</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-600 ml-0.5" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            The Autonomous OS for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
              Modern Property Portfolios
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Turn late-night 2 AM plumbing emergencies, lease renewals, tenant rent follow-ups, 
            and technician work orders into effortless, autonomous workflows with 
            conversational AI voice agents and self-service diagnostics.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Live Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/tenant/repair"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 font-semibold text-base border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2.5 shadow-sm"
            >
              <Wrench className="w-4 h-4 text-indigo-600" />
              <span>Try Tenant Repair Portal</span>
            </Link>

            <a
              href="#showcase"
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors flex items-center justify-center gap-2 hover:bg-slate-100"
            >
              <Play className="w-3.5 h-3.5 text-blue-600 fill-blue-600/20" />
              <span>Watch Interactive Demo</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-slate-500 flex-wrap">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Live interactive system
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              No credit card required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Instant browser access
            </span>
          </div>

          {/* Social Proof / Stats Strip */}
          <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-200 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-1">
                <span>&lt; 1.2s</span>
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-xs text-slate-500 mt-1 font-medium">AI Call Response Time</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-200 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-1">
                <span>64%</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-xs text-slate-500 mt-1 font-medium">False Dispatches Saved</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-200 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-1">
                <span>15,000+</span>
                <Building className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs text-slate-500 mt-1 font-medium">Units Managed Autonomously</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-200 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-1">
                <span>4.9 / 5</span>
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
              <span className="text-xs text-slate-500 mt-1 font-medium">Resident CSAT Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
