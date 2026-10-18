import React from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { BottomNav } from './components/Navigation/BottomNav';
import { DashboardView } from './components/Dashboard/DashboardView';
import { LearningDeskView } from './components/LearningDesk/LearningDeskView';
import { PYQArenaView } from './components/PYQArena/PYQArenaView';
import { RevisionVaultView } from './components/RevisionVault/RevisionVaultView';
import { useAppStore } from './store/useAppStore';

export const App: React.FC = () => {
  const { activeTab } = useAppStore();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Mobile/Desktop Status & Navigation Bar */}
      <Navbar />

      {/* Main Container: Mobile-first ergonomic padding scaling to full desktop */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-3 sm:pt-6">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'learning-desk' && <LearningDeskView />}
        {activeTab === 'pyq-arena' && <PYQArenaView />}
        {activeTab === 'revision-vault' && <RevisionVaultView />}
      </main>

      {/* Persistent 4-Tab Bottom Navigation Bar */}
      <BottomNav />
    </div>
  );
};

export default App;
