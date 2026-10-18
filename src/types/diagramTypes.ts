export type DiagramType = 
  | 'flowchart'      // Step-by-step procedural algorithm (e.g. Transfusion reaction, CPR)
  | 'matrix'         // Color/gauge/specification matrix (e.g. IV Cannula, Triage)
  | 'comparison'     // Side-by-side contrast (e.g. Isotonic vs Hypotonic vs Hypertonic)
  | 'timeline'       // Drug onset/peak or disease timeline (e.g. Insulin, Labor stages)
  | 'scale';         // Clinical scoring system (e.g. GCS, APGAR, Parkland)

export interface FlowchartStep {
  step: number;
  action: string;
  detail?: string;
  criticalAlert?: string;
  goldPearl?: string;
  badge?: string;
  type?: 'standard' | 'warning' | 'critical' | 'success';
}

export interface MatrixItem {
  id: string;
  label: string;
  subLabel?: string;
  colorCode: string; // Tailwind color class or hex (e.g. bg-orange-500)
  textColor?: string;
  metric?: string;   // e.g. "240 mL/min"
  indication: string;
  highlight?: boolean;
}

export interface ComparisonColumn {
  title: string;
  accentColor: 'teal' | 'indigo' | 'amber' | 'rose' | 'emerald';
  features: { label: string; value: string; highlight?: boolean }[];
}

export interface ClinicalDiagramData {
  type: DiagramType;
  title: string;
  subtitle?: string;
  tag: string; // e.g. "Emergency Algorithm", "ISO Color Code", "Diagnostic Flow"
  steps?: FlowchartStep[];
  matrixItems?: MatrixItem[];
  comparisonColumns?: ComparisonColumn[];
  formula?: {
    expression: string;
    description: string;
    example: string;
  };
}
