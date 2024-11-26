import React, { useState } from 'react';
import { Mail, Lock, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface AuthFormProps {
  onClose?: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="cyber-card max-w-md w-full mx-auto relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-teal-400 hover:text-teal-300"
        >
          <X size={20} />
        </button>
      )}
      
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
          <div className="w-8 h-8 border-2 border-teal-400 rounded transform rotate-45" />
        </div>
        <h2 className="text-2xl font-bold text-teal-400 glow">Access Terminal</h2>
        <p className="text-teal-400/60 mt-2">Initialize authentication sequence</p>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          className={`flex-1 py-2 text-center transition-all duration-200 border-b-2 
            ${isLogin ? 'border-teal-400 text-teal-400' : 'border-transparent text-teal-400/50'}`}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <button
          className={`flex-1 py-2 text-center transition-all duration-200 border-b-2
            ${!isLogin ? 'border-teal-400 text-teal-400' : 'border-transparent text-teal-400/50'}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-teal-400/80 text-sm">Email</label>
          <div className="relative">
            <input
              type="email"
              placeholder="NAME@EXAMPLE.COM"
              className="cyber-input pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-400/50" size={18} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-teal-400/80 text-sm">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="••••••••"
              className="cyber-input pl-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-400/50" size={18} />
          </div>
        </div>

        <button type="submit" className="cyber-button w-full">
          {isLogin ? 'INITIALIZE LOGIN' : 'INITIALIZE REGISTRATION'} →
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-teal-400/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-teal-400/60">External Access Points</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="cyber-button flex items-center justify-center gap-2">
            <span className="text-lg">⌥</span> GITHUB
          </button>
          <button type="button" className="cyber-button flex items-center justify-center gap-2">
            <span className="text-lg">⌘</span> GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
};