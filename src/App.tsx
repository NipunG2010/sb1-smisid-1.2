import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { UrgencyBanner } from './components/UrgencyBanner';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/problems/ProblemSection';
import { ProposalSection } from './components/proposal/ProposalSection';
import { ValueProposition } from './components/proposal/ValueProposition';
import { Journey } from './components/journey/Journey';
import { CTASection } from './components/CTASection';
import { Footer } from './components/footer/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ProposalSection />
      <ValueProposition />
      <Journey />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <UrgencyBanner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;