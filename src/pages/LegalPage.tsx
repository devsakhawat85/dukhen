import React from 'react';
import { LegalTab, PageId } from '../types';
import { PRACTICE_INFO } from '../data/practiceData';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  currentTab: LegalTab;
  onTabChange: (tab: LegalTab) => void;
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  currentTab,
  onTabChange,
  onNavigate,
}) => {
  const tabs: { id: LegalTab; label: string }[] = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms and Conditions' },
    { id: 'refunds', label: 'Terms of Purchase & Refunds' },
    { id: 'digital-products', label: 'Digital Products Terms' },
    { id: 'voucher-terms', label: 'Voucher Terms' },
    { id: 'code-of-conduct', label: 'Code of Conduct' },
  ];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-[#24311C] text-white pt-14 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs text-[#B9C979] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Legal, Privacy & Practice Policies
          </h1>

          <p className="text-stone-300 text-sm max-w-2xl">
            Duke Nutrition Experts, LLC policy documents, HIPAA-conscious privacy disclosures, and terms of service.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tab Selector Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block px-2 pb-2">
                Policy Documents
              </span>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                    currentTab === tab.id
                      ? 'bg-[#556627] text-white'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span>{tab.label}</span>
                  {currentTab === tab.id && <ShieldCheck className="w-4 h-4" />}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-stone-200 text-xs text-stone-600 space-y-2">
              <strong className="text-stone-900 block font-semibold">Policy Inquiries:</strong>
              <p>
                For questions regarding personal health information or billing records, please email our administration at{' '}
                <a href={PRACTICE_INFO.emailHref} className="text-[#556627] underline">
                  {PRACTICE_INFO.email}
                </a>{' '}
                or call {PRACTICE_INFO.phone}.
              </p>
            </div>
          </div>

          {/* Tab Document Content */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-10 shadow-sm leading-relaxed text-stone-700 text-sm space-y-6">
            
            {/* 1. Privacy Policy */}
            {currentTab === 'privacy' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Privacy Policy
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Effective Date: February 2020 · Last Updated: 2026 · Duke Nutrition Experts, LLC
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">1. Overview</h3>
                  <p>
                    By visiting www.dukenutritionexperts.com you are consenting to our privacy policy. Duke Nutrition Experts, LLC is committed to protecting your privacy online. This Privacy Policy describes the personal information collected through this website and how that information is collected and used.
                  </p>
                  <p>
                    The terms “we”, “us” and “our” refer to the owners of Duke Nutrition Experts, LLC. The term “user”, “you” and “your” refers to site visitors, customers and any other users of the site. The term “personal information” is defined as information that you voluntarily provide to us which personally identifies you and/or your contact information, such as your name, phone number and email address.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">2. Information We Collect</h3>
                  <p>
                    This Site only collects the personal information you voluntarily provide to us which may include service & product orders (name, address, email address, phone number). This information is shared with our e-commerce and electronic medical record providers to ensure the safe delivery of your lab testing and care coordination.
                  </p>
                  <p>
                    Your payment information is collected securely via encrypted third-party merchant processing. Payment information is securely communicated to and processed via our healthcare e-commerce provider; we do not store raw credit card numbers on public web servers.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">3. Third-Party Confidentiality</h3>
                  <p>
                    We do share information with trusted third parties who assist us in operating the Site, conducting our business, and servicing clients (e.g., ActiveCampaign, HIPAA-compliant patient communication systems). These trusted third parties agree to keep this information strictly confidential. Your personal information will never be shared with unrelated third parties nor will it ever be sold, rented, or leased. Ever.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">4. European Economic Area (EEA) Residents</h3>
                  <p>
                    If you reside in a country in the European Economic Area (EEA), then under the GDPR and applicable data protection laws you have the rights, among other things, to access your personal data, have us erase it, and/or restrict its further processing. If you wish to access or delete your personal data maintained by us, you can contact us at info@dukenutritionexperts.com.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">5. Testimonials Consent</h3>
                  <p>
                    Any correspondence received via e-mail or otherwise becomes the property of Duke Nutrition Experts, LLC and may be published at the authors’ discretion in the form of customer testimonials. To request that your correspondence not be used in this manner or that your testimonial remains anonymous, please contact us at info@dukenutritionexperts.com.
                  </p>
                </div>
              </div>
            )}

            {/* 2. Terms and Conditions */}
            {currentTab === 'terms' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Terms and Conditions
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Duke Nutrition Experts, LLC · Website Use and Service Agreement
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">1. Acceptance of Terms</h3>
                  <p>
                    Please read these Terms and Conditions carefully before using the www.dukenutritionexperts.com website. By accessing or using any part of the site, you agree to become bound by these terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">2. Medical & Nutritional Disclaimers</h3>
                  <p>
                    The information provided through this site and in our consultations is for nutritional counseling, educational guidance, and wellness optimization. While our team includes licensed Registered Dietitian Nutritionists and Certified LEAP Therapists, nutritional services do not substitute for direct medical diagnosis, management of acute medical emergencies, or treatment by a licensed physician.
                  </p>
                  <p>
                    Always consult your personal physician before beginning any new diet, supplementation, or exercise program, particularly if you are pregnant, nursing, or taking prescription pharmaceuticals.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">3. Intellectual Property</h3>
                  <p>
                    All content included on this site, such as text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Duke Nutrition Experts, LLC and is protected by United States and international copyright laws.
                  </p>
                </div>
              </div>
            )}

            {/* 3. Terms of Purchase & Refunds */}
            {currentTab === 'refunds' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Terms of Purchase and Refund Policy
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Last Updated: October 18, 2021 · Duke Nutrition Experts, LLC
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">1. Cancellation & Rescheduling Policy</h3>
                  <p>
                    To be fair to all our clients who want to see us as soon as possible, we adhere strictly to the following cancellation policy:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
                    <li>You must call and speak with a scheduler or your dietitian to reschedule. An email or instant message alone is not sufficient.</li>
                    <li>You must cancel/reschedule the prior business day during normal business hours.</li>
                    <li>No same-day cancellations. After hours or weekend messages do not qualify for prior business day cancellation.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">2. No Guarantee of Results</h3>
                  <p>
                    We do not guarantee that you will achieve any specific health or other results. While our programs have helped many people, correcting health through our programs is a combination of lab results, expert nutrition guidance, and the individual cooperation and adherence of the client.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">3. Diagnostic Testing Kit Refunds</h3>
                  <p>
                    Refunds on laboratory testing will be issued if:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
                    <li>Your refund has been requested within 30 days of the purchase date.</li>
                    <li>You have not sent in blood, urine, saliva, or other specimens to the laboratory.</li>
                    <li>A full refund is available if canceled within the first 7 days of sign-up.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900">4. Health Insurance Agreement</h3>
                  <p>
                    Your health insurance company will only pay for services that they determine to be “reasonable and necessary.” By agreeing to this policy you are swearing the following:
                  </p>
                  <blockquote className="p-4 rounded-lg bg-stone-50 border-l-2 border-[#556627] text-xs italic text-stone-700">
                    “I understand that my health insurance company may deny payment for services provided. If my health insurance company denies payment, I agree to be personally and fully responsible for payment. I also understand that if my health insurance company does make payment for services, I will be responsible for any co-payment, deductible, or coinsurance that applies.”
                  </blockquote>
                </div>
              </div>
            )}

            {/* 4. Digital Products */}
            {currentTab === 'digital-products' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Terms and Conditions - Digital Products
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Digital Courses, Meal Plans & Downloadable Media
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    Thank you for choosing Duke Nutrition Experts to improve your health. We want you to be thrilled with your care and your digital educational materials.
                  </p>
                  <h3 className="font-serif text-lg font-bold text-stone-900">Refund Terms for Digital Products</h3>
                  <p>
                    Due to the immediate online and downloadable nature of digital products, e-courses, and downloadable meal guides, no refunds will be issued once digital access credentials have been transmitted.
                  </p>
                  <h3 className="font-serif text-lg font-bold text-stone-900">Insurance Exclusion</h3>
                  <p>
                    Insurance cannot be billed for digital products. The delivery method of digital meal planning programs does not allow us to file a claim on your behalf with health insurance carriers.
                  </p>
                </div>
              </div>
            )}

            {/* 5. Voucher Terms */}
            {currentTab === 'voucher-terms' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Voucher Terms and Conditions
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Promotional Certificates, Gift Vouchers & Community Credits
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <p>
                    All promotional vouchers issued by Duke Nutrition Experts, LLC must be redeemed prior to the stated expiration date. Vouchers are non-transferable, cannot be redeemed for cash, and may not be combined with other promotional offers or applied retrospectively to previous purchases.
                  </p>
                  <p>
                    Vouchers for clinical consultations apply toward initial evaluation fees. Any laboratory blood testing panels required are billed separately at clinical diagnostic rates.
                  </p>
                </div>
              </div>
            )}

            {/* 6. Code of Conduct */}
            {currentTab === 'code-of-conduct' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Practice Code of Conduct
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Patient & Clinician Mutual Respect Standards
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <p>
                    Duke Nutrition Experts is committed to creating a safe, welcoming, and inclusive healthcare environment for patients and clinical staff alike.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-stone-600 text-xs">
                    <li><strong>Mutual Respect:</strong> We treat all clients with compassion, dignity, and cultural respect. In turn, we require respectful communication with our front office staff, dietitians, and scheduling team.</li>
                    <li><strong>Collaborative Communication:</strong> We encourage honest, timely reporting of dietary compliance, food journal observations, and symptoms.</li>
                    <li><strong>Zero Tolerance for Abuse:</strong> Aggressive, abusive, or discriminatory behavior toward staff or fellow community members will result in immediate termination of services.</li>
                  </ul>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
