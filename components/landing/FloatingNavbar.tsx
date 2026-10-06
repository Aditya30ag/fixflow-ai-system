'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { Container } from './Primitives';
import { Building2, Menu, X, ArrowRight, Wrench } from 'lucide-react';

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigation } = landingData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[60] w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-[#f5f5f7]/85 backdrop-blur-md border-[#d8dde7] shadow-[0_4px_20px_rgba(18,24,35,0.04)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <Container size="default" className="flex items-center justify-between py-3.5 sm:py-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
            aria-label={`${navigation.brandName} home`}
          >
            <div className="w-9 h-9 rounded-xl bg-[#081b45] text-white flex items-center justify-center shadow-sm group-hover:bg-[#11131a] transition-colors">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[1.35rem] sm:text-[1.55rem] font-extrabold tracking-[-0.03em] text-[#081b45]">
                {navigation.brandName}
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6b7386] bg-[#eef1f6] px-1.5 py-0.5 rounded border border-[#d8dde7]">
                OS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 text-[0.98rem] font-semibold text-[#171A24]"
          >
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#081b45] focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href={navigation.ctaSecondary.href}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[12px] border border-[#d8dde7] bg-white text-xs font-semibold text-[#1a2232] hover:bg-[#f3f5f9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <Wrench className="w-3.5 h-3.5 text-[#6b7386]" />
              <span>{navigation.ctaSecondary.label}</span>
            </Link>

            <Link
              href={navigation.ctaPrimary.href}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[12px] bg-black text-xs font-semibold text-white hover:bg-[#1f2430] active:scale-[0.985] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <span>{navigation.ctaPrimary.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href={navigation.ctaPrimary.href}
              className="px-3.5 py-1.5 rounded-[10px] bg-black text-xs font-semibold text-white"
            >
              Launch
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8dde7] bg-white text-[#111827] shadow-sm hover:bg-[#f3f5f9] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden px-4 pb-4 pt-2">
            <div className="rounded-2xl border border-[#d7dbe3] bg-white p-4 shadow-[0_16px_36px_rgba(9,13,24,0.12)] space-y-3">
              <div className="flex flex-col space-y-1">
                {navigation.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-semibold text-[#1a2232] hover:bg-[#eef1f6] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="pt-3 border-t border-[#eaedf3] flex flex-col gap-2">
                <Link
                  href={navigation.ctaSecondary.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#d8dde7] bg-white text-xs font-semibold text-[#1a2232]"
                >
                  <Wrench className="w-3.5 h-3.5 text-[#6b7386]" />
                  <span>{navigation.ctaSecondary.label}</span>
                </Link>
                <Link
                  href={navigation.ctaPrimary.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black text-xs font-semibold text-white"
                >
                  <span>{navigation.ctaPrimary.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
