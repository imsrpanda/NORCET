export type ImportanceTier = 'High' | 'Moderate' | 'Low';

export interface ContextBlock {
  heading: string;
  markdownContent: string;
  clinicalPearl?: string; // Nurse's Priority Action / Gold standard (Amber)
  clinicalAlert?: string; // Absolute Contraindications / Critical NORCET trap (Rose)
  normalValues?: { label: string; value: string }[];
  linkedPyqIds: string[];
}

export interface BulletPointItem {
  id: string;
  label: string;
  isHighYield: boolean;
  context: ContextBlock;
}

export interface LearningPhase {
  id: string;
  order: 1 | 2 | 3 | 4;
  title: string; // e.g., "1. Foundations", "2. Protocol Execution"
  bulletPoints: BulletPointItem[];
}

export interface Subtopic {
  id: string;
  title: string;
  importanceTier: ImportanceTier;
  phases: LearningPhase[];
}

export interface SubjectTopic {
  id: string;
  name: string;
  code?: string;
  iconName: string; // Lucide icon identifier
  weightagePercentage: number;
  color?: string;
  subtopics: Subtopic[];
}

export interface UserProgressState {
  completedBulletIds: Record<string, boolean>;
  bookmarkedBulletIds: Record<string, boolean>;
  lastAccessed: {
    subjectId: string;
    subtopicId: string;
    phaseId: string;
    bulletId?: string;
  } | null;
  dailyStreak: number;
  lastActiveDate: string;
}

export interface PYQQuestion {
  id: string;
  exam: 'AIIMS NORCET' | 'ESIC' | 'RRB' | 'DSSSB';
  year: number;
  session?: string;
  subjectId: string;
  topicTitle: string;
  scenarioQuestion: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  clinicalRationale: {
    keyTakeaway: string;
    explanation: string;
    whyOthersAreWrong?: { option: string; reason: string }[];
    priorityAlert?: string;
  };
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  clinicalTag: string;
}

export interface QuestionPaletteState {
  status: 'answered' | 'not_answered' | 'marked_for_review' | 'not_visited';
  selectedOption?: 'A' | 'B' | 'C' | 'D';
}

export interface CBTExamResult {
  id: string;
  date: string;
  examName: string;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  score: number;
  maxScore: number;
  accuracy: number;
  timeSpentSeconds: number;
  negativeMarks: number;
  subjectBreakdown: Record<string, { total: number; correct: number; wrong: number }>;
}

export interface FullExamSet {
  id: string;
  exam: 'AIIMS NORCET' | 'ESIC' | 'RRB' | 'DSSSB' | 'All-India Mock';
  year: number;
  session: string;
  title: string;
  shortTitle: string;
  durationMinutes: number;
  totalMarks?: number;
  description: string;
  badge: string;
  badgeVariant: 'teal' | 'indigo' | 'purple' | 'amber' | 'emerald';
  targetAudience: string;
}

export interface ClinicalCheatSheet {
  id: string;
  title: string;
  category: 'IV Cannula' | 'ECG Leads' | 'Drug Antidotes' | 'Critical Lab Values' | 'Oxygen Delivery' | 'Obstetric Drugs' | 'Endocrine Drugs' | 'Immunization' | string;
  description: string;
  tableHeaders: string[];
  rows: (string | { text: string; badge?: string; highlight?: boolean })[][];
  pearl: string;
}

