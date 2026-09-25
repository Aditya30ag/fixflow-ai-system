'use client';

import React from 'react';
import {
  PhoneCall,
  CheckCircle2,
  Clock,
  Sliders,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { AIAgent } from '@/lib/mockData';
import { cn } from '@/lib/utils';

interface AgentCardProps {
  agent: AIAgent;
  onToggleStatus: (id: string) => void;
  onConfigure: (agent: AIAgent) => void;
}

export function AgentCard({
  agent,
  onToggleStatus,
  onConfigure,
}: AgentCardProps) {
  return (
    <div
      className={cn(
        'card-base card-hover p-5 flex flex-col justify-between transition-all border',
        agent.isActive ? 'border-slate-200 bg-white' : 'border-slate-200/60 bg-slate-50/60 opacity-80'
      )}
    >
      <div>
        {/* Top Header & Status Toggle */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-xs"
              style={{ backgroundColor: `${agent.color}15` }}
            >
              {agent.avatar}
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 leading-tight">
                {agent.name}
              </h3>
              <p className="text-xs text-blue-600 font-medium mt-0.5">
                {agent.role}
              </p>
            </div>
          </div>

          {/* Toggle Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={agent.isActive}
            onClick={() => onToggleStatus(agent.id)}
            className={cn(
              'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              agent.isActive ? 'bg-emerald-500' : 'bg-slate-300'
            )}
          >
            <span
              className={cn(
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out',
                agent.isActive ? 'translate-x-5' : 'translate-x-0'
              )}
            />
          </button>
        </div>

        {/* Description */}
        <p className="mt-3.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {agent.description}
        </p>

        {/* Voice & Properties tags */}
        <div className="mt-3 flex flex-wrap gap-1.5 items-center">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
            <Volume2 className="w-3 h-3 text-slate-400" />
            {agent.voiceType.split('(')[0].trim()}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-medium">
            <Sparkles className="w-3 h-3 text-blue-500" />
            {agent.stats.satisfactionRate}% satisfaction
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mt-5 pt-4 border-t border-slate-100">
        <div className="grid grid-cols-3 gap-2 text-center pb-3">
          <div className="p-2 rounded-lg bg-slate-50">
            <div className="text-[10px] text-slate-500 font-medium uppercase flex items-center justify-center gap-1">
              <PhoneCall className="w-3 h-3 text-blue-500" />
              Calls
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">
              {agent.stats.callsMade}
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50">
            <div className="text-[10px] text-slate-500 font-medium uppercase flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              Resolved
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">
              {agent.stats.issuesResolved}
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-50">
            <div className="text-[10px] text-slate-500 font-medium uppercase flex items-center justify-center gap-1">
              <Clock className="w-3 h-3 text-amber-500" />
              Active
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1 truncate">
              {agent.stats.lastActive}
            </div>
          </div>
        </div>

        {/* Configure Button */}
        <button
          type="button"
          onClick={() => onConfigure(agent)}
          className="w-full mt-2 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200/80 active:scale-98"
        >
          <Sliders className="w-3.5 h-3.5 text-slate-500" />
          <span>Configure Agent</span>
        </button>
      </div>
    </div>
  );
}
