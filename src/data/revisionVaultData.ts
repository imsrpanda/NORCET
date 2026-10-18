import { ClinicalCheatSheet } from '../types';

export const CLINICAL_CHEAT_SHEETS: ClinicalCheatSheet[] = [
  {
    id: 'sheet-iv-cannula',
    title: 'Peripheral IV Cannula Color & Gauge Sizing Matrix',
    category: 'IV Cannula',
    description: 'Universal color coding, dimensions, flow rates, and high-yield AIIMS exam indications.',
    tableHeaders: ['Gauge', 'Color', 'Ext. Diameter', 'Flow Rate', 'Standard Clinical Indication'],
    rows: [
      [{ text: '14 G', highlight: true }, { text: 'Orange', badge: 'bg-orange-500 text-white' }, '2.1 mm', '240 mL/min', 'Massive fluid resuscitation, severe trauma shock, emergency OR'],
      [{ text: '16 G', highlight: true }, { text: 'Grey', badge: 'bg-slate-400 text-white' }, '1.8 mm', '180 mL/min', 'Major abdominal surgery, high-speed blood component infusion'],
      [{ text: '18 G', highlight: true }, { text: 'Green', badge: 'bg-emerald-600 text-white' }, '1.3 mm', '90 mL/min', 'Standard of care for Blood Transfusions, CT contrast, surgical pre-op'],
      [{ text: '20 G' }, { text: 'Pink', badge: 'bg-pink-500 text-white' }, '1.1 mm', '60 mL/min', 'Routine general medical ward infusions, maintenance IV therapy'],
      [{ text: '22 G' }, { text: 'Blue', badge: 'bg-blue-500 text-white' }, '0.9 mm', '36 mL/min', 'Elderly fragile veins, oncology patients, continuous IV analgesia'],
      [{ text: '24 G' }, { text: 'Yellow', badge: 'bg-amber-400 text-slate-900' }, '0.7 mm', '20 mL/min', 'Pediatrics, neonates, extremely delicate veins'],
      [{ text: '26 G' }, { text: 'Violet', badge: 'bg-purple-600 text-white' }, '0.6 mm', '13 mL/min', 'Pre-term neonates, scalp vein cannulation']
    ],
    pearl: 'Golden Rule: 18G Green is the gold standard for blood transfusions. Never attempt PRBC transfusion through 24G Yellow due to mechanical hemolysis.'
  },
  {
    id: 'sheet-ecg-leads',
    title: '12-Lead ECG Infarction Localization & Culprit Arteries',
    category: 'ECG Leads',
    description: 'Rapid anatomical correlation between ECG leads, ischemic wall territory, and coronary circulation.',
    tableHeaders: ['ECG Leads', 'Infarct Territory', 'Reciprocal Changes', 'Culprit Coronary Artery', 'Key Nursing Vigilance'],
    rows: [
      [{ text: 'V1, V2', highlight: true }, 'Septal Wall', 'None', 'LAD (Septal branches)', 'Ventricular septal rupture, acute bundle branch blocks'],
      [{ text: 'V3, V4', highlight: true }, 'Anterior Wall', 'II, III, aVF (ST depression)', 'LAD (Left Anterior Descending)', 'Cardiogenic shock, high mortality ("Widowmaker")'],
      [{ text: 'II, III, aVF', highlight: true }, 'Inferior Wall', 'I, aVL (ST depression)', 'RCA (Right Coronary) (85%)', 'Severe bradycardia, complete heart block, RV infarct'],
      [{ text: 'I, aVL, V5, V6' }, 'Lateral Wall', 'II, III, aVF', 'LCx (Left Circumflex)', 'Atrial fibrillations, AV node dysfunction'],
      [{ text: 'V3R, V4R', highlight: true }, 'Right Ventricular (RV)', 'V1-V3 ST depression', 'Proximal RCA', 'CONTRAINDICATION to Nitrates & Morphine! Give IV fluids.'],
      [{ text: 'V7, V8, V9' }, 'Posterior Wall', 'Tall R in V1-V2 with ST depression', 'RCA / LCx', 'Acute mitral valve papillary muscle rupture']
    ],
    pearl: 'In Inferior MI (leads II, III, aVF), always verify right-sided leads (V3R/V4R). If RV involvement is present, NITRATES ARE CONTRAINDICATED!'
  },
  {
    id: 'sheet-drug-antidotes',
    title: 'Emergency Toxicology & Life-Saving Drug Antidotes',
    category: 'Drug Antidotes',
    description: 'High-frequency antidote pairings frequently tested in AIIMS NORCET, ESIC, and RRB nursing officer exams.',
    tableHeaders: ['Drug / Toxin Overdose', 'Specific Antidote', 'Mechanism of Action', 'Critical Nursing Note'],
    rows: [
      [{ text: 'Heparin', highlight: true }, { text: 'Protamine Sulfate', badge: 'bg-teal-600 text-white' }, 'Basic protein binds acidic heparin forming inert salt', 'Slow IV injection: 1 mg neutralizes ~100 units of heparin; risk of bradycardia if fast'],
      [{ text: 'Warfarin', highlight: true }, { text: 'Vitamin K₁ (Phytonadione)', badge: 'bg-teal-600 text-white' }, 'Promotes hepatic synthesis of factors II, VII, IX, X', 'Takes 6-8 hrs. For immediate reversal in bleeding, give Fresh Frozen Plasma (FFP) or PCC'],
      [{ text: 'Acetaminophen (PCM)', highlight: true }, { text: 'N-Acetylcysteine (NAC)', badge: 'bg-teal-600 text-white' }, 'Replenishes hepatic glutathione reserves', 'Most efficacious if initiated within 8 to 10 hours of acute ingestion'],
      [{ text: 'Opioids (Morphine)' }, { text: 'Naloxone (Narcan)', badge: 'bg-indigo-600 text-white' }, 'Competitive mu-opioid receptor antagonist', 'Half-life is 30-90 min (shorter than morphine). Monitor for relapse of respiratory depression!'],
      [{ text: 'Benzodiazepines' }, { text: 'Flumazenil', badge: 'bg-indigo-600 text-white' }, 'Competitive GABA receptor antagonist', 'Do NOT give to chronic benzo users or TCA overdose — induces refractory status epilepticus'],
      [{ text: 'Magnesium Sulfate' }, { text: 'Calcium Gluconate 10%', badge: 'bg-amber-600 text-white' }, 'Antagonizes neuromuscular blockade of Mg²⁺', 'Keep at bedside in eclampsia wards. Check patellar deep tendon reflexes hourly!'],
      [{ text: 'Digoxin' }, { text: 'Digoxin Immune Fab (DigiFab)', badge: 'bg-rose-600 text-white' }, 'Specific antigen-binding fragments neutralize digoxin', 'Indicated when serum K+ > 5.0 mEq/L or life-threatening arrhythmias occur'],
      [{ text: 'Beta-Blockers' }, { text: 'Glucagon', badge: 'bg-violet-600 text-white' }, 'Increases myocardial cAMP independently of beta-receptors', 'Reverses refractory bradycardia and cardiogenic shock'],
      [{ text: 'Organophosphate Poison' }, { text: 'Atropine + Pralidoxime (2-PAM)', badge: 'bg-red-600 text-white' }, 'Anticholinergic + cholinesterase enzyme reactivator', 'Titrate Atropine until pulmonary secretions dry up (atropinization achieved)']
    ],
    pearl: 'Remember: In Magnesium sulfate toxicity, the earliest sign to disappear is the Deep Tendon Reflex (Patellar reflex) at 8-10 mEq/L, followed by respiratory depression at 12 mEq/L.'
  },
  {
    id: 'sheet-critical-labs',
    title: 'Arterial Blood Gas (ABG) & Emergency Serum Values',
    category: 'Critical Lab Values',
    description: 'Diagnostic thresholds for acid-base imbalances and critical panic electrolyte limits.',
    tableHeaders: ['Parameter', 'Normal Range', 'Critical Panic Value', 'Clinical Interpretation / Nursing Action'],
    rows: [
      [{ text: 'pH (Arterial)', highlight: true }, '7.35 – 7.45', '< 7.20 or > 7.60', '< 7.35 = Acidosis; > 7.45 = Alkalosis. Extreme values threaten cellular enzymes.'],
      [{ text: 'PaCO₂', highlight: true }, '35 – 45 mmHg', '< 20 or > 60 mmHg', 'Respiratory parameter. > 45 = Respiratory Acidosis (hypoventilation); < 35 = Alkalosis.'],
      [{ text: 'HCO₃⁻ (Bicarbonate)', highlight: true }, '22 – 26 mEq/L', '< 10 or > 40 mEq/L', 'Metabolic parameter. < 22 = Metabolic Acidosis; > 26 = Metabolic Alkalosis.'],
      [{ text: 'Serum Potassium (K⁺)', highlight: true }, '3.5 – 5.0 mEq/L', '< 2.5 or > 6.5 mEq/L', 'Hypokalemia: Flat T wave, U wave. Hyperkalemia: Tall peaked T waves, widened QRS. NEVER IV push!'],
      [{ text: 'Serum Sodium (Na⁺)' }, '135 – 145 mEq/L', '< 120 or > 160 mEq/L', 'Acute hyponatremia (< 120): Seizures, cerebral edema. Correct slowly to avoid ODS / CPM!'],
      [{ text: 'Serum Calcium (Total)' }, '8.5 – 10.5 mg/dL', '< 6.0 or > 13.0 mg/dL', 'Hypocalcemia: Chvostek\'s & Trousseau\'s sign, tetany, prolonged QT interval.'],
      [{ text: 'Serum Magnesium' }, '1.7 – 2.2 mg/dL', '< 1.0 or > 4.0 mg/dL', 'Hypomagnesemia predisposes to Torsades de Pointes ventricular tachycardia. Treat with MgSO4.']
    ],
    pearl: 'ROME Rule for ABGs: Respiratory Opposite (pH up, PaCO2 down = Resp Alkalosis), Metabolic Equal (pH up, HCO3 up = Met Alkalosis).'
  },
  {
    id: 'sheet-venturi-mask',
    title: 'Venturi Mask Color Coding & Exact FiO2 Oxygen Delivery',
    category: 'Oxygen Delivery',
    description: 'High-flow fixed performance entrainment mask specifications commonly tested for COPD patient safety.',
    tableHeaders: ['Adaptor Color', 'Oxygen Flow Rate', 'Exact FiO2 Delivered', 'Clinical Indications & Safety Rules'],
    rows: [
      [{ text: 'Blue', highlight: true }, '2 L/min', '24%', 'Lowest FiO2; standard starting point for chronic severe COPD retention'],
      [{ text: 'White', highlight: true }, '4 L/min', '28%', 'Mild-to-moderate exacerbation in chronic lung disease'],
      [{ text: 'Orange' }, '6 L/min', '31%', 'Moderate hypoxemia in post-surgical or subacute wards'],
      [{ text: 'Yellow', highlight: true }, '8 L/min', '35%', 'Moderate-to-severe hypoxemia requiring controlled escalation'],
      [{ text: 'Red' }, '10 L/min', '40%', 'Significant respiratory distress; evaluate for non-invasive ventilation'],
      [{ text: 'Green', highlight: true }, '15 L/min', '60%', 'Maximum calibrated Venturi performance before considering intubation']
    ],
    pearl: 'Target SpO2 in chronic hypercapnic COPD is 88% to 92%. Never administer unmetered high-flow oxygen — it quenches the hypoxic drive and induces fatal CO2 narcosis!'
  },
  {
    id: 'sheet-pph-drugs',
    title: 'Postpartum Hemorrhage (PPH) Uterotonic Drug Protocol',
    category: 'Obstetric Drugs',
    description: 'Pharmacological escalation ladder and critical absolute contraindications for postpartum atony.',
    tableHeaders: ['Line / Drug Name', 'Standard Dosage & Route', 'Physiological Action', 'Absolute Exam Contraindication'],
    rows: [
      [{ text: '1st Line: Oxytocin', highlight: true }, '10–20 IU in 500 mL RL/NS IV (or 10 IU IM)', 'Rhythmic smooth muscle contraction', 'NEVER give rapid undiluted IV push (triggers acute cardiovascular collapse)'],
      [{ text: '2nd Line: Methylergometrine (Methergine)', highlight: true }, '0.2 mg IM (or slow IV)', 'Sustained tetanic uterine spasm', 'ABSOLUTELY CONTRAINDICATED in Hypertension, Preeclampsia & Heart Disease'],
      [{ text: '3rd Line: Carboprost (PGF2α)', highlight: true }, '250 mcg (0.25 mg) deep IM every 15–90 min', 'Potent myometrial prostaglandin activation', 'ABSOLUTELY CONTRAINDICATED in Bronchial Asthma (triggers acute bronchospasm)'],
      [{ text: '4th Line: Misoprostol (PGE1)' }, '800–1000 mcg Rectal or Sublingual', 'Rapid non-parenteral prostaglandin absorption', 'Avoid in known prostaglandin hypersensitivity; causes shivering & pyrexia'],
      [{ text: 'Adjunct: Tranexamic Acid (TXA)' }, '1 g slow IV over 10 min (within 3 hrs of birth)', 'Antifibrinolytic plasminogen inhibitor', 'Contraindicated in active thromboembolic disease']
    ],
    pearl: 'Exam Pairings to Memorize: Methergine is CONTRAINDICATED in HYPERTENSION! Carboprost (Hemabate) is CONTRAINDICATED in ASTHMA!'
  },
  {
    id: 'sheet-insulin-types',
    title: 'Insulin Pharmacokinetics & Mixing Rules ("Clear Before Cloudy")',
    category: 'Endocrine Drugs',
    description: 'Onset, peak times, duration of action, and critical administration rules for diabetic management.',
    tableHeaders: ['Insulin Category', 'Generic Examples', 'Onset Time', 'Peak Action Time', 'Effective Duration'],
    rows: [
      [{ text: 'Rapid-Acting', highlight: true }, 'Lispro (Humalog), Aspart (NovoLog), Glulisine', '10 – 15 minutes', '30 – 90 minutes', '3 – 5 hours (Inject right before meals)'],
      [{ text: 'Short-Acting (Regular)', highlight: true }, 'Regular Insulin (Humulin R, Novolin R)', '30 – 60 minutes', '2 – 4 hours', '5 – 8 hours (ONLY insulin given IV!)'],
      [{ text: 'Intermediate-Acting', highlight: true }, 'NPH (Humulin N, Novolin N) - Cloudy', '1 – 2 hours', '4 – 12 hours (High hypoglycemia risk!)', '14 – 24 hours'],
      [{ text: 'Long-Acting (Basal)', highlight: true }, 'Glargine (Lantus), Detemir (Levemir), Degludec', '1 – 2 hours', 'NO PEAK (Continuous plateau)', '24 hours (Never mix with any other insulin!)']
    ],
    pearl: 'When mixing Regular (Clear) and NPH (Cloudy) insulin in one syringe, remember the mnemonic RN: Regular before NPH ("Clear before Cloudy") to avoid contaminating Regular insulin with protamine.'
  },
  {
    id: 'sheet-nis-vaccines',
    title: 'National Immunization Schedule (NIS) Administration Guide',
    category: 'Immunization',
    description: 'Universal Immunization Programme (UIP) doses, routes, anatomical sites, and cold chain limits.',
    tableHeaders: ['Age of Child', 'Vaccine', 'Dose', 'Route', 'Anatomical Site'],
    rows: [
      [{ text: 'Birth', highlight: true }, 'BCG', '0.05 mL (< 1 month)', 'Intradermal', 'Left upper arm (deltoid)'],
      [{ text: 'Birth' }, 'OPV Zero Dose', '2 drops', 'Oral', 'Mouth'],
      [{ text: 'Birth', highlight: true }, 'Hepatitis B (Birth Dose)', '0.5 mL', 'Intramuscular', 'Anterolateral aspect of mid-thigh'],
      [{ text: '6, 10, 14 Weeks', highlight: true }, 'Pentavalent (DPT+HepB+Hib)', '0.5 mL', 'Intramuscular', 'Anterolateral aspect of mid-thigh'],
      [{ text: '6 & 14 Weeks' }, 'fIPV (Fractional IPV)', '0.1 mL', 'Intradermal', 'Right upper arm'],
      [{ text: '6, 10, 14 Weeks' }, 'Rotavirus', '5 drops', 'Oral', 'Mouth'],
      [{ text: '9 Completed Months', highlight: true }, 'MR 1st Dose (Measles-Rubella)', '0.5 mL', 'Subcutaneous', 'Right upper arm'],
      [{ text: '9 Completed Months' }, 'Vitamin A (1st Dose)', '1 mL (100,000 IU)', 'Oral', 'Mouth (Followed by 200,000 IU every 6 months)']
    ],
    pearl: 'Reconstituted BCG and Measles/MR vaccines have NO preservatives and MUST be used within strictly 4 HOURS on ice. Discard any remainder after 4 hours to prevent fatal Toxic Shock Syndrome.'
  }
];

