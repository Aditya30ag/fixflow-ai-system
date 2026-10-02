'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  Zap,
  Users,
  Bot
} from 'lucide-react';

export function LandingDualPortals() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Dual-Portal Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            One Core Engine. Two Tailored Experiences.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            High-density management tools for asset managers and effortless, 
            zero-login self-service repair diagnostics for residents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Portal: Executive Command Center */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-blue-200 hover:border-blue-400 transition-all flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">For Asset Managers & Landlords</span>
                    <h3 className="text-2xl font-bold text-slate-900">Executive Command Center</h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Comprehensive oversight across all residential and commercial buildings. 
                Track lease expiries, audit AI voice call logs, approve contractor bids, 
                and analyze portfolio yield in real time.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Interactive financial reports with rent collection vs target budget</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Full audio replay simulator with speaker sentiment analysis</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Multi-step lease agreement generator & tenant dossiers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Global automation switch to pause or throttle AI telephony bots</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Route: /dashboard</span>
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 group-hover:translate-x-0.5"
              >
                <span>Launch Command Center</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Portal: Martin & Co Tenant Repair Services */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-indigo-200 hover:border-indigo-400 transition-all flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-xs">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">For Residents & Tenants</span>
                    <h3 className="text-2xl font-bold text-slate-900">Martin & Co Tenant Portal</h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A clean, white-label resident portal requiring zero passwords or downloads. 
                Tenants report plumbing, heating, electrical, and lock issues via interactive 
                AI troubleshooting with one-tap technician booking.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>12 smart service categories (Plumbing, Heating, Appliances, Pest, Locks...)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Turn-by-turn interactive troubleshooting chat with diagnostic steps</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Photo & video diagnostics upload for instant contractor context</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Direct technician appointment window booking when self-fix fails</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Route: /tenant/repair</span>
              <Link
                href="/tenant/repair"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 group-hover:translate-x-0.5"
              >
                <span>Open Tenant Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
