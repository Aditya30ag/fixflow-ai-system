'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  X,
  Building2,
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  Sparkles,
  PhoneCall,
  Wrench,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Send,
  Camera,
  Layers,
  ShieldCheck,
  ChevronDown,
  Info,
} from 'lucide-react';
import { Issue, IssueStatus, updateIssueStatus, addCommentToIssue } from '@/lib/issuesStore';
import { PriorityBadge } from '@/components/PriorityBadge';
import { StatusBadge } from '@/components/StatusBadge';
import { getCategoryIcon, getCategoryBadgeClass } from './IssueCard';
import { cn } from '@/lib/utils';

interface IssueDetailDrawerProps {
  issue: Issue | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChanged?: (newStatus: IssueStatus) => void;
}

export function IssueDetailDrawer({
  issue,
  isOpen,
  onClose,
  onStatusChanged,
}: IssueDetailDrawerProps) {
  const [currentIssue, setCurrentIssue] = useState<Issue | null>(issue);
  const [newCommentText, setNewCommentText] = useState('');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  // Sync internal state when prop changes
  useEffect(() => {
    setCurrentIssue(issue);
    if (issue?.photos && issue.photos.length > 0) {
      setActivePhoto(issue.photos[0]);
    } else if (issue?.photoUrl) {
      setActivePhoto(issue.photoUrl);
    } else {
      setActivePhoto(null);
    }
  }, [issue]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !currentIssue) return null;

  const handleStatusChange = (newStatus: IssueStatus) => {
    updateIssueStatus(currentIssue.id, newStatus);
    setCurrentIssue((prev) => (prev ? { ...prev, status: newStatus } : null));
    if (onStatusChanged) onStatusChanged(newStatus);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    addCommentToIssue(currentIssue.id, {
      author: 'Aditya Patel',
      role: 'Portfolio Owner',
      text: newCommentText.trim(),
      avatar: 'AP',
    });

    const newCommentObj = {
      id: `cm-${Date.now()}`,
      author: 'Aditya Patel',
      role: 'Portfolio Owner',
      avatar: 'AP',
      text: newCommentText.trim(),
      timestamp: 'Just now',
    };

    setCurrentIssue((prev) =>
      prev
        ? {
            ...prev,
            comments: [...(prev.comments || []), newCommentObj],
          }
        : null
    );

    setNewCommentText('');
  };

  const CategoryIcon = getCategoryIcon(currentIssue.category);
  const allPhotos = currentIssue.photos && currentIssue.photos.length > 0
    ? currentIssue.photos
    : currentIssue.photoUrl
    ? [currentIssue.photoUrl]
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="px-6 py-4 bg-[#0F1B2D] text-white border-b border-[#1E2E48] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                {currentIssue.id}
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold border',
                  getCategoryBadgeClass(currentIssue.category)
                )}
              >
                <CategoryIcon className="w-3 h-3" />
                <span>{currentIssue.category}</span>
              </span>
              <PriorityBadge priority={currentIssue.priority} />
            </div>

            <div className="flex items-center gap-3">
              {/* Status Change Dropdown */}
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                <span className="text-[11px] text-slate-400">Status:</span>
                <select
                  value={currentIssue.status === 'Pending' ? 'Open' : currentIssue.status}
                  onChange={(e) => handleStatusChange(e.target.value as IssueStatus)}
                  aria-label="Change issue status"
                  className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Open" className="bg-[#0F1B2D] text-white">
                    Open
                  </option>
                  <option value="In Progress" className="bg-[#0F1B2D] text-white">
                    In Progress
                  </option>
                  <option value="Resolved" className="bg-[#0F1B2D] text-white">
                    Resolved
                  </option>
                </select>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-800">
            {/* Title & Property Header */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                {currentIssue.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <Link
                    href={`/properties?id=${currentIssue.propertyId}`}
                    className="hover:text-blue-600 hover:underline"
                  >
                    {currentIssue.propertyName}
                  </Link>
                  <span className="text-slate-400">•</span>
                  <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                    {currentIssue.unit}
                  </span>
                </div>

                <span className="text-slate-300">|</span>

                <div className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Reported {currentIssue.reportedDate}</span>
                </div>
              </div>
            </div>

            {/* Quick Meta Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px] font-medium">Tenant</span>
                <span className="font-bold text-slate-900 block truncate mt-0.5">
                  {currentIssue.reporterName}
                </span>
                <span className="text-[11px] text-slate-500 truncate block">
                  {currentIssue.reporterContact}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-medium">Source</span>
                <div className="mt-1">
                  {currentIssue.source === 'AI Call' ? (
                    <Link
                      href={currentIssue.callLogId ? `/ai-call-logs?callId=${currentIssue.callLogId}` : '/ai-call-logs'}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>AI Call Log</span>
                    </Link>
                  ) : currentIssue.source === 'Tenant Portal' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <ExternalLink className="w-3 h-3" />
                      <span>Tenant Portal</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      <span>Manual Staff</span>
                    </span>
                  )}
                </div>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-medium">Cost Estimate</span>
                <span className="font-bold text-slate-900 block mt-0.5 text-sm text-blue-600">
                  {currentIssue.costEstimate || 'Pending Diagnostic'}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-medium">Assigned Agent</span>
                <span className="font-semibold text-slate-800 block mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-500 shrink-0" />
                  <span className="truncate">{currentIssue.assignedAgent || 'Autonomous AI'}</span>
                </span>
              </div>
            </div>

            {/* AI Summary & Recommended Action Banner */}
            {currentIssue.aiSummary && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-white border border-blue-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                      AI Triage & Diagnosis
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full">
                    Autonomous Dispatch Ready
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {currentIssue.aiSummary}
                </p>

                {currentIssue.aiRecommendedAction && (
                  <div className="mt-2 pt-2 border-t border-blue-100 flex items-start gap-2 text-xs">
                    <span className="font-bold text-indigo-900 shrink-0">Recommendation:</span>
                    <span className="text-indigo-800">{currentIssue.aiRecommendedAction}</span>
                  </div>
                )}
              </div>
            )}

            {/* Full Issue Description */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Full Description & Symptoms
              </h3>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                {currentIssue.description}
              </div>
            </div>

            {/* Dispatch Status & Assigned Vendor Card */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Vendor & Voice Dispatch Status
              </h3>
              <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">
                        {currentIssue.assignedVendor || 'Preferred Contractor Assigned'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {currentIssue.dispatchStatus?.vendorPhone || '+1 (555) 987-1122'}
                      </div>
                    </div>
                  </div>

                  {currentIssue.dispatchStatus && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{currentIssue.dispatchStatus.status}</span>
                      </span>
                    </div>
                  )}
                </div>

                {currentIssue.dispatchStatus?.voiceDispatchSummary && (
                  <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200/60 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                      <PhoneCall className="w-3 h-3 text-blue-500" />
                      <span>AI Voice Dispatch Summary:</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-normal">
                      {currentIssue.dispatchStatus.voiceDispatchSummary}
                    </p>
                    {currentIssue.dispatchStatus.eta && (
                      <div className="pt-1 text-[11px] font-semibold text-blue-600">
                        Expected Arrival Window: {currentIssue.dispatchStatus.eta}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Photos Section */}
            {allPhotos.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-slate-400" />
                    <span>Inspection & Damage Photos ({allPhotos.length})</span>
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allPhotos.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActivePhoto(imgUrl)}
                      className={cn(
                        'aspect-video rounded-lg overflow-hidden border bg-slate-100 cursor-pointer relative group transition-all',
                        activePhoto === imgUrl
                          ? 'ring-2 ring-blue-500 border-blue-400 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300'
                      )}
                    >
                      <img
                        src={imgUrl}
                        alt={`Photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-semibold">
                        View Image
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline / Activity Log */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Ticket Lifecycle & Activity Log</span>
              </h3>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {currentIssue.timeline && currentIssue.timeline.length > 0 ? (
                  currentIssue.timeline.map((event) => (
                    <div key={event.id} className="relative text-xs">
                      {/* Timeline dot */}
                      <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white" />
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">{event.title}</span>
                        <span className="text-[11px] text-slate-400">{event.timestamp}</span>
                      </div>
                      <p className="text-slate-600 mt-0.5 text-[11px] leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400">No activity logged yet.</p>
                )}
              </div>
            </div>

            {/* Comments & Internal Notes */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                <span>Internal Notes & Vendor Comments ({currentIssue.comments?.length || 0})</span>
              </h3>

              {/* Comments List */}
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {currentIssue.comments && currentIssue.comments.length > 0 ? (
                  currentIssue.comments.map((cm) => (
                    <div
                      key={cm.id}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">
                            {cm.avatar || cm.author.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="font-bold text-slate-800">{cm.author}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200/80 text-slate-600">
                            {cm.role}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400">{cm.timestamp}</span>
                      </div>
                      <p className="text-slate-700 text-xs pl-7 leading-normal">
                        {cm.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-xs text-slate-400 italic">
                    No comments yet. Add an internal note below.
                  </div>
                )}
              </div>

              {/* Add Comment Input */}
              <form onSubmit={handleAddComment} className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Write an internal note or vendor update..."
                  className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!newCommentText.trim()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none rounded-lg transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post</span>
                </button>
              </form>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
            <span className="text-slate-400">
              Ticket last synchronized: <strong className="text-slate-600">{currentIssue.updatedAt || 'Just now'}</strong>
            </span>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors shadow-2xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
