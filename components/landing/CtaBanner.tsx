'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Wrench, ShieldCheck, Zap } from 'lucide-react';

export function LandingCtaBanner() {
  return (
    <section className="py-20 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl shadow-blue-600/20 text-white">
          {/* Subtle Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 text-xs font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Ready for Immediate Deployment</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Put Your Property Portfolio on Autopilot?
            </h2>

            <p className="mt-4 text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Join leading property managers who resolve maintenance calls in seconds, 
              boost tenant retention by 28%, and save hundreds of hours every month.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Launch Executive Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tenant/repair"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-blue-700/60 hover:bg-blue-700/80 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4 text-blue-200" />
                <span>Test Tenant Self-Service</span>
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-blue-100 flex-wrap">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                No setup fee or lock-in contract
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-300" />
                Full interactive demo running now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
