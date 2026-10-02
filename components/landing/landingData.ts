export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  numeric: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface TrustLogo {
  name: string;
  tag: string;
}

export interface BentoFeature {
  id: string;
  tag: string;
  title: string;
  description: string;
  colSpan: string; // Tailwind grid span
  badge?: string;
  previewType: 'voice' | 'triage' | 'lease' | 'metrics';
}

export interface ShowcaseProject {
  id: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  stats: string;
  highlights: string[];
}

export interface StepItem {
  number: string;
  title: string;
  summary: string;
  details: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  units: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
    badge: string;
  };
  navigation: {
    brandName: string;
    links: NavItem[];
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
  };
  hero: {
    statusBadge: string;
    titleLine1: string;
    highlightWord: string;
    titleLine2: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    microTrust: string[];
  };
  trustStrip: {
    eyebrow: string;
    partners: TrustLogo[];
  };
  stats: StatItem[];
  bento: {
    sectionTag: string;
    heading: string;
    subheading: string;
    features: BentoFeature[];
  };
  showcase: {
    sectionTag: string;
    heading: string;
    subheading: string;
    projects: ShowcaseProject[];
  };
  howItWorks: {
    sectionTag: string;
    heading: string;
    subheading: string;
    steps: StepItem[];
  };
  testimonials: {
    sectionTag: string;
    heading: string;
    subheading: string;
    items: TestimonialItem[];
  };
  faqs: {
    sectionTag: string;
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  finalCta: {
    sectionTag: string;
    heading: string;
    highlight: string;
    subheading: string;
    primaryBtn: {
      label: string;
      href: string;
    };
    secondaryBtn: {
      label: string;
      href: string;
    };
  };
  footer: {
    wordmark: string;
    tagline: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    copyright: string;
  };
}

export const landingData: LandingContent = {
  meta: {
    title: 'FixFlow AI — Autonomous Property Management & AI Voice Dispatch',
    description: 'Transform 2 AM tenant emergencies, lease negotiations, and contractor dispatching into seamless autonomous workflows with 24/7 conversational voice telephony.',
    badge: 'Live Proptech Telephony v2.4',
  },
  navigation: {
    brandName: 'FixFlow',
    links: [
      { label: 'Capabilities', href: '#features' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Proof', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaPrimary: {
      label: 'Launch OS',
      href: '/dashboard',
    },
    ctaSecondary: {
      label: 'Tenant Portal',
      href: '/tenant/repair',
    },
  },
  hero: {
    statusBadge: 'Autonomous Telephony Engine 2.4 Active',
    titleLine1: 'The property portfolio OS that',
    highlightWord: 'effortlessly.',
    titleLine2: 'Day and night.',
    description: 'FixFlow handles 2 AM burst pipe calls, self-service diagnostics, lease renewals, and contractor dispatch without waking your property managers.',
    primaryCta: {
      label: 'Explore Executive OS',
      href: '/dashboard',
    },
    secondaryCta: {
      label: 'Test AI Call Simulator',
      href: '/ai-call-logs',
    },
    microTrust: [
      'Sub-30s emergency triage',
      'Integrated with ElevenLabs & Cartesia',
      'Zero tenant app download required',
    ],
  },
  trustStrip: {
    eyebrow: 'TRUSTED BY FORWARD-THINKING ASSET MANAGERS & PROPTECH OPERATORS',
    partners: [
      { name: 'GREYSTAR RESIDENTIAL', tag: '8,400+ Units' },
      { name: 'AVALONBAY COMM.', tag: 'Enterprise' },
      { name: 'LINCOLN PROPERTY CO', tag: 'Commercial & Multi' },
      { name: 'MARTIN & CO ESTATES', tag: 'Tenant Network' },
      { name: 'ELEVENLABS TELEPHONY', tag: 'Speech AI' },
      { name: 'STARWOOD CAPITAL', tag: 'Asset Portfolios' },
      { name: 'CARTESIA SONIC', tag: 'Ultra-Low Latency' },
      { name: 'CUSHMAN & WAKEFIELD', tag: 'Regional Ops' },
    ],
  },
  stats: [
    {
      value: '< 32s',
      numeric: 32,
      prefix: '< ',
      suffix: 's',
      label: 'Emergency Response Time',
      description: 'From tenant phone ring to verified contractor paging and emergency water shutoff guidance.',
    },
    {
      value: '99.4%',
      numeric: 99.4,
      suffix: '%',
      label: 'Diagnostic Triage Accuracy',
      description: 'Eliminates false alarms and expensive after-hours dispatches for routine breaker trips.',
    },
    {
      value: '$3.4M+',
      numeric: 3.4,
      prefix: '$',
      suffix: 'M+',
      label: 'Disputed Overspend Prevented',
      description: 'Strict vendor SLA verification, insurance compliance audits, and itemized invoice auto-matching.',
    },
    {
      value: '24/7/365',
      numeric: 24,
      suffix: '/7',
      label: 'Autonomous Voice Telephony',
      description: 'Zero missed calls, zero hold times, zero burned-out on-call property managers.',
    },
  ],
  bento: {
    sectionTag: '01 — CORE CAPABILITIES',
    heading: 'High-density intelligence for modern real estate portfolios',
    subheading: 'Engineered specifically for asset managers who want institutional rigor without adding headcount.',
    features: [
      {
        id: 'voice-telephony',
        tag: 'NEURAL VOICE TELEPHONY',
        title: '24/7 Conversational Voice Agents with Zero Hold Latency',
        description: 'When a pipe bursts at 2:14 AM, FixFlow answers within 2 rings in human-grade natural speech, asks clarifying diagnostic questions, and triggers emergency vendor dispatch.',
        colSpan: 'lg:col-span-8',
        badge: 'Cartesia 90ms Engine',
        previewType: 'voice',
      },
      {
        id: 'lease-retention',
        tag: 'REVENUE PROTECTION',
        title: 'Automated 60-Day Lease Rollover Engine',
        description: 'Proactively contacts expiring tenants, models market rate adjustments, and collects signed digital renewals before vacancy risk begins.',
        colSpan: 'lg:col-span-4',
        badge: '94% Retention',
        previewType: 'lease',
      },
      {
        id: 'self-service-portal',
        tag: 'TENANT EXPERIENCE',
        title: 'Self-Service Visual Diagnostics',
        description: 'The Martin & Co Tenant Portal guides residents through interactive photo triage and breaker resets before an expensive technician is scheduled.',
        colSpan: 'lg:col-span-4',
        badge: '72% Solved Digitally',
        previewType: 'triage',
      },
      {
        id: 'dispatch-matrix',
        tag: 'CONTRACTOR LOGISTICS',
        title: 'Instant Vendor Routing & Compliance Safeguards',
        description: 'Automatically verifies contractor general liability insurance, checks on-call rosters, negotiates dispatch windows, and updates work order logs in real time.',
        colSpan: 'lg:col-span-8',
        badge: 'Autonomous Dispatch',
        previewType: 'metrics',
      },
    ],
  },
  showcase: {
    sectionTag: '02 — LIVE ENVIRONMENTS',
    heading: 'Dual-interface architecture built for speed',
    subheading: 'Experience how FixFlow unifies enterprise portfolio operations with clean resident-facing repair tools.',
    projects: [
      {
        id: 'executive-command',
        tag: 'FOR PORTFOLIO MANAGERS',
        title: 'Executive Operations Command',
        description: 'Unified high-density workspace tracking NOI, occupancy health, rent roll collection, and live autonomous agent dispatches across all buildings.',
        href: '/dashboard',
        buttonLabel: 'Launch Dashboard',
        stats: '4 Properties • 66 Units • $198.9k/mo',
        highlights: ['Real-time NOI ledger', 'Lease expiration radar', 'Voice agent activity feed'],
      },
      {
        id: 'tenant-repair-portal',
        tag: 'FOR RESIDENTS',
        title: 'Martin & Co Repair Portal',
        description: 'A clean, zero-friction web portal where residents report problems, upload diagnostic images, follow interactive troubleshooting steps, or request a vetted technician.',
        href: '/tenant/repair',
        buttonLabel: 'Open Tenant Portal',
        stats: '12 Service Categories • AI Online',
        highlights: ['Zero login barrier', 'Interactive step cards', 'Live ticket updates'],
      },
      {
        id: 'telephony-transcripts',
        tag: 'NEURAL AUDIO AUDIT',
        title: 'AI Telephony & Call Logs',
        description: 'Inspect full audio waveform playback, turn-by-turn conversational transcripts, caller sentiment scores, and automated post-call work orders.',
        href: '/ai-call-logs',
        buttonLabel: 'Inspect Call Transcripts',
        stats: '100% Audited • Sub-second Latency',
        highlights: ['Audio playback simulator', 'Sentiment analysis', 'Automated dispatch receipts'],
      },
    ],
  },
  howItWorks: {
    sectionTag: '03 — AUTONOMOUS WORKFLOW',
    heading: 'From resident issue to completed repair in minutes',
    subheading: 'A continuous, fail-safe pipeline that removes friction for both property managers and tenants.',
    steps: [
      {
        number: '01',
        title: 'Tenant Incident Triggered',
        summary: 'Voice call, SMS, or web portal submission',
        details: 'Whether calling the 24/7 emergency hotline or reporting through the Martin & Co portal, the tenant interacts with an intelligent conversational model trained specifically on proptech maintenance.',
      },
      {
        number: '02',
        title: 'Neural Triage & Risk Filtering',
        summary: 'Emergency identification and self-troubleshooting',
        details: 'The system assesses severity (e.g. active water leak vs running toilet). For minor issues, it offers step-by-step guidance. For emergencies, it immediately isolates unit water valves.',
      },
      {
        number: '03',
        title: 'Autonomous Contractor Dispatch',
        summary: 'Automated paging with verified insurance',
        details: 'FixFlow cross-references approved vendor rosters, confirms active liability certificates, books the earliest emergency slot, and texts the resident a tracking pass.',
      },
      {
        number: '04',
        title: 'Executive Ledger & NOI Update',
        summary: 'Zero manual data entry for managers',
        details: 'The complete voice transcript, contractor estimate, diagnostic photos, and work order are synced into the portfolio dashboard with cost attribution and ledger records.',
      },
    ],
  },
  testimonials: {
    sectionTag: '04 — OPERATOR REPUTATION',
    heading: 'Trusted by asset managers overseeing 15,000+ doors',
    subheading: 'Read how property leaders cut emergency dispatch expenses while achieving unprecedented resident satisfaction scores.',
    items: [
      {
        quote: 'FixFlow answered 14 emergency calls during a severe freeze weekend while my entire team was off. All burst pipes were isolated within 20 minutes. It paid for itself in one night.',
        author: 'Marcus Vance',
        role: 'Senior Vice President of Operations',
        company: 'Vance Capital Properties',
        units: '3,800 Units',
        initials: 'MV',
      },
      {
        quote: 'Our on-call staff turnover dropped to zero. Managers no longer dread the 3 AM weekend shift because the voice agent handles the triage and calls the plumber autonomously.',
        author: 'Elena Rostova',
        role: 'Director of Asset Management',
        company: 'Horizon Living Communities',
        units: '5,200 Units',
        initials: 'ER',
      },
      {
        quote: 'The Martin & Co tenant repair portal diverted 43% of routine plumbing service requests into 2-minute self-fixes. That is over $110,000 in saved contractor trip fees this quarter alone.',
        author: 'Julian Croft',
        role: 'Managing Partner',
        company: 'Croft & Partners Real Estate',
        units: '1,950 Units',
        initials: 'JC',
      },
      {
        quote: 'The voice quality is astonishing. Tenants genuinely think they are speaking with our top coordinator. The audio transcripts in the executive dashboard give us total peace of mind.',
        author: 'Samantha Reyes',
        role: 'Chief Operating Officer',
        company: 'Urban Living Group',
        units: '4,100 Units',
        initials: 'SR',
      },
    ],
  },
  faqs: {
    sectionTag: '05 — FREQUENT QUESTIONS',
    heading: 'Clear answers for technical property operators',
    subheading: 'Everything you need to know about integrating FixFlow into your existing property portfolio.',
    items: [
      {
        question: 'How does the AI voice phone line handle true 2 AM life-safety emergencies?',
        answer: 'FixFlow is configured with strict safety protocols. If a caller mentions active smoke, gas smell, structural collapse, or fire, the system immediately advises the tenant to evacuate and dials 911 / emergency services while alerting the portfolio property director via urgent SMS.',
      },
      {
        question: 'Do my tenants need to download an application?',
        answer: 'No. FixFlow operates via standard telephone voice calls (any inbound phone number) and lightweight web links via the Martin & Co portal. Tenants can simply call your existing office number or open a link on their smartphone browser without creating another password.',
      },
      {
        question: 'How does FixFlow verify contractor liability and insurance?',
        answer: 'You upload your preferred vendor roster with certificate of insurance (COI) expiration dates and hourly rate caps. FixFlow only dispatches contractors with valid, in-date insurance and matches the specific specialty required for the issue.',
      },
      {
        question: 'Can managers review call transcripts and intervene at any time?',
        answer: 'Yes. Every call is transcribed with turn-by-turn timestamps, audio playback, and sentiment tagging in the Executive Call Logs. Managers can set thresholds to receive instantaneous push alerts or take over any live issue with one click.',
      },
      {
        question: 'How fast can we deploy FixFlow across our existing properties?',
        answer: 'Most portfolios go live in under 48 hours. We simply port your after-hours maintenance phone line to FixFlow, upload your property unit directory and vendor list, and the autonomous voice agents begin fielding inquiries immediately.',
      },
      {
        question: 'What is the pricing model?',
        answer: 'FixFlow is priced transparently on a per-unit per-month basis ($1.20 - $2.50 / unit / month) with unlimited incoming voice minutes, zero per-call penalties, and access to both the Executive Dashboard and Tenant Repair Portal.',
      },
    ],
  },
  finalCta: {
    sectionTag: 'GET STARTED TODAY',
    heading: 'Run your property portfolio on',
    highlight: 'autopilot.',
    subheading: 'Experience zero-touch tenant maintenance, automated lease retention, and 24/7 neural voice telephony starting today.',
    primaryBtn: {
      label: 'Explore Executive OS',
      href: '/dashboard',
    },
    secondaryBtn: {
      label: 'Tenant Repair Portal',
      href: '/tenant/repair',
    },
  },
  footer: {
    wordmark: 'FIXFLOW AI',
    tagline: 'Autonomous property operations and neural voice dispatch for modern real estate portfolios.',
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'Executive Dashboard', href: '/dashboard' },
          { label: 'AI Voice Agents', href: '/ai-agents' },
          { label: 'Call Logs & Audio', href: '/ai-call-logs' },
          { label: 'Lease Rollover Bot', href: '/leases' },
          { label: 'Tenant Directory', href: '/people' },
        ],
      },
      {
        title: 'Portals',
        links: [
          { label: 'Tenant Repair Portal', href: '/tenant/repair' },
          { label: 'Issue Diagnostics', href: '/tenant/repair/chat' },
          { label: 'Technician Dispatch', href: '/report-issue' },
          { label: 'Property Portfolio', href: '/properties' },
          { label: 'Financial Reports', href: '/reports' },
        ],
      },
      {
        title: 'Integrations',
        links: [
          { label: 'Cartesia Voice Engine', href: '/settings' },
          { label: 'ElevenLabs Neural Telephony', href: '/settings' },
          { label: 'Twilio SIP Trunking', href: '/settings' },
          { label: 'Property Management API', href: '/settings' },
        ],
      },
    ],
    copyright: '© 2026 FixFlow AI Systems Inc. All rights reserved. Enterprise Proptech Telephony.',
  },
};
