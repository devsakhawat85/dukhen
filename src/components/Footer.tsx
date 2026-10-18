import React from 'react';
import { PageId, LegalTab } from '../types';
import { PRACTICE_INFO } from '../data/practiceData';
import { Phone, Mail, Printer, MapPin, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegalTab: (tab: LegalTab) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegalTab,
  onOpenConsultation,
}) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLegal = (tab: LegalTab) => {
    onNavigate('legal');
    onOpenLegalTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C2417] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-800/80">
          
          {/* Col 1 & 2: Brand Identity & Clinical Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="/images/logo_primary.png"
                alt="Duke Nutrition Experts"
                className="h-12 w-auto brightness-0 invert opacity-95"
              />
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Your body is an amazing pharmacy. We provide science-backed functional evaluations,
              Mediator Release Testing (MRT), and cellular micronutrient analysis to heal chronic inflammation at the root.
            </p>

            {/* Direct Contact Points */}
            <div className="pt-2 space-y-2 text-sm">
              <a
                href={PRACTICE_INFO.phoneHref}
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-stone-800 flex items-center justify-center text-[#B9C979] group-hover:bg-[#556627] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Phone: <strong className="text-white tabular-nums">{PRACTICE_INFO.phone}</strong></span>
              </a>

              <div className="flex items-center gap-2.5 text-stone-400">
                <div className="w-7 h-7 rounded-md bg-stone-800 flex items-center justify-center text-stone-400">
                  <Printer className="w-3.5 h-3.5" />
                </div>
                <span>Fax: <span className="tabular-nums">{PRACTICE_INFO.fax}</span></span>
              </div>

              <a
                href={PRACTICE_INFO.emailHref}
                className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-stone-800 flex items-center justify-center text-[#B9C979] group-hover:bg-[#556627] group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Email: <span className="text-stone-200">{PRACTICE_INFO.email}</span></span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4 text-xs text-stone-400">
              <a
                href={PRACTICE_INFO.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[#B9C979] transition-colors underline underline-offset-4"
              >
                Facebook Practice Page
              </a>
              <span>·</span>
              <a
                href={PRACTICE_INFO.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[#B9C979] transition-colors underline underline-offset-4"
              >
                Instagram @dukenutritionexperts
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
              Practice Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white text-stone-300 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white text-stone-300 transition-colors text-left"
                >
                  Services & Lab Tests
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white text-stone-300 transition-colors text-left"
                >
                  About the Practitioners
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('testimonials')}
                  className="hover:text-white text-stone-300 transition-colors text-left"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('guide')}
                  className="hover:text-white text-stone-300 transition-colors text-left"
                >
                  Free Inflammation Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-white text-stone-300 transition-colors text-left"
                >
                  Plans & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white text-stone-300 transition-colors text-left"
                >
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Locations & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
              Practice Locations
            </h4>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-medium text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#B9C979]" />
                  <span>Oro Valley Office</span>
                </div>
                <p className="text-stone-400 pl-5">1846 E Innovation Park Drive</p>
                <p className="text-stone-400 pl-5">Oro Valley, AZ 85755</p>
              </div>

              <div className="space-y-0.5 pt-1">
                <div className="flex items-center gap-1.5 font-medium text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#B9C979]" />
                  <span>Tucson Foothills Office</span>
                </div>
                <p className="text-stone-400 pl-5">3430 E Sunrise Dr. Suite 180</p>
                <p className="text-stone-400 pl-5">Tucson, AZ 85718</p>
              </div>

              <div className="pt-2 border-t border-stone-800 space-y-1">
                <div className="flex items-center gap-1.5 text-stone-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B9C979]" />
                  <span>Office Hours:</span>
                </div>
                <p className="text-stone-400 pl-5">{PRACTICE_INFO.hours}</p>
                <p className="text-stone-500 pl-5">{PRACTICE_INFO.weekendHours}</p>
              </div>
            </div>
          </div>

          {/* Col 5: Consultation Action & Policies */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
              Get Started
            </h4>

            <p className="text-xs text-stone-400 leading-relaxed">
              Ready to identify what foods cause your symptoms? Book an initial evaluation with a registered dietitian.
            </p>

            <button
              onClick={onOpenConsultation}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#556627] text-white text-xs font-semibold tracking-wide hover:bg-[#687c32] shadow-sm transition-colors cursor-pointer"
            >
              <span>Book Evaluation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="pt-3 border-t border-stone-800">
              <h5 className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
                Legal & Governance
              </h5>
              <div className="flex flex-col space-y-1 text-xs text-stone-400">
                <button
                  onClick={() => handleLegal('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => handleLegal('terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms and Conditions
                </button>
                <button
                  onClick={() => handleLegal('refunds')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Purchase & Refunds
                </button>
                <button
                  onClick={() => handleLegal('digital-products')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Digital Products Terms
                </button>
                <button
                  onClick={() => handleLegal('voucher-terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Voucher Terms & Conditions
                </button>
                <button
                  onClick={() => handleLegal('code-of-conduct')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Code of Conduct
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-stone-500 leading-relaxed">
          <p>
            <strong className="text-stone-400">Clinical Disclaimer:</strong> The nutritional information, functional testing explanations, and clinical protocols presented on this website are for individualized nutritional therapy and educational purposes. Duke Nutrition Experts, LLC provides clinical dietary counseling under licensed Registered Dietitian Nutritionists (RDN) and Certified LEAP Therapists (CLT). Our services do not constitute emergency medical care or replace medical diagnoses by a licensed medical doctor (MD/DO). Individual clinical results vary according to patient adherence, biological history, and underlying medical pathology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800/60 text-stone-400">
            <span>© 2026 Duke Nutrition Experts, LLC. All rights reserved.</span>
            <span>Tucson & Oro Valley, Arizona · Serving Clients Nationwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
