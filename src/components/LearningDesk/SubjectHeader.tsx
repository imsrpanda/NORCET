import React, { useState } from 'react';
import { ChevronDown, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAppStore, appStore } from '../../store/useAppStore';
import { calculateSubjectProgress } from '../../utils/helpers';
import { triggerHaptic } from '../../utils/haptics';

export const SubjectHeader: React.FC = () => {
  const { syllabus, selectedSubjectId, userProgress } = useAppStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentSubject = syllabus.find((s) => s.id === selectedSubjectId) || syllabus[0];
  const { completedBullets, totalBullets, percentage } = calculateSubjectProgress(currentSubject, userProgress);

  const handleSelect = (subjectId: string) => {
    triggerHaptic('light');
    appStore.setSelectedSubject(subjectId);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs relative">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Back / Subject Selector */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button
            onClick={() => appStore.setActiveTab('dashboard')}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="relative flex-1 min-w-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1.5 text-left w-full group py-0.5"
            >
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
                  Level 1 • Subject
                </span>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {currentSubject.name}
                </h2>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${isDropdownOpen ? 'rotate-180 text-teal-600' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-72 max-w-[90vw] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl z-40 py-2 divide-y divide-slate-100 dark:divide-slate-800 max-h-80 overflow-y-auto">
                  {syllabus.map((subj) => {
                    const prog = calculateSubjectProgress(subj, userProgress);
                    const isSelected = subj.id === currentSubject.id;

                    return (
                      <button
                        key={subj.id}
                        onClick={() => handleSelect(subj.id)}
                        className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors ${
                          isSelected ? 'bg-teal-50/70 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300' : ''
                        }`}
                      >
                        <div className="min-w-0">
                          <p className={`text-xs font-bold truncate ${isSelected ? 'text-teal-700 dark:text-teal-300' : 'text-slate-800 dark:text-slate-200'}`}>
                            {subj.name}
                          </p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">
                            {subj.weightagePercentage}% Exam Weightage
                          </p>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                          {prog.percentage}%
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Progress Meter */}
        <div className="flex-shrink-0 text-right pl-2 border-l border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-end gap-1 font-mono font-extrabold text-sm sm:text-base text-teal-600 dark:text-teal-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{percentage}%</span>
          </div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
            {completedBullets}/{totalBullets} Mastered
          </span>
        </div>
      </div>

      {/* Thin Subject Progress Line */}
      <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mt-3">
        <div
          className="h-full rounded-full bg-teal-600 dark:bg-teal-500 transition-all duration-500"
          style={{ width: `${Math.max(percentage, 2)}%` }}
        />
      </div>
    </div>
  );
};
