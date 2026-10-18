import { ClinicalDiagramData } from '../types/diagramTypes';
import { BulletPointItem } from '../types';

/**
 * Curated High-Yield Clinical Diagrams for NORCET Core Topics
 */
export const CURATED_CLINICAL_DIAGRAMS: Record<string, ClinicalDiagramData> = {
  // IV Cannula Matrix
  'bp_fon_101': {
    type: 'matrix',
    title: 'ISO 10555 Peripheral IV Cannula Color & Flow Rate Matrix',
    subtitle: 'Gauge, flow rate, needle size, and gold-standard clinical indications',
    tag: 'ISO Color Matrix',
    matrixItems: [
      {
        id: '14g',
        label: '14G (Orange)',
        subLabel: 'OD 2.1 mm',
        colorCode: 'bg-orange-500',
        textColor: 'text-white',
        metric: '~240 mL/min',
        indication: 'Massive trauma resuscitation, rapid blood transfusion, major open surgeries.'
      },
      {
        id: '16g',
        label: '16G (Grey)',
        subLabel: 'OD 1.8 mm',
        colorCode: 'bg-slate-400',
        textColor: 'text-slate-950 font-bold',
        metric: '~180 mL/min',
        indication: 'Rapid volume replacement, PPH, emergency surgical cases.'
      },
      {
        id: '18g',
        label: '18G (Green)',
        subLabel: 'OD 1.3 mm',
        colorCode: 'bg-emerald-600',
        textColor: 'text-white',
        metric: '~90 mL/min',
        indication: 'Gold standard for blood transfusions (prevents hemolysis) and CT contrast.',
        highlight: true
      },
      {
        id: '20g',
        label: '20G (Pink)',
        subLabel: 'OD 1.1 mm',
        colorCode: 'bg-pink-500',
        textColor: 'text-white',
        metric: '~60 mL/min',
        indication: 'Universal adult routine maintenance fluids and IV antibiotics.',
        highlight: true
      },
      {
        id: '22g',
        label: '22G (Blue)',
        subLabel: 'OD 0.9 mm',
        colorCode: 'bg-blue-500',
        textColor: 'text-white',
        metric: '~36 mL/min',
        indication: 'Elderly patients, fragile/sclerosed veins, pediatric fluid therapy.'
      },
      {
        id: '24g',
        label: '24G (Yellow)',
        subLabel: 'OD 0.7 mm',
        colorCode: 'bg-amber-400',
        textColor: 'text-slate-950 font-bold',
        metric: '~20 mL/min',
        indication: 'Infants, toddlers, neonates, and difficult small peripheral veins.'
      },
      {
        id: '26g',
        label: '26G (Violet)',
        subLabel: 'OD 0.6 mm',
        colorCode: 'bg-purple-600',
        textColor: 'text-white',
        metric: '~13 mL/min',
        indication: 'Premature neonates, extremely low birth weight (ELBW) infants.'
      }
    ]
  },

  // Fluid Tonicity Dynamics
  'bp_fon_102': {
    type: 'comparison',
    title: 'Intravenous Crystalloid Tonicity & Cellular Fluid Shift Matrix',
    subtitle: 'Osmolar ranges, fluid shifts, and clinical contraindications',
    tag: 'Osmolarity Differential',
    comparisonColumns: [
      {
        title: 'Isotonic (~275-295 mOsm/L)',
        accentColor: 'teal',
        features: [
          { label: 'Fluids', value: '0.9% Normal Saline, Ringer Lactate' },
          { label: 'Cellular Shift', value: 'Zero net water shift; expands intravascular volume' },
          { label: 'Indications', value: 'Hypovolemic shock, dehydration, peri-op fluids' },
          { label: 'NORCET Trap', value: 'Excess 0.9% NS causes Hyperchloremic Metabolic Acidosis', highlight: true }
        ]
      },
      {
        title: 'Hypotonic (< 250 mOsm/L)',
        accentColor: 'indigo',
        features: [
          { label: 'Fluids', value: '0.45% Half NS, 0.33% NaCl' },
          { label: 'Cellular Shift', value: 'Water moves FROM blood INTO swollen cells' },
          { label: 'Indications', value: 'Intracellular dehydration (e.g. DKA, HHS)' },
          { label: 'Contraindication', value: 'NEVER give in Head Injury / Increased ICP or Burns!', highlight: true }
        ]
      },
      {
        title: 'Hypertonic (> 375 mOsm/L)',
        accentColor: 'rose',
        features: [
          { label: 'Fluids', value: '3% NaCl, 5% Dextrose in NS, D10W' },
          { label: 'Cellular Shift', value: 'Pulls water OUT of swollen cells into bloodstream' },
          { label: 'Indications', value: 'Severe symptomatic hyponatremia, cerebral edema' },
          { label: 'Critical Risk', value: 'Infuse via central line slowly; risk of pulmonary edema', highlight: true }
        ]
      }
    ]
  },

  // Blood Transfusion Reaction Emergency Flowchart
  'bp_fon_103': {
    type: 'flowchart',
    title: 'Acute Hemolytic Transfusion Reaction Emergency Algorithm',
    subtitle: 'Step-by-step priority clinical actions required by AIIMS protocols',
    tag: 'Emergency Protocol Flow',
    steps: [
      {
        step: 1,
        action: 'STOP the Transfusion Immediately',
        detail: 'The single most critical immediate nursing action upon flank pain, fever, or chills.',
        criticalAlert: 'DO NOT flush the existing blood tubing! Even 5-10 mL more blood can trigger fatal acute tubular necrosis.',
        type: 'critical'
      },
      {
        step: 2,
        action: 'Disconnect Tubing at the Cannula Hub',
        detail: 'Unhook the blood set directly from the patient’s IV catheter.',
        type: 'standard'
      },
      {
        step: 3,
        action: 'Infuse 0.9% Normal Saline with Fresh Set',
        detail: 'Maintain IV patency with brand new sterile infusion tubing at a KVO or bolus rate.',
        type: 'success'
      },
      {
        step: 4,
        action: 'Notify Physician & Monitor Vitals Q15M',
        detail: 'Administer emergency oxygen, antihistamines, or epinephrine as prescribed.',
        type: 'standard'
      },
      {
        step: 5,
        action: 'Send Blood Unit & Samples to Blood Bank',
        detail: 'Collect urine sample (test for free hemoglobinuria) and send all tags, blood bag, and tubing.',
        type: 'standard'
      }
    ]
  },

  // IV Drop Rate & Flow Formula
  'bp_fon_104': {
    type: 'flowchart',
    title: 'IV Drop Rate & Hourly Flow Rate Calculation Matrix',
    subtitle: 'Standard macro-drip vs micro-drip calibration factors',
    tag: 'Dosage Calculation Engine',
    formula: {
      expression: 'Drops/min (gtts/min) = (Total Volume in mL × Drop Factor) ÷ Total Time in Minutes',
      description: 'Microdrip Drop Factor = 60 gtts/mL (1 mL/hr = 1 gtt/min). Standard Macrodrip = 10, 15, or 20 gtts/mL.',
      example: 'To infuse 1000 mL Normal Saline over 8 hours using a 15 gtts/mL macro-set: (1000 × 15) ÷ (8 × 60) = 15000 ÷ 480 ≈ 31.25 → 31 drops/min.'
    },
    steps: [
      {
        step: 1,
        action: 'Identify Total Volume (mL)',
        detail: 'Check prescribed fluid volume in mL (e.g. 1000 mL RL).',
        type: 'standard'
      },
      {
        step: 2,
        action: 'Convert Hours to Minutes',
        detail: 'Multiply hours by 60 (e.g. 8 hours × 60 = 480 minutes).',
        type: 'standard'
      },
      {
        step: 3,
        action: 'Identify Tubing Drop Factor',
        detail: 'Standard Macro set = 15 gtts/mL; Pediatric Microdrip = 60 gtts/mL.',
        type: 'warning'
      },
      {
        step: 4,
        action: 'Calculate Drops Per Minute',
        detail: 'Divide (Volume × Drop Factor) by Total Minutes to set manual roller clamp.',
        type: 'success'
      }
    ]
  }
};

/**
 * Intelligent Parser: Generates a sleek, structured clinical diagram / flowchart
 * for ANY bullet point by extracting key action items, procedures, and warnings.
 */
export function getOrGenerateDiagram(bullet: BulletPointItem): ClinicalDiagramData {
  // 1. Check if curated diagram exists
  if (CURATED_CLINICAL_DIAGRAMS[bullet.id]) {
    return CURATED_CLINICAL_DIAGRAMS[bullet.id];
  }

  // 2. Intelligently parse markdown and context into an interactive flowchart
  const text = bullet.context.markdownContent || '';
  const lines = text.split('\n').filter((l) => l.trim().length > 0);

  const steps: { step: number; action: string; detail?: string; type?: 'standard' | 'warning' | 'critical' | 'success' }[] = [];
  let stepIndex = 1;

  for (const line of lines) {
    const trimmed = line.trim();

    // Check for bullet items or numbered steps
    if (/^(\*|-|\d+\.)\s+/.test(trimmed)) {
      const cleanLine = trimmed.replace(/^(\*|-|\d+\.)\s+/, '').replace(/\*\*/g, '');
      const parts = cleanLine.split(/[:–—]/);
      const action = parts[0]?.trim() || cleanLine;
      const detail = parts.slice(1).join(':').trim();

      const isWarning = /contraindicated|never|avoid|fatal|toxic|warning|danger/i.test(cleanLine);
      const isCritical = /emergency|immediate|stop|call|shock|arrest|airway/i.test(cleanLine);
      const isSuccess = /gold standard|preferred|recommended|safe|normal/i.test(cleanLine);

      if (action.length > 3 && steps.length < 6) {
        steps.push({
          step: stepIndex++,
          action: action.length > 60 ? action.slice(0, 57) + '...' : action,
          detail: detail ? (detail.length > 140 ? detail.slice(0, 137) + '...' : detail) : undefined,
          type: isCritical ? 'critical' : isWarning ? 'warning' : isSuccess ? 'success' : 'standard',
        });
      }
    }
  }

  // If steps were extracted, return flowchart
  if (steps.length >= 2) {
    return {
      type: 'flowchart',
      title: `${bullet.label} — Clinical Protocol Flow`,
      subtitle: 'Key action sequence, clinical checkpoints, and exam pearls',
      tag: 'Clinical Algorithm',
      steps,
    };
  }

  // Fallback: 3-step Core Concept Breakdown
  return {
    type: 'flowchart',
    title: `${bullet.context.heading || bullet.label}`,
    subtitle: 'Core nursing principles, priority assessments, and gold standards',
    tag: 'Concept Flow',
    steps: [
      {
        step: 1,
        action: 'Core Assessment & Verification',
        detail: bullet.context.clinicalAlert || 'Identify baseline patient parameters and verify high-yield clinical indicators.',
        type: bullet.context.clinicalAlert ? 'warning' : 'standard',
      },
      {
        step: 2,
        action: 'Nurse’s Priority Action',
        detail: bullet.context.clinicalPearl || 'Execute evidence-based clinical intervention according to AIIMS standard operating protocols.',
        type: 'success',
      },
      {
        step: 3,
        action: 'Evaluation & NORCET High-Yield Review',
        detail: 'Monitor response, document parameters, and master linked scenario-based past exam questions.',
        type: 'standard',
      },
    ],
  };
}
