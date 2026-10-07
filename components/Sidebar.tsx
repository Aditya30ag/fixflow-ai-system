'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  FileText,
  Bot,
  PhoneCall,
  Users,
  AlertTriangle,
  BarChart3,
  Settings,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIssues } from '@/lib/issuesStore';
import { FixLogo } from '@/components/FixLogo';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

export function Sidebar() {
  const pathname = usePathname();
  const { openCount } = useIssues();

  const navSections: NavSection[] = [
    {
      items: [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Properties', href: '/properties', icon: Building2 },
        { name: 'Leases', href: '/leases', icon: FileText },
        {
          name: 'Issues',
          href: '/dashboard/issues',
          icon: AlertCircle,
          badge: openCount > 0 ? `${openCount}` : undefined,
        },
      ],
    },
    {
      title: 'AI AUTOMATION',
      items: [
        { name: 'AI Agents', href: '/ai-agents', icon: Bot, badge: '6 Active' },
        { name: 'AI Call Logs', href: '/ai-call-logs', icon: PhoneCall },
      ],
    },
    {
      title: 'OPERATIONS',
      items: [
        { name: 'People', href: '/people', icon: Users },
        { name: 'Report Issue', href: '/report-issue', icon: AlertTriangle, badge: 'New' },
        { name: 'Reports', href: '/reports', icon: BarChart3 },
      ],
    },
    {
      title: 'TENANT EXPERIENCE',
      items: [
        { name: 'Tenant Portal', href: '/tenant/repair', icon: ExternalLink, badge: 'Live' },
      ],
    },
    {
      title: 'SYSTEM',
      items: [
        { name: 'Settings', href: '/settings', icon: Settings },
      ],
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-60 bg-[#0F1B2D] text-slate-300 flex flex-col border-r border-[#1E2E48] transition-all">
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-5 border-b border-[#1E2E48]">
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <FixLogo size={34} className="shrink-0 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight leading-none flex items-center gap-1.5">
              FixNet
              <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                AI SaaS
              </span>
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">
              Property Intelligence
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
        {navSections.map((section, sIndex) => (
          <div key={sIndex} className="space-y-1">
            {section.title && (
              <div className="px-3 pb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                {section.title}
              </div>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'group flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-all',
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30'
                        : 'text-slate-300 hover:bg-[#18263E] hover:text-white'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={cn(
                          'w-4 h-4 transition-colors',
                          isActive
                            ? 'text-white'
                            : 'text-slate-400 group-hover:text-slate-200'
                        )}
                      />
                      <span>{item.name}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={cn(
                          'text-[10px] px-1.5 py-0.5 rounded font-semibold transition-colors',
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-[#1E2E48] text-blue-400 group-hover:bg-[#253652]'
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* System Status & AI Guard Badge */}
      <div className="p-3 border-t border-[#1E2E48]">
        <div className="bg-[#142238] rounded-xl p-3 border border-[#203454]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-200">
                Autonomous Engine
              </span>
            </div>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="text-[11px] text-slate-400 mt-1 leading-snug">
            All 6 AI voice bots online. 12 calls processed today.
          </p>
        </div>

        {/* User Mini Profile */}
        <div className="mt-3 flex items-center justify-between px-2 pt-1 text-slate-400 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
              AP
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-medium text-slate-200 truncate">
                Aditya Patel
              </span>
              <span className="text-[10px] text-slate-400">Portfolio Owner</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
        </div>
      </div>
    </aside>
  );
}
