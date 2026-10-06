'use client';

import React, { useState, useEffect, useRef } from 'react';
import { landingData } from './landingData';
import { Container } from './Primitives';

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
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-24 bg-[#f5f5f7]">
      <Container size="default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative p-7 sm:p-8 rounded-2xl bg-white border border-[#d8dde7] shadow-[0_8px_24px_rgba(18,24,35,0.04)] hover:shadow-[0_16px_36px_rgba(18,24,35,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Subtle top indicator bar */}
              <div>
                <div className="w-8 h-1 rounded-full bg-[#081b45] mb-6 group-hover:w-14 transition-all duration-300" />

                {/* Number display */}
                <div className="font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight text-[#0b0d12] flex items-baseline gap-0.5">
                  <span className="text-[#081b45]">{stat.prefix}</span>
                  <span>
                    {idx === 3
                      ? '24/7'
                      : hasAnimated
                      ? stat.numeric
                      : Math.floor(stat.numeric * 0.7)}
                  </span>
                  <span className="text-[#18aae3] text-2xl sm:text-3xl font-bold">
                    {idx === 3 ? '/365' : stat.suffix}
                  </span>
                </div>

                {/* Stat Label */}
                <h3 className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1a2232]">
                  {stat.label}
                </h3>
              </div>

              {/* Detail Description */}
              <p className="mt-4 text-xs sm:text-[13px] text-[#6b7386] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
