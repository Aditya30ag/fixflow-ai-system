'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  FileCheck,
  DollarSign,
  AlertCircle,
  Plus,
  ArrowRight,
  Bot,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { StatCard } from '@/components/StatCard';
import { RevenueChart } from '@/components/RevenueChart';
import { LeaseStatusChart } from '@/components/LeaseStatusChart';
import {
  mockDashboardMetrics,
  mockRecentActivities,
  mockUpcomingReminders,
  mockProperties,
  ReminderItem,
} from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

export default function DashboardPage() {
  const [reminders, setReminders] = useState<ReminderItem[]>(mockUpcomingReminders);

  const toggleReminder = (id: string) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, done: !r.done } : r))
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Welcome Banner */}
      <div className="card-base p-6 bg-gradient-to-r from-[#0F1B2D] via-[#162744] to-[#1E3A8A] text-white border-none shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Autonomous Operations Active
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Welcome back, Aditya
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl">
              Fiflow AI handled <strong className="text-white font-semibold">14 voice calls</strong> and automatically resolved <strong className="text-white font-semibold">3 maintenance requests</strong> in the last 24 hours across your 4 properties.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/ai-call-logs"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-300" />
              <span>Review Call Logs</span>
            </Link>
            <Link
              href="/leases"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Lease</span>
            </Link>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* 4 Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Properties"
          value={mockDashboardMetrics.totalProperties.value}
          trend={mockDashboardMetrics.totalProperties.trend}
          isPositive={mockDashboardMetrics.totalProperties.isPositive}
          icon={Building2}
          iconColor="text-blue-600"
          iconBg="bg-blue-50"
          subtext="70 Units across 3 Cities"
        />

        <StatCard
          title="Active Leases"
          value={mockDashboardMetrics.activeLeases.value}
          trend={mockDashboardMetrics.activeLeases.trend}
          isPositive={mockDashboardMetrics.activeLeases.isPositive}
          icon={FileCheck}
          iconColor="text-emerald-600"
          iconBg="bg-emerald-50"
          subtext="94.2% Occupancy Rate"
        />

        <StatCard
          title="Monthly Revenue"
          value={formatCurrency(mockDashboardMetrics.monthlyRevenue.value)}
          trend={mockDashboardMetrics.monthlyRevenue.trend}
          isPositive={mockDashboardMetrics.monthlyRevenue.isPositive}
          icon={DollarSign}
          iconColor="text-amber-600"
          iconBg="bg-amber-50"
          subtext="Projected: $2.38M / year"
        />

        <StatCard
          title="Pending Issues"
          value={mockDashboardMetrics.pendingIssues.value}
          trend={mockDashboardMetrics.pendingIssues.trend}
          isPositive={true}
          icon={AlertCircle}
          iconColor="text-indigo-600"
          iconBg="bg-indigo-50"
          subtext="Avg AI Resolution: 2.1 hrs"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Revenue Bar Chart (2 columns) */}
        <div className="lg:col-span-2 card-base p-6">
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Monthly Revenue Performance
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Past 6 months collected rent vs planned portfolio target
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+15.6% H1 Growth</span>
            </div>
          </div>
          <RevenueChart />
        </div>

        {/* Lease Status Donut Chart (1 column) */}
        <div className="card-base p-6 flex flex-col justify-between">
          <div className="pb-4 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">
              Lease Status Breakdown
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Portfolio occupancy & lease rollover risk
            </p>
          </div>
          <div className="py-2">
            <LeaseStatusChart />
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-center">
            <Link
              href="/leases"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group"
            >
              <span>Manage all 70 units</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Two Column Bottom Layout: Operations & Reminders vs Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Property Status Snapshot + Tasks */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Property Portfolio Cards */}
          <div className="card-base p-6">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-sm text-slate-900">
                  Portfolio Properties Overview
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-level performance and unit occupancy per location
                </p>
              </div>
              <Link
                href="/properties"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>View all</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockProperties.map((prop) => {
                const occupancyRate = Math.round(
                  (prop.occupiedUnits / prop.unitsCount) * 100
                );
                return (
                  <div
                    key={prop.id}
                    className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">
                          {prop.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {prop.city}
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {prop.type}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400">Monthly Revenue:</span>
                        <p className="font-bold text-slate-800">
                          {formatCurrency(prop.monthlyRevenue)}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400">Occupancy:</span>
                        <p className="font-bold text-emerald-600">
                          {prop.occupiedUnits}/{prop.unitsCount} ({occupancyRate}%)
                        </p>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2.5 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-1.5 rounded-full"
                        style={{ width: `${occupancyRate}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Reminders / Action Items */}
          <div className="card-base p-6">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Upcoming Operational Reminders
                </h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                {reminders.filter((r) => !r.done).length} Pending
              </span>
            </div>

            <div className="space-y-2.5">
              {reminders.map((reminder) => (
                <div
                  key={reminder.id}
                  onClick={() => toggleReminder(reminder.id)}
                  className={`p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                    reminder.done
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200/90 hover:border-blue-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={reminder.done}
                      onChange={() => toggleReminder(reminder.id)}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <div>
                      <p
                        className={`text-xs font-semibold ${
                          reminder.done
                            ? 'line-through text-slate-400'
                            : 'text-slate-800'
                        }`}
                      >
                        {reminder.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {reminder.due}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">
                          {reminder.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      reminder.priority === 'High'
                        ? 'bg-rose-50 text-rose-700'
                        : reminder.priority === 'Medium'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {reminder.priority} Priority
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Recent Activity Feed */}
        <div className="card-base p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Live AI Activity Feed
                </h3>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                Auto-updated
              </span>
            </div>

            <div className="space-y-4">
              {mockRecentActivities.map((act, idx) => (
                <div key={act.id} className="relative flex gap-3">
                  {idx !== mockRecentActivities.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-slate-200" />
                  )}
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs z-10">
                    {act.type === 'call' ? (
                      <PhoneCall className="w-3.5 h-3.5" />
                    ) : act.type === 'issue' ? (
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <div className="flex-1 pb-3">
                    <p className="text-xs font-semibold text-slate-900">
                      {act.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {act.description}
                    </p>
                    <span className="text-[10px] text-slate-400 mt-1 inline-block">
                      {act.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4">
            <Link
              href="/ai-call-logs"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              <span>View Full AI Logs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
