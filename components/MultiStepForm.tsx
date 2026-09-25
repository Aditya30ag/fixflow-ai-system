'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Step {
  id: number;
  name: string;
  description?: string;
}

interface MultiStepFormProps {
  steps: Step[];
  currentStep: number;
  onStepChange?: (step: number) => void;
  children: React.ReactNode;
}

export function MultiStepForm({
  steps,
  currentStep,
  children,
}: MultiStepFormProps) {
  return (
    <div className="w-full space-y-6">
      {/* Steps Header */}
      <div className="relative">
        <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-slate-200 z-0" />
        <div className="relative z-10 flex justify-between">
          {steps.map((step) => {
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center bg-white px-2"
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-xs',
                    isCompleted && 'bg-emerald-500 text-white',
                    isCurrent && 'bg-blue-600 text-white ring-4 ring-blue-100',
                    !isCompleted && !isCurrent && 'bg-slate-100 text-slate-400 border border-slate-200'
                  )}
                >
                  {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.id}
                </div>
                <span
                  className={cn(
                    'text-[11px] font-semibold mt-1.5 whitespace-nowrap',
                    isCurrent ? 'text-blue-600 font-bold' : isCompleted ? 'text-slate-700' : 'text-slate-400'
                  )}
                >
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="pt-2">{children}</div>
    </div>
  );
}
