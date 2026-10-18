import React from 'react';
import { Layers, Flame } from 'lucide-react';
import { useAppStore, appStore } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

export const SubtopicSelector: React.FC = () => {
  const { syllabus, selectedSubjectId, selectedSubtopicId } = useAppStore();
  const currentSubject = syllabus.find((s) => s.id === selectedSubjectId) || syllabus[0];

  const handleSubtopicChange = (subtopicId: string) => {
    triggerHaptic('light');
    appStore.setSelectedSubtopic(subtopicId);
  };

  return (
    <div className="bg-slate-100/70 dark:bg-slate-900/60 p-2 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
      <div className="flex items-center justify-between px-2 py-1 mb-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <Layers className="w-3 h-3" />
          <span>Level 2 • Subtopics ({currentSubject.subtopics.length})</span>
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {currentSubject.subtopics.map((subtopic) => {
          const isSelected = subtopic.id === selectedSubtopicId;

          return (
            <button
              key={subtopic.id}
              onClick={() => handleSubtopicChange(subtopic.id)}
              className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-white dark:bg-slate-800 shadow-xs border border-teal-500/40 dark:border-teal-500/40'
                  : 'hover:bg-white/60 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className={`text-xs sm:text-sm font-bold truncate ${
                    isSelected ? 'text-teal-700 dark:text-teal-300' : 'text-slate-800 dark:text-slate-200'
                  }`}>
                    {subtopic.title}
                  </h3>
                </div>
              </div>

              {/* Tier Badge */}
              <div className="flex items-center gap-1 flex-shrink-0">
                {subtopic.importanceTier === 'High' ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50">
                    <Flame className="w-3 h-3 fill-rose-500 text-rose-500" />
                    <span>High Yield</span>
                  </span>
                ) : (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {subtopic.importanceTier}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
