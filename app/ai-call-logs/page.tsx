'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  Clock,
  User,
  Calendar,
  Sparkles,
  Play,
  Pause,
  Download,
  CheckCircle2,
  AlertCircle,
  Building2,
  MessageSquare,
} from 'lucide-react';
import { DataTable, Column } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { Modal } from '@/components/Modal';
import { mockAICallLogs, AICallLog } from '@/lib/mockData';

export default function AICallLogsPage() {
  const [selectedCall, setSelectedCall] = useState<AICallLog | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [dateFilter, setDateFilter] = useState('ALL');

  const filterOptions = [
    { label: 'Completed', value: 'Completed' },
    { label: 'Missed', value: 'Missed' },
    { label: 'In Progress', value: 'In Progress' },
  ];

  const columns: Column<AICallLog>[] = [
    {
      key: 'callerName',
      header: 'Caller Name',
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0">
            {item.callerName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="font-semibold text-slate-900">{item.callerName}</div>
            <div className="text-xs text-slate-400">{item.callerPhone}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'property',
      header: 'Property & Unit',
      sortable: true,
      render: (item) => (
        <div>
          <div className="font-medium text-slate-800">{item.property}</div>
          <div className="text-xs text-slate-400">{item.unit}</div>
        </div>
      ),
    },
    {
      key: 'dateTime',
      header: 'Date & Time',
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>{item.dateTime}</span>
        </div>
      ),
    },
    {
      key: 'duration',
      header: 'Duration',
      sortable: true,
      render: (item) => (
        <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
          {item.duration}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (item) => <StatusBadge status={item.status} />,
    },
    {
      key: 'agentUsed',
      header: 'AI Agent Used',
      sortable: true,
      render: (item) => (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
          <Sparkles className="w-3 h-3 text-blue-500" />
          <span>{item.agentUsed}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            AI Voice Call Audit Logs
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time transcripts, sentiment intelligence, and automated dispatch outcomes
          </p>
        </div>

        {/* Date Filter & Quick Stats */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-transparent border-none focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Time</option>
              <option value="TODAY">Today (Sep 25)</option>
              <option value="YESTERDAY">Yesterday</option>
              <option value="WEEK">Last 7 Days</option>
            </select>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>98.2% Resolution Rate</span>
          </div>
        </div>
      </div>

      {/* Filterable Data Table */}
      <DataTable<AICallLog>
        columns={columns}
        data={mockAICallLogs}
        keyExtractor={(item) => item.id}
        searchPlaceholder="Search by caller, phone, property or agent..."
        searchKeys={['callerName', 'callerPhone', 'property', 'unit', 'agentUsed', 'summary']}
        filterColumnKey="status"
        filterOptions={filterOptions}
        filterLabel="Status"
        pageSize={6}
        onRowClick={(item) => setSelectedCall(item)}
      />

      {/* Call Detail Modal / Expandable Transcript Drawer */}
      <Modal
        isOpen={!!selectedCall}
        onClose={() => {
          setSelectedCall(null);
          setIsPlayingAudio(false);
        }}
        title={`Call Record #${selectedCall?.id}`}
        description={`Audit details for caller ${selectedCall?.callerName} handled by ${selectedCall?.agentUsed}`}
        maxWidth="2xl"
      >
        {selectedCall && (
          <div className="space-y-5 text-sm">
            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Caller</span>
                <span className="font-bold text-slate-800 mt-0.5 block truncate">
                  {selectedCall.callerName}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  {selectedCall.callerPhone}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block font-medium">Property</span>
                <span className="font-bold text-slate-800 mt-0.5 block truncate">
                  {selectedCall.property}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  {selectedCall.unit}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block font-medium">Timestamp</span>
                <span className="font-bold text-slate-800 mt-0.5 block">
                  {selectedCall.dateTime}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  Duration: {selectedCall.duration}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block font-medium">Sentiment</span>
                <div className="mt-1">
                  <StatusBadge status={selectedCall.sentiment} />
                </div>
              </div>
            </div>

            {/* Audio Player Simulator */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-transform active:scale-95 shadow-md shadow-blue-500/30"
                >
                  {isPlayingAudio ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  )}
                </button>
                <div>
                  <span className="text-xs font-semibold block text-slate-200">
                    High-Definition Audio Recording
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-slate-400 font-mono">
                      {isPlayingAudio ? '00:45' : '00:00'} / {selectedCall.duration}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-emerald-300 font-semibold">
                      128kbps stereo
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Download Audio"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* AI Executive Summary */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>AI Automated Call Summary</span>
              </div>
              <p className="text-xs text-blue-950 leading-relaxed font-normal">
                {selectedCall.summary}
              </p>
            </div>

            {/* Action Items Created */}
            {selectedCall.actionItems && selectedCall.actionItems.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Automated Next Actions
                </h4>
                <div className="space-y-1.5">
                  {selectedCall.actionItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Conversation Transcript */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Full Conversation Transcript
                </h4>
                <span className="text-[11px] text-slate-400 font-mono">
                  {selectedCall.transcript.length} turns
                </span>
              </div>

              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {selectedCall.transcript.map((msg, idx) => {
                  const isAgent = msg.speaker === 'Agent';
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col text-xs p-3 rounded-xl ${
                        isAgent
                          ? 'bg-blue-50/80 border border-blue-200/60 ml-4'
                          : 'bg-slate-100 border border-slate-200/60 mr-4'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`font-bold text-[11px] ${
                            isAgent ? 'text-blue-800' : 'text-slate-800'
                          }`}
                        >
                          {isAgent ? `🤖 FixNet AI (${selectedCall.agentUsed})` : `👤 ${selectedCall.callerName}`}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-slate-700 leading-relaxed font-normal">
                        {msg.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedCall(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close Record
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
