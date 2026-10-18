import React, { useState, useEffect } from 'react';
import { SubjectHeader } from './SubjectHeader';
import { SubtopicSection } from './SubtopicSection';
import { ContextDrawer } from './ContextDrawer';
import { useAppStore } from '../../store/useAppStore';
import { Layers, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { triggerHaptic } from '../../utils/haptics';

export const LearningDeskView: React.FC = () => {
  const { syllabus, selectedSubjectId, userProgress } = useAppStore();

  const currentSubject = syllabus.find((s) => s.id === selectedSubjectId) || syllabus[0];
  const subtopics = currentSubject.subtopics;

  // Track expanded state for each subtopic (collapsed by default)
  const [expandedSubtopicIds, setExpandedSubtopicIds] = useState<Record<string, boolean>>({});

  // Reset all subtopics to collapsed whenever a subject is clicked / selected
  useEffect(() => {
    setExpandedSubtopicIds({});
  }, [selectedSubjectId]);

  const toggleSubtopic = (subtopicId: string) => {
    triggerHaptic('light');
    setExpandedSubtopicIds((prev) => ({
      ...prev,
      [subtopicId]: !prev[subtopicId]
    }));
  };

  const allAreExpanded = subtopics.length > 0 && subtopics.every((st) => !!expandedSubtopicIds[st.id]);

  const handleToggleExpandAll = () => {
    triggerHaptic('light');
    const nextState: Record<string, boolean> = {};
    subtopics.forEach((st) => {
      nextState[st.id] = !allAreExpanded;
    });
    setExpandedSubtopicIds(nextState);
  };

  const handleQuickJump = (subtopicId: string) => {
    triggerHaptic('light');
    // Ensure the clicked subtopic is expanded
    setExpandedSubtopicIds((prev) => ({
      ...prev,
      [subtopicId]: true
    }));

    // Scroll into view
    setTimeout(() => {
      const el = document.getElementById(`subtopic-${subtopicId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Calculate subject overall metrics
  let totalBullets = 0;
  let completedBullets = 0;
  let totalPhases = 0;

  subtopics.forEach((st) => {
    totalPhases += st.phases.length;
    st.phases.forEach((ph) => {
      ph.bulletPoints.forEach((b) => {
        totalBullets += 1;
        if (userProgress.completedBulletIds[b.id]) {
          completedBullets += 1;
        }
      });
    });
  });

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      {/* Level 1: Subject Header (Switchers & Progress) */}
      <SubjectHeader />

      {/* Subtopic Quick-Jump Anchor Bar */}
      <div className="p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>All Subtopics ({subtopics.length}) • Quick Jump</span>
          </span>

          <button
            onClick={handleToggleExpandAll}
            className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
          >
            {allAreExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Collapse All</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                <span>Expand All</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Jump Pill Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {subtopics.map((st, idx) => {
            const stCompleted = st.phases.every((p) =>
              p.bulletPoints.every((b) => userProgress.completedBulletIds[b.id])
            );

            return (
              <button
                key={st.id}
                onClick={() => handleQuickJump(st.id)}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all shadow-2xs hover:shadow-xs active:scale-95"
              >
                <span className="w-4 h-4 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-[10px] flex items-center justify-center font-extrabold">
                  {idx + 1}
                </span>
                <span className="max-w-[140px] truncate">{st.title.split(',')[0]}</span>
                {stCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Overview Stats Bar */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 dark:text-slate-400">
        <span>
          Showing all <strong>{subtopics.length} Subtopics</strong> • {totalPhases} Phases • {totalBullets} Clinical Concepts
        </span>
        <span className="font-semibold text-teal-700 dark:text-teal-400">
          {completedBullets} / {totalBullets} Mastered
        </span>
      </div>

      {/* Level 2 & 3 & 4: All Subtopics Rendered Sequentially with Full Phases & Bullets */}
      <div className="space-y-4">
        {subtopics.map((subtopic, index) => (
          <SubtopicSection
            key={subtopic.id}
            subtopic={subtopic}
            index={index}
            isExpanded={!!expandedSubtopicIds[subtopic.id]}
            onToggleExpand={() => toggleSubtopic(subtopic.id)}
          />
        ))}
      </div>

      {/* Level 5: Bottom Sheet Context Drawer */}
      <ContextDrawer />
    </div>
  );
};
