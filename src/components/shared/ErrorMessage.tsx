import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="cyber-card bg-red-500/10 border-red-400/30">
        <div className="flex items-center gap-3 text-red-400">
          <AlertTriangle size={24} />
          <div>
            <h3 className="font-semibold">Error</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};