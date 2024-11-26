import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, price, description, features, highlighted }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`cyber-card ${
        highlighted ? 'border-teal-400 shadow-lg shadow-teal-500/20' : ''
      }`}
    >
      <h3 className="text-2xl font-bold text-teal-400 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-teal-400">{price}</span>
        {price !== 'Custom' && <span className="text-teal-400/70">/month</span>}
      </div>
      <p className="text-teal-400/70 mb-6">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-teal-400" />
            <span className="text-teal-400/90">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`cyber-button w-full mt-8 ${highlighted ? 'bg-teal-500/20' : ''}`}>
        Get Started →
      </button>
    </motion.div>
  );
};

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for trying out our services',
      features: [
        'Up to 100 queries per month',
        'Basic code generation',
        'Community support',
        'Standard response time',
      ],
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For individual developers and creators',
      features: [
        'Unlimited queries',
        'Advanced code generation',
        'Priority support',
        'Faster response time',
        'Custom API access',
      ],
      highlighted: true,
    },
    {
      name: 'Team',
      price: '$99',
      description: 'For teams and growing businesses',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Admin dashboard',
        'Usage analytics',
        'Custom integrations',
      ],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cyber-title text-4xl">Choose Your Plan</h2>
          <p className="text-teal-400/70 text-xl mt-4">
            Start free and scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};