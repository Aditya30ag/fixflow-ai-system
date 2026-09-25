'use client';

import React, { useState } from 'react';
import { Send, ArrowUp } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || disabled) return;
    onSendMessage(inputValue.trim());
    setInputValue('');
  };

  return (
    <div className="sticky bottom-0 z-30 w-full bg-gradient-to-t from-[#F4F6FA] via-[#F4F6FA]/90 to-transparent pt-4 pb-6 px-4">
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center bg-white rounded-xl shadow-md border border-slate-200/90 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all p-1.5"
        >
          <input
            type="text"
            value={inputValue}
            disabled={disabled}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your issue or ask anything..."
            className="flex-1 bg-transparent px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || disabled}
            className="w-9 h-9 rounded-lg bg-[#4F46E5] hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center shrink-0 transition-all active:scale-95 shadow-sm"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            <span className="sr-only">Send message</span>
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-400 mt-2">
          AI assistant provides guidance. For emergencies, call your property manager directly.
        </p>
      </div>
    </div>
  );
}
