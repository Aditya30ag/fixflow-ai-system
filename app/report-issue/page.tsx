'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  UploadCloud,
  CheckCircle2,
  Clock,
  Sparkles,
  Wrench,
  Zap,
  Droplets,
  HelpCircle,
  X,
  FileImage,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { DataTable, Column } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { mockProperties, Issue } from '@/lib/mockData';
import { useIssues } from '@/lib/issuesStore';

const categories = [
  { id: 'Plumbing', label: 'Plumbing', icon: Droplets, color: 'text-blue-500' },
  { id: 'Electrical', label: 'Electrical', icon: Zap, color: 'text-amber-500' },
  { id: 'Maintenance', label: 'Maintenance', icon: Wrench, color: 'text-emerald-500' },
  { id: 'Other', label: 'Other', icon: HelpCircle, color: 'text-purple-500' },
];

const priorityLevels = [
  { id: 'Low', label: 'Low', desc: 'Cosmetic or minor wear', color: 'border-slate-300 text-slate-700 bg-slate-50', active: 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-200' },
  { id: 'Medium', label: 'Medium', desc: 'Standard repair in 24-48h', color: 'border-amber-300 text-amber-700 bg-amber-50', active: 'border-amber-500 bg-amber-50 text-amber-800 ring-2 ring-amber-200' },
  { id: 'High', label: 'High', desc: 'Affects tenant daily routine', color: 'border-orange-300 text-orange-700 bg-orange-50', active: 'border-orange-500 bg-orange-50 text-orange-800 ring-2 ring-orange-200' },
  { id: 'Urgent', label: 'Urgent', desc: 'Active leak, safety hazard', color: 'border-rose-300 text-rose-700 bg-rose-50', active: 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-200' },
];

export default function ReportIssuePage() {
  const { issues, addIssue } = useIssues();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [selectedPropertyId, setSelectedPropertyId] = useState(mockProperties[0].id);
  const [unit, setUnit] = useState('');
  const [category, setCategory] = useState<'Maintenance' | 'Electrical' | 'Plumbing' | 'Other'>('Plumbing');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High' | 'Urgent'>('Medium');
  const [description, setDescription] = useState('');
  const [reporterName, setReporterName] = useState('Aditya Patel');
  const [reporterContact, setReporterContact] = useState('+1 (555) 234-5678');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const propertyObj = mockProperties.find((p) => p.id === selectedPropertyId);

    const newIssue: Issue = {
      id: `ISS-${Math.floor(505 + Math.random() * 490)}`,
      title: `${category} Issue at ${unit.trim() || 'General Area'}`,
      propertyId: selectedPropertyId,
      propertyName: propertyObj ? propertyObj.name : 'Sunset Heights Apartments',
      unit: unit.trim() || 'General Area',
      category,
      priority,
      status: 'Open',
      reportedDate: 'Just now',
      createdAt: new Date().toISOString(),
      updatedAt: 'Just now',
      description,
      reporterName,
      reporterContact,
      source: 'Manual',
      assignedAgent:
        category === 'Plumbing' || category === 'Electrical'
          ? 'Maintenance Coordinator AI'
          : 'Vendor & Contractor Dispatcher',
      assignedVendor:
        category === 'Plumbing'
          ? 'Apex Emergency Plumbing Pros'
          : category === 'Electrical'
          ? 'VoltMaster Commercial Electrical'
          : 'Preferred Facility Techs',
      costEstimate: '$150 - $280',
      photos:
        uploadedFiles.length > 0
          ? uploadedFiles
          : ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'],
      timeline: [
        {
          id: `tl-${Date.now()}-1`,
          title: 'Issue Submitted Manually',
          description: `Ticket created by ${reporterName} via Operations Portal`,
          timestamp: 'Just now',
          type: 'report',
        },
        {
          id: `tl-${Date.now()}-2`,
          title: 'AI Coordinator Assigned',
          description: 'Triaged and queued for contractor confirmation',
          timestamp: 'Just now',
          type: 'ai',
        },
      ],
      comments: [],
    };

    addIssue(newIssue);
    setIsSubmitted(true);
    // Reset Form
    setDescription('');
    setUnit('');
    setUploadedFiles([]);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4500);
  };

  const handleSimulateUpload = () => {
    setUploadedFiles((prev) => [
      ...prev,
      `inspection_photo_${prev.length + 1}.jpg`,
    ]);
  };

  const removeUploadedFile = (idx: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const columns: Column<Issue>[] = [
    {
      key: 'id',
      header: 'Ticket ID',
      sortable: true,
      render: (item) => (
        <span className="font-mono font-bold text-xs text-blue-600">
          {item.id}
        </span>
      ),
    },
    {
      key: 'propertyName',
      header: 'Property & Unit',
      sortable: true,
      render: (item) => (
        <div>
          <div className="font-semibold text-slate-800">{item.propertyName}</div>
          <div className="text-xs text-slate-400">{item.unit}</div>
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      sortable: true,
      render: (item) => (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 font-medium">
          {item.category === 'Plumbing' && <Droplets className="w-3 h-3 text-blue-500" />}
          {item.category === 'Electrical' && <Zap className="w-3 h-3 text-amber-500" />}
          {item.category === 'Maintenance' && <Wrench className="w-3 h-3 text-emerald-500" />}
          {item.category === 'Other' && <HelpCircle className="w-3 h-3 text-purple-500" />}
          {item.category}
        </span>
      ),
    },
    {
      key: 'priority',
      header: 'Priority',
      sortable: true,
      render: (item) => <StatusBadge status={item.priority} />,
    },
    {
      key: 'description',
      header: 'Description',
      render: (item) => (
        <p className="text-xs text-slate-600 max-w-xs line-clamp-1">
          {item.description}
        </p>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (item) => <StatusBadge status={item.status} />,
    },
    {
      key: 'assignedAgent',
      header: 'AI Dispatch Agent',
      render: (item) => (
        <span className="inline-flex items-center gap-1 text-xs text-slate-600 font-medium">
          <Sparkles className="w-3 h-3 text-blue-500" />
          {item.assignedAgent || 'Autonomous AI'}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Report & Dispatch Maintenance Issue
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Submit repair requests. The Maintenance Coordinator AI will automatically triage urgency and notify preferred contractors.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/dashboard/issues"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold shadow-2xs transition-all active:scale-95"
          >
            <Wrench className="w-3.5 h-3.5 text-blue-600" />
            <span>View All Issues</span>
          </Link>
          <Link
            href="/tenant/repair"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold shadow-2xs transition-all active:scale-95"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Tenant Portal</span>
          </Link>
        </div>
      </div>

      {/* Success Notification Banner */}
      {isSubmitted && (
        <div className="card-base p-4 bg-emerald-50 border-emerald-200 text-emerald-900 flex items-center justify-between animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs font-bold">
                Ticket Created & AI Dispatch Agent Activated!
              </p>
              <p className="text-[11px] text-emerald-700">
                The Maintenance Coordinator bot is matching certified contractors and checking warranty coverage.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/issues"
              className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
            >
              View in Issues Dashboard →
            </Link>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-emerald-700 hover:text-emerald-900 text-xs font-medium"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main Form Section */}
      <div className="card-base p-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Property Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Target Property *
              </label>
              <select
                value={selectedPropertyId}
                onChange={(e) => setSelectedPropertyId(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
              >
                {mockProperties.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.city})
                  </option>
                ))}
              </select>
            </div>

            {/* Unit designation */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Unit / Specific Location *
              </label>
              <input
                type="text"
                value={unit}
                required
                onChange={(e) => setUnit(e.target.value)}
                placeholder="e.g. Unit 402, Common Laundry Room, Lobby Elevator"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Issue Category Radio Buttons */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Issue Category *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id as any)}
                    className={`p-3 rounded-xl border flex items-center gap-3 transition-all text-left ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/70 text-blue-900 ring-2 ring-blue-100 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${cat.color}`} />
                    <span className="text-xs font-semibold">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Priority Level Radio with Color Coding */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Priority Level *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {priorityLevels.map((lvl) => {
                const isSelected = priority === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setPriority(lvl.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected ? lvl.active : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{lvl.label}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          lvl.id === 'Urgent'
                            ? 'bg-rose-500'
                            : lvl.id === 'High'
                            ? 'bg-orange-500'
                            : lvl.id === 'Medium'
                            ? 'bg-amber-500'
                            : 'bg-blue-500'
                        }`}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {lvl.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Issue Description & Symptoms *
            </label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue in detail. e.g. Water leak under bathroom sink faucet dripping onto vanity cabinet floor. Tenant has placed a bowl underneath."
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 leading-relaxed"
            />
          </div>

          {/* Photo Upload Drag & Drop Zone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Attach Photos or Diagnostic Videos
            </label>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleSimulateUpload();
              }}
              onClick={handleSimulateUpload}
              className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50'
              }`}
            >
              <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">
                Click or drag & drop diagnostic photos here
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                PNG, JPG or MP4 up to 25MB (Simulated Upload)
              </p>
            </div>

            {/* Uploaded Files Chips */}
            {uploadedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {uploadedFiles.map((file, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium"
                  >
                    <FileImage className="w-3.5 h-3.5" />
                    <span>{file}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeUploadedFile(idx);
                      }}
                      className="hover:text-rose-600 ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Reporter Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Reporter / Tenant Name
              </label>
              <input
                type="text"
                value={reporterName}
                onChange={(e) => setReporterName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Callback Contact Phone
              </label>
              <input
                type="tel"
                value={reporterContact}
                onChange={(e) => setReporterContact(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Form Action Button */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>AI Triage SLA: under 120 seconds</span>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-blue-500/25 transition-all active:scale-95"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Submit Ticket & Dispatch AI</span>
            </button>
          </div>
        </form>
      </div>

      {/* Issues List Table Below Form */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-sm text-slate-900">
              Active & Historic Reported Issues
            </h3>
            <p className="text-xs text-slate-500">
              Real-time repair ticket lifecycle and technician dispatch status
            </p>
          </div>
        </div>

        <DataTable<Issue>
          columns={columns}
          data={issues}
          keyExtractor={(item) => item.id}
          searchPlaceholder="Search tickets by property, unit, or category..."
          searchKeys={['id', 'propertyName', 'unit', 'category', 'description']}
          filterColumnKey="status"
          filterOptions={[
            { label: 'Pending', value: 'Pending' },
            { label: 'In Progress', value: 'In Progress' },
            { label: 'Resolved', value: 'Resolved' },
          ]}
          filterLabel="Status"
          pageSize={6}
        />
      </div>
    </div>
  );
}
