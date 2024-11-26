import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, CreditCard } from 'lucide-react';

export const AccountSettings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    updates: false,
    marketing: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="cyber-card"
    >
      <h2 className="text-xl font-bold text-teal-400 mb-6">Account Settings</h2>

      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 text-teal-400 mb-4">
            <Lock size={20} />
            <h3 className="font-semibold">Password & Security</h3>
          </div>
          <button className="cyber-button">
            Change Password
          </button>
        </div>

        <div>
          <div className="flex items-center gap-2 text-teal-400 mb-4">
            <Bell size={20} />
            <h3 className="font-semibold">Notification Preferences</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <label key={key} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    setNotifications((prev) => ({
                      ...prev,
                      [key]: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 rounded border-teal-500/30 text-teal-400 
                    focus:ring-teal-400 focus:ring-offset-gray-900 bg-gray-800"
                />
                <span className="text-teal-400/90 capitalize">
                  {key === 'email' ? 'Email notifications' : `${key} notifications`}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-teal-400 mb-4">
            <CreditCard size={20} />
            <h3 className="font-semibold">Payment Methods</h3>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 border border-teal-500/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-teal-500/20 rounded flex items-center justify-center">
                <span className="text-teal-400 text-sm">VISA</span>
              </div>
              <div>
                <div className="text-teal-400">•••• •••• •••• 4242</div>
                <div className="text-sm text-teal-400/70">Expires 12/25</div>
              </div>
            </div>
            <button className="cyber-button">
              Update
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};