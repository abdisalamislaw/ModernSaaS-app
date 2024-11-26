import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MessageSquare, Code, Settings, History } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { Sidebar } from './Sidebar';
import { useAuthStore } from '../../store/authStore';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('chat');
  const { user } = useAuthStore();

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen pt-16 bg-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          <header className="cyber-card m-4 p-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-teal-400">
              {activeTab === 'chat' && 'AI Chat Assistant'}
              {activeTab === 'code' && 'Code Generation'}
              {activeTab === 'history' && 'Chat History'}
              {activeTab === 'settings' && 'Settings'}
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-teal-400/70">
                Credits: <span className="text-teal-400">842</span>
              </div>
              <button className="cyber-button">
                Upgrade Plan
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-hidden p-4">
            {activeTab === 'chat' && <ChatInterface />}
            {activeTab === 'code' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="cyber-card h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-teal-400" size={20} />
                  <h2 className="text-teal-400 font-semibold">Code Generation</h2>
                </div>
                <p className="text-teal-400/70">Code generation interface coming soon...</p>
              </motion.div>
            )}
            {activeTab === 'history' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="cyber-card h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <History className="text-teal-400" size={20} />
                  <h2 className="text-teal-400 font-semibold">Chat History</h2>
                </div>
                <p className="text-teal-400/70">Chat history interface coming soon...</p>
              </motion.div>
            )}
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="cyber-card h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="text-teal-400" size={20} />
                  <h2 className="text-teal-400 font-semibold">Settings</h2>
                </div>
                <p className="text-teal-400/70">Settings interface coming soon...</p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};