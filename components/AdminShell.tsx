'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTenantPortal = pathname?.startsWith('/tenant');
  const isLandingPage = pathname === '/';

  // If visiting the tenant-facing portal or landing page, do not render admin sidebar or admin topnav
  if (isTenantPortal || isLandingPage) {
    return <>{children}</>;
  }

  // Admin Dashboard layout
  return (
    <div className="min-h-screen flex bg-[#F4F6FA] text-[#1E293B]">
      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col pl-60 min-w-0 transition-all">
        <TopNav />
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
