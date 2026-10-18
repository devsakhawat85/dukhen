import React, { useState } from 'react';
import { PageId } from '../types';
import { PRICING_PLANS, CLINICAL_PROGRAMS } from '../data/practiceData';
import {
  Check,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  CreditCard,
  FileText,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedPlanModal, setSelectedPlanModal] = useState<string | null>(null);
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlanModal(planName);
    setCheckoutSuccess(false);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutName || !checkoutEmail) return;
    setCheckoutSuccess(true);
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-[#24311C] text-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B9C979]">
            <span>Transparent Pricing & Inclusions</span>
            <span>·</span>
            <span>Duke Nutrition Experts</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            Plans, Pricing & Clinical Care Pathways
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Choose between ongoing monthly dietitian-curated meal planning with expert forum support, or comprehensive one-on-one laboratory diagnostic packages.
          </p>
        </div>
      </section>

      {/* 2. Monthly Membership Plans (Verified Original Offers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
            Monthly Meal Planning Memberships
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Curated Nutrition Delivered Every Week
          </h2>
          <p className="text-stone-600 text-sm">
            Cancel anytime. No long-term lock-in. Immediate access to our recipes and meal prep library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isExpert = plan.id === 'simply-clean-expert';
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  isExpert
                    ? 'bg-white border-2 border-[#556627] shadow-xl relative'
                    : 'bg-white border border-stone-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {isExpert && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#556627] text-white text-[11px] font-bold tracking-wider uppercase">
                    Best Value
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tabular-nums">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-stone-500 font-medium">
                      / {plan.period.toLowerCase()}
                    </span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-stone-100">
                    <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Plan Inclusions:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#556627] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                      isExpert
                        ? 'bg-[#556627] text-white hover:bg-[#43521D] shadow-md'
                        : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Comprehensive One-on-One Diagnostic Pathways */}
      <section className="bg-white py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              Clinical Lab Pathways
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              One-on-One Specialized Clinical Programs
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              For patients facing chronic migraines, irritable bowel syndrome, fibromyalgia, or unresolved fatigue, we offer intensive diagnostic programs combining patented laboratory panels with full clinical supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CLINICAL_PROGRAMS.map((prog, pIdx) => (
              <div
                key={pIdx}
                className="p-8 rounded-2xl bg-[#FAF9F5] border border-stone-200/90 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded bg-[#EAEFD5] text-[#3E4F1B] text-[11px] font-bold uppercase tracking-wider">
                    {prog.badge}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2 border-t border-stone-200/60 space-y-2">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-400">
                      Inclusions:
                    </div>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {prog.inclusions.map((inc, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#556627] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200/60">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#556627] text-white text-xs font-semibold hover:bg-[#43521D] transition-colors"
                  >
                    Inquire About This Program
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Verified Policy Disclosures (from original blank.html) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl bg-white border border-stone-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <ShieldCheck className="w-6 h-6 text-[#556627]" />
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Billing, Cancellation & Insurance Policy
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div>
              <strong className="text-stone-900 block font-semibold mb-1">Cancellation Policy:</strong>
              <p>
                To be fair to all our clients who want to see us as soon as possible, we adhere strictly to our cancellation policy. You must speak with a scheduler or your dietitian to reschedule. Email or instant messaging alone is not sufficient. Cancellations must occur the prior business day during normal business hours. No same-day cancellations.
              </p>
            </div>

            <div>
              <strong className="text-stone-900 block font-semibold mb-1">Testing Kit Refund Terms:</strong>
              <p>
                Refunds on diagnostic laboratory testing kits will be honored if your refund request is submitted within 30 days of the purchase date AND you have not dispatched blood, urine, saliva, or other specimens to the laboratory. A full refund is available if canceled within the first 7 days of sign-up.
              </p>
            </div>

            <div>
              <strong className="text-stone-900 block font-semibold mb-1">Health Insurance Coverage Disclosure:</strong>
              <p>
                Your health insurance company will only pay for services that they determine to be “reasonable and necessary.” If your health insurance denies payment, you agree to be personally and fully responsible for payment. If your insurance does remit payment, you remain responsible for any applicable co-payment, deductible, or coinsurance.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('legal')}
              className="text-xs font-semibold text-[#556627] hover:underline"
            >
              Read Full Terms of Purchase and Refund Policy →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Plan Selection Modal */}
      {selectedPlanModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            {checkoutSuccess ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EAEFD5] text-[#556627] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Welcome to {selectedPlanModal}!
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Thank you, <strong>{checkoutName}</strong>. Your membership setup instructions and first weekly anti-inflammatory meal plan have been routed to <strong>{checkoutEmail}</strong>.
                </p>
                <button
                  onClick={() => setSelectedPlanModal(null)}
                  className="px-6 py-2 rounded-lg bg-[#556627] text-white text-xs font-semibold hover:bg-[#43521D]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900">
                      {selectedPlanModal} Enrollment
                    </h3>
                    <p className="text-xs text-[#556627]">
                      {selectedPlanModal === 'Simply Clean' ? '$25 / Month' : '$35 / Month'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPlanModal(null)}
                    className="text-stone-400 hover:text-stone-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutName}
                      onChange={(e) => setCheckoutName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={checkoutEmail}
                      onChange={(e) => setCheckoutEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-[11px] text-stone-500 leading-normal">
                  You are subscribing to {selectedPlanModal}. Billed monthly until canceled. You may cancel at any time through your account or by emailing info@dukenutritionexperts.com.
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPlanModal(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-[#556627] text-white text-xs font-semibold hover:bg-[#43521D]"
                  >
                    Complete Plan Setup
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
