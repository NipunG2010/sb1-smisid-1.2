import type { PricingPlan } from './types';

export const pricingPlans: (PricingPlan & { isPopular?: boolean })[] = [
  {
    name: 'Starter',
    price: 999,
    description: 'Perfect for small businesses getting started with SEO',
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Monthly Performance Reports',
      'Basic Technical SEO Audit',
      'Local SEO Setup',
      'Up to 20 Target Keywords'
    ]
  },
  {
    name: 'Professional',
    price: 1999,
    description: 'Ideal for growing businesses seeking comprehensive SEO',
    features: [
      'Everything in Starter, plus:',
      'Advanced Technical SEO',
      'Content Strategy & Creation',
      'Link Building Campaign',
      'Competitor Analysis',
      'Up to 50 Target Keywords',
      'Priority Support'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 3999,
    description: 'Full-scale solution for established businesses',
    features: [
      'Everything in Professional, plus:',
      'Custom SEO Strategy',
      'International SEO',
      'Advanced Analytics & Reporting',
      'Dedicated Account Manager',
      'Unlimited Target Keywords',
      '24/7 Priority Support'
    ]
  }
];