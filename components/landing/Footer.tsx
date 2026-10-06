'use client';

import React from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { Container } from './Primitives';
import { Building2, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const { footer } = landingData;

  return (
    <footer className="pt-20 pb-12 border-t border-[#d8dde7] bg-[#f0f2f6] text-[#232533] relative overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#d8dde7]">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-[#081b45] text-white flex items-center justify-center shadow-sm">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-[#081b45]">
                {footer.wordmark}
              </span>
            </Link>

            <p className="text-sm text-[#6b7386] max-w-sm leading-relaxed">
              {footer.tagline}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-[#404555]">
                All Telephony Voice Nodes Operational
              </span>
            </div>
          </div>

          {/* Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footer.columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#081b45] font-bold">
                  {col.title}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[#6b7386] hover:text-[#081b45] transition-colors duration-150 inline-flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#081b45]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Large Editorial Wordmark */}
        <div className="py-12 select-none pointer-events-none opacity-5 flex justify-center">
          <span className="font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-[#081b45]">
            FIXFLOW
          </span>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7386] font-mono">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/settings" className="hover:text-[#081b45] transition-colors">
              Security & Telephony SLA
            </Link>
            <Link href="/settings" className="hover:text-[#081b45] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
