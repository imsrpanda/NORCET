import React, { useEffect } from 'react';
import { 
  X, 
  Bookmark, 
  Check, 
  ArrowRight, 
  AlertOctagon, 
  Sparkles, 
  Activity,
  Flame,
  Trophy
} from 'lucide-react';
import { useAppStore, appStore } from '../../store/useAppStore';
import { ClinicalMarkdown } from '../Common/ClinicalMarkdown';
import { SEED_PYQ_QUESTIONS } from '../../data/pyqQuestions';
import { PracticeCard } from '../PYQArena/PracticeCard';
import { triggerHaptic } from '../../utils/haptics';

export const ContextDrawer: React.FC = () => {
  const { activeContextBullet, userProgress } = useAppStore();

  useEffect(() => {
    // Lock background scroll when drawer is open on mobile
    if (activeContextBullet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeContextBullet]);

  if (!activeContextBullet) return null;

  const isCompleted = !!userProgress.completedBulletIds[activeContextBullet.id];
  const isBookmarked = !!userProgress.bookmarkedBulletIds[activeContextBullet.id];

  const handleToggleComplete = () => {
    appStore.toggleBulletCompleted(activeContextBullet.id);
  };

  const handleToggleBookmark = () => {
    appStore.toggleBulletBookmarked(activeContextBullet.id);
  };

  const handleNext = () => {
    appStore.nextContextBullet();
  };

  const handleClose = () => {
    triggerHaptic('light');
    appStore.closeContextDrawer();
  };

  const handleJumpToPyqArena = () => {
    triggerHaptic('medium');
    appStore.closeContextDrawer();
    appStore.setActiveTab('pyq-arena');
  };

  // Find linked questions from seed repository
  const linkedQuestions = SEED_PYQ_QUESTIONS.filter((q) =>
    activeContextBullet.context.linkedPyqIds.includes(q.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center p-0 md:p-6">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      {/* Drawer Container: Bottom Sheet on Mobile, Centered Clinical Reader on Desktop */}
      <div className="relative z-10 w-full max-w-2xl md:max-w-4xl mx-auto h-[88vh] md:h-[84vh] max-h-[92vh] bg-white dark:bg-slate-950 rounded-t-3xl md:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-slideUp">
        {/* Drag Handle Bar */}
        <div className="w-full pt-3 pb-2 flex flex-col items-center justify-center cursor-pointer select-none bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
            Level 5 • Clinical Context Reader
          </span>
        </div>

        {/* Header Bar */}
        <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {activeContextBullet.isHighYield && (
                <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                  <Flame className="w-3 h-3 fill-rose-500 text-rose-500" />
                  <span>High Yield Concept</span>
                </span>
              )}
              <span className="text-[11px] font-semibold text-teal-700 dark:text-teal-400">
                {activeContextBullet.label}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
              {activeContextBullet.context.heading}
            </h2>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Bookmark button */}
            <button
              onClick={handleToggleBookmark}
              className={`p-2 rounded-xl transition-colors border ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-500'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Add to Vault'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              title="Close reader"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Main Clinical Markdown Content */}
          <ClinicalMarkdown content={activeContextBullet.context.markdownContent} />

          {/* Clinical Alert Callout Box (Rose) */}
          {activeContextBullet.context.clinicalAlert && (
            <div className="bg-rose-500/10 border-l-4 border-rose-500 rounded-r-2xl p-4 border border-y-rose-500/20 border-r-rose-500/20 shadow-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <AlertOctagon className="w-4 h-4 text-rose-500 fill-rose-500/20 flex-shrink-0" />
                <h4 className="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-400">
                  NORCET Clinical Alert & Contraindications
                </h4>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-rose-100 leading-relaxed">
                {activeContextBullet.context.clinicalAlert}
              </p>
            </div>
          )}

          {/* Clinical Pearl Callout Box (Amber) */}
          {activeContextBullet.context.clinicalPearl && (
            <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-2xl p-4 border border-y-amber-500/20 border-r-amber-500/20 shadow-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Nurse's Priority Action / Gold Standard
                </h4>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-amber-100 leading-relaxed">
                {activeContextBullet.context.clinicalPearl}
              </p>
            </div>
          )}

          {/* Normal Values / Diagnostic Reference Specs */}
          {activeContextBullet.context.normalValues && activeContextBullet.context.normalValues.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Activity className="w-4 h-4 text-teal-600" />
                <span>Clinical Normal Reference Thresholds</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeContextBullet.context.normalValues.map((nv, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{nv.label}</span>
                    <span className="font-bold font-mono text-teal-700 dark:text-teal-300">{nv.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DEDICATED IN-DRAWER PYQ SECTION */}
          {activeContextBullet.context.linkedPyqIds.length > 0 && (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                      Linked Previous Year Questions (PYQs)
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Practice real past exam scenario questions for this concept
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleJumpToPyqArena}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Full Arena</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Render interactive question cards if question details exist */}
              {linkedQuestions.length > 0 ? (
                <div className="space-y-3">
                  {linkedQuestions.map((q, idx) => (
                    <PracticeCard key={q.id} question={q} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/60 flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                      Tested in AIIMS NORCET & State Exams:
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {activeContextBullet.context.linkedPyqIds.map((pyqId) => (
                        <span
                          key={pyqId}
                          className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] font-bold border border-indigo-200 dark:border-indigo-800"
                        >
                          {pyqId}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleJumpToPyqArena}
                    className="flex-shrink-0 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs"
                  >
                    Solve Now
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Sticky Action Bar (In-Drawer Progression) */}
        <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 flex-shrink-0">
          {/* Mastered / Complete Toggle */}
          <button
            onClick={handleToggleComplete}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{isCompleted ? 'Mastered ✓' : 'Mark as Mastered'}</span>
          </button>

          {/* Next Concept Button */}
          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/25 active:scale-95 transition-all"
          >
            <span>Next Concept</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
