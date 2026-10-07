'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Building 
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export function LandingRoiCalculator() {
  const [units, setUnits] = useState<number>(120);
  const [callsPerMonth, setCallsPerMonth] = useState<number>(38);
  const [contractorRate, setContractorRate] = useState<number>(175);

  // Calculations
  // ~58% of calls can be triaged or self-fixed before sending contractor
  const avoidedTruckRollsMonthly = Math.round(callsPerMonth * 0.58);
  const monthlyCostSavings = avoidedTruckRollsMonthly * contractorRate;
  const annualCostSavings = monthlyCostSavings * 12;

  // Staff time saved: ~1.5 hours per maintenance call coordination
  const monthlyHoursSaved = Math.round(callsPerMonth * 1.5);
  const annualHoursSaved = monthlyHoursSaved * 12;

  // Estimated platform cost
  const estimatedPlatformCostMonthly = units <= 50 ? 149 : units <= 250 ? 399 : 899;
  const netAnnualProfit = annualCostSavings - (estimatedPlatformCostMonthly * 12);
  const roiMultiplier = Math.max(1, Math.round(netAnnualProfit / (estimatedPlatformCostMonthly * 12)));

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-50/70 text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Calculate Your Portfolio Cost Reduction
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            See exactly how much staff time and emergency contractor callout fees FixNet will save you every single year.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Units */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-800">Total Units Managed</span>
                  <span className="text-blue-600 font-mono text-base">{units} units</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={units}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setUnits(val);
                    setCallsPerMonth(Math.round(val * 0.3));
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>20 units</span>
                  <span>500 units</span>
                  <span>1,000+ units</span>
                </div>
              </div>

              {/* Slider 2: Calls */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-800">Average Monthly Maintenance Inquiries</span>
                  <span className="text-blue-600 font-mono text-base">{callsPerMonth} calls/mo</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  step="1"
                  value={callsPerMonth}
                  onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>5 calls</span>
                  <span>150 calls</span>
                  <span>300 calls</span>
                </div>
              </div>

              {/* Slider 3: Contractor Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-800">Avg. Contractor Emergency Dispatch Fee</span>
                  <span className="text-blue-600 font-mono text-base">${contractorRate} / truck roll</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="350"
                  step="5"
                  value={contractorRate}
                  onChange={(e) => setContractorRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>$100 (Standard)</span>
                  <span>$225</span>
                  <span>$350 (After-hours)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200/80 text-xs text-blue-900 leading-relaxed flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>
                  Based on anonymized data across 15k+ doors: 58% of common plumbing, electrical, and appliance calls 
                  are resolved without contractor truck rolls through FixNet guided troubleshooting.
                </span>
              </div>
            </div>

            {/* Output Metric Cards (5 cols) */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Estimated Annual Savings
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 mt-2">
                  {formatCurrency(annualCostSavings)}
                </div>
                <span className="text-xs text-emerald-400 font-medium">
                  +{roiMultiplier}x Net ROI on FixNet platform fees
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Avoided Truck Rolls</span>
                  <span className="font-semibold text-white">{avoidedTruckRollsMonthly} calls / month</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Staff Time Saved</span>
                  <span className="font-semibold text-white">{annualHoursSaved} hours / year</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">After-Hours Phone Coverage</span>
                  <span className="font-semibold text-emerald-400">100% Automated (24/7)</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/dashboard"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <span>Start Free Portfolio Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
