import React from 'react';
import { cn } from '@/lib/utils';

export type StatusType =
  | 'Active'
  | 'Expiring Soon'
  | 'Expired'
  | 'Completed'
  | 'Missed'
  | 'In Progress'
  | 'Pending'
  | 'Resolved'
  | 'Paid'
  | 'Overdue'
  | 'Urgent'
  | 'High'
  | 'Medium'
  | 'Low'
  | 'Positive'
  | 'Neutral'
  | 'Frustrated'
  | string;

interface StatusBadgeProps {
  status: StatusType;
  showDot?: boolean;
  className?: string;
}

export function StatusBadge({ status, showDot = true, className }: StatusBadgeProps) {
  let badgeStyles = 'bg-slate-100 text-slate-700 border-slate-200';
  let dotStyles = 'bg-slate-400';

  const normalized = status.toLowerCase();

  if (['active', 'completed', 'paid', 'resolved', 'positive'].includes(normalized)) {
    badgeStyles = 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
    dotStyles = 'bg-emerald-500';
  } else if (['expiring soon', 'in progress', 'pending', 'medium'].includes(normalized)) {
    badgeStyles = 'bg-amber-50 text-amber-700 border-amber-200/80';
    dotStyles = 'bg-amber-500';
  } else if (['expired', 'missed', 'overdue', 'urgent', 'high', 'frustrated'].includes(normalized)) {
    badgeStyles = 'bg-rose-50 text-rose-700 border-rose-200/80';
    dotStyles = 'bg-rose-500';
  } else if (['low', 'neutral'].includes(normalized)) {
    badgeStyles = 'bg-blue-50 text-blue-700 border-blue-200/80';
    dotStyles = 'bg-blue-500';
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors',
        badgeStyles,
        className
      )}
    >
      {showDot && (
        <span className={cn('w-1.5 h-1.5 rounded-full', dotStyles)} />
      )}
      <span>{status}</span>
    </span>
  );
}
