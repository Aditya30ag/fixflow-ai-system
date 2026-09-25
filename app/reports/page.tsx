'use client';

import React from 'react';
import {
  BarChart3,
  Download,
  Calendar,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  DollarSign,
  Shield,
} from 'lucide-react';
import { RevenueChart } from '@/components/RevenueChart';
import { LeaseStatusChart } from '@/components/LeaseStatusChart';
import { formatCurrency } from '@/lib/utils';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Financial & Operational Reports
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Portfolio financial statements, rent collection analytics, and AI labor savings
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert('Exporting monthly statement PDF...')}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Export Summary (PDF/CSV)</span>
        </button>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl card-base">
          <span className="text-xs text-slate-500 font-medium">YTD Net Operating Income (NOI)</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {formatCurrency(1185400)}
          </div>
          <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">
            +11.4% vs planned budget
          </span>
        </div>

        <div className="p-4 rounded-xl card-base">
          <span className="text-xs text-slate-500 font-medium">AI Operating Hours Saved</span>
          <div className="text-2xl font-bold text-blue-600 mt-1">
            428.5 hrs
          </div>
          <span className="text-xs text-slate-400 mt-1 inline-block">
            Equivalent to 2.5 full-time staff
          </span>
        </div>

        <div className="p-4 rounded-xl card-base">
          <span className="text-xs text-slate-500 font-medium">On-Time Rent Collection Rate</span>
          <div className="text-2xl font-bold text-emerald-600 mt-1">
            98.8%
          </div>
          <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">
            +3.2% after AI reminders
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-base p-6">
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">
              Gross Monthly Rent Collected vs Targets
            </h3>
            <span className="text-xs text-slate-500">2026 Fiscal Year</span>
          </div>
          <RevenueChart />
        </div>

        <div className="card-base p-6 flex flex-col justify-between">
          <div className="pb-4 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">
              Occupancy Rollover Distribution
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Current tenant contract phases
            </p>
          </div>
          <div className="py-2">
            <LeaseStatusChart />
          </div>
          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 text-center">
            Zero vacant units unlisted. AI bots handling prospect inbound.
          </div>
        </div>
      </div>
    </div>
  );
}
