import React, { useState } from 'react';
import { PageId } from '../types';
import {
  BookOpen,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
  AlertCircle,
  Apple,
  Clock,
} from 'lucide-react';

interface GuidePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloadUnlocked, setDownloadUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and email address to access the guide.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setDownloadUnlocked(true);
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-[#24311C] text-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B9C979]">
            <span>Complimentary Clinical Resource</span>
            <span>·</span>
            <span>By Duke Nutrition Experts</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            The Chronic Inflammation & Gut Restoration Guide
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Understand how white blood cell mediator release, leaky gut permeability, and food sensitivities drive chronic pain—and discover how to start calming your immune system today.
          </p>
        </div>
      </section>

      {/* 2. Guide Preview & Download Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Guide Cover Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200/90 aspect-[4/3] bg-stone-100 relative group">
              <img
                src="/images/guide_cover.jpg"
                alt="Anti-Inflammatory Food and Health Guide"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs uppercase tracking-widest text-[#B9C979] font-mono">
                    Official Guide & Protocol
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    Calming Chronic Inflammation Through Nutrition
                  </h3>
                  <p className="text-xs text-stone-300">
                    Duke Nutrition Experts Clinical Whitepaper & Action Plan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Capture Card */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-md space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
                  Free Digital Download
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  Download Your Complete Clinical Guide & Meal Framework
                </h2>
                <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                  Enter your details below for instant access to the digital PDF guide, grocery framework, and cellular inflammation primer.
                </p>
              </div>

              {downloadUnlocked ? (
                <div className="p-6 rounded-2xl bg-[#EAEFD5] border border-[#CBD99F] space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#556627]" />
                    <h3 className="font-serif text-lg font-bold text-[#2C381B]">
                      Guide Successfully Unlocked!
                    </h3>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Thank you, <strong>{name}</strong>! We have sent a copy to <strong>{email}</strong>. You can also download the complete guide immediately below:
                  </p>

                  <div className="pt-2">
                    <a
                      href="#download"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Your guide has started downloading! Check your browser downloads.');
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#556627] text-white font-semibold text-sm hover:bg-[#43521D] shadow transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF Guide (Instant Access)</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
                      />
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-500">
                    We respect your privacy. We will never sell, rent, or share your email address. You may unsubscribe at any time.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#556627] text-white font-semibold text-sm hover:bg-[#43521D] shadow transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Get Free Instant Access</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Pillars Included in the Guide */}
      <section className="bg-white py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              Inside The Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              The 5 Pillars of Reducing Biological Inflammatory Load
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Written by our certified clinical dietitians to give you immediate, actionable clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Identifying Hidden Triggers',
                desc: 'Why "healthy" superfoods like kale, ginger, or salmon might be triggering severe white blood cell mediator reactions in your unique system.',
              },
              {
                num: '02',
                title: 'Closing the Leaky Gut Screen',
                desc: 'How the intestinal epithelial tight junctions loosen, allowing partially digested proteins to flood your bloodstream—and how to reseal them.',
              },
              {
                num: '03',
                title: 'Intracellular Nutrient Synthesis',
                desc: 'Why serum blood tests miss cellular deficiencies, and which functional micronutrients are required to fuel tissue repair.',
              },
              {
                num: '04',
                title: 'Systematic Food Rotation',
                desc: 'How to structure meals so you do not develop new food sensitivities while your digestive tract heals.',
              },
              {
                num: '05',
                title: 'The 24-Hour Expansion Protocol',
                desc: 'The exact step-by-step scientific method for testing one new food every 24 hours without triggering a symptom setback.',
              },
              {
                num: '06',
                title: 'Dining Out & Travel Guidelines',
                desc: 'Practical strategies for eating with family, dining at restaurants, and maintaining social confidence while on an anti-inflammatory protocol.',
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/80 space-y-3 hover:border-[#556627]/40 transition-colors"
              >
                <div className="font-mono text-xl font-bold text-[#556627]">
                  {pillar.num}
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#23301B] text-white p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Want Expert One-on-One Guidance Tailored to Your Body?
          </h3>
          <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
            Guides provide foundational knowledge, but true resolution requires individualized MRT testing. Schedule an initial consultation with one of our registered dietitians.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-lg bg-[#B9C979] text-[#1E2819] font-bold text-sm hover:bg-[#c6d787] transition-colors cursor-pointer"
            >
              Book Clinical Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
