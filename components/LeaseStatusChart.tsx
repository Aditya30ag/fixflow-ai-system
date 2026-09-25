'use client';

import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import { mockLeaseStatusBreakdown } from '@/lib/mockData';

export function LeaseStatusChart() {
  const totalUnits = mockLeaseStatusBreakdown.reduce(
    (acc, curr) => acc + curr.value,
    0
  );

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = ((data.value / totalUnits) * 100).toFixed(1);
      return (
        <div className="bg-slate-900 text-white p-2.5 rounded-lg shadow-xl text-xs space-y-0.5 border border-slate-700">
          <p className="font-semibold text-slate-200">{data.name}</p>
          <p className="font-bold text-blue-400">
            {data.value} units ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full h-56 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={mockLeaseStatusBreakdown}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {mockLeaseStatusBreakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-slate-900 leading-none">
            {totalUnits}
          </span>
          <span className="text-[11px] text-slate-400 font-medium mt-1">
            Total Units
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="w-full grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
        {mockLeaseStatusBreakdown.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="truncate">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-slate-800 mt-0.5">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
