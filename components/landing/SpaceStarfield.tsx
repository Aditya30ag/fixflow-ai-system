'use client';

import React from 'react';

interface Star {
  id: number;
  top: number; // percentage (0-100)
  left: number; // percentage (0-100)
  size: number; // px (small, 1px - 1.5px)
  duration: number; // seconds
  delay: number; // seconds
  opacity: number;
  color: string;
}

// Delicate, small pinpoint stars distributed evenly across the viewport
const STARS_DATA: Star[] = [
  // Upper Viewport
  { id: 1, top: 4, left: 11, size: 1.2, duration: 4.2, delay: 0.2, opacity: 0.65, color: '#FFFFFF' },
  { id: 2, top: 7, left: 25, size: 1.5, duration: 5.1, delay: 1.1, opacity: 0.8, color: '#A5B4FC' },
  { id: 3, top: 12, left: 38, size: 1.0, duration: 3.5, delay: 1.8, opacity: 0.5, color: '#E0E7FF' },
  { id: 4, top: 5, left: 54, size: 1.2, duration: 4.8, delay: 0.4, opacity: 0.7, color: '#FFFFFF' },
  { id: 5, top: 9, left: 68, size: 1.5, duration: 5.4, delay: 0.1, opacity: 0.8, color: '#BAE6FD' },
  { id: 6, top: 14, left: 82, size: 1.0, duration: 3.9, delay: 1.5, opacity: 0.6, color: '#FFFFFF' },
  { id: 7, top: 8, left: 93, size: 1.2, duration: 4.5, delay: 0.7, opacity: 0.75, color: '#C7D2FE' },
  { id: 8, top: 18, left: 7, size: 1.0, duration: 3.6, delay: 2.3, opacity: 0.55, color: '#FFFFFF' },
  { id: 9, top: 22, left: 19, size: 1.5, duration: 5.2, delay: 0.9, opacity: 0.8, color: '#38BDF8' },
  { id: 10, top: 17, left: 33, size: 1.2, duration: 4.1, delay: 1.7, opacity: 0.65, color: '#E0E7FF' },
  { id: 11, top: 25, left: 47, size: 1.0, duration: 3.4, delay: 0.5, opacity: 0.5, color: '#FFFFFF' },
  { id: 12, top: 20, left: 63, size: 1.5, duration: 5.6, delay: 2.6, opacity: 0.85, color: '#C084FC' },
  { id: 13, top: 27, left: 77, size: 1.2, duration: 4.3, delay: 0.3, opacity: 0.7, color: '#FFFFFF' },
  { id: 14, top: 23, left: 91, size: 1.0, duration: 3.8, delay: 1.6, opacity: 0.6, color: '#BAE6FD' },

  // Mid Viewport
  { id: 15, top: 33, left: 14, size: 1.2, duration: 4.7, delay: 1.2, opacity: 0.7, color: '#FFFFFF' },
  { id: 16, top: 37, left: 28, size: 1.5, duration: 5.0, delay: 0.8, opacity: 0.8, color: '#A5B4FC' },
  { id: 17, top: 31, left: 44, size: 1.0, duration: 3.3, delay: 2.0, opacity: 0.5, color: '#E0E7FF' },
  { id: 18, top: 40, left: 57, size: 1.2, duration: 4.6, delay: 1.4, opacity: 0.65, color: '#FFFFFF' },
  { id: 19, top: 35, left: 73, size: 1.5, duration: 5.3, delay: 0.6, opacity: 0.8, color: '#818CF8' },
  { id: 20, top: 42, left: 86, size: 1.0, duration: 3.7, delay: 2.4, opacity: 0.55, color: '#BAE6FD' },
  { id: 21, top: 47, left: 9, size: 1.5, duration: 5.1, delay: 0.3, opacity: 0.75, color: '#FFFFFF' },
  { id: 22, top: 51, left: 23, size: 1.0, duration: 3.9, delay: 1.9, opacity: 0.5, color: '#38BDF8' },
  { id: 23, top: 45, left: 39, size: 1.2, duration: 4.4, delay: 1.0, opacity: 0.7, color: '#E0E7FF' },
  { id: 24, top: 53, left: 52, size: 1.5, duration: 5.5, delay: 2.7, opacity: 0.85, color: '#FFFFFF' },
  { id: 25, top: 48, left: 66, size: 1.0, duration: 3.5, delay: 0.7, opacity: 0.5, color: '#C084FC' },
  { id: 26, top: 56, left: 81, size: 1.2, duration: 4.9, delay: 1.5, opacity: 0.7, color: '#FFFFFF' },
  { id: 27, top: 52, left: 95, size: 1.0, duration: 3.8, delay: 2.1, opacity: 0.55, color: '#A5B4FC' },

  // Lower Viewport
  { id: 28, top: 62, left: 16, size: 1.2, duration: 4.5, delay: 0.5, opacity: 0.65, color: '#FFFFFF' },
  { id: 29, top: 66, left: 31, size: 1.5, duration: 5.2, delay: 1.7, opacity: 0.8, color: '#BAE6FD' },
  { id: 30, top: 60, left: 49, size: 1.0, duration: 3.6, delay: 2.2, opacity: 0.5, color: '#FFFFFF' },
  { id: 31, top: 69, left: 64, size: 1.2, duration: 4.8, delay: 0.9, opacity: 0.7, color: '#818CF8' },
  { id: 32, top: 64, left: 79, size: 1.5, duration: 5.4, delay: 1.3, opacity: 0.8, color: '#FFFFFF' },
  { id: 33, top: 72, left: 92, size: 1.0, duration: 3.7, delay: 2.5, opacity: 0.55, color: '#38BDF8' },
  { id: 34, top: 77, left: 8, size: 1.5, duration: 5.0, delay: 0.4, opacity: 0.75, color: '#E0E7FF' },
  { id: 35, top: 81, left: 24, size: 1.0, duration: 3.4, delay: 1.8, opacity: 0.5, color: '#FFFFFF' },
  { id: 36, top: 75, left: 41, size: 1.2, duration: 4.3, delay: 1.1, opacity: 0.7, color: '#C084FC' },
  { id: 37, top: 84, left: 56, size: 1.5, duration: 5.6, delay: 2.8, opacity: 0.85, color: '#FFFFFF' },
  { id: 38, top: 79, left: 71, size: 1.0, duration: 3.8, delay: 0.6, opacity: 0.5, color: '#BAE6FD' },
  { id: 39, top: 87, left: 85, size: 1.2, duration: 4.6, delay: 1.6, opacity: 0.7, color: '#FFFFFF' },
  { id: 40, top: 92, left: 18, size: 1.0, duration: 3.5, delay: 2.0, opacity: 0.55, color: '#A5B4FC' },
  { id: 41, top: 96, left: 35, size: 1.5, duration: 5.3, delay: 0.8, opacity: 0.8, color: '#FFFFFF' },
  { id: 42, top: 90, left: 50, size: 1.2, duration: 4.4, delay: 1.4, opacity: 0.65, color: '#38BDF8' },
  { id: 43, top: 94, left: 68, size: 1.0, duration: 3.9, delay: 2.3, opacity: 0.5, color: '#FFFFFF' },
  { id: 44, top: 97, left: 88, size: 1.2, duration: 4.7, delay: 1.0, opacity: 0.7, color: '#E0E7FF' },
];

export function SpaceStarfield() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden select-none z-0"
    >
      {/* Soft Ambient Glow Atmosphere */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-gradient-to-b from-[#bdf033]/08 via-[#23272f]/10 to-transparent blur-[160px] rounded-full animate-nebula opacity-70" />
      <div className="absolute top-[35%] -left-36 w-[600px] h-[500px] bg-gradient-to-tr from-[#bdf033]/05 via-[#1c2029]/20 to-transparent blur-[150px] rounded-full animate-nebula opacity-40" />
      <div className="absolute top-[65%] -right-36 w-[650px] h-[550px] bg-gradient-to-bl from-[#a8d82a]/06 via-[#1c2029]/20 to-transparent blur-[160px] rounded-full animate-nebula opacity-40" />

      {/* Small, Delicate Pinpoint Twinkling Stars */}
      {STARS_DATA.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 2px ${star.color}`,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
            opacity: star.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
