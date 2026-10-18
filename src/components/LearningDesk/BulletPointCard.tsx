import React from 'react';
import { Check, Flame, Bookmark, ArrowRight, HelpCircle, GitBranch } from 'lucide-react';
import { BulletPointItem } from '../../types';
import { useAppStore, appStore } from '../../store/useAppStore';
import { getOrGenerateDiagram } from '../../data/clinicalDiagrams';

interface BulletPointCardProps {
  bullet: BulletPointItem;
}

export const BulletPointCard: React.FC<BulletPointCardProps> = ({ bullet }) => {
  const { userProgress } = useAppStore();
  const isCompleted = !!userProgress.completedBulletIds[bullet.id];
  const isBookmarked = !!userProgress.bookmarkedBulletIds[bullet.id];

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Do not open drawer
    appStore.toggleBulletCompleted(bullet.id);
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Do not open drawer
    appStore.toggleBulletBookmarked(bullet.id);
  };

  const handleCardClick = () => {
    // Opens Level 5 Context Drawer
    appStore.openContextDrawer(bullet);
  };

  const pyqCount = bullet.context.linkedPyqIds.length;
  const diagram = getOrGenerateDiagram(bullet);

  return (
    <div
      onClick={handleCardClick}
      className={`group relative bg-white dark:bg-slate-900 rounded-2xl border transition-all cursor-pointer p-3.5 sm:p-4 shadow-xs hover:shadow-md flex items-start gap-3.5 ${
        isCompleted
          ? 'border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/10'
          : 'border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50'
      }`}
    >
      {/* LEFT ZONE: Checkbox Tap Target */}
      <div className="pt-0.5">
        <button
          type="button"
          onClick={handleCheckboxClick}
          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
            isCompleted
              ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs scale-105'
              : 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 hover:border-teal-500'
          }`}
          aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {isCompleted && <Check className="w-4 h-4 stroke-[3]" />}
        </button>
      </div>

      {/* CENTER ZONE: Title & Badges */}
      <div className="flex-1 min-w-0">
        <h4
          className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
            isCompleted
              ? 'text-slate-500 dark:text-slate-400 line-through decoration-slate-300 dark:decoration-slate-600'
              : 'text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400'
          }`}
        >
          {bullet.label}
        </h4>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mt-2">
          {bullet.isHighYield && (
            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/60">
              <Flame className="w-3 h-3 fill-rose-500 text-rose-500" />
              <span>High Yield</span>
            </span>
          )}

          {pyqCount > 0 && (
            <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-900/60">
              <HelpCircle className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
              <span>{pyqCount} {pyqCount === 1 ? 'PYQ' : 'PYQs'}</span>
            </span>
          )}

          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/80 dark:border-teal-900/60">
            <GitBranch className="w-3 h-3 text-teal-600 dark:text-teal-400" />
            <span>{diagram.tag}</span>
          </span>

          {bullet.context.clinicalAlert && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-900/60">
              ⚡ Alert Included
            </span>
          )}
        </div>
      </div>

      {/* RIGHT ZONE: Bookmark button & Read Drawer trigger */}
      <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
        <button
          type="button"
          onClick={handleBookmarkClick}
          className={`p-1.5 rounded-lg transition-colors ${
            isBookmarked
              ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60'
              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
          }`}
          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark concept'}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
        </button>

        <div className="flex items-center gap-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400 px-2 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 group-hover:bg-teal-600 group-hover:text-white transition-all">
          <span className="hidden sm:inline">Read</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
