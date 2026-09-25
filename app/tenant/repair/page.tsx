'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  ArrowRight,
  MessageSquare,
  Wrench,
  Clock,
  Droplets,
  Zap,
  Flame,
  Tv,
  Bug,
  Lock,
  Paintbrush,
  Hammer,
  Sparkles,
  Wifi,
  DoorClosed,
  Layers,
} from 'lucide-react';
import { FeatureCard } from '@/components/tenant/FeatureCard';
import { CategoryCard, CategoryItem } from '@/components/tenant/CategoryCard';

const categories: CategoryItem[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: Droplets,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: Zap,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
  },
  {
    id: 'heating-ac',
    name: 'Heating & AC',
    icon: Flame,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
  },
  {
    id: 'appliances',
    name: 'Appliances',
    icon: Tv,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    icon: Bug,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    id: 'locks-security',
    name: 'Locks & Security',
    icon: Lock,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: Paintbrush,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-50',
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    icon: Hammer,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: Sparkles,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
  },
  {
    id: 'internet-wifi',
    name: 'Internet / WiFi',
    icon: Wifi,
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
  },
  {
    id: 'windows-doors',
    name: 'Windows & Doors',
    icon: DoorClosed,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
  },
  {
    id: 'flooring',
    name: 'Flooring',
    icon: Layers,
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-100',
  },
];

export default function TenantRepairLandingPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/tenant/repair/chat?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleCategoryClick = (category: CategoryItem) => {
    router.push(`/tenant/repair/chat?category=${encodeURIComponent(category.name)}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What can we help you with?
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          Describe your issue and our AI assistant will guide you through fixing it step by step.
        </p>

        {/* Search / Input Bar (wide, centered, rounded-full) */}
        <form onSubmit={handleSearchSubmit} className="pt-3">
          <div className="relative flex items-center bg-white rounded-full shadow-md border border-slate-200/90 p-1.5 max-w-xl mx-auto focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Describe your issue or ask anything..."
              className="flex-1 bg-transparent px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#4F46E5] hover:bg-indigo-700 text-white flex items-center justify-center shrink-0 shadow-sm transition-all active:scale-95"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              <span className="sr-only">Submit inquiry</span>
            </button>
          </div>
        </form>

        <p className="text-[11px] text-slate-400">
          AI assistant provides guidance. For emergencies, call your property manager directly.
        </p>
      </div>

      {/* Feature Cards Row (3 cards, horizontal) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard
          title="AI Chat Support"
          subtitle="Get instant guidance from our smart assistant"
          icon={MessageSquare}
          iconColor="text-indigo-600"
          iconBg="bg-indigo-50"
        />

        <FeatureCard
          title="Self-Service First"
          subtitle="Fix issues yourself with step-by-step help"
          icon={Wrench}
          iconColor="text-blue-600"
          iconBg="bg-blue-50"
        />

        <FeatureCard
          title="Expert On-Demand"
          subtitle="Book a pro visit when you need hands-on help"
          icon={Clock}
          iconColor="text-purple-600"
          iconBg="bg-purple-50"
        />
      </div>

      {/* Category Grid Section */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <h2 className="text-sm sm:text-base font-bold text-slate-900">
            Or choose a category
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            12 services
          </span>
        </div>

        {/* 4-column grid (2 cols on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
