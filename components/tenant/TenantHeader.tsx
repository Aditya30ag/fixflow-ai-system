'use client';

import React from 'react';
import Link from 'next/link';
import { Wrench, Shield, ArrowLeft } from 'lucide-react';

export function TenantHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xs border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <Link href="/tenant/repair" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white shadow-sm shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-slate-900 leading-tight">
              Martin & Co
            </span>
            <span className="text-xs text-slate-400 font-medium leading-none mt-0.5">
              Repair Services
            </span>
          </div>
        </Link>

        {/* Right: AI Online Status & Back to Dashboard */}
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>AI Online</span>
          </div>

          <Link
            href="/dashboard"
            className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Admin Staff Portal</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
