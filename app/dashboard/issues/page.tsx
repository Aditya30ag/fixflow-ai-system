'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  AlertCircle,
  Plus,
  Wrench,
  Clock,
  CheckCircle2,
  AlertOctagon,
  Sparkles,
  Inbox,
  RotateCcw,
  RefreshCw,
  SlidersHorizontal,
} from 'lucide-react';
import { useIssues, Issue, IssueStatus, IssuePriority } from '@/lib/issuesStore';
import { IssueFilters, IssueFilterState } from '@/components/issues/IssueFilters';
import { IssueTable } from '@/components/issues/IssueTable';
import { IssueKanban } from '@/components/issues/IssueKanban';
import { IssueDetailDrawer } from '@/components/issues/IssueDetailDrawer';
import { StatCard } from '@/components/StatCard';

export default function IssuesPage() {
  const {
    issues,
    loading: storeLoading,
    totalCount,
    openCount,
    inProgressCount,
    resolvedCount,
    urgentCount,
  } = useIssues();

  // Selected issue for detail drawer
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  // Simulated initial loading state for skeleton demo (200ms)
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  // Filter state
  const [filters, setFilters] = useState<IssueFilterState>({
    search: '',
    propertyId: 'ALL',
    status: 'ALL',
    priority: 'ALL',
    category: 'ALL',
    source: 'ALL',
    sortBy: 'newest',
    viewMode: 'table',
  });

  const handleFilterChange = (updates: Partial<IssueFilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      propertyId: 'ALL',
      status: 'ALL',
      priority: 'ALL',
      category: 'ALL',
      source: 'ALL',
      sortBy: 'newest',
      viewMode: filters.viewMode, // keep user's preferred view mode
    });
  };

  // Filtered & Sorted issues
  const filteredIssues = useMemo(() => {
    return issues
      .filter((item) => {
        // Search query
        if (filters.search.trim()) {
          const q = filters.search.toLowerCase();
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchId = item.id.toLowerCase().includes(q);
          const matchUnit = item.unit.toLowerCase().includes(q);
          const matchTenant = item.reporterName.toLowerCase().includes(q);
          const matchProp = item.propertyName.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          if (!matchTitle && !matchId && !matchUnit && !matchTenant && !matchProp && !matchDesc) {
            return false;
          }
        }

        // Property
        if (filters.propertyId !== 'ALL' && item.propertyId !== filters.propertyId) {
          return false;
        }

        // Status
        if (filters.status !== 'ALL') {
          if (filters.status === 'Open') {
            if (item.status !== 'Open' && item.status !== 'Pending') return false;
          } else if (item.status !== filters.status) {
            return false;
          }
        }

        // Priority
        if (filters.priority !== 'ALL' && item.priority !== filters.priority) {
          return false;
        }

        // Category
        if (filters.category !== 'ALL' && item.category !== filters.category) {
          return false;
        }

        // Source
        if (filters.source !== 'ALL' && item.source !== filters.source) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'newest') {
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        }
        if (filters.sortBy === 'oldest') {
          return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
        }
        if (filters.sortBy === 'priority') {
          const score = (p: string) => {
            if (p === 'Urgent') return 4;
            if (p === 'High') return 3;
            if (p === 'Medium') return 2;
            return 1;
          };
          return score(b.priority) - score(a.priority);
        }
        return 0;
      });
  }, [issues, filters]);

  // If selected issue is open, keep its state synced
  const activeDetailIssue = useMemo(() => {
    if (!selectedIssue) return null;
    return issues.find((i) => i.id === selectedIssue.id) || selectedIssue;
  }, [selectedIssue, issues]);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/60 mb-1.5">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Autonomous AI Dispatch Active</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Issues & Maintenance
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            Track, assign, and autonomously dispatch maintenance tickets across your entire portfolio
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/report-issue"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all active:scale-95 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Report Issue</span>
          </Link>
        </div>
      </div>

      {/* Error state alert if triggered */}
      {hasError && (
        <div className="card-base p-4 bg-rose-50 border-rose-200 text-rose-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0" />
            <span className="text-xs font-semibold">
              Failed to sync with maintenance service. Click retry to reload.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setHasError(false)}
            className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-white px-2.5 py-1 rounded border border-rose-200"
          >
            <RefreshCw className="w-3 h-3" />
            Retry
          </button>
        </div>
      )}

      {/* Summary Cards Row (5 Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {/* Total Issues */}
        <div className="card-base p-4 bg-white flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Issues
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Wrench className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              {isLoading ? (
                <span className="inline-block w-8 h-7 bg-slate-200 rounded animate-pulse" />
              ) : (
                totalCount
              )}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Portfolio-wide
            </span>
          </div>
        </div>

        {/* Open / Triage */}
        <div
          onClick={() => handleFilterChange({ status: 'Open' })}
          className="card-base card-hover p-4 bg-white flex flex-col justify-between shadow-xs cursor-pointer border-l-4 border-l-blue-500"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Open / Triage
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <AlertCircle className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-blue-600 tracking-tight">
              {isLoading ? (
                <span className="inline-block w-8 h-7 bg-slate-200 rounded animate-pulse" />
              ) : (
                openCount
              )}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Awaiting dispatch
            </span>
          </div>
        </div>

        {/* In Progress */}
        <div
          onClick={() => handleFilterChange({ status: 'In Progress' })}
          className="card-base card-hover p-4 bg-white flex flex-col justify-between shadow-xs cursor-pointer border-l-4 border-l-amber-500"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              In Progress
            </span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-amber-600 tracking-tight">
              {isLoading ? (
                <span className="inline-block w-8 h-7 bg-slate-200 rounded animate-pulse" />
              ) : (
                inProgressCount
              )}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Vendors active
            </span>
          </div>
        </div>

        {/* Resolved */}
        <div
          onClick={() => handleFilterChange({ status: 'Resolved' })}
          className="card-base card-hover p-4 bg-white flex flex-col justify-between shadow-xs cursor-pointer border-l-4 border-l-emerald-500"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Resolved
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-emerald-600 tracking-tight">
              {isLoading ? (
                <span className="inline-block w-8 h-7 bg-slate-200 rounded animate-pulse" />
              ) : (
                resolvedCount
              )}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Completed tickets
            </span>
          </div>
        </div>

        {/* Urgent / Emergency */}
        <div
          onClick={() => handleFilterChange({ priority: 'Urgent' })}
          className="card-base card-hover p-4 bg-white flex flex-col justify-between shadow-xs cursor-pointer border-l-4 border-l-rose-500 col-span-2 sm:col-span-1"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Urgent / Emerg.
            </span>
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertOctagon className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-rose-600 tracking-tight">
              {isLoading ? (
                <span className="inline-block w-8 h-7 bg-slate-200 rounded animate-pulse" />
              ) : (
                urgentCount
              )}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Priority Tier-1 SLA
            </span>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <IssueFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        totalCount={totalCount}
        filteredCount={filteredIssues.length}
      />

      {/* Loading Skeleton */}
      {isLoading ? (
        <div className="card-base p-6 bg-white space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="w-48 h-4 bg-slate-200 rounded animate-pulse" />
            <div className="w-24 h-4 bg-slate-200 rounded animate-pulse" />
          </div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3 space-x-4 border-b border-slate-50">
              <div className="w-20 h-4 bg-slate-200 rounded animate-pulse" />
              <div className="w-1/3 h-4 bg-slate-200 rounded animate-pulse" />
              <div className="w-28 h-4 bg-slate-200 rounded animate-pulse" />
              <div className="w-20 h-4 bg-slate-200 rounded animate-pulse" />
              <div className="w-16 h-4 bg-slate-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      ) : (
        /* Main View: Table or Kanban */
        <div>
          {filters.viewMode === 'table' ? (
            <IssueTable
              issues={filteredIssues}
              onSelectIssue={(issue) => setSelectedIssue(issue)}
            />
          ) : (
            <IssueKanban
              issues={filteredIssues}
              onSelectIssue={(issue) => setSelectedIssue(issue)}
            />
          )}
        </div>
      )}

      {/* Slide-over Detail Drawer */}
      <IssueDetailDrawer
        issue={activeDetailIssue}
        isOpen={!!selectedIssue}
        onClose={() => setSelectedIssue(null)}
        onStatusChanged={(newStatus) => {
          if (selectedIssue) {
            setSelectedIssue({ ...selectedIssue, status: newStatus });
          }
        }}
      />
    </div>
  );
}
