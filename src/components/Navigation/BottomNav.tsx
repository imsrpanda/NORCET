import React from 'react';
import { LayoutDashboard, BookOpenCheck, Trophy, BookmarkCheck } from 'lucide-react';
import { useAppStore, appStore, AppState } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

export const BottomNav: React.FC = () => {
  const { activeTab, userProgress } = useAppStore();

  const handleTabChange = (tab: AppState['activeTab']) => {
    if (activeTab !== tab) {
      triggerHaptic('light');
      appStore.setActiveTab(tab);
    }
  };

  const bookmarkedCount = Object.keys(userProgress.bookmarkedBulletIds).length;

  const tabs: { id: AppState['activeTab']; label: string; icon: React.ComponentType<{ className?: string }>; badge?: number }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'learning-desk', label: 'Learning Desk', icon: BookOpenCheck },
    { id: 'pyq-arena', label: 'PYQs & CBT', icon: Trophy },
    { id: 'revision-vault', label: 'Revision Vault', icon: BookmarkCheck, badge: bookmarkedCount },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800/80 pb-safe shadow-lg">
      <div className="max-w-lg mx-auto h-16 flex items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = tab.icon;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 transition-all relative ${
                isActive
                  ? 'text-teal-600 dark:text-teal-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <div
                  className={`p-1 rounded-xl transition-all ${
                    isActive ? 'bg-teal-50 dark:bg-teal-950/60 scale-105' : ''
                  }`}
                >
                  <IconComponent className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                </div>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-slate-950">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-6 h-0.5 bg-teal-600 dark:bg-teal-400 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
