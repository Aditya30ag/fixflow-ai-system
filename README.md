# 🏢 Fiflow — AI Property Management SaaS & Tenant Repair Portal

An autonomous, AI-powered property management SaaS platform built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Recharts**.

Fiflow features a dual-interface architecture:
1. **Fiflow Executive Dashboard** — A comprehensive, high-density proptech management workspace for portfolio managers, tracking leases, revenue, maintenance tickets, and autonomous voice agents.
2. **Martin & Co Repair Services** (`/tenant/repair`) — A public tenant-facing self-service repair portal with interactive step-by-step AI troubleshooting and on-demand technician booking.

---

## 🎨 Design System

### Fiflow Admin Dashboard
- **Sidebar Background**: `#0F1B2D` (Deep Navy)
- **Main Content Background**: `#F4F6FA` (Light Gray-White)
- **Primary / Accent**: `#3B82F6` (Electric Blue)
- **Success**: `#22C55E` (Emerald Green)
- **Warning**: `#F59E0B` (Amber / Orange)
- **Text Primary**: `#1E293B` | **Text Muted**: `#64748B` | **Cards**: `#FFFFFF`
- **Border Radius**: 8–12px on cards, 6px on buttons and form inputs.
- **Shadows**: Subtle elevations (`shadow-xs` to `shadow-md`).

### Martin & Co Tenant Portal
- **Primary Accent**: `#4F46E5` (Indigo-600)
- **Background**: `#F4F6FA`
- **Isolated Layout**: Full-width standalone layout with minimal header, green "AI Online" indicator, and zero admin navigation clutter.

---

## 🚀 Key Modules & Routes

### 📊 1. Executive Dashboard (`/dashboard` & `/`)
- **KPI Stat Cards**: Total Properties (4), Active Leases (66), Monthly Revenue ($198,900), and Pending Issues (3) with trend indicators.
- **Monthly Revenue Chart**: Interactive Recharts Bar Chart tracking collected rent vs. target budget over the past 6 months.
- **Lease Rollover Donut Chart**: Visual distribution of Active, Expiring Soon, and Expired units with center counter.
- **Interactive Reminders**: Toggle operational tasks (inspections, renewals, billing).
- **Live AI Activity Feed**: Real-time audit log of automated calls, emergency dispatches, and payments.

### 📞 2. AI Call Logs & Audio Transcripts (`/ai-call-logs`)
- Filterable data table by caller, property, duration, AI agent, and status (`Completed`, `Missed`, `In Progress`).
- Search bar, date range presets, and pagination.
- **Inspect Modal / Drawer**:
  - High-definition audio player simulator (play, pause, timestamps).
  - AI executive summary and automated next action items.
  - Sentiment badges (`Positive`, `Neutral`, `Frustrated`).
  - Turn-by-turn dialogue transcript with speaker timestamps.

### 📄 3. Lease Management (`/leases`)
- Table of existing tenant agreements with status pills (`Active`, `Expiring Soon`, `Expired`).
- **"Create New Lease" 4-Step Modal**:
  - **Step 1: Property & Unit** — Unit selection and smart lock sync status.
  - **Step 2: Tenant Info** — Full legal name, email, and phone number.
  - **Step 3: Lease Terms** — Term dates, monthly rent, deposit, and AI auto-renewal bot toggle.
  - **Step 4: Review & Confirm** — Validates and adds contract directly to the portfolio.

### 🤖 4. Autonomous AI Voice Agents (`/ai-agents`)
- **Global Automation Switch**: Master toggle to pause or enable all bots across the portfolio.
- **Agent Cards Grid**:
  - *Lease Reminder Bot* — Proactively negotiates renewals 60/30 days prior to expiry.
  - *Maintenance Coordinator* — 24/7 triage and contractor dispatch.
  - *Rent Collection Agent* — Diplomatic payment reminders and receipt generation.
  - *Tenant Inquiry Assistant* — Amenity questions and self-guided tour smart pass dispatch.
  - *After-Hours Emergency Guard* — Screens floods, gas leaks, and lockouts.
  - *Vendor & Contractor Dispatcher* — Verifies insurance and job checklists.
- **Configuration Modal**: Fine-tune agent persona prompts, neural voice models (ElevenLabs, Cartesia), and manager escalation thresholds.

### 👥 5. Tenants & Residents Directory (`/people`)
- Directory table: Name, Email, Phone, Property, Lease Status, and Move-in Date.
- **Tenant Dossier Modal**:
  - Contact information and emergency contacts.
  - Linked active lease and monthly rent.
  - Rent payment history with payment methods and status pills.
  - Interactive manager notes thread to log resident notes in real-time.
- **Add Tenant Modal Form**: Register new residents directly to any portfolio unit.

### 🛠️ 6. Maintenance Request & Dispatch (`/report-issue`)
- Property and unit selector.
- Visual category cards: *Plumbing*, *Electrical*, *Maintenance*, *Other*.
- Color-coded priority selectors: *Low*, *Medium*, *High*, *Urgent*.
- Drag & drop diagnostic photo upload zone with preview chips.
- "Open Tenant Portal" shortcut button.
- Real-time issues tracking table with assigned AI dispatch bot.

### 🏢 7. Portfolio, Reports & Settings
- **Properties (`/properties`)**: Building cards, occupancy progress bars, and gross revenue metrics.
- **Reports (`/reports`)**: YTD Net Operating Income (NOI), labor hours saved, and on-time collection analytics.
- **Settings (`/settings`)**: Inbound AI telephony numbers, ElevenLabs/OpenAI speech engines, and emergency escalation rules.

---

### 📱 8. Tenant-Facing Portal ("Martin & Co — Repair Services")
Accessible at `/tenant` or `/tenant/repair`:
- **Issue Landing Page (`/tenant/repair`)**:
  - Minimal branded header with "AI Online" pulse indicator.
  - Centered hero search bar: *"What can we help you with?"*
  - 3 feature cards: *AI Chat Support*, *Self-Service First*, *Expert On-Demand*.
  - 12 service category grid (Plumbing, Electrical, Heating/AC, Appliances, Pest Control, Locks, Painting, Carpentry, Cleaning, WiFi, Windows/Doors, Flooring).
- **AI Chat Assistant (`/tenant/repair/chat`)**:
  - Turn-by-turn chat interface with user bubbles (`#4F46E5`) and AI responses.
  - **Structured Step Cards**: Numbered troubleshooting instructions tailored to the reported issue.
  - Feedback buttons (👍 *"Yes, fixed!"* / 👎 *"Still having issue"*).
  - Escalation flow with interactive **"Book Expert Visit"** modal for scheduling certified technician windows.
  - Floating bottom input bar with emergency disclaimer.

---

## 🧱 Component Architecture

```
├── app/
│   ├── layout.tsx                # Root layout with AdminShell wrapper
│   ├── page.tsx                  # Root redirect to /dashboard
│   ├── globals.css               # Tailwind CSS v4 variables and custom utilities
│   ├── dashboard/page.tsx        # Main executive dashboard
│   ├── ai-call-logs/page.tsx     # Voice call audit logs and audio simulator
│   ├── leases/page.tsx           # Lease agreements & 4-step creation modal
│   ├── ai-agents/page.tsx        # AI agent cards grid & prompt configuration
│   ├── people/page.tsx           # Tenant directory and resident dossiers
│   ├── report-issue/page.tsx     # Maintenance dispatch & issue tracker
│   ├── properties/page.tsx       # Building portfolio overview
│   ├── reports/page.tsx          # Financial statements & AI labor reports
│   ├── settings/page.tsx         # Telephony, speech models, and protocol rules
│   └── tenant/
│       ├── layout.tsx            # Isolated tenant layout (no admin sidebar)
│       ├── page.tsx              # Redirects to /tenant/repair
│       └── repair/
│           ├── page.tsx          # Martin & Co repair landing page
│           └── chat/page.tsx     # AI chat troubleshooting & booking interface
├── components/
│   ├── AdminShell.tsx            # Isolates admin sidebar/topnav from tenant routes
│   ├── Sidebar.tsx               # Fixed deep navy sidebar (#0F1B2D) with nav links
│   ├── TopNav.tsx                # Sticky top bar with notifications & user profile
│   ├── StatCard.tsx              # KPI metric cards with trend indicators
│   ├── DataTable.tsx             # Reusable sortable, searchable, filterable table
│   ├── StatusBadge.tsx           # Color-coded status pills with dot indicators
│   ├── Modal.tsx                 # Accessible dialog modal with backdrop blur
│   ├── MultiStepForm.tsx         # Stepper indicator for multi-step workflows
│   ├── AgentCard.tsx             # AI bot card with stats and status switch
│   ├── RevenueChart.tsx          # Recharts monthly revenue bar chart
│   ├── LeaseStatusChart.tsx      # Recharts occupancy donut chart
│   └── tenant/
│       ├── TenantHeader.tsx      # Minimal Martin & Co header with AI Online badge
│       ├── FeatureCard.tsx       # 3 top feature highlight cards
│       ├── CategoryCard.tsx      # 12 service category grid cards with icons
│       ├── ChatBubble.tsx        # User and AI message bubbles with avatars
│       ├── StepResponseCard.tsx  # Numbered step card with feedback buttons
│       └── ChatInput.tsx         # Floating bottom input bar
└── lib/
    ├── mockData.ts               # Complete TypeScript interfaces & mock dataset
    └── utils.ts                  # Tailwind clsx/twMerge & currency formatters
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js `18.18+` or `20+`
- `pnpm` (recommended), `npm`, or `yarn`

### Installation
```bash
# Clone the repository and install dependencies
git clone https://github.com/your-username/fixflow-ai-system.git
cd fixflow-ai-system
pnpm install
```

### Development
Start the local development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser:
- **Admin Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- **Tenant Portal**: [http://localhost:3000/tenant/repair](http://localhost:3000/tenant/repair)
- **Tenant AI Chat**: [http://localhost:3000/tenant/repair/chat](http://localhost:3000/tenant/repair/chat)

### Production Build
```bash
# Build optimized static and server pages
pnpm build

# Start production server
pnpm start
```

---

## 📜 License
MIT License. Built for proptech property management automation.
