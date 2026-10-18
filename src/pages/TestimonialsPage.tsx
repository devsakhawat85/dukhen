import React, { useState } from 'react';
import { PageId } from '../types';
import { TESTIMONIALS } from '../data/practiceData';
import { Quote, Search, CheckCircle2, ArrowRight } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'digestive', label: 'Digestive & Gut Health' },
    { id: 'fibromyalgia', label: 'Fibromyalgia & Chronic Pain' },
    { id: 'migraine', label: 'Migraines & Headaches' },
    { id: 'weight', label: 'Weight & Energy' },
  ];

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    const matchesCategory =
      selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      t.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-[#24311C] text-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B9C979]">
            <span>Patient Experiences</span>
            <span>·</span>
            <span>Verified Case Testimonials</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            Real Stories of Restored Health and Lasting Vitality
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Read complete, unfiltered testimonials from clients who suffered from severe migraines, debilitating fibromyalgia, post-radiation GI damage, and lifelong eczema before discovering their individual food sensitivities with Duke Nutrition Experts.
          </p>
        </div>
      </section>

      {/* 2. Filters & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm">
          
          {/* Category Tabs (Buttons) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#556627] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search symptoms or words..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-stone-200 bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#556627]/30"
            />
          </div>
        </div>
      </section>

      {/* 3. Testimonial Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTestimonials.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-stone-200 text-stone-500 text-sm">
            No testimonials match your filter criteria. Try clearing your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((item) => (
              <article
                key={item.id}
                className="p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#556627]">
                        {item.condition}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-stone-900">
                        {item.clientName}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EAEFD5] text-[#556627] flex items-center justify-center shrink-0">
                      <Quote className="w-5 h-5 opacity-80" />
                    </div>
                  </div>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#556627]" />
                    <span>Key Outcome: {item.keyOutcome}</span>
                  </div>
                  {item.timeframe && (
                    <div className="text-xs text-stone-500 pl-6">
                      Reported Timeline: {item.timeframe}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 4. Healthcare Trust Disclosure */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500 leading-relaxed space-y-2">
        <p>
          <strong>Healthcare Disclaimer:</strong> These testimonials are authentic statements provided directly by actual patients of Duke Nutrition Experts. Individual results vary based on baseline health, underlying physiological pathology, and adherence to dietary reintroductions. Duke Nutrition Experts does not claim to cure medical diseases.
        </p>
      </section>

      {/* 5. Consultation Prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#EAEFD5] border border-[#CBD99F] p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A371B]">
            Are You Ready to Write Your Own Success Story?
          </h2>
          <p className="text-stone-700 text-sm max-w-xl mx-auto">
            Schedule a thorough evaluation with our clinical team and discover the foods your body can process without inflammation.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-lg bg-[#556627] text-white font-semibold text-sm hover:bg-[#43521D] shadow transition-colors cursor-pointer"
            >
              Book Your Initial Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
