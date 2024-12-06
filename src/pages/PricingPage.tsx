import React from 'react';
import { PricingPlans } from '../components/pricing/PricingPlans';
import { ContactSection } from '../components/contact/ContactSection';

export function PricingPage() {
  return (
    <div className="pt-16">
      <PricingPlans />
      <ContactSection />
    </div>
  );
}