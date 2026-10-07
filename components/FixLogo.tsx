import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export function FixLogo({ size = 36, className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="fix-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#081B45" />
          <stop offset="100%" stopColor="#030D26" />
        </linearGradient>
        <linearGradient id="fix-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#18AAE3" />
          <stop offset="100%" stopColor="#0061FF" />
        </linearGradient>
        <filter id="fix-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Rounded Container */}
      <rect width="48" height="48" rx="12" fill="url(#fix-grad-bg)" />
      <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" stroke="#FFFFFF" strokeOpacity="0.14" />

      {/* Vertical Spine */}
      <path
        d="M14 12V36"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Upper Flow Arc with Pulse */}
      <path
        d="M14 15H32C33.6569 15 35 16.3431 35 18C35 19.6569 33.6569 21 32 21H14"
        stroke="url(#fix-grad-cyan)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#fix-glow)"
      />

      {/* Mid Branch */}
      <path
        d="M14 26H26C27.1046 26 28 26.8954 28 28C28 29.1046 27.1046 30 26 30H14"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.9"
      />

      {/* Live Telemetry Dot */}
      <circle cx="34" cy="18" r="3" fill="#22C55E" filter="url(#fix-glow)" />
      <circle cx="34" cy="18" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}
