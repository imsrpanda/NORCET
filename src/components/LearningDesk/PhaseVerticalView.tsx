import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Layers } from 'lucide-react';
import { LearningPhase } from '../../types';
import { BulletPointCard } from './BulletPointCard';
import { useAppStore, appStore } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

interface PhaseVerticalViewProps {
  phases: LearningPhase[];
}

export const PhaseVerticalView: React.FC<PhaseVerticalViewProps> = ({ phases }) => {
  const { userProgress, selectedPhaseId } = useAppStore();

  // Keep track of which phases are expanded (default: selected phase or all phases open)
  const [expandedPhaseIds, setExpandedPhaseIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    phases.forEach((p, idx) => {
      // Expand all by default or at least the active phase
      initial[p.id] = p.id === selectedPhaseId || idx === 0;
    });
    return initial;
  });

  const togglePhase = (phaseId: string) => {
    triggerHaptic('light');
    setExpandedPhaseIds((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }));
    appStore.setSelectedPhase(phaseId);
  };

  const handleExpandAll = () => {
    triggerHaptic('light');
    const allExpanded = phases.every((p) => expandedPhaseIds[p.id]);
    const nextState: Record<string, boolean> = {};
    phases.forEach((p) => {
      nextState[p.id] = !allExpanded;
    });
    setExpandedPhaseIds(nextState);
  };

  const allAreExpanded = phases.every((p) => expandedPhaseIds[p.id]);

  return (
    <div className="space-y-4">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <Layers className="w-3.5 h-3.5 text-teal-600" />
          <span>Level 3 • Clinical Phases ({phases.length} Phases)</span>
        </div>

        <button
          onClick={handleExpandAll}
          className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline"
        >
          {allAreExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {/* Vertical Phase Roadmap */}
      <div className="space-y-3 relative before:absolute before:top-4 before:bottom-4 before:left-5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:z-0">
        {phases.map((phase) => {
          const isExpanded = !!expandedPhaseIds[phase.id];
          const completedCount = phase.bulletPoints.filter(
            (b) => userProgress.completedBulletIds[b.id]
          ).length;
          const totalCount = phase.bulletPoints.length;
          const isPhaseDone = totalCount > 0 && completedCount === totalCount;
          const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

          return (
            <div
              key={phase.id}
              className="relative z-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-all"
            >
              {/* Phase Header Card (Click to expand/collapse) */}
              <div
                onClick={() => togglePhase(phase.id)}
                className={`p-3.5 sm:p-4 cursor-pointer flex items-center justify-between gap-3 transition-colors ${
                  isExpanded
                    ? 'bg-slate-50/70 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800'
                    : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/30'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  {/* Step Order Circle */}
                  <div
                    className={`w-8 h-8 rounded-xl font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 transition-all ${
                      isPhaseDone
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : isExpanded
                        ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25 scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {isPhaseDone ? <CheckCircle2 className="w-4 h-4 stroke-[2.5]" /> : phase.order}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-xs sm:text-sm font-bold truncate ${
                        isExpanded
                          ? 'text-teal-700 dark:text-teal-300'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {phase.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>{completedCount} of {totalCount} concepts mastered</span>
                      <span>•</span>
                      <span className="font-mono font-semibold">{percentage}%</span>
                    </div>
                  </div>
                </div>

                {/* Right Badge & Chevron */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {isPhaseDone ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      Completed ✓
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {completedCount}/{totalCount}
                    </span>
                  )}

                  <div className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Level 4 Bullet Point Items */}
              {isExpanded && (
                <div className="p-3 sm:p-4 space-y-2.5 bg-slate-50/30 dark:bg-slate-950/20 animate-fadeIn">
                  {phase.bulletPoints.length === 0 ? (
                    <p className="text-xs text-slate-400 py-3 text-center">
                      No concepts listed under this phase.
                    </p>
                  ) : (
                    phase.bulletPoints.map((bullet) => (
                      <BulletPointCard key={bullet.id} bullet={bullet} />
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
