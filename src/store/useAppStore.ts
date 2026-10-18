import { useSyncExternalStore } from 'react';
import { SubjectTopic, BulletPointItem, UserProgressState, CBTExamResult } from '../types';
import { INITIAL_SYLLABUS_DATA } from '../data/syllabusData';
import { triggerHaptic } from '../utils/haptics';

export interface AppState {
  syllabus: SubjectTopic[];
  userProgress: UserProgressState;
  activeTab: 'dashboard' | 'learning-desk' | 'pyq-arena' | 'revision-vault';
  isDarkMode: boolean;
  selectedSubjectId: string;
  selectedSubtopicId: string;
  selectedPhaseId: string;
  activeContextBullet: BulletPointItem | null;
  examResults: CBTExamResult[];
}

const STORAGE_KEYS = {
  PROGRESS: 'pocket_norcet_progress_v1',
  THEME: 'pocket_norcet_theme_v1',
  RESULTS: 'pocket_norcet_results_v1',
  LAST_TAB: 'pocket_norcet_tab_v1',
};

// Calculate initial streak
const calculateInitialStreak = (storedStreak?: number, lastActive?: string) => {
  const today = new Date().toISOString().split('T')[0];
  if (!lastActive) return 3; // Initial encouragement streak for new students
  if (lastActive === today) return storedStreak || 3;
  
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (lastActive === yesterday) {
    return (storedStreak || 0) + 1;
  }
  return 1;
};

// Initial state loader
const loadInitialState = (): AppState => {
  let savedProgress: UserProgressState = {
    completedBulletIds: {
      'fon-1-1-1': true, // Seed 1 completed item so user sees immediate progress
    },
    bookmarkedBulletIds: {
      'fon-1-1-1': true,
      'msn-1-1-1': true,
    },
    lastAccessed: {
      subjectId: 'fon',
      subtopicId: 'fon-1',
      phaseId: 'fon-1-p1',
      bulletId: 'fon-1-1-1',
    },
    dailyStreak: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
  };

  let isDark = true; // Clinical dark mode default
  let results: CBTExamResult[] = [];
  let activeTab: AppState['activeTab'] = 'dashboard';

  try {
    const rawProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (rawProgress) {
      const parsed = JSON.parse(rawProgress);
      savedProgress = {
        ...savedProgress,
        ...parsed,
        dailyStreak: calculateInitialStreak(parsed.dailyStreak, parsed.lastActiveDate),
        lastActiveDate: new Date().toISOString().split('T')[0],
      };
    }

    const rawTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (rawTheme !== null) {
      isDark = rawTheme === 'dark';
    } else {
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const rawResults = localStorage.getItem(STORAGE_KEYS.RESULTS);
    if (rawResults) {
      results = JSON.parse(rawResults);
    }

    const rawTab = localStorage.getItem(STORAGE_KEYS.LAST_TAB);
    if (rawTab && ['dashboard', 'learning-desk', 'pyq-arena', 'revision-vault'].includes(rawTab)) {
      activeTab = rawTab as AppState['activeTab'];
    }
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  // Set document class for dark mode
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return {
    syllabus: INITIAL_SYLLABUS_DATA,
    userProgress: savedProgress,
    activeTab,
    isDarkMode: isDark,
    selectedSubjectId: savedProgress.lastAccessed?.subjectId || 'fon',
    selectedSubtopicId: savedProgress.lastAccessed?.subtopicId || 'fon-1',
    selectedPhaseId: savedProgress.lastAccessed?.phaseId || 'fon-1-p1',
    activeContextBullet: null,
    examResults: results,
  };
};

let currentState: AppState = loadInitialState();
const listeners = new Set<() => void>();

const notify = () => {
  listeners.forEach((listener) => listener());
};

export const appStore = {
  getState: () => currentState,
  
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  setActiveTab: (tab: AppState['activeTab']) => {
    currentState = { ...currentState, activeTab: tab };
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_TAB, tab);
    } catch {}
    notify();
  },

  setTheme: (isDark: boolean) => {
    currentState = { ...currentState, isDarkMode: isDark };
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
    } catch {}
    notify();
  },

  setSelectedSubject: (subjectId: string) => {
    const subject = currentState.syllabus.find((s) => s.id === subjectId);
    if (!subject) return;
    const firstSubtopic = subject.subtopics[0];
    const firstPhase = firstSubtopic?.phases[0];

    currentState = {
      ...currentState,
      selectedSubjectId: subjectId,
      selectedSubtopicId: firstSubtopic?.id || '',
      selectedPhaseId: firstPhase?.id || '',
    };
    appStore.updateLastAccessed(subjectId, firstSubtopic?.id || '', firstPhase?.id || '');
    notify();
  },

  setSelectedSubtopic: (subtopicId: string) => {
    const subject = currentState.syllabus.find((s) => s.id === currentState.selectedSubjectId);
    const subtopic = subject?.subtopics.find((st) => st.id === subtopicId);
    const firstPhase = subtopic?.phases[0];

    currentState = {
      ...currentState,
      selectedSubtopicId: subtopicId,
      selectedPhaseId: firstPhase?.id || '',
    };
    appStore.updateLastAccessed(currentState.selectedSubjectId, subtopicId, firstPhase?.id || '');
    notify();
  },

  setSelectedPhase: (phaseId: string) => {
    currentState = { ...currentState, selectedPhaseId: phaseId };
    appStore.updateLastAccessed(currentState.selectedSubjectId, currentState.selectedSubtopicId, phaseId);
    notify();
  },

  updateLastAccessed: (subjectId: string, subtopicId: string, phaseId: string, bulletId?: string) => {
    const today = new Date().toISOString().split('T')[0];
    const updatedProgress: UserProgressState = {
      ...currentState.userProgress,
      lastAccessed: { subjectId, subtopicId, phaseId, bulletId },
      lastActiveDate: today,
    };
    currentState = { ...currentState, userProgress: updatedProgress };
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(updatedProgress));
    } catch {}
    notify();
  },

  toggleBulletCompleted: (bulletId: string) => {
    triggerHaptic('success');
    const completed = { ...currentState.userProgress.completedBulletIds };
    const isNowCompleted = !completed[bulletId];
    if (isNowCompleted) {
      completed[bulletId] = true;
    } else {
      delete completed[bulletId];
    }

    const updatedProgress: UserProgressState = {
      ...currentState.userProgress,
      completedBulletIds: completed,
    };
    currentState = { ...currentState, userProgress: updatedProgress };
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(updatedProgress));
    } catch {}
    notify();
  },

  toggleBulletBookmarked: (bulletId: string) => {
    triggerHaptic('light');
    const bookmarked = { ...currentState.userProgress.bookmarkedBulletIds };
    if (bookmarked[bulletId]) {
      delete bookmarked[bulletId];
    } else {
      bookmarked[bulletId] = true;
    }

    const updatedProgress: UserProgressState = {
      ...currentState.userProgress,
      bookmarkedBulletIds: bookmarked,
    };
    currentState = { ...currentState, userProgress: updatedProgress };
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(updatedProgress));
    } catch {}
    notify();
  },

  openContextDrawer: (bullet: BulletPointItem) => {
    triggerHaptic('light');
    currentState = { ...currentState, activeContextBullet: bullet };
    // update last accessed with bullet
    appStore.updateLastAccessed(
      currentState.selectedSubjectId,
      currentState.selectedSubtopicId,
      currentState.selectedPhaseId,
      bullet.id
    );
    notify();
  },

  closeContextDrawer: () => {
    currentState = { ...currentState, activeContextBullet: null };
    notify();
  },

  nextContextBullet: () => {
    triggerHaptic('medium');
    const { syllabus, selectedSubjectId, selectedSubtopicId, selectedPhaseId, activeContextBullet } = currentState;
    const subject = syllabus.find((s) => s.id === selectedSubjectId);
    const subtopic = subject?.subtopics.find((st) => st.id === selectedSubtopicId);
    const phase = subtopic?.phases.find((p) => p.id === selectedPhaseId);

    if (!subtopic || !phase || !activeContextBullet) return;

    const currentIndex = phase.bulletPoints.findIndex((b) => b.id === activeContextBullet.id);
    if (currentIndex !== -1 && currentIndex < phase.bulletPoints.length - 1) {
      // Next bullet in the same phase
      const nextBullet = phase.bulletPoints[currentIndex + 1];
      appStore.openContextDrawer(nextBullet);
    } else {
      // Check if there is a next phase
      const currentPhaseIndex = subtopic.phases.findIndex((p) => p.id === selectedPhaseId);
      if (currentPhaseIndex !== -1 && currentPhaseIndex < subtopic.phases.length - 1) {
        const nextPhase = subtopic.phases[currentPhaseIndex + 1];
        currentState = { ...currentState, selectedPhaseId: nextPhase.id };
        if (nextPhase.bulletPoints.length > 0) {
          appStore.openContextDrawer(nextPhase.bulletPoints[0]);
        } else {
          appStore.closeContextDrawer();
        }
      } else {
        // Last bullet reached
        appStore.closeContextDrawer();
      }
    }
  },

  saveExamResult: (result: CBTExamResult) => {
    const updated = [result, ...currentState.examResults];
    currentState = { ...currentState, examResults: updated };
    try {
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(updated));
    } catch {}
    notify();
  },

  jumpToStudy: (subjectId: string, subtopicId: string, phaseId: string, bulletId?: string) => {
    currentState = {
      ...currentState,
      activeTab: 'learning-desk',
      selectedSubjectId: subjectId,
      selectedSubtopicId: subtopicId,
      selectedPhaseId: phaseId,
    };
    if (bulletId) {
      const subject = currentState.syllabus.find((s) => s.id === subjectId);
      const subtopic = subject?.subtopics.find((st) => st.id === subtopicId);
      const phase = subtopic?.phases.find((p) => p.id === phaseId);
      const bullet = phase?.bulletPoints.find((b) => b.id === bulletId);
      if (bullet) {
        currentState.activeContextBullet = bullet;
      }
    }
    appStore.updateLastAccessed(subjectId, subtopicId, phaseId, bulletId);
    notify();
  }
};

export const useAppStore = () => {
  return useSyncExternalStore(appStore.subscribe, appStore.getState);
};
