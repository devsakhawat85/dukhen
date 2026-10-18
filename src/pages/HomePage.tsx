import React, { useState } from 'react';
import { PageId } from '../types';
import { PRACTICE_INFO, TEAM_MEMBERS, TESTIMONIALS, CONDITIONS_LIST } from '../data/practiceData';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Phone,
  FileCheck2,
  HeartHandshake,
  Layers,
  FlaskConical,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS_LIST[0].id);

  const activeConditionData =
    CONDITIONS_LIST.find((c) => c.id === selectedCondition) || CONDITIONS_LIST[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#556627]">
                <span>Evidence-Aware Clinical Practice</span>
                <span aria-hidden="true">·</span>
                <span>Tucson & Oro Valley, AZ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.12]">
                Your Body is an amazing pharmacy.{' '}
                <span className="text-[#556627] block sm:inline">
                  Let us show you how to use it.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-stone-700 font-medium max-w-2xl leading-relaxed">
                Don’t waste another day with pain & discomfort.
              </p>

              <p className="text-stone-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                Our registered dietitians and certified LEAP therapists combine patented food sensitivity
                mediator testing (MRT) and cellular micronutrient analysis to stop chronic inflammation at its root.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#556627] text-white font-semibold text-sm hover:bg-[#43521D] shadow-md hover:shadow transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-stone-300 bg-white text-stone-800 font-semibold text-sm hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span>How Our Testing Works</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-stone-200/90 grid grid-cols-3 gap-4 text-stone-800">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Testing</div>
                  <div className="text-sm font-bold text-stone-900">170 Foods & Chem</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Results</div>
                  <div className="text-sm font-bold text-stone-900">7–10 Days Noticeable</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Specialists</div>
                  <div className="text-sm font-bold text-stone-900">Licensed RDN / CLT</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Artwork */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 aspect-[4/5] bg-stone-100">
                <img
                  src="/images/hero_clinic.jpg"
                  alt="Duke Nutrition Experts Consultation Room"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to team portrait if needed
                    e.currentTarget.src = '/images/team_sarah_duke.jpg';
                  }}
                />
                
                {/* Visual Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center shrink-0">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">
                        Individualized Functional Medicine
                      </h4>
                      <p className="text-xs text-stone-600 leading-tight mt-0.5">
                        Moving beyond generic dietary advice with cellular blood testing and personal reintroduction therapy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KEY BENEFITS */}
      <section className="bg-white py-16 sm:py-20 border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              Why Patients Choose Us
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Measurable Relief Designed for Lasting Vitality
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We look beyond symptom suppression to understand how your immune system and gastrointestinal tract interact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Long-Term Solutions',
                icon: ShieldCheck,
                desc: 'Our protocols are engineered to produce sustainable, lifelong health habits rather than quick-fix diets that rebound.',
              },
              {
                title: 'Effective Treatment',
                icon: CheckCircle,
                desc: 'Tailored precisely to your unique biochemistry. By eliminating only your specific reactive items, the immune system calms.',
              },
              {
                title: 'Measurable Results',
                icon: Activity,
                desc: 'We track your progress systematically with quantified symptom scores at regular intervals to ensure optimal recovery.',
              },
              {
                title: 'Safe & Non-Invasive',
                icon: HeartHandshake,
                desc: 'All nutritional strategies are safe, wholesome, and food-first, preventing unnecessary drug side effects or nutritional voids.',
              },
              {
                title: 'Increased Performance',
                icon: Sparkles,
                desc: 'Athletes and everyday professionals experience heightened mental clarity, quicker recovery times, and stable daily stamina.',
              },
              {
                title: 'Improved Quality of Life',
                icon: FileCheck2,
                desc: 'Break free from constant anxiety over bathroom urgency, migraine episodes, or unexplained chronic body stiffness.',
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#FAF9F5] border border-stone-200/80 hover:border-[#556627]/40 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAEFD5] text-[#556627] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    {benefit.title}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR FUNCTIONAL APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              Our Functional Approach
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Why Healthy Foods Might Be Triggering Your Symptoms
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              Our unique functional approach helps everyday people break free from pain and discomfort by removing inflammation to allow the body’s natural systems to heal itself and provide long-term solutions for ongoing health and performance problems.
            </p>

            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                Most people understand that processed junk foods can cause distress, but healthy foods like broccoli, chicken, garlic, or almonds can also be an invader to your unique immune system.
              </p>
              <p>
                When gut lining permeability occurs (commonly known as <em>leaky gut</em>), partially digested food particles slip through microscopic screen-like gaps into the bloodstream. White blood cells attack these particles and release inflammatory <strong>mediators</strong> (cytokines, leukotrienes, and prostaglandins) that circulate and produce migraines, joint pain, diarrhea, or exhaustion.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 text-[#556627] font-semibold text-sm hover:text-[#384517] transition-colors"
              >
                <span>Read in-depth explanation of Mediator Release Testing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-stone-200/80 shadow-md space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                How Our Biological Protocol Works
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EAEFD5] text-[#556627] font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Quantify 170 Reactions</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      MRT testing scores how much volume change and mediator release occurs for 170 items—categorized strictly into Low-Reactive (Green), Moderate (Yellow), and High (Red).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EAEFD5] text-[#556627] font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Build on Lowest-Reactive Greens</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Rather than just removing red foods, we construct an initial menu using only your absolute safest lowest-reactive green foods so your immune system can rest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EAEFD5] text-[#556627] font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Gut Barrier Closes & Heals</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Without continuous white blood cell attacks, the intestinal epithelial lining closes its gaps. Cellular micronutrient repair restores normal enzyme and barrier defense.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EAEFD5] text-[#556627] font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Structured 24-Hour Food Expansion</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      We guide you through methodical 24-hour food reintroductions so you can safely diversify your diet for the rest of your life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-lg bg-[#556627] text-white text-sm font-semibold hover:bg-[#43521D] transition-colors"
                >
                  Schedule Your Testing Intake
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHAT YOU CAN EXPECT (4-STEP PROCESS) */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B9C979] font-bold">
              What You Can Expect
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              A Four-Step Clinical Journey
            </h2>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              We guide you from initial diagnostic clarity to life-long independence with compassionate support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                step: 'Thorough Evaluation',
                desc: 'We test everything, from food sensitivities to cellular nutrition deficiencies, to know exactly what is going on and place you on the most effective program for your concerns.',
              },
              {
                num: '02',
                step: 'Effective Treatment',
                desc: 'Whether it is frequent diarrhea, joint pain, migraines, weight gain, IBS, brain fog, fibromyalgia, or eczema, we implement targeted food protocols matched to your lab data.',
              },
              {
                num: '03',
                step: 'Measurable Results',
                desc: 'We track and measure your results at regular intervals to study your biological progress and ensure your care is efficiently and effectively delivering optimal symptom relief.',
              },
              {
                num: '04',
                step: 'Long-Term Solutions',
                desc: 'Our methods produce sustainable results that improve your quality of life. After one year of care, you have all tools needed to maintain vitality with lifetime community access.',
              },
            ].map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-stone-800/80 border border-stone-700 space-y-3 relative group hover:border-[#B9C979]/50 transition-colors"
              >
                <div className="font-mono text-2xl font-bold text-[#B9C979]">
                  {st.num}
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {st.step}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-[#B9C979] hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              <span>Explore full laboratory testing protocols and timelines</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CONDITIONS & CONCERNS INTERACTIVE EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
            Conditions We Address
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Targeting the Biological Roots of Chronic Ailments
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Inflammation manifests differently across individuals. Select a symptom category to understand the underlying physiological mechanism.
          </p>
        </div>

        {/* Tab Buttons (Interactive Functional Controls) */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-stone-200">
          {CONDITIONS_LIST.map((c) => {
            const isSelected = selectedCondition === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCondition(c.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#556627] text-white shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                {c.title}
              </button>
            );
          })}
        </div>

        {/* Selected Condition Detail Card */}
        <div className="mt-6 p-8 rounded-2xl bg-white border border-stone-200/80 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {activeConditionData.title}
            </h3>
            
            <div className="space-y-3 text-sm text-stone-700">
              <div>
                <strong className="text-stone-900 block font-semibold mb-1">Common Complaints:</strong>
                <p className="text-stone-600 leading-relaxed">{activeConditionData.symptoms}</p>
              </div>

              <div>
                <strong className="text-stone-900 block font-semibold mb-1">Underlying Mechanism:</strong>
                <p className="text-stone-600 leading-relaxed">{activeConditionData.mechanism}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#556627] text-white font-semibold text-xs hover:bg-[#43521D] transition-colors"
              >
                <span>Consult on this Condition</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('testimonials')}
                className="text-xs font-semibold text-stone-700 hover:text-stone-950 underline underline-offset-4"
              >
                Read Client Experiences
              </button>
            </div>
          </div>

          <div className="md:col-span-4 p-6 rounded-xl bg-[#FAF9F5] border border-stone-200 text-xs space-y-3">
            <div className="font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
              Clinical Care Highlights
            </div>
            <ul className="space-y-2 text-stone-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#556627]" />
                <span>Patented 170-Item Blood Panel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#556627]" />
                <span>Nutritional WBC Intracellular Testing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#556627]" />
                <span>Personalized LEAP Dietary Protocol</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#556627]" />
                <span>Weekly Accountability & Meal Support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. AUTHENTIC CLIENT TESTIMONIALS */}
      <section className="bg-white py-20 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
                Client Testimonials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
                What Our Clients Say
              </h2>
            </div>
            <button
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#556627] hover:text-[#3e4b1c] transition-colors"
            >
              <span>View All Verified Client Stories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-xl bg-[#FAF9F5] border border-stone-200/80 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#556627]">
                    {t.condition}
                  </div>
                  <p className="text-sm text-stone-700 italic leading-relaxed">
                    “{t.quote.slice(0, 220)}...”
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/70">
                  <div className="font-bold text-stone-900 text-sm">{t.clientName}</div>
                  <div className="text-xs text-stone-500 mt-0.5">{t.timeframe}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Experience Note */}
          <p className="text-center text-xs text-stone-500 mt-8 max-w-2xl mx-auto">
            These statements represent individual clinical experiences. Outcomes depend upon specific biological sensitivities, personal adherence, and clinical evaluation.
          </p>
        </div>
      </section>

      {/* 7. MEET THE EXPERTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#556627] font-bold">
              Our Practitioners
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
              Meet the Duke Nutrition Team
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Led by co-founder Sarah Duke, our multidisciplinary team of licensed registered dietitians and certified LEAP therapists hold advanced graduate degrees across nutritional biochemistry, pediatric care, diabetes education, and sports nutrition.
            </p>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#556627] hover:text-[#384517] transition-colors"
          >
            <span>View All 9 Practitioner Biographies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col"
            >
              <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to stylized block
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-medium">Click to read full background</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#556627]">
                    {member.credentials}
                  </div>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {member.role}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100">
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-xs font-semibold text-stone-700 hover:text-stone-950 flex items-center justify-between w-full"
                  >
                    <span>Read Profile</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CONVERSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#23301B] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B9C979] font-bold">
              Take the Next Step
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Begin Your Journey to a Calmer, Healthier Digestive and Immune System.
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Whether you are suffering from chronic diarrhea, migraines, fibromyalgia, or fatigue, you don’t have to live with perpetual discomfort. Call our clinic or submit an inquiry to speak directly with our team.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-xl bg-[#B9C979] text-[#1E2819] font-bold text-sm sm:text-base hover:bg-[#c6d787] shadow-lg transition-colors cursor-pointer text-center"
              >
                Schedule Initial Consultation
              </button>

              <a
                href={PRACTICE_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-stone-600 text-stone-100 hover:text-white hover:bg-stone-800/80 transition-colors text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#B9C979]" />
                <span>Call Practice: {PRACTICE_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-stone-400">
              Monday – Friday 8:00 AM – 5:00 PM (MST) · Telehealth & In-Person Arizona Care
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
