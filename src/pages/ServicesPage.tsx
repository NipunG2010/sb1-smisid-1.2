import React from 'react';
import { Services } from '../components/services/Services';
import { ContactSection } from '../components/contact/ContactSection';

export function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
      <ContactSection />
    </div>
  );
}