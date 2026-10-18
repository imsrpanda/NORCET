import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Play, 
  BookOpen, 
  Filter, 
  History,
  FileCheck2,
  Search,
  Calendar,
  Sparkles,
  Layers
} from 'lucide-react';
import { 
  SEED_PYQ_QUESTIONS, 
  PREVIOUS_YEAR_EXAM_SETS, 
  getQuestionsForExamSet 
} from '../../data/pyqQuestions';
import { PracticeCard } from './PracticeCard';
import { ExamSetCard } from './ExamSetCard';
import { CBTExamModal } from './CBTExamModal';
import { CBTResultModal } from './CBTResultModal';
import { CBTExamResult, FullExamSet, PYQQuestion } from '../../types';
import { useAppStore } from '../../store/useAppStore';
import { triggerHaptic } from '../../utils/haptics';

export const PYQArenaView: React.FC = () => {
  const { examResults } = useAppStore();
  
  // Arena Navigation Mode: 'exam-sets' (Full Previous Year Papers) or 'practice-bank' (Instant Rationale)
  const [arenaMode, setArenaMode] = useState<'exam-sets' | 'practice-bank'>('exam-sets');
  
  // Filters for Full Exam Sets
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('All');
  const [selectedSessionType, setSelectedSessionType] = useState<string>('All');

  // Filters for Practice Bank
  const [selectedPracticeExam, setSelectedPracticeExam] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active CBT Exam State
  const [isCBTActive, setIsCBTActive] = useState(false);
  const [activeExamSet, setActiveExamSet] = useState<FullExamSet | null>(null);
  const [activeExamQuestions, setActiveExamQuestions] = useState<PYQQuestion[]>(SEED_PYQ_QUESTIONS);
  const [activeResult, setActiveResult] = useState<CBTExamResult | null>(null);

  // Available Years
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(PREVIOUS_YEAR_EXAM_SETS.map((s) => s.year))).sort((a, b) => b - a);
    return ['All', ...years.map(String)];
  }, []);

  // Filtered Exam Sets
  const filteredExamSets = useMemo(() => {
    return PREVIOUS_YEAR_EXAM_SETS.filter((set) => {
      // Year filter
      if (selectedYearFilter !== 'All' && String(set.year) !== selectedYearFilter) {
        return false;
      }
      // Session filter
      if (selectedSessionType === 'Stage I' && !set.session.includes('Stage I')) {
        return false;
      }
      if (selectedSessionType === 'Stage II' && !set.session.includes('Stage II')) {
        return false;
      }
      if (selectedSessionType === 'Central' && set.exam !== 'ESIC' && set.exam !== 'RRB' && set.exam !== 'DSSSB') {
        return false;
      }
      return true;
    });
  }, [selectedYearFilter, selectedSessionType]);

  // Filtered Practice Questions
  const filteredPracticeQuestions = useMemo(() => {
    return SEED_PYQ_QUESTIONS.filter((q) => {
      if (selectedPracticeExam !== 'All' && q.exam !== selectedPracticeExam) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesText = 
          q.scenarioQuestion.toLowerCase().includes(query) ||
          q.topicTitle.toLowerCase().includes(query) ||
          q.clinicalTag.toLowerCase().includes(query) ||
          q.clinicalRationale.keyTakeaway.toLowerCase().includes(query);
        if (!matchesText) return false;
      }
      return true;
    });
  }, [selectedPracticeExam, searchQuery]);

  // Handler to launch full exam CBT
  const handleLaunchFullExam = (examSet: FullExamSet, questions: PYQQuestion[]) => {
    triggerHaptic('success');
    setActiveExamSet(examSet);
    setActiveExamQuestions(questions);
    setIsCBTActive(true);
  };

  // Handler to switch to practice mode for a specific paper
  const handleBrowsePaperQuestions = (examSet: FullExamSet, _questions: PYQQuestion[]) => {
    triggerHaptic('light');
    if (examSet.exam === 'ESIC' || examSet.exam === 'RRB') {
      setSelectedPracticeExam('ESIC');
    } else {
      setSelectedPracticeExam('AIIMS NORCET');
    }
    setArenaMode('practice-bank');
  };

  // Quick launch default recommended exam (NORCET 2024 Stage I)
  const handleQuickLaunchDefault = () => {
    const defaultSet = PREVIOUS_YEAR_EXAM_SETS[0] || PREVIOUS_YEAR_EXAM_SETS[PREVIOUS_YEAR_EXAM_SETS.length - 1];
    const questions = getQuestionsForExamSet(defaultSet.id);
    handleLaunchFullExam(defaultSet, questions);
  };

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      {/* Hero Banner: Previous Year Papers & CBT Simulator */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 text-white p-5 border border-indigo-700/30 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30">
              <Trophy className="w-3.5 h-3.5 text-teal-300" />
              <span>Previous Year Full Question Sets</span>
            </span>
            <span className="text-[11px] font-mono text-teal-300 bg-white/10 px-2 py-0.5 rounded-md">
              Official Pattern • -1/3 Negative Marking
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span>Previous Year Full Exam Arena</span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Select an official exam year (AIIMS NORCET 2024, 2023, ESIC, RRB) and take the complete timed exam with AIIMS-style question palette, countdown timer, and automated percentile analytics.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleQuickLaunchDefault}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-teal-500/25 active:scale-95 transition-all"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Give Full AIIMS NORCET 2024 Exam (100 Qs • 90 Mins)</span>
            </button>
            <button
              onClick={() => {
                triggerHaptic('light');
                const megaSet = PREVIOUS_YEAR_EXAM_SETS.find(s => s.id === 'all-india-grand-mock') || PREVIOUS_YEAR_EXAM_SETS[PREVIOUS_YEAR_EXAM_SETS.length - 1];
                handleLaunchFullExam(megaSet, SEED_PYQ_QUESTIONS);
              }}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 active:scale-95 transition-all"
            >
              <Layers className="w-4 h-4 text-amber-300" />
              <span>All-India Grand Mock ({SEED_PYQ_QUESTIONS.length} Qs)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mode Segment Switcher: Full Papers vs Practice Bank */}
      <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <button
          onClick={() => {
            triggerHaptic('light');
            setArenaMode('exam-sets');
          }}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-black transition-all ${
            arenaMode === 'exam-sets'
              ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm border border-slate-200/60 dark:border-slate-700/60'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileCheck2 className="w-4 h-4" />
          <span>Previous Year Full Papers ({PREVIOUS_YEAR_EXAM_SETS.length})</span>
        </button>

        <button
          onClick={() => {
            triggerHaptic('light');
            setArenaMode('practice-bank');
          }}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-black transition-all ${
            arenaMode === 'practice-bank'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-200/60 dark:border-slate-700/60'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Practice Bank ({SEED_PYQ_QUESTIONS.length} Qs)</span>
        </button>
      </div>

      {/* TAB 1: PREVIOUS YEAR FULL PAPERS */}
      {arenaMode === 'exam-sets' && (
        <div className="space-y-4">
          {/* Year & Session Filtering Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            {/* Year Chips */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1 flex-shrink-0">
                <Calendar className="w-3.5 h-3.5 text-teal-500" />
                <span>Select Year:</span>
              </span>
              <div className="flex items-center gap-1.5">
                {availableYears.map((yr) => {
                  const isSelected = selectedYearFilter === yr;
                  return (
                    <button
                      key={yr}
                      onClick={() => {
                        triggerHaptic('light');
                        setSelectedYearFilter(yr);
                      }}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-teal-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {yr === 'All' ? 'All Years' : yr}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Session Type Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {['All', 'Stage I', 'Stage II', 'Central'].map((s) => {
                const isSelected = selectedSessionType === s;
                return (
                  <button
                    key={s}
                    onClick={() => {
                      triggerHaptic('light');
                      setSelectedSessionType(s);
                    }}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {s === 'All' ? 'All Papers' : s === 'Central' ? 'Central (ESIC/RRB)' : `${s} CBT`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Paper Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredExamSets.map((set) => {
              const questions = getQuestionsForExamSet(set.id);
              // Find latest result for this exam
              const latestResult = examResults.find(
                (r) => r.examName === set.title || r.examName.toLowerCase().includes(set.shortTitle.toLowerCase())
              );

              return (
                <ExamSetCard
                  key={set.id}
                  examSet={set}
                  questions={questions}
                  latestResult={latestResult}
                  onStartExam={handleLaunchFullExam}
                  onBrowseQuestions={handleBrowsePaperQuestions}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: PRACTICE BANK WITH INSTANT RATIONALE */}
      {arenaMode === 'practice-bank' && (
        <div className="space-y-4">
          {/* Exam Filter Chips & Search Bar */}
          <div className="space-y-3 bg-white dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, procedure, or drug (e.g. transfusion, potassium, cannula)..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-0.5 no-scrollbar">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Exam Filter:</span>
              </div>

              <div className="flex items-center gap-1.5">
                {['All', 'AIIMS NORCET', 'ESIC', 'RRB', 'DSSSB'].map((filter) => {
                  const isSelected = selectedPracticeExam === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => {
                        triggerHaptic('light');
                        setSelectedPracticeExam(filter);
                      }}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Practice Questions List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Interactive Practice Mode ({filteredPracticeQuestions.length} Questions)</span>
              </h3>
              <span className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
                Instant Rationale Mode
              </span>
            </div>

            <div className="space-y-3">
              {filteredPracticeQuestions.map((q, idx) => (
                <PracticeCard key={q.id} question={q} index={idx} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Test Attempt History */}
      {examResults.length > 0 && (
        <div className="pt-4 space-y-2.5">
          <div className="flex items-center gap-1.5 px-1 text-xs font-bold text-slate-700 dark:text-slate-300">
            <History className="w-4 h-4 text-indigo-500" />
            <span>Recent Full Mock Exam Attempts ({examResults.length})</span>
          </div>

          <div className="space-y-2">
            {examResults.slice(0, 4).map((res) => (
              <div
                key={res.id}
                className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs shadow-xs"
              >
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white leading-tight">
                    {res.examName}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {new Date(res.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })} • {res.correctCount} Correct, {res.wrongCount} Wrong, {res.skippedCount} Skipped • {Math.round(res.timeSpentSeconds / 60)}m taken
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="font-mono font-black text-sm text-teal-600 dark:text-teal-400">
                    Score: {res.score}/{res.maxScore}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    res.accuracy >= 60 
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                  }`}>
                    {res.accuracy}% Accuracy
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Full CBT Exam Modal */}
      {isCBTActive && (
        <CBTExamModal
          questions={activeExamQuestions}
          examTitle={activeExamSet?.title || 'AIIMS NORCET Simulation Engine'}
          examYear={activeExamSet?.year}
          examSession={activeExamSet?.session}
          durationMinutes={activeExamSet?.durationMinutes || 15}
          onClose={() => setIsCBTActive(false)}
          onFinishTest={(result) => {
            setIsCBTActive(false);
            setActiveResult(result);
          }}
        />
      )}

      {/* CBT Result Modal */}
      {activeResult && (
        <CBTResultModal
          result={activeResult}
          onClose={() => setActiveResult(null)}
          onReviewMode={() => {
            setActiveResult(null);
            setArenaMode('practice-bank');
          }}
        />
      )}
    </div>
  );
};
