import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
import type { PricingPlan } from './types';

interface PricingCardProps extends PricingPlan {
  isPopular?: boolean;
}

export function PricingCard({ 
  name, 
  price, 
  description, 
  features,
  isPopular = false 
}: PricingCardProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`
        relative overflow-hidden rounded-2xl p-8
        ${isPopular ? 'bg-secondary text-primary' : 'bg-white/5 text-white'}
      `}
    >
      {isPopular && (
        <div className="absolute top-6 right-6">
          <span className="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-sm opacity-80">/month</span>
      </div>
      <p className="text-sm mb-6 opacity-80">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={scrollToContact}
        className={`
          w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2
          transition-all duration-300
          ${isPopular 
            ? 'bg-primary text-secondary hover:bg-primary/90' 
            : 'bg-secondary text-primary hover:bg-opacity-90'}
        `}
      >
        Get Started <Calendar className="w-5 h-5" />
      </button>
    </motion.div>
  );
}