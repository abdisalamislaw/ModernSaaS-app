import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, MessageSquare, Brain, GraduationCap } from 'lucide-react';

export const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced algorithms for human-like conversations and understanding.',
    },
    {
      icon: Brain,
      title: 'Cognitive Computing',
      description: 'AI-powered analysis and decision-making capabilities.',
    },
    {
      icon: Code,
      title: 'Automated Development',
      description: 'Smart code generation and optimization tools.',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Self-improving systems that evolve with usage.',
    },
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="cyber-title text-4xl">Advanced Features</h2>
          <p className="text-teal-400/70 text-xl mt-4">
            Discover what makes our AI technology unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-teal-500/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-teal-400">{feature.title}</h3>
              </div>
              <p className="text-teal-400/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};