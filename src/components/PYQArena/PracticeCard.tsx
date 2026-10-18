import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw, 
  Sparkles
} from 'lucide-react';
import { PYQQuestion } from '../../types';
import { triggerHaptic } from '../../utils/haptics';

interface PracticeCardProps {
  question: PYQQuestion;
  index: number;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ question, index }) => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [showRationale, setShowRationale] = useState(false);

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    if (selectedOption !== null) return; // already chosen
    setSelectedOption(optId);
    setShowRationale(true);

    if (optId === question.correctOptionId) {
      triggerHaptic('success');
    } else {
      triggerHaptic('warning');
    }
  };

  const handleReset = () => {
    triggerHaptic('light');
    setSelectedOption(null);
    setShowRationale(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs space-y-4">
      {/* Header Tag Bar */}
      <div className="flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-mono text-xs font-bold flex items-center justify-center">
            Q{index + 1}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-[11px] border border-indigo-200/80 dark:border-indigo-900/60">
            {question.exam} {question.year}
          </span>
          {question.session && (
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
              • {question.session}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {question.clinicalTag}
          </span>
          {selectedOption !== null && (
            <button
              onClick={handleReset}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Reset question"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Scenario Stem */}
      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
        {question.scenarioQuestion}
      </div>

      {/* Options List */}
      <div className="space-y-2 pt-1">
        {question.options.map((opt) => {
          const isChosen = selectedOption === opt.id;
          const isCorrect = opt.id === question.correctOptionId;

          let optionStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200';

          if (selectedOption !== null) {
            if (isCorrect) {
              optionStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium ring-1 ring-emerald-500';
            } else if (isChosen && !isCorrect) {
              optionStyle = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500';
            } else {
              optionStyle = 'opacity-60 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400';
            }
          }

          return (
            <button
              key={opt.id}
              disabled={selectedOption !== null}
              onClick={() => handleSelectOption(opt.id)}
              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${optionStyle}`}
            >
              <div
                className={`w-6 h-6 rounded-lg font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 transition-colors ${
                  selectedOption !== null && isCorrect
                    ? 'bg-emerald-600 text-white'
                    : selectedOption !== null && isChosen
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {selectedOption !== null && isCorrect ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : selectedOption !== null && isChosen ? (
                  <XCircle className="w-4 h-4" />
                ) : (
                  opt.id
                )}
              </div>
              <div className="flex-1 pt-0.5 leading-snug">{opt.text}</div>
            </button>
          );
        })}
      </div>

      {/* Immediate Clinical Rationale Disclosure */}
      {selectedOption !== null && (
        <div className="pt-2 animate-fadeIn">
          <button
            onClick={() => setShowRationale(!showRationale)}
            className="flex items-center justify-between w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{showRationale ? 'Hide Clinical Rationale' : 'View Clinical Rationale & Exam Takeaways'}</span>
            </div>
            {showRationale ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showRationale && (
            <div className="mt-2.5 p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3 text-xs leading-relaxed">
              {/* Key Takeaway */}
              <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-900/60 text-teal-900 dark:text-teal-200">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Key Exam Takeaway:</span>
                </div>
                <p>{question.clinicalRationale.keyTakeaway}</p>
              </div>

              {/* In-depth explanation */}
              <p className="text-slate-700 dark:text-slate-300">
                {question.clinicalRationale.explanation}
              </p>

              {/* Priority Alert if any */}
              {question.clinicalRationale.priorityAlert && (
                <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border-l-4 border-rose-500 text-rose-900 dark:text-rose-200 font-medium">
                  {question.clinicalRationale.priorityAlert}
                </div>
              )}

              {/* Why others are wrong */}
              {question.clinicalRationale.whyOthersAreWrong && question.clinicalRationale.whyOthersAreWrong.length > 0 && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-600 dark:text-slate-400 block mb-1.5">
                    Why other choices are incorrect:
                  </span>
                  <div className="space-y-1">
                    {question.clinicalRationale.whyOthersAreWrong.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-rose-500">Option {item.option}:</span>
                        <span>{item.reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
