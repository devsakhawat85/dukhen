export type PageId =
  | 'home'
  | 'services'
  | 'about'
  | 'testimonials'
  | 'guide'
  | 'pricing'
  | 'contact'
  | 'legal';

export type LegalTab =
  | 'privacy'
  | 'terms'
  | 'refunds'
  | 'digital-products'
  | 'voucher-terms'
  | 'code-of-conduct';

export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  role: string;
  photoUrl: string;
  fallbackInitials: string;
  location: string;
  education: string;
  specialties: string[];
  bio: string;
  personalNotes?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  condition: string;
  category: 'digestive' | 'migraine' | 'fibromyalgia' | 'weight' | 'general';
  quote: string;
  timeframe?: string;
  keyOutcome: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  tag?: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

export interface ClinicalService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mechanism: string;
  image?: string;
  features: string[];
}
