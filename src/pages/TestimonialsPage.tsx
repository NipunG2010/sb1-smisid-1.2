import React from 'react';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/contact/ContactSection';

export function TestimonialsPage() {
  return (
    <div className="pt-16">
      <Testimonials />
      <ContactSection />
    </div>
  );
}