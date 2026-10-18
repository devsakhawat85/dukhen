import React, { useState } from 'react';
import { PageId } from '../types';
import { TEAM_MEMBERS, PRACTICE_INFO } from '../data/practiceData';
import {
  GraduationCap,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Heart,
  ChevronDown,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [expandedBioId, setExpandedBioId] = useState<string | null>(null);

  const specialtiesList = [
    { id: 'all', label: 'All Practitioners' },
    { id: 'gut', label: 'Gut & LEAP Therapy' },
    { id: 'pediatrics', label: 'Pediatric Specialists' },
    { id: 'fertility', label: 'Fertility & Hormones' },
    { id: 'diabetes', label: 'Diabetes & Weight' },
    { id: 'sports', label: 'Sports & Performance' },
  ];

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (selectedSpecialty === 'all') return true;
    if (selectedSpecialty === 'gut')
      return member.specialties.some(
        (s) => s.toLowerCase().includes('gut') || s.toLowerCase().includes('l.e.a.p') || s.toLowerCase().includes('mediator')
      );
    if (selectedSpecialty === 'pediatrics')
      return member.specialties.some((s) => s.toLowerCase().includes('pediatric'));
    if (selectedSpecialty === 'fertility')
      return member.specialties.some((s) => s.toLowerCase().includes('fertility'));
    if (selectedSpecialty === 'diabetes')
      return member.specialties.some(
        (s) => s.toLowerCase().includes('diabetes') || s.toLowerCase().includes('obesity') || s.toLowerCase().includes('weight')
      );
    if (selectedSpecialty === 'sports')
      return member.specialties.some((s) => s.toLowerCase().includes('sports') || s.toLowerCase().includes('performance'));
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedBioId(expandedBioId === id ? null : id);
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-[#24311C] text-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B9C979]">
            <span>Our Clinical Team</span>
            <span>·</span>
            <span>Licensed Healthcare Professionals</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            We Are Dedicated to Improving Lives Through Individualized Care
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            At Duke Nutrition Experts, our practice brings together university faculty, doctorate researchers, hospital pediatric leads, and certified LEAP therapists unified by one principle: true healing happens when nutrition is tailored to your unique biochemistry.
          </p>
        </div>
      </section>

      {/* 2. Practice Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Rigorous Credentials
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every practitioner is a licensed Registered Dietitian Nutritionist (RDN), with advanced certifications in LEAP therapy, diabetes education (CDCES), pediatric nutrition (CSP), or obesity medicine (CSOWM).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Root-Cause Focus
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We never hand out generic one-size-fits-all meal sheets. Our clinicians evaluate cellular mediator release, gut permeability, and metabolic pathways to uncover why your symptoms started.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Compassionate Partnership
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We listen with empathy to your lived experience. You will never be told your symptoms are “in your head” or that you just need to live with chronic pain.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Practitioner Filter & Roster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Meet Our Clinical Team
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Select a clinical focus or browse all 9 practice team members below.
            </p>
          </div>

          {/* Interactive filter controls */}
          <div className="flex flex-wrap gap-2">
            {specialtiesList.map((sp) => (
              <button
                key={sp.id}
                onClick={() => setSelectedSpecialty(sp.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedSpecialty === sp.id
                    ? 'bg-[#556627] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => {
            const isExpanded = expandedBioId === member.id;
            return (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Portrait */}
                  <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-sm text-white text-[11px] font-mono tracking-wide">
                      {member.credentials}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-900">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#556627] mt-0.5">
                        {member.role}
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-stone-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{member.education}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="pt-2 border-t border-stone-100">
                      <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2">
                        Clinical Specialties
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.specialties.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bio Text */}
                    <div className="pt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
                      <p className={isExpanded ? '' : 'line-clamp-4'}>
                        {member.bio}
                      </p>
                      {member.personalNotes && isExpanded && (
                        <p className="mt-2 text-stone-500 italic text-xs pt-2 border-t border-stone-100">
                          {member.personalNotes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(member.id)}
                      className="text-xs font-semibold text-[#556627] hover:text-[#384517] transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Show Less' : 'Read Full Biography'}
                    </button>

                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-stone-800 hover:text-[#556627] transition-colors"
                    >
                      <span>Book with {member.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Co-Founder Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow">
                <img
                  src="/images/team_sarah_duke.jpg"
                  alt="Sarah Duke, RDN, CLT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
                From Our Co-Founder
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                “Your health is not a mystery to be managed with endless pills; it is an intelligent biological system waiting for the right fuel.”
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                When we founded Duke Nutrition Experts in Arizona, our mission was to bridge the gap between cutting-edge immunology and everyday nutrition. We have watched hundreds of patients who had suffered for 10 or 20 years with debilitating migraines, digestive chaos, and fibromyalgia regain their lives in mere weeks once their white blood cell triggers were removed.
              </p>
              <div className="pt-2">
                <div className="font-serif font-bold text-base text-stone-900">Sarah Duke, RDN, CLT</div>
                <div className="text-xs text-[#556627]">Co-Founder, Duke Nutrition Experts, LLC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
