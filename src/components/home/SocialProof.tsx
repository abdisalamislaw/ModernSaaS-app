import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Users, Brain } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => {
  return (
    <div className="text-center">
      <Icon className="w-8 h-8 text-teal-400 mx-auto mb-4" />
      <div className="text-3xl font-bold text-teal-400 mb-2">{value}</div>
      <div className="text-teal-400/70">{label}</div>
    </div>
  );
};

const Testimonial = ({ text, author, role }: { text: string; author: string; role: string }) => {
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
      className="cyber-card"
    >
      <p className="text-teal-400/90 mb-4">{text}</p>
      <div className="text-teal-400">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-teal-400/70">{role}</div>
      </div>
    </motion.div>
  );
};

export const SocialProof: React.FC = () => {
  const stats = [
    { icon: MessageCircle, value: '1M+', label: 'Questions Answered Daily' },
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: Brain, value: '95%', label: 'Accuracy Rate' },
  ];

  const testimonials = [
    {
      text: "The AI's ability to understand context and provide relevant solutions has dramatically improved my workflow.",
      author: 'Sarah Chen',
      role: 'Senior Developer',
    },
    {
      text: "I've tried many AI tools, but this one stands out for its natural conversation ability and deep technical knowledge.",
      author: 'Marcus Rodriguez',
      role: 'Tech Lead',
    },
    {
      text: "It's like having a brilliant colleague available 24/7. The code suggestions are particularly impressive.",
      author: 'Emma Thompson',
      role: 'Software Architect',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="cyber-title text-4xl">Trusted by Developers Worldwide</h2>
          <p className="text-teal-400/70 text-xl mt-4">
            See what our users have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};