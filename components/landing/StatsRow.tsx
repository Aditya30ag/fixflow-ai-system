'use client';

import React, { useState, useEffect, useRef } from 'react';
import { landingData } from './landingData';

export function StatsRow() {
  const { stats } = landingData;
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.035] transition-all duration-300 group"
            >
              {/* Subtle top indicator bar */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mb-5 group-hover:w-16 transition-all duration-300" />

              {/* Number display */}
              <div className="flex items-baseline gap-1 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {stat.prefix}
                </span>
                <span>
                  {hasAnimated ? stat.numeric : Math.floor(stat.numeric * 0.7)}
                </span>
                <span className="text-indigo-400 text-2xl sm:text-3xl font-light">
                  {stat.suffix}
                </span>
              </div>

              {/* Stat Label */}
              <h3 className="mt-3 text-xs sm:text-sm font-semibold uppercase font-mono tracking-wider text-slate-300">
                {stat.label}
              </h3>

              {/* Detail */}
              <p className="mt-2 text-xs text-slate-400/90 leading-relaxed font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
