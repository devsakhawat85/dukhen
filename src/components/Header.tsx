import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'About', page: 'about' },
    { label: 'Testimonials', page: 'testimonials' },
    { label: 'Guide', page: 'guide' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Top Clinical Announcement Bar */}
      <div className="bg-[#27351F] text-[#FAF9F5] px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[#B9C979]">Practice Locations:</span>
            <span>Tucson & Oro Valley, AZ · Telehealth Available Nationwide</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={PRACTICE_INFO.phoneHref}
              className="flex items-center gap-1.5 text-stone-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B9C979]" />
              <span className="tabular-nums font-semibold tracking-wider">{PRACTICE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left group focus-visible:outline-none"
              aria-label="Duke Nutrition Experts Home"
            >
              <img
                src="/images/logo_primary.png"
                alt="Duke Nutrition Experts"
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback to text logo if image unavailable
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 leading-tight">
                  Duke Nutrition
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#5C6E2E] font-semibold">
                  Experts · Functional Care
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#556627] font-semibold'
                      : 'hover:text-stone-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6E8236] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#556627] text-white text-sm font-semibold tracking-wide hover:bg-[#43521D] shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF9F5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 py-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-[#EAEFD5] text-[#404E1D] font-semibold'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#556627]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-stone-200/70 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#556627] text-white font-semibold text-sm shadow hover:bg-[#43521D] transition-colors"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={PRACTICE_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-stone-300 text-stone-800 font-medium text-sm hover:bg-stone-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#556627]" />
              <span>Call Practice: {PRACTICE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
