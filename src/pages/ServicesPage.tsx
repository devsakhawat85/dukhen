import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINICAL_PROGRAMS } from '../data/practiceData';
import {
  FlaskConical,
  Activity,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Calendar,
  AlertCircle,
  FileCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-[#24311C] text-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B9C979]">
            <span>Laboratory Testing & Functional Care</span>
            <span>·</span>
            <span>Mediator Release Technology</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            Targeted Laboratory Testing & Clinical Nutrition Protocols
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Eliminating chronic inflammation begins with precision diagnostics. We measure cellular immune reactions to 170 foods and intracellular micronutrient deficiencies to build your customized path to healing.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-lg bg-[#B9C979] text-[#1E2819] font-bold text-sm hover:bg-[#c6d787] transition-colors cursor-pointer"
            >
              Order Lab Kit & Consultation
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3 rounded-lg border border-stone-500 text-white font-medium text-sm hover:bg-stone-800 transition-colors"
            >
              View Plans & Inclusions
            </button>
          </div>
        </div>
      </section>

      {/* 2. SYMPTOMS & THE ROOT CAUSE: INFLAMMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              Clinical Assessment
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Symptoms Affect Every Aspect of Your Daily Life
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              Chances are if you have found yourself on this website, you know all too well that chronic symptoms affect every area of your life. They can cause missed work which leads to financial hardship. If you need to rest frequently, it can lead to less time with family, which can be difficult for everyone to understand. Spouses, children, or friends may forget that you have a condition that affects you every single day and not understand why you can’t get out and participate in activities.
            </p>

            <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-sm space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                The Common Denominator
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Whether it is frequent or urgent diarrhea, joint pain, headaches/migraines, weight gain, Irritable Bowel Syndrome (IBS), brain fog, fibromyalgia, fatigue/low energy, or psoriasis/eczema, these all have one fundamental thing in common: <strong className="text-stone-900">inflammation is the root cause.</strong>
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 pt-2 border-t border-stone-100">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#556627]" />
                  <span><strong>Fibromyalgia:</strong> Pain receptor sensitization</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#556627]" />
                  <span><strong>Rheumatoid:</strong> Tissue damage in joints</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#556627]" />
                  <span><strong>IBS/Digestive:</strong> Smooth muscle spasms</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#556627]" />
                  <span><strong>Migraines:</strong> Vascular & nerve irritation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-stone-200/80 bg-white p-4 shadow-md">
              <img
                src="/images/graphic_symptoms_diagram.png"
                alt="Inflammation Diagram: White Blood Cells and Mediators"
                className="w-full h-auto object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-[11px] text-stone-500 text-center mt-3">
                Original Practice Diagram: Biological pathway of immune mediator release triggering systemic tissue symptoms.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHAT IS INFLAMMATION & LEAKY GUT */}
      <section className="bg-white py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              Physiological Mechanism
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              The Science of Intestinal Permeability (“Leaky Gut”)
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Inflammation is the direct result of our White Blood Cells (WBCs) fighting an invader in the body. While invaders can be bacteria or viruses, food can also become an invader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                It all starts in the digestive tract. If the gut lining becomes permeable—which means it develops microscopic holes like a screen—foods can slip through the lining into the bloodstream before they are fully digested. This clinical condition is known as <strong>leaky gut</strong>.
              </p>
              <p>
                Once these partially digested foods end up in the bloodstream, circulating white blood cells identify them as foreign threats and attack. In the process, the white blood cells degranulate and release chemical substances called <strong>mediators</strong>—including cytokines, leukotrienes, and prostaglandins.
              </p>
              <p>
                These mediators cause inflammation in different parts of your body. What makes this challenging is that <strong>different foods trigger mediator release in different individuals</strong>. Even though broccoli, garlic, or salmon is healthy for one person, it may be the exact food your unique immune system sees as an enemy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-stone-200 bg-[#FAF9F5] p-4 text-center">
                <img
                  src="/images/graphic_leaky_gut.png"
                  alt="Leaky Gut Permeability Illustration"
                  className="w-full max-h-64 object-contain mx-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-xs text-stone-500 block mt-2">
                  Intestinal Epithelial Screen & Mediator Escape Route
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION: MRT 170 FOODS & WHY GENERIC DIETS FAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-md space-y-4">
              <img
                src="/images/graphic_mrt_testing.png"
                alt="Mediator Release Testing (MRT) Sample Report"
                className="w-full h-auto object-contain rounded-lg border border-stone-100"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
                <strong className="text-stone-900 block font-semibold">Mediator Release Quantification:</strong>
                <div>🟢 <strong className="text-emerald-700">Green:</strong> Low-Reactive / Safe Foods (Foundation)</div>
                <div>🟡 <strong className="text-amber-700">Yellow:</strong> Moderately Reactive (Cautionary)</div>
                <div>🔴 <strong className="text-rose-700">Red:</strong> Highly Reactive (Strictly Excluded)</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              The Diagnostic Solution
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Mediator Release Testing (MRT) & Cellular Analysis
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              All food-induced inflammatory reactions involve a mediator release from the white blood cells. The patented test we use measures how much inflammation is generated when these mediators are released. It tests <strong>170 different foods and food chemicals</strong>.
            </p>

            <div className="p-5 rounded-xl bg-[#EAEFD5]/50 border border-[#CBD99F] space-y-2">
              <h3 className="font-serif text-base font-bold text-[#303E15]">
                Why Simply Avoiding “Yellows and Reds” is Not Enough
              </h3>
              <p className="text-xs sm:text-sm text-[#3E4F1B] leading-relaxed">
                The MRT test measures 170 items, but grocery stores stock over 40,000 foods and additives! Just because you eliminate tested red items does not mean untested foods you eat are non-reactive.
              </p>
              <p className="text-xs sm:text-sm text-[#3E4F1B] leading-relaxed">
                That is why our LEAP therapists construct your initial plan using <strong>only your lowest-reactive green foods</strong>. When you eat exclusively non-reactive foods, your immune system stops firing, white blood cells quiet down, and your gut epithelial barrier finally has the opportunity to close and heal.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTRACELLULAR MICRONUTRIENT TESTING */}
      <section className="bg-white py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
                Cellular Repair
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Testing for Intracellular Micronutrient Deficiencies
              </h2>

              <p className="text-stone-700 text-base leading-relaxed">
                To ensure your gut lining can heal properly and quickly, we test for micronutrient deficiencies. Virtually all metabolic and developmental processes in the body require micronutrients—including rebuilding your intestinal lining and restoring healthy enzyme production.
              </p>

              <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
                <p>
                  Standard blood tests only measure serum levels—what is floating in liquid blood outside the cell. Our test measures the <strong>functional capability of micronutrients inside your white blood cells</strong> over a 4-to-6 month timeline.
                </p>
                <p>
                  Armed with this individualized cellular information, we provide your body with the exact biochemical building blocks it requires to repair mucosal tissues and eliminate chronic symptoms permanently.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-lg bg-[#556627] text-white font-semibold text-sm hover:bg-[#43521D] transition-colors"
                >
                  Book Cellular Testing Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-stone-200 bg-[#FAF9F5] p-6 text-center space-y-3 shadow-sm">
                <img
                  src="/images/graphic_micronutrient.png"
                  alt="Micronutrient Cellular Functional Graph"
                  className="w-full max-h-56 object-contain mx-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h4 className="font-serif text-sm font-bold text-stone-900">
                  Functional Intracellular Evaluation
                </h4>
                <p className="text-xs text-stone-500">
                  Evaluating vitamins, minerals, amino acids, and antioxidant status within immune cells.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PHASED 24-HOUR REINTRODUCTION PROTOCOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
            Expansion & Empowerment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            The 24-Hour Systematic Reintroduction Protocol
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Elimination is only phase one. Our true clinical goal is expanding your diet as broadly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-stone-200/90 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#EAEFD5] text-[#556627] font-bold text-xs flex items-center justify-center">
              A
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Symptom Quiescence
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Once you have followed your lowest-reactive green foods and your gut barrier closes, baseline symptoms diminish. When the immune system is quiet, any new adverse reaction becomes immediately recognizable.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-stone-200/90 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#EAEFD5] text-[#556627] font-bold text-xs flex items-center justify-center">
              B
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              1 Tested Food Every 24 Hours
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              You introduce one tested food every 24 hours. You eat it once and monitor for reactions. If no symptoms arise, it is cataloged as a safe food. If symptoms occur, you know precisely what triggered it.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-stone-200/90 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#EAEFD5] text-[#556627] font-bold text-xs flex items-center justify-center">
              C
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Lifelong Dietary Autonomy
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Next, we guide you through introducing untested supermarket foods. We educate you on how to systematically test and safely expand your meals on your own for the rest of your life.
            </p>
          </div>
        </div>
      </section>

      {/* 7. TYPICAL RESULTS & CLINICAL TIMELINE */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B9C979] font-bold">
              Expectations & Outcomes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Typical Clinical Milestones
            </h2>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Because MRT testing removes the exact immunological triggers, improvement happens systematically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-stone-800 border border-stone-700 space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#B9C979] font-semibold">Days 7 – 10</div>
              <h3 className="font-serif text-xl font-bold text-white">Noticeable Symptom Drop</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Clients typically report a significant reduction in bowel frequency, headache intensity, and morning stiffness within the first 7 to 10 days of low-reactive eating.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-800 border border-stone-700 space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#B9C979] font-semibold">Week 6</div>
              <h3 className="font-serif text-xl font-bold text-white">Major Symptom Resolution</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                At six weeks, most clients report that their chronic primary symptoms are resolved or at baseline. Reintroduction of safe foods is underway.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-800 border border-stone-700 space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#B9C979] font-semibold">1 Year & Beyond</div>
              <h3 className="font-serif text-xl font-bold text-white">Permanent Autonomy</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                We work with you throughout the full year to measure progress and transition you into a lifelong pattern. You retain lifetime access to our patient community forum.
              </p>
            </div>
          </div>

          <div className="text-xs text-stone-500 border-t border-stone-800 pt-6">
            For specific cancellation and specimen refund terms, please review our{' '}
            <button
              onClick={() => onNavigate('legal')}
              className="text-[#B9C979] underline underline-offset-4"
            >
              Terms of Purchase and Refund Policy
            </button>
            .
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Frequently Asked Questions About Lab Tests
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How does MRT testing differ from standard IgG or scratch allergy testing?',
              a: 'Scratch tests only measure IgE-mediated immediate histamine allergies (like peanut anaphylaxis). IgG antibody tests only quantify whether you have been exposed to a food, not whether that food caused an inflammatory reaction. MRT is a functional blood test that measures the actual volumetric change and mediator release (cytokines, leukotrienes, prostaglandins) from white blood cells, delivering superior clinical accuracy.',
            },
            {
              q: 'Can I do this testing if I live outside Arizona?',
              a: 'Yes! We ship blood draw collection kits nationwide with pre-labeled overnight courier delivery. You complete a routine blood draw at a local lab (such as Any Lab Test Now or a mobile phlebotomist), and our registered dietitians conduct comprehensive clinical consultations via secure HIPAA-compliant telehealth.',
            },
            {
              q: 'Will my health insurance cover this testing?',
              a: 'Laboratory testing and nutrition consultations may be reimbursable depending upon your insurance carrier, medical diagnosis, and deductible. We provide itemized superbills with medical CPT and ICD-10 diagnostic codes for HSA/FSA reimbursement or submission to commercial insurers. Please refer to our Terms of Purchase and Refund Policy for detailed insurance guidelines.',
            },
            {
              q: 'How quickly will I receive my results?',
              a: 'Once your blood specimen arrives at the laboratory, results are completed within 7 to 10 business days. Your dietitian will review the comprehensive 60+ page report with you during your initial 90-minute treatment planning session.',
            },
          ].map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-stone-200/80 bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base text-stone-900 hover:text-[#556627] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#556627] shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#EAEFD5] border border-[#CBD99F] p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C381B]">
            Ready to Discover What Foods Your Body Is Fighting?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base max-w-xl mx-auto">
            Book a clinical intake session with a registered dietitian and receive your comprehensive testing kit.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-lg bg-[#556627] text-white font-semibold text-sm hover:bg-[#43521D] shadow transition-colors cursor-pointer"
            >
              Order Lab Kit & Schedule Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
