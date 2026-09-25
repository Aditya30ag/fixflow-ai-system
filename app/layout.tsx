import type { Metadata } from 'next';
import './globals.css';
import { AdminShell } from '@/components/AdminShell';

export const metadata: Metadata = {
  title: 'Fiflow — AI Property Management SaaS',
  description: 'Autonomous AI property management dashboard for leases, calls, maintenance, and revenue.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#F4F6FA] text-[#1E293B] antialiased">
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
