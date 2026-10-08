'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneCall, CheckCircle2, Clock, Wrench } from 'lucide-react';

export interface TranscriptMessage {
  id: string;
  sender: 'tenant' | 'ai' | 'status';
  speakerLabel: string;
  timeLabel?: string;
  text: string;
}

export const defaultTranscript: TranscriptMessage[] = [
  {
    id: 'm1',
    sender: 'tenant',
    speakerLabel: 'Tenant (Unit 304)',
    timeLabel: '2:14 AM',
    text: 'Water is leaking quickly through my ceiling from upstairs!',
  },
  {
    id: 'm2',
    sender: 'ai',
    speakerLabel: 'FixNet AI Agent (Elena)',
    timeLabel: '2:14 AM',
    text: 'I hear you. Turn your bathroom shutoff clockwise if safe. I am dispatching Dave’s 24/7 Priority Plumbing now.',
  },
  {
    id: 'm3',
    sender: 'status',
    speakerLabel: 'Automated Dispatch Confirmation',
    timeLabel: '2:15 AM',
    text: 'Contractor dispatched, ETA 25 min',
  },
];

export function VoiceDispatchWidget({
  transcript = defaultTranscript,
}: {
  transcript?: TranscriptMessage[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Static display for reduced motion
      const bubbles = containerRef.current?.querySelectorAll('.transcript-bubble');
      if (bubbles) {
        gsap.set(bubbles, { opacity: 1, y: 0, scale: 1 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      const bubbles = containerRef.current?.querySelectorAll('.transcript-bubble');
      if (!bubbles || bubbles.length === 0) return;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        onEnter: () => playAnimation(),
        onEnterBack: () => playAnimation(),
      });

      function playAnimation() {
        const currentBubbles = containerRef.current?.querySelectorAll('.transcript-bubble');
        if (!currentBubbles || currentBubbles.length === 0) return;

        setIsPlaying(true);
        // Reset states
        gsap.set(currentBubbles, { opacity: 0, y: 18, scale: 0.96 });

        const tl = gsap.timeline();
        currentBubbles.forEach((b, idx) => {
          tl.to(
            b,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: 'back.out(1.4)',
            },
            idx === 0 ? 0.2 : '+=' + (idx === 1 ? 0.9 : 0.7)
          );
        });
      }

      return () => trigger.kill();
    }, containerRef);

    return () => ctx.revert();
  }, [transcript]);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl border border-[#d8dde7] bg-[#0c1322] text-white p-4 sm:p-5 shadow-xl relative overflow-hidden backdrop-blur-xl"
    >
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 w-44 h-44 rounded-full bg-[#18aae3]/20 blur-2xl" />

      {/* Widget Header: Live Waveform & Status */}
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <PhoneCall className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Emergency Voice Call</span>
              <span className="flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                Live
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">Audio Telephony Stream</p>
          </div>
        </div>

        {/* Live Audio Waveform */}
        <div
          aria-hidden="true"
          className="flex items-center gap-0.5 h-5 px-2 py-1 rounded-md bg-white/5 border border-white/10"
        >
          {[40, 75, 55, 90, 60, 30, 85, 45, 95, 65, 35].map((h, i) => (
            <span
              key={i}
              style={{
                height: isPlaying ? `${h}%` : '35%',
                animation: isPlaying ? `waveform-bounce 0.8s ease-in-out infinite alternate ${i * 0.08}s` : 'none',
              }}
              className="w-0.5 bg-gradient-to-t from-[#18aae3] to-emerald-400 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Chat Transcript Stream */}
      <div className="space-y-3">
        {transcript.map((msg) => {
          if (msg.sender === 'tenant') {
            return (
              <div
                key={msg.id}
                className="transcript-bubble opacity-0 flex flex-col items-start max-w-[88%]"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1 ml-1">
                  <span>{msg.speakerLabel}</span>
                  {msg.timeLabel && <span>&bull; {msg.timeLabel}</span>}
                </div>
                <div className="rounded-2xl rounded-tl-xs bg-slate-800/90 border border-slate-700/80 px-3.5 py-2 text-xs text-slate-100 shadow-sm leading-relaxed">
                  {msg.text}
                </div>
              </div>
            );
          }

          if (msg.sender === 'ai') {
            return (
              <div
                key={msg.id}
                className="transcript-bubble opacity-0 flex flex-col items-end max-w-[92%] ml-auto"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400 mb-1 mr-1">
                  <span>{msg.speakerLabel}</span>
                  {msg.timeLabel && <span>&bull; {msg.timeLabel}</span>}
                </div>
                <div className="rounded-2xl rounded-tr-xs bg-gradient-to-r from-sky-950/80 to-[#081b45]/90 border border-sky-600/40 px-3.5 py-2 text-xs text-sky-100 shadow-sm leading-relaxed text-right">
                  {msg.text}
                </div>
              </div>
            );
          }

          // Status / Dispatch Confirmation
          return (
            <div
              key={msg.id}
              className="transcript-bubble opacity-0 mt-3 pt-2 border-t border-white/10"
            >
              <div className="flex items-center justify-between rounded-xl bg-emerald-950/70 border border-emerald-500/40 p-2.5 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[12px]">{msg.text}</span>
                    <span className="text-[10px] font-mono text-emerald-400/80">Dave’s Emergency Plumbing</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-[11px] font-mono font-bold text-emerald-300">
                  <Clock className="w-3 h-3" />
                  <span>25m</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes waveform-bounce {
          0% {
            height: 20%;
          }
          100% {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
