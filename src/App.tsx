/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, LegalTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { GuidePage } from './pages/GuidePage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [initialServiceInModal, setInitialServiceInModal] = useState('');

  // Synchronize with URL hash for browser history & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'services' || hash === 'lab-tests') {
        setCurrentPage('services');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'testimonials') {
        setCurrentPage('testimonials');
      } else if (hash === 'guide' || hash === 'chronicinflammationguide') {
        setCurrentPage('guide');
      } else if (hash === 'pricing' || hash === 'plans-pricing') {
        setCurrentPage('pricing');
      } else if (hash === 'contact' || hash === 'contact-us') {
        setCurrentPage('contact');
      } else if (hash === 'privacy') {
        setCurrentPage('legal');
        setLegalTab('privacy');
      } else if (hash === 'terms' || hash === 'terms-and-conditions') {
        setCurrentPage('legal');
        setLegalTab('terms');
      } else if (hash === 'refunds' || hash === 'blank') {
        setCurrentPage('legal');
        setLegalTab('refunds');
      } else if (hash === 'code-of-conduct') {
        setCurrentPage('legal');
        setLegalTab('code-of-conduct');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = '#/' + page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegalWithTab = (tab: LegalTab) => {
    setCurrentPage('legal');
    setLegalTab(tab);
    window.location.hash = '#/' + tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (service = '') => {
    setInitialServiceInModal(service);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-[#B9C979]/40">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation('digestive')}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'guide' && (
          <GuidePage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenLegalTab={openLegalWithTab}
          />
        )}
        {currentPage === 'legal' && (
          <LegalPage
            currentTab={legalTab}
            onTabChange={setLegalTab}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialService={initialServiceInModal}
      />

      {/* Bottom Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenLegalTab={openLegalWithTab}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
