'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  PhoneCall,
  ExternalLink,
  Clock,
  Calendar,
  Wrench,
  ChevronRight,
  Sparkles,
  Inbox,
  AlertCircle,
} from 'lucide-react';
import { Issue } from '@/lib/issuesStore';
import { PriorityBadge } from '@/components/PriorityBadge';
import { StatusBadge } from '@/components/StatusBadge';
import { getCategoryIcon, getCategoryBadgeClass } from './IssueCard';
import { cn } from '@/lib/utils';

interface IssueTableProps {
  issues: Issue[];
  onSelectIssue: (issue: Issue) => void;
  showPropertyColumn?: boolean;
}

export function IssueTable({
  issues,
  onSelectIssue,
  showPropertyColumn = true,
}: IssueTableProps) {
  if (issues.length === 0) {
    return (
      <div className="card-base p-12 text-center bg-white flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
          <Inbox className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-slate-800 text-sm">No issues found</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm">
          No maintenance tickets match your current filters. Try adjusting your search or clearing active filters.
        </p>
      </div>
    );
  }

  return (
    <div className="card-base overflow-hidden bg-white shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <th className="py-3 px-4">Ticket</th>
              <th className="py-3 px-4">Issue Title & Category</th>
              {showPropertyColumn && <th className="py-3 px-4">Property & Unit</th>}
              <th className="py-3 px-4">Tenant</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Source</th>
              <th className="py-3 px-4">Vendor & Dispatch</th>
              <th className="py-3 px-4">Updated</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {issues.map((issue) => {
              const CategoryIcon = getCategoryIcon(issue.category);

              return (
                <tr
                  key={issue.id}
                  onClick={() => onSelectIssue(issue)}
                  className="hover:bg-blue-50/40 cursor-pointer transition-colors group"
                >
                  {/* Issue ID */}
                  <td className="py-3.5 px-4 font-mono font-bold text-blue-600 whitespace-nowrap">
                    {issue.id}
                  </td>

                  {/* Title & Category */}
                  <td className="py-3.5 px-4 max-w-xs">
                    <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {issue.title}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold border',
                          getCategoryBadgeClass(issue.category)
                        )}
                      >
                        <CategoryIcon className="w-2.5 h-2.5" />
                        <span>{issue.category}</span>
                      </span>
                      <span className="text-[11px] text-slate-400 line-clamp-1">
                        {issue.description}
                      </span>
                    </div>
                  </td>

                  {/* Property & Unit */}
                  {showPropertyColumn && (
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-semibold text-slate-800">
                        <Link
                          href={`/properties?id=${issue.propertyId}`}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-blue-600 hover:underline"
                        >
                          {issue.propertyName}
                        </Link>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {issue.unit}
                      </div>
                    </td>
                  )}

                  {/* Tenant */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="font-medium text-slate-800">
                      {issue.reporterName}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {issue.reporterContact}
                    </div>
                  </td>

                  {/* Priority */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <PriorityBadge priority={issue.priority} />
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <StatusBadge status={issue.status} />
                  </td>

                  {/* Source */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {issue.source === 'AI Call' ? (
                      <Link
                        href={issue.callLogId ? `/ai-call-logs?callId=${issue.callLogId}` : '/ai-call-logs'}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200 transition-colors"
                        title="View autonomous AI call record"
                      >
                        <PhoneCall className="w-3 h-3" />
                        <span>AI Call</span>
                      </Link>
                    ) : issue.source === 'Tenant Portal' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <ExternalLink className="w-3 h-3" />
                        <span>Tenant Portal</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <span>Manual</span>
                      </span>
                    )}
                  </td>

                  {/* Vendor / Dispatch */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {issue.assignedVendor ? (
                      <div>
                        <div className="font-medium text-slate-800 text-[11px] flex items-center gap-1">
                          <Wrench className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[140px]">{issue.assignedVendor}</span>
                        </div>
                        {issue.dispatchStatus?.status && (
                          <div className="text-[10px] text-blue-600 font-semibold mt-0.5">
                            {issue.dispatchStatus.status} • {issue.dispatchStatus.eta || 'Scheduled'}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-[11px] text-slate-400 italic">Unassigned</span>
                    )}
                  </td>

                  {/* Updated */}
                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-500 text-[11px]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{issue.updatedAt || 'Recent'}</span>
                    </div>
                  </td>

                  {/* Action button */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => onSelectIssue(issue)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
