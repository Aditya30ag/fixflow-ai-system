'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Menu, 
  X, 
  ExternalLink, 
  Building2, 
  Bot, 
  Wrench, 
  ShieldCheck,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="relative z-50 bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border-b border-blue-100 px-4 py-2 text-center text-xs text-blue-900">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-700 font-semibold border border-blue-200 text-[11px]">
            <Sparkles className="w-3 h-3 text-blue-600" /> FixFlow 2.4 Live
          </span>
          <span className="font-medium text-slate-700">Next-gen autonomous property ops with ElevenLabs & Cartesia voice telephony.</span>
          <Link 
            href="/ai-call-logs" 
            className="font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 flex items-center gap-0.5 ml-1"
          >
            Listen to live call logs <ChevronRight className="w-3.5 h-3.5 inline" />
          </Link>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
            : 'bg-white/70 backdrop-blur-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 p-[1px] shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-slate-900 tracking-tight">FixFlow</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  AI OS
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium -mt-0.5">
                Autonomous Property Management
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600">
            <a 
              href="#showcase" 
              className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Interactive Demo
            </a>
            <a 
              href="#features" 
              className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Features
            </a>
            <a 
              href="#agents" 
              className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              AI Agents
            </a>
            <a 
              href="#calculator" 
              className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              ROI Calculator
            </a>
            <a 
              href="#pricing" 
              className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/tenant/repair"
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-1.5 shadow-xs"
              title="Open Martin & Co Tenant Repair Portal"
            >
              <Wrench className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tenant Portal</span>
            </Link>

            <Link
              href="/dashboard"
              className="relative group overflow-hidden px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Launch Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 text-white"
            >
              Dashboard
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-900 text-xs font-medium"
              >
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Executive Dashboard</span>
              </Link>
              <Link
                href="/tenant/repair"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-900 text-xs font-medium"
              >
                <Wrench className="w-4 h-4 text-indigo-600" />
                <span>Tenant Portal</span>
              </Link>
            </div>

            <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                Interactive Demo
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                Key Features
              </a>
              <a
                href="#agents"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                AI Telephony Agents
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                ROI Calculator
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                Pricing Plans
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                FAQ
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/ai-call-logs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-xs text-slate-600 hover:text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>Inspect Live AI Call Transcripts</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/ai-agents"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-xs text-slate-600 hover:text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-600" />
                  <span>Configure Voice Prompt Models</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
