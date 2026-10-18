import { NORCET_2024_STAGE1_100Q } from './norcet2024FullPaper';
import { NORCET_2023_STAGE1_100Q } from './norcet2023FullPaper';
import { NORCET_2022_STAGE1_100Q } from './norcet2022FullPaper';
import { PYQQuestion, FullExamSet } from '../types';

const RAW_SEED_PYQ_QUESTIONS: PYQQuestion[] = [
  {
    id: 'AIIMS_NORCET_2023_S1_Q12',
    exam: 'AIIMS NORCET',
    year: 2023,
    session: 'Stage I (Preliminary)',
    subjectId: 'subj_fon_01',
    topicTitle: 'Fundamentals: Blood Transfusion Complications',
    scenarioQuestion: 'A 42-year-old female post-hysterectomy is receiving her first unit of Packed Red Blood Cells (PRBC). Seven minutes into the transfusion, the patient complains of sudden intense flank pain, severe chills, and dyspnea. Her vital signs are: BP 82/50 mmHg, HR 128 bpm, Temp 38.9°C (102°F). Which of the following is the nurse\'s FIRST priority action?',
    options: [
      { id: 'A', text: 'Slow the transfusion to a keep-vein-open (KVO) rate and call the doctor immediately.' },
      { id: 'B', text: 'Stop the blood transfusion immediately and disconnect the blood tubing from the IV catheter.' },
      { id: 'C', text: 'Administer prescribed IV hydrocortisone and diphenhydramine through the blood line port.' },
      { id: 'D', text: 'Flush the existing IV blood tubing vigorously with 50 mL of Normal Saline to clear micro-clots.' }
    ],
    correctOptionId: 'B',
    clinicalRationale: {
      keyTakeaway: 'The immediate priority in any suspected acute hemolytic transfusion reaction is to STOP the infusion immediately and disconnect the blood tubing at the cannula hub.',
      explanation: 'The patient presents with the hallmark signs of an Acute Hemolytic Transfusion Reaction (AHTR) due to ABO incompatibility: sudden flank/lumbar back pain, chills, high fever, tachycardia, and hypotension. The nurse\'s initial and immediate action is to stop the transfusion right away to prevent further administration of incompatible antigen-loaded RBCs, and disconnect the blood set at the cannula hub. Then, a brand-new primary IV tubing set should be attached to infuse Normal Saline.',
      whyOthersAreWrong: [
        { option: 'A', reason: 'Slowing the rate or running at KVO still delivers fatal incompatible donor RBCs into the recipient circulation.' },
        { option: 'C', reason: 'Medications should never be pushed into the blood line port, and stopping the transfusion must precede any drug administration.' },
        { option: 'D', reason: 'Flushing the blood line boluses the remaining incompatible blood directly into the patient, triggering severe DIC and fatal renal shut-down.' }
      ],
      priorityAlert: 'CRITICAL RULE: Disconnect the tubing at the catheter hub. Never flush the blood remaining in the tubing!'
    },
    difficulty: 'Moderate',
    clinicalTag: 'Transfusion Reaction Protocol'
  },
  {
    id: 'AIIMS_NORCET_2023_S2_Q22',
    exam: 'AIIMS NORCET',
    year: 2023,
    session: 'Stage II (Clinical Skills)',
    subjectId: 'subj_msn_02',
    topicTitle: 'Cardiology: Inferior MI and Nitroglycerin Warning',
    scenarioQuestion: 'An emergency room nurse is reviewing the 12-lead ECG of a 65-year-old male with crushing chest pain. The ECG reveals 3 mm ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL. The patient’s BP is 108/68 mmHg, and HR is 54 bpm. Which prescribed intervention should the nurse QUESTION before administration?',
    options: [
      { id: 'A', text: 'Aspirin 325 mg chewed immediately' },
      { id: 'B', text: 'Sublingual Nitroglycerin 0.4 mg every 5 minutes' },
      { id: 'C', text: 'Intravenous Normal Saline 0.9% infusion' },
      { id: 'D', text: '12-lead Right-sided ECG (leads V3R and V4R)' }
    ],
    correctOptionId: 'B',
    clinicalRationale: {
      keyTakeaway: 'ST elevation in leads II, III, and aVF indicates an Inferior Wall MI (Right Coronary Artery). Up to 40% of inferior MIs have concurrent Right Ventricular (RV) Infarction, in which Nitroglycerin is contra-indicated.',
      explanation: 'Inferior wall MI frequently involves the Right Ventricle. The infarcted RV becomes a passive conduit and is extremely preload-dependent to push blood through the pulmonary vasculature into the left atrium. Nitroglycerin is a potent venous vasodilator that drastically reduces venous return (preload). Administering NTG in RV infarction causes sudden, profound, and often refractory cardiovascular collapse and hypotension.',
      whyOthersAreWrong: [
        { option: 'A', reason: 'Aspirin is essential and should be chewed immediately unless there is active internal bleeding.' },
        { option: 'C', reason: 'IV Normal Saline is the treatment of choice in RV infarction to boost preload.' },
        { option: 'D', reason: 'A right-sided ECG (V3R, V4R) is standard of care to confirm RV involvement.' }
      ],
      priorityAlert: 'Inferior Wall MI + Nitroglycerin = High Risk of Fatal Hypotension. Always check V3R/V4R first!'
    },
    difficulty: 'Hard',
    clinicalTag: 'ECG Localization & Hemodynamics'
  },
  {
    id: 'AIIMS_NORCET_2024_S1_Q03',
    exam: 'AIIMS NORCET',
    year: 2024,
    session: 'Stage I (Preliminary)',
    subjectId: 'subj_msn_02',
    topicTitle: 'Critical Care: Severe Hyperkalemia Management',
    scenarioQuestion: 'A patient with end-stage renal disease (ESRD) has a serum potassium level of 7.2 mEq/L. The telemetry monitor shows tall peaked T-waves, a prolonged PR interval, and widening of the QRS complex. Which medication should the nurse prepare to administer FIRST to prevent lethal arrhythmias?',
    options: [
      { id: 'A', text: 'Regular Insulin 10 units IV with 50 mL of 50% Dextrose' },
      { id: 'B', text: 'Sodium Polystyrene Sulfonate (Kayexalate) 30 g orally' },
      { id: 'C', text: 'Intravenous 10% Calcium Gluconate 10 mL over 2 to 5 minutes' },
      { id: 'D', text: 'Sodium Bicarbonate 50 mEq IV push' }
    ],
    correctOptionId: 'C',
    clinicalRationale: {
      keyTakeaway: 'In severe hyperkalemia with ECG changes, IV Calcium Gluconate is given FIRST because it immediately stabilizes the myocardial membrane threshold within 1 to 3 minutes, preventing fatal ventricular fibrillation.',
      explanation: 'While Insulin + Dextrose and Kayexalate lower serum potassium levels, they take 15 to 30 minutes (or hours in the case of resin). Calcium Gluconate does not lower potassium, but directly antagonizes the toxic cardiac membrane excitability of hyperkalemia within 1 to 3 minutes, saving the patient from imminent asystole or ventricular fibrillation.',
      whyOthersAreWrong: [
        { option: 'A', reason: 'Insulin + Dextrose shifts K+ into cells but takes 15-30 minutes to work; membrane stabilization must occur first.' },
        { option: 'B', reason: 'Kayexalate takes 2 to 4 hours to work via gastrointestinal exchange.' },
        { option: 'D', reason: 'Sodium bicarbonate is secondary and slower than calcium gluconate.' }
      ],
      priorityAlert: 'Calcium Gluconate stabilizes cardiac membranes; it does NOT alter serum K+ levels!'
    },
    difficulty: 'Hard',
    clinicalTag: 'Electrolyte Crisis & Resuscitation'
  },
  {
    id: 'AIIMS_NORCET_2024_S2_Q08',
    exam: 'AIIMS NORCET',
    year: 2024,
    session: 'Stage II (Clinical Skills)',
    subjectId: 'subj_obg_03',
    topicTitle: 'Obstetrics: Magnesium Sulfate Toxicity Monitoring',
    scenarioQuestion: 'A 28-year-old primi-gravida at 34 weeks gestation with severe preeclampsia is receiving continuous intravenous Magnesium Sulfate (MgSO4). During the hourly nursing assessment, which of the following findings represents the EARLIEST clinical sign of Magnesium Sulfate toxicity?',
    options: [
      { id: 'A', text: 'Respiratory rate decreases to 10 breaths per minute' },
      { id: 'B', text: 'Loss of Deep Tendon Reflexes (absent Patellar reflex)' },
      { id: 'C', text: 'Urine output drops to 15 mL in the last hour' },
      { id: 'D', text: 'Sudden onset of severe generalized tonic-clonic convulsions' }
    ],
    correctOptionId: 'B',
    clinicalRationale: {
      keyTakeaway: 'Loss of Deep Tendon Reflexes (Patellar/knee-jerk reflex) is the earliest clinical manifestation of Magnesium Sulfate toxicity (occurs at serum levels > 7 to 8 mEq/L).',
      explanation: 'Sequential manifestations of MgSO4 toxicity: 1) Loss of patellar reflex (> 7-8 mEq/L), 2) Respiratory depression < 12/min (> 10-12 mEq/L), 3) Cardiac arrest (> 12-15 mEq/L). The nurse must check patellar reflexes hourly before each dose.',
      whyOthersAreWrong: [
        { option: 'A', reason: 'Respiratory depression occurs at higher serum levels (> 10 mEq/L) following loss of reflexes.' },
        { option: 'C', reason: 'Oliguria is a cause of decreased excretion leading to toxicity, but not the earliest neuro sign.' },
        { option: 'D', reason: 'MgSO4 is an anticonvulsant; seizures indicate undertreatment (eclampsia), not toxicity.' }
      ],
      priorityAlert: 'Antidote for MgSO4 toxicity: 10 mL of 10% Calcium Gluconate slow IV over 5-10 minutes.'
    },
    difficulty: 'Moderate',
    clinicalTag: 'High-Alert Drug Monitoring'
  },
  {
    id: 'AIIMS_NORCET_2024_S1_Q11',
    exam: 'AIIMS NORCET',
    year: 2024,
    session: 'Stage I (Preliminary)',
    subjectId: 'subj_chn_06',
    topicTitle: 'Community: Biomedical Waste Management (BMW 2016)',
    scenarioQuestion: 'After completing a blood transfusion for an anemic patient, the nursing officer prepares to dispose of the empty blood transfusion bag and the attached IV blood administration tubing with filter. According to the Biomedical Waste Management (Amendment) Rules, which color-coded container should the BLOOD BAG be discarded into?',
    options: [
      { id: 'A', text: 'Red non-chlorinated plastic bag (Recyclable Plastics)' },
      { id: 'B', text: 'Yellow non-chlorinated plastic bag (Incineration / Deep burial)' },
      { id: 'C', text: 'White translucent puncture-proof container' },
      { id: 'D', text: 'Blue cardboard box with blue colored marking' }
    ],
    correctOptionId: 'B',
    clinicalRationale: {
      keyTakeaway: 'Under BMW Rules 2016/2018, Blood Bags ALWAYS go into the YELLOW container due to biohazard classification, whereas the plastic IV tubing without needles goes into the RED container.',
      explanation: 'Even though blood bags are made of plastic, they are classified as biological/infectious material because they carry whole blood and cells. Under BMW Rules, blood bags must be pre-treated by autoclaving/hydroclaving and then incinerated or sent for energy recovery, placing them strictly into the YELLOW container.',
      whyOthersAreWrong: [
        { option: 'A', reason: 'Contaminated IV tubing and syringes without needles go into Red, but Blood Bags are categorized in Yellow.' },
        { option: 'C', reason: 'White containers are strictly reserved for metal sharps and scalpels.' },
        { option: 'D', reason: 'Blue containers are reserved for glassware and metallic orthopedic implants.' }
      ],
      priorityAlert: 'Exam Trap: Plastic blood bag = YELLOW bin! Tubing & plastic syringe barrel = RED bin!'
    },
    difficulty: 'Moderate',
    clinicalTag: 'Biomedical Waste Segregation'
  },
  {
    id: 'AIIMS_NORCET_2023_S1_Q71',
    exam: 'AIIMS NORCET',
    year: 2023,
    session: 'Stage I (Preliminary)',
    subjectId: 'subj_pharm_07',
    topicTitle: 'Phlebotomy: Order of Draw & Cross-Contamination',
    scenarioQuestion: 'A nurse is collecting multiple blood specimens via venipuncture for blood culture, Complete Blood Count (CBC), and Coagulation profile (PT/INR). To prevent erroneous test results due to additive cross-contamination, which collection tube sequence is CORRECT according to CLSI guidelines?',
    options: [
      { id: 'A', text: 'Lavender (EDTA) -> Light Blue (Citrate) -> Blood Culture' },
      { id: 'B', text: 'Blood Culture Bottle -> Light Blue (Sodium Citrate) -> Lavender (EDTA)' },
      { id: 'C', text: 'Light Blue (Citrate) -> Blood Culture Bottle -> Lavender (EDTA)' },
      { id: 'D', text: 'Blood Culture Bottle -> Lavender (EDTA) -> Light Blue (Citrate)' }
    ],
    correctOptionId: 'B',
    clinicalRationale: {
      keyTakeaway: 'The CLSI phlebotomy order of draw is: Blood Cultures -> Light Blue (Citrate) -> Red/Gold (Serum) -> Green (Heparin) -> Lavender (EDTA) -> Grey (Fluoride).',
      explanation: 'Blood cultures must be drawn first to maintain surgical sterility. Light Blue (Citrate) for coagulation tests must precede Lavender (EDTA) because EDTA contains potassium salts and chelates calcium; drawing Lavender before Light Blue will falsely prolong clotting times and cause pseudohyperkalemia.',
      whyOthersAreWrong: [
        { option: 'A', reason: 'Drawing Lavender before Blue ruins coagulation testing.' },
        { option: 'C', reason: 'Blood culture must always be drawn first before any vacuum tube.' },
        { option: 'D', reason: 'Lavender must never precede Blue or Red/Green tubes.' }
      ],
      priorityAlert: 'Memory Mnemonic: "Boys Light Red Gowns Every Grey Day" (Blood culture, Light blue, Red, Green, EDTA, Grey).'
    },
    difficulty: 'Moderate',
    clinicalTag: 'Phlebotomy Order of Draw'
  },
  {
    id: 'AIIMS_NORCET_2023_S1_Q55',
    exam: 'AIIMS NORCET',
    year: 2023,
    session: 'Stage I (Preliminary)',
    subjectId: 'subj_fon_01',
    topicTitle: 'Fundamentals: Pediatric IV Micro-drip Calculation',
    scenarioQuestion: 'A doctor orders 500 mL of 0.45% Normal Saline to be infused over 8 hours for a 5-year-old child using a standard pediatric micro-drip burette set (drop factor: 60 gtt/mL). At what flow rate should the nursing officer regulate the infusion in drops per minute (gtt/min)?',
    options: [
      { id: 'A', text: '31 gtt/min' },
      { id: 'B', text: '63 gtt/min' },
      { id: 'C', text: '125 gtt/min' },
      { id: 'D', text: '21 gtt/min' }
    ],
    correctOptionId: 'B',
    clinicalRationale: {
      keyTakeaway: 'Formula: Flow Rate (gtt/min) = [Total Volume (mL) × Drop Factor (gtt/mL)] ÷ [Time in Minutes]. With a micro-drip set (60 gtt/mL), gtt/min is numerically identical to mL/hr!',
      explanation: 'Step 1: Calculate hourly rate = 500 mL ÷ 8 hours = 62.5 mL/hr.\nStep 2: Using the micro-drip shortcut (60 gtt/mL ÷ 60 min = 1), Drop rate = 62.5 gtt/min.\nStep 3: Round to the nearest whole integer = 63 gtt/min.',
      whyOthersAreWrong: [
        { option: 'A', reason: '31 gtt/min results from erroneously assuming a 16-hour duration.' },
        { option: 'C', reason: '125 gtt/min results from calculating for a 4-hour window.' },
        { option: 'D', reason: '21 gtt/min is the result if using a macro-drip factor of 20 gtt/mL instead of micro-drip (60 gtt/mL).' }
      ],
      priorityAlert: 'Clinical Rule: Always round drops per minute to the nearest WHOLE integer because a fraction of a drop cannot be delivered.'
    },
    difficulty: 'Moderate',
    clinicalTag: 'IV Flow Rate Arithmetic'
  },
  {
    id: 'DSSSB_2022_Q19',
    exam: 'DSSSB',
    year: 2022,
    session: 'Specialist Nursing',
    subjectId: 'subj_fon_01',
    topicTitle: 'Pharmacology: Dopamine Inotropic Titration',
    scenarioQuestion: 'A 70 kg patient in cardiogenic shock is prescribed Dopamine at 5 mcg/kg/min. The solution prepared contains 400 mg of Dopamine in 250 mL of D5W. At what rate in mL/hr should the infusion pump be programmed?',
    options: [
      { id: 'A', text: '13.1 mL/hr' },
      { id: 'B', text: '22.5 mL/hr' },
      { id: 'C', text: '8.4 mL/hr' },
      { id: 'D', text: '16.8 mL/hr' }
    ],
    correctOptionId: 'A',
    clinicalRationale: {
      keyTakeaway: 'Concentration = 400 mg ÷ 250 mL = 1.6 mg/mL = 1600 mcg/mL. Dose/min = 5 mcg/kg/min × 70 kg = 350 mcg/min = 21,000 mcg/hr. Rate = 21,000 ÷ 1600 = 13.125 mL/hr ≈ 13.1 mL/hr.',
      explanation: 'Standard formula: Infusion Rate (mL/hr) = [Prescribed Dose (mcg/kg/min) × Weight (kg) × 60 min] ÷ Drug Concentration (mcg/mL).\nCalculation: [5 × 70 × 60] ÷ 1600 = 21,000 ÷ 1600 = 13.125 mL/hr.',
      whyOthersAreWrong: [
        { option: 'B', reason: '22.5 mL/hr results from forgetting the 60 min/hr conversion factor.' },
        { option: 'C', reason: '8.4 mL/hr is derived from using an uncalibrated concentration.' },
        { option: 'D', reason: '16.8 mL/hr would occur at a higher dose titration of 6.4 mcg/kg/min.' }
      ],
      priorityAlert: 'High Alert: Double-check all vasoactive inotrope and vasopressor pump rates with a second licensed nursing officer!'
    },
    difficulty: 'Hard',
    clinicalTag: 'Vasoactive Drug Titration'
  },
  {
    id: 'ESIC_2019_Q44',
    exam: 'ESIC',
    year: 2019,
    session: 'Nursing Officer Selection',
    subjectId: 'subj_fon_01',
    topicTitle: 'Fundamentals: IV Cannula Selection for Blood Transfusion',
    scenarioQuestion: 'A nursing officer is assigned to initiate a transfusion of 2 units of Packed Red Blood Cells (PRBC) for an adult patient with severe chronic anemia. Which IV cannula gauge is the recognized gold standard to prevent mechanical red cell hemolysis?',
    options: [
      { id: 'A', text: '24G Yellow' },
      { id: 'B', text: '22G Blue' },
      { id: 'C', text: '18G Green' },
      { id: 'D', text: '26G Violet' }
    ],
    correctOptionId: 'C',
    clinicalRationale: {
      keyTakeaway: '18G Green cannula (1.3 mm diameter, ~90 mL/min flow rate) is the recognized clinical gold standard for blood transfusions in adult patients.',
      explanation: 'The larger internal lumen of an 18G cannula reduces shear stress on erythrocyte membranes, preventing in-line hemolysis during high-viscosity blood administration. While a 20G Pink cannula can be used in difficult peripheral veins, 18G Green remains the textbook standard.',
      whyOthersAreWrong: [
        { option: 'A', reason: '24G Yellow has an extremely narrow lumen (0.7 mm); infusing blood cells will cause rapid hemolysis and lumen clogging.' },
        { option: 'B', reason: '22G Blue is typically reserved for maintenance crystalloids in fragile veins.' },
        { option: 'D', reason: '26G Violet is strictly used in premature neonates.' }
      ],
      priorityAlert: 'Never use 24G or 26G for PRBC transfusions — cellular shearing causes massive hemoglobinuria and acute kidney injury.'
    },
    difficulty: 'Easy',
    clinicalTag: 'IV Catheter Specifications'
  },
  {
    id: 'RRB_2019_Q08',
    exam: 'RRB',
    year: 2019,
    session: 'Staff Nurse Examination',
    subjectId: 'subj_fon_01',
    topicTitle: 'Emergency: Trauma Resuscitation Cannula Sizing',
    scenarioQuestion: 'A 28-year-old motor vehicle crash victim is brought to the emergency department in hypovolemic hemorrhagic shock. Which size peripheral IV cannula should the emergency nurse insert immediately for rapid large-volume fluid resuscitation?',
    options: [
      { id: 'A', text: '16G Grey (or 14G Orange)' },
      { id: 'B', text: '20G Pink' },
      { id: 'C', text: '22G Blue' },
      { id: 'D', text: '24G Yellow' }
    ],
    correctOptionId: 'A',
    clinicalRationale: {
      keyTakeaway: 'Poiseuille’s Law states flow rate is proportional to the 4th power of the radius. Large-bore cannulas (14G Orange ~240 mL/min, 16G Grey ~180 mL/min) are mandatory in acute shock.',
      explanation: 'For massive volume resuscitation in hemorrhagic shock, two large-bore peripheral IV lines (14G or 16G) in the antecubital fossa are the first priority before central venous catheterization.',
      whyOthersAreWrong: [
        { option: 'B', reason: '20G Pink delivers only ~60 mL/min, insufficient for rapid shock reversal.' },
        { option: 'C', reason: '22G delivers ~36 mL/min, too slow for acute trauma resuscitation.' },
        { option: 'D', reason: '24G is an infant cannula delivering only ~20 mL/min.' }
      ],
      priorityAlert: 'Two large-bore peripheral lines (14G/16G) deliver fluid faster than a standard multi-lumen central venous catheter!'
    },
    difficulty: 'Easy',
    clinicalTag: 'Trauma Resuscitation'
  },
  {
    id: 'AIIMS_NORCET_2024_S2_Q45',
    exam: 'AIIMS NORCET',
    year: 2024,
    session: 'Stage II (Clinical Skills)',
    subjectId: 'subj_pharm_07',
    topicTitle: 'Pharmacology: Heparin Toxicity & Antidote Protocol',
    scenarioQuestion: 'A patient receiving continuous IV Unfractionated Heparin infusion for Pulmonary Embolism develops sudden hematuria and epistaxis. Laboratory results reveal an aPTT of >150 seconds. The physician orders immediate reversal. Which specific antidote should the nurse prepare?',
    options: [
      { id: 'A', text: 'Vitamin K (Phytonadione)' },
      { id: 'B', text: 'Protamine Sulfate' },
      { id: 'C', text: 'Calcium Gluconate 10%' },
      { id: 'D', text: 'Flumazenil' }
    ],
    correctOptionId: 'B',
    clinicalRationale: {
      keyTakeaway: 'Protamine Sulfate is the specific chemical antagonist for Unfractionated Heparin (1 mg of protamine neutralizes approx. 100 USP units of heparin).',
      explanation: 'Protamine is a strongly basic polycationic protein that forms a stable, inactive salt complex with acidic heparin. It must be administered by slow IV push (over 10 minutes) to prevent severe anaphylactoid reactions and profound hypotension.',
      whyOthersAreWrong: [
        { option: 'A', reason: 'Vitamin K is the antidote for Warfarin (Coumadin), which acts on factors II, VII, IX, X.' },
        { option: 'C', reason: 'Calcium Gluconate is the antidote for Magnesium Sulfate toxicity and severe hyperkalemia.' },
        { option: 'D', reason: 'Flumazenil is the selective competitive antagonist for Benzodiazepine overdose.' }
      ],
      priorityAlert: 'Never push Protamine rapidly: rapid bolus triggers severe hypotension, bradycardia, and acute pulmonary edema!'
    },
    difficulty: 'Moderate',
    clinicalTag: 'Critical Antidotes'
  },
  {
  "id": "AIIMS_NORCET_2024_S1_Q88",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_fon_01",
  "topicTitle": "Fundamentals: Oxygen Delivery in Chronic Hypercapnia (COPD)",
  "scenarioQuestion": "A 68-year-old male with a 20-year history of severe Chronic Obstructive Pulmonary Disease (COPD) presents with acute dyspnea. His baseline ABG reveals PaCO2 58 mmHg and PaO2 52 mmHg. The emergency physician orders controlled oxygen therapy. Which delivery device should the nurse select to deliver an exact, predictable FiO2 without abolishing the hypoxic drive?",
  "options": [
    {
      "id": "A",
      "text": "Non-Rebreather Mask (NRBM) at 12 L/min"
    },
    {
      "id": "B",
      "text": "Venturi Mask with Blue/White adaptor (24%–28% FiO2)"
    },
    {
      "id": "C",
      "text": "Simple Face Mask at 3 L/min"
    },
    {
      "id": "D",
      "text": "Partial Rebreathing Mask at 8 L/min"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "The Venturi Mask is the gold-standard high-flow fixed-performance device for COPD patients, delivering precise low-concentration FiO2 (24%–28%) regardless of the patient's respiratory pattern.",
    "explanation": "In chronic COPD retainers, central chemoreceptors are desensitized to elevated CO2; respiration is driven primarily by peripheral chemoreceptor hypoxia (hypoxic drive). Administering high-concentration oxygen via NRBM quenches this hypoxic drive, causing acute hypoventilation, CO2 narcosis, and respiratory arrest. A Venturi mask delivers an exact, fixed FiO2 and prevents hyperoxic hypoventilation.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "An NRBM delivers 80%–95% FiO2, which extinguishes the hypoxic drive in COPD retainers."
      },
      {
        "option": "C",
        "reason": "A simple face mask at 3 L/min is unsafe; minimum flow rate must be 5 L/min to flush exhaled CO2."
      },
      {
        "option": "D",
        "reason": "Partial rebreathers do not deliver fixed, calibrated FiO2."
      }
    ],
    "priorityAlert": "Clinical Rule: Target SpO2 in chronic hypercapnic COPD is 88%–92%, NEVER 100%!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Oxygen Delivery Systems"
},
  {
  "id": "AIIMS_NORCET_2023_S2_Q39",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_fon_01",
  "topicTitle": "Critical Care: Endotracheal Suctioning Complications",
  "scenarioQuestion": "While a nursing officer is performing endotracheal suctioning on a mechanically ventilated patient in the ICU, the bedside cardiac monitor suddenly displays severe sinus bradycardia with HR dropping from 86 bpm to 38 bpm. Which of the following is the nurse's IMMEDIATE priority action?",
  "options": [
    {
      "id": "A",
      "text": "Increase suction vacuum pressure to 160 mmHg to clear secretions faster."
    },
    {
      "id": "B",
      "text": "Immediately withdraw the catheter, stop suctioning, and hyperventilate with 100% oxygen."
    },
    {
      "id": "C",
      "text": "Push 1 mg IV Atropine through the central line without interrupting suctioning."
    },
    {
      "id": "D",
      "text": "Instill 10 mL of sterile Normal Saline down the ET tube to loosen mucous plugs."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Immediate action during suction-induced bradycardia or severe desaturation is to withdraw the catheter, discontinue negative pressure, and hyperventilate with 100% O2.",
    "explanation": "Endotracheal suctioning stimulates the vagus nerve (parasympathetic surge) and induces acute alveolar hypoxia, triggering profound bradycardia and dysrhythmias. The nurse must immediately cease suctioning, withdraw the catheter, and manually ventilate or hyperoxygenate the patient with 100% FiO2 until heart rate and SpO2 recover.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Increasing vacuum pressure intensifies hypoxemia and increases myocardial ischemia."
      },
      {
        "option": "C",
        "reason": "Atropine may be needed if bradycardia is refractory, but stopping the causative stimulus (suction) takes precedence."
      },
      {
        "option": "D",
        "reason": "Routine saline instillation is strictly contraindicated in modern guidelines because it flushes biofilm into the lungs, increasing VAP rates."
      }
    ],
    "priorityAlert": "Never suction continuously for more than 10–15 seconds! Always pre-oxygenate with 100% O2 for at least 30–60 seconds."
  },
  "difficulty": "Hard",
  "clinicalTag": "Airway Suctioning Protocol"
},
  {
  "id": "AIIMS_NORCET_2024_S1_Q92",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_fon_01",
  "topicTitle": "Fundamentals: Pressure Injury (Braden Scale & Staging)",
  "scenarioQuestion": "Upon inspecting the sacral region of an immobilized bedridden stroke patient, the nurse observes an area of partial-thickness loss of dermis presenting as a shallow open ulcer with a red-pink wound bed, without slough. An adjacent intact serum-filled blister is also noted. According to NPUAP guidelines, how should this pressure injury be staged?",
  "options": [
    {
      "id": "A",
      "text": "Stage I"
    },
    {
      "id": "B",
      "text": "Stage II"
    },
    {
      "id": "C",
      "text": "Stage III"
    },
    {
      "id": "D",
      "text": "Unstageable"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Stage II Pressure Injury presents as partial-thickness loss of dermis with a shallow open ulcer (viable pink/red bed) OR as an intact or ruptured serum-filled blister.",
    "explanation": "Stage I involves intact skin with non-blanchable erythema. Stage II involves epidermis and dermis loss without visible subcutaneous fat. Stage III involves full-thickness skin loss where subcutaneous fat is visible. An intact or ruptured serum-filled blister is pathognomonic for Stage II.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Stage I skin is completely intact."
      },
      {
        "option": "C",
        "reason": "Stage III extends through dermis into subcutaneous fat."
      },
      {
        "option": "D",
        "reason": "Unstageable requires the wound base to be completely obscured by slough or eschar."
      }
    ],
    "priorityAlert": "Exam Rule: A blister containing serosanguinous fluid is Stage II; a blood-filled blister is classified as a Deep Tissue Pressure Injury (DTPI)."
  },
  "difficulty": "Easy",
  "clinicalTag": "Pressure Injury Staging"
},
  {
  "id": "AIIMS_NORCET_2023_S1_Q64",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_msn_02",
  "topicTitle": "Critical Care: Ventilator High-Pressure Alarm Emergency",
  "scenarioQuestion": "A mechanically ventilated patient with ARDS suddenly triggers a continuous HIGH-PRESSURE limit alarm. The nurse notes acute tachycardia (HR 134 bpm), blood pressure drop from 124/80 to 76/44 mmHg, absent breath sounds on the right side, and tracheal shift to the left. What life-threatening complication has occurred?",
  "options": [
    {
      "id": "A",
      "text": "Endotracheal tube pilot cuff rupture"
    },
    {
      "id": "B",
      "text": "Right-sided Tension Pneumothorax"
    },
    {
      "id": "C",
      "text": "Pulmonary Embolism"
    },
    {
      "id": "D",
      "text": "Ventilator tubing disconnection"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "The clinical triad of sudden ventilator high-pressure alarm, absent unilateral breath sounds, contralateral tracheal deviation, and obstructive shock indicates a Tension Pneumothorax.",
    "explanation": "High positive inspiratory pressures and PEEP in ARDS can rupture lung blebs, producing a tension pneumothorax. Air enters the pleural space during inspiration but cannot escape, compressing the superior and inferior vena cava, collapsing venous return, and shifting the trachea away from the affected side. Immediate emergency 14G needle decompression at the 2nd intercostal space midclavicular line is mandatory before waiting for a chest X-ray.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Cuff rupture produces a LOW-pressure alarm due to air leaking past the cords."
      },
      {
        "option": "C",
        "reason": "Pulmonary embolism does not cause unilateral absent breath sounds or tracheal deviation."
      },
      {
        "option": "D",
        "reason": "Ventilator circuit disconnection triggers a LOW-pressure alarm."
      }
    ],
    "priorityAlert": "Never send a patient with suspected tension pneumothorax for an X-ray — it is a pure bedside clinical diagnosis requiring immediate needle decompression!"
  },
  "difficulty": "Hard",
  "clinicalTag": "Ventilator Alarm Troubleshooting"
},
  {
  "id": "AIIMS_NORCET_2024_S2_Q18",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_msn_02",
  "topicTitle": "Surgical: Chest Drainage Water-Seal Chamber Bubbling",
  "scenarioQuestion": "While assessing an underwater-seal chest tube drainage unit on post-operative day 1 following a lobectomy, the nurse notices CONTINUOUS, VIGOROUS BUBBLING in the water-seal chamber. What is the clinical significance of this finding?",
  "options": [
    {
      "id": "A",
      "text": "The patient's lung has fully re-expanded and the tube can be removed."
    },
    {
      "id": "B",
      "text": "An active air leak is present somewhere within the drainage system or pleural space."
    },
    {
      "id": "C",
      "text": "The suction control chamber is set to an optimal negative pressure of -20 cmH2O."
    },
    {
      "id": "D",
      "text": "Normal fluctuation (tidaling) associated with spontaneous inspiration."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Continuous bubbling in the WATER-SEAL chamber indicates an AIR LEAK. In contrast, gentle continuous bubbling in the SUCTION CONTROL chamber is completely normal.",
    "explanation": "The water-seal chamber allows air to exit the pleural cavity during expiration/coughing (intermittent bubbling is normal initially). However, continuous bubbling signifies atmospheric or pulmonary air continually entering the closed circuit. The nurse should cross-clamp momentarily near the chest insertion site: if bubbling stops, the leak is from the patient/insertion site; if bubbling continues, the leak is in the tubing/chamber unit.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Full re-expansion is characterized by cessation of tidaling and no air leak."
      },
      {
        "option": "C",
        "reason": "Suction pressure is evaluated in the suction control chamber, not water-seal."
      },
      {
        "option": "D",
        "reason": "Tidaling is the rise and fall of water level, not continuous bubbling."
      }
    ],
    "priorityAlert": "Exam Distinction: Continuous bubbling in Suction chamber = NORMAL. Continuous bubbling in Water-Seal chamber = AIR LEAK!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Chest Drainage Mechanics"
},
  {
  "id": "AIIMS_NORCET_2023_S1_Q82",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_msn_02",
  "topicTitle": "Endocrine: Diabetic Ketoacidosis (DKA) Potassium Safeguard",
  "scenarioQuestion": "A 24-year-old female arrives in the emergency department with DKA (Blood Glucose: 520 mg/dL, pH: 7.15, HCO3: 10 mEq/L). Laboratory electrolytes return: Serum Potassium is 3.1 mEq/L. Which prescribed action must the nurse carry out FIRST?",
  "options": [
    {
      "id": "A",
      "text": "Administer prescribed IV Regular Insulin bolus at 0.1 units/kg."
    },
    {
      "id": "B",
      "text": "Hold insulin administration and initiate IV potassium chloride replacement."
    },
    {
      "id": "C",
      "text": "Infuse 5% Dextrose in 0.45% Normal Saline at 250 mL/hr."
    },
    {
      "id": "D",
      "text": "Administer 50 mEq of Sodium Bicarbonate IV push."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "In DKA, if serum potassium is < 3.3 mEq/L, INSULIN MUST BE HELD and potassium infused until K+ is > 3.3 mEq/L to prevent fatal cardiac arrest.",
    "explanation": "Insulin drives potassium out of the vascular space into cells via the Na+/K+ ATPase pump. Administering insulin when serum K+ is already low (3.1 mEq/L) will trigger profound, fatal hypokalemia, inducing lethal ventricular arrhythmias (v-fib, torsades de pointes) and respiratory muscle paralysis.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Starting insulin immediately when K+ < 3.3 mEq/L can cause sudden cardiac death."
      },
      {
        "option": "C",
        "reason": "Dextrose is only added when blood glucose drops below 250 mg/dL."
      },
      {
        "option": "D",
        "reason": "Bicarbonate is not recommended unless pH is < 6.9, as it worsens intracellular acidosis and hypokalemia."
      }
    ],
    "priorityAlert": "Golden Rule in DKA: Check Potassium BEFORE Insulin. If K+ < 3.3 mEq/L: Stop Insulin, Start Potassium!"
  },
  "difficulty": "Hard",
  "clinicalTag": "DKA Potassium Protocol"
},
  {
  "id": "AIIMS_NORCET_2023_S2_Q15",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_obg_03",
  "topicTitle": "Obstetrics: Postpartum Hemorrhage Uterotonic Contraindications",
  "scenarioQuestion": "A primigravida delivered vaginally 30 minutes ago. The placenta delivered intact, but the nurse palpates a boggy uterus and notes heavy vaginal bleeding (> 600 mL). The patient's blood pressure is 156/102 mmHg and HR is 110 bpm. The physician orders an ergot alkaloid. Which medication is STRICTLY CONTRAINDICATED in this patient?",
  "options": [
    {
      "id": "A",
      "text": "Oxytocin 20 units in 500 mL RL"
    },
    {
      "id": "B",
      "text": "Methylergometrine (Methergine) 0.2 mg IM"
    },
    {
      "id": "C",
      "text": "Misoprostol 800 mcg per rectum"
    },
    {
      "id": "D",
      "text": "Tranexamic Acid 1 g slow IV"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Methylergometrine (Methergine) is ABSOLUTELY CONTRAINDICATED in hypertensive states, preeclampsia, and heart disease because it triggers severe generalized vasoconstriction and stroke.",
    "explanation": "Methergine causes potent, sustained tonic myometrial contraction and systemic arteriolar vasoconstriction. In a patient with baseline hypertension (BP 156/102 mmHg), Methergine can cause acute hypertensive encephalopathy, intracranial hemorrhage, and myocardial infarction. Oxytocin or Misoprostol are the preferred alternatives.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Oxytocin is the first-line drug of choice and does not cause severe hypertension."
      },
      {
        "option": "C",
        "reason": "Misoprostol is safe to use in hypertensive postpartum women."
      },
      {
        "option": "D",
        "reason": "Tranexamic acid is an antifibrinolytic indicated in PPH within 3 hours of birth."
      }
    ],
    "priorityAlert": "Exam Pairings: Methergine = Contraindicated in HYPERTENSION! Carboprost (Hemabate) = Contraindicated in ASTHMA!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Uterotonic Drug Safety"
},
  {
  "id": "AIIMS_NORCET_2023_S1_Q44",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_obg_03",
  "topicTitle": "Obstetrics: Fetal Heart Rate Decelerations (VEAL CHOP)",
  "scenarioQuestion": "A laboring woman receiving an oxytocin infusion at 12 mU/min has an external electronic fetal monitor attached. The tracing reveals repetitive decelerations in fetal heart rate that begin AFTER the peak of the uterine contraction and do not return to baseline until after the contraction has fully resolved. Which is the nurse's FIRST intervention?",
  "options": [
    {
      "id": "A",
      "text": "Increase the oxytocin infusion rate to accelerate delivery."
    },
    {
      "id": "B",
      "text": "Turn off the oxytocin infusion immediately and turn the mother onto her left side."
    },
    {
      "id": "C",
      "text": "Perform immediate vaginal examination to check for cord prolapse."
    },
    {
      "id": "D",
      "text": "Reassure the mother that this is a benign head compression pattern."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Late decelerations indicate Uteroplacental Insufficiency (VEAL CHOP: Late = Placental insufficiency). Immediate action is to STOP OXYTOCIN and reposition mother into the left lateral position.",
    "explanation": "Late decelerations signal that uterine contractions are compressing compromised placental vessels, inducing fetal hypoxia and acidemia. The nurse's immediate priorities are: 1. Discontinue Oxytocin, 2. Reposition to left lateral (relieves vena caval compression and enhances uteroplacental perfusion), 3. Administer 10 L/min O2 via NRBM, 4. Increase IV maintenance fluids, 5. Notify obstetrician for urgent operative delivery.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Increasing Oxytocin exacerbates uterine hypertonus and accelerates fetal asphyxiation."
      },
      {
        "option": "C",
        "reason": "Cord prolapse causes Variable decelerations; repositioning and stopping oxytocin must precede PV exam."
      },
      {
        "option": "D",
        "reason": "Early decelerations (not late) are due to benign fetal head compression."
      }
    ],
    "priorityAlert": "Mnemonic VEAL CHOP: Variable = Cord compression, Early = Head compression, Accelerations = Okay, Late = Placental insufficiency."
  },
  "difficulty": "Moderate",
  "clinicalTag": "Fetal Heart Rate Monitoring"
},
  {
  "id": "AIIMS_NORCET_2023_S1_Q36",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_peds_04",
  "topicTitle": "Pediatrics: Acute Epiglottitis Airway Warning",
  "scenarioQuestion": "A 4-year-old child is brought to the triage desk sitting upright, leaning forward with neck extended, mouth open, and drooling saliva. The child appears toxic, febrile (39.5°C), and in significant respiratory distress with inspiratory stridor. Which action by the nurse is STRICTLY FORBIDDEN?",
  "options": [
    {
      "id": "A",
      "text": "Allow the child to remain in the parent's lap in a position of comfort."
    },
    {
      "id": "B",
      "text": "Use a tongue blade to inspect the posterior oropharynx for an inflamed cherry-red epiglottis."
    },
    {
      "id": "C",
      "text": "Notify the pediatric anesthesiologist and prepare equipment for emergency endotracheal intubation."
    },
    {
      "id": "D",
      "text": "Administer humidified oxygen by blow-by technique without agitating the child."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "NEVER examine the throat with a tongue depressor or perform a throat swab in suspected epiglottitis — it triggers sudden, total laryngospasm and fatal complete airway obstruction.",
    "explanation": "The classic presentation of Acute Epiglottitis (caused by Haemophilus influenzae type B) is the \"4Ds\": Drooling, Dysphagia, Dysphonia, and Distressed inspiratory stridor with Tripod positioning. Inserting any instrument into the inflamed pharynx can trigger reflex vagal laryngospasm, transforming partial obstruction into absolute airway closure. The child must be kept calm in a parent's lap until airway control is established in the operating room.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Allowing the child to remain in a comfortable position prevents agitation and acute obstruction."
      },
      {
        "option": "C",
        "reason": "Immediate airway preparedness with an expert anesthesiologist is mandatory."
      },
      {
        "option": "D",
        "reason": "Blow-by oxygen provides supplemental FiO2 without terrifying the toddler."
      }
    ],
    "priorityAlert": "Cardinal Rule: Child + Drooling + Tripod position = Epiglottitis! DO NOT TOUCH THE THROAT!"
  },
  "difficulty": "Easy",
  "clinicalTag": "Pediatric Airway Emergencies"
},
  {
  "id": "AIIMS_NORCET_2023_S2_Q52",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_psych_05",
  "topicTitle": "Psychiatry: Neuroleptic Malignant Syndrome (NMS)",
  "scenarioQuestion": "A 32-year-old male with paranoid schizophrenia receiving Haloperidol 10 mg IM daily develops acute confusion, severe generalized \"lead-pipe\" muscle rigidity, diaphoresis, and a temperature of 40.2°C (104.4°F). His blood pressure is 184/110 mmHg and pulse is 128 bpm. Serum Creatine Kinase (CK) is 12,400 U/L. Which pharmacological agent is the primary choice for skeletal muscle relaxation in this emergency?",
  "options": [
    {
      "id": "A",
      "text": "Benztropine (Cogentin)"
    },
    {
      "id": "B",
      "text": "Dantrolene Sodium"
    },
    {
      "id": "C",
      "text": "Haloperidol dose increase"
    },
    {
      "id": "D",
      "text": "Propranolol"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Dantrolene Sodium is a direct-acting skeletal muscle relaxant that dissociates excitation-contraction coupling by inhibiting calcium release from the sarcoplasmic reticulum, resolving lead-pipe rigidity in NMS.",
    "explanation": "This patient presents with the life-threatening triad of Neuroleptic Malignant Syndrome (NMS): hyperthermia, severe \"lead-pipe\" rigidity, autonomic storm, and massive rhabdomyolysis (CK > 10,000 U/L). First priority is to stop the causative neuroleptic immediately. Pharmacotherapy includes Dantrolene (muscle relaxant) and Bromocriptine (dopamine receptor agonist).",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Benztropine treats acute dystonia and Parkinsonism, but has no efficacy against NMS and worsens hyperthermia by impairing sweating."
      },
      {
        "option": "C",
        "reason": "Increasing Haloperidol would be lethal as it is the causative dopamine antagonist."
      },
      {
        "option": "D",
        "reason": "Propranolol treats akathisia, not NMS."
      }
    ],
    "priorityAlert": "Emergency Management of NMS: 1. Stop Antipsychotic, 2. Aggressive External Cooling, 3. IV Fluids, 4. Dantrolene + Bromocriptine."
  },
  "difficulty": "Hard",
  "clinicalTag": "Psychiatric Emergencies"
},
  {
  "id": "AIIMS_NORCET_2024_S1_Q63",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_chn_06",
  "topicTitle": "Community: Cold Chain & Vaccine Reconstitution Protocols",
  "scenarioQuestion": "At a primary health centre immunization clinic, the public health nurse reconstitutes a multi-dose vial of BCG vaccine with sterile Normal Saline diluent at 09:00 AM. By 01:30 PM, three doses remain in the vial. What is the mandatory action regarding the remaining vaccine?",
  "options": [
    {
      "id": "A",
      "text": "Keep the vial in the ILR at 2°C to 8°C and use it at tomorrow's session."
    },
    {
      "id": "B",
      "text": "Discard the vial immediately because it has exceeded the strict 4-hour post-reconstitution limit."
    },
    {
      "id": "C",
      "text": "Add 1 mL of sterile water to restore volume and continue administration."
    },
    {
      "id": "D",
      "text": "Perform a Shake Test before deciding whether to administer."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Reconstituted BCG, Measles, MR, and Japanese Encephalitis (JE) vaccines DO NOT contain preservatives and MUST be discarded within strictly 4 HOURS of opening.",
    "explanation": "Live attenuated lyophilized vaccines (BCG, Measles/MR) lack chemical preservatives. Storing reconstituted vaccines beyond 4 hours leads to rapid bacterial multiplication (commonly Staphylococcus aureus contamination), causing catastrophic Toxic Shock Syndrome (TSS) in vaccine recipients.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Reconstituted BCG cannot be stored overnight even at 2°C–8°C."
      },
      {
        "option": "C",
        "reason": "Never add additional diluent to a reconstituted vaccine vial."
      },
      {
        "option": "D",
        "reason": "The Shake Test is used exclusively for freeze-sensitive adsorbed liquid vaccines (DPT, TT, HepB), never for reconstituted BCG."
      }
    ],
    "priorityAlert": "Clinical Rule: Reconstituted BCG, MR, and JE vials have a lifespan of exactly 4 HOURS on ice. Discard at the 4-hour mark!"
  },
  "difficulty": "Easy",
  "clinicalTag": "Immunization Safety Guidelines"
},
  {
  "id": "AIIMS_NORCET_2023_S1_Q28",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_pharm_07",
  "topicTitle": "Pharmacology: Digoxin Toxicity & Hypokalemia Link",
  "scenarioQuestion": "A 72-year-old patient with congestive heart failure receiving Digoxin 0.25 mg daily and Furosemide (Lasix) 40 mg daily reports seeing \"yellow-green haloes\" around hospital light fixtures and experiencing nausea. The nurse notes an irregular apical pulse of 52 bpm. The laboratory calls with a critical value: Serum Potassium is 2.8 mEq/L. What is the pharmacological mechanism explaining this patient's toxicity?",
  "options": [
    {
      "id": "A",
      "text": "Hyperkalemia displaces Digoxin from cardiac receptor sites."
    },
    {
      "id": "B",
      "text": "Hypokalemia allows increased binding of Digoxin to myocardial Na+/K+ ATPase pumps, potentiating toxicity."
    },
    {
      "id": "C",
      "text": "Furosemide competitively inhibits Digoxin metabolism in the liver."
    },
    {
      "id": "D",
      "text": "Digoxin directly suppresses parathyroid hormone secretion."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Hypokalemia potentiates Digoxin toxicity because Potassium and Digoxin compete for binding sites on myocardial Na+/K+ ATPase pumps. Low serum K+ increases Digoxin binding, triggering toxic arrhythmias even at normal drug levels.",
    "explanation": "Loop diuretics like Furosemide waste potassium in the loop of Henle. When serum K+ drops below 3.5 mEq/L, fewer potassium ions compete with Digoxin, allowing toxic hyper-inotropic and arrhythmogenic effects. The nurse must hold Digoxin, notify the physician, check serum Digoxin level, and initiate IV potassium replacement.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Hyperkalemia reduces Digoxin binding; it is hypokalemia that potentiates toxicity."
      },
      {
        "option": "C",
        "reason": "The interaction is pharmacodynamic via potassium depletion, not hepatic enzyme inhibition."
      },
      {
        "option": "D",
        "reason": "Digoxin does not regulate parathyroid hormone."
      }
    ],
    "priorityAlert": "Classic Digoxin Toxicity Signs: Anorexia & Nausea (earliest), Bradycardia (< 60 bpm), and Yellow-Green visual halos!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Digoxin Safety Rules"
},
  {
  "id": "AIIMS_NORCET_2024_S1_Q19",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_apt_08",
  "topicTitle": "Public Health: Landmark Healthcare Committees & PHC Concept",
  "scenarioQuestion": "In the history of public health administration in India, which landmark committee first conceptualized the comprehensive Primary Health Centre (PHC) providing integrated curative and preventive services to a rural population of 40,000?",
  "options": [
    {
      "id": "A",
      "text": "Mudaliar Committee (1962)"
    },
    {
      "id": "B",
      "text": "Bhore Committee (1946)"
    },
    {
      "id": "C",
      "text": "Kartar Singh Committee (1973)"
    },
    {
      "id": "D",
      "text": "Srivastava Committee (1975)"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "The Bhore Committee (Health Survey and Development Committee, 1946) established the foundation of modern Indian public health by recommending the 3-tier Primary Health Centre system.",
    "explanation": "Sir Joseph Bhore's committee emphasized that no individual should lack access to medical care due to inability to pay. Key recommendations included: 1. Primary Health Centres as basic healthcare delivery units, 2. 3-month medical internship in community medicine, 3. Abolition of private practice for government medical officers.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Mudaliar Committee (1962) recommended strengthening district hospitals and limiting PHC coverage to 40,000."
      },
      {
        "option": "C",
        "reason": "Kartar Singh Committee (1973) created Multi-Purpose Health Workers (MPW)."
      },
      {
        "option": "D",
        "reason": "Srivastava Committee (1975) established Village Health Guides and the Reorientation of Medical Education (ROME) scheme."
      }
    ],
    "priorityAlert": "Mnemonic: Bhore = Basic PHC; Kartar = Multi-Purpose Workers; Srivastava = Village Health Guides!"
  },
  "difficulty": "Easy",
  "clinicalTag": "Healthcare Committees"
},
  {
  "id": "AIIMS_NORCET_2024_S2_Q31",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_psych_05",
  "topicTitle": "Psychiatry: Ego Defense Mechanisms Differentiation",
  "scenarioQuestion": "A client with a history of severe aggressive impulses and a desire to physically assault others channels these violent urges into becoming a highly successful professional heavyweight boxer. Which mature defense mechanism is this individual utilizing?",
  "options": [
    {
      "id": "A",
      "text": "Reaction Formation"
    },
    {
      "id": "B",
      "text": "Sublimation"
    },
    {
      "id": "C",
      "text": "Projection"
    },
    {
      "id": "D",
      "text": "Displacement"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Sublimation is the mature ego defense mechanism wherein socially unacceptable drives (e.g., aggression, hostility) are unconsciously transformed and channeled into socially acceptable, productive activities.",
    "explanation": "Sublimation channels unacceptable primitive instincts into constructive channels (e.g., boxing, surgery, butcher, contact athletics). It is considered one of the healthiest and most mature defense mechanisms because it does not block the instinctual energy, but safely redirects it.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Reaction formation involves behaving in the exact opposite manner of true unconscious feelings (e.g., being excessively sweet to someone you loathe)."
      },
      {
        "option": "C",
        "reason": "Projection is attributing one's own undesirable thoughts onto others (e.g., \"He is aggressive toward me\")."
      },
      {
        "option": "D",
        "reason": "Displacement shifts anger onto a less threatening target (e.g., yelling at a spouse after being disciplined by a manager)."
      }
    ],
    "priorityAlert": "Exam Distinction: Sublimation = Constructive redirection into society. Displacement = Destructive transfer onto a harmless victim."
  },
  "difficulty": "Easy",
  "clinicalTag": "Ego Defense Mechanisms"
},
  {
  "id": "AIIMS_NORCET_2023_S1_Q67",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_psych_05",
  "topicTitle": "Psychiatry: Therapeutic Communication with Hallucinations",
  "scenarioQuestion": "A patient diagnosed with paranoid schizophrenia turns rapidly toward an empty corner of the dayroom, covers both ears in terror, and screams, \"The FBI agents are telling me to jump out of the window!\" Which of the following responses by the psychiatric nurse is MOST therapeutic?",
  "options": [
    {
      "id": "A",
      "text": "\"I understand that you hear voices telling you that, but I do not hear any voices, and you are completely safe here with me.\""
    },
    {
      "id": "B",
      "text": "\"There are no FBI agents here. You are in a hospital and that is completely impossible.\""
    },
    {
      "id": "C",
      "text": "\"Why do you think the FBI wants you to jump out of the window?\""
    },
    {
      "id": "D",
      "text": "\"Let us go into your room and close the door so the FBI agents cannot find you.\""
    }
  ],
  "correctOptionId": "A",
  "clinicalRationale": {
    "keyTakeaway": "The gold-standard communication technique for hallucinations is to validate the patient's emotional distress while gently and clearly presenting reality without arguing or validating the hallucination.",
    "explanation": "Option A acknowledges the emotional reality for the patient (\"I understand that you hear voices...\") while stating the nurse's own reality (\"...but I do not hear any voices\") and providing a firm reassurance of safety. This builds trust without reinforcing the perceptual disturbance.",
    "whyOthersAreWrong": [
      {
        "option": "B",
        "reason": "Arguing with or invalidating the patient (\"that is impossible\") increases paranoia and defensive agitation."
      },
      {
        "option": "C",
        "reason": "Asking \"Why\" questions is non-therapeutic, puts the patient on the defensive, and delves into delusional content."
      },
      {
        "option": "D",
        "reason": "Pretending the FBI is real reinforces the psychotic belief and induces severe terror."
      }
    ],
    "priorityAlert": "Never validate hallucinations, never argue, and never ask \"Why\". Acknowledge feelings + Present reality!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Hallucination Management"
},
  {
  "id": "AIIMS_NORCET_2024_S1_Q48",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_psych_05",
  "topicTitle": "Psychiatry: Suicide Risk & Sudden Mood Elevation Paradox",
  "scenarioQuestion": "A 45-year-old hospitalized patient with severe major depression has been withdrawn, bedridden, and expressing profound hopelessness for 10 days. On the 11th morning, the nurse notes that the patient is clean-shaven, dressed neatly, smiling cheerfully, interacting warmly with staff, and giving away their favorite watch to a roommate. How should the nurse interpret this sudden behavior?",
  "options": [
    {
      "id": "A",
      "text": "The antidepressant medication has successfully resolved the depressive episode."
    },
    {
      "id": "B",
      "text": "The patient has made a definite decision to complete suicide and is at highest immediate risk."
    },
    {
      "id": "C",
      "text": "The patient is entering an acute manic phase of bipolar disorder."
    },
    {
      "id": "D",
      "text": "The patient has successfully mobilized mature ego defense mechanisms."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "A sudden, dramatic elevation in mood and energy in a severely depressed patient (accompanied by giving away prized possessions) signals that the patient has decided to complete suicide and possesses the physical energy to carry it out.",
    "explanation": "Severe depression often leaves patients too psychomotorly retarded to execute suicide. A sudden surge in cheerfulness and peace reflects the psychological relief of deciding to end their life. Giving away cherished possessions is a classic pre-suicide preparatory act. The nurse must immediately initiate 1:1 suicide precautions.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Antidepressants take 2–4 weeks for clinical efficacy and do not cause sudden overnight remissions."
      },
      {
        "option": "C",
        "reason": "Giving away possessions and calm cheerfulness does not reflect euphoric, pressured, grandiose mania."
      },
      {
        "option": "D",
        "reason": "Giving away possessions during depression is an alert sign of suicide, not a mature defense."
      }
    ],
    "priorityAlert": "Never let your guard down when a depressed patient suddenly seems \"cured\" — this is the peak lethal suicide window!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Suicide Crisis Precautions"
},
  {
  "id": "AIIMS_NORCET_2023_S2_Q19",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_psych_05",
  "topicTitle": "Psychiatry: Electroconvulsive Therapy (ECT) Pre-Medication",
  "scenarioQuestion": "Thirty minutes prior to an elective modified Electroconvulsive Therapy (ECT) procedure, the nurse administers prescribed Atropine Sulfate 0.6 mg IM. What is the PRIMARY clinical rationale for administering Atropine before ECT?",
  "options": [
    {
      "id": "A",
      "text": "To induce generalized skeletal muscle paralysis and prevent bone fractures."
    },
    {
      "id": "B",
      "text": "To produce rapid general anesthesia and unconsciousness."
    },
    {
      "id": "C",
      "text": "To suppress vagal stimulation, prevent profound bradycardia, and dry oral secretions."
    },
    {
      "id": "D",
      "text": "To lower seizure threshold and ensure a prolonged convulsion exceeding 2 minutes."
    }
  ],
  "correctOptionId": "C",
  "clinicalRationale": {
    "keyTakeaway": "Atropine (or Glycopyrrolate) is administered before ECT to block vagal parasympathetic stimulation (preventing asystole/severe bradycardia) and decrease oral secretions to prevent post-ictal aspiration.",
    "explanation": "The electrical stimulus delivered during ECT stimulates the vagus nerve, which can trigger profound sinus bradycardia, heart blocks, or cardiac standstill. As an anticholinergic muscarinic antagonist, Atropine blocks this vagal discharge and dries respiratory secretions.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Succinylcholine (not Atropine) is the neuromuscular blocker that prevents fractures."
      },
      {
        "option": "B",
        "reason": "Methohexital or Propofol (not Atropine) induces general anesthesia."
      },
      {
        "option": "D",
        "reason": "Atropine does not alter the seizure threshold; seizures lasting > 2 minutes are undesirable."
      }
    ],
    "priorityAlert": "Pre-ECT Triad: 1. Atropine (stops bradycardia/saliva), 2. Methohexital (anesthesia), 3. Succinylcholine (prevents fractures)."
  },
  "difficulty": "Easy",
  "clinicalTag": "ECT Pharmacology"
},
  {
  "id": "AIIMS_NORCET_2024_S2_Q56",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_psych_05",
  "topicTitle": "Psychiatry: Wernicke-Korsakoff Thiamine-Before-Glucose Rule",
  "scenarioQuestion": "A 50-year-old chronic alcohol-dependent male is brought to the emergency department obtunded, with bilateral lateral rectus palsy, coarse nystagmus, and severe ataxia. Blood glucose is 54 mg/dL. Before infusing 50% Dextrose, which critical medication MUST the nurse administer to prevent irreversible mamillary body necrosis and Korsakoff psychosis?",
  "options": [
    {
      "id": "A",
      "text": "Intramuscular Haloperidol 5 mg"
    },
    {
      "id": "B",
      "text": "Intravenous Thiamine (Vitamin B1) 500 mg"
    },
    {
      "id": "C",
      "text": "Oral Pyridoxine (Vitamin B6)"
    },
    {
      "id": "D",
      "text": "Intravenous Naloxone 0.4 mg"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "In alcohol-dependent or malnourished patients, Thiamine (Vitamin B1) MUST ALWAYS be administered BEFORE or CONCURRENTLY with Intravenous Glucose to prevent acute, irreversible Wernicke-Korsakoff syndrome.",
    "explanation": "Metabolism of glucose requires thiamine pyrophosphate as a coenzyme in the pyruvate dehydrogenase complex. Giving glucose without thiamine depletes the last traces of cerebral thiamine, causing acute thiamine deficiency, neuronal death in the mamillary bodies, and permanent amnesia (Korsakoff psychosis).",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Haloperidol does not treat nutritional thiamine deficiency and lowers seizure threshold in alcohol withdrawal."
      },
      {
        "option": "C",
        "reason": "Pyridoxine (B6) treats INH neuropathy, not Wernicke encephalopathy."
      },
      {
        "option": "D",
        "reason": "Naloxone treats opioid overdose, not alcohol encephalopathy."
      }
    ],
    "priorityAlert": "EMERGENCY MANDATE: THIAMINE BEFORE GLUCOSE! Glucose without thiamine causes permanent brain death!"
  },
  "difficulty": "Hard",
  "clinicalTag": "Wernicke Encephalopathy Protocol"
},
  {
  "id": "AIIMS_NORCET_2024_S2_Q14",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_pharm_07",
  "topicTitle": "Pharmacology: Enoxaparin (LMWH) Subcutaneous Administration",
  "scenarioQuestion": "A nursing officer is preparing to administer Enoxaparin (Lovenox) 40 mg subcutaneously from a manufacturer prefilled syringe for DVT prophylaxis in a post-surgical patient. Which of the following administration techniques is CORRECT?",
  "options": [
    {
      "id": "A",
      "text": "Vigorously expel the small nitrogen air bubble from the prefilled syringe before inserting the needle."
    },
    {
      "id": "B",
      "text": "Inject into the anterolateral abdominal wall at a 90° angle, leave the air bubble intact, and avoid rubbing the site after injection."
    },
    {
      "id": "C",
      "text": "Administer into the deltoid muscle at a 45° angle and massage firmly for 15 seconds to promote absorption."
    },
    {
      "id": "D",
      "text": "Aspirate for blood return before pushing the medication to ensure it is not intravascular."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "When administering Enoxaparin, the prefilled air bubble should NOT be expelled, the injection is given at a 90° angle into the abdomen, and the site MUST NEVER be rubbed or massaged.",
    "explanation": "The nitrogen air bubble in prefilled LMWH syringes is designed to clear the needle and create an air lock in the subcutaneous tissue, preventing track leakage and hematoma. Rubbing or massaging causes mechanical capillary trauma and severe bruising. Aspiration is not recommended in subcutaneous heparin injections.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Expelling the air bubble can cause loss of drug volume and increased skin bruising."
      },
      {
        "option": "C",
        "reason": "Enoxaparin is never injected into the deltoid muscle and must never be massaged."
      },
      {
        "option": "D",
        "reason": "Aspiration before subcutaneous anticoagulants causes tissue shearing and is contraindicated."
      }
    ],
    "priorityAlert": "Clinical Rule for Enoxaparin: Leave the air bubble intact, pinch the abdominal fold, inject at 90°, and NEVER rub!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Anticoagulant Technique"
},
  {
  "id": "AIIMS_NORCET_2023_S1_Q59",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_pharm_07",
  "topicTitle": "Pharmacology: Nitroglycerin Storage & Sildenafil Interaction",
  "scenarioQuestion": "A 60-year-old male with chronic stable angina is prescribed sublingual Nitroglycerin tablets for acute angina pectoris. Which patient teaching statement requires IMMEDIATE correction by the nursing officer?",
  "options": [
    {
      "id": "A",
      "text": "\"I will sit down before taking my nitroglycerin tablet to avoid falling if I get dizzy.\""
    },
    {
      "id": "B",
      "text": "\"I keep a few nitroglycerin tablets in a clear plastic pillbox in my warm car glove compartment so I always have them.\""
    },
    {
      "id": "C",
      "text": "\"If my chest pain is not relieved after 1 tablet, I will call emergency services immediately.\""
    },
    {
      "id": "D",
      "text": "\"I should expect a mild throbbing headache after placing the tablet under my tongue.\""
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Nitroglycerin must be stored strictly in its original dark amber glass bottle with a tight metal cap away from heat, light, and moisture. Storing it in plastic pillboxes or warm areas deactivates the drug.",
    "explanation": "Nitroglycerin is chemically volatile and rapidly inactivated by plastic absorption, moisture, and elevated temperatures. Storing it in a clear plastic pillbox in a car completely renders the tablets therapeutically inert, leaving the patient unprotected during an acute ischemic coronary event.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Sitting down prevents orthostatic syncope from peripheral venodilation."
      },
      {
        "option": "C",
        "reason": "Calling emergency services if pain persists after 5 minutes is current AHA/ACC guideline."
      },
      {
        "option": "D",
        "reason": "Throbbing headache is an expected, harmless side effect due to cerebral vasodilation."
      }
    ],
    "priorityAlert": "Keep Nitroglycerin in the original dark glass bottle with the cap tightly screwed on; replace after 6 months once opened."
  },
  "difficulty": "Easy",
  "clinicalTag": "Antianginal Safety"
},
  {
  "id": "AIIMS_NORCET_2024_S1_Q73",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage I (Preliminary)",
  "subjectId": "subj_pharm_07",
  "topicTitle": "Pharmacology: Vancomycin Infusion Rate & Red Man Syndrome",
  "scenarioQuestion": "Fifteen minutes into an intravenous infusion of Vancomycin 1 g in 100 mL Normal Saline programmed to run over 20 minutes, the patient suddenly develops bright red erythematous flushing of the face, neck, and upper torso with intense pruritus and blood pressure dropping from 126/80 to 92/58 mmHg. Which nursing action is MOST appropriate?",
  "options": [
    {
      "id": "A",
      "text": "Stop the infusion permanently and document that the patient has a severe life-threatening allergy to Vancomycin."
    },
    {
      "id": "B",
      "text": "Slow the infusion rate to run over at least 60 to 90 minutes and administer prescribed antihistamines."
    },
    {
      "id": "C",
      "text": "Increase the infusion rate to finish the antibiotic before cardiovascular collapse occurs."
    },
    {
      "id": "D",
      "text": "Immediately push IV Epinephrine 1 mg for acute anaphylactic shock."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Vancomycin \"Red Man Syndrome\" is an infusion rate-dependent pseudo-allergic histamine release reaction that is managed by slowing the infusion rate to run over at least 60–90 minutes, NOT by permanently discontinuing the drug.",
    "explanation": "Red Man Syndrome occurs when Vancomycin is infused too rapidly (faster than 10 mg/min or < 60 min), stimulating direct mast cell degranulation. It is not an IgE-mediated allergy. The nurse should pause or slow the infusion rate to run over at least 60 minutes (or 90–120 min) and administer an antihistamine (Diphenhydramine). Vancomycin can safely be continued at the slower rate.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Mislabeling RMS as an allergy prevents the patient from receiving first-line treatment for MRSA."
      },
      {
        "option": "C",
        "reason": "Speeding up the infusion intensifies histamine release, leading to profound shock."
      },
      {
        "option": "D",
        "reason": "Epinephrine is reserved for true IgE-mediated anaphylaxis with wheezing, stridor, and angioedema."
      }
    ],
    "priorityAlert": "Rule of Thumb: Vancomycin must ALWAYS be infused over at least 60 MINUTES (120 minutes for doses > 1 g)!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Vancomycin Infusion Safety"
},
  {
  "id": "AIIMS_NORCET_2023_S2_Q48",
  "exam": "AIIMS NORCET",
  "year": 2023,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_pharm_07",
  "topicTitle": "Microbiology: Autoclave Parameters & Biological Spore Indicator",
  "scenarioQuestion": "The Central Sterile Supply Department (CSSD) nurse is setting up the standard autoclave cycle for surgical linen packs and metal surgical instrument trays. Which operational temperature, pressure, holding time, and biological spore indicator are CORRECT according to hospital sterilization standards?",
  "options": [
    {
      "id": "A",
      "text": "160°C at 15 psi for 2 hours with Bacillus subtilis spores"
    },
    {
      "id": "B",
      "text": "121°C at 15 psi for 15 to 20 minutes with Geobacillus stearothermophilus spores"
    },
    {
      "id": "C",
      "text": "100°C at atmospheric pressure for 30 minutes with Clostridium tetani spores"
    },
    {
      "id": "D",
      "text": "134°C at 10 psi for 45 minutes with Bacillus anthracis spores"
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Standard autoclave sterilization requires moist heat under pressure at 121°C (250°F) at 15 psi for 15 to 20 minutes, validated using Geobacillus stearothermophilus bacterial endospores.",
    "explanation": "Moist heat under pressure is the most efficient and reliable method of hospital sterilization, coagulating and denaturing microbial enzymes. Geobacillus stearothermophilus endospores are the most heat-resistant spores known and serve as the official biological indicator to confirm complete sterilization.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "160°C for 2 hours with Bacillus subtilis is the parameter for a Dry Heat Hot Air Oven."
      },
      {
        "option": "C",
        "reason": "100°C at atmospheric pressure is boiling, which is only high-level disinfection and does not kill all spores."
      },
      {
        "option": "D",
        "reason": "134°C (flash cycle) operates at 30 psi for 3–5 minutes, not 45 minutes."
      }
    ],
    "priorityAlert": "Exam Pairing: Autoclave = 121°C @ 15 psi for 15–20 min with Geobacillus stearothermophilus! Hot Air Oven = 160°C for 2 hrs with Bacillus subtilis!"
  },
  "difficulty": "Easy",
  "clinicalTag": "Sterilization Standards"
},
  {
  "id": "AIIMS_NORCET_2024_S2_Q29",
  "exam": "AIIMS NORCET",
  "year": 2024,
  "session": "Stage II (Clinical Skills)",
  "subjectId": "subj_pharm_07",
  "topicTitle": "Pharmacology: Metformin 48-Hour Radiocontrast Lactic Acidosis Rule",
  "scenarioQuestion": "A 58-year-old diabetic patient taking Metformin 1000 mg twice daily is scheduled for an elective contrast-enhanced CT scan of the abdomen with IV iodinated contrast. What is the MANDATORY nursing guideline regarding Metformin administration?",
  "options": [
    {
      "id": "A",
      "text": "Administer Metformin as scheduled with a glass of water immediately before the scan."
    },
    {
      "id": "B",
      "text": "Discontinue Metformin 48 hours before the procedure and hold for 48 hours after the procedure until normal renal function is verified."
    },
    {
      "id": "C",
      "text": "Double the Metformin dose on the day of the procedure to prevent stress hyperglycemia."
    },
    {
      "id": "D",
      "text": "Switch to oral Glimepiride on the morning of the scan without checking serum creatinine."
    }
  ],
  "correctOptionId": "B",
  "clinicalRationale": {
    "keyTakeaway": "Metformin must be withheld for 48 hours before and 48 hours after IV iodinated contrast procedures to prevent contrast-induced acute renal failure leading to lethal Metformin accumulation and Lactic Acidosis.",
    "explanation": "Iodinated radiocontrast media can induce acute renal vasoconstriction and tubular injury. In the presence of impaired renal clearance, Metformin accumulates rapidly, inhibiting mitochondrial respiration and oxidative phosphorylation, triggering severe Lactic Acidosis (mortality ~50%). Metformin should only be resumed 48 hours post-contrast after verifying that serum creatinine has remained normal.",
    "whyOthersAreWrong": [
      {
        "option": "A",
        "reason": "Giving Metformin concurrently with contrast exposes the patient to severe risk of contrast nephropathy and lactic acidosis."
      },
      {
        "option": "C",
        "reason": "Doubling the dose is dangerous and precipitates severe hypoglycemia and toxicity."
      },
      {
        "option": "D",
        "reason": "Sulfonylureas can cause prolonged hypoglycemia in NPO patients and do not bypass renal clearance considerations."
      }
    ],
    "priorityAlert": "GOLDEN CONTRAST RULE: Hold Metformin 48 hours BEFORE and 48 hours AFTER IV contrast! Always verify Serum Creatinine before resuming!"
  },
  "difficulty": "Moderate",
  "clinicalTag": "Radiocontrast Safety"
}
,
  {
    "id": "AIIMS_NORCET_2023_S2_Q16",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Community: Reconstituted Vaccine 4-Hour Discard Protocol",
    "scenarioQuestion": "During a routine village outreach immunization session, a Community Health Officer reconstitutes a vial of lyophilized BCG vaccine with sterile normal saline at 09:00 AM. At 01:30 PM, an infant arrives who missed earlier vaccination. The BCG vial has 4 remaining doses stored in the vaccine carrier at +4°C. What is the MANDATORY nursing action?",
    "options": [
      {
        "id": "A",
        "text": "Administer the 0.05 mL intradermal dose since the vaccine has been kept cold at +4°C."
      },
      {
        "id": "B",
        "text": "Discard the reconstituted vial immediately and open/reconstitute a fresh vial of BCG."
      },
      {
        "id": "C",
        "text": "Warm the vial between palms for 2 minutes to reactivate attenuated bacilli before injection."
      },
      {
        "id": "D",
        "text": "Perform a Shake Test on the reconstituted vial before deciding whether to administer."
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Reconstituted BCG, Measles/MR, and JE vaccines MUST be discarded within strictly 4 hours of reconstitution, regardless of remaining doses or cold chain storage.",
      "explanation": "Reconstituted freeze-dried vaccines contain no preservative. After 4 hours, there is a high risk of bacterial proliferation (predominantly Staphylococcus aureus), which can cause fatal Toxic Shock Syndrome (TSS) and severe local abscesses. Because 4.5 hours have elapsed (from 09:00 AM to 01:30 PM), the vial must be discarded immediately.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Cold chain storage does not prevent bacterial toxin production in preservative-free reconstituted vaccine past 4 hours."
        },
        {
          "option": "C",
          "reason": "Warming vaccines between palms is strictly contraindicated and destroys vaccine potency."
        },
        {
          "option": "D",
          "reason": "Shake test is exclusively for freeze-sensitive aluminum-adsorbed liquid vaccines (Hep B, DPT, Td), never for reconstituted live vaccines."
        }
      ],
      "priorityAlert": "RECONSTITUTION RULE: BCG & MR vials = Strict 4-Hour Maximum Life! Discard after 4 hours without exception!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Vaccine Reconstitution Limits"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q47",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Epidemiology: Levels of Prevention Classification",
    "scenarioQuestion": "A community health nurse conducts a mobile camp in an urban slum where she performs cervical cancer screening using Pap smears for married women aged 30–50 years, administers Td vaccines to pregnant mothers, and teaches stroke patients range-of-motion exercises. Which of these interventions is classified under SECONDARY PREVENTION?",
    "options": [
      {
        "id": "A",
        "text": "Administering Tetanus-diphtheria (Td) immunization to pregnant mothers"
      },
      {
        "id": "B",
        "text": "Cervical cancer screening via Pap smears"
      },
      {
        "id": "C",
        "text": "Conducting range-of-motion physical rehabilitation exercises for stroke patients"
      },
      {
        "id": "D",
        "text": "Distributing educational leaflets discouraging tobacco smoking in adolescent school students"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Secondary Prevention focuses on Early Diagnosis and Prompt Treatment (Screening tests like Pap smears, Mammograms, Sputum AFB, and contact tracing).",
      "explanation": "Secondary prevention aims to detect disease at the earliest latent/subclinical stage before irreversible pathology occurs. Pap smear screening identifies pre-cancerous cervical dysplasia for curative early ablation. Td vaccination is Primary prevention (Specific protection). Post-stroke rehabilitation is Tertiary prevention (Disability limitation/Rehab). Discouraging tobacco before addiction is Primordial prevention.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Immunization is Primary Prevention (Specific Protection)."
        },
        {
          "option": "C",
          "reason": "Stroke rehabilitation is Tertiary Prevention (Disability limitation & Rehabilitation)."
        },
        {
          "option": "D",
          "reason": "Inhibiting the emergence of risk factors in adolescents is Primordial Prevention."
        }
      ],
      "priorityAlert": "Core Exam Rule: Screening = Secondary Prevention! Vaccines = Primary Prevention! Rehab = Tertiary Prevention!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Levels of Prevention"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q65",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Community: Tuberculosis Notification & First-Line ATT Toxicity",
    "scenarioQuestion": "A 32-year-old patient diagnosed with pulmonary tuberculosis on daily fixed-dose combination (FDC) HRZE therapy reports tingling, numbness, and burning pain in both feet after 4 weeks of treatment. Which micronutrient deficiency is directly responsible for this neurotoxicity?",
    "options": [
      {
        "id": "A",
        "text": "Vitamin C (Ascorbic acid)"
      },
      {
        "id": "B",
        "text": "Vitamin B6 (Pyridoxine)"
      },
      {
        "id": "C",
        "text": "Vitamin B12 (Cyanocobalamin)"
      },
      {
        "id": "D",
        "text": "Vitamin B1 (Thiamine)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Isoniazid (INH) competitively inhibits Pyridoxine (Vitamin B6) metabolism, leading to peripheral neuropathy. Co-administration of Pyridoxine (10–50 mg daily) prevents and treats this condition.",
      "explanation": "Isoniazid binds with pyridoxal-5-phosphate and accelerates its urinary excretion, causing severe peripheral sensory neuropathy. Prophylactic Pyridoxine (10–25 mg daily) is routinely indicated for high-risk patients (diabetes, alcohol dependence, malnutrition, HIV, chronic kidney disease, pregnancy).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Vitamin C deficiency causes scurvy, not drug-induced peripheral neuropathy."
        },
        {
          "option": "C",
          "reason": "Vitamin B12 deficiency causes subacute combined degeneration of the spinal cord and megaloblastic anemia."
        },
        {
          "option": "D",
          "reason": "Vitamin B1 deficiency causes Beriberi and Wernicke-Korsakoff syndrome."
        }
      ],
      "priorityAlert": "Pairing Rule: Isoniazid (INH) MUST always be paired with Pyridoxine (Vit B6) to prevent peripheral neurotoxicity!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Antitubercular Drug Toxicity"
  },
  {
    "id": "AIIMS_NORCET_2024_S2_Q38",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Demography & Contraception: No-Scalpel Vasectomy (NSV) Discharge Counseling",
    "scenarioQuestion": "A 35-year-old male undergoes successful No-Scalpel Vasectomy (NSV) at a community health center. What critical post-procedure discharge instruction regarding fertility and sexual intercourse MUST the nursing officer provide?",
    "options": [
      {
        "id": "A",
        "text": "Sterility is immediate; no backup contraceptive method is needed starting tonight."
      },
      {
        "id": "B",
        "text": "Use condoms or alternative contraception for 3 months or until a follow-up semen analysis confirms zero motile sperm (Azoospermia)."
      },
      {
        "id": "C",
        "text": "Avoid sexual intercourse permanently for 1 year until vas deferens re-canalization is ruled out."
      },
      {
        "id": "D",
        "text": "Resume unprotected sexual intercourse after 7 days once surgical wound stitches are removed."
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Vasectomy is NOT immediately effective. The client MUST use alternative contraception for 3 months (or approximately 30 ejaculations) until semen analysis confirms complete azoospermia.",
      "explanation": "Following vasectomy, viable spermatozoa remain stored in the ampulla of the vas deferens and seminal vesicles distal to the ligation site. It takes approximately 3 months or 20–30 ejaculations to clear this reservoir. Unprotected intercourse before confirmed azoospermia is the primary cause of post-vasectomy unplanned pregnancies.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Vasectomy does not confer immediate sterility; viable sperm remain in the distal tract."
        },
        {
          "option": "C",
          "reason": "Intercourse does not need to be avoided for 1 year; barrier methods allow normal sexual activity."
        },
        {
          "option": "D",
          "reason": "7 days is insufficient; residual motile sperm will easily cause conception."
        }
      ],
      "priorityAlert": "CRITICAL VASECTOMY RULE: Always use barrier protection for 3 months / 30 ejaculations until Semen Analysis proves Azoospermia!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Vasectomy Counseling Protocol"
  }
,
  {
    "id": "AIIMS_NORCET_2023_S1_Q83",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Neonatal Resuscitation Program (NRP) Heart Rate Cutoff",
    "scenarioQuestion": "A full-term newborn delivered via emergency cesarean section is apneic and limp at birth. The nursing officer places the infant under a radiant warmer, dries, positions the airway in a sniffing position, and stimulates the baby. At 60 seconds of life, the heart rate auscultated at the precordium is 84 bpm with persistent gasping respirations. What is the immediate NEXT priority nursing action?",
    "options": [
      {
        "id": "A",
        "text": "Initiate chest compressions at a 3:1 ratio immediately."
      },
      {
        "id": "B",
        "text": "Administer Epinephrine 1:10,000 via the umbilical venous catheter."
      },
      {
        "id": "C",
        "text": "Initiate Positive Pressure Ventilation (PPV) with a bag and mask using 21% O2 at 40 to 60 breaths/min."
      },
      {
        "id": "D",
        "text": "Administer blow-by oxygen at 10 L/min and wait for 2 minutes."
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "In NRP, if the newborn is apneic/gasping OR the heart rate is < 100 bpm after initial steps, Positive Pressure Ventilation (PPV) must be initiated immediately at 40–60 breaths/min.",
      "explanation": "PPV is the single most effective intervention in neonatal resuscitation. Chest compressions are indicated ONLY if the heart rate remains < 60 bpm despite at least 30 seconds of effective PPV that moves the chest. Starting chest compressions or epinephrine when HR is 84 bpm is incorrect.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Chest compressions are indicated only when heart rate is < 60 bpm despite 30 seconds of effective PPV."
        },
        {
          "option": "B",
          "reason": "Epinephrine is reserved for heart rate remaining < 60 bpm after effective PPV and coordinated chest compressions."
        },
        {
          "option": "D",
          "reason": "Blow-by oxygen is useless in an apneic/gasping infant who lacks effective spontaneous tidal volume."
        }
      ],
      "priorityAlert": "NRP GOLDEN RULE: HR < 100 bpm or Apnea = START PPV! HR < 60 bpm despite PPV = START CHEST COMPRESSIONS (3:1)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "NRP Resuscitation Algorithm"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q52",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Acute Epiglottitis Airway Contraindication",
    "scenarioQuestion": "A 4-year-old unimmunized child is brought to the pediatric emergency with sudden high fever, toxic appearance, severe dysphagia, and continuous drooling of saliva. The child is sitting upright, leaning forward with neck extended and mouth open (tripod position), with an anxious expression and no cough. Which nursing action is STRICTLY CONTRAINDICATED?",
    "options": [
      {
        "id": "A",
        "text": "Applying high-flow humidified oxygen via non-rebreather mask held by the mother"
      },
      {
        "id": "B",
        "text": "Inspecting the pharynx and throat using a tongue depressor to confirm the cherry-red epiglottis"
      },
      {
        "id": "C",
        "text": "Alerting the pediatric anesthesiologist and operating room for emergency intubation"
      },
      {
        "id": "D",
        "text": "Keeping the child as calm as possible on the mother's lap"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In acute epiglottitis, throat inspection using a tongue depressor or throat swab is strictly contraindicated because it can trigger immediate fatal reflex laryngospasm and complete airway closure.",
      "explanation": "Acute epiglottitis (typically caused by Haemophilus influenzae type b) leads to marked inflammatory edema of the supraglottic structures. Any direct physical stimulation of the posterior pharynx triggers sudden spasmodic adduction of vocal cords and complete laryngospasm. Diagnosis is clinical; throat visualization should occur ONLY in an operating room with equipment ready for immediate surgical cricothyroidotomy or endotracheal intubation.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Blow-by or humidified oxygen held gently by the parent calms the child and provides vital oxygenation."
        },
        {
          "option": "C",
          "reason": "Early notification of airway teams is a life-saving mandatory preparatory step."
        },
        {
          "option": "D",
          "reason": "Minimizing stress and agitation by keeping the child in the parent's arms prevents acute airway decompensation."
        }
      ],
      "priorityAlert": "ABSOLUTE EPIGLOTTITIS BAN: NEVER place a tongue blade or swab into the mouth of a child with drooling and tripod posture!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Acute Airway Emergency"
  },
  {
    "id": "AIIMS_NORCET_2023_S2_Q41",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Hypertrophic Pyloric Stenosis (HPS) Acid-Base Imbalance",
    "scenarioQuestion": "A 4-week-old male infant presents with non-bilious projectile vomiting immediately after each feed for the past 5 days. On physical examination, a firm olive-sized mobile mass is palpated in the right epigastrium, and the child appears eager to suck on a pacifier. An arterial blood gas (ABG) is drawn. Which acid-base and electrolyte pattern is EXPECTED in this infant?",
    "options": [
      {
        "id": "A",
        "text": "Hyperchloremic, Hyperkalemic Metabolic Acidosis"
      },
      {
        "id": "B",
        "text": "Hypochloremic, Hypokalemic Metabolic Alkalosis"
      },
      {
        "id": "C",
        "text": "Normochloremic Respiratory Acidosis with hyperkalemia"
      },
      {
        "id": "D",
        "text": "Hypochloremic Metabolic Acidosis with normal potassium"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Hypertrophic Pyloric Stenosis causes Hypochloremic, Hypokalemic Metabolic Alkalosis due to massive persistent vomiting of gastric hydrochloric acid (HCl) and potassium.",
      "explanation": "Gastric juice is rich in hydrochloric acid (HCl) and potassium. Chronic projectile vomiting causes severe loss of hydrogen ions (alkalosis) and chloride ions (hypochloremia). In an attempt to conserve sodium and intravascular volume, the kidneys exchange potassium and hydrogen for sodium in distal tubules, worsening hypokalemia and producing paradoxical aciduria.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Persistent loss of gastric acid causes alkalosis, not acidosis; chloride and potassium are severely depleted."
        },
        {
          "option": "C",
          "reason": "This is a primary metabolic disorder resulting from gastrointestinal loss, not a primary respiratory hypoventilation disorder."
        },
        {
          "option": "D",
          "reason": "The hallmark of HPS is metabolic alkalosis with significant hypokalemia."
        }
      ],
      "priorityAlert": "PYLORIC STENOSIS ABG TRIAD: High pH + Low Chloride + Low Potassium = Hypochloremic Hypokalemic Metabolic Alkalosis!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric GI & Acid-Base"
  },
  {
    "id": "AIIMS_NORCET_2024_S2_Q65",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Intussusception Clinical Presentation & Dance's Sign",
    "scenarioQuestion": "A 9-month-old infant is brought to the pediatric emergency with episodes of inconsolable crying where the infant suddenly draws both knees up to the abdomen, alternating with quiet periods. The mother shows the nurse a diaper containing dark red mucus resembling 'red currant jelly'. On abdominal palpation, a sausage-shaped mass is felt in the right upper abdomen, while the right lower quadrant feels empty and hollow. What is this classic hollow sign called?",
    "options": [
      {
        "id": "A",
        "text": "Cullen's Sign"
      },
      {
        "id": "B",
        "text": "Dance's Sign"
      },
      {
        "id": "C",
        "text": "Kehr's Sign"
      },
      {
        "id": "D",
        "text": "Grey Turner's Sign"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Dance's Sign is the sensation of emptiness or retraction in the Right Lower Quadrant (Right Iliac Fossa) caused by the invagination and telescoping of the cecum and ileum into the ascending colon in intussusception.",
      "explanation": "In ileocolic intussusception, the ileum invaginates into the cecum and colon, pulling the cecum out of its normal anatomical position in the right iliac fossa. This leaves a palpable emptiness in the right lower quadrant (Dance's sign), while the telescoped bowel forms a sausage-shaped mass in the right hypochondrium.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Cullen's sign is periumbilical ecchymosis indicating retroperitoneal hemorrhage or acute hemorrhagic pancreatitis."
        },
        {
          "option": "C",
          "reason": "Kehr's sign is referred left shoulder pain caused by diaphragmatic irritation from a ruptured spleen."
        },
        {
          "option": "D",
          "reason": "Grey Turner's sign is flank ecchymosis indicative of retroperitoneal bleeding."
        }
      ],
      "priorityAlert": "INTUSSUSCEPTION TRIAD: Colicky pain with knee flexion + Sausage mass + Red Currant Jelly stools + Dance's Sign!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Intestinal Obstruction"
  }
,
  {
    "id": "AIIMS_NORCET_2024_S2_Q19",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Midwifery: Magnesium Sulfate Toxicity Earliest Warning Sign",
    "scenarioQuestion": "A 28-year-old primigravida at 34 weeks gestation with severe preeclampsia is receiving an intravenous maintenance infusion of Magnesium Sulfate at 2 g/hr. During the hourly nursing assessment, which clinical finding is the EARLIEST indicator of impending magnesium toxicity?",
    "options": [
      {
        "id": "A",
        "text": "Urine output falling below 50 mL/hr"
      },
      {
        "id": "B",
        "text": "Loss / Absence of Patellar (Knee-Jerk) Deep Tendon Reflex"
      },
      {
        "id": "C",
        "text": "Respiratory rate dropping to 10 breaths/min"
      },
      {
        "id": "D",
        "text": "Cardiac arrest and sudden loss of consciousness"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Loss of the Patellar (Knee-Jerk) deep tendon reflex occurs at a serum magnesium concentration of 8 to 10 mEq/L and is the EARLIEST clinical sign of magnesium toxicity.",
      "explanation": "Magnesium blocks acetylcholine release at the neuromuscular junction. Deep tendon reflexes disappear first (at 8–10 mEq/L). If unheeded, respiratory depression and arrest occur at 12–15 mEq/L, followed by fatal cardiac arrest at > 15 mEq/L. If the knee-jerk reflex is absent, the infusion must be held immediately and 10% Calcium Gluconate prepared.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Oliguria (< 30 mL/hr) is a contributing cause of toxicity due to impaired renal excretion, but loss of reflexes is the earliest clinical manifestation of toxic blood levels."
        },
        {
          "option": "C",
          "reason": "Respiratory depression occurs at higher levels (12–15 mEq/L) following loss of reflexes."
        },
        {
          "option": "D",
          "reason": "Cardiac arrest is the terminal event occurring at extreme levels (> 15 mEq/L)."
        }
      ],
      "priorityAlert": "MAGNESIUM TOXICITY EARLIEST SIGN: Loss of Deep Tendon (Patellar) Reflex! Keep 10% Calcium Gluconate (10 mL) ready at the bedside!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Eclampsia MgSO4 Surveillance"
  },
  {
    "id": "AIIMS_NORCET_2023_S2_Q53",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Midwifery: Uterotonic Contraindications in PPH Management",
    "scenarioQuestion": "A 30-year-old multipara delivers vaginally and develops brisk primary postpartum hemorrhage due to uterine atony that is unresponsive to fundal massage and IV Oxytocin. Her current blood pressure is 168/104 mmHg. Which of the following second-line uterotonic medications is STRICTLY CONTRAINDICATED in this patient?",
    "options": [
      {
        "id": "A",
        "text": "Carboprost Tromethamine (PGF2-alpha) 250 mcg IM"
      },
      {
        "id": "B",
        "text": "Methylergometrine (Methergine) 0.2 mg IM"
      },
      {
        "id": "C",
        "text": "Misoprostol (PGE1) 800 mcg per rectum"
      },
      {
        "id": "D",
        "text": "Tranexamic Acid (TXA) 1 g IV"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Methylergometrine (Methergine) is strictly contraindicated in patients with hypertension, preeclampsia, or cardiovascular disease because it causes severe generalized vasoconstriction and precipitous hypertensive crisis.",
      "explanation": "Methylergometrine acts directly on uterine and vascular smooth muscle, causing powerful sustained tetanic contractions and widespread arteriolar vasoconstriction. In a patient with baseline hypertension (168/104 mmHg), administration can precipitate intracranial hemorrhage (stroke), encephalopathy, and acute heart failure.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Carboprost is safe in hypertension, but is contraindicated in bronchial asthma."
        },
        {
          "option": "C",
          "reason": "Misoprostol is safe in hypertensive patients."
        },
        {
          "option": "D",
          "reason": "Tranexamic acid is an antifibrinolytic and can be safely administered in hypertensive patients."
        }
      ],
      "priorityAlert": "CONTRAINDICATION PAIRING: Methergine = BANNED in Hypertension! Carboprost = BANNED in Asthma!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Uterotonic Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q67",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Med-Surg: Arteriovenous (AV) Fistula Vascular Access Safeguards",
    "scenarioQuestion": "A 54-year-old patient with end-stage renal disease (ESRD) has a mature left radiocephalic arteriovenous (AV) fistula in the left forearm. Which nursing action is ESSENTIAL to maintain the viability and patency of this vascular access?",
    "options": [
      {
        "id": "A",
        "text": "Use the left arm for routine blood pressure measurements every 4 hours."
      },
      {
        "id": "B",
        "text": "Draw morning fasting blood specimens from the cephalic vein proximal to the fistula."
      },
      {
        "id": "C",
        "text": "Auscultate for a vascular bruit and palpate for a thrill every shift, while keeping the arm free of BP cuffs and venipunctures."
      },
      {
        "id": "D",
        "text": "Keep a tight elastic pressure bandage wrapped around the left forearm to prevent aneurysm formation."
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "An AV fistula must be regularly assessed for patency by checking for a palpable thrill and auscultating a continuous bruit. The extremity must be strictly protected from blood pressure cuffs, tight clothing, and venipunctures.",
      "explanation": "An AV fistula is a surgically created lifeline for hemodialysis. Applying a blood pressure cuff, tourniquet, or drawing blood causes external compression, venous collapse, and acute thrombosis, permanently destroying the fistula.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Blood pressure cuffs on the fistula arm can cause acute graft thrombosis and must never be applied."
        },
        {
          "option": "B",
          "reason": "Venipunctures and IV lines are strictly forbidden on the fistula extremity."
        },
        {
          "option": "D",
          "reason": "Tight bandages or elastic bands compress the fistula and precipitate clotting."
        }
      ],
      "priorityAlert": "FISTULA SAFETY: Palpate Thrill + Auscultate Bruit! Post 'NO BP / NO NEEDLESTICKS' sign over the bed!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Hemodialysis Vascular Access"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q87",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Med-Surg: Sengstaken-Blakemore Tube Airway Emergency",
    "scenarioQuestion": "A patient with bleeding esophageal varices has a Sengstaken-Blakemore tube in place with both gastric and esophageal balloons inflated. Suddenly, the patient develops acute respiratory distress, cyanosis, and loud inspiratory stridor. What is the nurse's IMMEDIATE priority action?",
    "options": [
      {
        "id": "A",
        "text": "Increase the traction on the tube to pull the gastric balloon firmly against the gastroesophageal junction."
      },
      {
        "id": "B",
        "text": "Immediately cut all three lumens of the tube with a pair of scissors kept at the bedside and remove the tube."
      },
      {
        "id": "C",
        "text": "Inject 50 mL of air into the esophageal balloon to check the balloon pressure."
      },
      {
        "id": "D",
        "text": "Administer 100% oxygen via nasal cannula and call for an emergency chest X-ray."
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "If the gastric balloon ruptures or deflates, the entire Sengstaken-Blakemore tube migrates upward, occluding the oropharynx and larynx. Cutting all lumens instantly deflates the balloons, freeing the airway.",
      "explanation": "Sudden respiratory distress and stridor in a patient with an inflated Sengstaken-Blakemore tube indicates fatal airway obstruction from upward balloon migration. A pair of scissors must be kept at the bedside at all times specifically to cut across all lumens and immediately extract the tube.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Increasing traction will pull the migrated balloon tighter against the vocal cords, worsening asphyxiation."
        },
        {
          "option": "C",
          "reason": "Injecting more air exacerbates airway occlusion and can cause esophageal rupture."
        },
        {
          "option": "D",
          "reason": "Waiting for an X-ray while the airway is completely obstructed leads to rapid cardiac arrest."
        }
      ],
      "priorityAlert": "BLAKEMORE SAFETY RULE: Keep scissors at bedside! If respiratory distress occurs, CUT all lumens immediately!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Esophageal Varices Airway Emergency"
  }
,
  {
    "id": "ESIC_2022_Q14",
    "exam": "ESIC",
    "year": 2022,
    "session": "Nursing Officer Selection",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Glasgow Coma Scale (GCS) Motor Localization",
    "scenarioQuestion": "A 35-year-old male is admitted after a high-speed road traffic accident. When the nursing officer applies deep pressure over the supraorbital notch, the patient brings his hand above the clavicle towards the stimulus to push the examiner's hand away. What is the patient's GCS Motor response score?",
    "options": [
      {
        "id": "A",
        "text": "M6 (Obeys commands)"
      },
      {
        "id": "B",
        "text": "M5 (Localizes to pain)"
      },
      {
        "id": "C",
        "text": "M4 (Normal flexion / withdrawal)"
      },
      {
        "id": "D",
        "text": "M3 (Abnormal flexion / Decorticate posturing)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "GCS Motor 5 (Localizes to pain) occurs when the patient's hand crosses the midline and moves above the level of the clavicle towards the painful stimulus.",
      "explanation": "In GCS Motor scoring: M6 = Obeys commands, M5 = Localizes to pain (hand crosses midline/above clavicle), M4 = Normal flexion (rapid withdrawal without crossing clavicle), M3 = Decorticate posturing (abnormal flexion with internal rotation), M2 = Decerebrate posturing (extension and pronation), M1 = No response.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "M6 requires following verbal commands, not reacting only to noxious pain."
        },
        {
          "option": "C",
          "reason": "M4 involves rapid limb withdrawal from the stimulus without the hand reaching above the clavicle."
        },
        {
          "option": "D",
          "reason": "M3 is stereotypical decorticate posturing indicative of severe hemispheric/diencephalic injury."
        }
      ],
      "priorityAlert": "GCS Cutoff: A total GCS score of 8 or less indicates severe coma requiring prompt endotracheal intubation ('GCS 8, Intubate!')."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Neurological Assessment"
  },
  {
    "id": "RRB_2019_Q32",
    "exam": "RRB",
    "year": 2019,
    "session": "Staff Nurse Examination",
    "subjectId": "subj_chn_06",
    "topicTitle": "Community: Cold Chain Ice-Lined Refrigerator (ILR) Temperature",
    "scenarioQuestion": "The public health nursing officer is conducting the routine morning check of the Ice-Lined Refrigerator (ILR) used to store Universal Immunization Programme (UIP) vaccines at the Primary Health Centre. What is the mandatory recommended temperature maintenance range for the ILR?",
    "options": [
      {
        "id": "A",
        "text": "-15°C to -25°C"
      },
      {
        "id": "B",
        "text": "+2°C to +8°C"
      },
      {
        "id": "C",
        "text": "0°C to +4°C"
      },
      {
        "id": "D",
        "text": "+8°C to +12°C"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Under the Universal Immunization Programme (UIP), the strict standard storage temperature for all vaccines inside an Ice-Lined Refrigerator (ILR) is +2°C to +8°C.",
      "explanation": "The ILR maintains temperatures between +2°C and +8°C even during prolonged power cuts up to 24-48 hours. Freeze-sensitive vaccines (DPT, Pentavalent, TT, Hepatitis B) must be kept in the upper basket to prevent accidental freezing, which irreversibly denatures their adjuvant.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "-15°C to -25°C is the operating range for Deep Freezers used exclusively for freezing ice packs and storing OPV at district/state vaccine depots."
        },
        {
          "option": "C",
          "reason": "Temperatures below +2°C risk freezing and destroying freeze-sensitive vaccines."
        },
        {
          "option": "D",
          "reason": "+8°C to +12°C causes thermal degradation and loss of vaccine potency."
        }
      ],
      "priorityAlert": "Never place Hepatitis B, Td, or Pentavalent on the floor of the ILR! Sub-zero contact destroys their potency (Shake Test positive)."
    },
    "difficulty": "Easy",
    "clinicalTag": "Cold Chain Logistics"
  },
  {
    "id": "DSSSB_2022_Q45",
    "exam": "DSSSB",
    "year": 2022,
    "session": "Specialist Nursing",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Newborn APGAR Scoring Assessment",
    "scenarioQuestion": "A nurse assesses a full-term newborn at 1 minute after birth. Findings: HR is 114 bpm; cry is vigorous and lusty; infant shows active, spontaneous motion with well-flexed extremities; vigorous cough upon suctioning; body is completely pink but hands and feet are bluish (acrocyanosis). What is the total APGAR score?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "APGAR calculation: Heart Rate > 100 = 2; Respiratory Effort (vigorous cry) = 2; Muscle Tone (active motion) = 2; Reflex Irritability (cough) = 2; Color (body pink, blue extremities = acrocyanosis) = 1. Total score = 9.",
      "explanation": "Acrocyanosis (Score 1 for appearance) is completely normal in the first 24 hours of life due to peripheral vasoconstriction. All other four physiological parameters earned maximum scores of 2, yielding a total score of 9, which represents excellent neonatal adaptation.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "A score of 10 requires completely pink body and extremities (no acrocyanosis)."
        },
        {
          "option": "C",
          "reason": "8 erroneously subtracts two points."
        },
        {
          "option": "D",
          "reason": "7 indicates mild neonatal depression, which is not present here."
        }
      ],
      "priorityAlert": "An APGAR score of 7 to 10 indicates normal adaptation. A score of 4 to 6 requires tactile stimulation and supplemental O2; 0 to 3 requires immediate CPR!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Neonatal Resuscitation & Scoring"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q95",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Emergency: Arterial Blood Gas (ABG) Acid-Base Disorder",
    "scenarioQuestion": "A 24-year-old female with Type 1 Diabetes presents to the emergency room with deep, rapid breathing (Kussmaul breathing) and fruity breath. Her ABG shows: pH 7.28, PaCO2 29 mmHg, HCO3- 14 mEq/L, and PaO2 94 mmHg. How should the nursing officer interpret this acid-base disturbance?",
    "options": [
      {
        "id": "A",
        "text": "Uncompensated Respiratory Acidosis"
      },
      {
        "id": "B",
        "text": "Partially Compensated Metabolic Acidosis"
      },
      {
        "id": "C",
        "text": "Fully Compensated Metabolic Alkalosis"
      },
      {
        "id": "D",
        "text": "Uncompensated Metabolic Acidosis"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Low pH (7.28 < 7.35) = Acidosis. Low HCO3- (14 < 22) = Metabolic etiology. Low PaCO2 (29 < 35) = Respiratory compensation has started to blow off CO2, but pH has not yet returned to normal range = Partially Compensated Metabolic Acidosis.",
      "explanation": "Step 1: pH 7.28 is acidemic (< 7.35).\nStep 2: HCO3- is 14 mEq/L (acidic, matches the pH).\nStep 3: PaCO2 is 29 mmHg (alkalotic, moving opposite to pH as respiratory hyperventilation blows off carbon dioxide to compensate).\nStep 4: Because pH remains abnormal, compensation is PARTIAL.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "In respiratory acidosis, PaCO2 would be elevated > 45 mmHg."
        },
        {
          "option": "C",
          "reason": "In fully compensated disorders, pH must be within normal range (7.35-7.45)."
        },
        {
          "option": "D",
          "reason": "In uncompensated metabolic acidosis, PaCO2 would remain within normal limits (35-45 mmHg)."
        }
      ],
      "priorityAlert": "ROME Mnemonic: Respiratory Opposite (pH & CO2 move inversely), Metabolic Equal (pH & HCO3- move together)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Arterial Blood Gas Analysis"
  },
  {
    "id": "AIIMS_NORCET_2024_S2_Q78",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Critical Care: Accidental Fresh Tracheostomy Decannulation",
    "scenarioQuestion": "On postoperative day 1 after an open surgical tracheostomy, an agitated patient coughs forcefully and completely dislodges the tracheostomy tube onto the bed sheets. The patient exhibits sudden stridor and tachypnea. Which is the nurse's IMMEDIATE first action?",
    "options": [
      {
        "id": "A",
        "text": "Attempt to force a larger-size tracheostomy tube blindly back into the stoma."
      },
      {
        "id": "B",
        "text": "Spread the stoma with a sterile tracheal dilator or hemostat and call the emergency airway team."
      },
      {
        "id": "C",
        "text": "Cover the stoma tightly with an occlusive dressing and apply a simple face mask."
      },
      {
        "id": "D",
        "text": "Place the patient prone and perform back blows to maintain tracheal patency."
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In a fresh tracheostomy (<7 days), the surgical tract has not matured. Accidental decannulation causes immediate stomal collapse. Spreading the tracheal opening with a sterile tracheal dilator prevents asphyxiation while an emergency airway team is summoned.",
      "explanation": "During the first 72 to 168 hours post-tracheostomy, the stomal tract is immature. Blind reinsertion attempts can create a fatal false passage into the pretracheal space, causing tension pneumomediastinum or complete tracheal compression. The nurse must immediately maintain stoma patency with a sterile tracheal dilator and call for emergency re-cannulation.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Blind reinsertion risks pushing into a false track, causing subcutaneous emphysema and airway closure."
        },
        {
          "option": "C",
          "reason": "Occluding a stoma when upper airway obstruction may be present can suffocate the patient."
        },
        {
          "option": "D",
          "reason": "Prone positioning will further compromise respiratory excursion."
        }
      ],
      "priorityAlert": "Safety Rule: Always keep an extra tracheostomy tube of the same size, one size smaller, an obturator, and a sterile tracheal dilator at the patient's bedside!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Airway Emergency Protocol"
  },
  {
    "id": "AIIMS_NORCET_2023_S2_Q88",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage II (Clinical Skills)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Critical Care: Central Venous Pressure (CVP) Transducer Zeroing",
    "scenarioQuestion": "A critical care nursing officer is preparing to measure the Central Venous Pressure (CVP) via a triple-lumen central venous catheter for a patient in septic shock. To obtain an accurate physiological measurement, at which anatomical landmark must the pressure transducer be zeroed and calibrated?",
    "options": [
      {
        "id": "A",
        "text": "2nd intercostal space at the mid-clavicular line"
      },
      {
        "id": "B",
        "text": "Phlebostatic axis (4th intercostal space at the mid-axillary line)"
      },
      {
        "id": "C",
        "text": "5th intercostal space at the anterior axillary line"
      },
      {
        "id": "D",
        "text": "Xiphoid process in the mid-sternal line"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The phlebostatic axis is located at the 4th intercostal space, mid-axillary line (or midway between anterior and posterior chest wall). It corresponds anatomically to the level of the right atrium.",
      "explanation": "Zeroing the transducer at the phlebostatic axis aligns the measurement with hydrostatic pressure inside the right atrium. If the transducer is positioned too high (above axis), hydrostatic pressure artificially drops, giving a falsely LOW CVP reading. If positioned too low, it gives a falsely HIGH CVP reading.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "2nd intercostal space is too high and will yield a falsely depressed CVP reading."
        },
        {
          "option": "C",
          "reason": "5th intercostal space anterior axillary line is improperly displaced."
        },
        {
          "option": "D",
          "reason": "Xiphoid process does not correlate with right atrial hydrostatic zero."
        }
      ],
      "priorityAlert": "Clinical Trap: For every 1 inch (2.5 cm) the transducer is placed BELOW the phlebostatic axis, the pressure reading will be falsely elevated by approx. 1.86 mmHg!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Hemodynamic Monitoring"
  }
];



// Deduplicated combined question bank
const existingIdMap = new Set([
  ...NORCET_2024_STAGE1_100Q.map(q => q.id),
  ...NORCET_2023_STAGE1_100Q.map(q => q.id),
  ...NORCET_2022_STAGE1_100Q.map(q => q.id)
]);
const nonDupeBase = RAW_SEED_PYQ_QUESTIONS.filter(q => !existingIdMap.has(q.id));

export const SEED_PYQ_QUESTIONS: PYQQuestion[] = [
  ...NORCET_2024_STAGE1_100Q,
  ...NORCET_2023_STAGE1_100Q,
  ...NORCET_2022_STAGE1_100Q,
  ...nonDupeBase
];

export const PREVIOUS_YEAR_EXAM_SETS: FullExamSet[] = [
  {
    id: 'norcet-2024-stage1',
    exam: 'AIIMS NORCET',
    year: 2024,
    session: 'Stage I (Preliminary)',
    title: 'AIIMS NORCET 2024 — Stage I Preliminary Examination (Full 100 Questions Set)',
    shortTitle: 'NORCET 2024 (100 Qs)',
    durationMinutes: 90,
    totalMarks: 100,
    description: 'The authentic, complete 100-question AIIMS NORCET 2024 preliminary paper: 25 MSN, 20 FON, 15 OBG, 12 Pediatrics, 10 Pharmacology, 8 CHN, 5 Psychiatry, and 5 General Aptitude with standard 90-minute countdown and -1/3rd negative marking.',
    badge: 'Official 100-Question Paper',
    badgeVariant: 'teal',
    targetAudience: 'Official Preliminary Exam Simulation'
  },
  {
    id: 'norcet-2024-stage2',
    exam: 'AIIMS NORCET',
    year: 2024,
    session: 'Stage II (Clinical Skills)',
    title: 'AIIMS NORCET 2024 — Stage II Clinical Skills Scenario CBT',
    shortTitle: 'NORCET 2024 Stage II',
    durationMinutes: 15,
    description: 'High-stakes clinical skills & decision making: ICU chest tube bubbling, Magnesium toxicity antidotes, Enoxaparin administration, Tracheostomy decannulation emergencies, and Wernicke encephalopathy protocols.',
    badge: 'Clinical Skills CBT',
    badgeVariant: 'indigo',
    targetAudience: 'Advanced Clinical Prioritization'
  },
  {
    id: 'norcet-2023-stage1',
    exam: 'AIIMS NORCET',
    year: 2023,
    session: 'Stage I (Preliminary)',
    title: 'AIIMS NORCET 2023 — Stage I Preliminary Examination (Full 100 Questions Set)',
    shortTitle: 'NORCET 2023 (100 Qs)',
    durationMinutes: 90,
    totalMarks: 100,
    description: 'The authentic, complete 100-question AIIMS NORCET 2023 preliminary paper: 25 MSN, 20 FON, 15 OBG, 12 Pediatrics, 10 Pharmacology, 8 CHN, 5 Psychiatry, and 5 General Aptitude with standard 90-minute countdown and -1/3rd negative marking.',
    badge: 'Official 100-Question Paper',
    badgeVariant: 'teal',
    targetAudience: 'Official Preliminary Exam Simulation'
  },
  {
    id: 'norcet-2023-stage2',
    exam: 'AIIMS NORCET',
    year: 2023,
    session: 'Stage II (Clinical Skills)',
    title: 'AIIMS NORCET 2023 — Stage II Clinical Skills Scenario CBT',
    shortTitle: 'NORCET 2023 Stage II',
    durationMinutes: 15,
    description: 'High-acuity scenario questions: Inferior wall MI preload dependence, endotracheal suctioning vagal surge, PPH uterotonic contraindications, phlebostatic CVP zeroing, and autoclave biological validation.',
    badge: 'Clinical Skills CBT',
    badgeVariant: 'indigo',
    targetAudience: 'Bedside Critical Care Assessment'
  },
  {
    id: 'norcet-2022-stage1',
    exam: 'AIIMS NORCET',
    year: 2022,
    session: 'Stage I (Official Paper)',
    title: 'AIIMS NORCET 2022 — Official Nursing Officer Examination (Full 100 Questions Set)',
    shortTitle: 'NORCET 2022 (100 Qs)',
    durationMinutes: 90,
    totalMarks: 100,
    description: 'The authentic, complete 100-question AIIMS NORCET 2022 paper covering 25 MSN, 20 FON, 15 OBG, 12 Pediatrics, 10 Pharmacology, 8 CHN, 5 Psychiatry, and 5 General Aptitude with standard 90-minute countdown and -1/3rd negative marking.',
    badge: 'Official 100-Question Paper',
    badgeVariant: 'teal',
    targetAudience: 'Official Preliminary Exam Simulation'
  },
  {
    id: 'central-esic-rrb',
    exam: 'ESIC',
    year: 2022,
    session: 'Central Govt Nursing Selection',
    title: 'Central Govt Combined Nursing Officer Exam (ESIC / RRB / DSSSB)',
    shortTitle: 'ESIC & RRB Combined',
    durationMinutes: 12,
    description: 'Official questions curated from Employees State Insurance (ESIC), Railway Recruitment Board (RRB), and DSSSB Staff Nurse exams featuring trauma cannulas, GCS scoring, APGAR ratings, and inotropic math.',
    badge: 'Central Govt Paper',
    badgeVariant: 'purple',
    targetAudience: 'Central Hospital Selection'
  },
  {
    id: 'all-india-grand-mock',
    exam: 'All-India Mock',
    year: 2024,
    session: 'All-India Grand Mega Mock',
    title: 'All-India Grand Mega Mock — Full Nursing Officer CBT',
    shortTitle: 'Grand Mega Mock',
    durationMinutes: 30,
    description: 'The ultimate comprehensive simulation combining all previous year papers across 8 subjects into one high-intensity timed computer-based test.',
    badge: 'Grand Mega Mock',
    badgeVariant: 'amber',
    targetAudience: 'All-India Rank Benchmark'
  }
];

export function getQuestionsForExamSet(examSetId: string, allQuestions: PYQQuestion[] = SEED_PYQ_QUESTIONS): PYQQuestion[] {
  switch (examSetId) {
    case 'norcet-2024-stage1':
      return NORCET_2024_STAGE1_100Q;
    case 'norcet-2024-stage2':
      return allQuestions.filter(q => q.exam === 'AIIMS NORCET' && q.year === 2024 && q.session?.includes('Stage II'));
    case 'norcet-2023-stage1':
      return NORCET_2023_STAGE1_100Q;
    case 'norcet-2023-stage2':
      return allQuestions.filter(q => q.exam === 'AIIMS NORCET' && q.year === 2023 && q.session?.includes('Stage II'));
    case 'norcet-2022-stage1':
      return NORCET_2022_STAGE1_100Q;
    case 'central-esic-rrb':
      return allQuestions.filter(q => q.exam === 'ESIC' || q.exam === 'RRB' || q.exam === 'DSSSB');
    case 'all-india-grand-mock':
    default:
      return allQuestions;
  }
}
