import React from 'react';
import { Features } from '../components/Features';
import { ContactSection } from '../components/contact/ContactSection';

export function FeaturesPage() {
  return (
    <div className="pt-16">
      <Features />
      <ContactSection />
    </div>
  );
}