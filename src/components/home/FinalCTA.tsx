import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Shield } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="cyber-title text-4xl md:text-5xl mb-8">
          Start Building with AI Today
        </h2>
        <p className="text-teal-400/70 text-xl mb-12">
          Join thousands of developers and creators who are already building the future with Ultimate AI
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button className="cyber-button text-lg px-8 py-3 bg-teal-500/20">
            Start Free Trial <ArrowRight className="inline ml-2" size={20} />
          </button>
          <div className="flex items-center gap-2 text-teal-400/70">
            <Shield size={20} />
            <span>7-day free trial, no credit card required</span>
          </div>
        </div>

        <div className="cyber-card bg-teal-500/5">
          <p className="text-teal-400 font-semibold mb-2">100% Satisfaction Guarantee</p>
          <p className="text-teal-400/70">
            Try Ultimate AI risk-free. If you're not completely satisfied, we'll refund your first month.
          </p>
        </div>
      </motion.div>
    </section>
  );
};