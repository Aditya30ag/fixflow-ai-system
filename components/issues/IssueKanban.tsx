'use client';

import React from 'react';
import { Issue, IssueStatus } from '@/lib/issuesStore';
import { IssueCard } from './IssueCard';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IssueKanbanProps {
  issues: Issue[];
  onSelectIssue: (issue: Issue) => void;
  showPropertyLink?: boolean;
}

const COLUMNS: {
  id: IssueStatus;
  title: string;
  icon: React.ElementType;
  badgeBg: string;
  dotColor: string;
}[] = [
  {
    id: 'Open',
    title: 'Open / Triage',
    icon: AlertCircle,
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    dotColor: 'bg-blue-500',
  },
  {
    id: 'In Progress',
    title: 'In Progress',
    icon: Clock,
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    dotColor: 'bg-amber-500',
  },
  {
    id: 'Resolved',
    title: 'Resolved',
    icon: CheckCircle2,
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotColor: 'bg-emerald-500',
  },
];

export function IssueKanban({
  issues,
  onSelectIssue,
  showPropertyLink = true,
}: IssueKanbanProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
      {COLUMNS.map((col) => {
        // Match both 'Open' and 'Pending' in the Open column
        const columnIssues = issues.filter((i) => {
          if (col.id === 'Open') {
            return i.status === 'Open' || i.status === 'Pending';
          }
          return i.status === col.id;
        });

        const Icon = col.icon;

        return (
          <div
            key={col.id}
            className="bg-slate-100/70 border border-slate-200/80 rounded-xl p-3.5 flex flex-col gap-3 min-h-[500px]"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between px-1 py-0.5">
              <div className="flex items-center gap-2">
                <span className={cn('w-2 h-2 rounded-full', col.dotColor)} />
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                  {col.title}
                </h3>
              </div>
              <span
                className={cn(
                  'text-xs font-bold px-2 py-0.5 rounded-full border',
                  col.badgeBg
                )}
              >
                {columnIssues.length}
              </span>
            </div>

            {/* Cards container */}
            <div className="space-y-3 flex-1 overflow-y-auto max-h-[75vh] pr-0.5">
              {columnIssues.length === 0 ? (
                <div className="h-32 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 text-xs p-4 text-center">
                  <Icon className="w-5 h-5 text-slate-300 mb-1" />
                  <span>No issues in this stage</span>
                </div>
              ) : (
                columnIssues.map((issue) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    onSelect={onSelectIssue}
                    showPropertyLink={showPropertyLink}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
