import React from 'react';
import { landingData } from './landingData';
import { Container, Button } from './Primitives';
import { ArrowRight, PhoneCall, CheckCircle2, Volume2, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  const { hero } = landingData;

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <Container size="default">
        {/* Deepdale Signature Pill Enclosure */}
        <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border border-white/80 bg-[#e4e6ed] shadow-[0_20px_70px_rgba(18,22,33,0.08)] p-6 sm:p-10 lg:p-14">
          {/* Lighter Multi-Stop Gradient Background */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,245,249,0.98)_0%,rgba(230,233,240,0.92)_50%,rgba(218,222,230,0.95)_100%)] -z-10" />

          {/* Soft Diffused Ambient Diffusion Orbs */}
          <div className="pointer-events-none absolute -left-20 top-[140px] h-[340px] w-[280px] rounded-full bg-[#1e2738]/08 blur-[60px] -z-10" />
          <div className="pointer-events-none absolute left-[30%] top-[80px] h-[320px] w-[240px] rounded-full bg-[#18aae3]/10 blur-[70px] -z-10" />
          <div className="pointer-events-none absolute right-[20%] top-[90px] h-[380px] w-[300px] rounded-full bg-[#202a3a]/10 blur-[65px] -z-10" />



          {/* Editorial Display Headline */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-[clamp(2.4rem,5.4vw,4.5rem)] font-extrabold tracking-[-0.04em] leading-[1.08] text-[#0b0d12]">
              <span className="block">{hero.titleLine1}</span>
              <span className="block mt-1 sm:mt-2">
                runs{' '}
                <span className="relative inline-block font-serif-italic font-normal bg-gradient-to-r from-[#081b45] via-[#18aae3] to-[#081b45] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(24,170,227,0.35)] px-1">
                  {hero.highlightWord}
                </span>{' '}
                <span className="text-black font-extrabold">{hero.titleLine2}</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-xl text-[#353a4b] leading-relaxed font-normal max-w-2xl mx-auto">
              {hero.description}
            </p>

            {/* Conversion CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Button href={hero.primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button href={hero.secondaryCta.href} variant="secondary" size="lg" className="w-full sm:w-auto bg-white/95">
                <PhoneCall className="w-4 h-4 text-[#081b45]" />
                <span>{hero.secondaryCta.label}</span>
              </Button>
            </div>

            {/* Micro Trust Verification Proof */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#404555]">
              {hero.microTrust.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Live Emergency Call Card Visual (Hero Signature Moment) */}
          <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl border border-[#d8dde7] bg-white shadow-[0_20px_50px_rgba(18,24,35,0.12)] overflow-hidden">
              {/* Telephony Header Bar */}
              <div className="px-5 py-3.5 bg-[#f7f8fa] border-b border-[#eaedf3] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4646]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                  <span className="ml-3 text-xs font-mono font-medium text-[#404555] hidden sm:inline">
                    fixflow-telephony-node-us-east // live-dispatch
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    AGENT ACTIVE
                  </div>
                  <span className="text-[11px] text-[#6b7386] font-mono">92ms latency</span>
                </div>
              </div>

              {/* Call Card Content Grid */}
              <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white">
                {/* Left Column: Live Audio Waveform & Transcript (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-4 rounded-xl bg-[#f8f9fb] border border-[#e5e7eb]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#081b45] text-white flex items-center justify-center">
                          <Volume2 className="w-4 h-4 animate-pulse text-[#18aae3]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#11131a]">Inbound Emergency Call: Unit 408</p>
                          <p className="text-[11px] text-[#6b7386] font-mono">Resident: Marcus Green • Highland Park Tower</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#081b45] px-2.5 py-1 rounded-md bg-[#eef1f6] border border-[#d8dde7]">
                        01:42
                      </span>
                    </div>

                    {/* Simulated Voice Waveform */}
                    <div className="h-8 bg-white rounded-lg p-2 flex items-center justify-between gap-1 overflow-hidden border border-[#e5e7eb]">
                      {[40, 70, 30, 85, 95, 60, 45, 90, 100, 75, 40, 60, 80, 50, 30, 90, 85, 45, 65, 90, 100, 70, 35, 50, 80, 65].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-[#18aae3] rounded-full transition-all duration-300"
                          style={{ height: `${h}%`, opacity: i % 2 === 0 ? 0.95 : 0.6 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Transcript Bubbles */}
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#f8f9fb] border border-[#e5e7eb] flex gap-3">
                      <div className="text-[10px] font-mono uppercase text-[#6b7386] font-bold shrink-0 mt-0.5">
                        Resident
                      </div>
                      <p className="text-[#353a4b] leading-relaxed">
                        &quot;Water is rushing out under the kitchen sink and flooding onto the wood floor!&quot;
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#081b45]/05 border border-[#081b45]/15 flex gap-3">
                      <div className="text-[10px] font-mono uppercase text-[#081b45] font-bold shrink-0 mt-0.5">
                        AI Agent
                      </div>
                      <p className="text-[#11131a] leading-relaxed font-medium">
                        &quot;Marcus, look directly under the sink for the silver oval valve and turn it clockwise right now. I have already paged Apex Emergency Plumbing and sent your digital gate pass.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Autonomous Dispatch & SLA (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-xl bg-[#f8f9fb] border border-[#e5e7eb] space-y-3.5">
                    <div className="flex items-center justify-between border-b border-[#eaedf3] pb-2.5">
                      <span className="text-[11px] font-mono text-[#6b7386] uppercase font-bold tracking-wider">
                        Autonomous Action
                      </span>
                      <span className="text-[11px] font-mono text-[#22c55e] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> SLA Rule #4 Executed
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#6b7386]">Assigned Vendor</span>
                        <span className="font-bold text-[#11131a]">Apex Plumbing 24/7</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6b7386]">Insurance & COI</span>
                        <span className="text-[#22c55e] font-mono text-[11px] font-semibold">Active ($2M Policy)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6b7386]">Arrival ETA</span>
                        <span className="font-mono text-[#081b45] font-bold">19 Mins (On Route)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6b7386]">Expense Cap</span>
                        <span className="font-mono text-[#353a4b] font-medium">$350 Pre-authorized</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#eaedf3] flex items-center justify-between text-[11px]">
                      <span className="text-[#6b7386] font-mono">Manager Escalation:</span>
                      <span className="text-[#11131a] font-mono font-medium">Not Required (Resolved)</span>
                    </div>
                  </div>

                  {/* Portfolio Health Metric Chip */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#d8dde7] shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#18aae3]" />
                      <span className="text-xs font-bold text-[#11131a]">Executive NOI Protected</span>
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[#22c55e]">+$2,100 saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
