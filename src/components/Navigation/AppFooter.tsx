import React, { useState } from 'react';
import { RefreshCw, CheckCircle, ShieldCheck } from 'lucide-react';
import { APP_VERSION } from '../../config/appVersion';
import { checkForAppUpdate } from '../../services/versionChecker';
import { triggerHaptic } from '../../utils/haptics';

interface AppFooterProps {
  onUpdateFound?: (newVersion: string) => void;
}

export const AppFooter: React.FC<AppFooterProps> = ({ onUpdateFound }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkStatus, setCheckStatus] = useState<string | null>(null);

  const handleManualCheck = async () => {
    triggerHaptic('light');
    setIsChecking(true);
    setCheckStatus(null);

    try {
      const newVersion = await checkForAppUpdate(true); // force check bypassing 24h throttle
      setIsChecking(false);

      if (newVersion) {
        setCheckStatus(`Update available: v${newVersion}`);
        onUpdateFound?.(newVersion);
      } else {
        setCheckStatus(`Latest version installed (v${APP_VERSION})`);
        setTimeout(() => setCheckStatus(null), 4000);
      }
    } catch {
      setIsChecking(false);
      setCheckStatus('Could not reach update server');
      setTimeout(() => setCheckStatus(null), 4000);
    }
  };

  return (
    <footer className="mt-8 mb-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center space-y-2">
      <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
        <span>PocketNORCET Companion</span>
        <span>•</span>
        <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md text-[11px] font-bold text-slate-700 dark:text-slate-300">
          v{APP_VERSION}
        </span>
      </div>

      <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
        <button
          onClick={handleManualCheck}
          disabled={isChecking}
          className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-bold disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`w-3 h-3 ${isChecking ? 'animate-spin' : ''}`} />
          <span>{isChecking ? 'Checking...' : 'Check for Updates'}</span>
        </button>
      </div>

      {checkStatus && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-medium animate-fadeIn">
          <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
          <span>{checkStatus}</span>
        </div>
      )}
    </footer>
  );
};
