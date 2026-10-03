'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { 
  Building2, 
  Menu, 
  X, 
  ArrowRight, 
  Wrench
} from 'lucide-react';

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigation } = landingData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Container */}
      <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <nav
            aria-label="Primary Navigation"
            className={`transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
              scrolled
                ? 'bg-[#121419]/90 backdrop-blur-xl border-[#23272f] shadow-2xl shadow-black/70'
                : 'bg-[#16181d]/80 backdrop-blur-md border-[#23272f] shadow-lg shadow-black/30'
            }`}
          >
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bdf033] rounded-full py-1 pr-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#bef033] to-[#a8d82a] p-[1px] shadow-sm shadow-[#bdf033]/20 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full rounded-full bg-[#121419] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#bdf033]" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-[#bdf033] transition-colors">
                  {navigation.brandName}
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-full bg-[#bdf033]/10 border border-[#bdf033]/25 text-[#bdf033] font-semibold tracking-wider">
                  OS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-300">
              {navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.05] transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#bdf033]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Link
                href={navigation.ctaSecondary.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#bdf033]"
              >
                <Wrench className="w-3.5 h-3.5 text-slate-400" />
                <span>{navigation.ctaSecondary.label}</span>
              </Link>
              <Link
                href={navigation.ctaPrimary.href}
                className="relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-[#121419] rounded-full bg-[#bdf033] hover:bg-[#a8d82a] shadow-md shadow-[#bdf033]/20 hover:shadow-[#bdf033]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 border border-[#bdf033]/40 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bdf033]"
              >
                <span>{navigation.ctaPrimary.label}</span>
                <ArrowRight className="w-3 h-3 ml-1 text-[#121419] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href={navigation.ctaPrimary.href}
                className="px-3 py-1 text-xs font-semibold text-[#121419] bg-[#bdf033] rounded-full"
              >
                Launch
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bdf033]"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden flex flex-col justify-start pt-24 px-6 animate-fadeIn">
          <div className="bg-[#16181d] border border-[#23272f] rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="space-y-1">
              {navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-[#23272f] space-y-2">
              <Link
                href={navigation.ctaSecondary.href}
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#23272f] text-xs font-medium text-slate-200 hover:bg-white/[0.05]"
              >
                <Wrench className="w-3.5 h-3.5 text-[#bdf033]" />
                <span>{navigation.ctaSecondary.label}</span>
              </Link>
              <Link
                href={navigation.ctaPrimary.href}
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#bdf033] text-xs font-semibold text-[#121419] shadow-lg shadow-[#bdf033]/20"
              >
                <span>{navigation.ctaPrimary.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#121419]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
