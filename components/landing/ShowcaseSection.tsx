import React from 'react';
import { landingData } from './landingData';
import { Container, SectionHeader, Button } from './Primitives';
import { ArrowRight, CheckCircle2, Headphones, Smartphone, LayoutDashboard } from 'lucide-react';

export function ShowcaseSection() {
  const { showcase } = landingData;

  return (
    <section id="showcase" className="py-24 lg:py-32 bg-[#f5f5f7] border-t border-[#d8dde7]">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow={showcase.sectionTag}
            title={showcase.heading}
            subtitle={showcase.subheading}
            align="left"
            className="mb-0"
          />

          <div className="hidden md:flex items-center gap-2 text-xs font-mono font-semibold text-[#6b7386] bg-white px-3.5 py-1.5 rounded-full border border-[#d8dde7] shadow-sm">
            <span>LIVE INTERFACES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span>FULLY FUNCTIONAL</span>
          </div>
        </div>

        {/* Project Showcase Cards */}
        <div className="space-y-8">
          {showcase.projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl p-7 sm:p-10 bg-white border border-[#d8dde7] shadow-[0_10px_30px_rgba(18,24,35,0.04)] hover:shadow-[0_20px_45px_rgba(18,24,35,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text & Specs Details (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#081b45]">
                      {project.tag}
                    </span>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0b0d12] tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-[15px] text-[#404555] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-[#eaedf3]">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1c202b]">
                        <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-2">
                    <Button href={project.href} variant="primary" size="md">
                      <span>{project.buttonLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Visual Preview Window (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-[#d8dde7] bg-[#f8f9fb] p-5 sm:p-6 shadow-sm overflow-hidden">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#eaedf3] text-xs font-mono text-[#6b7386]">
                      <div className="flex items-center gap-2">
                        {index === 0 && <LayoutDashboard className="w-4 h-4 text-[#081b45]" />}
                        {index === 1 && <Smartphone className="w-4 h-4 text-[#081b45]" />}
                        {index === 2 && <Headphones className="w-4 h-4 text-[#081b45]" />}
                        <span className="font-semibold text-[#1a2232]">{project.stats}</span>
                      </div>
                      <span className="text-[#22c55e] font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                        Connected
                      </span>
                    </div>

                    {/* Preview UI Mock Details */}
                    {index === 0 && (
                      <div className="pt-5 space-y-3.5 text-xs">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3.5 rounded-xl bg-white border border-[#d8dde7] shadow-sm">
                            <span className="text-[10px] font-mono text-[#6b7386] font-bold">MONTHLY NOI</span>
                            <p className="font-extrabold text-lg text-[#0b0d12] mt-1">$198,900</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-white border border-[#d8dde7] shadow-sm">
                            <span className="text-[10px] font-mono text-[#6b7386] font-bold">OCCUPANCY</span>
                            <p className="font-extrabold text-lg text-[#22c55e] mt-1">98.2%</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-white border border-[#d8dde7] shadow-sm">
                            <span className="text-[10px] font-mono text-[#6b7386] font-bold">ACTIVE TICKETS</span>
                            <p className="font-extrabold text-lg text-[#081b45] mt-1">3 Pending</p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-[#d8dde7] flex items-center justify-between shadow-sm">
                          <span className="text-[#1c202b] text-[12px] font-medium">Autonomous Voice Telephony Line: Active</span>
                          <span className="font-mono text-[#22c55e] text-[12px] font-bold">0 Missed Calls</span>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="pt-5 space-y-3.5 text-xs">
                        <div className="p-4 rounded-xl bg-white border border-[#d8dde7] shadow-sm">
                          <p className="text-[11px] font-mono font-bold text-[#081b45]">Martin &amp; Co Public Portal</p>
                          <p className="text-[#1c202b] font-semibold text-sm mt-1">&quot;What can we help you resolve today?&quot;</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5 text-xs font-semibold">
                          <div className="p-3 rounded-xl bg-white border border-[#d8dde7] text-[#1c202b] text-center shadow-sm">
                            Plumbing
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-[#d8dde7] text-[#1c202b] text-center shadow-sm">
                            Heating / AC
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-[#d8dde7] text-[#1c202b] text-center shadow-sm">
                            Electrical
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="pt-5 space-y-3.5 text-xs">
                        <div className="p-4 rounded-xl bg-white border border-[#d8dde7] space-y-2 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-[12px] font-mono font-bold text-[#081b45]">Agent: Elena (Maintenance Dispatch)</span>
                            <span className="text-[11px] font-mono text-[#6b7386]">Duration: 02:18</span>
                          </div>
                          <p className="text-[#404555] text-xs italic">
                            &quot;Verified tenant water shutoff under bathroom vanity. Paged certified contractor #18.&quot;
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[#6b7386]">
                          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">Sentiment: Calm</span>
                          <span className="px-2.5 py-1 rounded-md bg-white border border-[#d8dde7]">Audio WAV Synced</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
