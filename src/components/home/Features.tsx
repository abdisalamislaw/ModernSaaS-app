import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Code, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
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
      className="cyber-card group hover:border-teal-400/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
          <Icon className="w-6 h-6 text-teal-400" />
        </div>
        <h3 className="text-xl font-semibold text-teal-400">{title}</h3>
      </div>
      <p className="text-teal-400/70">{description}</p>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Chat like you're talking to a brilliant friend. Our AI understands context and nuance."
    },
    {
      icon: Brain,
      title: "Universal Knowledge",
      description: "From academic research to creative projects, access comprehensive knowledge instantly."
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Build entire applications with AI guidance and get help with any programming challenge."
    },
    {
      icon: GraduationCap,
      title: "Learning Companion",
      description: "Get personalized explanations in any field, tailored to your learning style."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="cyber-title text-4xl md:text-5xl">
            Powered by Advanced AI
          </h2>
          <p className="text-teal-400/70 text-xl mt-4">
            Experience the next generation of AI assistance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};