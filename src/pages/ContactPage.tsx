import React, { useState } from 'react';
import { PageId, LegalTab } from '../types';
import { PRACTICE_INFO } from '../data/practiceData';
import {
  Phone,
  Mail,
  Printer,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  Building2,
  Calendar,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLegalTab: (tab: LegalTab) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenLegalTab,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    locationPreference: 'Oro Valley',
    inquiryType: 'general',
    message: '',
    smsConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or question.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedId = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryId(generatedId);
    }, 700);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-[#24311C] text-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B9C979]">
            <span>We Look Forward to Hearing From You</span>
            <span>·</span>
            <span>Duke Nutrition Experts</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            Contact Our Practice & Clinical Coordinators
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our unique method helps everyday people break free from their symptoms, allowing them to return to the things they love. Reach out by phone, email, or visit our Arizona offices.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Inquiry Form Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Practice Contacts & Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
                Direct Contact
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Reach Our Care Coordinators
              </h2>
            </div>

            <div className="space-y-4">
              <a
                href={PRACTICE_INFO.phoneHref}
                className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-sm flex items-start gap-4 hover:border-[#556627]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center shrink-0 group-hover:bg-[#556627] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                    Direct Practice Phone
                  </div>
                  <div className="font-serif text-lg font-bold text-stone-900 tabular-nums">
                    {PRACTICE_INFO.phone}
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Live scheduling during business hours
                  </p>
                </div>
              </a>

              <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                    Secure Medical Fax
                  </div>
                  <div className="font-serif text-lg font-bold text-stone-900 tabular-nums">
                    {PRACTICE_INFO.fax}
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    For physician records & referral sheets
                  </p>
                </div>
              </div>

              <a
                href={PRACTICE_INFO.emailHref}
                className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-sm flex items-start gap-4 hover:border-[#556627]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center shrink-0 group-hover:bg-[#556627] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                    Direct Clinical Email
                  </div>
                  <div className="text-sm sm:text-base font-bold text-stone-900 break-all">
                    {PRACTICE_INFO.email}
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Inquiries returned within 1 business day
                  </p>
                </div>
              </a>
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                <Clock className="w-4 h-4 text-[#556627]" />
                <span>Office Hours</span>
              </div>
              <p className="text-xs text-stone-700 font-medium">
                {PRACTICE_INFO.hours}
              </p>
              <p className="text-xs text-stone-500">
                {PRACTICE_INFO.weekendHours}
              </p>
            </div>

            {/* Physical Practice Locations */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-bold block">
                Physical Practice Locations
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1 text-xs">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#556627]" />
                    <span>Oro Valley Office</span>
                  </div>
                  <p className="text-stone-600">1846 E Innovation Park Drive</p>
                  <p className="text-stone-600">Oro Valley, AZ 85755</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1 text-xs">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#556627]" />
                    <span>Tucson Office</span>
                  </div>
                  <p className="text-stone-600">3430 E Sunrise Dr. Suite 180</p>
                  <p className="text-stone-600">Tucson, AZ 85718</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-md">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EAEFD5] text-[#556627] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Thanks for Submitting!
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received (Reference: <strong className="font-mono text-stone-900">{inquiryId}</strong>). Our clinical intake team will review your message and contact you at <strong className="text-stone-900">{formData.email}</strong> or <strong className="text-stone-900">{formData.phone}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#556627] text-white text-xs font-semibold hover:bg-[#43521D]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Have a question regarding lab kits, practitioner availability, or billing? Let us know below.
                    </p>
                  </div>

                  {/* Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Sarah"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      />
                      {errors.firstName && (
                        <p className="text-xs text-rose-600 mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Miller"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      />
                      {errors.lastName && (
                        <p className="text-xs text-rose-600 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(520) 000-0000"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Location & Concern */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Preferred Location / Care Format
                      </label>
                      <select
                        value={formData.locationPreference}
                        onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      >
                        <option value="Oro Valley">Oro Valley Office (Innovation Park Dr)</option>
                        <option value="Tucson">Tucson Foothills Office (Sunrise Dr)</option>
                        <option value="Virtual">Telehealth (Online Nationwide)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      >
                        <option value="general">General Clinical Question</option>
                        <option value="lab-tests">Food Sensitivity / Lab Testing Info</option>
                        <option value="appointment">Scheduling an Initial Evaluation</option>
                        <option value="plans">Monthly Meal Plans & Pricing</option>
                        <option value="insurance">Insurance Superbill Question</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe how we can assist you..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* SMS Consent (Preserved from original form) */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="contact-sms"
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                      className="mt-0.5 rounded text-[#556627] focus:ring-[#556627] w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="contact-sms" className="text-[11px] text-stone-600 leading-normal">
                      I agree to receive text messages from Duke Nutrition Experts regarding appointment reminders, care updates, and nutrition consultations. Message and data rates may apply. Reply STOP to cancel at any time. View our{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegalTab('privacy')}
                        className="text-[#556627] underline"
                      >
                        Privacy Policy
                      </button>{' '}
                      and{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegalTab('terms')}
                        className="text-[#556627] underline"
                      >
                        Terms and Conditions
                      </button>
                      .
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#556627] text-white font-semibold text-sm hover:bg-[#43521D] shadow transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
