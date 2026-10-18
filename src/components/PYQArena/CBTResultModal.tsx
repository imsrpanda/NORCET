import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  MinusCircle, 
  Clock, 
  Award, 
  ArrowRight
} from 'lucide-react';
import { CBTExamResult } from '../../types';
import { triggerHaptic } from '../../utils/haptics';

interface CBTResultModalProps {
  result: CBTExamResult;
  onClose: () => void;
  onReviewMode: () => void;
}

export const CBTResultModal: React.FC<CBTResultModalProps> = ({ result, onClose, onReviewMode }) => {
  useEffect(() => {
    if (result.accuracy >= 60) {
      triggerHaptic('success');
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  }, [result]);

  const minutes = Math.floor(result.timeSpentSeconds / 60);
  const seconds = result.timeSpentSeconds % 60;

  return createPortal(
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn w-screen h-screen">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-md w-full p-5 sm:p-6 overflow-hidden relative space-y-5">
        {/* Header Ribbon */}
        <div className="text-center space-y-1.5">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
            <Trophy className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            AIIMS NORCET CBT Result Card
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {result.score >= 3 ? 'Outstanding Performance!' : 'Test Completed'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Strict AIIMS NORCET Marking: +1 Correct, -0.33 Negative Marking
          </p>
        </div>

        {/* Primary Score Board */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
          <div className="text-center border-r border-slate-200 dark:border-slate-700/80 pr-2">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
              Final Net Score
            </span>
            <div className="text-3xl font-black font-mono text-teal-600 dark:text-teal-400 mt-0.5">
              {result.score > 0 ? `+${result.score}` : result.score}
            </div>
            <span className="text-[10px] text-slate-400">Max: {result.maxScore}.00</span>
          </div>

          <div className="text-center pl-2">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
              Accuracy Rate
            </span>
            <div className="text-3xl font-black font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">
              {result.accuracy}%
            </div>
            <span className="text-[10px] text-slate-400">Net Efficiency</span>
          </div>
        </div>

        {/* Breakdown Badges */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Correct</span>
            </div>
            <span className="text-lg font-mono font-black text-emerald-700 dark:text-emerald-300">
              {result.correctCount}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800/80">
            <div className="flex items-center justify-center gap-1 text-rose-600 dark:text-rose-400 font-bold mb-0.5">
              <XCircle className="w-3.5 h-3.5" />
              <span>Wrong</span>
            </div>
            <span className="text-lg font-mono font-black text-rose-700 dark:text-rose-300">
              {result.wrongCount}
            </span>
            <div className="text-[9px] text-rose-500 font-semibold mt-0.5">
              -{result.negativeMarks.toFixed(2)} pts
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-400 font-bold mb-0.5">
              <MinusCircle className="w-3.5 h-3.5" />
              <span>Skipped</span>
            </div>
            <span className="text-lg font-mono font-black text-slate-700 dark:text-slate-300">
              {result.skippedCount}
            </span>
          </div>
        </div>

        {/* Time Spent */}
        <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-600" />
            <span>Time Taken:</span>
          </div>
          <span className="font-mono font-bold">
            {minutes}m {seconds < 10 ? `0${seconds}` : seconds}s
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2">
          <button
            id="cbt-result-review-btn"
            onClick={onReviewMode}
            className="flex-1 py-3 px-4 rounded-xl border border-teal-600 text-teal-700 dark:text-teal-300 font-bold text-xs hover:bg-teal-50 dark:hover:bg-teal-950/60 transition-colors flex items-center justify-center gap-1.5"
          >
            <Award className="w-4 h-4" />
            <span>Review Answers</span>
          </button>

          <button
            id="cbt-result-back-btn"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Back to Arena</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
