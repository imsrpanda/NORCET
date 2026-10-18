import React from 'react';
import { 
  Clock, 
  FileText, 
  Play, 
  RotateCcw, 
  CheckCircle, 
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import { FullExamSet, PYQQuestion, CBTExamResult } from '../../types';
import { triggerHaptic } from '../../utils/haptics';

interface ExamSetCardProps {
  examSet: FullExamSet;
  questions: PYQQuestion[];
  latestResult?: CBTExamResult;
  onStartExam: (examSet: FullExamSet, questions: PYQQuestion[]) => void;
  onBrowseQuestions: (examSet: FullExamSet, questions: PYQQuestion[]) => void;
}

export const ExamSetCard: React.FC<ExamSetCardProps> = ({
  examSet,
  questions,
  latestResult,
  onStartExam,
  onBrowseQuestions,
}) => {
  const getBadgeColors = (variant: FullExamSet['badgeVariant']) => {
    switch (variant) {
      case 'indigo':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'purple':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'amber':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'teal':
      default:
        return 'bg-teal-500/10 text-teal-400 border-teal-500/30';
    }
  };

  // Group questions by subject count
  const subjectCounts: Record<string, number> = {};
  questions.forEach((q) => {
    const key = q.subjectId.replace('subj_', '').replace(/_\d+$/, '').toUpperCase();
    subjectCounts[key] = (subjectCounts[key] || 0) + 1;
  });

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-5 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden group">
      {/* Top Bar: Badges & Year */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
            {examSet.year}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getBadgeColors(examSet.badgeVariant)}`}>
            {examSet.badge}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-teal-500" />
            <span>{examSet.durationMinutes} Mins</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-indigo-500" />
            <span>{questions.length} Qs</span>
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
          {examSet.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {examSet.description}
        </p>
      </div>

      {/* Subject Distribution Pills */}
      <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Subjects:</span>
        {Object.entries(subjectCounts).map(([sub, count]) => (
          <span
            key={sub}
            className="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
          >
            {sub} ({count})
          </span>
        ))}
        <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono ml-auto font-semibold">
          -0.33 Neg
        </span>
      </div>

      {/* Previous Attempt Summary if Available */}
      {latestResult && (
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
              latestResult.accuracy >= 60 
                ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30' 
                : 'bg-amber-500/10 text-amber-500 border border-amber-500/30'
            }`}>
              {latestResult.accuracy >= 60 ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Last Score</span>
              <div className="font-mono font-black text-slate-900 dark:text-white">
                {latestResult.score} / {latestResult.maxScore} pts ({latestResult.accuracy}% Acc)
              </div>
            </div>
          </div>

          <div className="text-right text-[10px] text-slate-400 font-mono">
            {new Date(latestResult.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1">
        <button
          id={`start-exam-${examSet.id}`}
          onClick={() => {
            triggerHaptic('success');
            onStartExam(examSet, questions);
          }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 active:scale-95 transition-all"
        >
          {latestResult ? (
            <>
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Exam</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Give Full Exam ({questions.length} Qs • {examSet.durationMinutes}m)</span>
            </>
          )}
        </button>

        <button
          id={`browse-exam-${examSet.id}`}
          onClick={() => {
            triggerHaptic('light');
            onBrowseQuestions(examSet, questions);
          }}
          className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          title="Browse Questions with Instant Clinical Rationales"
        >
          <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
          <span className="hidden sm:inline">Practice Mode</span>
        </button>
      </div>
    </div>
  );
};
