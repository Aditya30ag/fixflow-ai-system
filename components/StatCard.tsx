import React from 'react';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  subtext?: string;
}

export function StatCard({
  title,
  value,
  trend,
  isPositive = true,
  icon: Icon,
  iconColor = 'text-blue-600',
  iconBg = 'bg-blue-50',
  subtext,
}: StatCardProps) {
  return (
    <div className="card-base card-hover p-5 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {title}
          </span>
          <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </div>
        </div>
        <div className={cn('p-3 rounded-xl', iconBg)}>
          <Icon className={cn('w-5 h-5', iconColor)} />
        </div>
      </div>

      {(trend || subtext) && (
        <div className="mt-4 flex items-center gap-2 pt-2 border-t border-slate-100">
          {trend && (
            <span
              className={cn(
                'inline-flex items-center text-xs font-semibold px-1.5 py-0.5 rounded',
                isPositive
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-rose-700 bg-rose-50'
              )}
            >
              {isPositive ? (
                <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
              ) : (
                <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
              )}
              {trend}
            </span>
          )}
          {subtext && (
            <span className="text-xs text-slate-500 truncate">{subtext}</span>
          )}
        </div>
      )}
    </div>
  );
}
