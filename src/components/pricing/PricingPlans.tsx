import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from './data';
import { PricingCard } from './PricingCard';

export function PricingPlans() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-secondary">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white mb-4">All plans include:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {['24/7 Support', 'Analytics Dashboard', 'Monthly Reports', 'ROI Tracking'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <Check className="w-5 h-5 text-secondary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}