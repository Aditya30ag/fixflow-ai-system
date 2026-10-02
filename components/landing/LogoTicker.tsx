'use client';

import React from 'react';
import { Building2, ShieldCheck, Home, KeyRound, Landmark, Hotel } from 'lucide-react';

export function LandingLogoTicker() {
  const logos = [
    { name: 'Apex Residential', icon: Building2 },
    { name: 'Martin & Co Estates', icon: Landmark },
    { name: 'Vanguard Living', icon: Home },
    { name: 'Sterling Asset Partners', icon: ShieldCheck },
    { name: 'Horizon Capital Real Estate', icon: Hotel },
    { name: 'MetroPoint Living', icon: KeyRound },
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Trusted by operators managing over 15,000+ doors across the United States & UK
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                  <Icon className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
