import React from 'react';
import { useAppStore, appStore } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

export const PhasePillTabs: React.FC = () => {
  const { syllabus, selectedSubjectId, selectedSubtopicId, selectedPhaseId, userProgress } = useAppStore();

  const currentSubject = syllabus.find((s) => s.id === selectedSubjectId) || syllabus[0];
  const currentSubtopic = currentSubject.subtopics.find((st) => st.id === selectedSubtopicId) || currentSubject.subtopics[0];
  const phases = currentSubtopic.phases;

  const handleSelectPhase = (phaseId: string) => {
    triggerHaptic('light');
    appStore.setSelectedPhase(phaseId);
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Level 3 • Clinical Phase
        </span>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
          Horizontal swipe to explore
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar scroll-smooth">
        {phases.map((phase) => {
          const isSelected = phase.id === selectedPhaseId;
          const completedInPhase = phase.bulletPoints.filter(
            (b) => userProgress.completedBulletIds[b.id]
          ).length;
          const totalInPhase = phase.bulletPoints.length;
          const isPhaseDone = totalInPhase > 0 && completedInPhase === totalInPhase;

          return (
            <button
              key={phase.id}
              onClick={() => handleSelectPhase(phase.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                isSelected
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <span>{phase.title}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-teal-700/80 text-white'
                    : isPhaseDone
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {completedInPhase}/{totalInPhase}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
