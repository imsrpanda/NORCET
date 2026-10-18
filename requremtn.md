1. Product Requirements Document (PRD)1.1 Product Overview & ArchitectureApp Name (Working Title): NursePulse / PocketNORCETTarget Audience: Nursing students (B.Sc., Post-Basic, GNM) and working nurses preparing for central and state Nursing Officer recruitment exams (AIIMS NORCET Stage I & II, ESIC, RRB, DSSSB).Core Value Proposition: A lightweight, offline-first study companion combining a structured 5-level interactive syllabus tracker, an expandable "Learning Desk" reader, and a realistic CBT (Computer-Based Test) mock exam engine with negative marking ($-1/3$).Tech Stack (Optimized for Antigravity Scaffolding):Frontend: React 18+ (Vite, TypeScript)Styling & UI Primitives: Tailwind CSS + Lucide React icons + Framer Motion (for bottom-sheet drawers and horizontal phase animations)State & Offline Persistence: Zustand + idb-keyval (IndexedDB) or @capacitor-community/sqlite for offline syllabus progress, coupled with Firebase Auth & Firestore for cloud sync.Native Bridge: Capacitor 6 (@capacitor/status-bar, @capacitor/haptics, @capacitor/preferences, @capacitor/local-notifications).1.2 Core Functional ModulesFeature ModuleKey Functional Requirements1. Dashboard (Command Center)• Exam Countdown Banner (e.g., "NORCET 8.0: 84 Days Left").• Overall Syllabus Progress Ring (calculated across all 8 subjects).• "Resume Study" Quick Card (jumps directly to the last opened Subtopic/Phase).• Daily Streak & High-Yield Clinical Pearl of the Day.2. 5-Level Syllabus Tracker & Learning Desk• Level 1 (Subject): Grid/List view of the 8 core subjects with completion progress bars.• Level 2 (Subtopic): Accordion list with PYQ importance tags (High Yield, Moderate).• Level 3 (Phase): Horizontal segmented pill-tabs (Foundations $\to$ Patho/Pharm $\to$ Nursing Care $\to$ PYQs).• Level 4 (Bullet Point): Interactive checklist item with a checkbox (triggers Capacitor Haptics on check) and a Bookmark toggle.• Level 5 (Context Reader): Tapping a bullet point slides up a 75% height Bottom Sheet Drawer rendering the Context Heading, formatted Markdown, Clinical Alert callouts, and linked PYQ tags.3. PYQ & CBT Exam Engine• Filter papers by Exam (AIIMS NORCET, ESIC, RRB) and Year.• Dual Modes: Practice Mode (instant rationale reveal) and Live CBT Mode (strictly timed, question palette statuses: Answered, Not Answered, Marked for Review).• Scoring Engine: Auto-calculates $+1$ for correct and $-0.33$ ($-1/3$) for wrong answers, generating an accuracy & weak-subject breakdown post-test.4. Quick Revision Vault• Aggregated view of all Bookmarked Bullet Points and "High-Yield" flagged Context Blocks.• Rapid-fire clinical flashcards (IV Cannula Gauges, ECG Leads, Drug Antidotes, Lab Values).1.3 Data Models (TypeScript Interfaces)Use these exact interfaces when prompting Antigravity to build your state store and JSON seed data:TypeScriptexport type ImportanceTier = 'High' | 'Moderate' | 'Low';

export interface ContextBlock {
  heading: string;
  markdownContent: string;
  clinicalPearl?: string;
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
  iconName: string; // Lucide icon identifier
  weightagePercentage: number;
  subtopics: Subtopic[];
}

export interface UserProgressState {
  completedBulletIds: Record<string, boolean>;
  bookmarkedBulletIds: Record<string, boolean>;
  lastAccessed: {
    subjectId: string;
    subtopicId: string;
    phaseId: string;
  } | null;
}
2. UX & Visual Design Specification2.1 Aesthetic Direction: "Clinical Precision"Vibe: High-contrast, distraction-free, clinical modern UI (inspired by Amboss, Osmosis, and Linear). Built for long late-night study sessions after hospital shifts.Color Palette (Tailwind Tokens):Primary Brand (Scrub Teal): teal-600 (#0D9488) for primary actions, active tabs, and progress rings.Secondary Accent (Surgical Indigo): indigo-600 (#4F46E5) for PYQ badges and CBT test modes.Clinical Alerts / Contraindications: rose-500 (#F43F5E) background tint (bg-rose-500/10 border-l-4 border-rose-500) for "Never Do / Contraindication" callouts.Clinical Pearls / First Action: amber-500 (#F59E0B) background tint (bg-amber-500/10 border-l-4 border-amber-500) for "Nurse's Priority Action" callouts.Surface (Light / Dark Mode): slate-50 (#F8FAFC) light background; slate-950 (#020617) dark mode background with slate-900 cards.2.2 Mobile Screen-by-Screen Wireframe & FlowNavigation ArchitectureA persistent 4-Tab Bottom Navigation Bar (h-16, pb-safe for Android gesture bar):Home (LayoutDashboard) – Progress, Streak, Resume CardLearning Desk (BookOpenCheck) – The 5-Level Syllabus TreePYQ Arena (FileSpreadsheet) – Past Papers & Mock CBTVault (Bookmark) – Saved Contexts & Cheat SheetsThe 5-Level "Learning Desk" UX (Solving Nested Hierarchy Fatigue)Deeply nested 5-level hierarchies often ruin mobile UX if implemented as 5 separate page pushes or nested accordions. Instead, flatten the navigation into 2 screens + 1 slide-up drawer:+---------------------------------------------------+
|  [<-]  Fundamentals of Nursing         64% [====] |  <-- Level 1: Subject Header
+---------------------------------------------------+
|  Subtopic 1.1: Parenteral & Blood Transfusions    |  <-- Level 2: Sticky Subtopic Selector
+---------------------------------------------------+
| ( Phase 1: Specs )  Phase 2: Protocol   Phase 3   |  <-- Level 3: Horizontal Scroll Pills
+---------------------------------------------------+
|                                                   |
|  [x] 1.1.1 IV Cannula Gauge Color Coding          |  <-- Level 4: Interactive Bullet Row
|      [🔥 High Yield]  [2 PYQs]           [Read >] |
|                                                   |
|  [ ] 1.1.2 Crystalloid vs. Colloid Tonicity       |
|      [1 PYQ]                             [Read >] |
|                                                   |
+---------------------------------------------------+
|  ================== (Drag Handle) ==============  |  <-- Level 5: Slide-Up Context Drawer
|  Clinical Specs of IV Cannula Sizes          [BM] |      (Opens when tapping a Bullet Row)
|  -----------------------------------------------  |
|  • 14G (Orange): 240 mL/min - Massive trauma      |
|  • 18G (Green): 90 mL/min - Blood transfusion     |
|  • 20G (Pink): 60 mL/min - Routine IV fluids      |
|                                                   |
|  +---------------------------------------------+  |
|  | ⚡ NORCET CLINICAL ALERT                     |  |
|  | Insertion angle: 15° to 30° bevel up.       |  |
|  +---------------------------------------------+  |
|                                                   |
|  [ ✓ Mark as Mastered ]       [ Next Topic -> ]   |
+---------------------------------------------------+
Why this UX works on Android APKs:Left-Zone vs. Right-Zone Tap Targets: Tapping the checkbox on the left of a Level 4 Bullet Point immediately marks it complete (with a subtle haptic tick) without opening the reader. Tapping anywhere else on the card slides up the Level 5 Context Drawer.In-Drawer Progression: Inside the Level 5 Context Drawer, placing a "Mark as Mastered & Next" button at the bottom lets the student read through all bullet points in a phase sequentially like stories/flashcards without closing and reopening the drawer.Color-Coded Medical Callouts: Inside the Level 5 Markdown renderer, custom blockquotes automatically style Priority Nursing Actions in Amber and Absolute Contraindications in Rose so the eye catches exam traps immediately.