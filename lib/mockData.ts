export interface Property {
  id: string;
  name: string;
  address: string;
  city: string;
  unitsCount: number;
  occupiedUnits: number;
  type: 'Residential' | 'Commercial' | 'Mixed';
  imageUrl: string;
  monthlyRevenue: number;
}

export interface Lease {
  id: string;
  tenantId: string;
  tenantName: string;
  tenantEmail: string;
  tenantPhone: string;
  propertyId: string;
  propertyName: string;
  unit: string;
  startDate: string;
  endDate: string;
  rentAmount: number;
  depositAmount: number;
  status: 'Active' | 'Expiring Soon' | 'Expired';
  paymentStatus: 'Paid' | 'Pending' | 'Overdue';
}

export interface AICallLog {
  id: string;
  callerName: string;
  callerPhone: string;
  property: string;
  unit: string;
  dateTime: string;
  duration: string;
  status: 'Completed' | 'Missed' | 'In Progress';
  agentUsed: string;
  summary: string;
  sentiment: 'Positive' | 'Neutral' | 'Frustrated';
  urgency: 'Low' | 'Medium' | 'High';
  transcript: {
    speaker: 'Agent' | 'Caller';
    time: string;
    text: string;
  }[];
  actionItems: string[];
}

export interface AIAgent {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  color: string;
  isActive: boolean;
  voiceType: string;
  stats: {
    callsMade: number;
    issuesResolved: number;
    lastActive: string;
    avgHandleTime: string;
    satisfactionRate: number;
  };
  assignedProperties: string[];
}

export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyAssigned: string;
  unit: string;
  leaseStatus: 'Active' | 'Expiring Soon' | 'Expired';
  moveInDate: string;
  rentAmount: number;
  emergencyContact: string;
  paymentHistory: {
    id: string;
    date: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Overdue';
    method: string;
  }[];
  notes: {
    id: string;
    date: string;
    author: string;
    content: string;
  }[];
}

export type { Issue } from './issuesStore';


export interface ActivityItem {
  id: string;
  type: 'call' | 'lease' | 'issue' | 'payment';
  title: string;
  description: string;
  time: string;
  iconType: string;
}

export interface ReminderItem {
  id: string;
  title: string;
  due: string;
  category: 'Inspection' | 'Renewal' | 'Maintenance' | 'Billing';
  priority: 'High' | 'Medium' | 'Low';
  done: boolean;
}

export const mockProperties: Property[] = [
  {
    id: 'prop-1',
    name: 'Sunset Heights Apartments',
    address: '1420 Ocean View Blvd',
    city: 'Santa Monica, CA',
    unitsCount: 24,
    occupiedUnits: 23,
    type: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    monthlyRevenue: 52400,
  },
  {
    id: 'prop-2',
    name: 'Grandview Executive Lofts',
    address: '880 Pine Street',
    city: 'Seattle, WA',
    unitsCount: 18,
    occupiedUnits: 17,
    type: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    monthlyRevenue: 43200,
  },
  {
    id: 'prop-3',
    name: 'Parkline Plaza Commercial',
    address: '300 Commerce Way',
    city: 'Austin, TX',
    unitsCount: 12,
    occupiedUnits: 11,
    type: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80',
    monthlyRevenue: 68500,
  },
  {
    id: 'prop-4',
    name: 'Oakwood Court Villas',
    address: '742 Evergreen Terrace',
    city: 'Denver, CO',
    unitsCount: 16,
    occupiedUnits: 15,
    type: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80',
    monthlyRevenue: 34800,
  },
];

export const mockLeases: Lease[] = [
  {
    id: 'LSE-1092',
    tenantId: 'usr-1',
    tenantName: 'Sarah Jenkins',
    tenantEmail: 'sarah.j@example.com',
    tenantPhone: '+1 (555) 234-8901',
    propertyId: 'prop-1',
    propertyName: 'Sunset Heights Apartments',
    unit: 'Unit 402',
    startDate: '2025-10-01',
    endDate: '2026-09-30',
    rentAmount: 2450,
    depositAmount: 2450,
    status: 'Expiring Soon',
    paymentStatus: 'Paid',
  },
  {
    id: 'LSE-1093',
    tenantId: 'usr-2',
    tenantName: 'Marcus Vance',
    tenantEmail: 'm.vance@techcorp.io',
    tenantPhone: '+1 (555) 876-1234',
    propertyId: 'prop-2',
    propertyName: 'Grandview Executive Lofts',
    unit: 'Penthouse B',
    startDate: '2026-01-15',
    endDate: '2027-01-14',
    rentAmount: 3800,
    depositAmount: 5000,
    status: 'Active',
    paymentStatus: 'Paid',
  },
  {
    id: 'LSE-1094',
    tenantId: 'usr-3',
    tenantName: 'Elena Rostova',
    tenantEmail: 'elena.rostova@designlab.co',
    tenantPhone: '+1 (555) 432-9876',
    propertyId: 'prop-1',
    propertyName: 'Sunset Heights Apartments',
    unit: 'Unit 108',
    startDate: '2026-03-01',
    endDate: '2027-02-28',
    rentAmount: 2150,
    depositAmount: 2150,
    status: 'Active',
    paymentStatus: 'Paid',
  },
  {
    id: 'LSE-1095',
    tenantId: 'usr-4',
    tenantName: 'Apex Health Systems',
    tenantEmail: 'facilities@apexhealth.org',
    tenantPhone: '+1 (555) 901-3322',
    propertyId: 'prop-3',
    propertyName: 'Parkline Plaza Commercial',
    unit: 'Suite 300',
    startDate: '2024-05-01',
    endDate: '2026-04-30',
    rentAmount: 8500,
    depositAmount: 17000,
    status: 'Expiring Soon',
    paymentStatus: 'Pending',
  },
  {
    id: 'LSE-1096',
    tenantId: 'usr-5',
    tenantName: 'Devon Miles',
    tenantEmail: 'devon.miles@freemail.net',
    tenantPhone: '+1 (555) 765-4321',
    propertyId: 'prop-4',
    propertyName: 'Oakwood Court Villas',
    unit: 'Unit 12',
    startDate: '2025-08-01',
    endDate: '2026-07-31',
    rentAmount: 1950,
    depositAmount: 1950,
    status: 'Active',
    paymentStatus: 'Paid',
  },
  {
    id: 'LSE-1097',
    tenantId: 'usr-6',
    tenantName: 'Chloe Bennett',
    tenantEmail: 'c.bennett@outlook.com',
    tenantPhone: '+1 (555) 654-7890',
    propertyId: 'prop-1',
    propertyName: 'Sunset Heights Apartments',
    unit: 'Unit 205',
    startDate: '2025-04-01',
    endDate: '2026-03-31',
    rentAmount: 2300,
    depositAmount: 2300,
    status: 'Expiring Soon',
    paymentStatus: 'Paid',
  },
  {
    id: 'LSE-1098',
    tenantId: 'usr-7',
    tenantName: 'Jordan Taylor',
    tenantEmail: 'jordan.t@creativepulse.com',
    tenantPhone: '+1 (555) 321-6548',
    propertyId: 'prop-2',
    propertyName: 'Grandview Executive Lofts',
    unit: 'Unit 304',
    startDate: '2025-02-01',
    endDate: '2026-01-31',
    rentAmount: 2900,
    depositAmount: 2900,
    status: 'Expired',
    paymentStatus: 'Paid',
  },
];

export const mockAICallLogs: AICallLog[] = [
  {
    id: 'CALL-8841',
    callerName: 'Sarah Jenkins',
    callerPhone: '+1 (555) 234-8901',
    property: 'Sunset Heights Apartments',
    unit: 'Unit 402',
    dateTime: '2026-09-25 16:42',
    duration: '2m 45s',
    status: 'Completed',
    agentUsed: 'Lease Reminder Bot',
    summary: 'Discussed upcoming lease renewal options. Sarah requested terms for 12-month extension with current rate guarantee.',
    sentiment: 'Positive',
    urgency: 'Medium',
    transcript: [
      { speaker: 'Agent', time: '00:02', text: 'Hello Sarah! This is Alex from Fiflow Management on behalf of Sunset Heights. Am I speaking with Sarah Jenkins?' },
      { speaker: 'Caller', time: '00:07', text: 'Yes, hi Alex. What can I do for you?' },
      { speaker: 'Agent', time: '00:10', text: 'I am reaching out regarding your lease for Unit 402 which is coming up for renewal next month. We would love to have you continue with us!' },
      { speaker: 'Caller', time: '00:18', text: 'I was actually hoping to renew, but I wanted to see if the monthly rent will remain at $2,450.' },
      { speaker: 'Agent', time: '00:26', text: 'Great news! We can lock in your current rate for an additional 12-month commitment. Would you like me to send the digital renewal contract to your email?' },
      { speaker: 'Caller', time: '00:35', text: 'Yes please, send it over and I will review it tonight.' },
      { speaker: 'Agent', time: '00:40', text: 'It has been dispatched to sarah.j@example.com. Have a wonderful rest of your day!' },
    ],
    actionItems: [
      'Email digital renewal contract with $2,450 lock-in',
      'Set follow-up reminder for 48 hours',
    ],
  },
  {
    id: 'CALL-8840',
    callerName: 'Devon Miles',
    callerPhone: '+1 (555) 765-4321',
    property: 'Oakwood Court Villas',
    unit: 'Unit 12',
    dateTime: '2026-09-25 14:15',
    duration: '3m 12s',
    status: 'Completed',
    agentUsed: 'Maintenance Coordinator',
    summary: 'Kitchen sink pipe dripping steadily under cabinet. Dispatch scheduled with certified plumber for tomorrow 10:00 AM.',
    sentiment: 'Neutral',
    urgency: 'High',
    transcript: [
      { speaker: 'Caller', time: '00:01', text: 'Hi, I need emergency plumbing help in Unit 12. Water is dripping steadily under the kitchen sink.' },
      { speaker: 'Agent', time: '00:06', text: 'Understood Devon. Is the water pooling rapidly or contained within a bucket right now?' },
      { speaker: 'Caller', time: '00:12', text: 'I put a bowl underneath it, but it fills up every few hours.' },
      { speaker: 'Agent', time: '00:18', text: 'Thank you for containing it. I have opened an urgent plumbing ticket #ISS-503 and dispatched Bay Plumbing for tomorrow morning between 9:00 AM and 11:00 AM. Does that work for you?' },
      { speaker: 'Caller', time: '00:29', text: 'Yes, 10 AM is perfect. Thanks for handling this so fast.' },
      { speaker: 'Agent', time: '00:33', text: 'You will receive an SMS confirmation with the technician’s live tracker. Goodbye!' },
    ],
    actionItems: [
      'Dispatched Bay Plumbing for tomorrow 9-11 AM',
      'Sent SMS confirmation tracking link to caller',
    ],
  },
  {
    id: 'CALL-8839',
    callerName: 'Michael Chang',
    callerPhone: '+1 (555) 441-2099',
    property: 'Sunset Heights Apartments',
    unit: 'Prospect',
    dateTime: '2026-09-25 11:05',
    duration: '1m 20s',
    status: 'Completed',
    agentUsed: 'Tenant Inquiry Assistant',
    summary: 'Inquiry regarding 2-bedroom availability starting November 1st. Self-guided tour link sent.',
    sentiment: 'Positive',
    urgency: 'Low',
    transcript: [
      { speaker: 'Caller', time: '00:02', text: 'Hi, do you have any 2-bedroom units opening up in November?' },
      { speaker: 'Agent', time: '00:07', text: 'Welcome to Sunset Heights! Yes, Unit 308 will be available starting November 1st for $2,650/month including parking.' },
      { speaker: 'Caller', time: '00:15', text: 'Can I tour the building this weekend?' },
      { speaker: 'Agent', time: '00:20', text: 'Certainly! I just texted you a link for a self-guided smart lock tour code valid Saturday and Sunday.' },
    ],
    actionItems: ['Tour link SMS dispatched', 'Prospect added to CRM pipeline'],
  },
  {
    id: 'CALL-8838',
    callerName: 'Apex Health Systems',
    callerPhone: '+1 (555) 901-3322',
    property: 'Parkline Plaza Commercial',
    unit: 'Suite 300',
    dateTime: '2026-09-24 17:30',
    duration: '0m 45s',
    status: 'Missed',
    agentUsed: 'Lease Reminder Bot',
    summary: 'Voicemail left regarding commercial lease renewal and annual HVAC inspection compliance documentation.',
    sentiment: 'Neutral',
    urgency: 'Medium',
    transcript: [
      { speaker: 'Agent', time: '00:01', text: 'Hello, this is Fiflow AI calling for Apex Health Facilities team regarding Parkline Plaza lease renewal terms. Please call back at your earliest convenience or reply to our email.' },
    ],
    actionItems: ['Scheduled automated follow-up callback for 24h'],
  },
  {
    id: 'CALL-8837',
    callerName: 'Marcus Vance',
    callerPhone: '+1 (555) 876-1234',
    property: 'Grandview Executive Lofts',
    unit: 'Penthouse B',
    dateTime: '2026-09-24 09:12',
    duration: '4m 02s',
    status: 'Completed',
    agentUsed: 'Rent Collection Agent',
    summary: 'Caller asked for updated invoice receipt with VAT/tax ID breakdown for corporate reimbursement.',
    sentiment: 'Positive',
    urgency: 'Low',
    transcript: [
      { speaker: 'Caller', time: '00:04', text: 'Good morning, I need an official tax breakdown invoice for September rent to submit to my company.' },
      { speaker: 'Agent', time: '00:12', text: 'Good morning Marcus! I can generate that immediately for Penthouse B with company billing details.' },
    ],
    actionItems: ['Tax invoice generated and emailed to corporate portal'],
  },
  {
    id: 'CALL-8836',
    callerName: 'Elena Rostova',
    callerPhone: '+1 (555) 432-9876',
    property: 'Sunset Heights Apartments',
    unit: 'Unit 108',
    dateTime: '2026-09-23 20:10',
    duration: '1m 55s',
    status: 'Completed',
    agentUsed: 'Maintenance Coordinator',
    summary: 'Reported malfunctioning smart lock keypad battery low warning. Battery replacement scheduled.',
    sentiment: 'Positive',
    urgency: 'Medium',
    transcript: [
      { speaker: 'Caller', time: '00:03', text: 'Hey, the door lock is beeping red saying low battery.' },
      { speaker: 'Agent', time: '00:09', text: 'Got it Elena. Our on-site tech Carlos will swap the AA battery pack tomorrow morning between 8 AM and 9 AM.' },
    ],
    actionItems: ['Carlos assigned for lock battery replacement'],
  },
  {
    id: 'CALL-8835',
    callerName: 'Robert Lang',
    callerPhone: '+1 (555) 998-1122',
    property: 'Oakwood Court Villas',
    unit: 'Unit 4',
    dateTime: '2026-09-23 15:40',
    duration: '2m 10s',
    status: 'In Progress',
    agentUsed: 'Tenant Inquiry Assistant',
    summary: 'Caller asking about reserving the clubhouse for private birthday event.',
    sentiment: 'Neutral',
    urgency: 'Low',
    transcript: [
      { speaker: 'Caller', time: '00:02', text: 'Can I rent the community clubhouse for October 12th?' },
      { speaker: 'Agent', time: '00:08', text: 'Let me check availability for October 12th at Oakwood Court...' },
    ],
    actionItems: ['Check clubhouse calendar availability'],
  },
];

export const mockAIAgents: AIAgent[] = [
  {
    id: 'agent-1',
    name: 'Lease Reminder Bot',
    role: 'Lease Reminder Bot',
    description: 'Proactively calls tenants 60 and 30 days prior to lease expiry. Handles renewal terms, digital signing links, and negotiation escalations.',
    avatar: '🤖',
    color: '#3B82F6',
    isActive: true,
    voiceType: 'Eleanor (Warm British / Professional)',
    stats: {
      callsMade: 1248,
      issuesResolved: 890,
      lastActive: '5 minutes ago',
      avgHandleTime: '2m 15s',
      satisfactionRate: 98.4,
    },
    assignedProperties: ['Sunset Heights Apartments', 'Grandview Executive Lofts', 'Parkline Plaza Commercial'],
  },
  {
    id: 'agent-2',
    name: 'Maintenance Coordinator',
    role: 'Maintenance Coordinator',
    description: 'Triage 24/7 emergency and routine repairs, verifies warranty vendors, schedules appointments, and sends SMS dispatch status.',
    avatar: '🛠️',
    color: '#10B981',
    isActive: true,
    voiceType: 'Marcus (Deep / Calm Authoritative)',
    stats: {
      callsMade: 2190,
      issuesResolved: 1740,
      lastActive: '12 minutes ago',
      avgHandleTime: '3m 10s',
      satisfactionRate: 96.8,
    },
    assignedProperties: ['All Properties'],
  },
  {
    id: 'agent-3',
    name: 'Rent Collection Agent',
    role: 'Rent Collection Agent',
    description: 'Diplomatic payment reminders, payment arrangement plans, automated receipt generation, and late fee waiver guidelines.',
    avatar: '💳',
    color: '#F59E0B',
    isActive: true,
    voiceType: 'Sarah (Empathetic / Clear)',
    stats: {
      callsMade: 780,
      issuesResolved: 654,
      lastActive: '1 hour ago',
      avgHandleTime: '1m 45s',
      satisfactionRate: 94.2,
    },
    assignedProperties: ['Sunset Heights Apartments', 'Oakwood Court Villas'],
  },
  {
    id: 'agent-4',
    name: 'Tenant Inquiry Assistant',
    role: 'Tenant Inquiry Assistant',
    description: 'Handles prospective tenant inbound inquiries, unit features, amenity questions, and self-guided tour smart lock passes.',
    avatar: '🏢',
    color: '#8B5CF6',
    isActive: true,
    voiceType: 'David (Friendly / Energetic)',
    stats: {
      callsMade: 3410,
      issuesResolved: 3120,
      lastActive: 'Just now',
      avgHandleTime: '2m 02s',
      satisfactionRate: 99.1,
    },
    assignedProperties: ['All Properties'],
  },
  {
    id: 'agent-5',
    name: 'After-Hours Emergency Guard',
    role: 'After-Hours Emergency Guard',
    description: 'Screens calls from 10 PM - 7 AM for true emergencies (gas leak, flooding, lockouts) and instantly contacts emergency contractors.',
    avatar: '🚨',
    color: '#EF4444',
    isActive: false,
    voiceType: 'Alex (Urgent / Decisive)',
    stats: {
      callsMade: 430,
      issuesResolved: 412,
      lastActive: 'Yesterday',
      avgHandleTime: '1m 30s',
      satisfactionRate: 97.5,
    },
    assignedProperties: ['Sunset Heights Apartments', 'Grandview Executive Lofts', 'Oakwood Court Villas'],
  },
  {
    id: 'agent-6',
    name: 'Vendor & Contractor Dispatcher',
    role: 'Vendor & Contractor Dispatcher',
    description: 'Calls sub-contractors, checks certificates of insurance (COI), requests quotes, and confirms job completion checklists.',
    avatar: '📋',
    color: '#06B6D4',
    isActive: true,
    voiceType: 'Rachel (Efficient / Concise)',
    stats: {
      callsMade: 920,
      issuesResolved: 815,
      lastActive: '3 hours ago',
      avgHandleTime: '2m 30s',
      satisfactionRate: 95.0,
    },
    assignedProperties: ['All Properties'],
  },
];

export const mockTenants: Tenant[] = [
  {
    id: 'usr-1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 234-8901',
    propertyAssigned: 'Sunset Heights Apartments',
    unit: 'Unit 402',
    leaseStatus: 'Expiring Soon',
    moveInDate: '2024-10-01',
    rentAmount: 2450,
    emergencyContact: 'David Jenkins (Father) - +1 (555) 234-9988',
    paymentHistory: [
      { id: 'pay-1', date: '2026-09-01', amount: 2450, status: 'Paid', method: 'ACH Transfer' },
      { id: 'pay-2', date: '2026-08-01', amount: 2450, status: 'Paid', method: 'ACH Transfer' },
      { id: 'pay-3', date: '2026-07-01', amount: 2450, status: 'Paid', method: 'ACH Transfer' },
    ],
    notes: [
      { id: 'not-1', date: '2026-09-25', author: 'Lease Reminder Bot', content: 'Requested renewal contract with 12m lock-in price. Contract emailed.' },
      { id: 'not-2', date: '2026-06-14', author: 'Property Manager', content: 'Requested extra reserved parking spot. Approved space #42.' },
    ],
  },
  {
    id: 'usr-2',
    name: 'Marcus Vance',
    email: 'm.vance@techcorp.io',
    phone: '+1 (555) 876-1234',
    propertyAssigned: 'Grandview Executive Lofts',
    unit: 'Penthouse B',
    leaseStatus: 'Active',
    moveInDate: '2025-01-15',
    rentAmount: 3800,
    emergencyContact: 'Rebecca Vance (Spouse) - +1 (555) 876-5544',
    paymentHistory: [
      { id: 'pay-4', date: '2026-09-01', amount: 3800, status: 'Paid', method: 'Credit Card' },
      { id: 'pay-5', date: '2026-08-01', amount: 3800, status: 'Paid', method: 'Credit Card' },
      { id: 'pay-6', date: '2026-07-01', amount: 3800, status: 'Paid', method: 'Credit Card' },
    ],
    notes: [
      { id: 'not-3', date: '2026-09-24', author: 'Rent Collection Agent', content: 'Sent tax breakdown invoice for company expense report.' },
    ],
  },
  {
    id: 'usr-3',
    name: 'Elena Rostova',
    email: 'elena.rostova@designlab.co',
    phone: '+1 (555) 432-9876',
    propertyAssigned: 'Sunset Heights Apartments',
    unit: 'Unit 108',
    leaseStatus: 'Active',
    moveInDate: '2025-03-01',
    rentAmount: 2150,
    emergencyContact: 'Natasha Rostova (Sister) - +1 (555) 432-1111',
    paymentHistory: [
      { id: 'pay-7', date: '2026-09-01', amount: 2150, status: 'Paid', method: 'Autopay' },
      { id: 'pay-8', date: '2026-08-01', amount: 2150, status: 'Paid', method: 'Autopay' },
    ],
    notes: [
      { id: 'not-4', date: '2026-09-23', author: 'Maintenance Coordinator', content: 'Replaced smart lock batteries.' },
    ],
  },
  {
    id: 'usr-4',
    name: 'Apex Health Systems',
    email: 'facilities@apexhealth.org',
    phone: '+1 (555) 901-3322',
    propertyAssigned: 'Parkline Plaza Commercial',
    unit: 'Suite 300',
    leaseStatus: 'Expiring Soon',
    moveInDate: '2022-05-01',
    rentAmount: 8500,
    emergencyContact: 'Dr. Gregory House (Director) - +1 (555) 901-0000',
    paymentHistory: [
      { id: 'pay-9', date: '2026-09-01', amount: 8500, status: 'Pending', method: 'Wire Transfer' },
      { id: 'pay-10', date: '2026-08-01', amount: 8500, status: 'Paid', method: 'Wire Transfer' },
    ],
    notes: [
      { id: 'not-5', date: '2026-09-24', author: 'Fiflow AI', content: 'Renewal negotiation ongoing for multi-year lease extension.' },
    ],
  },
  {
    id: 'usr-5',
    name: 'Devon Miles',
    email: 'devon.miles@freemail.net',
    phone: '+1 (555) 765-4321',
    propertyAssigned: 'Oakwood Court Villas',
    unit: 'Unit 12',
    leaseStatus: 'Active',
    moveInDate: '2025-08-01',
    rentAmount: 1950,
    emergencyContact: 'Arthur Miles (Brother) - +1 (555) 765-9988',
    paymentHistory: [
      { id: 'pay-11', date: '2026-09-01', amount: 1950, status: 'Paid', method: 'Debit Card' },
      { id: 'pay-12', date: '2026-08-01', amount: 1950, status: 'Paid', method: 'Debit Card' },
    ],
    notes: [
      { id: 'not-6', date: '2026-09-25', author: 'Maintenance Coordinator', content: 'Urgent plumbing repair ticket ISS-503 scheduled with Bay Plumbing.' },
    ],
  },
  {
    id: 'usr-6',
    name: 'Chloe Bennett',
    email: 'c.bennett@outlook.com',
    phone: '+1 (555) 654-7890',
    propertyAssigned: 'Sunset Heights Apartments',
    unit: 'Unit 205',
    leaseStatus: 'Expiring Soon',
    moveInDate: '2024-04-01',
    rentAmount: 2300,
    emergencyContact: 'Karen Bennett (Mother) - +1 (555) 654-0012',
    paymentHistory: [
      { id: 'pay-13', date: '2026-09-01', amount: 2300, status: 'Paid', method: 'ACH Transfer' },
    ],
    notes: [],
  },
  {
    id: 'usr-7',
    name: 'Jordan Taylor',
    email: 'jordan.t@creativepulse.com',
    phone: '+1 (555) 321-6548',
    propertyAssigned: 'Grandview Executive Lofts',
    unit: 'Unit 304',
    leaseStatus: 'Expired',
    moveInDate: '2024-02-01',
    rentAmount: 2900,
    emergencyContact: 'Sam Taylor (Partner) - +1 (555) 321-1122',
    paymentHistory: [
      { id: 'pay-14', date: '2026-01-01', amount: 2900, status: 'Paid', method: 'ACH Transfer' },
    ],
    notes: [
      { id: 'not-7', date: '2026-02-05', author: 'Property Manager', content: 'Moved out Jan 31. Security deposit returned after inspection.' },
    ],
  },
];

export { INITIAL_ISSUES as mockIssues } from './issuesStore';


export const mockDashboardMetrics = {
  totalProperties: { value: 4, trend: '+1 this quarter', isPositive: true },
  activeLeases: { value: 66, trend: '+4.2% vs last month', isPositive: true },
  monthlyRevenue: { value: 198900, trend: '+8.5% year-over-year', isPositive: true },
  pendingIssues: { value: 3, trend: '-25% response time', isPositive: false },
};

export const mockRevenueHistory = [
  { month: 'Apr', revenue: 172000, target: 165000 },
  { month: 'May', revenue: 178500, target: 170000 },
  { month: 'Jun', revenue: 184200, target: 175000 },
  { month: 'Jul', revenue: 189000, target: 180000 },
  { month: 'Aug', revenue: 193400, target: 185000 },
  { month: 'Sep', revenue: 198900, target: 190000 },
];

export const mockLeaseStatusBreakdown = [
  { name: 'Active', value: 66, color: '#22C55E' },
  { name: 'Expiring Soon', value: 8, color: '#F59E0B' },
  { name: 'Expired / Vacant', value: 4, color: '#EF4444' },
];

export const mockRecentActivities: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'call',
    title: 'Lease Renewal Call Completed',
    description: 'Lease Reminder Bot agreed terms with Sarah Jenkins (Sunset Heights, Unit 402)',
    time: '15 mins ago',
    iconType: 'phone',
  },
  {
    id: 'act-2',
    type: 'issue',
    title: 'Urgent Issue Reported & Dispatched',
    description: 'Maintenance Coordinator booked Bay Plumbing for Unit 12 leak',
    time: '2 hours ago',
    iconType: 'wrench',
  },
  {
    id: 'act-3',
    type: 'payment',
    title: 'Rent Payment Received',
    description: 'Marcus Vance paid $3,800 for Penthouse B via Credit Card',
    time: '4 hours ago',
    iconType: 'dollar',
  },
  {
    id: 'act-4',
    type: 'lease',
    title: 'New Lease Draft Created',
    description: 'Drafted 12-month lease for Grandview Lofts Unit 302',
    time: 'Yesterday',
    iconType: 'file-text',
  },
  {
    id: 'act-5',
    type: 'call',
    title: 'Tour Pass Dispatched',
    description: 'Tenant Inquiry Assistant sent smart access pass to prospect Michael Chang',
    time: 'Yesterday',
    iconType: 'key',
  },
];

export const mockUpcomingReminders: ReminderItem[] = [
  {
    id: 'rem-1',
    title: 'Review Parkline Plaza commercial lease renewal',
    due: 'Tomorrow, 5:00 PM',
    category: 'Renewal',
    priority: 'High',
    done: false,
  },
  {
    id: 'rem-2',
    title: 'Inspect Sunset Heights gym equipment repair',
    due: 'Sep 28, 10:00 AM',
    category: 'Inspection',
    priority: 'Medium',
    done: false,
  },
  {
    id: 'rem-3',
    title: 'Confirm Bay Plumbing invoice for Unit 12',
    due: 'Sep 29, 2:00 PM',
    category: 'Billing',
    priority: 'Low',
    done: true,
  },
  {
    id: 'rem-4',
    title: 'Annual Fire Marshal Safety Walkthrough (Seattle)',
    due: 'Oct 02, 9:00 AM',
    category: 'Inspection',
    priority: 'High',
    done: false,
  },
];
