import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-teal-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 border-2 border-teal-400 rounded transform rotate-45" />
              <span className="text-xl font-bold text-teal-400 glow">Ultimate AI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-teal-400/80 hover:text-teal-400 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-teal-400/80 hover:text-teal-400 transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="cyber-button">
              Access Terminal →
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-teal-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/features"
              className="block px-3 py-2 text-teal-400/80 hover:text-teal-400 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-teal-400/80 hover:text-teal-400 transition-colors"
            >
              Pricing
            </Link>
            <Link to="/login" className="block px-3 py-2">
              <button className="cyber-button w-full">Access Terminal →</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};