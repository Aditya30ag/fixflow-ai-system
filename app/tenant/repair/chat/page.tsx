'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { ChatBubble, ChatMessage } from '@/components/tenant/ChatBubble';
import { ChatInput } from '@/components/tenant/ChatInput';
import { Modal } from '@/components/Modal';

// Knowledge base of step-by-step guides by category/keyword
const guideKnowledgeBase: Record<string, { introText: string; steps: string[] }> = {
  Plumbing: {
    introText: 'Here are steps to safely diagnose and fix a leaking faucet or pipe:',
    steps: [
      'Locate the shut-off valve under the sink (turn clockwise to stop active water flow).',
      'Place a dry bucket or towel beneath the P-trap connector to catch any residual water.',
      'Check if the slip nut or hose coupling is loose and hand-tighten gently.',
      'Inspect the rubber gasket or aerator mesh for mineral build-up and rinse with warm water.',
      'Slowly open the valve counter-clockwise to test if the leak persists.',
    ],
  },
  Electrical: {
    introText: 'Here are safety steps to troubleshoot a tripped circuit or outlet:',
    steps: [
      'Unplug high-draw appliances (heaters, hairdryers, toasters) from the affected room.',
      'Locate your unit breaker panel (usually in the hallway, utility closet, or kitchen).',
      'Look for any switch resting in the center "tripped" position or showing an amber/red flag.',
      'Push the tripped breaker completely to "OFF" first with a firm click, then flip it back to "ON".',
      'If the outlet has a "TEST/RESET" button (GFCI), press RESET firmly until it clicks.',
    ],
  },
  'Heating & AC': {
    introText: 'Here are steps to check your thermostat and AC unit airflow:',
    steps: [
      'Confirm the thermostat is switched to "COOL" (or "HEAT") and set at least 3 degrees beyond current room temperature.',
      'Check the battery indicator on your thermostat wall display; replace with 2 fresh AA batteries if blinking.',
      'Inspect the intake air filter grate; a heavily clogged filter blocks air circulation and can trigger auto-shutoff.',
      'Ensure all supply vents in bedrooms and living area are fully rotated open.',
      'Allow the compressor 5 minutes to cycle on before checking vent airflow.',
    ],
  },
  Appliances: {
    introText: 'Here are steps to reset and diagnose a malfunctioning kitchen appliance:',
    steps: [
      'Check if the appliance is firmly plugged into a functional, non-tripped wall receptacle.',
      'Perform a hard reset: unplug the unit for 60 seconds (or switch off its breaker), then plug back in.',
      'For refrigerators: ensure internal air vents in the back freezer wall are not blocked by ice cream or food packages.',
      'For dishwashers: inspect the bottom filter basin for food debris or seeds and rinse under faucet.',
      'Test operation on a standard quick cycle.',
    ],
  },
  'Locks & Security': {
    introText: 'Here are steps to resolve a sticking smart lock or door latch:',
    steps: [
      'If smart lock is not responding, check keypad backlight or swap the 4 AA batteries in the interior compartment.',
      'Pull the door firmly toward you while turning the lock thumbturn to align with the door strike plate.',
      'Inspect the door frame latch hole for debris, dust, or misalignment.',
      'If using key fob or mobile access pass, ensure Bluetooth is toggled ON and FixNet app is open.',
    ],
  },
  Default: {
    introText: 'Here are initial troubleshooting steps for your reported issue:',
    steps: [
      'Inspect the area safely and ensure there is no active water flood or electrical hazard.',
      'Take 1 or 2 clear photos showing the affected fixture and serial number if applicable.',
      'Check if any secondary control switches or shutoffs nearby are engaged.',
      'Clear immediate obstacles to allow safe testing.',
      'Review if the issue occurred after a recent power flicker or weather change.',
    ],
  },
};

function ChatContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  const initialQuery = searchParams.get('q');

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSlot, setBookingSlot] = useState('Tomorrow, 10:00 AM - 12:00 PM');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Initialize initial chat conversation
  useEffect(() => {
    const userPrompt = initialCategory
      ? `I need help with a ${initialCategory} issue in my apartment.`
      : initialQuery
      ? initialQuery
      : 'Hello, I have a repair issue in my unit.';

    const guide =
      (initialCategory && guideKnowledgeBase[initialCategory]) ||
      guideKnowledgeBase.Default;

    const initialUserMsg: ChatMessage = {
      id: 'msg-1',
      sender: 'user',
      text: userPrompt,
      timestamp: 'Just now',
    };

    const initialAiMsg: ChatMessage = {
      id: 'msg-2',
      sender: 'ai',
      text: `Hello! I am your Martin & Co AI Repair Assistant. I have analyzed your request for "${initialCategory || initialQuery || 'General Maintenance'}".`,
      stepData: {
        introText: guide.introText,
        steps: guide.steps,
        feedback: null,
      },
      timestamp: 'Just now',
    };

    setMessages([initialUserMsg, initialAiMsg]);
  }, [initialCategory, initialQuery]);

  // Scroll to bottom on updates
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // AI automated reply simulation
    setTimeout(() => {
      setIsTyping(false);
      const lower = text.toLowerCase();

      let replyMsg: ChatMessage;

      if (lower.includes('water') || lower.includes('leak') || lower.includes('pipe') || lower.includes('sink')) {
        replyMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: 'Understood. Water leaks should be handled promptly to prevent floor damage.',
          stepData: {
            introText: guideKnowledgeBase.Plumbing.introText,
            steps: guideKnowledgeBase.Plumbing.steps,
            feedback: null,
          },
        };
      } else if (lower.includes('power') || lower.includes('light') || lower.includes('electric') || lower.includes('breaker')) {
        replyMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: 'Power and lighting issues can often be solved with a quick breaker reset.',
          stepData: {
            introText: guideKnowledgeBase.Electrical.introText,
            steps: guideKnowledgeBase.Electrical.steps,
            feedback: null,
          },
        };
      } else if (lower.includes('book') || lower.includes('technician') || lower.includes('pro') || lower.includes('visit')) {
        replyMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: 'I can arrange a licensed technician visit to inspect your unit directly.',
          escalationOption: {
            offered: true,
            booked: false,
          },
        };
      } else {
        replyMsg = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: `Thank you for the update. I have logged these details into your unit record. Would you like me to book a technician visit, or are you still working through the troubleshooting steps?`,
          escalationOption: {
            offered: true,
            booked: false,
          },
        };
      }

      setMessages((prev) => [...prev, replyMsg]);
    }, 1000);
  };

  const handleStepFeedback = (messageId: string, result: 'fixed' | 'unresolved') => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              stepData: msg.stepData ? { ...msg.stepData, feedback: result } : undefined,
            }
          : msg
      )
    );

    setTimeout(() => {
      if (result === 'fixed') {
        const successMsg: ChatMessage = {
          id: `ai-success-${Date.now()}`,
          sender: 'ai',
          text: '🎉 Great! Glad we could help resolve this quickly. Is there anything else you need assistance with today?',
        };
        setMessages((prev) => [...prev, successMsg]);
      } else {
        const escalationMsg: ChatMessage = {
          id: `ai-escalate-${Date.now()}`,
          sender: 'ai',
          text: "I'm sorry those steps didn't resolve the issue completely. Let's get an authorized technician out to take care of this for you.",
          escalationOption: {
            offered: true,
            booked: false,
          },
        };
        setMessages((prev) => [...prev, escalationMsg]);
      }
    }, 600);
  };

  const handleBookExpert = (messageId: string) => {
    setBookingModalOpen(true);
  };

  const confirmBooking = () => {
    setBookingSuccess(true);
    setMessages((prev) =>
      prev.map((msg) =>
        msg.escalationOption
          ? { ...msg, escalationOption: { offered: true, booked: true } }
          : msg
      )
    );

    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingSuccess(false);

      const confirmMsg: ChatMessage = {
        id: `ai-confirmed-${Date.now()}`,
        sender: 'ai',
        text: `Confirmed! Your maintenance visit is booked for ${bookingSlot}. A certified technician will call or text 30 minutes prior to arrival. Ticket #MCO-9428 has been linked to your FixNet property record.`,
      };
      setMessages((prev) => [...prev, confirmMsg]);
    }, 1500);
  };

  const handleResetChat = () => {
    router.push('/tenant/repair');
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Sub-bar with Back & Context Info */}
      <div className="bg-white/80 backdrop-blur-xs border-b border-slate-200/80 px-4 py-2.5">
        <div className="max-w-2xl mx-auto flex items-center justify-between text-xs">
          <Link
            href="/tenant/repair"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Repair Categories</span>
          </Link>

          <button
            type="button"
            onClick={handleResetChat}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Start Over</span>
          </button>
        </div>
      </div>

      {/* Main Messages Feed */}
      <div className="flex-1 max-w-2xl w-full mx-auto px-4 py-6">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg}
            onStepFeedback={handleStepFeedback}
            onBookExpert={handleBookExpert}
          />
        ))}

        {/* AI Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 my-3 ml-11">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]" />
            <span className="text-[11px] font-medium text-slate-400 ml-1">
              Martin & Co AI is analyzing steps...
            </span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Floating Bottom Input Bar */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />

      {/* Book Technician Modal */}
      <Modal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        title="Schedule Technician Visit"
        description="Select your preferred service window for certified on-site repair."
      >
        <div className="space-y-4 text-xs">
          {bookingSuccess ? (
            <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <p className="font-bold text-sm">Technician Booking Confirmed!</p>
              <p className="text-xs text-emerald-700">
                Window: {bookingSlot}
              </p>
            </div>
          ) : (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Available Service Windows
                </label>
                <div className="space-y-2">
                  {[
                    'Tomorrow, 10:00 AM - 12:00 PM',
                    'Tomorrow, 2:00 PM - 4:00 PM',
                    'Friday, 9:00 AM - 11:00 AM',
                    'Friday, 1:00 PM - 3:00 PM',
                  ].map((slot) => (
                    <label
                      key={slot}
                      className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                        bookingSlot === slot
                          ? 'border-indigo-500 bg-indigo-50/70 text-indigo-950 font-semibold ring-2 ring-indigo-200'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span>{slot}</span>
                      </div>
                      <input
                        type="radio"
                        name="bookingSlot"
                        checked={bookingSlot === slot}
                        onChange={() => setBookingSlot(slot)}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Access Permission
                </label>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 leading-relaxed">
                  ✓ Technician will ring bell and has property manager master key authorization if you are not home during the window.
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmBooking}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#4F46E5] hover:bg-indigo-700 text-white font-semibold shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Confirm Technician Visit</span>
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default function TenantChatPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-2xl mx-auto p-12 text-center text-xs text-slate-400">
          Loading AI assistant conversation...
        </div>
      }
    >
      <ChatContent />
    </Suspense>
  );
}
