import React from 'react';
import { createPortal } from 'react-dom';
import { Rocket, ArrowRight, Download, X } from 'lucide-react';
import { APP_VERSION, UPDATE_URL } from '../../config/appVersion';
import { triggerHaptic } from '../../utils/haptics';

interface UpdateModalProps {
  newVersion: string;
  onClose: () => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({ newVersion, onClose }) => {
  const handleUpdate = () => {
    triggerHaptic('success');
    window.open(UPDATE_URL, '_blank', 'noopener,noreferrer');
  };

  const handleDismiss = () => {
    triggerHaptic('light');
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-center space-y-5"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon */}
        <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
          <Rocket className="w-7 h-7" />
        </div>

        {/* Title */}
        <div>
          <h2 className="text-lg font-black text-slate-900 dark:text-white">
            Update Available!
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            A new version of PocketNORCET is available.
          </p>
        </div>

        {/* Version Transition Box */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-around">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Current</span>
            <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400">
              v{APP_VERSION}
            </span>
          </div>

          <ArrowRight className="w-4 h-4 text-teal-500" />

          <div>
            <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase block">New</span>
            <span className="font-mono text-xs font-extrabold text-teal-600 dark:text-teal-400">
              v{newVersion}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleUpdate}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-teal-600/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Update Now</span>
          </button>

          <button
            onClick={handleDismiss}
            className="w-full py-2.5 px-4 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
          >
            Later
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
