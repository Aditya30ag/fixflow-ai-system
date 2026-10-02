'use client';

import React from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  Wrench, 
  FileText, 
  CreditCard, 
  Users2, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Bot,
  Clock,
  Layers
} from 'lucide-react';

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Complete Proptech Operating System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineered to Run Properties on Autopilot
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Every operational bottleneck — from chaotic after-hours emergency calls to overdue rent collection — 
            automated with specialized AI agents.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: 24/7 AI Voice Telephony (Large / Featured) */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white border border-blue-200/80 hover:border-blue-400 transition-all group relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                &lt; 400ms Neural Latency
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Conversational Voice Telephony & Instant Triage
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xl">
              Equipped with human-grade speech models (ElevenLabs & Cartesia), our voice agents answer tenant calls 
              on the first ring. They empathize, diagnose plumbing or heating emergencies, guide basic shutoffs, 
              and instantly generate audio transcripts and contractor work orders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Zero phone tag or voicemail queues</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Sentiment & urgency classification</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Synchronized with PMS work orders</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link 
                href="/ai-call-logs" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 group-hover:translate-x-1 transition-all"
              >
                <span>Browse AI Voice Call Logs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Guided Tenant Self-Fix (Saves Callout Fees) */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 transition-all group flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-xs">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Save $180/call
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Self-Service First Repair Portal
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Over 60% of common maintenance calls (garbage disposal jam, breaker trip, radiator air lock) 
                can be solved by tenants within 3 minutes through guided step-by-step diagnostic checklists.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/tenant/repair"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 group-hover:translate-x-1 transition-all"
              >
                <span>Explore Martin & Co Tenant Flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Autonomous Lease Renewals */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 transition-all group flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  +28% Retention
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Predictive Lease Rollover Engine
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The renewal agent reaches out to residents 60 and 30 days prior to lease expiration with 
                personalized market-rate offers, dynamic concession levers, and 1-click digital renewals.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/leases"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
              >
                <span>View Lease Management</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Frictionless Rent Collection & Reminders */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 transition-all group flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shadow-xs">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  98.6% On-Time
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Automated Rent Ledger & Smart Reminders
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Polite, automated SMS reminders and voice calls for past-due balances. Includes instant Stripe 
                and ACH checkout links with immediate payment confirmation receipts.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 group-hover:translate-x-1 transition-all"
              >
                <span>Check Revenue Analytics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 5: Vetted Contractor & Vendor Dispatch */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 transition-all group flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shadow-xs">
                  <Users2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  Verified Insured
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Contractor Dispatch & Verification
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                When a technician visit is required, FixFlow automatically verifies contractor general liability insurance, 
                checks schedule availability, and routes keys via smart lock guest passes.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/report-issue"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-800 group-hover:translate-x-1 transition-all"
              >
                <span>Test Issue Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 6: Portfolio NOI & Labor Hours Saved */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 transition-all group flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-xs">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  Real-Time NOI
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Executive Portfolio Intelligence
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Gain instant clarity on property revenue yields, staff labor hours saved, 
                and predictive asset wear. Export clean audit reports for partners and lenders in seconds.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-800 group-hover:translate-x-1 transition-all"
              >
                <span>View Financial Statements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
