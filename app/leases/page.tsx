'use client';

import React, { useState } from 'react';
import {
  Plus,
  FileText,
  Calendar,
  DollarSign,
  Building,
  User,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  Search,
} from 'lucide-react';
import { DataTable, Column } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { Modal } from '@/components/Modal';
import { MultiStepForm, Step } from '@/components/MultiStepForm';
import { mockLeases, mockProperties, Lease } from '@/lib/mockData';
import { formatCurrency, formatDate } from '@/lib/utils';

const formSteps: Step[] = [
  { id: 1, name: 'Property & Unit' },
  { id: 2, name: 'Tenant Info' },
  { id: 3, name: 'Lease Terms' },
  { id: 4, name: 'Review & Confirm' },
];

export default function LeasesPage() {
  const [leases, setLeases] = useState<Lease[]>(mockLeases);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLeaseDetail, setSelectedLeaseDetail] = useState<Lease | null>(null);

  // New Lease Form State
  const [formData, setFormData] = useState({
    propertyId: mockProperties[0].id,
    propertyName: mockProperties[0].name,
    unit: 'Unit 301',
    tenantName: '',
    tenantEmail: '',
    tenantPhone: '',
    startDate: '2026-10-01',
    endDate: '2027-09-30',
    rentAmount: '2400',
    depositAmount: '2400',
    autoRenewalBot: true,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handlePropertyChange = (propId: string) => {
    const selected = mockProperties.find((p) => p.id === propId);
    setFormData((prev) => ({
      ...prev,
      propertyId: propId,
      propertyName: selected ? selected.name : '',
    }));
  };

  const validateStep = (step: number) => {
    const errors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.unit.trim()) errors.unit = 'Unit designation is required';
    } else if (step === 2) {
      if (!formData.tenantName.trim()) errors.tenantName = 'Tenant full name is required';
      if (!formData.tenantEmail.trim()) errors.tenantEmail = 'Tenant email is required';
      if (!formData.tenantPhone.trim()) errors.tenantPhone = 'Contact phone is required';
    } else if (step === 3) {
      if (!formData.rentAmount || Number(formData.rentAmount) <= 0)
        errors.rentAmount = 'Valid monthly rent is required';
      if (!formData.depositAmount || Number(formData.depositAmount) < 0)
        errors.depositAmount = 'Security deposit is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(4, prev + 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleCreateLease = () => {
    const newLease: Lease = {
      id: `LSE-${Math.floor(1000 + Math.random() * 9000)}`,
      tenantId: `usr-${Date.now()}`,
      tenantName: formData.tenantName,
      tenantEmail: formData.tenantEmail,
      tenantPhone: formData.tenantPhone,
      propertyId: formData.propertyId,
      propertyName: formData.propertyName,
      unit: formData.unit,
      startDate: formData.startDate,
      endDate: formData.endDate,
      rentAmount: Number(formData.rentAmount),
      depositAmount: Number(formData.depositAmount),
      status: 'Active',
      paymentStatus: 'Paid',
    };

    setLeases([newLease, ...leases]);
    setIsModalOpen(false);
    // Reset form
    setCurrentStep(1);
    setFormData({
      propertyId: mockProperties[0].id,
      propertyName: mockProperties[0].name,
      unit: 'Unit 301',
      tenantName: '',
      tenantEmail: '',
      tenantPhone: '',
      startDate: '2026-10-01',
      endDate: '2027-09-30',
      rentAmount: '2400',
      depositAmount: '2400',
      autoRenewalBot: true,
    });
  };

  const columns: Column<Lease>[] = [
    {
      key: 'tenantName',
      header: 'Tenant',
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-100">
            {item.tenantName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="font-semibold text-slate-900">{item.tenantName}</div>
            <div className="text-xs text-slate-400">{item.tenantEmail}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'propertyName',
      header: 'Property & Unit',
      sortable: true,
      render: (item) => (
        <div>
          <div className="font-medium text-slate-800">{item.propertyName}</div>
          <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-600 font-medium">
            {item.unit}
          </span>
        </div>
      ),
    },
    {
      key: 'startDate',
      header: 'Start Date',
      sortable: true,
      render: (item) => (
        <span className="text-xs text-slate-600 font-medium">
          {formatDate(item.startDate)}
        </span>
      ),
    },
    {
      key: 'endDate',
      header: 'End Date',
      sortable: true,
      render: (item) => (
        <span className="text-xs text-slate-600 font-medium">
          {formatDate(item.endDate)}
        </span>
      ),
    },
    {
      key: 'rentAmount',
      header: 'Rent Amount',
      sortable: true,
      render: (item) => (
        <span className="font-bold text-slate-900">
          {formatCurrency(item.rentAmount)}
          <span className="text-[11px] text-slate-400 font-normal"> / mo</span>
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (item) => <StatusBadge status={item.status} />,
    },
  ];

  const filterOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Expiring Soon', value: 'Expiring Soon' },
    { label: 'Expired', value: 'Expired' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Lease Agreements
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Active residential and commercial lease lifecycle management
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setCurrentStep(1);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Lease</span>
        </button>
      </div>

      {/* Leases Table */}
      <DataTable<Lease>
        columns={columns}
        data={leases}
        keyExtractor={(item) => item.id}
        searchPlaceholder="Search leases by tenant, property, or unit..."
        searchKeys={['tenantName', 'tenantEmail', 'propertyName', 'unit', 'status']}
        filterColumnKey="status"
        filterOptions={filterOptions}
        filterLabel="Lease Status"
        pageSize={7}
        onRowClick={(item) => setSelectedLeaseDetail(item)}
      />

      {/* Multi-Step Create Lease Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Lease Agreement"
        description="Configure unit, tenant details, payment terms, and automated AI renewal reminders."
        maxWidth="2xl"
      >
        <MultiStepForm steps={formSteps} currentStep={currentStep}>
          {/* Step 1: Property & Unit */}
          {currentStep === 1 && (
            <div className="space-y-4 py-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Property *
                </label>
                <select
                  value={formData.propertyId}
                  onChange={(e) => handlePropertyChange(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  {mockProperties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.city}) - {p.type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Unit or Suite Designation *
                </label>
                <input
                  type="text"
                  value={formData.unit}
                  onChange={(e) =>
                    setFormData({ ...formData, unit: e.target.value })
                  }
                  placeholder="e.g. Unit 302, Penthouse A, Suite 400"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                {formErrors.unit && (
                  <p className="text-[11px] text-rose-500 mt-1">{formErrors.unit}</p>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                <Building className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950">
                  <span className="font-semibold block">Smart Lock & Unit Linking</span>
                  Keyless smart locks for this unit will automatically sync digital access codes once the lease contract is finalized.
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Tenant Details */}
          {currentStep === 2 && (
            <div className="space-y-4 py-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  value={formData.tenantName}
                  onChange={(e) =>
                    setFormData({ ...formData, tenantName: e.target.value })
                  }
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                {formErrors.tenantName && (
                  <p className="text-[11px] text-rose-500 mt-1">{formErrors.tenantName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.tenantEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, tenantEmail: e.target.value })
                    }
                    placeholder="tenant@example.com"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                  {formErrors.tenantEmail && (
                    <p className="text-[11px] text-rose-500 mt-1">
                      {formErrors.tenantEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.tenantPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, tenantPhone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                  {formErrors.tenantPhone && (
                    <p className="text-[11px] text-rose-500 mt-1">
                      {formErrors.tenantPhone}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Lease Terms */}
          {currentStep === 3 && (
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Lease Start Date *
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Lease End Date *
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Monthly Rent ($ USD) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      value={formData.rentAmount}
                      onChange={(e) =>
                        setFormData({ ...formData, rentAmount: e.target.value })
                      }
                      placeholder="2400"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                  {formErrors.rentAmount && (
                    <p className="text-[11px] text-rose-500 mt-1">
                      {formErrors.rentAmount}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Security Deposit ($ USD) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      value={formData.depositAmount}
                      onChange={(e) =>
                        setFormData({ ...formData, depositAmount: e.target.value })
                      }
                      placeholder="2400"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                  {formErrors.depositAmount && (
                    <p className="text-[11px] text-rose-500 mt-1">
                      {formErrors.depositAmount}
                    </p>
                  )}
                </div>
              </div>

              {/* AI Renewal toggle */}
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">
                    Enable AI Auto-Renewal Voice Bot
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    Bot will phone tenant 60 days before expiry to negotiate renewals.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.autoRenewalBot}
                  onChange={(e) =>
                    setFormData({ ...formData, autoRenewalBot: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {currentStep === 4 && (
            <div className="space-y-4 py-2">
              <div className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                <div className="grid grid-cols-2 gap-4 pb-3 border-b border-slate-200/80 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Property & Unit</span>
                    <span className="font-bold text-slate-800 mt-0.5 block">
                      {formData.propertyName}
                    </span>
                    <span className="text-slate-600 font-semibold">{formData.unit}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Tenant</span>
                    <span className="font-bold text-slate-800 mt-0.5 block">
                      {formData.tenantName}
                    </span>
                    <span className="text-slate-500 text-[11px] block">
                      {formData.tenantEmail}
                    </span>
                    <span className="text-slate-500 text-[11px] block">
                      {formData.tenantPhone}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Term Period</span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">
                      {formatDate(formData.startDate)} — {formatDate(formData.endDate)}
                    </span>
                    <span className="text-[11px] text-emerald-600 font-medium">
                      12 Months Contract
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Financials</span>
                    <span className="font-bold text-blue-600 text-sm mt-0.5 block">
                      {formatCurrency(Number(formData.rentAmount))} / month
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Security Deposit: {formatCurrency(Number(formData.depositAmount))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Ready to activate. Digital contract signature request will be emailed to {formData.tenantEmail || 'the tenant'}.
                </span>
              </div>
            </div>
          )}

          {/* Form Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              disabled={currentStep === 1}
              onClick={prevStep}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCreateLease}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm shadow-emerald-500/20 transition-all active:scale-95"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Finalize & Create Lease</span>
              </button>
            )}
          </div>
        </MultiStepForm>
      </Modal>

      {/* Lease Detail Modal (when row is clicked) */}
      <Modal
        isOpen={!!selectedLeaseDetail}
        onClose={() => setSelectedLeaseDetail(null)}
        title={`Lease Agreement ${selectedLeaseDetail?.id}`}
        description={`Details for ${selectedLeaseDetail?.tenantName} at ${selectedLeaseDetail?.propertyName}`}
      >
        {selectedLeaseDetail && (
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Status</span>
                <StatusBadge status={selectedLeaseDetail.status} />
              </div>
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Tenant</span>
                <span className="font-bold text-slate-800">{selectedLeaseDetail.tenantName} ({selectedLeaseDetail.tenantPhone})</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Property & Unit</span>
                <span className="font-semibold text-slate-800">{selectedLeaseDetail.propertyName} - {selectedLeaseDetail.unit}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Active Duration</span>
                <span className="font-semibold text-slate-800">{formatDate(selectedLeaseDetail.startDate)} to {formatDate(selectedLeaseDetail.endDate)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Monthly Rent</span>
                <span className="font-bold text-blue-600 text-sm">{formatCurrency(selectedLeaseDetail.rentAmount)} / mo</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedLeaseDetail(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
