'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  Search,
  Plus,
  HelpCircle,
  CheckCircle2,
  PhoneCall,
  Clock,
  Sparkles,
} from 'lucide-react';
import { mockRecentActivities } from '@/lib/mockData';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': {
    title: 'Executive Dashboard',
    subtitle: 'Real-time overview of portfolio performance, revenue, and AI operations',
  },
  '/properties': {
    title: 'Property Portfolio',
    subtitle: 'Manage residential and commercial buildings, units, and occupancy',
  },
  '/leases': {
    title: 'Lease Management',
    subtitle: 'Review tenant contracts, upcoming expiries, and automate renewals',
  },
  '/dashboard/issues': {
    title: 'Issues & Maintenance Triage',
    subtitle: 'Track, assign, and autonomously dispatch maintenance tickets across your portfolio',
  },
  '/ai-agents': {
    title: 'Autonomous AI Agents',
    subtitle: 'Deploy and configure intelligent voice bots for tenant communications',
  },
  '/ai-call-logs': {
    title: 'AI Call Logs & Recordings',
    subtitle: 'Inspect automated tenant calls, transcripts, sentiment, and outcomes',
  },
  '/people': {
    title: 'Tenants & Residents',
    subtitle: 'Resident directory, lease associations, payment history, and records',
  },
  '/report-issue': {
    title: 'Maintenance Request & Dispatch',
    subtitle: 'Log repair issues, trigger AI vendor dispatch, and track resolution',
  },
  '/reports': {
    title: 'Financial & Operational Reports',
    subtitle: 'Deep-dive analytics on NOI, rent collection, and AI efficiency',
  },
  '/settings': {
    title: 'System Settings',
    subtitle: 'Organization preferences, AI phone numbers, notifications, and webhooks',
  },
};

export function TopNav() {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const currentMeta = pageTitles[pathname] || {
    title: 'FixNet Portal',
    subtitle: 'AI-Powered Property Management Platform',
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-6 flex items-center justify-between shadow-xs">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-base font-bold text-slate-900 leading-tight">
          {currentMeta.title}
        </h1>
        <p className="text-xs text-slate-500 hidden sm:block">
          {currentMeta.subtitle}
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Global Search Bar */}
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search portfolio, units, calls..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Quick Action Button */}
        <Link
          href="/report-issue"
          className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Report Issue</span>
        </Link>

        {/* Help icon */}
        <button
          type="button"
          title="Help & Documentation"
          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div
              className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-slate-200 py-3 z-50 animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">
                    Live AI Notifications
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-semibold">
                    3 new
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowNotifications(false)}
                  className="text-[11px] text-blue-600 hover:underline"
                >
                  Mark all read
                </button>
              </div>

              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {mockRecentActivities.slice(0, 4).map((act) => (
                  <div
                    key={act.id}
                    className="p-3 hover:bg-slate-50 flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      {act.type === 'call' ? (
                        <PhoneCall className="w-3.5 h-3.5" />
                      ) : act.type === 'issue' ? (
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-900 truncate">
                        {act.title}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                        {act.description}
                      </p>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        {act.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 pt-2 border-t border-slate-100 text-center">
                <Link
                  href="/ai-call-logs"
                  onClick={() => setShowNotifications(false)}
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  View full AI audit logs →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
            AP
          </div>
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-xs font-semibold text-slate-800 leading-tight">
              Aditya Patel
            </span>
            <span className="text-[10px] text-slate-400">Head of Operations</span>
          </div>
        </div>
      </div>
    </header>
  );
}
