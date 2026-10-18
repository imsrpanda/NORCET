import React from 'react';
import { 
  HeartPulse, 
  Activity, 
  Baby, 
  Pill, 
  Brain, 
  ChevronRight, 
  Percent,
  Stethoscope,
  ToyBrick,
  ShieldPlus,
  Calculator
} from 'lucide-react';
import { useAppStore, appStore } from '../../store/useAppStore';
import { calculateSubjectProgress } from '../../utils/helpers';
import { triggerHaptic } from '../../utils/haptics';

export const SubjectGrid: React.FC = () => {
  const { syllabus, userProgress } = useAppStore();

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return HeartPulse;
      case 'Activity':
        return Activity;
      case 'Baby':
        return Baby;
      case 'Smile':
      case 'ToyBrick':
        return ToyBrick;
      case 'Pill':
        return Pill;
      case 'Brain':
        return Brain;
      case 'ShieldPlus':
        return ShieldPlus;
      case 'Calculator':
        return Calculator;
      case 'Stethoscope':
      default:
        return Stethoscope;
    }
  };

  const handleSelectSubject = (subjectId: string) => {
    triggerHaptic('medium');
    appStore.setSelectedSubject(subjectId);
    appStore.setActiveTab('learning-desk');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            NORCET Subject Modules
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Weighted syllabus tracking across 8 clinical domains
          </p>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-1 rounded-md">
          <Percent className="w-3 h-3" />
          <span>NORCET Weightage</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {syllabus.map((subject) => {
          const { completedBullets, totalBullets, percentage } = calculateSubjectProgress(subject, userProgress);
          const Icon = getSubjectIcon(subject.iconName);

          return (
            <div
              key={subject.id}
              onClick={() => handleSelectSubject(subject.id)}
              className="group bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all cursor-pointer shadow-xs hover:shadow-md relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                    style={{ backgroundColor: subject.color || '#0d9488' }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
                      {subject.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {subject.code && <span className="font-mono text-[11px]">{subject.code} •</span>}
                      <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                        {subject.weightagePercentage}% Exam Share
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                    {completedBullets} / {totalBullets} concepts
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] font-mono">
                    {percentage}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${Math.max(percentage, 3)}%`,
                      backgroundColor: subject.color || '#0d9488',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
