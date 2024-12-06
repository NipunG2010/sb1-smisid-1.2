import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  const headerClasses = `
    fixed top-0 w-full z-50 transition-all duration-300
    ${isScrolled ? 'bg-primary/80 header-blur shadow-lg' : 'bg-primary'}
  `;

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonials', label: 'Testimonials' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-secondary">InnovateX</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={scrollToContact}
              className="bg-secondary text-primary px-4 py-2 rounded-lg font-semibold 
                hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              Book Call <Calendar className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={scrollToContact}
              className="w-full bg-secondary text-primary px-4 py-2 rounded-lg 
                font-semibold hover:bg-opacity-90 transition-all flex items-center 
                gap-2 justify-center"
            >
              Book Call <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}