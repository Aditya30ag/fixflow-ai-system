'use client';

import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Users,
  DollarSign,
  Plus,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { mockProperties, Property } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';
import { Modal } from '@/components/Modal';

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProp, setNewProp] = useState({
    name: '',
    address: '',
    city: '',
    unitsCount: '20',
    type: 'Residential' as const,
    monthlyRevenue: '45000',
  });

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
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-sm">
                      {prop.type}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">
                        {prop.name}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {prop.address}, {prop.city}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-xs">
                    <div>
                      <span className="text-slate-400 block font-medium">Monthly Gross</span>
                      <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                        {formatCurrency(prop.monthlyRevenue)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Occupancy</span>
                      <span className="font-bold text-emerald-600 text-sm mt-0.5 block">
                        {prop.occupiedUnits} / {prop.unitsCount} Units ({occupancyRate}%)
                      </span>
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
                <span className="text-slate-400 font-medium">AI Guard Online</span>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer">
                  <span>View Units & Leases</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Property"
        description="Register a building into the Fiflow autonomous management system."
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
