'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Building2, PhoneCall, Bot, Wrench, FileText, BarChart3, Settings, ShieldCheck } from 'lucide-react';

export function LandingFooter() {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight">FixFlow AI</span>
                <span className="text-[11px] text-slate-500">Autonomous Proptech Operating System</span>
              </div>
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Empowering real estate operators, landlords, and asset managers with 24/7 autonomous voice 
              telephony, instant tenant repair triage, and proactive lease management.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                All Systems Operational (99.98%)
              </span>
            </div>
          </div>

          {/* Col 1: Platform Modules */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Command Center</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/dashboard" className="text-slate-600 hover:text-slate-950 transition-colors">Executive Dashboard</Link>
              </li>
              <li>
                <Link href="/properties" className="text-slate-600 hover:text-slate-950 transition-colors">Portfolio Properties</Link>
              </li>
              <li>
                <Link href="/leases" className="text-slate-600 hover:text-slate-950 transition-colors">Lease Agreements</Link>
              </li>
              <li>
                <Link href="/people" className="text-slate-600 hover:text-slate-950 transition-colors">Tenants & Residents</Link>
              </li>
              <li>
                <Link href="/reports" className="text-slate-600 hover:text-slate-950 transition-colors">Financial Reports & NOI</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: AI Automation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">AI Telephony</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/ai-agents" className="text-slate-600 hover:text-slate-950 transition-colors">Autonomous Voice Agents</Link>
              </li>
              <li>
                <Link href="/ai-call-logs" className="text-slate-600 hover:text-slate-950 transition-colors">Live Call Transcripts</Link>
              </li>
              <li>
                <Link href="/report-issue" className="text-slate-600 hover:text-slate-950 transition-colors">Dispatch & Work Orders</Link>
              </li>
              <li>
                <Link href="/settings" className="text-slate-600 hover:text-slate-950 transition-colors">Telephony & Speech Settings</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tenant Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Tenant Portal</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/tenant/repair" className="text-slate-600 hover:text-slate-950 transition-colors">Martin & Co Repair Portal</Link>
              </li>
              <li>
                <Link href="/tenant/repair/chat" className="text-slate-600 hover:text-slate-950 transition-colors">AI Troubleshooting Chat</Link>
              </li>
              <li>
                <Link href="/tenant" className="text-slate-600 hover:text-slate-950 transition-colors">Self-Service Diagnostic Guide</Link>
              </li>
              <li>
                <a href="#calculator" className="text-slate-600 hover:text-slate-950 transition-colors">Portfolio ROI Calculator</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-medium">
          <p>© {new Date().getFullYear()} FixFlow AI Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-800 cursor-pointer">Security & SOC-2</span>
            <span className="hover:text-slate-800 cursor-pointer">Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
