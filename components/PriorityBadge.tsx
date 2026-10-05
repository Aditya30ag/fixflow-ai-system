import React from 'react';
import { AlertOctagon, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IssuePriority } from '@/lib/issuesStore';

interface PriorityBadgeProps {
  priority: IssuePriority | string;
  showIcon?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export function PriorityBadge({
  priority,
  showIcon = true,
  className,
  size = 'sm',
}: PriorityBadgeProps) {
  const norm = (priority || '').toLowerCase();

  let styles = 'bg-slate-100 text-slate-700 border-slate-200';
  let IconComponent = Info;

  if (norm === 'urgent') {
    styles = 'bg-rose-50 text-rose-700 border-rose-200 ring-1 ring-rose-200/50 font-semibold';
    IconComponent = AlertOctagon;
  } else if (norm === 'high') {
    styles = 'bg-orange-50 text-orange-700 border-orange-200 font-semibold';
    IconComponent = AlertTriangle;
  } else if (norm === 'medium') {
    styles = 'bg-amber-50 text-amber-700 border-amber-200 font-medium';
    IconComponent = AlertCircle;
  } else if (norm === 'low') {
    styles = 'bg-slate-100 text-slate-600 border-slate-200 font-medium';
    IconComponent = Info;
  }

  const iconSizes = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5';
  const paddingSizes = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border transition-colors shrink-0',
        paddingSizes,
        styles,
        className
      )}
    >
      {showIcon && <IconComponent className={cn(iconSizes, 'shrink-0')} />}
      <span>{priority}</span>
    </span>
  );
}
