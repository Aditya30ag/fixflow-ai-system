import type { Metadata } from 'next';
import { TenantHeader } from '@/components/tenant/TenantHeader';

export const metadata: Metadata = {
  title: 'Martin and Co — Repair Services | Tenant Portal',
  description: 'Self-service repair guidance and AI maintenance assistant.',
};

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#1E293B] flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
      <TenantHeader />
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}
