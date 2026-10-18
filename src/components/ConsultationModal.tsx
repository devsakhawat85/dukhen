import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, AlertCircle } from 'lucide-react';
import { PRACTICE_INFO, TEAM_MEMBERS } from '../data/practiceData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: 'virtual',
    preferredDietitian: 'first-available',
    healthConcern: initialService || 'digestive',
    insuranceType: 'self-pay',
    message: '',
    smsConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  if (!isOpen) return null;

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
      newErrors.phone = 'Please provide a 10-digit phone number.';
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

    // Simulate reliable booking request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const refNum = 'DNE-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(refNum);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmissionId('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] rounded-2xl shadow-2xl border border-stone-200/90 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#23301B] text-white shrink-0">
          <div>
            <h2 id="modal-title" className="font-serif text-lg font-bold">
              Schedule Your Clinical Consultation
            </h2>
            <p className="text-xs text-[#B9C979]">
              Duke Nutrition Experts · Registered Dietitians & LEAP Specialists
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E8EED2] text-[#556627] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Consultation Request Received
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-stone-900">{formData.firstName}</strong>. Our clinical coordinator will review your requested focus ({formData.healthConcern}) and reach out within 1 business day to confirm your appointment time and lab kit dispatch.
              </p>

              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200/80 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-stone-800">{submissionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Format:</span>
                  <span className="font-medium text-stone-800 capitalize">
                    {formData.location === 'virtual' ? 'Telehealth (Nationwide)' : formData.location + ' Clinic'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Practice Phone:</span>
                  <a href={PRACTICE_INFO.phoneHref} className="text-[#556627] font-semibold underline">
                    {PRACTICE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#556627] text-white text-sm font-semibold hover:bg-[#43521D] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-lg bg-[#EAEFD5]/60 border border-[#CBD99F] flex items-start gap-2.5 text-xs text-[#354318]">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-[#556627]" />
                <div>
                  <strong>Fast Clinical Intake:</strong> Monday – Friday 8:00 AM – 5:00 PM (MST). Or call us directly at{' '}
                  <a href={PRACTICE_INFO.phoneHref} className="underline font-bold text-[#273413]">
                    {PRACTICE_INFO.phone}
                  </a>{' '}
                  to speak with a scheduler now.
                </div>
              </div>

              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                    placeholder="Jane"
                  />
                  {errors.firstName && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.firstName}
                    </p>
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
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                    placeholder="Smith"
                  />
                  {errors.lastName && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
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
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                    placeholder="(520) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Consultation Format & Dietitian */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Format / Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                  >
                    <option value="virtual">Telehealth Consultation (Online Nationwide)</option>
                    <option value="Oro Valley">In-Person: Oro Valley (Innovation Park Dr)</option>
                    <option value="Tucson">In-Person: Tucson Foothills (Sunrise Dr)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Preferred Dietitian
                  </label>
                  <select
                    value={formData.preferredDietitian}
                    onChange={(e) => setFormData({ ...formData, preferredDietitian: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                  >
                    <option value="first-available">First Available Specialist</option>
                    {TEAM_MEMBERS.map((tm) => (
                      <option key={tm.id} value={tm.name}>
                        {tm.name}, {tm.credentials}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Primary Health Concern */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Primary Symptom / Condition
                  </label>
                  <select
                    value={formData.healthConcern}
                    onChange={(e) => setFormData({ ...formData, healthConcern: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                  >
                    <option value="digestive">Digestive Issues / IBS / Bloating / Reflux</option>
                    <option value="migraines">Migraines & Severe Headaches</option>
                    <option value="fibromyalgia">Fibromyalgia & Widespread Pain</option>
                    <option value="joints">Joint Discomfort & Rheumatoid Symptoms</option>
                    <option value="skin">Eczema, Psoriasis & Chronic Itching</option>
                    <option value="weight">Metabolic Stagnation & Weight Management</option>
                    <option value="fertility">Fertility & Reproductive Nutrition</option>
                    <option value="pediatric">Pediatric / Adolescent Nutrition</option>
                    <option value="sports">Athletic & Combat Sports Nutrition</option>
                    <option value="other">Other Inflammatory Concern</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Insurance / Payment Preference
                  </label>
                  <select
                    value={formData.insuranceType}
                    onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                  >
                    <option value="self-pay">Self-Pay / HSA / FSA (Itemized Superbill Provided)</option>
                    <option value="commercial-insurance">Commercial Health Insurance (Verification Required)</option>
                    <option value="medicare">Medicare Advantage / Other</option>
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Brief Medical / Symptom History (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#556627]/30 focus:border-[#556627] transition"
                  placeholder="Tell us about how long you have experienced symptoms and any prior food testing..."
                />
              </div>

              {/* SMS Consent */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="sms-consent"
                  checked={formData.smsConsent}
                  onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                  className="mt-0.5 rounded text-[#556627] focus:ring-[#556627] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="sms-consent" className="text-[11px] text-stone-600 leading-normal">
                  I agree to receive appointment reminders, lab kit tracking, and clinical communication from Duke Nutrition Experts at the phone number provided. Message & data rates may apply. Reply STOP to cancel at any time.
                </label>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-[#556627] text-white text-sm font-semibold hover:bg-[#43521D] shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Consultation Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
