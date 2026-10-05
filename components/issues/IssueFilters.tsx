'use client';

import React from 'react';
import {
  Search,
  Filter,
  X,
  LayoutList,
  Columns3,
  ArrowUpDown,
  Building2,
  Tag,
  SlidersHorizontal,
  RotateCcw,
} from 'lucide-react';
import { mockProperties } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export interface IssueFilterState {
  search: string;
  propertyId: string;
  status: string;
  priority: string;
  category: string;
  source: string;
  sortBy: 'newest' | 'priority' | 'oldest';
  viewMode: 'table' | 'kanban';
}

interface IssueFiltersProps {
  filters: IssueFilterState;
  onFilterChange: (updates: Partial<IssueFilterState>) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
}

const CATEGORIES = [
  'Plumbing',
  'Electrical',
  'HVAC',
  'Appliance',
  'Maintenance',
  'Safety & Security',
  'Other',
];

const PRIORITIES = ['Urgent', 'High', 'Medium', 'Low'];
const STATUSES = ['Open', 'In Progress', 'Resolved'];
const SOURCES = ['AI Call', 'Tenant Portal', 'Manual'];

export function IssueFilters({
  filters,
  onFilterChange,
  onReset,
  totalCount,
  filteredCount,
}: IssueFiltersProps) {
  const hasActiveFilters =
    filters.search.trim() !== '' ||
    filters.propertyId !== 'ALL' ||
    filters.status !== 'ALL' ||
    filters.priority !== 'ALL' ||
    filters.category !== 'ALL' ||
    filters.source !== 'ALL' ||
    filters.sortBy !== 'newest';

  return (
    <div className="card-base p-4 bg-white space-y-3.5 shadow-xs">
      {/* Top row: Search, View Mode Toggle, Sort */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            placeholder="Search by issue title, ID, unit, tenant name..."
            className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
          {filters.search && (
            <button
              type="button"
              onClick={() => onFilterChange({ search: '' })}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* View Toggle & Sort Controls */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({
                  sortBy: e.target.value as IssueFilterState['sortBy'],
                })
              }
              aria-label="Sort issues"
              className="bg-transparent text-slate-700 text-xs font-medium focus:outline-none cursor-pointer"
            >
              <option value="newest">Sort: Newest</option>
              <option value="priority">Sort: Highest Priority</option>
              <option value="oldest">Sort: Oldest</option>
            </select>
          </div>

          {/* View mode toggle (Table vs Kanban) */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => onFilterChange({ viewMode: 'table' })}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all',
                filters.viewMode === 'table'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              )}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Table</span>
            </button>
            <button
              type="button"
              onClick={() => onFilterChange({ viewMode: 'kanban' })}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all',
                filters.viewMode === 'kanban'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              )}
            >
              <Columns3 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Kanban</span>
            </button>
          </div>
        </div>
      </div>

      {/* Second row: Filter dropdowns & quick counters */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
        <span className="inline-flex items-center gap-1 font-semibold text-slate-500 mr-1 text-[11px] uppercase tracking-wider">
          <SlidersHorizontal className="w-3 h-3 text-slate-400" />
          Filters:
        </span>

        {/* Property filter */}
        <select
          value={filters.propertyId}
          onChange={(e) => onFilterChange({ propertyId: e.target.value })}
          aria-label="Filter by property"
          className={cn(
            'px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer',
            filters.propertyId !== 'ALL'
              ? 'bg-blue-50 border-blue-300 text-blue-800'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          )}
        >
          <option value="ALL">All Properties</option>
          {mockProperties.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        {/* Status filter */}
        <select
          value={filters.status}
          onChange={(e) => onFilterChange({ status: e.target.value })}
          aria-label="Filter by status"
          className={cn(
            'px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer',
            filters.status !== 'ALL'
              ? 'bg-blue-50 border-blue-300 text-blue-800'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          )}
        >
          <option value="ALL">All Statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Priority filter */}
        <select
          value={filters.priority}
          onChange={(e) => onFilterChange({ priority: e.target.value })}
          aria-label="Filter by priority"
          className={cn(
            'px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer',
            filters.priority !== 'ALL'
              ? 'bg-blue-50 border-blue-300 text-blue-800'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          )}
        >
          <option value="ALL">All Priorities</option>
          {PRIORITIES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        {/* Category filter */}
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ category: e.target.value })}
          aria-label="Filter by category"
          className={cn(
            'px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer',
            filters.category !== 'ALL'
              ? 'bg-blue-50 border-blue-300 text-blue-800'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          )}
        >
          <option value="ALL">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Source filter */}
        <select
          value={filters.source}
          onChange={(e) => onFilterChange({ source: e.target.value })}
          aria-label="Filter by source"
          className={cn(
            'px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer',
            filters.source !== 'ALL'
              ? 'bg-blue-50 border-blue-300 text-blue-800'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          )}
        >
          <option value="ALL">All Sources</option>
          {SOURCES.map((src) => (
            <option key={src} value={src}>
              {src}
            </option>
          ))}
        </select>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors ml-auto sm:ml-0"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear Filters</span>
          </button>
        )}

        {/* Result Counter Indicator */}
        <div className="ml-auto text-xs text-slate-400 font-medium">
          Showing <span className="font-bold text-slate-700">{filteredCount}</span> of{' '}
          <span className="font-bold text-slate-700">{totalCount}</span> issues
        </div>
      </div>
    </div>
  );
}
