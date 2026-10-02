import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { AdminShell } from '@/components/AdminShell';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FixFlow AI — Autonomous Property Management & AI Voice Dispatch',
  description: 'Autonomous proptech OS powering 24/7 conversational voice dispatch, emergency repair triage, and automatic lease renewals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-full bg-[#070709] text-slate-100 antialiased font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
