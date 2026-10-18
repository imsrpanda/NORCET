import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Clock, 
  Bookmark, 
  ChevronRight, 
  Grid, 
  AlertCircle,
  Save,
  Trash2
} from 'lucide-react';
import { PYQQuestion, QuestionPaletteState, CBTExamResult } from '../../types';
import { appStore } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

interface CBTExamModalProps {
  questions: PYQQuestion[];
  examTitle?: string;
  examYear?: number;
  examSession?: string;
  durationMinutes?: number;
  onClose: () => void;
  onFinishTest: (result: CBTExamResult) => void;
}

const SUBJECT_NAMES: Record<string, string> = {
  subj_fon_01: 'Fundamentals of Nursing',
  subj_msn_02: 'Medical-Surgical Nursing',
  subj_obg_03: 'Obstetric & Gynecological',
  subj_peds_04: 'Child Health (Pediatrics)',
  subj_psych_05: 'Mental Health (Psychiatry)',
  subj_chn_06: 'Community Health & Epidemiology',
  subj_pharm_07: 'Clinical Pharmacology & Allied',
  subj_apt_08: 'General Intelligence & Aptitude',
};

export const CBTExamModal: React.FC<CBTExamModalProps> = ({ 
  questions, 
  examTitle = 'AIIMS NORCET Simulation Engine',
  examYear,
  durationMinutes = 15,
  onClose, 
  onFinishTest 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalDurationSeconds = Math.max(60, durationMinutes * 60);
  const [timeLeft, setTimeLeft] = useState(totalDurationSeconds);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  // Track status for each question
  const [paletteStates, setPaletteStates] = useState<Record<number, QuestionPaletteState>>(() => {
    const initial: Record<number, QuestionPaletteState> = {};
    questions.forEach((_, idx) => {
      initial[idx] = {
        status: idx === 0 ? 'not_answered' : 'not_visited',
      };
    });
    return initial;
  });

  const [selectedOptions, setSelectedOptions] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentQ = questions[currentIndex];
  const currentSelection = selectedOptions[currentIndex];

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    triggerHaptic('light');
    setSelectedOptions((prev) => ({
      ...prev,
      [currentIndex]: optId,
    }));
  };

  const handleClearResponse = () => {
    triggerHaptic('light');
    setSelectedOptions((prev) => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });

    setPaletteStates((prev) => ({
      ...prev,
      [currentIndex]: {
        ...prev[currentIndex],
        status: 'not_answered',
        selectedOption: undefined,
      },
    }));
  };

  const handleSaveAndNext = () => {
    triggerHaptic('medium');
    const isAnswered = selectedOptions[currentIndex] !== undefined;

    setPaletteStates((prev) => ({
      ...prev,
      [currentIndex]: {
        status: isAnswered ? 'answered' : 'not_answered',
        selectedOption: selectedOptions[currentIndex],
      },
    }));

    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (paletteStates[nextIdx]?.status === 'not_visited') {
        setPaletteStates((prev) => ({
          ...prev,
          [nextIdx]: { status: 'not_answered' },
        }));
      }
    }
  };

  const handleMarkForReviewAndNext = () => {
    triggerHaptic('light');
    setPaletteStates((prev) => ({
      ...prev,
      [currentIndex]: {
        status: 'marked_for_review',
        selectedOption: selectedOptions[currentIndex],
      },
    }));

    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (paletteStates[nextIdx]?.status === 'not_visited') {
        setPaletteStates((prev) => ({
          ...prev,
          [nextIdx]: { status: 'not_answered' },
        }));
      }
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    triggerHaptic('light');
    setCurrentIndex(idx);
    setIsPaletteOpen(false);

    if (paletteStates[idx]?.status === 'not_visited') {
      setPaletteStates((prev) => ({
        ...prev,
        [idx]: { status: 'not_answered' },
      }));
    }
  };

  const handleSubmitTest = () => {
    triggerHaptic('success');
    let correct = 0;
    let wrong = 0;
    let answered = 0;

    questions.forEach((q, idx) => {
      const chosen = selectedOptions[idx];
      if (chosen !== undefined) {
        answered++;
        if (chosen === q.correctOptionId) {
          correct++;
        } else {
          wrong++;
        }
      }
    });

    const skipped = questions.length - answered;
    const negativeMarks = wrong * 0.33;
    const rawScore = correct * 1 - negativeMarks;
    const score = Math.max(0, Math.round(rawScore * 100) / 100);
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const timeSpent = Math.max(1, totalDurationSeconds - timeLeft);

    // Calculate dynamic subject breakdown
    const subjectBreakdown: Record<string, { total: number; correct: number; wrong: number }> = {};
    questions.forEach((q, idx) => {
      const chosen = selectedOptions[idx];
      const sName = SUBJECT_NAMES[q.subjectId] || 'Clinical Nursing';
      if (!subjectBreakdown[sName]) {
        subjectBreakdown[sName] = { total: 0, correct: 0, wrong: 0 };
      }
      subjectBreakdown[sName].total++;
      if (chosen !== undefined) {
        if (chosen === q.correctOptionId) {
          subjectBreakdown[sName].correct++;
        } else {
          subjectBreakdown[sName].wrong++;
        }
      }
    });

    const result: CBTExamResult = {
      id: `cbt-${Date.now()}`,
      date: new Date().toISOString(),
      examName: examTitle,
      totalQuestions: questions.length,
      answeredCount: answered,
      correctCount: correct,
      wrongCount: wrong,
      skippedCount: skipped,
      score,
      maxScore: questions.length,
      accuracy,
      timeSpentSeconds: timeSpent,
      negativeMarks,
      subjectBreakdown,
    };

    appStore.saveExamResult(result);
    onFinishTest(result);
  };

  // Timer format
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isTimeCritical = timeLeft < 120;

  // Counts for palette
  const answeredCount = Object.values(paletteStates).filter((s) => s.status === 'answered').length;
  const reviewCount = Object.values(paletteStates).filter((s) => s.status === 'marked_for_review').length;
  const notAnsweredCount = Object.values(paletteStates).filter((s) => s.status === 'not_answered').length;

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-slate-900 text-slate-100 flex flex-col overflow-hidden font-sans w-screen h-screen">
      {/* Top AIIMS Style Header Bar */}
      <header className="bg-slate-950 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center font-black text-white text-xs flex-shrink-0">
            CBT
          </div>
          <div className="min-w-0 truncate">
            <h1 className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
              {examTitle}
            </h1>
            <p className="text-[10px] text-teal-400 font-mono">
              {examYear ? `${examYear} • ` : ''}Marking: +1.00 / -0.33 Negative
            </p>
          </div>
        </div>

        {/* Right Info: Timer & Palette Trigger */}
        <div className="flex items-center gap-2.5">
          {/* Countdown Clock */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold border ${
              isTimeCritical
                ? 'bg-rose-950/70 border-rose-600 text-rose-300 animate-pulse'
                : 'bg-slate-900 border-slate-700 text-teal-400'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>

          {/* Palette button */}
          <button
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Palette</span>
          </button>

          {/* Abort / Exit test */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            title="Exit Exam"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Examination Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-w-3xl w-full mx-auto space-y-4">
        {/* Question Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              {currentQ.topicTitle}
            </span>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            Marks: <span className="text-emerald-400 font-bold">+1</span> | <span className="text-rose-400 font-bold">-0.33</span>
          </div>
        </div>

        {/* Clinical Scenario Stem */}
        <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-sm sm:text-base font-medium leading-relaxed text-slate-100">
          {currentQ.scenarioQuestion}
        </div>

        {/* Option Selection Radio Tiles */}
        <div className="space-y-2.5 pt-2">
          {currentQ.options.map((opt) => {
            const isSelected = currentSelection === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-teal-950/70 border-teal-500 text-teal-100 ring-1 ring-teal-500'
                    : 'bg-slate-800/40 border-slate-700 hover:bg-slate-800 text-slate-200'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-teal-500 text-slate-950'
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {opt.id}
                </div>
                <div className="flex-1 pt-0.5 leading-snug">{opt.text}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Sticky Action Console */}
      <footer className="bg-slate-950 border-t border-slate-800 p-3 sm:p-4 flex-shrink-0 pb-safe">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left Controls: Clear & Mark for Review */}
          <div className="flex items-center gap-2">
            <button
              id="cbt-clear-btn"
              onClick={handleClearResponse}
              disabled={currentSelection === undefined}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>

            <button
              id="cbt-mark-review-btn"
              onClick={handleMarkForReviewAndNext}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-purple-950/70 hover:bg-purple-900 border border-purple-800 text-purple-200"
            >
              <Bookmark className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Mark for</span> Review & Next
            </button>
          </div>

          {/* Right Controls: Save & Next / Submit Test */}
          <div className="flex items-center gap-2">
            <button
              id="cbt-save-next-btn"
              onClick={handleSaveAndNext}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-600/20 active:scale-95 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="cbt-submit-btn"
              onClick={() => setShowConfirmSubmit(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </footer>

      {/* Slide-out Question Palette Drawer */}
      {isPaletteOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            onClick={() => setIsPaletteOpen(false)}
          />
          <div className="relative z-10 w-80 max-w-[85vw] h-full bg-slate-900 border-l border-slate-800 p-4 flex flex-col justify-between overflow-y-auto animate-fadeIn">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Grid className="w-4 h-4 text-teal-400" />
                  <span>Question Palette</span>
                </h3>
                <button
                  onClick={() => setIsPaletteOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status Legend */}
              <div className="grid grid-cols-2 gap-2 my-4 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-emerald-600" />
                  <span>Answered ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-rose-600" />
                  <span>Not Answered ({notAnsweredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-purple-600" />
                  <span>Review ({reviewCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-slate-700" />
                  <span>Not Visited</span>
                </div>
              </div>

              {/* Grid of Question Numbers */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                {questions.map((_, idx) => {
                  const state = paletteStates[idx]?.status || 'not_visited';
                  const isCurrent = idx === currentIndex;

                  let colorClass = 'bg-slate-800 text-slate-400 border-slate-700';
                  if (state === 'answered') {
                    colorClass = 'bg-emerald-600 text-white border-emerald-500 font-bold';
                  } else if (state === 'marked_for_review') {
                    colorClass = 'bg-purple-600 text-white border-purple-500 font-bold';
                  } else if (state === 'not_answered') {
                    colorClass = 'bg-rose-600 text-white border-rose-500 font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`h-10 rounded-xl font-mono text-xs flex items-center justify-center border transition-all ${colorClass} ${
                        isCurrent ? 'ring-2 ring-white scale-105' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setIsPaletteOpen(false);
                  setShowConfirmSubmit(true);
                }}
                className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold text-xs"
              >
                Submit Test Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Submit Dialog */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 max-w-sm w-full space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Submit Examination?</h3>
                <p className="text-xs text-slate-400">Are you sure you want to conclude?</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/80 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Answered Questions:</span>
                <span className="font-bold text-emerald-400">{answeredCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Marked for Review:</span>
                <span className="font-bold text-purple-400">{reviewCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Unanswered / Remaining:</span>
                <span className="font-bold text-rose-400">{questions.length - answeredCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                id="cbt-cancel-submit-btn"
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800"
              >
                Continue Test
              </button>
              <button
                id="cbt-confirm-submit-btn"
                onClick={handleSubmitTest}
                className="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};
