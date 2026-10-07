'use client';

import React from 'react';
import { Star, Quote, Building2, ShieldCheck } from 'lucide-react';

export function LandingTestimonials() {
  const testimonials = [
    {
      quote: "FixNet eliminated 73% of our middle-of-the-night emergency calls. When a burst pipe occurred at 2:30 AM, Elena guided the tenant through shutting off the main valve in 40 seconds, then dispatched our plumber automatically.",
      author: "Rachel Vance",
      title: "VP of Asset Management",
      company: "Apex Residential Holdings (420 Units)",
      rating: 5,
      highlight: "Saved $34,000 in water damage & callouts"
    },
    {
      quote: "Our maintenance staff was drowning in routine boiler and breaker calls. With FixNet's step-by-step diagnostic portal, tenants resolve simple issues themselves before we spend $200 on an unnecessary truck roll.",
      author: "David Thorne",
      title: "Director of Property Operations",
      company: "Martin & Co Estates (850 Doors)",
      rating: 5,
      highlight: "Cut monthly contractor dispatches by 54%"
    },
    {
      quote: "The autonomous lease renewal bot Lucas closed 19 renewals in our first month alone without our team lifting a finger. The voice sounds completely human — tenants don't even realize they're talking to AI.",
      author: "Samantha Lin",
      title: "Senior Portfolio Manager",
      company: "Vanguard Living Properties (1,200 Units)",
      rating: 5,
      highlight: "+28% higher lease renewal rate"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Trusted by the Most Demanding Property Operators
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            See how modern landlords and property management teams scale doors without adding headcounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <div className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 inline-block mb-4">
                  {t.highlight}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-sm text-white shadow-xs">
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.title}</p>
                  <p className="text-[11px] text-blue-600 font-semibold">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
