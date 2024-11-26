import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Camera, Save } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const UserProfile: React.FC = () => {
  const { user } = useAuthStore();
  const [name, setName] = useState(user?.user_metadata?.full_name || '');
  const [editing, setEditing] = useState(false);

  const handleSave = async () => {
    // TODO: Implement save functionality
    setEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="cyber-card"
    >
      <h2 className="text-xl font-bold text-teal-400 mb-6">Profile Information</h2>
      
      <div className="flex items-start gap-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-teal-500/20 flex items-center justify-center">
            {user?.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User size={40} className="text-teal-400" />
            )}
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-gray-800 rounded-full border border-teal-500/30 text-teal-400 hover:bg-gray-700 transition-colors">
            <Camera size={16} />
          </button>
        </div>

        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <label className="text-teal-400/80 text-sm">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!editing}
              className="cyber-input"
            />
          </div>

          <div className="space-y-2">
            <label className="text-teal-400/80 text-sm">Email</label>
            <input
              type="email"
              value={user?.email || ''}
              disabled
              className="cyber-input opacity-70"
            />
          </div>

          {editing ? (
            <button onClick={handleSave} className="cyber-button">
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          ) : (
            <button onClick={() => setEditing(true)} className="cyber-button">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};