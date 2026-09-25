'use client';

import React from 'react';
import { Bot, User, Wrench, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { StepResponseCard } from './StepResponseCard';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text?: string;
  stepData?: {
    introText: string;
    steps: string[];
    feedback?: 'fixed' | 'unresolved' | null;
  };
  escalationOption?: {
    offered: boolean;
    booked?: boolean;
  };
  timestamp?: string;
}

interface ChatBubbleProps {
  message: ChatMessage;
  onStepFeedback?: (messageId: string, result: 'fixed' | 'unresolved') => void;
  onBookExpert?: (messageId: string) => void;
}

export function ChatBubble({
  message,
  onStepFeedback,
  onBookExpert,
}: ChatBubbleProps) {
  const isUser = message.sender === 'user';

  if (isUser) {
    return (
      <div className="flex items-start justify-end gap-2.5 my-3 animate-in fade-in slide-in-from-bottom-1">
        <div className="bg-[#4F46E5] text-white text-xs font-medium px-4 py-2.5 rounded-2xl rounded-tr-xs max-w-md shadow-xs leading-relaxed">
          {message.text}
        </div>
        <div className="w-7 h-7 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    );
  }

  // AI Message
  return (
    <div className="flex items-start gap-3 my-4 animate-in fade-in slide-in-from-bottom-1">
      {/* Bot Avatar */}
      <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
        <Bot className="w-4 h-4" />
      </div>

      <div className="space-y-3 max-w-xl">
        {/* Plain Text response */}
        {message.text && (
          <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-xs p-3.5 text-xs text-slate-800 leading-relaxed shadow-xs">
            {message.text}
          </div>
        )}

        {/* Structured Step Response Card */}
        {message.stepData && (
          <StepResponseCard
            introText={message.stepData.introText}
            steps={message.stepData.steps}
            feedback={message.stepData.feedback}
            onFeedback={(res) =>
              onStepFeedback && onStepFeedback(message.id, res)
            }
          />
        )}

        {/* Escalation booking action card */}
        {message.escalationOption && (
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/80 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-950">
              <Wrench className="w-4 h-4 text-indigo-600" />
              <span>Professional Technician Visit</span>
            </div>
            <p className="text-xs text-indigo-900 leading-relaxed">
              We can schedule an authorized technician to inspect your unit directly. Service calls are covered under standard property maintenance.
            </p>

            {message.escalationOption.booked ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-semibold text-xs border border-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Technician Dispatched (Booking #MCO-9428)</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onBookExpert && onBookExpert(message.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4F46E5] hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Expert Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
