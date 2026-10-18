import React from 'react';
import { createPortal } from 'react-dom';
import { 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  Download, 
  X, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { UpdateInfo } from '../../config/appVersion';
import { triggerHaptic } from '../../utils/haptics';

interface UpdateModalProps {
  updateInfo: UpdateInfo;
  onClose: () => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({ updateInfo, onClose }) => {
  const { latestVersion, currentVersion, releaseNotes, updateUrl, forceUpdate } = updateInfo;

  const handleUpdate = () => {
    triggerHaptic('success');
    if (updateUrl) {
      window.open(updateUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.reload();
    }
  };

  const handleDismiss = () => {
    if (forceUpdate) return;
    triggerHaptic('light');
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="update-modal-title"
      >
        {/* Glow backdrop decorative accent */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button (only if not a force update) */}
        {!forceUpdate && (
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close update notice"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="space-y-5">
          {/* Top Icon Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 flex-shrink-0 animate-bounce">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  New Release Ready
                </span>
                {forceUpdate && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                    Mandatory
                  </span>
                )}
              </div>
              <h2 id="update-modal-title" className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                Update Available
              </h2>
            </div>
          </div>

          {/* Version Transition Box */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Installed</span>
              <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400">
                v{currentVersion}
              </span>
            </div>

            <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <ArrowRight className="w-4 h-4" />
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 block uppercase flex items-center justify-end gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Latest</span>
              </span>
              <span className="font-mono text-xs font-extrabold text-teal-700 dark:text-teal-300">
                v{latestVersion}
              </span>
            </div>
          </div>

          {/* What's New / Release Notes */}
          <div className="space-y-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              What's New in this Build
            </h3>
            <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
              {releaseNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Warning if forceUpdate */}
          {forceUpdate && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-300 text-xs">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-rose-600 dark:text-rose-400" />
              <span>This update is required to continue syncing mock tests and questions.</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              onClick={handleUpdate}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-teal-600/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Update to v{latestVersion} Now</span>
            </button>

            {!forceUpdate && (
              <button
                onClick={handleDismiss}
                className="w-full py-2.5 px-4 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Remind Me Tomorrow
              </button>
            )}
          </div>

          {/* Frequency footnote */}
          <p className="text-[10px] text-center text-slate-400 dark:text-slate-500">
            PocketNORCET checks for official updates once daily.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};
