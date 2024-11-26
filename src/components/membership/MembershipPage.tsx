import React from 'react';
import { motion } from 'framer-motion';
import { UserProfile } from './UserProfile';
import { SubscriptionDetails } from './SubscriptionDetails';
import { AccountSettings } from './AccountSettings';
import { useAuthStore } from '../../store/authStore';
import { Loader } from '../shared/Loader';
import { ErrorMessage } from '../shared/ErrorMessage';

export const MembershipPage: React.FC = () => {
  const { user } = useAuthStore();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="cyber-title text-3xl">Membership Settings</h1>
        <UserProfile />
        <SubscriptionDetails />
        <AccountSettings />
      </motion.div>
    </div>
  );
};