import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Check } from 'lucide-react';

export const SubscriptionDetails: React.FC = () => {
  const currentPlan = {
    name: 'Pro',
    price: '$29',
    period: 'month',
    features: [
      'Unlimited queries',
      'Advanced code generation',
      'Priority support',
      'Custom API access',
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="cyber-card"
    >
      <h2 className="text-xl font-bold text-teal-400 mb-6">Subscription</h2>

      <div className="flex items-start gap-8">
        <div className="flex-1">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-teal-400 mb-2">
              <Shield size={20} />
              <span className="font-semibold">Current Plan: {currentPlan.name}</span>
            </div>
            <div className="text-3xl font-bold text-teal-400 mb-2">
              {currentPlan.price}
              <span className="text-lg text-teal-400/70">/{currentPlan.period}</span>
            </div>
            <div className="text-teal-400/70">Next billing date: March 15, 2024</div>
          </div>

          <ul className="space-y-2">
            {currentPlan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-teal-400/90">
                <Check size={16} className="text-teal-400" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-4">
            <button className="cyber-button">
              <Zap size={16} className="mr-2" />
              Upgrade Plan
            </button>
            <button className="cyber-button bg-red-500/10 border-red-400/30 text-red-400 
              hover:bg-red-500/20 hover:border-red-400/50">
              Cancel Subscription
            </button>
          </div>
        </div>

        <div className="w-px h-48 bg-teal-500/20"></div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Billing History</h3>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-teal-500/10"
              >
                <div>
                  <div className="text-teal-400">Pro Plan</div>
                  <div className="text-sm text-teal-400/70">Feb {15 - index}, 2024</div>
                </div>
                <div className="text-teal-400">${currentPlan.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};