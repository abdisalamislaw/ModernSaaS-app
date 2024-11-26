import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { SocialProof } from './SocialProof';
import { PricingSection } from './PricingSection';
import { FinalCTA } from './FinalCTA';

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <SocialProof />
      <PricingSection />
      <FinalCTA />
    </div>
  );
};