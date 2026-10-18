import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useAppStore, appStore } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

export const ResumeCard: React.FC = () => {
  const { syllabus, userProgress } = useAppStore();
  const last = userProgress.lastAccessed;

  // Resolve names
  const subject = syllabus.find((s) => s.id === (last?.subjectId || 'fon')) || syllabus[0];
  const subtopic = subject.subtopics.find((st) => st.id === (last?.subtopicId || 'fon-1')) || subject.subtopics[0];
  const phase = subtopic.phases.find((p) => p.id === (last?.phaseId || 'fon-1-p1')) || subtopic.phases[0];

  const handleResume = () => {
    triggerHaptic('medium');
    appStore.jumpToStudy(subject.id, subtopic.id, phase.id, last?.bulletId);
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 to-indigo-50 dark:from-slate-900 dark:to-slate-900/90 rounded-2xl p-4 sm:p-5 border border-teal-200/80 dark:border-teal-900/50 shadow-sm relative overflow-hidden">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Resume Where You Left Off</span>
          </div>

          <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
            {subtopic.title}
          </h4>

          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-teal-800 dark:text-teal-300 bg-teal-100 dark:bg-teal-950/70 px-2 py-0.5 rounded-md text-[11px]">
              {subject.name}
            </span>
            <span className="flex items-center gap-1 text-[11px] bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-md font-medium">
              <Layers className="w-3 h-3" />
              {phase.title}
            </span>
          </div>
        </div>

        <button
          onClick={handleResume}
          className="flex-shrink-0 mt-1 flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md shadow-teal-600/25 active:scale-95 transition-all"
        >
          <span>Resume</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
