import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cyber-title text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Your Brilliant AI Partner
            <br /> for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
              Everything
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-teal-400/70 text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Get instant help with writing, analysis, coding, and creative work
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link to="/signup" className="cyber-button text-lg px-8 py-3 group">
              Try Ultimate AI Free{' '}
              <ArrowRight className="inline ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <p className="text-teal-400/60">
              <Sparkles className="inline mr-2 animate-pulse" size={20} />
              10,000+ professionals already using
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="cyber-card max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4 text-teal-400">
              <Terminal size={20} />
              <span className="text-sm">Live Demo</span>
            </div>
            <div className="space-y-4 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                  U
                </div>
                <div className="flex-1">
                  <p className="text-teal-400/90">Can you help me optimize this React component?</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                  AI
                </div>
                <div className="flex-1">
                  <p className="text-teal-400/90">
                    I'll analyze your component for performance improvements. Could you share the code?
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.0, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                  U
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-teal-500/20 rounded w-3/4 animate-pulse"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};