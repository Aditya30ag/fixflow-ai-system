'use client';

import React from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepResponseCardProps {
  introText: string;
  steps: string[];
  feedback?: 'fixed' | 'unresolved' | null;
  onFeedback: (result: 'fixed' | 'unresolved') => void;
}

export function StepResponseCard({
  introText,
  steps,
  feedback,
  onFeedback,
}: StepResponseCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-5 space-y-4 max-w-xl text-left">
      {/* Intro text */}
      <p className="text-sm font-semibold text-slate-800 leading-relaxed">
        {introText}
      </p>

      {/* Numbered steps list */}
      <div className="space-y-3 pt-1">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-700">
            <span className="w-5 h-5 rounded-full border border-indigo-500 text-indigo-600 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="flex-1 pt-0.5">{step}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 pt-4">
        {feedback ? (
          <div className="text-center py-1">
            {feedback === 'fixed' ? (
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" />
                <span>Marked as resolved. Thank you!</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                <AlertCircle className="w-4 h-4" />
                <span>Escalating to property team for hands-on visit...</span>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-center text-xs font-medium text-slate-600">
              Did these steps solve your problem?
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onFeedback('fixed')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-semibold text-slate-700 transition-all active:scale-95"
              >
                <span>👍</span>
                <span>Yes, fixed!</span>
              </button>

              <button
                type="button"
                onClick={() => onFeedback('unresolved')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:border-rose-400 hover:bg-rose-50 hover:text-rose-700 text-xs font-semibold text-slate-700 transition-all active:scale-95"
              >
                <span>👎</span>
                <span>Still having issue</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
