'use client';

import React from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { Building2, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const { footer } = landingData;

  return (
    <footer className="pt-20 pb-12 border-t border-[#23272f] bg-[#121419] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#23272f]">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#bef033] to-[#a8d82a] p-[1px]">
                <div className="w-full h-full rounded-full bg-[#121419] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#bdf033]" />
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-[#bdf033] transition-colors">
                {footer.wordmark}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              {footer.tagline}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-slate-400">
                All Telephony Voice Nodes Operational
              </span>
            </div>
          </div>

          {/* Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footer.columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  {col.title}
                </h4>
                <ul className="space-y-2 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-0.5 group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#bdf033]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Large Editorial Wordmark */}
        <div className="py-12 select-none pointer-events-none opacity-10 flex justify-center">
          <span className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white">
            FIXFLOW
          </span>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/settings" className="hover:text-slate-300 transition-colors">
              Security & Telephony SLA
            </Link>
            <Link href="/settings" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
