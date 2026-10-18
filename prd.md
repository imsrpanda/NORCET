Build a mobile-first React + TypeScript + Tailwind CSS application designed to be wrapped into an Android APK via Capacitor. The app is "PocketNORCET", a clinical study and syllabus tracking platform for Nursing Officer competitive exams (AIIMS NORCET, ESIC, RRB).

### 1. Design System & Theme
- Aesthetic: "Clinical Precision" — clean, high-contrast medical education UI supporting Dark and Light mode.
- Colors: Primary `teal-600`, Secondary `indigo-600`, Surface `slate-50` (light) / `slate-950` (dark).
- Include safe-area padding (`pt-safe`, `pb-safe`) for mobile status and navigation bars.
- Bottom Navigation Bar with 4 tabs:
  1. Dashboard (Home, Countdown, Resume Card, Subject Progress Grid)
  2. Learning Desk (The 5-Level Syllabus Tracker & Expandable Context Reader)
  3. PYQ Arena (Mock Exam & Past Paper CBT Simulator with -1/3 negative marking)
  4. Revision Vault (Bookmarked bullet points & rapid clinical cheat sheets like IV Cannula Gauges and ECG Leads)

### 2. Core Feature: The 5-Level "Learning Desk" Architecture
Implement the strict 5-level data hierarchy with zero nested-accordion clutter:
- **Level 1 (Topic / Subject):** Selected from the Dashboard or top dropdown (e.g., "Fundamentals of Nursing", "Medical-Surgical Nursing"). Shows overall subject completion percentage.
- **Level 2 (Subtopic):** Expandable section headers or a clean subtopic switcher (e.g., "Subtopic 1.1: Parenteral Therapy & Blood Transfusions").
- **Level 3 (Phase):** Horizontal scrollable segmented pill tabs inside the active Subtopic (e.g., "Phase 1: Principles & Specs", "Phase 2: Protocol Execution", "Phase 3: Complications", "Phase 4: High-Yield PYQs").
- **Level 4 (Bullet Point Item):** Interactive cards rendered for the selected Phase.
  - Left side: Custom Checkbox to toggle completion state (persisted in localStorage/IndexedDB).
  - Center: Bullet point title + metadata badges ("High Yield" flame badge, linked PYQ count badge, Bookmark icon).
  - Interaction: Clicking the body of the Bullet Point opens the Level 5 Context Drawer.
- **Level 5 (Expandable Readable Context Drawer):** A smooth slide-up Bottom Sheet modal (75%-85% viewport height) displaying:
  - `Context Heading` at the top with a Bookmark button.
  - Rich structured clinical notes (bullet points, bold key values, tables, and formulas).
  - Highlighted "NORCET Clinical Alert" callout box (amber/rose border-l-4).
  - Linked Previous Year Question tags (e.g., `AIIMS NORCET 2023 S2`).
  - Bottom sticky action bar inside the drawer: "Mark as Completed" toggle button + "Next Concept ->" button to cycle to the next bullet point without closing the drawer.

### 3. Core Feature: PYQ CBT Exam Engine
- Create an interactive test interface mimicking the AIIMS NORCET CBT interface.
- Features: Countdown timer, Question Palette drawer showing Answered (Green), Not Answered (Red), and Marked for Review (Purple) states.
- Scoring: +1 for correct, -0.33 (-1/3) for wrong.
- Include a "Practice Mode" toggle that immediately reveals the clinical rationale after selecting an option.

### 4. Seed Data Requirement
Pre-populate the state store with rich, realistic nursing content for at least 2 complete Subjects ("Fundamentals of Nursing" -> Parenteral Therapy & Blood Transfusion, and "Medical-Surgical Nursing" -> Acute Coronary Syndrome & MI) across all 5 levels (including IV Cannula gauge color table, PRBC transfusion rules, Acute Hemolytic Transfusion Reaction steps, Cardiac Biomarkers Troponin/CK-MB kinetics, and MONA protocol). Also seed 5 realistic AIIMS NORCET clinical scenario MCQs in the PYQ Arena.