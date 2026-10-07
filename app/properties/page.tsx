'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Building2,
  MapPin,
  Users,
  DollarSign,
  Plus,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Wrench,
  ShieldCheck,
  X,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { mockProperties, Property } from '@/lib/mockData';
import { formatCurrency, cn } from '@/lib/utils';
import { Modal } from '@/components/Modal';
import { useIssues, Issue } from '@/lib/issuesStore';
import { IssueTable } from '@/components/issues/IssueTable';
import { IssueDetailDrawer } from '@/components/issues/IssueDetailDrawer';

function PropertiesContent() {
  const searchParams = useSearchParams();
  const { issues } = useIssues();

  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPropertyDetail, setSelectedPropertyDetail] = useState<Property | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'issues'>('overview');
  const [selectedDetailIssue, setSelectedDetailIssue] = useState<Issue | null>(null);

  const [newProp, setNewProp] = useState({
    name: '',
    address: '',
    city: '',
    unitsCount: '20',
    type: 'Residential' as const,
    monthlyRevenue: '45000',
  });

  // Handle URL query parameter linking directly to a property e.g. /properties?id=prop-1
  useEffect(() => {
    const propId = searchParams.get('id');
    if (propId) {
      const match = properties.find((p) => p.id === propId);
      if (match) {
        setSelectedPropertyDetail(match);
        setActiveTab('issues'); // Default to issues tab when coming from link
      }
    }
  }, [searchParams, properties]);

  const handleAddProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProp.name) return;

    const prop: Property = {
      id: `prop-${Date.now()}`,
      name: newProp.name,
      address: newProp.address,
      city: newProp.city,
      unitsCount: Number(newProp.unitsCount),
      occupiedUnits: Number(newProp.unitsCount) - 1,
      type: newProp.type,
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
      monthlyRevenue: Number(newProp.monthlyRevenue),
    };

    setProperties([prop, ...properties]);
    setIsAddModalOpen(false);
  };

  // Issues filtered for the selected property detail view
  const selectedPropIssues = selectedPropertyDetail
    ? issues.filter((i) => i.propertyId === selectedPropertyDetail.id)
    : [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Portfolio Buildings & Properties
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Overview of commercial and multi-family residential complexes
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Add Property</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((prop) => {
          const occupancyRate = Math.round(
            (prop.occupiedUnits / prop.unitsCount) * 100
          );

          // Calculate open issues for this property
          const propOpenIssuesCount = issues.filter(
            (i) => i.propertyId === prop.id && i.status !== 'Resolved'
          ).length;

          return (
            <div
              key={prop.id}
              className="card-base card-hover overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-44 w-full relative overflow-hidden bg-slate-100">
                  <img
                    src={prop.imageUrl}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {propOpenIssuesCount > 0 && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{propOpenIssuesCount} Open</span>
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-sm">
                      {prop.type}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        onClick={() => {
                          setSelectedPropertyDetail(prop);
                          setActiveTab('overview');
                        }}
                        className="font-bold text-base text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {prop.name}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {prop.address}, {prop.city}
                      </p>
                    </div>
                  </div>

                  {/* 3-column stats strip including Open Issues */}
                  <div className="mt-4 grid grid-cols-3 gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-xs">
                    <div>
                      <span className="text-slate-400 block font-medium">Monthly Gross</span>
                      <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                        {formatCurrency(prop.monthlyRevenue)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Occupancy</span>
                      <span className="font-bold text-emerald-600 text-sm mt-0.5 block">
                        {prop.occupiedUnits}/{prop.unitsCount} ({occupancyRate}%)
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Open Issues</span>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPropertyDetail(prop);
                          setActiveTab('issues');
                        }}
                        className={cn(
                          'font-bold text-sm mt-0.5 block flex items-center gap-1 hover:underline cursor-pointer',
                          propOpenIssuesCount > 0 ? 'text-amber-600' : 'text-emerald-600'
                        )}
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{propOpenIssuesCount} Open</span>
                      </button>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full"
                      style={{ width: `${occupancyRate}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  AI Guard Online
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPropertyDetail(prop);
                      setActiveTab('issues');
                    }}
                    className="text-slate-600 hover:text-blue-600 font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Wrench className="w-3 h-3 text-slate-400" />
                    <span>Issues</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPropertyDetail(prop);
                      setActiveTab('overview');
                    }}
                    className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Property Detail View (Modal with Overview and Issues tabs) */}
      {selectedPropertyDetail && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 bg-[#0F1B2D] text-white flex items-start justify-between border-b border-[#1E2E48]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-white/10">
                  <img
                    src={selectedPropertyDetail.imageUrl}
                    alt={selectedPropertyDetail.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase">
                      {selectedPropertyDetail.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      ID: {selectedPropertyDetail.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedPropertyDetail.name}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {selectedPropertyDetail.address}, {selectedPropertyDetail.city}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPropertyDetail(null)}
                aria-label="Close property detail"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-4 px-6 border-b border-slate-200 bg-slate-50/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={cn(
                  'py-3 border-b-2 transition-all cursor-pointer',
                  activeTab === 'overview'
                    ? 'border-blue-600 text-blue-600 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                )}
              >
                Overview & Operations
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('issues')}
                className={cn(
                  'py-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer',
                  activeTab === 'issues'
                    ? 'border-blue-600 text-blue-600 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                )}
              >
                <span>Maintenance Issues</span>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded-full text-[10px]',
                    activeTab === 'issues'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-slate-200 text-slate-600'
                  )}
                >
                  {selectedPropIssues.length}
                </span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {activeTab === 'overview' ? (
                <div className="space-y-6">
                  {/* Overview Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[11px] font-medium text-slate-400 block">
                        Monthly Revenue
                      </span>
                      <span className="text-base font-bold text-slate-900 mt-1 block">
                        {formatCurrency(selectedPropertyDetail.monthlyRevenue)}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[11px] font-medium text-slate-400 block">
                        Total Capacity
                      </span>
                      <span className="text-base font-bold text-slate-900 mt-1 block">
                        {selectedPropertyDetail.unitsCount} Units
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[11px] font-medium text-slate-400 block">
                        Occupancy
                      </span>
                      <span className="text-base font-bold text-emerald-600 mt-1 block">
                        {selectedPropertyDetail.occupiedUnits} / {selectedPropertyDetail.unitsCount} (
                        {Math.round(
                          (selectedPropertyDetail.occupiedUnits /
                            selectedPropertyDetail.unitsCount) *
                            100
                        )}
                        %)
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[11px] font-medium text-slate-400 block">
                        Open Issues
                      </span>
                      <span className="text-base font-bold text-amber-600 mt-1 block">
                        {selectedPropIssues.filter((i) => i.status !== 'Resolved').length} Tickets
                      </span>
                    </div>
                  </div>

                  {/* AI Autonomous Operations Card */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200/70 space-y-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-blue-900">
                        Autonomous AI Coverage Status
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      All units in {selectedPropertyDetail.name} are guarded by FixNet Autonomous Voice Dispatch.
                      Emergency calls are triaged 24/7 with instant contractor dispatch.
                    </p>
                    <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-blue-700">
                      <Link href="/ai-agents" className="hover:underline flex items-center gap-1">
                        <span>Configure AI Bots</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="/leases" className="hover:underline flex items-center gap-1">
                        <span>Manage Leases</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                /* Issues Tab: Lists only this property's issues reusing IssueTable */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Active Maintenance Tickets for {selectedPropertyDetail.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        Listing all open, in-progress, and resolved repair requests for this property
                      </p>
                    </div>

                    <Link
                      href="/report-issue"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+ Report Issue</span>
                    </Link>
                  </div>

                  {/* Reused IssueTable */}
                  <IssueTable
                    issues={selectedPropIssues}
                    onSelectIssue={(issue) => setSelectedDetailIssue(issue)}
                    showPropertyColumn={false}
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Viewing property ID: <strong className="text-slate-700">{selectedPropertyDetail.id}</strong>
              </span>
              <button
                type="button"
                onClick={() => setSelectedPropertyDetail(null)}
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 font-semibold text-slate-700 shadow-2xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Issue Detail Drawer when an issue is selected from within the property detail view */}
      <IssueDetailDrawer
        issue={selectedDetailIssue}
        isOpen={!!selectedDetailIssue}
        onClose={() => setSelectedDetailIssue(null)}
        onStatusChanged={(newStatus) => {
          if (selectedDetailIssue) {
            setSelectedDetailIssue({ ...selectedDetailIssue, status: newStatus });
          }
        }}
      />

      {/* Add Property Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Property"
        description="Register a building into the FixNet autonomous management system."
      >
        <form onSubmit={handleAddProperty} className="space-y-4 text-xs">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Property Name *
            </label>
            <input
              type="text"
              required
              value={newProp.name}
              onChange={(e) => setNewProp({ ...newProp, name: e.target.value })}
              placeholder="e.g. Marina Bay Residences"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                value={newProp.address}
                onChange={(e) => setNewProp({ ...newProp, address: e.target.value })}
                placeholder="100 Marina Blvd"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                City, State
              </label>
              <input
                type="text"
                value={newProp.city}
                onChange={(e) => setNewProp({ ...newProp, city: e.target.value })}
                placeholder="San Diego, CA"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Total Units
              </label>
              <input
                type="number"
                value={newProp.unitsCount}
                onChange={(e) => setNewProp({ ...newProp, unitsCount: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Type
              </label>
              <select
                value={newProp.type}
                onChange={(e) => setNewProp({ ...newProp, type: e.target.value as any })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Save Property
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading portfolio...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
