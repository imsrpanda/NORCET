import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Flame, 
  CheckCircle2 
} from 'lucide-react';
import { Subtopic } from '../../types';
import { BulletPointCard } from './BulletPointCard';
import { useAppStore } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

interface SubtopicSectionProps {
  subtopic: Subtopic;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const SubtopicSection: React.FC<SubtopicSectionProps> = ({
  subtopic,
  index,
  isExpanded,
  onToggleExpand
}) => {
  const { userProgress } = useAppStore();

  // Track expanded phases within this subtopic (all expanded by default for full visibility)
  const [expandedPhaseIds, setExpandedPhaseIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    subtopic.phases.forEach((p) => {
      initial[p.id] = true;
    });
    return initial;
  });

  // Calculate subtopic stats
  let totalBullets = 0;
  let completedBullets = 0;

  subtopic.phases.forEach((phase) => {
    phase.bulletPoints.forEach((bullet) => {
      totalBullets += 1;
      if (userProgress.completedBulletIds[bullet.id]) {
        completedBullets += 1;
      }
    });
  });

  const isSubtopicComplete = totalBullets > 0 && completedBullets === totalBullets;
  const completionPercentage = totalBullets > 0 ? Math.round((completedBullets / totalBullets) * 100) : 0;

  const togglePhase = (phaseId: string) => {
    triggerHaptic('light');
    setExpandedPhaseIds((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  return (
    <div 
      id={`subtopic-${subtopic.id}`}
      className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-200"
    >
      {/* Subtopic Header Card */}
      <div
        onClick={onToggleExpand}
        className={`p-4 sm:p-5 cursor-pointer flex items-center justify-between gap-3 transition-colors select-none ${
          isExpanded 
            ? 'bg-slate-50/80 dark:bg-slate-800/40 border-b border-slate-200/80 dark:border-slate-800' 
            : 'hover:bg-slate-50/60 dark:hover:bg-slate-800/30'
        }`}
      >
        <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
          {/* Subtopic Index Icon */}
          <div
            className={`w-9 h-9 rounded-2xl font-extrabold text-sm flex items-center justify-center flex-shrink-0 transition-all ${
              isSubtopicComplete
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-teal-600/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/20'
            }`}
          >
            {isSubtopicComplete ? (
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Subtopic {index + 1}
              </span>

              {/* High Yield Badge */}
              {subtopic.importanceTier === 'High' && (
                <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60">
                  <Flame className="w-3 h-3 fill-rose-500 text-rose-500" />
                  <span>High Yield</span>
                </span>
              )}

              {/* Progress Count */}
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                {completedBullets} / {totalBullets} mastered ({completionPercentage}%)
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
              {subtopic.title}
            </h3>
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Progress Mini Bar */}
          <div className="hidden sm:flex flex-col items-end gap-1 w-20">
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-teal-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-slate-400">
              {subtopic.phases.length} Phases
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>
      </div>

      {/* Subtopic Body: All Phases & Bullet Points */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-5 animate-fadeIn">
          {subtopic.phases.map((phase) => {
            const isPhaseExpanded = !!expandedPhaseIds[phase.id];
            const phaseCompletedCount = phase.bulletPoints.filter(
              (b) => userProgress.completedBulletIds[b.id]
            ).length;
            const phaseTotalCount = phase.bulletPoints.length;
            const isPhaseDone = phaseTotalCount > 0 && phaseCompletedCount === phaseTotalCount;

            return (
              <div 
                key={phase.id}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 overflow-hidden"
              >
                {/* Phase Header */}
                <div
                  onClick={() => togglePhase(phase.id)}
                  className="p-3 sm:p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div
                      className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center flex-shrink-0 ${
                        isPhaseDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800'
                      }`}
                    >
                      {isPhaseDone ? '✓' : phase.order}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                      {phase.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {phaseCompletedCount} / {phaseTotalCount}
                    </span>

                    {isPhaseExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Phase Bullet Points List */}
                {isPhaseExpanded && (
                  <div className="p-3 sm:p-4 pt-1 space-y-2.5 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60">
                    {phase.bulletPoints.map((bullet) => (
                      <BulletPointCard key={bullet.id} bullet={bullet} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
