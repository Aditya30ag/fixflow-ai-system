'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  User,
  Wrench,
  Zap,
  Droplets,
  Flame,
  HelpCircle,
  PhoneCall,
  ExternalLink,
  Clock,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { Issue } from '@/lib/issuesStore';
import { PriorityBadge } from '@/components/PriorityBadge';
import { StatusBadge } from '@/components/StatusBadge';
import { cn } from '@/lib/utils';

interface IssueCardProps {
  issue: Issue;
  onSelect: (issue: Issue) => void;
  showPropertyLink?: boolean;
}

export function getCategoryIcon(category: string) {
  const norm = category.toLowerCase();
  if (norm.includes('plumb')) return Droplets;
  if (norm.includes('electr')) return Zap;
  if (norm.includes('hvac')) return Flame;
  if (norm.includes('appliance') || norm.includes('maint')) return Wrench;
  if (norm.includes('safe') || norm.includes('secur')) return ShieldAlert;
  return HelpCircle;
}

export function getCategoryBadgeClass(category: string) {
  const norm = category.toLowerCase();
  if (norm.includes('plumb')) return 'bg-sky-50 text-sky-700 border-sky-200';
  if (norm.includes('electr')) return 'bg-amber-50 text-amber-700 border-amber-200';
  if (norm.includes('hvac')) return 'bg-rose-50 text-rose-700 border-rose-200';
  if (norm.includes('appliance')) return 'bg-indigo-50 text-indigo-700 border-indigo-200';
  if (norm.includes('maint')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (norm.includes('safe')) return 'bg-purple-50 text-purple-700 border-purple-200';
  return 'bg-slate-100 text-slate-700 border-slate-200';
}

export function IssueCard({
  issue,
  onSelect,
  showPropertyLink = true,
}: IssueCardProps) {
  const CategoryIcon = getCategoryIcon(issue.category);

  return (
    <div
      onClick={() => onSelect(issue)}
      className="card-base card-hover p-4 bg-white cursor-pointer flex flex-col justify-between group border border-slate-200 hover:border-blue-400 transition-all shadow-xs hover:shadow-sm"
    >
      <div>
        {/* Header: ID, Badges */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100">
              {issue.id}
            </span>
            <span
              className={cn(
                'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold border',
                getCategoryBadgeClass(issue.category)
              )}
            >
              <CategoryIcon className="w-3 h-3" />
              <span>{issue.category}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <PriorityBadge priority={issue.priority} />
            <StatusBadge status={issue.status} />
          </div>
        </div>

        {/* Title */}
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mt-1">
          {issue.title}
        </h4>

        {/* Description Snippet */}
        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
          {issue.description}
        </p>

        {/* Location & Tenant details */}
        <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
          <div className="flex items-center justify-between text-slate-600">
            <div className="flex items-center gap-1.5 truncate">
              <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {showPropertyLink ? (
                <Link
                  href={`/properties?id=${issue.propertyId}`}
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium text-slate-800 hover:text-blue-600 hover:underline truncate"
                  title={issue.propertyName}
                >
                  {issue.propertyName}
                </Link>
              ) : (
                <span className="font-medium text-slate-800 truncate">
                  {issue.propertyName}
                </span>
              )}
            </div>
            <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
              {issue.unit}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-500 text-[11px]">
            <div className="flex items-center gap-1.5 truncate">
              <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{issue.reporterName}</span>
            </div>

            {/* Source indicator */}
            {issue.source === 'AI Call' ? (
              <Link
                href={issue.callLogId ? `/ai-call-logs?callId=${issue.callLogId}` : '/ai-call-logs'}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-1.5 py-0.5 rounded border border-indigo-200 transition-colors shrink-0"
              >
                <PhoneCall className="w-2.5 h-2.5" />
                <span>AI Call</span>
              </Link>
            ) : issue.source === 'Tenant Portal' ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
                <ExternalLink className="w-2.5 h-2.5" />
                <span>Portal</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 shrink-0">
                <span>Manual</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer: Vendor & Dates */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <div className="truncate mr-2">
          {issue.assignedVendor ? (
            <span className="text-slate-600 font-medium truncate flex items-center gap-1">
              <Wrench className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">{issue.assignedVendor}</span>
            </span>
          ) : (
            <span className="text-slate-400 italic">No vendor assigned</span>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0 text-slate-400">
          <Clock className="w-3 h-3" />
          <span>{issue.updatedAt || 'Recent'}</span>
        </div>
      </div>
    </div>
  );
}
