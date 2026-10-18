import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { BottomNav } from './components/Navigation/BottomNav';
import { AppFooter } from './components/Navigation/AppFooter';
import { UpdateModal } from './components/Common/UpdateModal';
import { DashboardView } from './components/Dashboard/DashboardView';
import { LearningDeskView } from './components/LearningDesk/LearningDeskView';
import { PYQArenaView } from './components/PYQArena/PYQArenaView';
import { RevisionVaultView } from './components/RevisionVault/RevisionVaultView';
import { useAppStore } from './store/useAppStore';
import { checkForAppUpdate } from './services/versionChecker';

export const App: React.FC = () => {
  const { activeTab } = useAppStore();
  const [newVersion, setNewVersion] = useState<string | null>(null);

  // Daily version check: Runs once per day or shows pending update
  useEffect(() => {
    checkForAppUpdate().then((latest) => {
      if (latest) {
        setNewVersion(latest);
      }
    });
  }, []);

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

        {/* Global Footer with App Version & Manual Check */}
        <AppFooter onUpdateFound={setNewVersion} />
      </main>

      {/* Persistent 4-Tab Bottom Navigation Bar */}
      <BottomNav />

      {/* Pop-up Update Modal when newer version is detected */}
      {newVersion && (
        <UpdateModal 
          newVersion={newVersion} 
          onClose={() => setNewVersion(null)} 
        />
      )}
    </div>
  );
};

export default App;
