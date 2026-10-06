'use client';

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export function Container({
  className,
  size = 'default',
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-[1140px]',
    default: 'max-w-[1312px]',
    wide: 'max-w-[1560px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'canvas' | 'subtle' | 'muted' | 'dark' | 'white';
}

export function Section({
  className,
  variant = 'canvas',
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    canvas: 'bg-[#f5f5f7] text-[#232533]',
    subtle: 'bg-[#f3f3f5] text-[#232533]',
    muted: 'bg-[#eef1f6] text-[#232533]',
    dark: 'bg-[#040611] text-white',
    white: 'bg-white text-[#232533]',
  };

  return (
    <section className={cn('relative py-20 lg:py-28 overflow-hidden', variantStyles[variant], className)} {...props}>
      {children}
    </section>
  );
}

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  isDark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-[880px]',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.09em] mb-4',
            isDark ? 'text-[#c8c0eb]' : 'text-[#2a2f3f]'
          )}
        >
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          'text-[clamp(2.35rem,4.2vw,4.1rem)] font-extrabold leading-[1.06] tracking-[-0.038em]',
          isDark ? 'text-white' : 'text-[#0b0d12]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 sm:mt-5 text-[clamp(1.05rem,1.25vw,1.25rem)] leading-[1.48] font-normal',
            isDark ? 'text-[#d5d2e3]' : 'text-[#404555]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'darkInverted' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  children,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-[10px]',
    md: 'px-6 py-3 text-sm font-semibold rounded-[13px]',
    lg: 'px-8 py-3.5 text-base font-semibold rounded-[14px]',
  };

  const variantClasses = {
    primary:
      'bg-black text-white hover:bg-[#1f2430] active:scale-[0.985] shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-transparent transition-all duration-200',
    secondary:
      'bg-white text-[#1a2232] border border-[#d8dde7] hover:bg-[#f3f5f9] hover:border-[#c5cbd6] active:scale-[0.985] shadow-[0_2px_8px_rgba(18,24,35,0.04)] transition-all duration-200',
    darkInverted:
      'bg-white text-[#040611] font-bold hover:bg-[#f3f5f9] active:scale-[0.985] shadow-lg transition-all duration-200',
    ghost:
      'bg-transparent text-[#404555] hover:text-[#11131a] hover:bg-black/5 active:scale-[0.985] transition-all duration-200',
  };

  const combinedClasses = cn(
    'inline-flex items-center justify-center gap-2 cursor-pointer transition-transform select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  className,
  variant = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'dark' | 'brand';
}) {
  const variantStyles = {
    default: 'bg-[#f3f4f6] text-[#252b37] border-[#d8dbe2]',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    dark: 'bg-white/10 text-[#d5d2e3] border-white/15',
    brand: 'bg-[#18aae3]/10 text-[#18aae3] border-[#18aae3]/25',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border tracking-wide',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
