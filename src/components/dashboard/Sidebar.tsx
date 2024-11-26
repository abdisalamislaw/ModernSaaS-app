import React from 'react';
import { MessageSquare, Code, History, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { signOut } = useAuthStore();

  const menuItems = [
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'code', icon: Code, label: 'Code' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 border-r border-teal-500/20 p-4">
      <div className="flex flex-col h-full">
        <div className="space-y-2">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                ${activeTab === id 
                  ? 'bg-teal-500/20 text-teal-400' 
                  : 'text-teal-400/70 hover:bg-teal-500/10 hover:text-teal-400'
                }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-teal-400/70 
              hover:bg-teal-500/10 hover:text-teal-400 transition-colors"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};