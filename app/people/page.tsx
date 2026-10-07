'use client';

import React, { useState } from 'react';
import {
  Users,
  Plus,
  Mail,
  Phone,
  Building,
  Calendar,
  DollarSign,
  ShieldAlert,
  CreditCard,
  FileText,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { DataTable, Column } from '@/components/DataTable';
import { StatusBadge } from '@/components/StatusBadge';
import { Modal } from '@/components/Modal';
import { mockTenants, mockProperties, Tenant } from '@/lib/mockData';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function PeoplePage() {
  const [tenants, setTenants] = useState<Tenant[]>(mockTenants);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');

  // Add Tenant Form State
  const [addForm, setAddForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAssigned: mockProperties[0].name,
    unit: 'Unit 201',
    leaseStatus: 'Active' as const,
    moveInDate: '2026-10-01',
    rentAmount: '2400',
    emergencyContact: '',
  });

  const handleAddTenant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.name || !addForm.email) return;

    const newTenant: Tenant = {
      id: `usr-${Date.now()}`,
      name: addForm.name,
      email: addForm.email,
      phone: addForm.phone || '+1 (555) 000-0000',
      propertyAssigned: addForm.propertyAssigned,
      unit: addForm.unit,
      leaseStatus: addForm.leaseStatus,
      moveInDate: addForm.moveInDate,
      rentAmount: Number(addForm.rentAmount),
      emergencyContact: addForm.emergencyContact || 'None provided',
      paymentHistory: [
        {
          id: `pay-${Date.now()}`,
          date: '2026-10-01',
          amount: Number(addForm.rentAmount),
          status: 'Paid',
          method: 'ACH Transfer',
        },
      ],
      notes: [
        {
          id: `not-${Date.now()}`,
          date: '2026-09-26',
          author: 'Aditya Patel (Manager)',
          content: 'Tenant profile onboarded into FixNet system.',
        },
      ],
    };

    setTenants([newTenant, ...tenants]);
    setIsAddModalOpen(false);
    setAddForm({
      name: '',
      email: '',
      phone: '',
      propertyAssigned: mockProperties[0].name,
      unit: 'Unit 201',
      leaseStatus: 'Active',
      moveInDate: '2026-10-01',
      rentAmount: '2400',
      emergencyContact: '',
    });
  };

  const handleAddNote = () => {
    if (!newNoteText.trim() || !selectedTenant) return;
    const newNote = {
      id: `not-${Date.now()}`,
      date: '2026-09-26',
      author: 'Aditya Patel (Manager)',
      content: newNoteText.trim(),
    };
    const updatedTenant = {
      ...selectedTenant,
      notes: [newNote, ...selectedTenant.notes],
    };
    setSelectedTenant(updatedTenant);
    setTenants((prev) =>
      prev.map((t) => (t.id === selectedTenant.id ? updatedTenant : t))
    );
    setNewNoteText('');
  };

  const columns: Column<Tenant>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
            {item.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="font-semibold text-slate-900">{item.name}</div>
            <div className="text-xs text-slate-400">Unit: {item.unit}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'email',
      header: 'Email',
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <span>{item.email}</span>
        </div>
      ),
    },
    {
      key: 'phone',
      header: 'Phone',
      render: (item) => (
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <Phone className="w-3.5 h-3.5 text-slate-400" />
          <span>{item.phone}</span>
        </div>
      ),
    },
    {
      key: 'propertyAssigned',
      header: 'Property Assigned',
      sortable: true,
      render: (item) => (
        <div className="font-medium text-xs text-slate-800">
          {item.propertyAssigned}
        </div>
      ),
    },
    {
      key: 'leaseStatus',
      header: 'Lease Status',
      sortable: true,
      render: (item) => <StatusBadge status={item.leaseStatus} />,
    },
    {
      key: 'moveInDate',
      header: 'Move-in Date',
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{formatDate(item.moveInDate)}</span>
        </div>
      ),
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
            Tenants & Residents Directory
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage resident communications, payment histories, and linked property units
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Add Tenant</span>
        </button>
      </div>

      {/* Tenants Table */}
      <DataTable<Tenant>
        columns={columns}
        data={tenants}
        keyExtractor={(item) => item.id}
        searchPlaceholder="Search by name, email, unit, or property..."
        searchKeys={['name', 'email', 'phone', 'propertyAssigned', 'unit']}
        filterColumnKey="leaseStatus"
        filterOptions={filterOptions}
        filterLabel="Status"
        pageSize={7}
        onRowClick={(item) => setSelectedTenant(item)}
      />

      {/* Tenant Detail Side Panel / Modal */}
      <Modal
        isOpen={!!selectedTenant}
        onClose={() => setSelectedTenant(null)}
        title={`Resident Dossier: ${selectedTenant?.name}`}
        description={`Unit ${selectedTenant?.unit} at ${selectedTenant?.propertyAssigned}`}
        maxWidth="2xl"
      >
        {selectedTenant && (
          <div className="space-y-5 text-xs">
            {/* Top Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div>
                <span className="text-slate-400 block font-medium">Contact Details</span>
                <span className="font-semibold text-slate-800 mt-1 block">
                  {selectedTenant.email}
                </span>
                <span className="text-slate-600 block mt-0.5">
                  {selectedTenant.phone}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block font-medium">Lease Status</span>
                <div className="mt-1">
                  <StatusBadge status={selectedTenant.leaseStatus} />
                </div>
                <span className="text-slate-500 text-[11px] block mt-1">
                  Move-in: {formatDate(selectedTenant.moveInDate)}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block font-medium">Monthly Rent</span>
                <span className="font-bold text-sm text-blue-600 mt-1 block">
                  {formatCurrency(selectedTenant.rentAmount)}
                </span>
                <span className="text-slate-400 text-[11px] block">
                  Emergency: {selectedTenant.emergencyContact}
                </span>
              </div>
            </div>

            {/* Payment History Section */}
            <div>
              <div className="flex items-center gap-1.5 mb-2 font-bold text-slate-800">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span>Rent Payment History</span>
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100">
                {selectedTenant.paymentHistory.map((pay) => (
                  <div
                    key={pay.id}
                    className="p-3 flex items-center justify-between bg-white text-xs"
                  >
                    <div>
                      <span className="font-semibold text-slate-800 block">
                        {formatCurrency(pay.amount)}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        {pay.date} via {pay.method}
                      </span>
                    </div>
                    <StatusBadge status={pay.status} />
                  </div>
                ))}
              </div>
            </div>

            {/* Activity & Operational Notes */}
            <div>
              <div className="flex items-center gap-1.5 mb-2 font-bold text-slate-800">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Notes & Interaction Logs</span>
              </div>

              <div className="space-y-2 mb-3 max-h-40 overflow-y-auto pr-1">
                {selectedTenant.notes.length === 0 ? (
                  <p className="text-slate-400 text-xs italic">
                    No notes recorded yet for this resident.
                  </p>
                ) : (
                  selectedTenant.notes.map((note) => (
                    <div
                      key={note.id}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs"
                    >
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-semibold text-slate-700">
                          {note.author}
                        </span>
                        <span>{note.date}</span>
                      </div>
                      <p className="text-slate-700">{note.content}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Add Note Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddNote();
                  }}
                  placeholder="Add a new manager note or log a phone call..."
                  className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleAddNote}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTenant(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                Close Dossier
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Add Tenant Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Register New Tenant"
        description="Add resident information and link them to an active property unit."
        maxWidth="lg"
      >
        <form onSubmit={handleAddTenant} className="space-y-4 text-xs">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Legal Name *
            </label>
            <input
              type="text"
              required
              value={addForm.name}
              onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
              placeholder="e.g. Jessica Taylor"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={addForm.email}
                onChange={(e) => setAddForm({ ...addForm, email: e.target.value })}
                placeholder="jessica@example.com"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={addForm.phone}
                onChange={(e) => setAddForm({ ...addForm, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Property *
              </label>
              <select
                value={addForm.propertyAssigned}
                onChange={(e) =>
                  setAddForm({ ...addForm, propertyAssigned: e.target.value })
                }
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                {mockProperties.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Unit Designation *
              </label>
              <input
                type="text"
                required
                value={addForm.unit}
                onChange={(e) => setAddForm({ ...addForm, unit: e.target.value })}
                placeholder="Unit 201"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Monthly Rent ($)
              </label>
              <input
                type="number"
                value={addForm.rentAmount}
                onChange={(e) =>
                  setAddForm({ ...addForm, rentAmount: e.target.value })
                }
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Move-In Date
              </label>
              <input
                type="date"
                value={addForm.moveInDate}
                onChange={(e) =>
                  setAddForm({ ...addForm, moveInDate: e.target.value })
                }
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Emergency Contact Info
            </label>
            <input
              type="text"
              value={addForm.emergencyContact}
              onChange={(e) =>
                setAddForm({ ...addForm, emergencyContact: e.target.value })
              }
              placeholder="e.g. Liam Taylor (Brother) - +1 (555) 999-8888"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Save Tenant</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
