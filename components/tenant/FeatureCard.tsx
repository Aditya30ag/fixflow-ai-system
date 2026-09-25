'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export function FeatureCard({
  title,
  subtitle,
  icon: Icon,
  iconColor,
  iconBg,
}: FeatureCardProps) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-4">
      <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs', iconBg)}>
        <Icon className={cn('w-5 h-5', iconColor)} />
      </div>
      <div>
        <h4 className="font-bold text-sm text-slate-900 leading-snug">
          {title}
        </h4>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
