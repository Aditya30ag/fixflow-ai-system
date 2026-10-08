'use client';

import React from 'react';
import { Cpu, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

interface MarqueeItem {
  name: string;
  badge: string;
  category?: string;
}

const row1Items: MarqueeItem[] = [
  { name: 'ElevenLabs Telephony', badge: 'Ultra-Realistic Speech', category: 'Voice AI' },
  { name: 'Cartesia Sonic', badge: 'Sub-400ms Audio Latency', category: 'Telephony' },
  { name: 'Twilio Communications', badge: 'PSTN Carrier Routing', category: 'Infrastructure' },
  { name: 'AppFolio PMS', badge: 'Real-Time Sync', category: 'Integration' },
  { name: 'Yardi Voyager', badge: 'Lease & Rent Rolls', category: 'Enterprise' },
  { name: 'Buildium Connect', badge: 'Tenant Records', category: 'Integration' },
  { name: 'Stripe Treasury', badge: 'Instant Rent Collection', category: 'Payments' },
];

const row2Items: MarqueeItem[] = [
  { name: 'Greystar Residential', badge: '8,400+ Managed Doors', category: 'Partner' },
  { name: 'AvalonBay Communities', badge: 'Multi-Family Enterprise', category: 'Partner' },
  { name: 'Lincoln Property Co', badge: 'Commercial & Multi', category: 'Partner' },
  { name: 'Martin & Co Estates', badge: 'Tenant Network', category: 'Partner' },
  { name: 'Starwood Capital', badge: 'Portfolio Operations', category: 'Asset Mgmt' },
  { name: 'Cushman & Wakefield', badge: 'Regional Portfolios', category: 'Partner' },
  { name: 'Apex Priority Plumbing', badge: 'Verified 24/7 SLA', category: 'Vendor Network' },
];

export function TrustMarquee() {
  return (
    <section className="py-14 bg-white/70 border-y border-[#d8dde7] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f4fd] border border-[#d4e1fb] text-[#081b45] text-[11px] font-mono font-bold uppercase tracking-wider">
          <span>[ ECOSYSTEM &amp; INTEGRATIONS ]</span>
        </div>
        <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6b7386]">
          Connected to industry-standard telephony carriers, voice models, and property software
        </p>
      </div>

      {/* Two Row Infinite Marquee Container with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] space-y-3.5">
        {/* Row 1 (Left to Right / Normal Direction) */}
        <div className="flex w-max gap-3.5 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...row1Items, ...row1Items, ...row1Items].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#d8dde7] shadow-2xs hover:border-[#081b45]/40 hover:shadow-xs transition-all cursor-default"
            >
              <div className="w-5 h-5 rounded-md bg-[#eef1f6] flex items-center justify-center text-[#081b45]">
                <Zap className="w-3 h-3" />
              </div>
              <span className="text-xs font-bold text-[#111827]">{item.name}</span>
              <span className="text-[10px] font-mono font-medium text-[#081b45] bg-[#f0f4fd] px-2 py-0.5 rounded-full border border-[#d4e1fb]">
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Right to Left / Reverse Direction) */}
        <div className="flex w-max gap-3.5 animate-marquee-reverse hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...row2Items, ...row2Items, ...row2Items].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#d8dde7] shadow-2xs hover:border-[#081b45]/40 hover:shadow-xs transition-all cursor-default"
            >
              <div className="w-5 h-5 rounded-md bg-[#eef1f6] flex items-center justify-center text-[#081b45]">
                <ShieldCheck className="w-3 h-3 text-[#22c55e]" />
              </div>
              <span className="text-xs font-bold text-[#111827]">{item.name}</span>
              <span className="text-[10px] font-mono font-medium text-[#4b5563] bg-[#f3f4f6] px-2 py-0.5 rounded-full border border-[#e5e7eb]">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 36s linear infinite;
        }
      `}</style>
    </section>
  );
}
