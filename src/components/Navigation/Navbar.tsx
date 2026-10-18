import React from 'react';
import { Moon, Sun, Flame, Clock, LayoutDashboard, BookOpenCheck, Trophy, BookmarkCheck } from 'lucide-react';
import { useAppStore, appStore, AppState } from '../../store/useAppStore';
import { getTargetExamInfo } from '../../utils/helpers';
import { triggerHaptic } from '../../utils/haptics';

export const Navbar: React.FC = () => {
  const { isDarkMode, userProgress, activeTab } = useAppStore();
  const examInfo = getTargetExamInfo();

  const handleThemeToggle = () => {
    triggerHaptic('light');
    appStore.setTheme(!isDarkMode);
  };

  const handleTabClick = (tab: AppState['activeTab']) => {
    triggerHaptic('light');
    appStore.setActiveTab(tab);
  };

  const bookmarkedCount = Object.keys(userProgress.bookmarkedBulletIds).length;

  const navLinks = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'learning-desk' as const, label: 'Learning Desk', icon: BookOpenCheck },
    { id: 'pyq-arena' as const, label: 'PYQ Arena', icon: Trophy },
    { id: 'revision-vault' as const, label: 'Revision Vault', icon: BookmarkCheck, badge: bookmarkedCount },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-3.5 sm:px-6 lg:px-8 py-2.5 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer flex-shrink-0" onClick={() => handleTabClick('dashboard')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-teal-700 via-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400 bg-clip-text text-transparent">
                PocketNORCET
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
                PRO
              </span>
            </div>
            <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 hidden xs:block">
              AIIMS · ESIC · RRB Nursing Officer
            </p>
          </div>
        </div>

        {/* Center Desktop Navigation Tabs (Hidden on mobile phones, prominent on Desktop/Tablet) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 p-1 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          {navLinks.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="min-w-[16px] h-4 px-1 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Info Badges & Theme Toggle */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Streak Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 text-xs font-bold shadow-xs">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
            <span>{userProgress.dailyStreak}d</span>
          </div>

          {/* Exam Target Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>{examInfo.daysLeft}d to NORCET</span>
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={handleThemeToggle}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
