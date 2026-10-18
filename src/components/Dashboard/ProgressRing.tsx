import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { calculateOverallProgress } from '../../utils/helpers';

export const ProgressRing: React.FC = () => {
  const { syllabus, userProgress } = useAppStore();
  const { totalBullets, completedBullets, percentage } = calculateOverallProgress(syllabus, userProgress);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
      {/* Text Stats */}
      <div className="flex-1">
        <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-400 mb-1">
          <Award className="w-4 h-4" />
          <span>NORCET SYLLABUS READINESS</span>
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {percentage}% Mastered
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
          <span>
            <strong className="text-slate-800 dark:text-slate-200">{completedBullets}</strong> of{' '}
            {totalBullets} clinical concepts checked
          </span>
        </p>

        {/* Motivational status message */}
        <div className="mt-2 text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg inline-block">
          {percentage > 50
            ? '🔥 Excellent momentum! Keep pushing through phase 3 & 4.'
            : '💡 Tip: Master 2 high-yield bullet points daily to peak on time.'}
        </div>
      </div>

      {/* Circular Progress Meter */}
      <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          {/* Background Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="text-slate-100 dark:text-slate-800"
            strokeWidth="9"
            stroke="currentColor"
            fill="transparent"
          />
          {/* Progress Indicator */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="text-teal-600 dark:text-teal-400 transition-all duration-700 ease-out"
            strokeWidth="9"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono leading-none">
            {percentage}%
          </span>
          <span className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">Done</span>
        </div>
      </div>
    </div>
  );
};
