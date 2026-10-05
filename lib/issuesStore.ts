'use client';

import { useState, useEffect, useCallback } from 'react';

export type IssueCategory =
  | 'Plumbing'
  | 'Electrical'
  | 'HVAC'
  | 'Appliance'
  | 'Maintenance'
  | 'Safety & Security'
  | 'Other';

export type IssuePriority = 'Low' | 'Medium' | 'High' | 'Urgent';

export type IssueStatus = 'Open' | 'Pending' | 'In Progress' | 'Resolved';

export type IssueSource = 'AI Call' | 'Tenant Portal' | 'Manual';

export interface IssueTimelineEvent {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'report' | 'ai' | 'dispatch' | 'status' | 'vendor' | 'comment';
}

export interface IssueComment {
  id: string;
  author: string;
  role: string;
  avatar?: string;
  text: string;
  timestamp: string;
}

export interface IssueDispatchInfo {
  status: 'Dispatched' | 'Scheduled' | 'Pending' | 'Completed' | 'En Route';
  vendorName: string;
  vendorPhone: string;
  eta?: string;
  voiceDispatchSummary?: string;
  dispatchCallId?: string;
}

export interface Issue {
  id: string;
  title: string;
  propertyId: string;
  propertyName: string;
  unit: string;
  category: IssueCategory | string;
  priority: IssuePriority;
  status: IssueStatus;
  reportedDate: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  reporterName: string;
  reporterContact: string;
  reporterEmail?: string;
  source: IssueSource;
  callLogId?: string;
  assignedAgent?: string;
  assignedVendor?: string;
  costEstimate?: string;
  photoUrl?: string;
  photos?: string[];
  aiSummary?: string;
  aiRecommendedAction?: string;
  dispatchStatus?: IssueDispatchInfo;
  timeline: IssueTimelineEvent[];
  comments: IssueComment[];
}

export const INITIAL_ISSUES: Issue[] = [
  {
    id: 'ISS-504',
    title: 'Main Supply Line Burst & Subfloor Flooding',
    propertyId: 'prop-4',
    propertyName: 'Oakwood Court Villas',
    unit: 'Unit 12',
    category: 'Plumbing',
    priority: 'Urgent',
    status: 'Open',
    reportedDate: '2026-10-05 14:15',
    createdAt: '2026-10-05T14:15:00Z',
    updatedAt: '12 mins ago',
    description: 'Pressurized cold supply pipe ruptured beneath master bathroom vanity. Steady water gushing onto tiles and seeping toward bedroom baseboard. Tenant placed towels and shut main valve per AI call guidance.',
    reporterName: 'Devon Miles',
    reporterContact: '+1 (555) 765-4321',
    reporterEmail: 'devon.miles@example.com',
    source: 'AI Call',
    callLogId: 'CALL-8841',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'Apex Emergency Plumbing Pros',
    costEstimate: '$650 - $900',
    photoUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Urgent water egress detected in Unit 12. Automated voice agent guided tenant to shut emergency quarter-turn valve under sink within 90 seconds. AI dispatched on-call emergency plumber under Tier-1 warranty SLA.',
    aiRecommendedAction: 'Immediate pipe braze repair, industrial dehumidifier deployment for 48 hours, moisture meter mapping of floor joists.',
    dispatchStatus: {
      status: 'Dispatched',
      vendorName: 'Apex Emergency Plumbing Pros',
      vendorPhone: '+1 (555) 987-1122',
      eta: 'Today, 3:30 PM (in 25 mins)',
      voiceDispatchSummary: 'Automated voice dispatch completed. Tech Marcus Vance confirmed job acceptance via SMS.',
      dispatchCallId: 'CALL-8841',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Emergency Voice Call Received',
        description: 'Resident Devon Miles connected to AI Voice Bot reporting high-pressure leak.',
        timestamp: '14:15',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'AI Emergency Triage & Valve Isolation',
        description: 'Voice bot guided caller to isolate sub-sink quarter turn valve. Leak flow halted.',
        timestamp: '14:17',
        type: 'ai',
      },
      {
        id: 'tl-3',
        title: 'Contractor Auto-Dispatched',
        description: 'AI dispatched Apex Emergency Plumbing Pros with priority Tier-1 dispatch.',
        timestamp: '14:19',
        type: 'dispatch',
      },
      {
        id: 'tl-4',
        title: 'Contractor En Route',
        description: 'Tech Marcus Vance accepted dispatch ticket. Estimated arrival 3:30 PM.',
        timestamp: '14:23',
        type: 'vendor',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Marcus Vance',
        role: 'Apex Plumbing Lead',
        avatar: 'MV',
        text: 'En route with industrial moisture extraction kit and PEX/copper braze fittings.',
        timestamp: '14:25',
      },
      {
        id: 'cm-2',
        author: 'Maintenance Coordinator AI',
        role: 'Autonomous Agent',
        avatar: 'AI',
        text: 'Automated notification sent to Devon Miles confirming technician arrival window.',
        timestamp: '14:26',
      },
    ],
  },
  {
    id: 'ISS-503',
    title: 'HVAC Inverter Fault & Severe Compressor Lockout',
    propertyId: 'prop-3',
    propertyName: 'Parkline Plaza Commercial',
    unit: 'Suite 300',
    category: 'HVAC',
    priority: 'High',
    status: 'In Progress',
    reportedDate: '2026-10-04 09:30',
    createdAt: '2026-10-04T09:30:00Z',
    updatedAt: '45 mins ago',
    description: 'Rooftop RTU-3 serving Suite 300 diagnostic panel throwing Error Code E-42. High head pressure shutdown triggered. Server room temperature rising past 78°F.',
    reporterName: 'Apex Health Systems',
    reporterContact: '+1 (555) 901-3322',
    reporterEmail: 'facilities@apexhealth.org',
    source: 'AI Call',
    callLogId: 'CALL-8840',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'ClimateAir Pro Commercial Services',
    costEstimate: '$1,200 - $1,800',
    photoUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'High-priority commercial HVAC interruption. AI triage diagnosed inverter board failure on 15-ton rooftop unit. Dispatched certified Daikin commercial contractor.',
    aiRecommendedAction: 'Verify inverter capacitors and replace primary PCB inverter board; test refrigerant sub-cooling.',
    dispatchStatus: {
      status: 'Scheduled',
      vendorName: 'ClimateAir Pro Commercial Services',
      vendorPhone: '+1 (555) 789-4455',
      eta: 'Tomorrow, 8:00 AM',
      voiceDispatchSummary: 'Dispatched commercial technician. Replacement board reserved at Austin wholesale depot.',
      dispatchCallId: 'CALL-8840',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Issue Logged by Commercial Tenant',
        description: 'Facilities manager reported high server room temps and RTU error code E-42.',
        timestamp: 'Oct 04, 09:30',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Warranty & SLA Verification',
        description: 'AI verified active commercial HVAC maintenance contract with ClimateAir Pro.',
        timestamp: 'Oct 04, 09:34',
        type: 'ai',
      },
      {
        id: 'tl-3',
        title: 'On-Site Diagnostic Performed',
        description: 'Tech diagnosed blown capacitor bank on inverter board.',
        timestamp: 'Oct 04, 13:15',
        type: 'vendor',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Dave Chen',
        role: 'ClimateAir Pro',
        avatar: 'DC',
        text: 'OEM PCB board in stock at north warehouse. Returning tomorrow at 8:00 AM to install and commission.',
        timestamp: 'Oct 04, 14:00',
      },
    ],
  },
  {
    id: 'ISS-502',
    title: 'Smart Keypad Lock Power Failure & Lockout Risk',
    propertyId: 'prop-1',
    propertyName: 'Sunset Heights Apartments',
    unit: 'Unit 108',
    category: 'Electrical',
    priority: 'Medium',
    status: 'Resolved',
    reportedDate: '2026-10-02 18:20',
    createdAt: '2026-10-02T18:20:00Z',
    updatedAt: '2 days ago',
    description: 'August Smart Lock deadbolt blinking red warning LED with rapid double-chirps. Battery at 4%. Tenant requested proactive battery swap and firmware calibration.',
    reporterName: 'Elena Rostova',
    reporterContact: '+1 (555) 432-9876',
    reporterEmail: 'elena.rostova@gmail.com',
    source: 'Tenant Portal',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'VoltMaster Electric & Smart Home',
    costEstimate: '$85',
    photoUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Preventative hardware alert. Battery failure predicted within 36 hours. AI automatically scheduled maintenance technician visit during tenant preferred window.',
    aiRecommendedAction: 'Install 4x lithium CR123A batteries and cycle deadbolt 10 times to verify alignment.',
    dispatchStatus: {
      status: 'Completed',
      vendorName: 'VoltMaster Electric & Smart Home',
      vendorPhone: '+1 (555) 234-9988',
      eta: 'Completed',
      voiceDispatchSummary: 'Tech completed service on Oct 3 at 10:15 AM.',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Submitted via Tenant Portal',
        description: 'Resident submitted repair request with photo of blinking LED indicator.',
        timestamp: 'Oct 02, 18:20',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Work Order Dispatched',
        description: 'AI queued job for on-site staff during morning rounds.',
        timestamp: 'Oct 02, 18:25',
        type: 'dispatch',
      },
      {
        id: 'tl-3',
        title: 'Batteries Replaced & Verified',
        description: 'Fresh lithium cells installed. Lock tested via smart hub.',
        timestamp: 'Oct 03, 10:15',
        type: 'status',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Elena Rostova',
        role: 'Resident',
        avatar: 'ER',
        text: 'Thank you for handling this so promptly! Working perfectly now.',
        timestamp: 'Oct 03, 11:00',
      },
    ],
  },
  {
    id: 'ISS-501',
    title: 'Balcony Sliding Glass Door Track Jammed & Latch Broken',
    propertyId: 'prop-2',
    propertyName: 'Grandview Executive Lofts',
    unit: 'Unit 201',
    category: 'Maintenance',
    priority: 'Low',
    status: 'Open',
    reportedDate: '2026-10-04 11:20',
    createdAt: '2026-10-04T11:20:00Z',
    updatedAt: '1 hour ago',
    description: 'Double-pane patio sliding glass door is off roller tracks. Requires considerable force to open. Latch does not align with strike plate.',
    reporterName: 'William Harper',
    reporterContact: '+1 (555) 123-4567',
    reporterEmail: 'william.h@harpertech.io',
    source: 'Manual',
    assignedAgent: 'Vendor & Contractor Dispatcher',
    assignedVendor: 'Bay Area Glazing & Hardware',
    costEstimate: '$180 - $240',
    photoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Non-critical mechanical alignment issue. Door remains weather-sealed but latch alignment requires roller height adjustment.',
    aiRecommendedAction: 'Clean debris from lower track and adjust dual roller eccentric screws.',
    dispatchStatus: {
      status: 'Scheduled',
      vendorName: 'Bay Area Glazing & Hardware',
      vendorPhone: '+1 (555) 456-7890',
      eta: 'Thursday, 2:00 PM',
      voiceDispatchSummary: 'Work order scheduled with resident confirmation.',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Manual Inspection Log',
        description: 'Logged by Property Manager during quarterly balcony survey.',
        timestamp: 'Oct 04, 11:20',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Vendor Scheduled',
        description: 'Bay Area Glazing appointed for Thursday window.',
        timestamp: 'Oct 04, 14:00',
        type: 'dispatch',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'William Harper',
        role: 'Resident',
        avatar: 'WH',
        text: 'Thursday 2 PM works great. I will be working from home.',
        timestamp: 'Oct 04, 15:30',
      },
    ],
  },
  {
    id: 'ISS-500',
    title: 'Main Refrigerator Compressor Clicking & Not Cooling',
    propertyId: 'prop-1',
    propertyName: 'Sunset Heights Apartments',
    unit: 'Unit 304',
    category: 'Appliance',
    priority: 'High',
    status: 'In Progress',
    reportedDate: '2026-10-04 16:45',
    createdAt: '2026-10-04T16:45:00Z',
    updatedAt: '30 mins ago',
    description: 'Whirlpool stainless refrigerator freezer is defrosting, internal cabinet temp reached 54°F. Continuous clicking sound every 3 minutes from compressor relay.',
    reporterName: 'Marcus Brody',
    reporterContact: '+1 (555) 890-1234',
    reporterEmail: 'm.brody@designlab.co',
    source: 'AI Call',
    callLogId: 'CALL-8839',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'ApplianceFix Certified Techs',
    costEstimate: '$220 - $350',
    photoUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Appliance failure impacting perishable food storage. AI diagnosed starter relay / capacitor overload malfunction. Autonomous voice dispatch dispatched technician with relay kit.',
    aiRecommendedAction: 'Replace solid-state PTC start relay and check evaporator fan motor spin.',
    dispatchStatus: {
      status: 'En Route',
      vendorName: 'ApplianceFix Certified Techs',
      vendorPhone: '+1 (555) 345-6712',
      eta: 'Today, 5:45 PM',
      voiceDispatchSummary: 'Tech Sam Rivera en route with universal start capacitor assembly.',
      dispatchCallId: 'CALL-8839',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Voice Call Received',
        description: 'Resident called reporting clicking refrigerator and defrosting groceries.',
        timestamp: '16:45',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'AI Diagnostic Match',
        description: 'Acoustic pattern matched PTC relay thermal overload protection cycle.',
        timestamp: '16:47',
        type: 'ai',
      },
      {
        id: 'tl-3',
        title: 'Emergency Appliance Tech Dispatched',
        description: 'Dispatched ApplianceFix certified technician.',
        timestamp: '16:50',
        type: 'dispatch',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Sam Rivera',
        role: 'ApplianceFix Tech',
        avatar: 'SR',
        text: 'Picked up universal Whirlpool start relay. Approaching Sunset Blvd now.',
        timestamp: '17:15',
      },
    ],
  },
  {
    id: 'ISS-499',
    title: 'Gym Treadmill #2 Drive Belt Slipping & Recalibration',
    propertyId: 'prop-1',
    propertyName: 'Sunset Heights Apartments',
    unit: 'Fitness Center',
    category: 'Maintenance',
    priority: 'Low',
    status: 'Resolved',
    reportedDate: '2026-09-30 16:30',
    createdAt: '2026-09-30T16:30:00Z',
    updatedAt: '5 days ago',
    description: 'Commercial LifeFitness treadmill belt slips during foot strike above 5.0 MPH. Motor cover has slight squeak.',
    reporterName: 'Sarah Jenkins',
    reporterContact: '+1 (555) 234-8901',
    reporterEmail: 'sjenkins@creative.org',
    source: 'Manual',
    assignedAgent: 'Vendor & Contractor Dispatcher',
    assignedVendor: 'FitTech Commercial Maintenance',
    costEstimate: '$140',
    photoUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Amenity equipment maintenance. Routine tensioning and silicone lubricant application needed.',
    aiRecommendedAction: 'Tension rear roller allen bolts 1.5 turns and apply 100% silicone belt lubricant.',
    dispatchStatus: {
      status: 'Completed',
      vendorName: 'FitTech Commercial Maintenance',
      vendorPhone: '+1 (555) 678-9012',
      eta: 'Completed',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Reported by Resident',
        description: 'Resident reported slip during morning workout.',
        timestamp: 'Sep 30, 16:30',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Service Completed',
        description: 'Belt realigned and silicone bed applied.',
        timestamp: 'Oct 01, 11:00',
        type: 'status',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'FitTech Lead',
        role: 'Technician',
        avatar: 'FT',
        text: 'Belt centered, waxed, and tested at 10 MPH.',
        timestamp: 'Oct 01, 11:30',
      },
    ],
  },
  {
    id: 'ISS-498',
    title: 'Main Breaker Trip & GFI Circuit Fault in Commercial Kitchen',
    propertyId: 'prop-3',
    propertyName: 'Parkline Plaza Commercial',
    unit: 'Suite 110 (Café)',
    category: 'Electrical',
    priority: 'Urgent',
    status: 'In Progress',
    reportedDate: '2026-10-05 07:15',
    createdAt: '2026-10-05T07:15:00Z',
    updatedAt: '20 mins ago',
    description: 'Dedicated 50A subpanel tripped main espresso machine line and commercial dish pit GFI. Reset attempts fail immediately due to direct ground fault.',
    reporterName: 'Urban Grind Café LLC',
    reporterContact: '+1 (555) 667-8899',
    reporterEmail: 'info@urbangrind.com',
    source: 'AI Call',
    callLogId: 'CALL-8837',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'VoltMaster Commercial Electrical',
    costEstimate: '$450 - $750',
    photoUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'High-impact commercial electrical ground fault. Tenant unable to begin morning operations. AI voice system categorized as business-critical emergency.',
    aiRecommendedAction: 'Megohmmeter insulation test on line conductors; isolate dish pit booster pump.',
    dispatchStatus: {
      status: 'Dispatched',
      vendorName: 'VoltMaster Commercial Electrical',
      vendorPhone: '+1 (555) 889-1123',
      eta: 'Today, 8:15 AM',
      voiceDispatchSummary: 'Master Electrician Kevin O’Connor on-site troubleshooting branch circuits.',
      dispatchCallId: 'CALL-8837',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Emergency Call from Café Manager',
        description: 'AI Voice assistant recognized business-critical outage.',
        timestamp: '07:15',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'AI Commercial Dispatch Triggered',
        description: 'Dispatched commercial electrician with pre-approved emergency overtime rate.',
        timestamp: '07:18',
        type: 'dispatch',
      },
      {
        id: 'tl-3',
        title: 'Electrician Arrived On-Site',
        description: 'Isolating conduit lines behind dish pit sink station.',
        timestamp: '07:55',
        type: 'vendor',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Kevin O’Connor',
        role: 'VoltMaster Master Electrician',
        avatar: 'KO',
        text: 'Moisture seeped into conduit seal. Replacing sealed GFI junction box now.',
        timestamp: '08:20',
      },
    ],
  },
  {
    id: 'ISS-497',
    title: 'Central HVAC Heat Pump Emitting Burning Smell',
    propertyId: 'prop-2',
    propertyName: 'Grandview Executive Lofts',
    unit: 'Penthouse 602',
    category: 'HVAC',
    priority: 'Urgent',
    status: 'Open',
    reportedDate: '2026-10-05 13:00',
    createdAt: '2026-10-05T13:00:00Z',
    updatedAt: '50 mins ago',
    description: 'Turned on heating cycle for the first time this autumn. Distinct burning odor and smoke detector in hallway triggered for 10 seconds. Unit powered off immediately.',
    reporterName: 'Camila Vance',
    reporterContact: '+1 (555) 334-5566',
    reporterEmail: 'camila.vance@vancemedia.com',
    source: 'Tenant Portal',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'Bay Area Climate Specialists',
    costEstimate: '$350 - $550',
    photoUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Urgent safety alert. Possible heating strip dust burn-off or blower motor capacitor overheating. Resident instructed to keep unit powered off at panel.',
    aiRecommendedAction: 'Inspect auxiliary electric heat coils and blower motor bearings for thermal breakdown.',
    dispatchStatus: {
      status: 'Dispatched',
      vendorName: 'Bay Area Climate Specialists',
      vendorPhone: '+1 (555) 443-2211',
      eta: 'Today, 4:00 PM',
      voiceDispatchSummary: 'Emergency tech scheduled for inspection.',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Urgent Alert from Resident',
        description: 'Resident reported burning smell upon activating heat.',
        timestamp: '13:00',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Safety Protocol Prompt',
        description: 'AI portal prompted resident to shut breaker and verified smoke cleared.',
        timestamp: '13:02',
        type: 'ai',
      },
      {
        id: 'tl-3',
        title: 'Contractor Dispatched',
        description: 'Bay Area Climate Specialists assigned with 4:00 PM arrival.',
        timestamp: '13:05',
        type: 'dispatch',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Maintenance Coordinator AI',
        role: 'Autonomous Agent',
        avatar: 'AI',
        text: 'Confirmed with resident that thermostat breaker is safely switched off.',
        timestamp: '13:10',
      },
    ],
  },
  {
    id: 'ISS-496',
    title: 'Dishwasher Drainage Pump Backing Up into Kitchen Basin',
    propertyId: 'prop-4',
    propertyName: 'Oakwood Court Villas',
    unit: 'Unit 08',
    category: 'Appliance',
    priority: 'Medium',
    status: 'In Progress',
    reportedDate: '2026-10-03 21:10',
    createdAt: '2026-10-03T21:10:00Z',
    updatedAt: 'Yesterday',
    description: 'Bosch dishwasher fails at end of rinse cycle with Error E-24. Murky grey water standing in bottom tub and backflowing into sink drain.',
    reporterName: 'Lucas Meyer',
    reporterContact: '+1 (555) 778-9900',
    reporterEmail: 'lmeyer@seattletech.org',
    source: 'Tenant Portal',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'Northwest Appliance Care',
    costEstimate: '$160 - $220',
    photoUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Dishwasher drain pump impeller obstruction or blocked high-loop air gap.',
    aiRecommendedAction: 'Inspect check valve and clear drain pump impeller chamber.',
    dispatchStatus: {
      status: 'Scheduled',
      vendorName: 'Northwest Appliance Care',
      vendorPhone: '+1 (555) 555-8910',
      eta: 'Tomorrow, 10:00 AM',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Reported via Portal',
        description: 'Resident uploaded photo of Bosch Error E-24 display.',
        timestamp: 'Oct 03, 21:10',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Automated Dispatch Confirmation',
        description: 'Northwest Appliance Care confirmed morning slot.',
        timestamp: 'Oct 04, 09:00',
        type: 'dispatch',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Northwest Appliance',
        role: 'Support Desk',
        avatar: 'NA',
        text: 'Appointment set with Lucas for tomorrow at 10:00 AM.',
        timestamp: 'Oct 04, 09:30',
      },
    ],
  },
  {
    id: 'ISS-495',
    title: 'Courtyard Exterior Security Floodlight Fixture Broken',
    propertyId: 'prop-4',
    propertyName: 'Oakwood Court Villas',
    unit: 'North Courtyard',
    category: 'Safety & Security',
    priority: 'Medium',
    status: 'Resolved',
    reportedDate: '2026-09-28 10:00',
    createdAt: '2026-09-28T10:00:00Z',
    updatedAt: '1 week ago',
    description: 'PIR motion sensor floodlight near pedestrian walkway was damaged during storm wind gust. Housing loose and hanging by wires.',
    reporterName: 'Oakwood HOA / Residents',
    reporterContact: '+1 (555) 765-4321',
    reporterEmail: 'manager@oakwoodvillas.com',
    source: 'Manual',
    assignedAgent: 'Vendor & Contractor Dispatcher',
    assignedVendor: 'Sound Electrical Services',
    costEstimate: '$210',
    photoUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Physical security risk in common pedestrian area. Rapid replacement prevents slip and fall hazards.',
    aiRecommendedAction: 'Replace with IP65 commercial LED dual-head flood fixture.',
    dispatchStatus: {
      status: 'Completed',
      vendorName: 'Sound Electrical Services',
      vendorPhone: '+1 (555) 667-2341',
      eta: 'Completed',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Logged During Grounds Walk',
        description: 'Maintenance staff noticed damaged fixture dangling from canopy.',
        timestamp: 'Sep 28, 10:00',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Replacement Completed',
        description: 'Commercial IP65 fixture installed and sensor tested.',
        timestamp: 'Sep 29, 14:00',
        type: 'status',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Property Manager',
        role: 'Staff',
        avatar: 'PM',
        text: 'Work completed cleanly. Area fully illuminated at night.',
        timestamp: 'Sep 29, 15:00',
      },
    ],
  },
  {
    id: 'ISS-494',
    title: 'Main Lobby Intercom & Door Strike Buzzer Intermittent',
    propertyId: 'prop-2',
    propertyName: 'Grandview Executive Lofts',
    unit: 'Main Lobby Entrance',
    category: 'Electrical',
    priority: 'High',
    status: 'In Progress',
    reportedDate: '2026-10-04 15:30',
    createdAt: '2026-10-04T15:30:00Z',
    updatedAt: '2 hours ago',
    description: 'ButterflyMX intercom calls ring tenants’ phones, but pressing Open Door fails to energize magnetic shear lock approximately 40% of the time.',
    reporterName: 'All Building Residents',
    reporterContact: '+1 (555) 432-1111',
    reporterEmail: 'frontdesk@grandviewlofts.com',
    source: 'Manual',
    assignedAgent: 'Vendor & Contractor Dispatcher',
    assignedVendor: 'SafeAccess Security Solutions',
    costEstimate: '$380 - $520',
    photoUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Access control malfunction causing tenant package delivery failures and after-hours entry friction.',
    aiRecommendedAction: 'Check 12V DC power supply voltage drop under load and test relay contacts on door controller.',
    dispatchStatus: {
      status: 'Scheduled',
      vendorName: 'SafeAccess Security Solutions',
      vendorPhone: '+1 (555) 321-7788',
      eta: 'Today, 5:00 PM',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Concierge Incident Report',
        description: 'Multiple delivery drivers and residents reported buzzer failure.',
        timestamp: 'Oct 04, 15:30',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Vendor Scheduled',
        description: 'SafeAccess technician dispatched to inspect door controller board.',
        timestamp: 'Oct 04, 16:00',
        type: 'dispatch',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'SafeAccess Tech',
        role: 'Specialist',
        avatar: 'SA',
        text: 'Bringing backup Altronix 12V power supply to test line drop.',
        timestamp: 'Oct 04, 16:30',
      },
    ],
  },
  {
    id: 'ISS-493',
    title: 'Master Bath Toilet Fill Valve Siphoning Continuously',
    propertyId: 'prop-1',
    propertyName: 'Sunset Heights Apartments',
    unit: 'Unit 215',
    category: 'Plumbing',
    priority: 'Low',
    status: 'Resolved',
    reportedDate: '2026-09-29 08:30',
    createdAt: '2026-09-29T08:30:00Z',
    updatedAt: '6 days ago',
    description: 'Kohler dual flush toilet continuously hissing and running water every few minutes into the bowl. High water usage concern.',
    reporterName: 'Chloe Zhao',
    reporterContact: '+1 (555) 321-6543',
    reporterEmail: 'chloe.zhao@designstudio.la',
    source: 'Tenant Portal',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'Apex Emergency Plumbing Pros',
    costEstimate: '$95',
    photoUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Worn flapper valve silicone seal causing ghost flushing. Low cost, high water conservation impact.',
    aiRecommendedAction: 'Replace flapper and fluidmaster 400A fill valve.',
    dispatchStatus: {
      status: 'Completed',
      vendorName: 'Apex Emergency Plumbing Pros',
      vendorPhone: '+1 (555) 987-1122',
      eta: 'Completed',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Reported via Portal',
        description: 'Chloe reported constant hissing sound in master bathroom.',
        timestamp: 'Sep 29, 08:30',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Replaced & Calibrated',
        description: 'New fill valve and silicone seal installed. Zero leakage verified.',
        timestamp: 'Sep 29, 14:00',
        type: 'status',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Building Super',
        role: 'Staff',
        avatar: 'BS',
        text: 'Tested with blue dye tablets. Bowl holds water perfectly.',
        timestamp: 'Sep 29, 14:30',
      },
    ],
  },
  {
    id: 'ISS-492',
    title: 'HVAC Condensate Drain Pan Overflow in Common Corridor',
    propertyId: 'prop-3',
    propertyName: 'Parkline Plaza Commercial',
    unit: 'Floor 2 Hallway',
    category: 'HVAC',
    priority: 'High',
    status: 'Open',
    reportedDate: '2026-10-05 11:45',
    createdAt: '2026-10-05T11:45:00Z',
    updatedAt: '3 hours ago',
    description: 'Ceiling acoustic tile staining directly below fan coil unit FCU-204. Condensate line clogged with algae bloom causing pan to trip safety float switch.',
    reporterName: 'Parkline Building Management',
    reporterContact: '+1 (555) 901-3322',
    reporterEmail: 'ops@parklineaustin.com',
    source: 'Manual',
    assignedAgent: 'Maintenance Coordinator AI',
    assignedVendor: 'ClimateAir Pro Commercial Services',
    costEstimate: '$280 - $400',
    photoUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    ],
    aiSummary: 'Condensate backup risking drywall ceiling collapse in commercial corridor. Urgent clearing and float switch verification needed.',
    aiRecommendedAction: 'Nitrogen blowout of 3/4 inch PVC drain line and install slow-dissolve biocide tablets.',
    dispatchStatus: {
      status: 'Dispatched',
      vendorName: 'ClimateAir Pro Commercial Services',
      vendorPhone: '+1 (555) 789-4455',
      eta: 'Today, 3:00 PM',
    },
    timeline: [
      {
        id: 'tl-1',
        title: 'Janitorial Alert',
        description: 'Janitor noticed water drops on carpet and discolored ceiling tile.',
        timestamp: '11:45',
        type: 'report',
      },
      {
        id: 'tl-2',
        title: 'Vendor Dispatched',
        description: 'ClimateAir Pro assigned for emergency drain line clearing.',
        timestamp: '11:55',
        type: 'dispatch',
      },
    ],
    comments: [
      {
        id: 'cm-1',
        author: 'Austin Operations',
        role: 'Staff',
        avatar: 'AO',
        text: 'Damaged ceiling tiles removed. Catch container positioned under drain pan.',
        timestamp: '12:15',
      },
    ],
  },
];

const STORAGE_KEY = 'fixflow_issues_data_v2';
const EVENT_NAME = 'fixflow_issues_updated';

// In-memory cache for SSR & fast access
let memoryIssues: Issue[] = [...INITIAL_ISSUES];

function getStoredIssues(): Issue[] {
  if (typeof window === 'undefined') {
    return memoryIssues;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ISSUES));
      memoryIssues = [...INITIAL_ISSUES];
      return memoryIssues;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      memoryIssues = parsed;
      return parsed;
    }
    return INITIAL_ISSUES;
  } catch (err) {
    console.error('Error reading issues from localStorage:', err);
    return memoryIssues;
  }
}

function saveIssues(issues: Issue[]) {
  memoryIssues = issues;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: issues }));
    } catch (err) {
      console.error('Error writing issues to localStorage:', err);
    }
  }
}

export function getAllIssues(): Issue[] {
  return getStoredIssues();
}

export function getIssueById(id: string): Issue | undefined {
  const issues = getStoredIssues();
  return issues.find((i) => i.id === id);
}

export function addIssue(newIssue: Issue): void {
  const current = getStoredIssues();
  const updated = [newIssue, ...current.filter((i) => i.id !== newIssue.id)];
  saveIssues(updated);
}

export function updateIssue(id: string, updates: Partial<Issue>): void {
  const current = getStoredIssues();
  const updated = current.map((i) => {
    if (i.id === id) {
      return {
        ...i,
        ...updates,
        updatedAt: 'Just now',
      };
    }
    return i;
  });
  saveIssues(updated);
}

export function addCommentToIssue(
  issueId: string,
  commentData: { author: string; role: string; text: string; avatar?: string }
): void {
  const current = getStoredIssues();
  const updated = current.map((issue) => {
    if (issue.id === issueId) {
      const newComment: IssueComment = {
        id: `cm-${Date.now()}`,
        author: commentData.author,
        role: commentData.role,
        avatar: commentData.avatar || commentData.author.substring(0, 2).toUpperCase(),
        text: commentData.text,
        timestamp: 'Just now',
      };

      const newTimeline: IssueTimelineEvent = {
        id: `tl-${Date.now()}`,
        title: 'Note Added',
        description: `${commentData.author} (${commentData.role}): "${commentData.text.slice(0, 60)}${commentData.text.length > 60 ? '...' : ''}"`,
        timestamp: 'Just now',
        type: 'comment',
      };

      return {
        ...issue,
        comments: [...(issue.comments || []), newComment],
        timeline: [...(issue.timeline || []), newTimeline],
        updatedAt: 'Just now',
      };
    }
    return issue;
  });
  saveIssues(updated);
}

export function updateIssueStatus(issueId: string, newStatus: IssueStatus): void {
  const current = getStoredIssues();
  const updated = current.map((issue) => {
    if (issue.id === issueId) {
      const newTimeline: IssueTimelineEvent = {
        id: `tl-${Date.now()}`,
        title: `Status Changed to ${newStatus}`,
        description: `Ticket status transitioned from ${issue.status} to ${newStatus}.`,
        timestamp: 'Just now',
        type: 'status',
      };

      return {
        ...issue,
        status: newStatus,
        timeline: [...(issue.timeline || []), newTimeline],
        updatedAt: 'Just now',
      };
    }
    return issue;
  });
  saveIssues(updated);
}

export function getOpenIssuesCount(): number {
  const issues = getStoredIssues();
  return issues.filter((i) => i.status !== 'Resolved').length;
}

/**
 * Custom React hook for reactive issues data
 */
export function useIssues() {
  const [issues, setIssues] = useState<Issue[]>(() => {
    if (typeof window !== 'undefined') {
      return getStoredIssues();
    }
    return INITIAL_ISSUES;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initial sync
    setIssues(getStoredIssues());

    const handleUpdate = () => {
      setIssues(getStoredIssues());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const totalCount = issues.length;
  const openCount = issues.filter((i) => i.status === 'Open' || i.status === 'Pending').length;
  const inProgressCount = issues.filter((i) => i.status === 'In Progress').length;
  const resolvedCount = issues.filter((i) => i.status === 'Resolved').length;
  const urgentCount = issues.filter((i) => i.priority === 'Urgent').length;

  return {
    issues,
    loading,
    totalCount,
    openCount,
    inProgressCount,
    resolvedCount,
    urgentCount,
    addIssue,
    updateIssue,
    updateIssueStatus,
    addCommentToIssue,
  };
}
