'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CategoryItem {
  id: string;
  name: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

interface CategoryCardProps {
  category: CategoryItem;
  onClick: (category: CategoryItem) => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <button
      type="button"
      onClick={() => onClick(category)}
      className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs hover:shadow-md hover:border-indigo-300 hover:-translate-y-0.5 transition-all text-center flex flex-col items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
    >
      <div
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs',
          category.iconBg
        )}
      >
        <Icon className={cn('w-6 h-6', category.iconColor)} />
      </div>
      <span className="font-semibold text-xs text-slate-800 group-hover:text-indigo-600 transition-colors">
        {category.name}
      </span>
    </button>
  );
}
