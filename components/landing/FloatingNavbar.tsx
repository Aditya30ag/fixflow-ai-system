'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { landingData } from './landingData';
import { Container } from './Primitives';
import { Menu, X, ArrowRight, Wrench } from 'lucide-react';
import { FixLogo } from '@/components/FixLogo';

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigation } = landingData;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 80);

      // Section spy
      const sections = navigation.links
        .map((link) => {
          const id = link.href.replace('#', '');
          const el = document.getElementById(id);
          if (!el) return null;
          return {
            id: link.href,
            top: el.offsetTop - 120,
            bottom: el.offsetTop + el.offsetHeight - 120,
          };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      const current = sections.find(
        (sec) => scrollY >= sec.top && scrollY < sec.bottom
      );
      if (current) {
        setActiveSection(current.id);
      } else if (scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation.links]);

  return (
    <header
      className={`sticky top-0 z-[60] w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#f5f5f7]/85 backdrop-blur-md border-[#d8dde7] shadow-[0_4px_20px_rgba(18,24,35,0.06)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <Container
        size="default"
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4.5'
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black rounded-lg"
          aria-label={`${navigation.brandName} home`}
        >
          <FixLogo
            size={scrolled ? 32 : 36}
            className="shrink-0 transition-all duration-200 group-hover:scale-105"
          />
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-extrabold tracking-[-0.03em] text-[#081b45] transition-all duration-200 ${
                scrolled ? 'text-[1.25rem] sm:text-[1.4rem]' : 'text-[1.35rem] sm:text-[1.55rem]'
              }`}
            >
              {navigation.brandName}
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6b7386] bg-[#eef1f6] px-1.5 py-0.5 rounded border border-[#d8dde7]">
              OS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Active Section Highlight */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-[0.92rem] font-semibold text-[#171A24]"
        >
          {navigation.links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2.5 py-1 rounded-md transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black ${
                  isActive
                    ? 'text-[#081b45] font-bold bg-white/70 shadow-xs'
                    : 'text-[#4b5363] hover:text-[#081b45]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-[#081b45] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href={navigation.ctaSecondary.href}
            className={`inline-flex items-center gap-1.5 rounded-[12px] border border-[#d8dde7] bg-white text-xs font-semibold text-[#1a2232] hover:bg-[#f3f5f9] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black ${
              scrolled ? 'px-3.5 py-2' : 'px-4 py-2.5'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-[#6b7386]" />
            <span>{navigation.ctaSecondary.label}</span>
          </Link>

          <Link
            href={navigation.ctaPrimary.href}
            className={`inline-flex items-center gap-1.5 rounded-[12px] bg-black text-xs font-semibold text-white hover:bg-[#1f2430] active:scale-[0.985] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black ${
              scrolled ? 'px-4 py-2' : 'px-5 py-2.5'
            }`}
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#d8dde7] bg-white text-[#111827] shadow-xs hover:bg-[#f3f5f9] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black"
          >
            {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
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
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    activeSection === link.href
                      ? 'bg-[#eef1f6] text-[#081b45] font-bold'
                      : 'text-[#1a2232] hover:bg-[#eef1f6]'
                  }`}
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
  );
}
