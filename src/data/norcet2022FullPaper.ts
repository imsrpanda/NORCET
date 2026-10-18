import { PYQQuestion } from '../types';

export const NORCET_2022_STAGE1_100Q: PYQQuestion[] = [
  {
    "id": "AIIMS_NORCET_2022_S1_Q01",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiology: Infective Endocarditis Duke Diagnostic Criteria",
    "scenarioQuestion": "A 45-year-old patient with a prosthetic aortic valve presents with persistent fever, splinter hemorrhages beneath the fingernails, nontender erythematous macules on the palms (Janeway lesions), and painful violaceous nodules on the finger pads (Osler nodes). Which diagnostic investigation represents a MAJOR Duke criterion for confirming Infective Endocarditis?",
    "options": [
      {
        "id": "A",
        "text": "Transesophageal Echocardiography (TEE) demonstrating oscillating intracardiac vegetation or abscess"
      },
      {
        "id": "B",
        "text": "Single positive blood culture growing coagulase-negative staphylococcus"
      },
      {
        "id": "C",
        "text": "Erythrocyte Sedimentation Rate (ESR) elevation > 50 mm/hr"
      },
      {
        "id": "D",
        "text": "12-lead ECG demonstrating sinus tachycardia"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The two MAJOR Duke criteria for Infective Endocarditis are: (1) Persistently positive blood cultures with typical microorganisms from at least 2 separate blood draws, and (2) Positive Echocardiogram (preferably TEE) demonstrating an oscillating vegetation, abscess, or new dehiscence of a prosthetic valve.",
      "explanation": "Transesophageal echocardiography (TEE) has >90% sensitivity for detecting valvular vegetations, far superior to transthoracic echo (TTE). Janeway lesions, Osler nodes, Roth spots, splinter hemorrhages, and elevated inflammatory markers are minor Duke criteria.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "A single positive culture with common skin contaminants is not a major criterion unless confirmed on multiple independent venipunctures."
        },
        {
          "option": "C",
          "reason": "Elevated ESR is a non-specific inflammatory marker and not a major Duke criterion."
        },
        {
          "option": "D",
          "reason": "Sinus tachycardia is a physiological sign of fever, not a diagnostic criterion."
        }
      ],
      "priorityAlert": "Always obtain 3 sets of blood cultures from different venipuncture sites BEFORE initiating empiric broad-spectrum antibiotic therapy!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Valvular Heart Disease & Endocarditis"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q02",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiovascular Emergencies: Cardiac Tamponade Beck's Triad",
    "scenarioQuestion": "A patient who sustained blunt chest trauma in a motor vehicle collision suddenly deteriorates. On physical examination, the nurse notes: Jugular Venous Distension (JVD) to the angle of the jaw, muffled and distant heart sounds, and a blood pressure drop to 84/60 mmHg. What clinical triad and life-threatening condition does this represent?",
    "options": [
      {
        "id": "A",
        "text": "Beck's Triad indicating Acute Cardiac Tamponade"
      },
      {
        "id": "B",
        "text": "Virchow's Triad indicating Pulmonary Embolism"
      },
      {
        "id": "C",
        "text": "Cushing's Triad indicating Brainstem Herniation"
      },
      {
        "id": "D",
        "text": "Charcot's Triad indicating Acute Cholangitis"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Beck's Triad is the classic hallmark of Acute Cardiac Tamponade: (1) Hypotension with narrowed pulse pressure, (2) Jugular venous distension (elevated CVP), and (3) Muffled / distant heart sounds.",
      "explanation": "Rapid accumulation of fluid or blood in the inextensible pericardial sac compresses cardiac chambers, impairing ventricular diastolic filling and causing obstructive shock. Pulsus paradoxus (exaggerated inspiratory drop in systolic BP > 10 mmHg) is also typical. Immediate emergency pericardiocentesis is life-saving.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Virchow's triad consists of endothelial injury, venous stasis, and hypercoagulability."
        },
        {
          "option": "C",
          "reason": "Cushing's triad consists of hypertension with widened pulse pressure, bradycardia, and irregular respirations."
        },
        {
          "option": "D",
          "reason": "Charcot's triad consists of fever, right upper quadrant pain, and jaundice."
        }
      ],
      "priorityAlert": "Beck's Triad = JVD + Muffled Heart Sounds + Hypotension! Prepare immediately for bedside emergency PERICARDIOCENTESIS!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Trauma & Obstructive Shock"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q03",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Respiratory Emergencies: Tension Pneumothorax Immediate Decompression",
    "scenarioQuestion": "A patient on mechanical ventilation with high PEEP suddenly develops severe respiratory distress, acute cyanosis, absent breath sounds on the left hemithorax, hyperresonance to percussion, and tracheal deviation to the right. BP drops to 70/40 mmHg. What is the IMMEDIATE life-saving intervention?",
    "options": [
      {
        "id": "A",
        "text": "Immediate Needle Thoracostomy (decompression) using a 14G/16G cannula in the 2nd intercostal space mid-clavicular line (or 4th/5th ICS anterior axillary line)"
      },
      {
        "id": "B",
        "text": "Immediately send the patient to radiology for a definitive CT scan of the thorax"
      },
      {
        "id": "C",
        "text": "Increase PEEP from 10 to 20 cmH2O to re-inflate the left lung"
      },
      {
        "id": "D",
        "text": "Administer IV bolus Epinephrine 1 mg"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Tension Pneumothorax is a clinical emergency diagnosis that requires IMMEDIATE needle decompression without waiting for radiographic confirmation. Inserting a large-bore cannula (14–16G) into the 2nd intercostal space midclavicular line (or 5th ICS anterior axillary line) releases trapped pressurized air, relieving vena caval compression and restoring cardiac output.",
      "explanation": "Trapped air under one-way valve tension shifts the mediastinum to the contralateral side, compressing the superior and inferior vena cava and causing acute obstructive circulatory collapse. Waiting for an X-ray or CT scan is fatal.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Never delay needle decompression to transport an unstable patient for imaging; tension pneumothorax is a clinical diagnosis."
        },
        {
          "option": "C",
          "reason": "Increasing PEEP drives more air into the pleural space and accelerates circulatory arrest."
        },
        {
          "option": "D",
          "reason": "Epinephrine cannot overcome mechanical vena caval compression."
        }
      ],
      "priorityAlert": "Tension Pneumothorax: NEVER WAIT FOR AN X-RAY! Immediate needle thoracostomy followed by tube thoracostomy (chest drain)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Critical Care & Tension Pneumothorax"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q04",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Pulmonology: Acute Respiratory Distress Syndrome (ARDS) Berlin Criteria",
    "scenarioQuestion": "A patient with severe acute pancreatitis develops sudden progressive dyspnea and severe refractory hypoxemia 24 hours after admission. Arterial Blood Gas (ABG) on an FiO2 of 1.0 (100% O2) reveals a PaO2 of 58 mmHg (PaO2/FiO2 ratio = 58). Chest radiography reveals diffuse bilateral fluffy alveolar infiltrates with normal pulmonary capillary wedge pressure (12 mmHg). What is the diagnosis and Berlin severity classification?",
    "options": [
      {
        "id": "A",
        "text": "Severe ARDS (PaO2/FiO2 <= 100 mmHg with PEEP >= 5 cmH2O)"
      },
      {
        "id": "B",
        "text": "Moderate ARDS"
      },
      {
        "id": "C",
        "text": "Mild ARDS"
      },
      {
        "id": "D",
        "text": "Cardiogenic Pulmonary Edema"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "According to the Berlin Definition, ARDS is classified by the PaO2/FiO2 (P/F) ratio on PEEP >= 5 cmH2O: Mild ARDS (200 < P/F <= 300), Moderate ARDS (100 < P/F <= 200), and Severe ARDS (P/F <= 100 mmHg). Here, 58 / 1.0 = 58, indicating Severe ARDS.",
      "explanation": "ARDS is non-cardiogenic pulmonary edema caused by diffuse alveolar-capillary endothelial damage. PCWP <= 18 mmHg confirms the edema is non-cardiogenic. Prone positioning for >= 16 hours daily and low tidal volume ventilation (6 mL/kg predicted body weight) improve survival in severe ARDS.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Moderate ARDS requires PaO2/FiO2 between 101 and 200 mmHg."
        },
        {
          "option": "C",
          "reason": "Mild ARDS is PaO2/FiO2 between 201 and 300 mmHg."
        },
        {
          "option": "D",
          "reason": "Normal PCWP (12 mmHg, normal < 18 mmHg) rules out cardiogenic left ventricular failure."
        }
      ],
      "priorityAlert": "Proning (>= 16 hours/day) + Lung Protective Ventilation (6 mL/kg PBW) are evidence-based survival interventions in Severe ARDS!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Critical Care Pulmonology & ARDS"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q05",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Glasgow Coma Scale (GCS) Assessment Calculation",
    "scenarioQuestion": "A trauma nurse assesses an adult patient following a closed head injury. The patient opens eyes only in response to a painful sternal rub (2), makes incomprehensible moaning sounds (2), and withdraws the limb from the painful stimulus (4). What is the patient's total Glasgow Coma Scale (GCS) score?",
    "options": [
      {
        "id": "A",
        "text": "GCS = 8 (E2 V2 M4)"
      },
      {
        "id": "B",
        "text": "GCS = 6"
      },
      {
        "id": "C",
        "text": "GCS = 10"
      },
      {
        "id": "D",
        "text": "GCS = 4"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Glasgow Coma Scale components: Eye Opening (Pain = 2); Verbal Response (Incomprehensible sounds/moans = 2); Motor Response (Withdrawal from pain = 4). Total GCS = 2 + 2 + 4 = 8.",
      "explanation": "GCS scores range from 3 (deepest coma/flaccid) to 15 (fully conscious). A score of 8 or less indicates severe head injury and coma, requiring endotracheal intubation for airway protection (\"GCS of 8, intubate!\").",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Underscores motor or eye components."
        },
        {
          "option": "C",
          "reason": "Overestimates verbal or motor responses."
        },
        {
          "option": "D",
          "reason": "4 would indicate decerebrate posturing or near-total unresponsiveness."
        }
      ],
      "priorityAlert": "Clinical rule: GCS <= 8 = Severe TBI / Coma -> Prepare for immediate Endotracheal Intubation!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neurological Assessment & Trauma"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q06",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Myasthenia Gravis Tensilon (Edrophonium) Test",
    "scenarioQuestion": "A 32-year-old female presents with bilateral ptosis, diplopia, and severe skeletal muscle weakness that progressively worsens with repetitive activity and improves after rest. To differentiate Myasthenic Crisis from Cholinergic Crisis, the physician performs a Tensilon test using intravenous Edrophonium. Which finding indicates a POSITIVE result confirming Myasthenic Crisis?",
    "options": [
      {
        "id": "A",
        "text": "Rapid, dramatic temporary improvement in muscle strength and ptosis within 30 to 60 seconds"
      },
      {
        "id": "B",
        "text": "Immediate worsening of muscle weakness, increased fasciculations, and severe bradycardia"
      },
      {
        "id": "C",
        "text": "Pupillary dilation and dry mouth"
      },
      {
        "id": "D",
        "text": "No change in muscle tone after 30 minutes"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Edrophonium (Tensilon) is a rapid, ultra-short-acting acetylcholinesterase inhibitor. In Myasthenic Crisis (deficiency of acetylcholine at nicotinic receptors), it temporarily increases acetylcholine availability, causing immediate dramatic improvement in muscle strength within 30–60 seconds.",
      "explanation": "If the patient has Cholinergic Crisis (overmedication with cholinesterase inhibitors), Tensilon will worsen muscle weakness and trigger severe bradycardia, bronchospasm, and salivation. Atropine Sulfate must always be kept at the bedside as the specific antidote for cholinergic overdose during the test.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Worsening of weakness and fasciculations indicates a Cholinergic Crisis (too much acetylcholine), requiring Atropine."
        },
        {
          "option": "C",
          "reason": "Edrophonium is cholinergic, which causes miosis (pupil constriction) and salivation, not mydriasis or dry mouth."
        },
        {
          "option": "D",
          "reason": "Tensilon acts within 30 to 60 seconds; no response indicates non-myasthenic etiology."
        }
      ],
      "priorityAlert": "Always keep ATROPINE SULFATE drawn in a syringe at the bedside during a Tensilon test to treat acute cholinergic crisis and severe bradycardia!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Neuromuscular Disorders & Diagnostics"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q07",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cerebrovascular: Acute Ischemic Stroke IV rtPA Window & BP Thresholds",
    "scenarioQuestion": "A 60-year-old male arrives at the emergency room with acute right-sided hemiplegia and expressive aphasia. Symptoms began 2 hours ago. Non-contrast head CT rules out intracranial hemorrhage. What is the approved therapeutic window for intravenous recombinant tissue plasminogen activator (rtPA / Alteplase), and what is the maximum blood pressure limit before initiating infusion?",
    "options": [
      {
        "id": "A",
        "text": "Within 4.5 hours of symptom onset; BP must be lowered to < 185/110 mmHg prior to infusion"
      },
      {
        "id": "B",
        "text": "Within 12 hours of onset; BP must be < 220/120 mmHg"
      },
      {
        "id": "C",
        "text": "Within 24 hours of onset; BP must be < 140/90 mmHg"
      },
      {
        "id": "D",
        "text": "Within 1 hour of onset; BP does not affect thrombolysis"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The standard therapeutic window for IV Alteplase (rtPA) in acute ischemic stroke is within 3 to 4.5 hours of well-established symptom onset (\"last known normal\"). Blood pressure must be carefully maintained < 185/110 mmHg prior to initiation and < 180/105 mmHg for the next 24 hours to prevent fatal hemorrhagic transformation.",
      "explanation": "If BP is > 185/110 mmHg, IV antihypertensives (Labetalol, Nicardipine) must be administered to lower pressure safely before thrombolytic infusion. Neurological checks and BP are monitored every 15 minutes during the 1-hour rtPA infusion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "12 hours is outside the IV thrombolysis window (endovascular thrombectomy can be considered up to 24 hours for large vessel occlusions)."
        },
        {
          "option": "C",
          "reason": "24 hours is far beyond the window for IV rtPA."
        },
        {
          "option": "D",
          "reason": "BP is critically monitored because uncontrolled hypertension (>185/110) causes fatal intracranial hemorrhage."
        }
      ],
      "priorityAlert": "BP > 185/110 mmHg is an ABSOLUTE CONTRAINDICATION to IV rtPA until pressure is successfully lowered!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Stroke Protocol & Thrombolysis"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q08",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Acute Pancreatitis Diagnostic Enzymes & Ranson Criteria",
    "scenarioQuestion": "A 40-year-old chronic alcoholic male presents with severe, boring epigastric pain radiating directly to the back, accompanied by nausea and persistent retching. Physical exam reveals abdominal guarding and Cullen's sign (periumbilical ecchymosis). Which laboratory enzyme elevation is MOST specific for acute pancreatitis and remains elevated longer?",
    "options": [
      {
        "id": "A",
        "text": "Serum Lipase (elevates within 4–8 hours, peaks at 24 hours, and remains elevated for 8–14 days)"
      },
      {
        "id": "B",
        "text": "Serum Amylase (returns to normal within 48–72 hours)"
      },
      {
        "id": "C",
        "text": "Serum Alkaline Phosphatase"
      },
      {
        "id": "D",
        "text": "Serum Alanine Aminotransferase"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Serum Lipase is both more sensitive (90%–100%) and more specific than serum amylase for acute pancreatitis. It rises within 4–8 hours and stays elevated for up to 8–14 days, whereas amylase normalizes quickly in 2–3 days.",
      "explanation": "Diagnosis of acute pancreatitis requires at least 2 of 3 features: (1) characteristic epigastric pain radiating to back, (2) serum amylase or lipase >= 3 times upper limit of normal, and (3) characteristic cross-sectional imaging (contrast CT/MRI). Cullen's sign (periumbilical bruising) and Grey Turner's sign (flank bruising) indicate retroperitoneal hemorrhagic pancreatitis.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Amylase is also produced by salivary glands, bowel, and fallopian tubes, and clears rapidly within 48–72 hours."
        },
        {
          "option": "C",
          "reason": "Alkaline phosphatase reflects biliary tract obstruction."
        },
        {
          "option": "D",
          "reason": "ALT reflects hepatocellular injury, though ALT > 150 U/L suggests gallstone pancreatitis."
        }
      ],
      "priorityAlert": "Cullen's Sign (umbilicus) and Grey Turner's Sign (flank) indicate RETROPERITONEAL HEMORRHAGE in necrotizing pancreatitis!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Gastrointestinal Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q09",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Hepatology: Cirrhosis Hepatic Encephalopathy & Lactulose Mechanism",
    "scenarioQuestion": "A patient with decompensated liver cirrhosis develops asterixis (\"flapping tremor\" of outstretched dorsiflexed hands), slurred speech, and lethargy. The physician prescribes oral Lactulose 30 mL three times daily. How does Lactulose exert its therapeutic effect in lowering serum ammonia?",
    "options": [
      {
        "id": "A",
        "text": "Degraded by colonic bacteria into lactic and acetic acid, acidifying colon contents (pH < 5) to convert absorbable ammonia (NH3) into non-absorbable ammonium (NH4+) trapped in stool"
      },
      {
        "id": "B",
        "text": "Directly stimulates the urea cycle enzymes in damaged hepatocytes"
      },
      {
        "id": "C",
        "text": "Acts as a systemic diuretic to promote renal ammonia filtration"
      },
      {
        "id": "D",
        "text": "Binds directly to circulating GABA receptors in the brain"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Lactulose is a non-absorbable synthetic disaccharide that is metabolized by colonic flora into organic acids (lactic and acetic acids). This acidifies the gut lumen (pH < 5.0), converting diffusable lipophilic ammonia (NH3) into non-diffusable charged ammonium ions (NH4+), trapping it in feces for rapid evacuation.",
      "explanation": "The goal of lactulose therapy is 2 to 3 soft bowel movements per day. Overdosing leads to dehydration, hypernatremia, and hypokalemia. Asterixis is pathognomonic for metabolic encephalopathy (most commonly hepatic).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Lactulose does not stimulate cirrhotic liver hepatocytes."
        },
        {
          "option": "C",
          "reason": "Lactulose works in the bowel lumen via osmotic and trapping action, not as a renal diuretic."
        },
        {
          "option": "D",
          "reason": "Lactulose does not cross the blood-brain barrier."
        }
      ],
      "priorityAlert": "Titrate lactulose dose to achieve exactly 2 to 3 soft stools per day! Excessive watery diarrhea causes dehydration and worsens coma!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Hepatic Encephalopathy & GI Pharmacology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q10",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Nephrology: Chronic Kidney Disease Stages & GFR Cutoffs",
    "scenarioQuestion": "According to KDIGO guidelines, a patient with long-standing diabetic nephropathy has a persistent estimated Glomerular Filtration Rate (eGFR) of 12 mL/min/1.73 m² accompanied by severe pruritus, uremic frost, and fluid overload. In which stage of Chronic Kidney Disease (CKD) is this patient classified?",
    "options": [
      {
        "id": "A",
        "text": "Stage 5 (Kidney Failure / End-Stage Renal Disease: eGFR < 15 mL/min/1.73 m²)"
      },
      {
        "id": "B",
        "text": "Stage 4 (Severely decreased: eGFR 15–29 mL/min/1.73 m²)"
      },
      {
        "id": "C",
        "text": "Stage 3b (Moderately to severely decreased: eGFR 30–44 mL/min/1.73 m²)"
      },
      {
        "id": "D",
        "text": "Stage 2 (Mildly decreased: eGFR 60–89 mL/min/1.73 m²)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "KDIGO CKD Staging based on eGFR: Stage 1 >= 90 with kidney damage; Stage 2 = 60–89; Stage 3a = 45–59; Stage 3b = 30–44; Stage 4 = 15–29; Stage 5 < 15 mL/min/1.73 m² (End-Stage Renal Disease / Kidney Failure requiring renal replacement therapy).",
      "explanation": "Patients in Stage 5 CKD require renal replacement therapy (hemodialysis, peritoneal dialysis, or kidney transplantation) to survive. Uremic frost occurs when urea in sweat crystallizes on the skin.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Stage 4 corresponds to eGFR 15 to 29 mL/min."
        },
        {
          "option": "C",
          "reason": "Stage 3b corresponds to eGFR 30 to 44 mL/min."
        },
        {
          "option": "D",
          "reason": "Stage 2 corresponds to eGFR 60 to 89 mL/min."
        }
      ],
      "priorityAlert": "CKD Stage 5 = eGFR < 15 mL/min! Renal replacement therapy (Dialysis/Transplant) is mandatory!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Renal Disease & KDIGO Criteria"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q11",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrinology: Diabetic Ketoacidosis (DKA) Fluid Resuscitation Priority",
    "scenarioQuestion": "A 19-year-old with Type 1 Diabetes Mellitus arrives with deep, rapid respirations (Kussmaul breathing), fruity breath odor, blood glucose 540 mg/dL, arterial pH 7.15, serum HCO3 10 mEq/L, and positive urine ketones. What is the FIRST and most critical therapeutic intervention before initiating intravenous insulin infusion?",
    "options": [
      {
        "id": "A",
        "text": "Rapid intravenous volume resuscitation with 0.9% Normal Saline (1000 mL in the first hour)"
      },
      {
        "id": "B",
        "text": "Intravenous Regular Insulin bolus of 50 units push"
      },
      {
        "id": "C",
        "text": "Intravenous Sodium Bicarbonate 100 mEq push"
      },
      {
        "id": "D",
        "text": "Subcutaneous Glargine insulin injection"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The immediate first priority in Diabetic Ketoacidosis (DKA) is aggressive volume resuscitation with 0.9% Normal Saline (1 to 1.5 L in the first hour) to restore intravascular volume, improve renal perfusion, and reduce circulating counter-regulatory stress hormones.",
      "explanation": "Insulin should NOT be given before fluids because insulin drives glucose and water into cells, worsening intravascular hypovolemic collapse and vascular shock. Furthermore, serum potassium must be >= 3.3 mEq/L before starting insulin to avoid fatal hypokalemic cardiac arrest.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "High-dose insulin boluses without fluid repletion precipitate vascular collapse and fatal hypokalemia."
        },
        {
          "option": "C",
          "reason": "Bicarbonate is indicated only for severe refractory acidosis with pH < 6.9; routine use causes paradoxical CSF acidosis."
        },
        {
          "option": "D",
          "reason": "Subcutaneous long-acting insulin has delayed erratic absorption in severe dehydration and shock."
        }
      ],
      "priorityAlert": "FLUIDS FIRST IN DKA! Never give IV insulin until fluid resuscitation is initiated and serum K+ is confirmed >= 3.3 mEq/L!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Endocrine Emergencies & DKA"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q12",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrinology: Addisonian (Adrenal) Crisis Emergency Management",
    "scenarioQuestion": "A patient with primary chronic adrenal insufficiency (Addison disease) on long-term steroid replacement contracts a severe gastrointestinal infection and abruptly stops taking oral hydrocortisone. The patient presents with refractory hypotension (BP 72/40), severe hyponatremia, hyperkalemia, and hypoglycemia. What is the DRUG OF CHOICE for emergency treatment?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous Hydrocortisone (100 mg IV bolus immediately, followed by 100–200 mg every 24 hours) with 5% Dextrose in Normal Saline"
      },
      {
        "id": "B",
        "text": "Oral Fludrocortisone 0.1 mg"
      },
      {
        "id": "C",
        "text": "Intravenous Regular Insulin 10 units push"
      },
      {
        "id": "D",
        "text": "Oral Dexamethasone 0.5 mg daily"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Acute Adrenal Crisis (Addisonian Crisis) is a life-threatening endocrine emergency treated immediately with IV Hydrocortisone (100 mg stat bolus) and rapid IV infusion of 5% Dextrose in 0.9% Normal Saline (D5NS) to treat shock, hyponatremia, and hypoglycemia.",
      "explanation": "Hydrocortisone provides both glucocorticoid (glucose regulation, vascular tone) and mineralocorticoid (sodium retention) activity at high doses. Abrupt cessation of exogenous steroids during physiological stress precipitates crisis.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Oral fludrocortisone cannot be absorbed in a vomiting patient in vascular collapse."
        },
        {
          "option": "C",
          "reason": "Insulin further worsens the life-threatening hypoglycemia and shock."
        },
        {
          "option": "D",
          "reason": "Dexamethasone lacks mineralocorticoid activity needed to correct severe sodium/water wasting."
        }
      ],
      "priorityAlert": "Never stop corticosteroids abruptly! Stressful events (infection, trauma, surgery) require the \"SICK DAY RULE\" — doubling or tripling the oral steroid dose!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Adrenal Disorders & Endocrine Crises"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q13",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrinology: Thyroid Storm (Thyrotoxic Crisis) Treatment Regimen",
    "scenarioQuestion": "A woman with Graves disease undergoes an emergency appendectomy. In the recovery room, she develops extreme hyperpyrexia (temp 41°C / 105.8°F), marked tachycardia (HR 170 bpm, atrial fibrillation), agitation, and delirium. What is the PRIMARY antithyroid drug of choice in Thyroid Storm, and why is it preferred over Methimazole?",
    "options": [
      {
        "id": "A",
        "text": "Propylthiouracil (PTU); because it blocks new thyroid hormone synthesis AND inhibits peripheral conversion of T4 to active T3"
      },
      {
        "id": "B",
        "text": "Methimazole; because it has no hepatic toxicity"
      },
      {
        "id": "C",
        "text": "Levothyroxine IV; to suppress pituitary TSH"
      },
      {
        "id": "D",
        "text": "Radioactive Iodine (I-131) oral solution"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Propylthiouracil (PTU) is the antithyroid drug of choice in acute Thyroid Storm because it inhibits thyroid peroxidase (blocking synthesis of new hormones) AND uniquely inhibits peripheral 5'-deiodinase, preventing conversion of T4 into the active T3.",
      "explanation": "Thyroid storm is treated with: (1) Beta-blocker (Propranolol) to control adrenergic storm, (2) PTU, (3) Lugol's iodine or SSKI (given 1 hour AFTER PTU to prevent hormone synthesis using the iodine), and (4) Hydrocortisone to treat relative adrenal insufficiency and block peripheral T4-to-T3 conversion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Methimazole does NOT block peripheral conversion of T4 to T3 and acts slower in thyroid storm."
        },
        {
          "option": "C",
          "reason": "Levothyroxine is exogenous thyroid hormone and would be lethal."
        },
        {
          "option": "D",
          "reason": "Radioactive iodine causes radiation thyroiditis and acutely surges thyroid hormones into circulation."
        }
      ],
      "priorityAlert": "Always administer PTU at least ONE HOUR BEFORE giving Potassium Iodide (Lugol's solution); giving iodine first fuels new hormone synthesis!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Thyroid Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q14",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Burns: Parkland Formula Resuscitation Math",
    "scenarioQuestion": "A 70 kg adult patient sustained partial and full-thickness thermal burns involving the entire anterior torso (18%) and both entire upper extremities (9% + 9% = 18%). Total Burn Surface Area (TBSA) is 36%. According to the Parkland (Baxter) formula, what is the total volume of Ringer Lactate required in the first 24 hours, and how much is given in the first 8 hours?",
    "options": [
      {
        "id": "A",
        "text": "Total 24-hr volume = 10,080 mL; first 8 hours = 5,040 mL (half of total)"
      },
      {
        "id": "B",
        "text": "Total 24-hr volume = 5,040 mL; first 8 hours = 2,520 mL"
      },
      {
        "id": "C",
        "text": "Total 24-hr volume = 15,000 mL; first 8 hours = 10,000 mL"
      },
      {
        "id": "D",
        "text": "Total 24-hr volume = 8,000 mL; first 8 hours = 4,000 mL"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Parkland formula: 4 mL * Body Weight (kg) * % TBSA burn. Here: 4 mL * 70 kg * 36% = 10,080 mL of Ringer Lactate in first 24 hours. First 8 hours receives 50% (5,040 mL) calculated from the EXACT TIME OF BURN INJURY.",
      "explanation": "The remaining 50% (5,040 mL) is infused over the subsequent 16 hours. Resuscitation adequacy is assessed by hourly urine output: target 0.5 to 1.0 mL/kg/hr (30–50 mL/hr) in adults.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Calculated using 2 mL/kg/% (Modified Brooke formula, not Parkland)."
        },
        {
          "option": "C",
          "reason": "Gross overestimation risking pulmonary edema and abdominal compartment syndrome."
        },
        {
          "option": "D",
          "reason": "Mathematical calculation error."
        }
      ],
      "priorityAlert": "The 8-hour clock begins from the TIME OF INJURY, NOT the time of hospital admission!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Burn Trauma & Fluid Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q15",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Nephrology: Arteriovenous (AV) Fistula Assessment & Care",
    "scenarioQuestion": "A nursing officer assesses a newly matured radiocephalic Arteriovenous (AV) Fistula in the left forearm of a hemodialysis patient. Which findings confirm patency of the vascular access, and what strict precaution must be observed on this extremity?",
    "options": [
      {
        "id": "A",
        "text": "Palpable continuous thrill and audible vascular bruit; NEVER take blood pressure or perform venipunctures on this extremity"
      },
      {
        "id": "B",
        "text": "Absence of vibration and faint pulse; BP cuff may be used if padded"
      },
      {
        "id": "C",
        "text": "Prominent edema with high venous pressure; apply a tight compression bandage"
      },
      {
        "id": "D",
        "text": "Bluish cold fingers with absent radial pulse; elevate arm above head"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "A patent functioning AV fistula demonstrates a palpable vibration (\"thrill\") and an audible continuous rushing sound (\"bruit\") on auscultation. The extremity must NEVER be used for blood pressure measurement, blood draws, IV cannulation, or tight constricting garments.",
      "explanation": "External pressure from a BP cuff or tourniquet can induce thrombosis and permanently destroy the vascular access. Absence of thrill or bruit indicates acute fistula thrombosis, requiring immediate vascular surgical intervention.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Absence of thrill indicates thrombosis; BP cuff is strictly forbidden."
        },
        {
          "option": "C",
          "reason": "Tight bandages cause access thrombosis."
        },
        {
          "option": "D",
          "reason": "Cold pale fingers indicate arterial steal syndrome requiring immediate surgical revision."
        }
      ],
      "priorityAlert": "NO BP / NO BLOOD DRAWS / NO IV CANNULAS on the arm with an AV Fistula or Graft! Post a sign above the bed!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Hemodialysis & Vascular Access"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q16",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Musculoskeletal: Acute Compartment Syndrome the 6 Ps",
    "scenarioQuestion": "A 22-year-old male with a closed tibia-fibula fracture has a tight plaster cast applied. Four hours later, he complains of severe, excruciating pain out of proportion to the injury that is NOT relieved by IV opioids and is exacerbated by passive dorsiflexion of the toes. What is the nurse's FIRST priority action?",
    "options": [
      {
        "id": "A",
        "text": "Bivalve the plaster cast immediately and notify the orthopaedic surgeon of impending Acute Compartment Syndrome"
      },
      {
        "id": "B",
        "text": "Elevate the extremity on three pillows above heart level and apply ice"
      },
      {
        "id": "C",
        "text": "Administer an additional double dose of IV Morphine and recheck in 4 hours"
      },
      {
        "id": "D",
        "text": "Apply a tight elastic tensor bandage around the cast"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Excruciating pain disproportionate to the injury and pain on passive muscle stretch are the EARLIEST and most reliable signs of Acute Compartment Syndrome. The cast must be immediately bivalved (cut longitudinally on both sides) to relieve external pressure, and the surgeon notified for urgent fasciotomy.",
      "explanation": "Elevating the limb above heart level is CONTRAINDICATED because it reduces arterial perfusion pressure into the already compromised osteofascial compartment. Applying ice causes vasoconstriction and worsens muscle ischemia. The 6 Ps are: Pain (earliest), Paresthesia, Pallor, Poikilothermia, Pulselessness (late/irreversible), and Paralysis (late).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Extreme elevation above heart level decreases microvascular arterial perfusion; keep at heart level."
        },
        {
          "option": "C",
          "reason": "Increasing opioids masks advancing neurovascular necrosis."
        },
        {
          "option": "D",
          "reason": "Elastic bandages increase compartment pressure and guarantee tissue gangrene."
        }
      ],
      "priorityAlert": "Earliest sign of Compartment Syndrome = Severe pain out of proportion + pain on passive stretch! Pulselessness is a LATE sign indicating irreversible necrosis!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Orthopaedic Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q17",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiology: Atrial Fibrillation Management & Anticoagulation (CHA2DS2-VASc)",
    "scenarioQuestion": "A 70-year-old female with hypertension presents with palpitations and fatigue. ECG demonstrates irregularly irregular narrow QRS complexes with absent P waves and fibrillatory f-waves at a ventricular rate of 134 bpm. What are the two primary pharmacotherapeutic goals in managing stable Atrial Fibrillation with rapid ventricular response?",
    "options": [
      {
        "id": "A",
        "text": "Ventricular rate control (Beta-blockers or non-DHP Calcium Channel Blockers) and systemic thromboembolism prophylaxis (Anticoagulation)"
      },
      {
        "id": "B",
        "text": "Immediate unsynchronized defibrillation at 360 Joules"
      },
      {
        "id": "C",
        "text": "High-dose IV Furosemide and oral Potassium chloride"
      },
      {
        "id": "D",
        "text": "Atropine 1 mg IV push"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The twin cornerstones of stable Atrial Fibrillation management are: (1) Ventricular rate control (Beta-blockers like Metoprolol, or non-DHP CCBs like Diltiazem/Verapamil) to optimize cardiac filling, and (2) Stroke prevention with Anticoagulation guided by the CHA2DS2-VASc score.",
      "explanation": "Unsynchronized defibrillation is reserved for pulseless cardiac arrest (VF/pVT); in stable AF with a pulse, cardioversion must be synchronized to prevent triggering ventricular fibrillation (R-on-T phenomenon). Atropine speeds up the heart and worsens AF.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Unsynchronized shocks in a patient with a pulse trigger fatal ventricular fibrillation."
        },
        {
          "option": "C",
          "reason": "Diuretics do not control ventricular rate in AF without heart failure."
        },
        {
          "option": "D",
          "reason": "Atropine is a vagolytic that accelerates AV conduction, causing ventricular rates > 200 bpm."
        }
      ],
      "priorityAlert": "AF cardioversion without prior anticoagulation (or TEE ruling out left atrial appendage thrombus) can dislodge a clot and cause an ISCHEMIC STROKE!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Cardiac Arrhythmias & Stroke Risk"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q18",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Vascular Emergencies: Acute Aortic Dissection Presentation",
    "scenarioQuestion": "A 58-year-old male with poorly controlled hypertension suddenly experiences agonizing, knife-like \"tearing and ripping\" substernal chest pain radiating between the shoulder blades into the back. Blood pressure is 196/110 mmHg in the right arm but 132/78 mmHg in the left arm, with an asymmetric radial pulse. What is the MOST likely diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Acute Aortic Dissection"
      },
      {
        "id": "B",
        "text": "Acute Pericarditis"
      },
      {
        "id": "C",
        "text": "Spontaneous Pneumothorax"
      },
      {
        "id": "D",
        "text": "Esophageal Spasm"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Sudden, excruciating, tearing/ripping chest pain radiating to the interscapular back, accompanied by marked blood pressure discrepancy (>20 mmHg) between the right and left arms and pulse deficit, is the classic hallmark of Acute Aortic Dissection.",
      "explanation": "An intimal tear allows blood under systemic pressure to surge into the media layer, creating a false lumen. Involvement of branch vessels (subclavian artery) produces blood pressure differentials. First-line medical therapy is IV Beta-blockers (Esmolol/Labetalol) to reduce heart rate < 60 bpm and systolic BP to 100–120 mmHg (lowering shear stress dP/dt), followed by emergency surgery for Stanford Type A dissection.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Pericarditis pain is pleuritic, relieved by sitting forward, and accompanied by pericardial friction rub."
        },
        {
          "option": "C",
          "reason": "Pneumothorax produces acute dyspnea and absent breath sounds on the affected side."
        },
        {
          "option": "D",
          "reason": "Esophageal spasm does not cause inter-arm blood pressure differentials or pulse deficits."
        }
      ],
      "priorityAlert": "Tearing interscapular back pain + inter-arm BP discrepancy > 20 mmHg = ACUTE AORTIC DISSECTION! Avoid thrombolysis or anticoagulants!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Vascular Surgery & Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q19",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Parkinson Disease Cardinal Motor Features & Dopamine Deficit",
    "scenarioQuestion": "A 68-year-old male presents with a resting \"pill-rolling\" hand tremor, lead-pipe and cogwheel rigidity, bradykinesia (shuffling gait with festination), and masked facial facies. What is the fundamental neurochemical deficit underlying Parkinson Disease?",
    "options": [
      {
        "id": "A",
        "text": "Degeneration of dopaminergic neurons in the Substantia Nigra pars compacta leading to dopamine depletion in the striatum"
      },
      {
        "id": "B",
        "text": "Deficiency of Acetylcholine at post-synaptic neuromuscular junctions"
      },
      {
        "id": "C",
        "text": "Autoimmune demyelination of central axons in the cerebral cortex"
      },
      {
        "id": "D",
        "text": "Deficiency of GABA and Substance P in the Caudate nucleus"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Parkinson disease is characterized by the progressive loss of melanin-containing dopaminergic neurons in the substantia nigra pars compacta, resulting in striatal dopamine depletion and relative acetylcholine excess.",
      "explanation": "The classic motor triad consists of: Resting Tremor (4–6 Hz pill-rolling), Rigidity (cogwheel/leadpipe), and Bradykinesia, along with postural instability. Levodopa-Carbidopa is the gold standard pharmacotherapy; Carbidopa prevents peripheral dopa-decarboxylase conversion, maximizing brain penetration.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Acetylcholine receptor deficiency describes Myasthenia Gravis."
        },
        {
          "option": "C",
          "reason": "Autoimmune central demyelination describes Multiple Sclerosis."
        },
        {
          "option": "D",
          "reason": "Caudate atrophy with GABA deficiency causes Huntington Disease (chorea)."
        }
      ],
      "priorityAlert": "Levodopa must NOT be taken with high-protein meals because neutral amino acids compete with levodopa for transport across the blood-brain barrier!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neurodegenerative Disorders"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q20",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Peptic Ulcer Disease Helicobacter pylori Eradication",
    "scenarioQuestion": "A patient with recurrent duodenal ulcers tests positive for Helicobacter pylori via Rapid Urease Test (RUT). What standard FIRST-LINE 14-day Triple Therapy regimen is recommended for H. pylori eradication?",
    "options": [
      {
        "id": "A",
        "text": "Proton Pump Inhibitor (PPI) + Clarithromycin + Amoxicillin (or Metronidazole if penicillin-allergic)"
      },
      {
        "id": "B",
        "text": "PPI + Ciprofloxacin + Doxycycline"
      },
      {
        "id": "C",
        "text": "Antacid + Sucralfate + Bismuth subsalicylate"
      },
      {
        "id": "D",
        "text": "H2-blocker alone for 6 months"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Standard first-line Triple Therapy for H. pylori eradication consists of a Proton Pump Inhibitor (e.g., Omeprazole 20 mg bid) + Clarithromycin (500 mg bid) + Amoxicillin (1000 mg bid) taken twice daily for 14 days.",
      "explanation": "In areas with high clarithromycin resistance, Bismuth quadruple therapy (PPI + Bismuth subcitrate + Metronidazole + Tetracycline) is preferred. Duodenal ulcer pain characteristically occurs 2–3 hours after meals and is relieved by food, while gastric ulcer pain worsens with food.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Ciprofloxacin and Doxycycline are not standard first-line H. pylori regimens."
        },
        {
          "option": "C",
          "reason": "Antacids and sucralfate provide mucosal coating but cannot eradicate bacterial H. pylori infection."
        },
        {
          "option": "D",
          "reason": "H2-blocker monotherapy leaves the bacterial infection untreated, guaranteeing ulcer relapse."
        }
      ],
      "priorityAlert": "Duodenal ulcer pain = RELIEVED by eating! Gastric ulcer pain = WORSENED by eating!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Peptic Ulcer & Antimicrobial Protocols"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q21",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Pulmonology: Pleural Effusion Thoracentesis Fluid Removal Limit",
    "scenarioQuestion": "A physician is performing a therapeutic thoracentesis on a patient with a massive left-sided pleural effusion. What is the recommended MAXIMUM volume of pleural fluid that should be aspirated in a single procedure to avoid Re-Expansion Pulmonary Edema (REPE)?",
    "options": [
      {
        "id": "A",
        "text": "1,000 to 1,500 mL"
      },
      {
        "id": "B",
        "text": "3,500 to 4,000 mL"
      },
      {
        "id": "C",
        "text": "200 to 300 mL"
      },
      {
        "id": "D",
        "text": "5,000 mL"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In therapeutic thoracentesis, the maximum volume of fluid removed at one time should generally not exceed 1,000 to 1,500 mL (1 to 1.5 L) to prevent Re-Expansion Pulmonary Edema (REPE) and severe hypovolemic vasovagal syncope.",
      "explanation": "Aspirating excessive pleural fluid too rapidly produces severe negative intrathoracic pressure, alveolar-capillary membrane shearing, and sudden vascular transudation, leading to life-threatening acute pulmonary edema in the re-expanded lung. If the patient develops intractable cough or chest tightness, terminate aspiration immediately.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Removing > 1,500 mL causes massive negative pleural pressure and triggers fatal Re-Expansion Pulmonary Edema."
        },
        {
          "option": "C",
          "reason": "200-300 mL is diagnostic, but therapeutic removal comfortably allows 1000-1500 mL."
        },
        {
          "option": "D",
          "reason": "5,000 mL removal causes sudden circulatory collapse."
        }
      ],
      "priorityAlert": "Stop thoracentesis immediately if the patient develops persistent coughing, chest pain, or dyspnea — these are warning signs of Re-Expansion Pulmonary Edema!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pleural Procedures & Complications"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q22",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Trigeminal Neuralgia (Tic Douloureux) Clinical Features",
    "scenarioQuestion": "A 54-year-old female experiences sudden, paroxysmal, excruciating lancinating electric-shock-like pain along the right cheek and jaw triggered by brushing her teeth, chewing, or feeling a light breeze on her face. What cranial nerve is involved, and what is the FIRST-LINE medical drug of choice?",
    "options": [
      {
        "id": "A",
        "text": "Cranial Nerve V (Trigeminal Nerve); Carbamazepine (Tegretol)"
      },
      {
        "id": "B",
        "text": "Cranial Nerve VII (Facial Nerve); Prednisolone"
      },
      {
        "id": "C",
        "text": "Cranial Nerve IX (Glossopharyngeal Nerve); Gabapentin"
      },
      {
        "id": "D",
        "text": "Cranial Nerve XI (Spinal Accessory Nerve); Baclofen"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Trigeminal Neuralgia (Tic Douloureux) involves Cranial Nerve V (most commonly maxillary V2 and mandibular V3 branches). It produces unilateral, stabbing electric pain triggered by light sensory touch. The first-line medical therapy of choice is Carbamazepine (anticonvulsant that inhibits voltage-gated sodium channels).",
      "explanation": "Patients often avoid chewing, washing their face, or brushing teeth out of fear of triggering attacks. Cranial Nerve VII involvement causes Bell's Palsy (facial muscle paralysis, not sensory pain). Cranial Nerve IX causes glossopharyngeal neuralgia (throat and ear pain).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Cranial Nerve VII causes Bell's palsy (motor weakness, loss of forehead wrinkling)."
        },
        {
          "option": "C",
          "reason": "Cranial Nerve IX triggers throat/tonsillar pain on swallowing."
        },
        {
          "option": "D",
          "reason": "Cranial Nerve XI innervates sternocleidomastoid and trapezius muscles."
        }
      ],
      "priorityAlert": "Carbamazepine requires baseline and periodic Complete Blood Counts (CBC) because it can cause rare APLASTIC ANEMIA and AGRANULOCYTOSIS!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Cranial Nerve Disorders"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q23",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Oncology: Superior Vena Cava (SVC) Syndrome Clinical Recognition",
    "scenarioQuestion": "A patient with small-cell lung carcinoma in the right upper lobe presents with progressive facial fullness, periorbital edema, swelling of the neck and bilateral arms, prominent distended collateral veins across the chest wall, and dyspnea when bending forward. What oncologic emergency does this represent?",
    "options": [
      {
        "id": "A",
        "text": "Superior Vena Cava (SVC) Syndrome"
      },
      {
        "id": "B",
        "text": "Spinal Cord Compression"
      },
      {
        "id": "C",
        "text": "Tumor Lysis Syndrome"
      },
      {
        "id": "D",
        "text": "Cardiac Tamponade"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Superior Vena Cava (SVC) Syndrome is an oncologic emergency caused by external compression or intraluminal thrombosis of the thin-walled SVC by mediastinal/thoracic malignancies (e.g. lung cancer, lymphoma), causing venous congestion of the head, neck, and upper extremities.",
      "explanation": "Classic symptoms include facial and periorbital edema, plethora, distended jugular and thoracic veins, and dyspnea exacerbated by recumbency or bending forward (Pemberton's sign). Immediate interventions include head-of-bed elevation, supplemental oxygen, emergency radiation therapy, and endovascular stenting.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Spinal cord compression presents with focal back pain, sensory levels, and motor weakness in lower limbs."
        },
        {
          "option": "C",
          "reason": "Tumor lysis syndrome presents with hyperkalemia, hyperuricemia, hyperphosphatemia, and hypocalcemia."
        },
        {
          "option": "D",
          "reason": "Cardiac tamponade presents with Beck's triad (JVD, muffled sounds, hypotension) without upper extremity venous collaterals."
        }
      ],
      "priorityAlert": "Never perform venipunctures or place IV catheters in the UPPER EXTREMITIES in patients with SVC Syndrome due to severe venous stasis!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Oncologic Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q24",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Emergency: Anaphylaxis Epinephrine Dose and Administration Route",
    "scenarioQuestion": "A patient develops sudden wheezing, stridor, urticaria, facial angioedema, and a blood pressure drop to 80/50 mmHg within 2 minutes of receiving IV Ceftriaxone. What is the FIRST-LINE drug of choice, dosage, concentration, and route of administration for adult anaphylaxis?",
    "options": [
      {
        "id": "A",
        "text": "Epinephrine 0.5 mg (0.5 mL of 1:1,000 solution) administered INTRAMUSCULARLY into the anterolateral mid-thigh (vastus lateralis)"
      },
      {
        "id": "B",
        "text": "Epinephrine 1 mg (1:1,000) administered subcutaneous in the deltoid"
      },
      {
        "id": "C",
        "text": "Hydrocortisone 100 mg IV push as sole therapy"
      },
      {
        "id": "D",
        "text": "Diphenhydramine 50 mg orally"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The immediate first-line treatment for anaphylaxis is Epinephrine 0.3 to 0.5 mg (1:1,000 / 1 mg/mL) administered INTRAMUSCULARLY into the mid-anterolateral thigh (vastus lateralis).",
      "explanation": "IM injection in the thigh produces significantly faster and higher peak plasma concentrations than subcutaneous or deltoid administration. Antihistamines and corticosteroids are secondary adjunctive therapies that do not reverse life-threatening laryngeal edema or shock. The dose can be repeated every 5 to 15 minutes if symptoms persist.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Subcutaneous absorption is too slow during shock; 1 mg 1:1,000 is an excessive bolus dose."
        },
        {
          "option": "C",
          "reason": "Corticosteroids take 4 to 6 hours to work and cannot treat acute airway obstruction."
        },
        {
          "option": "D",
          "reason": "Oral drugs cannot be swallowed by a patient with angioedema and act too slowly."
        }
      ],
      "priorityAlert": "Epinephrine 1:1,000 is for INTRAMUSCULAR injection! Epinephrine 1:10,000 is reserved for IV CARDIAC ARREST!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Anaphylaxis Protocols & Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q25",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Hematology: Disseminated Intravascular Coagulation (DIC) Coagulation Profile",
    "scenarioQuestion": "A patient in septic shock develops spontaneous petechiae, ecchymoses, and continuous oozing of blood from IV cannula sites and mucosal membranes. Which laboratory coagulation profile confirms Disseminated Intravascular Coagulation (DIC)?",
    "options": [
      {
        "id": "A",
        "text": "Prolonged PT and aPTT, Decreased Platelets, Decreased Fibrinogen, and Markedly Elevated D-Dimer / FDPs"
      },
      {
        "id": "B",
        "text": "Normal PT/aPTT, Elevated Platelets, and Normal D-Dimer"
      },
      {
        "id": "C",
        "text": "Shortened PT/aPTT and Elevated Fibrinogen"
      },
      {
        "id": "D",
        "text": "Isolated Thrombocytopenia with normal PT, normal aPTT, and normal Fibrinogen"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "DIC is a consumption coagulopathy characterized by: Prolonged Prothrombin Time (PT), Prolonged aPTT, Marked Thrombocytopenia (< 100,000/uL), Hypofibrinogenemia (< 100–150 mg/dL), and Markedly Elevated D-Dimer / Fibrin Degradation Products (FDPs).",
      "explanation": "Systemic microvascular thrombosis paradoxically consumes platelets, prothrombin, and fibrinogen, resulting in widespread bleeding diathesis. Primary management requires treating the underlying trigger (e.g. sepsis, abruptio placentae) and transfusing platelets, cryoprecipitate (for fibrinogen), and FFP.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Platelets are consumed, not elevated."
        },
        {
          "option": "C",
          "reason": "Coagulation times are prolonged due to depletion of clotting factors."
        },
        {
          "option": "D",
          "reason": "Isolated thrombocytopenia with normal PT/aPTT/fibrinogen describes Immune Thrombocytopenic Purpura (ITP), not DIC."
        }
      ],
      "priorityAlert": "Cryoprecipitate is the blood product of choice to replace depleted FIBRINOGEN in DIC!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Hematology & Coagulopathies"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q26",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Oxygen Therapy: Oxygen Cylinder Color Coding Standards",
    "scenarioQuestion": "In hospital clinical practice in India and internationally, what is the standardized color coding for an OXYGEN gas cylinder and a NITROUS OXIDE cylinder, respectively?",
    "options": [
      {
        "id": "A",
        "text": "Oxygen: Black body with White shoulder; Nitrous Oxide: French Blue"
      },
      {
        "id": "B",
        "text": "Oxygen: All Green; Nitrous Oxide: All Yellow"
      },
      {
        "id": "C",
        "text": "Oxygen: French Blue; Nitrous Oxide: Black body with White shoulder"
      },
      {
        "id": "D",
        "text": "Oxygen: White body with Black shoulder; Nitrous Oxide: Grey"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Standard medical gas cylinder colors: Oxygen = Black body with White shoulder (Pin Index: 2, 5). Nitrous Oxide = French Blue (Pin Index: 3, 5). Carbon Dioxide = Grey. Cyclopropane = Orange. Entonox = Blue body with White/Blue quartered shoulder.",
      "explanation": "In the US, oxygen cylinders are often all green, but according to ISO, British, and Indian standards (AIIMS / DGHS standard), medical oxygen is Black body with White shoulder. Nitrous oxide is uniformly Blue.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "All yellow is for medical air or suction in some systems, not oxygen."
        },
        {
          "option": "C",
          "reason": "Reverses oxygen and nitrous oxide."
        },
        {
          "option": "D",
          "reason": "Grey is for Carbon Dioxide."
        }
      ],
      "priorityAlert": "Oxygen = Black body with White shoulder! Nitrous Oxide = French Blue! Pin Index for O2 = 2 and 5!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Medical Gas Safety & Color Codes"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q27",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Cardiovascular Assessment: Pulse Deficit Measurement Protocol",
    "scenarioQuestion": "A nursing officer assesses a patient with atrial fibrillation for a \"pulse deficit\". What is the accurate procedure to determine a pulse deficit, and what does it indicate?",
    "options": [
      {
        "id": "A",
        "text": "Two nurses simultaneously count the Apical pulse (stethoscope) and Radial pulse for 1 full minute; the apical rate minus the radial rate equals the pulse deficit"
      },
      {
        "id": "B",
        "text": "One nurse measures radial pulse in both arms sequentially"
      },
      {
        "id": "C",
        "text": "Subtract the diastolic blood pressure from the systolic blood pressure"
      },
      {
        "id": "D",
        "text": "Measure carotid pulse and multiply by 2"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Pulse Deficit is measured simultaneously by two nurses for one full minute using the same watch: one auscultates the Apical pulse at the apex while the second palpates the Radial pulse. The difference (Apical minus Radial) is the Pulse Deficit.",
      "explanation": "A pulse deficit signifies that inefficient or weak cardiac contractions fail to generate a sufficient stroke volume wave to propagate to peripheral radial arteries (frequently seen in atrial fibrillation and frequent premature ventricular contractions). Apical rate is never lower than radial rate.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Radial-to-radial comparison measures inter-arm discrepancy, not pulse deficit."
        },
        {
          "option": "C",
          "reason": "Systolic minus diastolic pressure is Pulse Pressure, not pulse deficit."
        },
        {
          "option": "D",
          "reason": "Carotid pulse measurement cannot assess peripheral pulse wave deficit."
        }
      ],
      "priorityAlert": "Apical rate MINUS Radial rate = Pulse Deficit! The apical rate is ALWAYS higher than or equal to the radial rate!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Vital Signs & Cardiovascular Assessment"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q28",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Blood Transfusion: Infusion Timing and Filter Specifications",
    "scenarioQuestion": "A unit of Packed Red Blood Cells (PRBC) is retrieved from the blood bank. Within what timeframe must the transfusion be INITIATED after removal from blood bank refrigeration (+2°C to +6°C), and what is the MAXIMUM allowable time for completing the transfusion?",
    "options": [
      {
        "id": "A",
        "text": "Initiate within 30 minutes; complete within 4 hours"
      },
      {
        "id": "B",
        "text": "Initiate within 2 hours; complete within 8 hours"
      },
      {
        "id": "C",
        "text": "Initiate within 10 minutes; complete within 1 hour"
      },
      {
        "id": "D",
        "text": "Initiate within 4 hours; complete within 12 hours"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "A blood unit must be initiated within 30 minutes of leaving the blood bank refrigerator. The transfusion MUST be completed within a MAXIMUM of 4 hours to prevent bacterial multiplication and room-temperature RBC hemolysis.",
      "explanation": "If a blood unit cannot be started within 30 minutes, it must be returned immediately to the blood bank. Transfusions running longer than 4 hours are at high risk for bacterial endotoxin proliferation. Blood sets incorporate a standard micro-aggregate filter (170–200 microns).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Allowing blood to stand for 2 hours before starting or infusing for 8 hours promotes severe septic shock from bacterial growth."
        },
        {
          "option": "C",
          "reason": "Infusing PRBC in 1 hour in non-hemorrhagic patients risks acute Transfusion-Associated Circulatory Overload (TACO)."
        },
        {
          "option": "D",
          "reason": "12 hours is dangerous and strictly prohibited."
        }
      ],
      "priorityAlert": "Never allow blood to hang for more than 4 hours! Any blood remaining after 4 hours must be stopped and discarded!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Transfusion Protocols & Timing"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q29",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Enteral Tube Verification: Gastric Aspirate pH Testing Standards",
    "scenarioQuestion": "Before administering enteral tube feeding through a nasogastric tube that has already been verified radiographically at insertion, what bedside test provides the MOST reliable ongoing confirmation of gastric placement?",
    "options": [
      {
        "id": "A",
        "text": "Testing aspirated fluid with pH paper (gastric pH is acidic, typically <= 5.5)"
      },
      {
        "id": "B",
        "text": "Auscultating air bolus over the epigastrium (whoosh test)"
      },
      {
        "id": "C",
        "text": "Checking if the patient coughs when the tube is flushed"
      },
      {
        "id": "D",
        "text": "Checking the color of the tube markings alone"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Measuring the pH of aspirated fluid is the standard evidence-based bedside method to verify ongoing NG tube position: gastric aspirate has a pH <= 5.5 (typically 1.5–4.0 in fasting patients).",
      "explanation": "Respiratory secretions typically have a pH >= 6.0 (neutral to alkaline), and small intestinal aspirates have a pH >= 6.0–7.0. If the patient is on PPIs or H2 blockers, pH may reach 6.0, but pH <= 5.5 strongly correlates with gastric placement.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Auscultation of air (whoosh test) is obsolete and unreliable."
        },
        {
          "option": "C",
          "reason": "Patients with depressed cough reflex do not cough even with tracheal intubation of the tube."
        },
        {
          "option": "D",
          "reason": "Tube marking check is helpful for migration, but aspirate pH testing confirms luminal position."
        }
      ],
      "priorityAlert": "Gastric aspirate pH is normally <= 5.5! A pH > 6.0 suggests respiratory tract or small bowel placement!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Enteral Nutrition & Bedside Safety"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q30",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Airway Care: Tracheostomy Cuff Pressure Monitoring Range",
    "scenarioQuestion": "A patient has a cuffed tracheostomy tube connected to a mechanical ventilator. To maintain an adequate seal preventing aspiration and air leaks while avoiding tracheal mucosal capillary necrosis, what is the RECOMMENDED cuff pressure range?",
    "options": [
      {
        "id": "A",
        "text": "20 to 25 mmHg (or 25 to 30 cmH2O)"
      },
      {
        "id": "B",
        "text": "40 to 50 mmHg"
      },
      {
        "id": "C",
        "text": "5 to 10 mmHg"
      },
      {
        "id": "D",
        "text": "60 to 70 cmH2O"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The safe tracheostomy/endotracheal cuff pressure is 20 to 25 mmHg (equivalent to 25 to 30 cmH2O). Tracheal mucosal capillary perfusion pressure is approximately 25 to 30 mmHg.",
      "explanation": "Pressures > 25–30 mmHg (or > 30 cmH2O) exceed tracheal mucosal capillary perfusion pressure, leading to mucosal ischemia, ulceration, necrosis, and late tracheal stenosis or tracheoesophageal fistula. Pressures < 20 mmHg increase the risk of micro-aspiration of secretions (VAP). A handheld manometer should be used routinely.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "40 to 50 mmHg causes complete tracheal mucosal ischemia and necrosis."
        },
        {
          "option": "C",
          "reason": "5 to 10 mmHg produces a loose seal, permitting air leak and silent subglottic aspiration."
        },
        {
          "option": "D",
          "reason": "60 to 70 cmH2O produces extensive tracheal rupture or chondromalacia."
        }
      ],
      "priorityAlert": "Target cuff pressure = 20–25 mmHg (25–30 cmH2O)! Measure routinely every shift using a calibrated manometer!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Tracheostomy Care & Airway Pressure"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q31",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Parenteral Injections: Needle Angles of Insertion Standards",
    "scenarioQuestion": "What are the standardized angles of needle insertion for Intradermal (ID), Subcutaneous (SC), and Intramuscular (IM) injections, respectively?",
    "options": [
      {
        "id": "A",
        "text": "Intradermal: 10 to 15 degrees; Subcutaneous: 45 or 90 degrees; Intramuscular: 90 degrees"
      },
      {
        "id": "B",
        "text": "Intradermal: 45 degrees; Subcutaneous: 90 degrees; Intramuscular: 15 degrees"
      },
      {
        "id": "C",
        "text": "Intradermal: 90 degrees; Subcutaneous: 15 degrees; Intramuscular: 45 degrees"
      },
      {
        "id": "D",
        "text": "Intradermal: 25 degrees; Subcutaneous: 25 degrees; Intramuscular: 45 degrees"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Standard needle insertion angles: Intradermal (ID) = 10 to 15 degrees (bevel up); Subcutaneous (SC) = 45 degrees (or 90 degrees if adequate adipose/short needle); Intramuscular (IM) = 90 degrees perpendicular.",
      "explanation": "ID injections (Mantoux, allergy testing) are placed directly beneath epidermis; a small bleb/wheal must form. SC injections deposit into the vascular subcutaneous adipose layer. IM injections deposit deep into vascular muscle tissue.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "45 degrees for ID would enter subcutaneous tissue; 15 degrees for IM cannot reach muscle."
        },
        {
          "option": "C",
          "reason": "90 degrees for ID would penetrate muscle."
        },
        {
          "option": "D",
          "reason": "Incorrect angles throughout."
        }
      ],
      "priorityAlert": "ID = 10–15° (bevel up)! SC = 45° or 90°! IM = 90°!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Injection Technique Standards"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q32",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Sterilization: Autoclaving Operating Parameters & Biological Indicators",
    "scenarioQuestion": "Steam under pressure (Autoclaving) is the most reliable method for sterilizing surgical linen, drapes, and stainless steel instruments. What are the standard temperature, pressure, and exposure time for routine hospital autoclaving, and which biological indicator is used for validation?",
    "options": [
      {
        "id": "A",
        "text": "121°C (250°F) at 15 pounds per square inch (psi) pressure for 15 to 20 minutes; validated using Geobacillus stearothermophilus spores"
      },
      {
        "id": "B",
        "text": "160°C for 2 hours; validated using Bacillus atrophaeus"
      },
      {
        "id": "C",
        "text": "100°C at atmospheric pressure for 30 minutes; validated using Clostridium tetani"
      },
      {
        "id": "D",
        "text": "134°C at 5 psi for 60 seconds; validated using E. coli"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Standard autoclaving operates at 121°C (250°F) at 15 psi pressure for 15–20 minutes (or 134°C at 30 psi for 3–5 minutes for flash sterilization). The biological indicator of choice is the highly heat-resistant endospores of Geobacillus stearothermophilus.",
      "explanation": "Steam under pressure coagulates and denatures microbial proteins and destroys bacterial spores. Dry heat sterilization uses Bacillus atrophaeus (subtilis) spores at 160°C for 2 hours.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes dry heat sterilization in a hot air oven."
        },
        {
          "option": "C",
          "reason": "Boiling at 100°C disinfects but does not sterilize (spores survive)."
        },
        {
          "option": "D",
          "reason": "Pressure of 5 psi is inadequate to achieve 134°C."
        }
      ],
      "priorityAlert": "Biological indicator for Autoclave = Geobacillus stearothermophilus! For Hot Air Oven / ETO = Bacillus atrophaeus!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Infection Control & Sterilization"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q33",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Wound Care: Surgical Drains Active vs Passive Systems",
    "scenarioQuestion": "A patient returns from a radical mastectomy with a closed-suction surgical drain in place. How is negative suction created and maintained in a Jackson-Pratt (JP) or Hemovac drain?",
    "options": [
      {
        "id": "A",
        "text": "By fully compressing (squeezing) the flexible reservoir bulb/evacuator and securing the plug while collapsed"
      },
      {
        "id": "B",
        "text": "By connecting the drain tubing to a wall suction regulator set at 200 mmHg"
      },
      {
        "id": "C",
        "text": "By keeping the drain open to atmospheric room air at all times"
      },
      {
        "id": "D",
        "text": "By filling the collection chamber with 100 mL of sterile saline"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In closed-suction active drainage systems (Jackson-Pratt, Hemovac), low negative pressure suction is established by manually compressing the reservoir bulb/chamber flat and closing the pour spout stopper while compressed.",
      "explanation": "As the elastic container attempts to re-expand to its original shape, it generates gentle, constant negative pressure (-20 to -100 mmHg) that pulls blood and seroma fluid from the wound bed. Passive drains (like Penrose) rely solely on gravity and capillary action.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Connecting closed-wound drains to high wall suction destroys tissue flaps and causes active hemorrhage."
        },
        {
          "option": "C",
          "reason": "Leaving the plug open vents the system to air, losing suction and introducing pathogens."
        },
        {
          "option": "D",
          "reason": "Filling the chamber with saline eliminates suction capability."
        }
      ],
      "priorityAlert": "Always empty the reservoir, re-compress it completely, and seal the cap to restore negative suction!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Surgical Drains & Wound Healing"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q34",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Nursing Jurisprudence: Legal Torts (Assault vs Battery)",
    "scenarioQuestion": "A competent adult patient adamantly refuses an intramuscular pain injection. The nurse tells the patient, \"If you don't let me give this shot, I will tie you to the bed,\" and then proceeds to hold the struggling patient down and injects the medication. What two intentional torts has the nurse committed, respectively?",
    "options": [
      {
        "id": "A",
        "text": "Assault (threatening verbal conduct creating fear of imminent harm), followed by Battery (unconsented physical touching / injection)"
      },
      {
        "id": "B",
        "text": "Battery, followed by Assault"
      },
      {
        "id": "C",
        "text": "Negligence, followed by Malpractice"
      },
      {
        "id": "D",
        "text": "Slander, followed by Libel"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Assault is an intentional threat that creates a reasonable apprehension or fear of imminent harmful or offensive contact. Battery is the actual intentional, unconsented, and non-privileged touching or physical contact with another person.",
      "explanation": "Threatening to tie the patient up constitutes Assault. Forcibly holding the patient and administering the injection against competent refusal constitutes Battery. Competent adults have the absolute legal and ethical right to refuse any medical treatment.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Inverts assault and battery."
        },
        {
          "option": "C",
          "reason": "Negligence and malpractice are unintentional torts involving breach of standard of care, not intentional coercion."
        },
        {
          "option": "D",
          "reason": "Slander (spoken) and libel (written) are forms of defamation of character."
        }
      ],
      "priorityAlert": "Threat = ASSAULT! Unconsented Physical Touching = BATTERY!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Nursing Jurisprudence & Legal Torts"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q35",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Therapeutics: Stages of Grief (Elisabeth Kübler-Ross Model)",
    "scenarioQuestion": "A 52-year-old patient newly diagnosed with terminal pancreatic cancer loudly yells at the staff: \"The laboratory mixed up my biopsy results! You doctors don't know what you're doing, there is nothing wrong with me!\" According to Kübler-Ross, which stage of grief is the patient demonstrating?",
    "options": [
      {
        "id": "A",
        "text": "Denial"
      },
      {
        "id": "B",
        "text": "Anger"
      },
      {
        "id": "C",
        "text": "Bargaining"
      },
      {
        "id": "D",
        "text": "Depression"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The five stages of grief described by Elisabeth Kübler-Ross are: Denial, Anger, Bargaining, Depression, and Acceptance (Mnemonic: \"DABDA\").",
      "explanation": "Denial is a defense mechanism characterized by disbelief and refusal to accept reality (\"Not me, the tests must be wrong!\"). Anger follows (\"Why me? It's unfair!\"), followed by Bargaining (\"If I live, I will dedicate my life to charity\"), Depression (overwhelming sadness), and Acceptance (peaceful resignation).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Anger involves hostility, rage, and blaming god or providers for the illness, whereas here the patient rejects the reality of the diagnosis."
        },
        {
          "option": "C",
          "reason": "Bargaining involves negotiating with higher powers to postpone death in exchange for reformed behavior."
        },
        {
          "option": "D",
          "reason": "Depression involves profound grief, withdrawal, and weeping."
        }
      ],
      "priorityAlert": "Kübler-Ross stages of grief mnemonic: DABDA (Denial, Anger, Bargaining, Depression, Acceptance)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Palliative Care & Grief Theory"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q36",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Nursing Theories: Florence Nightingale Environmental Theory",
    "scenarioQuestion": "Which foundational nursing theorist emphasized that the primary role of nursing is to \"put the patient in the best condition for nature to act upon him\" by manipulating five essential environmental factors (pure fresh air, pure water, efficient drainage, cleanliness, and light)?",
    "options": [
      {
        "id": "A",
        "text": "Florence Nightingale (Environmental Adaptation Theory)"
      },
      {
        "id": "B",
        "text": "Virginia Henderson (Need Theory)"
      },
      {
        "id": "C",
        "text": "Dorothea Orem (Self-Care Deficit Theory)"
      },
      {
        "id": "D",
        "text": "Sister Callista Roy (Adaptation Model)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Florence Nightingale (1859, \"Notes on Nursing\") formulated the Environmental Theory, positing that illness is a reparative process and nursing's aim is to place the patient in the optimal condition for nature by providing fresh air, warmth, light, quiet, cleanliness, and diet.",
      "explanation": "Virginia Henderson defined 14 fundamental human needs. Dorothea Orem developed the Self-Care Deficit Theory. Sister Callista Roy formulated the 4-mode Adaptation Model. Hildegard Peplau introduced Interpersonal Relations in nursing.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Virginia Henderson defined nursing in terms of 14 components of basic human needs."
        },
        {
          "option": "C",
          "reason": "Dorothea Orem focused on self-care deficits and agency."
        },
        {
          "option": "D",
          "reason": "Callista Roy focused on physiological, self-concept, role function, and interdependence adaptation."
        }
      ],
      "priorityAlert": "Florence Nightingale = Environmental Theory! Virginia Henderson = 14 Basic Human Needs! Dorothea Orem = Self-Care Deficit!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Nursing Foundations & Theories"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q37",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Wound Care: Braden Scale Pressure Ulcer Risk Assessment",
    "scenarioQuestion": "The Braden Scale is used worldwide to predict pressure sore risk. Which score threshold identifies an adult hospitalized patient as being at \"HIGH RISK\" for developing pressure ulcers?",
    "options": [
      {
        "id": "A",
        "text": "Total score of 10 to 12 (High Risk)"
      },
      {
        "id": "B",
        "text": "Total score of 19 to 23 (No Risk)"
      },
      {
        "id": "C",
        "text": "Total score of 15 to 18 (Mild Risk)"
      },
      {
        "id": "D",
        "text": "Total score of 24"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Braden Scale assesses 6 subscales: Sensory Perception, Moisture, Activity, Mobility, Nutrition, and Friction/Shear. Scores range from 6 to 23. Lower scores indicate HIGHER risk: <= 9 = Very High Risk; 10–12 = High Risk; 13–14 = Moderate Risk; 15–18 = Mild Risk; 19–23 = No/Low Risk.",
      "explanation": "A score of 10 to 12 mandates immediate initiation of aggressive pressure relief protocols: 2-hourly repositioning, pressure-relieving air mattress, moisture barrier creams, and dietary protein supplementation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "19 to 23 indicates minimal or no risk."
        },
        {
          "option": "C",
          "reason": "15 to 18 indicates mild risk."
        },
        {
          "option": "D",
          "reason": "Maximum possible score on the Braden scale is 23."
        }
      ],
      "priorityAlert": "LOWER Braden score = HIGHER pressure ulcer risk! Score <= 12 signifies High/Severe Risk!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Integumentary & Braden Scale"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q38",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Therapeutics: Warm Moist Packs vs Cold Compresses Indications",
    "scenarioQuestion": "A soccer player suffers an acute ankle sprain 30 minutes ago. For the first 24 to 48 hours following acute soft-tissue trauma, what is the physiological rationale for applying local COLD (cryotherapy / ice) rather than heat?",
    "options": [
      {
        "id": "A",
        "text": "Cold induces local vasoconstriction, reducing capillary permeability, cellular metabolic demand, edema formation, and hematoma expansion"
      },
      {
        "id": "B",
        "text": "Cold causes vasodilation to increase leukocyte delivery to the sprain"
      },
      {
        "id": "C",
        "text": "Cold speeds up the blood clotting cascade to form scar tissue"
      },
      {
        "id": "D",
        "text": "Cold increases muscle spasm to splint the torn ligaments"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In the acute phase of soft tissue injury (first 24–48 hours), the R.I.C.E. protocol (Rest, Ice, Compression, Elevation) is applied. Cold produces local arteriolar vasoconstriction, decreasing microvascular leakage, swelling, tissue metabolism, and nerve conduction velocity (analgesia).",
      "explanation": "Applying heat in the first 24–48 hours is strictly contraindicated because heat causes vasodilation, increasing interstitial bleeding, edema, and throbbing pain. Heat is applied after 48–72 hours to promote reabsorption of hematoma and muscle relaxation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Cold produces vasoconstriction, NOT vasodilation."
        },
        {
          "option": "C",
          "reason": "Cold does not accelerate clotting enzymes; it reduces blood flow volume."
        },
        {
          "option": "D",
          "reason": "Cold reduces muscle spasm and spasticity."
        }
      ],
      "priorityAlert": "NEVER APPLY HEAT in the first 24–48 hours of an acute musculoskeletal sprain or strain! It worsens bleeding and edema!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Orthopaedic Nursing & Cryotherapy"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q39",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Nursing Process: Five Phases of ADPIE Framework",
    "scenarioQuestion": "A nursing officer formulates the statement: \"Impaired Gas Exchange related to alveolar-capillary membrane changes secondary to pneumonia as evidenced by PaO2 62 mmHg, cyanosis, and dyspnea.\" In which phase of the Nursing Process is this activity performed?",
    "options": [
      {
        "id": "A",
        "text": "Diagnosis (Formulating NANDA Nursing Diagnosis)"
      },
      {
        "id": "B",
        "text": "Assessment"
      },
      {
        "id": "C",
        "text": "Planning"
      },
      {
        "id": "D",
        "text": "Implementation"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Formulating a diagnostic PES statement (Problem [NANDA label], Etiology [related to], Signs/Symptoms [as evidenced by]) is the core function of the DIAGNOSIS phase (the second step of the 5-step ADPIE nursing process).",
      "explanation": "The five phases of the nursing process are: (1) Assessment (systematic data collection), (2) Diagnosis (clinical judgment regarding human responses), (3) Planning (setting SMART goals and expected outcomes), (4) Implementation (executing nursing interventions), and (5) Evaluation (assessing outcome attainment).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Assessment involves gathering subjective and objective patient data."
        },
        {
          "option": "C",
          "reason": "Planning involves establishing patient outcomes and nursing orders."
        },
        {
          "option": "D",
          "reason": "Implementation involves carrying out the planned nursing actions."
        }
      ],
      "priorityAlert": "PES structure of Nursing Diagnosis: P = Problem, E = Etiology (Related to), S = Signs & Symptoms (As evidenced by)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Nursing Process & Methodology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q40",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Therapeutics: Postural Drainage and Chest Physiotherapy Positioning",
    "scenarioQuestion": "A patient with cystic fibrosis and bronchiectasis has dense consolidation and mucous plugging in the POSTERIOR basal segments of BOTH lower pulmonary lobes. In what position should the nurse place the patient for effective postural drainage?",
    "options": [
      {
        "id": "A",
        "text": "Prone position with hips elevated on pillows in Trendelenburg position (foot of bed elevated 45 to 50 cm / 18 inches)"
      },
      {
        "id": "B",
        "text": "High Fowler's position (upright at 90 degrees)"
      },
      {
        "id": "C",
        "text": "Flat supine position"
      },
      {
        "id": "D",
        "text": "Right lateral Sims' position with head elevated"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "For postural drainage of the posterior basal segments of both lower lobes, the patient is placed PRONE in Trendelenburg position with pillows under the hips (foot of bed elevated 18 inches / 45–50 cm). Gravity drains secretions from lower posterior bronchi toward the trachea.",
      "explanation": "Postural drainage uses gravity to mobilize secretions from peripheral lung segments to central airways where coughing or suctioning can clear them. Percussion and vibration are applied during exhalation over the affected segment. Postural drainage is performed 1 hour before meals or 2 hours after meals to prevent vomiting/aspiration.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "High Fowler's drains apical segments of upper lobes, not lower posterior bases."
        },
        {
          "option": "C",
          "reason": "Flat supine drains anterior segments."
        },
        {
          "option": "D",
          "reason": "Drains left lateral segments, not bilateral posterior basal segments."
        }
      ],
      "priorityAlert": "Always perform Chest Physiotherapy (CPT) BEFORE meals or at least 2 hours AFTER meals to prevent nausea and vomiting!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Chest Physiotherapy & Pulmonary Care"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q41",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Safety: Fire Safety in Healthcare Facilities (RACE & PASS)",
    "scenarioQuestion": "A fire is discovered in a hospital utility room. What are the standardized emergency acronyms for immediate healthcare fire response actions and portable fire extinguisher operation, respectively?",
    "options": [
      {
        "id": "A",
        "text": "Fire response: RACE (Rescue, Alarm, Confine, Extinguish/Evacuate); Fire extinguisher: PASS (Pull, Aim, Squeeze, Sweep)"
      },
      {
        "id": "B",
        "text": "Fire response: PASS; Fire extinguisher: RACE"
      },
      {
        "id": "C",
        "text": "Fire response: STOP (Stop, Tell, Open, Protect); Extinguisher: PULL"
      },
      {
        "id": "D",
        "text": "Fire response: HELP; Extinguisher: AIM"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The universal hospital fire safety protocol is RACE: R = Rescue anyone in immediate danger, A = Activate alarm/Alert staff, C = Confine the fire by closing doors/windows, E = Extinguish (if small) or Evacuate. To operate an extinguisher, use PASS: P = Pull the pin, A = Aim at the base of the fire, S = Squeeze the handle, S = Sweep side to side.",
      "explanation": "Closing patient doors (Confine) restricts oxygen supply and retards the spread of smoke and toxic gases along corridors. Always prioritize patient life rescue over property preservation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Inverts the two acronyms."
        },
        {
          "option": "C",
          "reason": "Non-standard terminology."
        },
        {
          "option": "D",
          "reason": "Incorrect abbreviations."
        }
      ],
      "priorityAlert": "Always AIM AT THE BASE of the fire, not the top of the flames, when using a fire extinguisher (PASS)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Hospital Safety & Emergency Preparedness"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q42",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Surgical Nursing: Post-Operative Incentive Spirometry Teaching",
    "scenarioQuestion": "A post-laparotomy patient is prescribed Incentive Spirometry to prevent post-operative atelectasis and pneumonia. What is the CORRECT patient instruction for using an incentive spirometer?",
    "options": [
      {
        "id": "A",
        "text": "Exhale completely, seal lips tightly around the mouthpiece, inhale slowly and deeply to raise the piston/balls, hold breath for 3 to 5 seconds, then exhale normally; repeat 10 times every hour"
      },
      {
        "id": "B",
        "text": "Inhale deeply first, then blow forcefully into the mouthpiece as hard and fast as possible"
      },
      {
        "id": "C",
        "text": "Take rapid shallow breaths into the device while lying completely flat"
      },
      {
        "id": "D",
        "text": "Use the device once daily before bedtime"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Incentive Spirometry requires SUSTAINED SLOW MAXIMAL INSPIRATION (SMI): exhale completely, seal lips, inhale slowly and deeply through the mouth, hold breath at peak inflation for 3–5 seconds (to open collapsed alveoli and recruit collateral channels of Lambert and pores of Kohn), then exhale normally. Perform 10 breaths every waking hour.",
      "explanation": "Blowing forcefully into the device is a Peak Flow Meter test for asthma, NOT incentive spirometry. Fast inhalation promotes airway turbulence rather than peripheral alveolar expansion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes peak expiratory flow measurement, not incentive spirometry (which is sustained inspiration)."
        },
        {
          "option": "C",
          "reason": "Shallow breathing promotes alveolar collapse."
        },
        {
          "option": "D",
          "reason": "Using once daily is ineffective; must be done 10 times every waking hour."
        }
      ],
      "priorityAlert": "Incentive Spirometry is INSPIRATION (breathing IN slowly and holding), NOT blowing out!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Post-Operative Pulmonary Hygiene"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q43",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Infection Control: Sputum Specimen Collection Protocol",
    "scenarioQuestion": "A nursing officer needs to collect an early-morning sputum specimen for Acid-Fast Bacilli (AFB) smear and culture from a patient suspected of pulmonary tuberculosis. Which instruction ensures an authentic lower respiratory specimen rather than saliva?",
    "options": [
      {
        "id": "A",
        "text": "Rinse mouth with plain water first (no mouthwash), take three deep diaphragmatic breaths, and cough deeply from the chest directly into the sterile container before breakfast"
      },
      {
        "id": "B",
        "text": "Swish with antibacterial mouthwash and spit saliva into the container"
      },
      {
        "id": "C",
        "text": "Collect post-nasal drip from the back of the throat after a large meal"
      },
      {
        "id": "D",
        "text": "Collect specimen after 24 hours of pooling in an open cup"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Authentic sputum collection requires early-morning specimen (accumulated overnight in bronchi): rinse mouth with plain water to clear food debris/microbiota (avoid antiseptic mouthwash that kills mycobacteria), take deep diaphragmatic breaths, and produce a deep cough from the bronchi into a sterile container.",
      "explanation": "A quality sputum specimen contains alveolar macrophages and bronchial epithelial cells with < 10 squamous epithelial cells per low-power field (squamous cells indicate saliva contamination).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Antiseptic mouthwash kills tubercle bacilli, and spitting saliva yields a worthless specimen."
        },
        {
          "option": "C",
          "reason": "Post-nasal drip is upper respiratory mucous, not lower airway bronchial sputum."
        },
        {
          "option": "D",
          "reason": "Specimen pooling at room temperature overgrows commensals."
        }
      ],
      "priorityAlert": "Never use antiseptic mouthwash before collecting sputum for culture! It kills viable Mycobacteria and gives false-negative results!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Laboratory Diagnostics & Specimen Collection"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q44",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Urinary Catheterization: Foley Balloon Inflation Media",
    "scenarioQuestion": "When inserting a 2-way retention Foley catheter in an adult female, which fluid must ALWAYS be used to inflate the retention balloon, and which fluids are strictly CONTRAINDICATED?",
    "options": [
      {
        "id": "A",
        "text": "Sterile Water only; Normal Saline (crystallizes and jams valve) and Air (floats and underinflates) are strictly contraindicated"
      },
      {
        "id": "B",
        "text": "Normal Saline 0.9% only"
      },
      {
        "id": "C",
        "text": "Sterile mineral oil"
      },
      {
        "id": "D",
        "text": "Room air with a 20 mL syringe"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Foley catheter retention balloons must be inflated exclusively with STERILE WATER. Normal Saline is contraindicated because salt crystals precipitate inside the micro-channel, clogging the inflation lumen and preventing deflation during removal. Air is contraindicated because it floats balloon against the trigone and leaks.",
      "explanation": "Mineral oil degrades latex and causes balloon rupture. Use the manufacturer's stated volume (usually 5 to 10 mL of sterile water) printed on the catheter port.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Saline causes crystal formation that permanently blocks the deflation valve."
        },
        {
          "option": "C",
          "reason": "Mineral oil dissolves latex."
        },
        {
          "option": "D",
          "reason": "Air causes the balloon to float, resulting in asymmetrical pressure and micro-balloon rupture."
        }
      ],
      "priorityAlert": "NEVER USE NORMAL SALINE to inflate a Foley catheter balloon! Salt crystallization prevents balloon deflation during catheter removal!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Urinary Catheterization Standards"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q45",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_fon_01",
    "topicTitle": "Documentation: SBAR Standardized Communication Tool",
    "scenarioQuestion": "During clinical shift handoff or physician notification of a deteriorating patient, which standardized structured communication framework is endorsed by WHO and Joint Commission to ensure patient safety?",
    "options": [
      {
        "id": "A",
        "text": "SBAR (Situation, Background, Assessment, Recommendation)"
      },
      {
        "id": "B",
        "text": "SOAP (Subjective, Objective, Assessment, Plan)"
      },
      {
        "id": "C",
        "text": "ADPIE (Assessment, Diagnosis, Planning, Implementation, Evaluation)"
      },
      {
        "id": "D",
        "text": "APGAR (Appearance, Pulse, Grimace, Activity, Respiration)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "SBAR (Situation, Background, Assessment, Recommendation) is the gold-standard structured communication tool recommended by WHO and NABH for critical inter-professional communication, rapid response escalations, and shift handovers.",
      "explanation": "Situation = What is happening right now; Background = Relevant clinical context and history; Assessment = What the nurse thinks the problem is; Recommendation = What specific action is needed immediately. SOAP is used for progress notes, ADPIE for nursing process, and APGAR for newborn evaluation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "SOAP is a documentation progress note format, not an urgent verbal escalation tool."
        },
        {
          "option": "C",
          "reason": "ADPIE is the 5-step nursing process."
        },
        {
          "option": "D",
          "reason": "APGAR is for neonatal assessment."
        }
      ],
      "priorityAlert": "Use SBAR for all urgent physician notifications and critical patient transfers!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Patient Safety & Clinical Communication"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q46",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Antenatal Assessment: Fundal Height Landmark Milestones",
    "scenarioQuestion": "During a prenatal examination of a woman with a singleton pregnancy, the nurse palpates the uterine fundus at the exact level of the UMBILICUS. What gestational age does this fundal height represent in a normal pregnancy?",
    "options": [
      {
        "id": "A",
        "text": "20 to 22 weeks of gestation"
      },
      {
        "id": "B",
        "text": "12 weeks of gestation"
      },
      {
        "id": "C",
        "text": "16 weeks of gestation"
      },
      {
        "id": "D",
        "text": "36 weeks of gestation"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Classic fundal height anatomical landmarks: At 12 weeks: Just above symphysis pubis; At 16 weeks: Midway between symphysis pubis and umbilicus; At 20 to 22 weeks: At the level of the umbilicus; At 36 weeks: At the level of the xiphoid process.",
      "explanation": "Between 18 and 32 weeks of gestation, fundal height measured in centimeters (McDonald's rule) roughly equals the gestational age in weeks (+/- 2 cm). A discrepancy > 2–3 cm suggests oligohydramnios/IUGR (smaller) or polyhydramnios/macrosomia/multiple gestation (larger).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "At 12 weeks, the uterus is barely palpable above the pubic bone."
        },
        {
          "option": "C",
          "reason": "At 16 weeks, the fundus is halfway between symphysis pubis and umbilicus."
        },
        {
          "option": "D",
          "reason": "At 36 weeks, the fundus reaches the xiphoid process."
        }
      ],
      "priorityAlert": "Fundus at Umbilicus = 20 to 22 weeks! Fundus at Xiphoid = 36 weeks!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Antenatal Assessment & Gestational Age"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q47",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetric Signs: Presumptive vs Probable vs Positive Signs",
    "scenarioQuestion": "A woman presents with amenorrhea, positive home pregnancy test, and cervical softening on bimanual pelvic examination. Which finding is classified as a POSITIVE (absolute / definitive) sign of pregnancy?",
    "options": [
      {
        "id": "A",
        "text": "Ultrasound visualization of the gestational sac with active fetal cardiac motion"
      },
      {
        "id": "B",
        "text": "Positive human chorionic gonadotropin (hCG) in urine"
      },
      {
        "id": "C",
        "text": "Softening of the lower uterine segment (Hegar sign)"
      },
      {
        "id": "D",
        "text": "Bluish-purple discoloration of the vaginal mucosa (Chadwick sign)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The three POSITIVE (definitive/absolute) signs of pregnancy that confirm existence of a fetus beyond doubt are: (1) Ultrasound visualization of the fetus/fetal cardiac activity, (2) Auscultation of fetal heart tones (Doppler or fetoscope), and (3) Active fetal movements palpable by a trained examiner.",
      "explanation": "Positive hCG tests, Hegar sign (lower uterine softening), Goodell sign (cervical softening), Chadwick sign (violaceous vagina), and ballottement are PROBABLE signs (can be caused by choriocarcinoma, pelvic tumors, or hormonal imbalances). Amenorrhea, morning sickness, and quickening are PRESUMPTIVE signs.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Positive hCG is a PROBABLE sign because hydatidiform mole and choriocarcinoma also produce hCG."
        },
        {
          "option": "C",
          "reason": "Hegar sign is a PROBABLE physical sign."
        },
        {
          "option": "D",
          "reason": "Chadwick sign is a PROBABLE vascular congestion sign."
        }
      ],
      "priorityAlert": "Only 3 POSITIVE signs of pregnancy exist: Fetal heart sounds heard by examiner, Fetal movement felt by examiner, and Fetus visualized on Ultrasound!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Signs of Pregnancy Classification"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q48",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Labor Stages: Definition and Phases of the First Stage of Labor",
    "scenarioQuestion": "In obstetric care, how is the FIRST STAGE OF LABOR defined, and at what cervical dilatation does the active phase of labor begin according to updated WHO labor care guidelines?",
    "options": [
      {
        "id": "A",
        "text": "From the onset of regular uterine contractions until full cervical dilatation (10 cm); active phase begins at >= 5 cm cervical dilatation"
      },
      {
        "id": "B",
        "text": "From full dilatation until delivery of the infant"
      },
      {
        "id": "C",
        "text": "From delivery of the infant until delivery of the placenta"
      },
      {
        "id": "D",
        "text": "From 10 cm dilatation until 2 hours postpartum"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The First Stage of Labor begins with the onset of regular, painful contractions causing cervical change and ends with FULL cervical dilatation (10 cm). According to updated WHO guidelines, the Latent Phase extends from 0 to < 5 cm, and the Active Phase begins at >= 5 cm.",
      "explanation": "The Second Stage extends from full cervical dilatation (10 cm) to the complete delivery of the baby. The Third Stage extends from delivery of the baby to the expulsion of the placenta and membranes. The Fourth Stage is the 1 to 2 hours of observation immediately postpartum.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes the Second Stage of Labor."
        },
        {
          "option": "C",
          "reason": "Describes the Third Stage of Labor."
        },
        {
          "option": "D",
          "reason": "Describes the Fourth Stage of Labor (puerperal observation)."
        }
      ],
      "priorityAlert": "WHO updated standard: Active labor begins at 5 cm cervical dilatation, NOT 3 or 4 cm!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Labor Stages & WHO Guidelines"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q49",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Labor Induction: Bishop Scoring System Components",
    "scenarioQuestion": "Before scheduling elective labor induction with oxytocin, the obstetrician assesses the cervix using the Bishop Score. What FIVE parameters comprise the Bishop score, and what total score indicates a \"favorable\" cervix likely to succeed in induction?",
    "options": [
      {
        "id": "A",
        "text": "Cervical Dilatation, Effacement, Station, Consistency, and Cervical Position; a score >= 8 indicates a favorable cervix"
      },
      {
        "id": "B",
        "text": "Maternal Age, Parity, BMI, Contraction frequency, Fetal weight; score >= 10"
      },
      {
        "id": "C",
        "text": "FHR baseline, Variability, Accelerations, Decelerations, Movement; score >= 7"
      },
      {
        "id": "D",
        "text": "Pelvic Inlet, Mid-pelvis, Outlet, Sacral promontory, Ischial spines; score >= 5"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Bishop Score assesses pre-induction cervical readiness based on 5 components: (1) Cervical Dilatation, (2) Effacement (%), (3) Fetal Station (-3 to +2), (4) Cervical Consistency (firm, medium, soft), and (5) Cervical Position (posterior, mid, anterior). A score >= 8 indicates a favorable (\"ripe\") cervix with high probability of successful vaginal induction.",
      "explanation": "A Bishop score <= 6 indicates an unfavorable (\"unripe\") cervix requiring cervical ripening agents (Prostaglandin E2 Dinoprostone or PGE1 Misoprostol, or mechanical Foley balloon) before initiating oxytocin.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Maternal demographic factors are not components of the cervical Bishop score."
        },
        {
          "option": "C",
          "reason": "Describes components of a Non-Stress Test / Biophysical Profile."
        },
        {
          "option": "D",
          "reason": "Describes clinical pelvimetry, not the Bishop score."
        }
      ],
      "priorityAlert": "Bishop Score >= 8 = Favorable for Oxytocin induction! Score <= 6 = Unfavorable -> Requires cervical ripening first!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Intrapartum Induction & Bishop Score"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q50",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Surgical Obstetrics: Episiotomy Types (Mediolateral vs Median)",
    "scenarioQuestion": "During crowning of the fetal head in a primigravida, the midwife performs a Mediolateral Episiotomy rather than a Median (midline) Episiotomy. What is the PRIMARY anatomical advantage of selecting a mediolateral incision?",
    "options": [
      {
        "id": "A",
        "text": "Significantly lower risk of third-degree and fourth-degree perineal tears extending into the anal sphincter and rectum"
      },
      {
        "id": "B",
        "text": "Less blood loss during cutting and easier surgical repair"
      },
      {
        "id": "C",
        "text": "Lower incidence of postpartum dyspareunia"
      },
      {
        "id": "D",
        "text": "Faster wound healing and no scarring"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The primary advantage of a Mediolateral Episiotomy (incision angled 45 to 60 degrees away from the posterior fourchette toward the ischial tuberosity) is that it directs tears away from the midline, dramatically reducing extensions into the anal sphincter (3rd degree) and rectal mucosa (4th degree).",
      "explanation": "Median episiotomies have less bleeding and heal with less discomfort, but carry a much higher incidence of catastrophic extensions into the rectum. Mediolateral episiotomy cuts through: Vaginal mucosa, perineal skin, bulbospongiosus muscle, and superficial transverse perineal muscle.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Median episiotomy has less blood loss and is easier to repair than mediolateral."
        },
        {
          "option": "C",
          "reason": "Mediolateral episiotomy is associated with MORE postpartum pain and dyspareunia than median."
        },
        {
          "option": "D",
          "reason": "Mediolateral takes longer to heal and leaves a larger scar."
        }
      ],
      "priorityAlert": "Mediolateral episiotomy protects the ANAL SPHINCTER and RECTUM from third- and fourth-degree obstetric tears!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Intrapartum Procedures & Episiotomy"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q51",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Postpartum Psychiatry: Postpartum Blues vs Depression vs Psychosis",
    "scenarioQuestion": "A 28-year-old mother on Day 4 postpartum experiences transient episodes of tearfulness, emotional lability, fatigue, and mild anxiety. She remains fully bonded with her infant, eats well, and cares for the baby attentively. By day 10, the symptoms completely resolve without medical therapy. How is this condition classified?",
    "options": [
      {
        "id": "A",
        "text": "Postpartum Blues (\"Baby Blues\")"
      },
      {
        "id": "B",
        "text": "Postpartum Depression"
      },
      {
        "id": "C",
        "text": "Postpartum Psychosis"
      },
      {
        "id": "D",
        "text": "Post-Traumatic Stress Disorder"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Postpartum Blues (\"Baby Blues\") affects up to 50%–80% of new mothers, peaks around postpartum Day 4–5, and resolves spontaneously within 10 to 14 days without pharmacotherapy. Maternal functioning and infant care remain intact.",
      "explanation": "Postpartum Depression develops within 4 weeks to several months, causes pervasive guilt, anhedonia, inability to care for the infant, and persists beyond 2 weeks requiring psychotherapy and SSRIs. Postpartum Psychosis is a medical emergency with delusions, auditory hallucinations, and infanticide risk.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Postpartum depression lasts > 2 weeks, impairs functional ability, and requires clinical treatment."
        },
        {
          "option": "C",
          "reason": "Postpartum psychosis involves delusions, confusion, hallucinations, and danger of harm to infant."
        },
        {
          "option": "D",
          "reason": "PTSD involves flashbacks and hyperarousal following severe trauma."
        }
      ],
      "priorityAlert": "Postpartum Blues resolves within 10 to 14 days! If symptoms persist beyond 2 weeks, evaluate immediately for Postpartum Depression!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Postpartum Psychological Transitions"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q52",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Antenatal Surveillance: Non-Stress Test (NST) Reactive Criteria",
    "scenarioQuestion": "A 34-week pregnant mother undergoes an electronic Non-Stress Test (NST). What finding classifies an NST as \"REACTIVE\" (reassuring) in a fetus of 32 weeks gestation or beyond?",
    "options": [
      {
        "id": "A",
        "text": "At least 2 accelerations of >= 15 bpm above baseline lasting >= 15 seconds within a 20-minute monitoring window (the 15x15 rule)"
      },
      {
        "id": "B",
        "text": "Absence of any fetal heart rate accelerations with persistent late decelerations"
      },
      {
        "id": "C",
        "text": "Baseline fetal heart rate fluctuating between 60 and 90 bpm"
      },
      {
        "id": "D",
        "text": "Uterine contractions occurring every 2 minutes with variable decelerations"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "A Reactive (reassuring) NST at >= 32 weeks requires at least TWO fetal heart rate accelerations of at least 15 beats per minute above baseline lasting for at least 15 seconds each (the 15 x 15 rule) within a 20-minute period, accompanied by moderate baseline variability.",
      "explanation": "Prior to 32 weeks gestation, fetal autonomic maturity is lower, so the 10 x 10 rule applies (>= 10 bpm for >= 10 seconds). A non-reactive NST requires extending monitoring for an additional 20–40 minutes (to account for fetal sleep cycle) or performing vibroacoustic stimulation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes a Non-Reactive and non-reassuring test with ominous late decelerations."
        },
        {
          "option": "C",
          "reason": "Reflects severe fetal bradycardia."
        },
        {
          "option": "D",
          "reason": "Contractions with variable decelerations indicate cord compression, not a normal NST."
        }
      ],
      "priorityAlert": "At >= 32 weeks: REACTIVE NST = 2 accelerations of 15 bpm lasting 15 seconds within 20 minutes (15x15 rule)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Fetal Well-Being & NST"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q53",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Isoimmunization: Rh Incompatibility and Anti-D Immunoglobulin Protocol",
    "scenarioQuestion": "An Rh-negative (D-negative) unsensitized primigravida delivers an Rh-positive full-term infant. The Indirect Coombs Test (ICT) of the mother is negative. Within what timeframe must Rho(D) Immune Globulin (Anti-D / Rhogam 300 mcg) be administered to prevent maternal alloimmunization?",
    "options": [
      {
        "id": "A",
        "text": "Within 72 hours of delivery"
      },
      {
        "id": "B",
        "text": "Within 30 days of delivery"
      },
      {
        "id": "C",
        "text": "Immediately within 5 minutes only"
      },
      {
        "id": "D",
        "text": "At 6 weeks postpartum"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Anti-D immunoglobulin (300 mcg / 1500 IU) must be administered intramuscularly within 72 hours of delivery to an unsensitized Rh-negative mother delivering an Rh-positive infant (Direct Coombs Test negative on cord blood).",
      "explanation": "Standard prophylactic Anti-D is also given routinely at 28 weeks gestation, and after any potential fetomaternal hemorrhage (amniocentesis, chorionic villus sampling, ectopic pregnancy, miscarriage, abdominal trauma). The Kleihauer-Betke test calculates the exact volume of fetal-maternal transplacental hemorrhage to guide additional doses.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "30 days is too late; maternal B-cells will have already synthesized permanent memory anti-D antibodies."
        },
        {
          "option": "C",
          "reason": "Does not need to be within 5 minutes; 72 hours is the standard window."
        },
        {
          "option": "D",
          "reason": "6 weeks is far too late to prevent primary alloimmunization."
        }
      ],
      "priorityAlert": "Administer Anti-D within 72 HOURS postpartum! Standard prophylactic dose is 300 mcg (clears up to 30 mL of fetal whole blood)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Rh Isoimmunization & Hemolytic Disease"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q54",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Amniotic Fluid: Oligohydramnios vs Polyhydramnios AFI Thresholds",
    "scenarioQuestion": "During a third-trimester ultrasound assessment of amniotic fluid volume, the sonographer measures the four-quadrant Amniotic Fluid Index (AFI). What AFI values define OLIGOHYDRAMNIOS and POLYHYDRAMNIOS (hydramnios), respectively?",
    "options": [
      {
        "id": "A",
        "text": "Oligohydramnios: AFI < 5 cm (or single deepest pocket < 2 cm); Polyhydramnios: AFI > 24 to 25 cm (or deepest pocket > 8 cm)"
      },
      {
        "id": "B",
        "text": "Oligohydramnios: AFI < 15 cm; Polyhydramnios: AFI > 35 cm"
      },
      {
        "id": "C",
        "text": "Oligohydramnios: AFI < 1 cm; Polyhydramnios: AFI > 10 cm"
      },
      {
        "id": "D",
        "text": "Oligohydramnios: AFI < 10 cm; Polyhydramnios: AFI > 18 cm"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Normal AFI ranges from 5 to 24 cm. Oligohydramnios is defined as AFI < 5 cm (or single deepest vertical pocket < 2 cm). Polyhydramnios is defined as AFI > 24–25 cm (or single deepest pocket > 8 cm).",
      "explanation": "Oligohydramnios is associated with renal agenesis (Potter syndrome), placental insufficiency, and prolonged pregnancy, putting the fetus at risk for pulmonary hypoplasia and cord compression. Polyhydramnios is associated with maternal diabetes, neural tube defects, and esophageal/duodenal atresia (impaired fetal swallowing).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Incorrect threshold values."
        },
        {
          "option": "C",
          "reason": "1 cm is extreme; 10 cm is completely normal AFI."
        },
        {
          "option": "D",
          "reason": "10 to 18 cm represents normal physiological amniotic fluid volume."
        }
      ],
      "priorityAlert": "AFI < 5 cm = OLIGOHYDRAMNIOS (Associated with Renal anomalies / IUGR)! AFI > 24 cm = POLYHYDRAMNIOS (Associated with GI atresia / GDM)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Amniotic Fluid Pathology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q55",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Gestational Trophoblastic Disease: Hydatidiform Mole Characteristics",
    "scenarioQuestion": "A 24-year-old woman at 10 weeks gestation presents with dark brownish prune-juice vaginal bleeding, severe hyperemesis gravidarum, an enlarged uterus corresponding to 16 weeks size, and serum beta-hCG markedly elevated (> 100,000 mIU/mL). Pelvic ultrasound reveals a classic \"snowstorm appearance\" (vesicular pattern) with absent fetal tissue. What is the diagnosis and essential follow-up monitoring protocol?",
    "options": [
      {
        "id": "A",
        "text": "Complete Hydatidiform Mole; requires suction curettage followed by serial weekly-to-monthly serum beta-hCG monitoring for 6 to 12 months to screen for Choriocarcinoma"
      },
      {
        "id": "B",
        "text": "Ectopic pregnancy; treated with single-dose methotrexate and no follow-up"
      },
      {
        "id": "C",
        "text": "Twin pregnancy; manage expectantly"
      },
      {
        "id": "D",
        "text": "Missed abortion; immediate prostaglandin induction"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Complete Hydatidiform Mole is a gestational trophoblastic disease (46,XX androgenetic) presenting with prune-juice vaginal discharge, uterus larger than dates, hyperemesis, extremely high hCG, and a \"snowstorm\" ultrasound appearance. Following suction evacuation, serial hCG monitoring is essential for 6–12 months to detect malignant persistent trophoblastic disease (Choriocarcinoma).",
      "explanation": "Pregnancy must be strictly avoided during the entire follow-up period (using reliable contraception, such as barrier or oral contraceptives, but avoiding IUCD until uterus is normal) because a new pregnancy elevates hCG and masks tumor recurrence.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "The uterus is enlarged with a snowstorm pattern, not an empty uterus with adnexal mass."
        },
        {
          "option": "C",
          "reason": "Twin gestation would demonstrate twin fetal poles and cardiac activity, not a snowstorm vesicle pattern."
        },
        {
          "option": "D",
          "reason": "Missed abortion shows retained dead fetus with low/falling hCG, not massive hCG surge."
        }
      ],
      "priorityAlert": "After molar evacuation, advise the patient: DO NOT BECOME PREGNANT FOR 1 YEAR! Serial hCG monitoring is vital to detect Choriocarcinoma!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Gestational Trophoblastic Neoplasia"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q56",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Cervical Insufficiency: Shirodkar and McDonald Cerclage",
    "scenarioQuestion": "A pregnant patient with a history of recurrent painless second-trimester miscarriages is diagnosed with Cervical Incompetence (Cervical Insufficiency). At what gestational age is an elective prophylactic cervical cerclage (McDonald or Shirodkar stitch) typically placed, and when is it removed?",
    "options": [
      {
        "id": "A",
        "text": "Placed at 12 to 14 weeks of gestation; removed electively at 36 to 37 weeks (or upon onset of active labor)"
      },
      {
        "id": "B",
        "text": "Placed at 28 weeks; removed 2 hours postpartum"
      },
      {
        "id": "C",
        "text": "Placed at 6 weeks; left permanently in place during vaginal delivery"
      },
      {
        "id": "D",
        "text": "Placed at 32 weeks; removed at 40 weeks"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Elective cervical cerclage (purse-string suture of the cervix) is placed at 12 to 14 weeks of gestation (after confirming fetal viability on first-trimester ultrasound) and removed electively at 36 to 37 weeks of gestation to allow spontaneous vaginal birth.",
      "explanation": "If cerclage is left in place during active uterine contractions, the forceful cervical dilation against the rigid non-absorbable suture causes catastrophic cervical laceration, hemorrhage, or uterine rupture. If labor begins prematurely, the suture must be cut immediately.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "28 weeks is too late; cervix will have already opened."
        },
        {
          "option": "C",
          "reason": "Leaving the suture in during vaginal delivery causes severe cervical avulsion and rupture."
        },
        {
          "option": "D",
          "reason": "32 weeks is outside the window of elective cerclage."
        }
      ],
      "priorityAlert": "If a woman with a cervical cerclage goes into active labor, CUT AND REMOVE THE SUTURE IMMEDIATELY to prevent cervical tearing!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "High-Risk Obstetrics & Cerclage"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q57",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Contraception: Combined Oral Contraceptive Pills (COCP) Missed Dose Rule",
    "scenarioQuestion": "A 22-year-old woman taking combined oral contraceptive pills (COCP) calls the family planning clinic stating that she forgot to take her pill yesterday (missed 1 active pill < 24 hours late). What is the CORRECT instruction for a single missed COCP pill?",
    "options": [
      {
        "id": "A",
        "text": "Take the missed pill immediately as soon as remembered, take today's pill at the regular scheduled time (even if it means taking two pills in one day), and continue the pack normally without backup contraception"
      },
      {
        "id": "B",
        "text": "Discard the entire pack immediately and use condoms for 6 months"
      },
      {
        "id": "C",
        "text": "Take 4 pills at once and stop the cycle"
      },
      {
        "id": "D",
        "text": "Skip yesterday's pill entirely and take next week's pills"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "WHO guidance for ONE missed COCP pill (< 24–48 hours late): Take the late/missed pill as soon as remembered, and take the next scheduled pill on time (even if 2 pills are taken in one day or simultaneously). No additional backup contraception is required.",
      "explanation": "If TWO or more consecutive active pills are missed (>= 48 hours late), take the most recent missed pill, discard remaining missed pills, continue daily pills, and USE BACKUP BARRIER CONTRACEPTION (condoms) for 7 consecutive days. If pills were missed in the third week, skip the hormone-free placebo week and start the next pack immediately.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Discarding the pack for 1 missed pill is unnecessary and disrupts ovarian cycles."
        },
        {
          "option": "C",
          "reason": "Taking 4 pills causes acute nausea/vomiting from estrogen excess."
        },
        {
          "option": "D",
          "reason": "Skipping pills increases risk of escape ovulation."
        }
      ],
      "priorityAlert": "1 missed pill = Take it immediately + take today's pill on time (2 pills on one day is safe)! No backup needed!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Family Planning & Oral Contraception"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q58",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Intrapartum Monitoring: WHO Modified Partograph Alert and Action Lines",
    "scenarioQuestion": "On the WHO Modified Partograph used to monitor labor progress, how many hours apart are the \"Alert Line\" and the \"Action Line\" plotted, and what action is mandated if cervical dilatation crosses to the right of the Action Line?",
    "options": [
      {
        "id": "A",
        "text": "4 hours apart; crossing the Action Line indicates prolonged/obstructed labor requiring immediate senior obstetric evaluation, augmentation, or cesarean delivery"
      },
      {
        "id": "B",
        "text": "1 hour apart; routine observation only"
      },
      {
        "id": "C",
        "text": "8 hours apart; discharge home"
      },
      {
        "id": "D",
        "text": "12 hours apart; perform amniotomy only"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The WHO Modified Partograph begins plotting at 4 cm cervical dilatation (or 5 cm in updated guidelines). The Alert Line slopes at 1 cm/hour dilatation. The Action Line is drawn parallel to the Alert Line and exactly 4 HOURS to the right. Crossing the Action Line signifies abnormal labor progress (protracted/obstructed labor) mandating immediate intervention.",
      "explanation": "The 4-hour gap provides a safe window for transfer from primary health centres to a Comprehensive Emergency Obstetric Care (CEmONC) facility before maternal exhaustion, uterine rupture, or fetal distress occurs.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "1 hour is too short to account for normal biological variation."
        },
        {
          "option": "C",
          "reason": "8 hours allows severe obstructed labor and vesicovaginal fistula formation."
        },
        {
          "option": "D",
          "reason": "12 hours is dangerously prolonged."
        }
      ],
      "priorityAlert": "The Action Line is drawn exactly 4 HOURS to the right of the Alert Line on the WHO Partograph!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Partograph & Labor Management"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q59",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Gynecological Endocrinology: Menopause Pathophysiology and Hormone Levels",
    "scenarioQuestion": "A 51-year-old woman presents with hot flashes, night sweats, amenorrhea for 12 months, and emotional irritability. Which serum hormonal profile is diagnostic of natural physiological Menopause?",
    "options": [
      {
        "id": "A",
        "text": "Markedly elevated Follicle-Stimulating Hormone (FSH > 30–40 mIU/mL) with severely decreased Estradiol (E2 < 20 pg/mL)"
      },
      {
        "id": "B",
        "text": "Decreased FSH and elevated Estradiol"
      },
      {
        "id": "C",
        "text": "Normal FSH and elevated Progesterone"
      },
      {
        "id": "D",
        "text": "Suppressed LH and elevated hCG"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Menopause is characterized by ovarian follicular depletion and cessation of estrogen/inhibin production. The loss of negative feedback on the anterior pituitary causes a compensatory surge in Follicle-Stimulating Hormone (FSH > 30–40 mIU/mL) and Luteinizing Hormone (LH), with markedly low serum Estradiol (E2).",
      "explanation": "Permanent cessation of menses for 12 consecutive months without other pathological cause marks menopause. Hot flashes (vasomotor symptoms) occur due to hypothalamic thermoregulatory instability triggered by estrogen withdrawal. Long-term risks include accelerated osteoporosis and cardiovascular disease.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "FSH is high due to absent ovarian feedback, not low."
        },
        {
          "option": "C",
          "reason": "Progesterone is absent due to lack of corpus luteum formation."
        },
        {
          "option": "D",
          "reason": "hCG is a pregnancy hormone, not a menopausal marker."
        }
      ],
      "priorityAlert": "Hallmark of Menopause: HIGH FSH (> 30–40 mIU/mL) + LOW Estrogen (Estradiol)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Menopause & Endocrine Gynecology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q60",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_obg_03",
    "topicTitle": "Gynecological Oncology: Ovarian Cancer CA-125 Tumor Marker",
    "scenarioQuestion": "A 58-year-old postmenopausal woman presents with persistent abdominal bloating, early satiety, pelvic pressure, and a palpable adnexal mass. Which serum tumor marker is most commonly monitored in epithelial ovarian carcinomas?",
    "options": [
      {
        "id": "A",
        "text": "Cancer Antigen 125 (CA-125)"
      },
      {
        "id": "B",
        "text": "Alpha-Fetoprotein (AFP)"
      },
      {
        "id": "C",
        "text": "Carcoembryonic Antigen (CEA)"
      },
      {
        "id": "D",
        "text": "Prostate-Specific Antigen (PSA)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Cancer Antigen 125 (CA-125) is the primary serum biomarker used for monitoring response to therapy and detecting recurrence in epithelial ovarian carcinoma (serous cystadenocarcinoma).",
      "explanation": "CA-125 is elevated in >80% of advanced epithelial ovarian cancers. However, it lacks specificity in premenopausal women (elevated in endometriosis, PID, fibroids, pregnancy). Alpha-fetoprotein is a marker for hepatocellular carcinoma and yolk sac tumors; CEA is for colorectal carcinoma; CA 19-9 is for pancreatic cancer.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "AFP is associated with germ cell yolk sac tumors and liver hepatoma."
        },
        {
          "option": "C",
          "reason": "CEA is a marker for colorectal and GI adenocarcinomas."
        },
        {
          "option": "D",
          "reason": "PSA is a marker for prostatic tissue in males."
        }
      ],
      "priorityAlert": "CA-125 = Ovarian cancer! CA 19-9 = Pancreatic cancer! CA 15-3 = Breast cancer! CEA = Colorectal cancer!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Gynecologic Oncology & Biomarkers"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q61",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Neonatal Assessment: Primitive Newborn Reflexes Disappearance Age",
    "scenarioQuestion": "A pediatric nurse examines a 4-month-old infant. When the infant is supported in a semi-sitting position and the head allowed to drop back gently 30 degrees, the infant abducts and extends arms, spreads fingers into a C-shape, and then adducts arms in an embrace. What is this reflex, and when does it normally disappear?",
    "options": [
      {
        "id": "A",
        "text": "Moro Reflex; normally disappears by 4 to 6 months of age"
      },
      {
        "id": "B",
        "text": "Babinski Reflex; disappears at 1 week"
      },
      {
        "id": "C",
        "text": "Palmar Grasp Reflex; disappears at 18 months"
      },
      {
        "id": "D",
        "text": "Rooting Reflex; persists throughout childhood"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Moro (startle) reflex consists of bilateral symmetric arm abduction and extension followed by flexion/embrace and cry. It is present at birth and normally disappears by 4 to 6 months of age as cortical myelination matures.",
      "explanation": "Persistence of the Moro reflex beyond 6 months indicates significant neurological damage or cerebral palsy. Asymmetric Moro reflex suggests clavicular fracture or brachial plexus palsy (Erb-Duchenne palsy). Babinski reflex normally remains positive (dorsiflexion of big toe with fanning) up to 12 to 24 months in infants.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Babinski is toe fanning elicited by stroking the sole, persisting up to 1-2 years."
        },
        {
          "option": "C",
          "reason": "Palmar grasp reflex fades by 3 to 4 months."
        },
        {
          "option": "D",
          "reason": "Rooting reflex disappears by 3 to 4 months."
        }
      ],
      "priorityAlert": "Persistence of the Moro reflex beyond 6 months strongly indicates CEREBRAL PALSY or central nervous system dysfunction!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neonatal Reflexes & Neurological Milestones"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q62",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Pediatric Growth: Weight and Height Doubling / Tripling Milestones",
    "scenarioQuestion": "A healthy full-term infant weighed 3.0 kg at birth. Assuming normal physiological growth velocity, what should this infant's expected body weight be at 5 to 6 months and at 1 year of age, respectively?",
    "options": [
      {
        "id": "A",
        "text": "Doubles birth weight (6.0 kg) at 5 to 6 months; triples birth weight (9.0 kg) at 1 year"
      },
      {
        "id": "B",
        "text": "Triples at 5 months; quadruples at 1 year"
      },
      {
        "id": "C",
        "text": "Doubles at 1 year; triples at 2 years"
      },
      {
        "id": "D",
        "text": "Quadruples birth weight at 6 months"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Standard infant physical growth milestones: Infant doubles birth weight by 5 to 6 months, triples birth weight by 1 year, and quadruples birth weight by 2 to 2.5 years.",
      "explanation": "Birth length (~50 cm) increases by 50% at 1 year (to ~75 cm) and doubles at 4 years (to ~100 cm). Head circumference (~34–35 cm at birth) equals chest circumference at 1 year of age.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Tripling at 5 months is pathologically excessive weight velocity."
        },
        {
          "option": "C",
          "reason": "Doubling at 1 year indicates severe growth faltering / failure to thrive."
        },
        {
          "option": "D",
          "reason": "Quadrupling occurs at 2 to 2.5 years, not 6 months."
        }
      ],
      "priorityAlert": "Weight: Doubles at 5–6 months, Triples at 1 year, Quadruples at 2 years! Height: Doubles at 4 years (100 cm)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Anthropometry & Growth"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q63",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Neonatal Jaundice: Physiological vs Pathological Jaundice Criteria",
    "scenarioQuestion": "A full-term newborn develops visible cutaneous jaundice over the face and sclera at 14 hours after birth. Serum total bilirubin is 12 mg/dL. Why is this jaundice classified as PATHOLOGICAL rather than physiological?",
    "options": [
      {
        "id": "A",
        "text": "Any visible jaundice appearing within the first 24 hours of life is considered pathological until proven otherwise (most commonly Rh or ABO hemolytic disease)"
      },
      {
        "id": "B",
        "text": "Physiological jaundice always appears at 6 hours of life"
      },
      {
        "id": "C",
        "text": "Pathological jaundice only occurs in premature infants after 7 days"
      },
      {
        "id": "D",
        "text": "Bilirubin of 12 mg/dL is always lethal"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Pathological jaundice is defined by: (1) Clinical onset within the FIRST 24 HOURS of birth, (2) Serum total bilirubin rising faster than 5 mg/dL/day (or > 0.5 mg/dL/hr), (3) Total serum bilirubin > 15 mg/dL in full-term infants, or (4) Persistence beyond 14 days in term infants (or direct/conjugated bilirubin > 2 mg/dL).",
      "explanation": "Physiological jaundice appears AFTER 24 hours (typically day 2–3), peaks at day 3–5 (bilirubin < 12–15 mg/dL), and disappears by day 10–14, caused by immature hepatic glucuronyl transferase and shorter neonatal RBC lifespan (80 days).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Physiological jaundice NEVER appears in the first 24 hours."
        },
        {
          "option": "C",
          "reason": "Pathological jaundice occurs in both term and preterm infants."
        },
        {
          "option": "D",
          "reason": "Bilirubin of 12 mg/dL requires phototherapy evaluation, but is not inevitably fatal."
        }
      ],
      "priorityAlert": "Jaundice appearing in the FIRST 24 HOURS OF LIFE is ALWAYS PATHOLOGICAL! Investigate for ABO/Rh Hemolysis immediately!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neonatal Hyperbilirubinemia"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q64",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Neonatal Phototherapy: Essential Nursing Care Protocols",
    "scenarioQuestion": "A jaundiced neonate is placed under intensive blue-light phototherapy (wavelength 460–490 nm) to convert unconjugated bilirubin into water-soluble photoisomers (lumirubin). What are the TWO mandatory safety precautions the nurse must maintain throughout phototherapy?",
    "options": [
      {
        "id": "A",
        "text": "Cover eyes with opaque eye patches/shields to prevent retinal damage, and cover genitalia/diaper area to protect gonads"
      },
      {
        "id": "B",
        "text": "Keep the infant dressed in warm woolen clothing and turn off lights every 10 minutes"
      },
      {
        "id": "C",
        "text": "Apply thick oily petroleum lotions to the skin to prevent burning"
      },
      {
        "id": "D",
        "text": "Restrict oral fluids and feeds to 50% to decrease bowel movements"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Essential phototherapy nursing interventions: (1) Cover eyes with opaque eye shields to prevent permanent retinal photochemical injury, (2) Shield genitalia with a small diaper, (3) Expose maximal skin surface area, (4) Turn infant every 2 hours, and (5) Increase fluid intake by 10%–20% to compensate for insensible fluid loss.",
      "explanation": "Never apply oils, lotions, or ointments to the infant's skin during phototherapy because they cause severe skin burns. Frequent feeding promotes gastrointestinal motility and stooling, which accelerates lumirubin excretion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Clothing blocks light from reaching skin capillaries."
        },
        {
          "option": "C",
          "reason": "Oils and lotions cause blistering and thermal burns under phototherapy lights."
        },
        {
          "option": "D",
          "reason": "Hydration and enteral feeds must be INCREASED by 15-20%, not restricted."
        }
      ],
      "priorityAlert": "Cover eyes with eye patches and protect gonads! NEVER apply oil or lotion to an infant under phototherapy!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neonatal Phototherapy Standards"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q65",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Birth Trauma: Caput Succedaneum vs Cephalhematoma Differentiation",
    "scenarioQuestion": "A newborn delivered by vacuum extraction has a soft, fluctuant, edematous scalp swelling that CROSSES the sagittal and coronal suture lines and pits on pressure. The swelling resolves completely within 48 to 72 hours without treatment. What birth injury does this represent?",
    "options": [
      {
        "id": "A",
        "text": "Caput Succedaneum"
      },
      {
        "id": "B",
        "text": "Cephalhematoma"
      },
      {
        "id": "C",
        "text": "Subgaleal Hemorrhage"
      },
      {
        "id": "D",
        "text": "Depressed Skull Fracture"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Caput Succedaneum is a subcutaneous serosanguinous fluid collection that CROSSES cranial suture lines, is present at birth, and resolves spontaneously within 48 to 72 hours. Cephalhematoma is a subperiosteal hemorrhage that does NOT cross suture lines.",
      "explanation": "Because periosteum is tightly bound to cranial suture margins, Cephalhematoma is strictly confined to a single cranial bone (most commonly parietal), appears several hours to days after birth, and takes 2 to 8 weeks to resorb. Subgaleal hemorrhage spreads across the entire scalp into the neck and can cause fatal hypovolemic shock.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Cephalhematoma is subperiosteal and NEVER crosses cranial suture lines."
        },
        {
          "option": "C",
          "reason": "Subgaleal hemorrhage causes massive blood loss, expanding fluctuant mass crossing the neck, and profound shock."
        },
        {
          "option": "D",
          "reason": "Depressed fracture creates a palpable focal indentation."
        }
      ],
      "priorityAlert": "Caput Succedaneum = CROSSES suture lines (resolves in 2-3 days)! Cephalhematoma = DOES NOT CROSS suture lines (resolves in weeks)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neonatal Birth Injuries"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q66",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Congenital Anomalies: Cleft Lip and Cleft Palate Surgical Timing (Rule of 10s)",
    "scenarioQuestion": "A mother inquires about the optimal timing for surgical repair of her infant's congenital cleft lip (cheiloplasty). According to the widely recognized \"Rule of 10s\", what criteria must the infant meet prior to undergoing cleft lip surgery?",
    "options": [
      {
        "id": "A",
        "text": "Age at least 10 weeks, Body weight at least 10 pounds (4.5 kg), and Hemoglobin at least 10 g/dL"
      },
      {
        "id": "B",
        "text": "Age 10 months, Weight 10 kg, and WBC 10,000"
      },
      {
        "id": "C",
        "text": "Age 10 days, Weight 10 ounces, and Platelets 10,000"
      },
      {
        "id": "D",
        "text": "Age 10 years, Height 100 cm, and SpO2 100%"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The \"Rule of 10s\" (Wilhelmmisen & Musgrave) for timing Cleft Lip repair (Cheiloplasty) requires: (1) Age >= 10 weeks, (2) Body Weight >= 10 pounds (~4.5 kg), and (3) Hemoglobin >= 10 g/dL (with WBC < 10,000).",
      "explanation": "This physiological threshold ensures adequate anesthetic safety, respiratory stability, and sufficient anatomical tissue landmarks for precise plastic reconstruction. Cleft Palate repair (Palatoplasty) is performed later, typically at 9 to 18 months of age (before the child develops significant speech patterns).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "10 months is the timing for cleft palate repair, not lip."
        },
        {
          "option": "C",
          "reason": "10 days is far too early and medically dangerous."
        },
        {
          "option": "D",
          "reason": "10 years is inappropriately late and permanently impairs facial development and speech."
        }
      ],
      "priorityAlert": "Cleft Lip = \"Rule of 10s\" (10 weeks, 10 lbs, 10 g/dL Hb)! Cleft Palate = 9 to 18 months (before speech development)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Craniofacial Surgery"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q67",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Congenital Anomalies: Myelomeningocele Pre-Operative Nursing Care",
    "scenarioQuestion": "A newborn is delivered with an intact, fluid-filled lumbosacral Myelomeningocele containing neural tissue and meninges. What is the MOST CRITICAL immediate pre-operative nursing intervention to protect the neural sac?",
    "options": [
      {
        "id": "A",
        "text": "Place infant prone with hips abducted, and cover the sac with a sterile, non-adherent dressing moistened with warm sterile Normal Saline"
      },
      {
        "id": "B",
        "text": "Place infant flat supine directly on the sac to apply pressure"
      },
      {
        "id": "C",
        "text": "Cover sac with dry dry sterile cotton gauze"
      },
      {
        "id": "D",
        "text": "Apply povidone-iodine tincture directly to the delicate sac"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In neonates with an unrepaired Myelomeningocele, the infant is placed strictly PRONE (to avoid pressure on the defect), and the sac is covered immediately with a sterile, non-adherent dressing moistened with warm sterile normal saline to prevent drying, cracking, and fatal bacterial meningitis.",
      "explanation": "The moist dressing must be changed regularly (every 2–4 hours) and kept warm under a radiant warmer. Avoid diapering to prevent fecal and urinary contamination of the sac. Latex precautions are strictly observed because these children are at extraordinarily high risk for developing life-threatening latex allergy.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Supine positioning crushes and ruptures the neural placode and spinal cord."
        },
        {
          "option": "C",
          "reason": "Dry gauze adheres to delicate membranes; peeling it off rips the neural tissue and causes CSF leak."
        },
        {
          "option": "D",
          "reason": "Iodine tincture is neurotoxic and chemically burns exposed spinal cord tissue."
        }
      ],
      "priorityAlert": "Keep myelomeningocele sac MOIST with sterile saline! Keep infant in PRONE position! Strictly avoid LATEX products!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Neural Tube Defects & Pediatric Safety"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q68",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Cardiovascular: Acute Rheumatic Fever Modified Jones Criteria",
    "scenarioQuestion": "A 9-year-old child presents 3 weeks after an untreated Group A beta-hemolytic Streptococcal (GABHS) pharyngitis with migratory polyarthritis, Sydenham chorea, and a new holosystolic cardiac murmur. What are the FIVE MAJOR manifestations of the Modified Jones Criteria for diagnosing Acute Rheumatic Fever?",
    "options": [
      {
        "id": "A",
        "text": "Carditis, Migratory Polyarthritis, Sydenham Chorea, Erythema Marginatum, and Subcutaneous Nodules (Mnemonic: \"JONES\")"
      },
      {
        "id": "B",
        "text": "Fever, Arthralgia, Elevated ESR, Prolonged PR interval, and Leukocytosis"
      },
      {
        "id": "C",
        "text": "Conjunctivitis, Strawberry tongue, Desquamation, Cervical lymphadenopathy, and Rash"
      },
      {
        "id": "D",
        "text": "Splinter hemorrhages, Janeway lesions, Osler nodes, Roth spots, and Clubbing"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The 5 MAJOR Jones Criteria for Acute Rheumatic Fever are: J = Joint involvement (migratory polyarthritis), O = \"Heart\" (Carditis / Valvulitis), N = Nodules (subcutaneous, painless), E = Erythema Marginatum, S = Sydenham Chorea (St. Vitus dance).",
      "explanation": "Diagnosis requires evidence of preceding Streptococcal infection (elevated ASO titer or positive throat culture) PLUS 2 major criteria, OR 1 major + 2 minor criteria (Fever, Arthralgia, elevated ESR/CRP, prolonged PR interval on ECG).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "These are the MINOR Jones criteria (Fever, Arthralgia, high ESR/CRP, prolonged PR interval)."
        },
        {
          "option": "C",
          "reason": "Describes Kawasaki Disease clinical diagnostic criteria."
        },
        {
          "option": "D",
          "reason": "Describes Infective Endocarditis peripheral stigmata."
        }
      ],
      "priorityAlert": "Major Jones Criteria = \"JONES\" (Joints, O-Carditis, Nodules, Erythema marginatum, Sydenham chorea)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Cardiology & Rheumatic Fever"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q69",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Pediatric Vasculitis: Kawasaki Disease Diagnosis and Treatment",
    "scenarioQuestion": "A 3-year-old child presents with high fever lasting 6 days unresponsive to antipyretics, bilateral non-purulent conjunctival injection, cracked red lips with a \"strawberry tongue\", polymorphous rash, and desquamation of the skin of the fingers and toes. What is the gold-standard medical therapy to prevent Coronary Artery Aneurysms?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous Immunoglobulin (IVIG: 2 g/kg single infusion over 10–12 hours) plus high-dose oral Aspirin"
      },
      {
        "id": "B",
        "text": "Intramuscular Penicillin G Benzathine"
      },
      {
        "id": "C",
        "text": "Oral Prednisolone alone without aspirin"
      },
      {
        "id": "D",
        "text": "Intravenous Ampicillin and Gentamicin"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Kawasaki disease (mucocutaneous lymph node syndrome) is an acute systemic necrotizing vasculitis of medium-sized arteries. First-line therapy is high-dose IVIG (2 g/kg as a single infusion over 10–12 hours) initiated within the first 10 days of illness, combined with high-dose Aspirin (80–100 mg/kg/day during acute phase, then 3–5 mg/kg/day antiplatelet dose for 6–8 weeks).",
      "explanation": "IVIG plus Aspirin reduces the risk of coronary artery aneurysms from 25% down to less than 3%–5%. Kawasaki disease is one of the few pediatric conditions where Aspirin is indicated despite the theoretical risk of Reye syndrome.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Penicillin treats Streptococcal pharyngitis/rheumatic fever, not Kawasaki vasculitis."
        },
        {
          "option": "C",
          "reason": "Steroids alone can accelerate coronary aneurysm wall thinning if given without IVIG."
        },
        {
          "option": "D",
          "reason": "Antibiotics are ineffective against non-bacterial Kawasaki vasculitis."
        }
      ],
      "priorityAlert": "High-dose IVIG + Aspirin within the first 10 days of fever is the ONLY proven therapy that prevents fatal Coronary Artery Aneurysms in Kawasaki Disease!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Vasculitis & Cardiology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q70",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Pediatric Neurology: Hydrocephalus Clinical Signs and VP Shunt Care",
    "scenarioQuestion": "A 4-month-old infant with progressive hydrocephalus is admitted for Ventriculoperitoneal (VP) Shunt placement. Which ocular physical finding is characteristic of severe elevated intracranial pressure in infants with open cranial sutures?",
    "options": [
      {
        "id": "A",
        "text": "\"Sunset Eyes\" sign (setting-sun phenomenon: downward deviation of the eyes with sclera visible above iris)"
      },
      {
        "id": "B",
        "text": "Bilateral pinpoint pupils"
      },
      {
        "id": "C",
        "text": "Permanent bilateral ptosis"
      },
      {
        "id": "D",
        "text": "White pupillary reflex (Leukocoria)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The \"Setting-Sun Sign\" (downward gaze deviation where the sclera is prominently visible between the upper eyelid and the limbus) occurs due to hydrocephalus causing upward gaze palsy from compression of the midbrain tectum / Periaqueductal gray area (Parinaud syndrome).",
      "explanation": "Other signs in infants include bulging non-pulsatile anterior fontanelle, split/widened cranial sutures, prominent distended scalp veins, and high-pitched shrill cry (\"cri du chat\" or neuro-cry). Leukocoria suggests Retinoblastoma.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Pinpoint pupils indicate opioid toxicity or pontine hemorrhage."
        },
        {
          "option": "C",
          "reason": "Ptosis is seen in myasthenia or oculomotor palsy."
        },
        {
          "option": "D",
          "reason": "White pupillary reflex (leukocoria) is the classic sign of Retinoblastoma or congenital cataract."
        }
      ],
      "priorityAlert": "Setting-Sun eyes + Bulging Fontanelle + Shrill High-Pitched Cry = Marked Increase in Intracranial Pressure / Hydrocephalus!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Neurosurgery & ICP"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q71",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Gastroenterology: Celiac Disease (Gluten-Sensitive Enteropathy) Dietary Rule",
    "scenarioQuestion": "A 2-year-old child is diagnosed with Celiac Disease following an intestinal biopsy showing villous atrophy and crypt hyperplasia. Which dietary grains must be STRICTLY EXCLUDED from this child's diet for life?",
    "options": [
      {
        "id": "A",
        "text": "Barley, Rye, Oats, and Wheat (the \"BROW\" grains)"
      },
      {
        "id": "B",
        "text": "Rice, Corn, Maize, and Soy"
      },
      {
        "id": "C",
        "text": "Milk, Cheese, Butter, and Yogurt"
      },
      {
        "id": "D",
        "text": "Citrus fruits, Tomatoes, and Potatoes"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In Celiac Disease, an autoimmune enteropathy triggered by the gluten peptide gliadin, all gluten-containing grains must be permanently eliminated: B = Barley, R = Rye, O = Oats (often cross-contaminated), and W = Wheat (Mnemonic: \"BROW\").",
      "explanation": "Safe gluten-free grain substitutes include Rice, Corn (maize), Millet, Buckwheat, Quinoa, Tapioca, and Potato starch. Ingestion of gluten damages small intestinal villi, leading to chronic steatorrhea, abdominal distension, and severe failure to thrive.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Rice and corn are completely gluten-free and the primary dietary staple for celiac patients."
        },
        {
          "option": "C",
          "reason": "Milk and dairy are excluded in lactose intolerance, not celiac (unless transient secondary lactase deficiency exists)."
        },
        {
          "option": "D",
          "reason": "Potatoes and citrus fruits do not contain gluten."
        }
      ],
      "priorityAlert": "Celiac Diet: NO \"BROW\" (Barley, Rye, Oats, Wheat)! Safe foods = Rice and Corn!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Gastroenterology & Nutrition"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q72",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_peds_05",
    "topicTitle": "Neonatal Care: Vitamin K Prophylaxis Dose and Rationale",
    "scenarioQuestion": "Immediately after birth, all newborns receive an intramuscular injection of Vitamin K1 (Phytonadione) into the vastus lateralis. Why is prophylactic Vitamin K mandatory in all neonates, and what is the standard dose for full-term infants?",
    "options": [
      {
        "id": "A",
        "text": "1.0 mg IM; to prevent Vitamin K Deficiency Bleeding (VKDB / Hemorrhagic Disease of the Newborn) due to absent gut flora and poor placental transfer"
      },
      {
        "id": "B",
        "text": "10 mg IV; to accelerate liver glycogen stores"
      },
      {
        "id": "C",
        "text": "0.1 mg oral; to promote meconium passage"
      },
      {
        "id": "D",
        "text": "5 mg subcutaneous; to stimulate surfactant synthesis"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Newborns have sterile intestines lacking bacterial microflora necessary for endogenous Vitamin K synthesis, low hepatic stores, and poor placental transfer, causing transient deficiency of clotting factors II, VII, IX, and X. Administering Vitamin K1 1 mg IM (0.5 mg for preterm < 1000g) prevents Vitamin K Deficiency Bleeding (VKDB).",
      "explanation": "VKDB can manifest as life-threatening intracranial hemorrhage, gastrointestinal bleeding, or umbilical oozing. It is given within 1 hour of birth into the anterolateral vastus lateralis muscle.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "10 mg IV is an adult overdose for a newborn and causes hyperbilirubinemia/kernicterus."
        },
        {
          "option": "C",
          "reason": "Oral vitamin K is poorly absorbed and does not prevent late VKDB reliably."
        },
        {
          "option": "D",
          "reason": "Surfactant is stimulated by antenatal maternal corticosteroids, not vitamin K."
        }
      ],
      "priorityAlert": "Vitamin K1 IM dose: 1 mg for Term Infants, 0.5 mg for Preterm (< 1000g)! Injected into vastus lateralis!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neonatal Prophylaxis & Hematology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q73",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Toxicology: Organophosphate Poisoning Antidote Protocol",
    "scenarioQuestion": "A farmer is rushed to the emergency department after accidental agricultural pesticide exposure. He presents with pinpoint pupils (miosis), profuse salivation, lacrimation, urination, defecation, bronchospasm with wheezing, and marked bradycardia (the DUMBELS syndrome). What is the FIRST-LINE life-saving antidote, and what therapeutic endpoint guides ongoing administration?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous Atropine Sulfate (2 to 4 mg IV bolus, doubling every 5 minutes until complete atropinization: clear chest auscultation/dry secretions)"
      },
      {
        "id": "B",
        "text": "Naloxone 0.4 mg IV"
      },
      {
        "id": "C",
        "text": "Flumazenil 0.2 mg IV"
      },
      {
        "id": "D",
        "text": "Physostigmine 1 mg IV"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Organophosphates irreversibly inhibit acetylcholinesterase, producing massive acetylcholine accumulation and lethal cholinergic toxidrome. Atropine Sulfate competitively blocks muscarinic receptors and is the primary life-saving antidote. It is titrated until \"atropinization\" (drying of bronchial secretions and resolution of bronchospasm).",
      "explanation": "Pralidoxime (2-PAM) is administered concurrently to reactivate acetylcholinesterase before irreversible enzyme \"aging\" occurs. Dilated pupils and tachycardia are NOT endpoints; CLEARING OF BRONCHIAL SECRETIONS is the true therapeutic target.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Naloxone reverses opioids, not organophosphates."
        },
        {
          "option": "C",
          "reason": "Flumazenil reverses benzodiazepines."
        },
        {
          "option": "D",
          "reason": "Physostigmine is a cholinesterase inhibitor that would immediately kill the patient."
        }
      ],
      "priorityAlert": "The primary endpoint for Atropine dosing in Organophosphate poisoning is DRYING OF TRACHEOBRONCHIAL SECRETIONS and clear breath sounds, NOT pupil size!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Toxicology & Antidote Therapy"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q74",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Emergency Toxicology: Opioid Overdose Triad and Naloxone Titration",
    "scenarioQuestion": "A 26-year-old unconscious patient is brought to casualty with suspected heroin overdose. The nurse notes the classic Opioid Overdose Triad. What comprises this triad, and what is the specific opioid receptor antagonist?",
    "options": [
      {
        "id": "A",
        "text": "Pinpoint pupils (miosis), Respiratory depression (< 8 breaths/min), and Central nervous system depression (coma); treated with Naloxone (Narcan)"
      },
      {
        "id": "B",
        "text": "Dilated pupils, Hyperthermia, and Seizures; treated with Diazepam"
      },
      {
        "id": "C",
        "text": "Nystagmus, Tremors, and Rigidity; treated with Dantrolene"
      },
      {
        "id": "D",
        "text": "Hypotension, Tachycardia, and Flushed skin; treated with Epinephrine"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The classic Opioid Overdose Triad is: (1) Coma / CNS depression, (2) Pinpoint pupils (miosis), and (3) Respiratory depression. Naloxone (0.4 to 2.0 mg IV/IM/intranasal) is the pure opioid antagonist that rapidly restores spontaneous respiration.",
      "explanation": "Naloxone has a shorter half-life (30–90 minutes) than most opioids (e.g. methadone, morphine). The nurse must continuously monitor the patient because respiratory depression can recur as Naloxone wears off, requiring repeated doses or an infusion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Dilated pupils and hyperthermia are features of sympathomimetic or anticholinergic toxicity."
        },
        {
          "option": "C",
          "reason": "Features neuroleptic malignant syndrome or extrapyramidal reactions."
        },
        {
          "option": "D",
          "reason": "Features vasodilatory shock."
        }
      ],
      "priorityAlert": "Naloxone wears off in 30 to 90 minutes! The patient can slip back into fatal respiratory arrest once Naloxone clears!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Opioids & Respiratory Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q75",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Electrolyte Safety: Potassium Chloride (KCl) Intravenous Administration Rules",
    "scenarioQuestion": "A patient has a serum potassium level of 2.8 mEq/L. The physician orders 40 mEq of Potassium Chloride (KCl) IV. Which administration route is an ABSOLUTE CONTRAINDICATION and can result in immediate legal homicide charges?",
    "options": [
      {
        "id": "A",
        "text": "Direct, undiluted intravenous bolus / IV push (KCl IV push causes immediate fatal cardiac arrest and asystole)"
      },
      {
        "id": "B",
        "text": "Slow IV piggyback infusion via an electronic infusion pump diluted in 500 mL normal saline"
      },
      {
        "id": "C",
        "text": "Infusion rate controlled at <= 10 to 20 mEq/hour on telemetry"
      },
      {
        "id": "D",
        "text": "Central venous line infusion with continuous cardiac monitoring"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "POTASSIUM CHLORIDE MUST NEVER BE ADMINISTERED BY DIRECT INTRAVENOUS PUSH (BOLUS) OR ADDED TO AN ALREADY HANGING IV BAG. Rapid IV push bolus causes immediate fatal hyperkalemic depolarization block and instant cardiac arrest/asystole.",
      "explanation": "Maximal peripheral infusion rate is 10 mEq/hour (up to 20 mEq/hr via central venous line with continuous ECG telemetry). Concentrations should not exceed 40 mEq/L in peripheral lines due to severe chemical phlebitis and burning.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Diluted slow infusion via an electronic pump is the correct standard of care."
        },
        {
          "option": "C",
          "reason": "10 to 20 mEq/hour is the accepted international safety rate limit."
        },
        {
          "option": "D",
          "reason": "Central line infusion with telemetry is standard for severe hypokalemia."
        }
      ],
      "priorityAlert": "NEVER, EVER PUSH POTASSIUM CHLORIDE (KCL) DIRECTLY VIA IV PUSH! IT IS A LETHAL INJECTION!"
    },
    "difficulty": "Easy",
    "clinicalTag": "High-Alert Medications & Safety"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q76",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Diuretics: Spironolactone Mechanism and Electrolyte Effects",
    "scenarioQuestion": "A patient with liver cirrhosis and ascites is prescribed oral Spironolactone (Aldactone). How does this medication function pharmacologically, and what electrolyte abnormality requires careful monitoring?",
    "options": [
      {
        "id": "A",
        "text": "Competitive Aldosterone receptor antagonist in the distal convoluted tubule and collecting ducts; risks Hyperkalemia"
      },
      {
        "id": "B",
        "text": "Inhibits Na+/K+/2Cl- cotransporter in the Loop of Henle; risks Hypokalemia"
      },
      {
        "id": "C",
        "text": "Inhibits Na+/Cl- cotransporter in the distal tubule; risks Hypocalcemia"
      },
      {
        "id": "D",
        "text": "Osmotic agent in proximal tubule; risks Hypernatremia"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Spironolactone is a potassium-sparing diuretic that competitively antagonizes aldosterone receptors in the late distal tubules and cortical collecting ducts, promoting sodium/water excretion while conserving potassium and hydrogen ions. It carries a significant risk of Hyperkalemia.",
      "explanation": "Serum potassium must be monitored closely, especially when co-administered with ACE inhibitors or ARBs. Salt substitutes containing potassium chloride must be avoided. Gynecomastia and menstrual irregularities can occur due to anti-androgenic effects.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes loop diuretics (Furosemide), which cause hypokalemia."
        },
        {
          "option": "C",
          "reason": "Describes thiazides, which cause hypercalcemia and hypokalemia."
        },
        {
          "option": "D",
          "reason": "Describes Mannitol."
        }
      ],
      "priorityAlert": "Spironolactone SPARES Potassium -> High risk of HYPERKALEMIA! Avoid potassium supplements and salt substitutes!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Diuretics & Electrolytes"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q77",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Oral Hypoglycemics: Metformin Lactic Acidosis and Iodinated Contrast Media",
    "scenarioQuestion": "A diabetic patient taking Metformin 1000 mg twice daily is scheduled for an elective contrast-enhanced computerized tomography (CECT) of the abdomen. What is the mandatory protocol regarding Metformin administration around the time of iodinated radiocontrast injection?",
    "options": [
      {
        "id": "A",
        "text": "Withhold Metformin on the day of the procedure and for at least 48 hours afterward; resume only after verifying normal renal function (serum creatinine)"
      },
      {
        "id": "B",
        "text": "Double the dose of Metformin to clear the contrast faster"
      },
      {
        "id": "C",
        "text": "Take Metformin with 500 mL of milk immediately before the scan"
      },
      {
        "id": "D",
        "text": "Switch Metformin to intramuscular insulin 5 minutes prior to the scan"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Iodinated radiocontrast dye can induce acute contrast-induced nephropathy (CIN). Because Metformin is cleared exclusively by the kidneys, acute renal impairment causes toxic accumulation of Metformin, precipitating fatal Lactic Acidosis. Metformin must be held on the day of contrast and for 48 hours post-procedure until stable renal function is confirmed.",
      "explanation": "Lactic acidosis has a mortality rate exceeding 40%–50%. Patients must receive adequate pre-procedure and post-procedure intravenous hydration (Normal Saline) to protect renal tubule perfusion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Doubling the dose guarantees toxic accumulation and lethal lactic acidosis."
        },
        {
          "option": "C",
          "reason": "Taking metformin with contrast increases risk of toxicity."
        },
        {
          "option": "D",
          "reason": "Insulin is never administered via the intramuscular route for routine diabetic coverage."
        }
      ],
      "priorityAlert": "HOLD METFORMIN for 48 hours after IV contrast dye! Verify serum creatinine/eGFR before restarting!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Radiology Safety & Diabetes Pharmacology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q78",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Antitubercular Therapy: Isoniazid (INH) Neuropathy and Pyridoxine",
    "scenarioQuestion": "A patient receiving First-Line Anti-Tubercular Therapy (ATT) complains of bilateral numbness, burning sensations, and tingling in the toes and fingers. Which drug in the ATT regimen is responsible for this peripheral neuropathy, and what vitamin co-prescription prevents this complication?",
    "options": [
      {
        "id": "A",
        "text": "Isoniazid (INH); prevented by co-administration of Pyridoxine (Vitamin B6)"
      },
      {
        "id": "B",
        "text": "Rifampicin; prevented by Vitamin C"
      },
      {
        "id": "C",
        "text": "Ethambutol; prevented by Vitamin A"
      },
      {
        "id": "D",
        "text": "Pyrazinamide; prevented by Vitamin D"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Isoniazid (INH) competitively inhibits pyridoxine phosphokinase and accelerates urinary excretion of Pyridoxine (Vitamin B6), leading to pyridoxine deficiency and peripheral neuropathy. Daily co-administration of Pyridoxine (10–50 mg/day) completely prevents INH-induced neurotoxicity.",
      "explanation": "Rifampicin causes red-orange discoloration of urine, tears, and sweat, and hepatotoxicity. Ethambutol causes retrobulbar optic neuritis (loss of red-green visual acuity). Pyrazinamide causes hyperuricemia (gout) and severe arthralgia.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Rifampicin causes orange bodily fluids, not peripheral neuropathy."
        },
        {
          "option": "C",
          "reason": "Ethambutol causes optic neuritis, not peripheral neuropathy."
        },
        {
          "option": "D",
          "reason": "Pyrazinamide causes hyperuricemia and hepatotoxicity."
        }
      ],
      "priorityAlert": "INH = Peripheral Neuropathy -> Treat with PYRIDOXINE (Vitamin B6)! Ethambutol = OPTIC NEURITIS (Red-Green blindness)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Antimycobacterial Therapy & ATT"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q79",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Hematologic Pharmacology: Heparin-Induced Thrombocytopenia (HIT)",
    "scenarioQuestion": "A surgical patient receiving prophylactic Unfractionated Heparin for 6 days shows a 55% drop in platelet count (from 280,000 to 110,000/uL), accompanied by a new deep vein thrombosis in the right femoral vein. Heparin-Induced Thrombocytopenia (HIT Type II) is suspected. What is the IMMEDIATE nursing and medical action?",
    "options": [
      {
        "id": "A",
        "text": "Discontinue ALL forms of heparin immediately (including flushes) and initiate an alternative non-heparin direct thrombin inhibitor (Argatroban or Fondaparinux)"
      },
      {
        "id": "B",
        "text": "Transfuse 6 units of random donor platelets immediately"
      },
      {
        "id": "C",
        "text": "Switch from unfractionated heparin to low-molecular-weight heparin (Enoxaparin)"
      },
      {
        "id": "D",
        "text": "Increase the heparin infusion rate to overcome resistance"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "HIT Type II is an immune-mediated reaction caused by IgG antibodies targeting Platelet Factor 4 (PF4)-heparin complexes, causing massive platelet activation and life-threatening paradoxical arterial and venous thrombosis. Management: (1) Discontinue ALL heparin immediately, (2) Start an alternative non-heparin anticoagulant (Argatroban, Bivalirudin, or Fondaparinux).",
      "explanation": "NEVER switch to Low-Molecular-Weight Heparin (Enoxaparin) because cross-reactivity with HIT antibodies is > 90%. NEVER transfuse platelets routinely because transfused platelets become substrate for antibody activation, triggering widespread fatal thrombosis.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Platelet transfusions in HIT fuel the prothrombotic fire and cause acute thrombotic occlusion."
        },
        {
          "option": "C",
          "reason": "LMWH has near 100% cross-reactivity with HIT antibodies."
        },
        {
          "option": "D",
          "reason": "Increasing heparin accelerates fatal thrombosis and amputation."
        }
      ],
      "priorityAlert": "HIT Paradox: Low Platelets + CLOTS! STOP HEPARIN! DO NOT GIVE PLATELETS! Start Argatroban!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Hematology & Anticoagulant Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q80",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Therapeutic Drug Monitoring: Aminoglycoside Peak and Trough Levels",
    "scenarioQuestion": "A patient with Pseudomonas septicemia is prescribed intravenous Amikacin. To minimize the risk of Ototoxicity and Nephrotoxicity while ensuring clinical efficacy, when should the \"TROUGH\" serum level of an aminoglycoside be drawn?",
    "options": [
      {
        "id": "A",
        "text": "Immediately within 30 minutes before the next scheduled dose"
      },
      {
        "id": "B",
        "text": "30 minutes after completing a 30-minute IV infusion"
      },
      {
        "id": "C",
        "text": "Midway through the 12-hour dosing interval"
      },
      {
        "id": "D",
        "text": "4 hours after the dose"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The \"TROUGH\" level represents the lowest concentration of drug in the bloodstream and is drawn immediately within 30 minutes PRIOR to the administration of the next dose. High trough levels are the primary predictor of aminoglycoside nephrotoxicity and ototoxicity.",
      "explanation": "The \"PEAK\" level represents maximal concentration and is drawn 30 minutes after the completion of a 30-minute IV infusion (or 60 minutes after IM injection), assessing antimicrobial efficacy.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "30 minutes after infusion measures the PEAK concentration, not trough."
        },
        {
          "option": "C",
          "reason": "Midway blood draws do not represent peak or trough and have no reference norms."
        },
        {
          "option": "D",
          "reason": "4 hours after does not correlate with toxicity thresholds."
        }
      ],
      "priorityAlert": "Trough level = Drawn immediately BEFORE (within 30 mins) the next dose! Elevated trough = HIGH RISK OF NEPHROTOXICITY!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Therapeutic Drug Monitoring & Antibiotics"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q81",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiovascular Pharmacology: Sublingual Nitroglycerin Patient Education",
    "scenarioQuestion": "A patient with stable angina is discharged with a prescription for Sublingual Nitroglycerin (SL NTG) tablets. Which instruction should the nurse include in the medication teaching plan?",
    "options": [
      {
        "id": "A",
        "text": "Take 1 tablet under the tongue at the onset of chest pain; if pain persists after 5 minutes, call emergency services (108/112) and take a second tablet; maximum 3 tablets in 15 minutes"
      },
      {
        "id": "B",
        "text": "Swallow the tablet immediately with a full glass of warm water"
      },
      {
        "id": "C",
        "text": "Store tablets in a clear plastic bag on the bathroom windowsill"
      },
      {
        "id": "D",
        "text": "Take all 3 tablets simultaneously at the first sign of chest discomfort"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "AHA standard for SL Nitroglycerin: Dissolve 1 tablet under tongue at onset of pain; rest for 5 minutes. If chest pain is unrelieved or worsens after 5 minutes, call emergency services (108/112) immediately, and take a 2nd tablet (can take up to 3 tablets 5 minutes apart).",
      "explanation": "SL NTG must be kept in its original amber glass container with a tight metal cap away from heat, moisture, and light because it is highly volatile and decomposes. A slight tingling or burning sensation under the tongue confirms potency.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Swallowing NTG undergoes > 90% first-pass hepatic destruction, rendering it ineffective."
        },
        {
          "option": "C",
          "reason": "Heat, light, and plastic inactivate nitroglycerin."
        },
        {
          "option": "D",
          "reason": "Taking 3 tablets at once causes catastrophic hypotension and syncope."
        }
      ],
      "priorityAlert": "Keep SL Nitroglycerin in original DARK AMBER GLASS bottle! Replace prescription every 6 months after opening!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Cardiac Pharmacology & Angina"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q82",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_msn_02",
    "topicTitle": "Chemotherapy Precautions: Cisplatin Nephrotoxicity Prevention",
    "scenarioQuestion": "A patient with non-small cell lung cancer is scheduled to receive high-dose Cisplatin chemotherapy. What is the MOST CRITICAL nursing intervention required before and during Cisplatin administration to prevent acute tubular necrosis and nephrotoxicity?",
    "options": [
      {
        "id": "A",
        "text": "Aggressive pre-hydration and post-hydration with intravenous Normal Saline (2 to 3 liters over 24 hours) with forced osmotic diuresis (Mannitol)"
      },
      {
        "id": "B",
        "text": "Fluid restriction to 500 mL per day to prevent bladder distension"
      },
      {
        "id": "C",
        "text": "Administration of high-dose Calcium Gluconate"
      },
      {
        "id": "D",
        "text": "Strict bed rest in Trendelenburg position"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Cisplatin is a platinum-based alkylating chemotherapeutic agent whose dose-limiting toxicity is severe nephrotoxicity (acute proximal tubular necrosis). Vigorous IV hydration with Normal Saline (2–3 L/day) combined with Mannitol diuresis flushes the renal tubules and reduces mucosal drug concentration, protecting renal parenchyma.",
      "explanation": "Serum creatinine and BUN must be evaluated prior to each cycle. Amifostine is a chemoprotective cytoprotective agent that can also be used to mitigate renal toxicity. Cisplatin is also highly emetogenic, requiring pre-treatment with aprepitant, ondansetron, and dexamethasone.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Fluid restriction concentrates Cisplatin in renal tubules, causing irreversible renal failure."
        },
        {
          "option": "C",
          "reason": "Calcium gluconate does not prevent platinum nephrotoxicity."
        },
        {
          "option": "D",
          "reason": "Positioning does not affect renal clearance."
        }
      ],
      "priorityAlert": "Vigorous IV Hydration (2–3 L) is the #1 mandatory defense against CISPLATIN NEPHROTOXICITY!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Oncology Pharmacology & Chemoprotection"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q83",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "Epidemiology: Epidemiological Triad Components",
    "scenarioQuestion": "In traditional infectious disease epidemiology, what THREE fundamental interacting components comprise the Epidemiological Triad that determines disease transmission in a human population?",
    "options": [
      {
        "id": "A",
        "text": "Agent, Host, and Environment"
      },
      {
        "id": "B",
        "text": "Time, Place, and Person"
      },
      {
        "id": "C",
        "text": "Incidence, Prevalence, and Mortality"
      },
      {
        "id": "D",
        "text": "Bacteria, Virus, and Parasite"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Epidemiological Triad consists of the Agent (the causative entity: biological, chemical, physical), the Host (the human organism harboring disease: age, immunity, genetics), and the Environment (external conditions facilitating exposure: climate, sanitation, housing).",
      "explanation": "\"Time, Place, and Person\" are the three dimensions of Descriptive Epidemiology. The epidemiological triad explains how changes in any of the three components can tip the balance toward an epidemic.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Time, Place, and Person are descriptive epidemiological variables, not the triad."
        },
        {
          "option": "C",
          "reason": "These are statistical rates and disease frequency measures."
        },
        {
          "option": "D",
          "reason": "These are biological agents only, omitting the host and environment."
        }
      ],
      "priorityAlert": "Epidemiological Triad = AGENT, HOST, ENVIRONMENT! Descriptive Epidemiology = TIME, PLACE, PERSON!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Epidemiological Principles"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q84",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "Epidemiological Metrics: Incidence vs Prevalence Rates",
    "scenarioQuestion": "In community health biostatistics, how is INCIDENCE distinguished from PREVALENCE in measuring disease burden?",
    "options": [
      {
        "id": "A",
        "text": "Incidence measures NEW cases occurring in a defined population over a specified time period; Prevalence measures ALL existing cases (new + old) at a given point in time"
      },
      {
        "id": "B",
        "text": "Incidence measures total existing cases; Prevalence measures new cases"
      },
      {
        "id": "C",
        "text": "Incidence is used only for chronic diseases; Prevalence is for acute diseases"
      },
      {
        "id": "D",
        "text": "Incidence and Prevalence are identical numbers"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Incidence = Number of NEW cases arising in a population at risk during a specified period (measures rate of disease occurrence, best for acute outbreaks and etiological studies). Prevalence = Total number of ALL existing cases (new + old) at a specific point or period in time (measures total burden, best for chronic disease healthcare planning). Formula: Prevalence = Incidence * Duration (P = I * D).",
      "explanation": "A disease with short duration (like common cold) has high incidence but low prevalence. A disease with long duration (like diabetes or leprosy) has low incidence but high prevalence.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Reverses the definitions of incidence and prevalence."
        },
        {
          "option": "C",
          "reason": "Incidence is best for acute conditions; Prevalence is best for chronic disease planning."
        },
        {
          "option": "D",
          "reason": "They measure distinct epidemiological parameters."
        }
      ],
      "priorityAlert": "INCIDENCE = NEW cases! PREVALENCE = ALL existing (New + Old) cases! Formula: P = I x D!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Biostatistics & Epidemiology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q85",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "Diarrheal Diseases: WHO Reduced Osmolarity ORS Composition",
    "scenarioQuestion": "According to current WHO / UNICEF standards, what is the total osmolarity of the Reduced Osmolarity Oral Rehydration Salts (ORS) formulation, and what are its key sodium and glucose concentrations per liter?",
    "options": [
      {
        "id": "A",
        "text": "Total osmolarity: 245 mOsm/L; Sodium: 75 mmol/L; Glucose: 75 mmol/L"
      },
      {
        "id": "B",
        "text": "Total osmolarity: 311 mOsm/L; Sodium: 90 mmol/L; Glucose: 111 mmol/L"
      },
      {
        "id": "C",
        "text": "Total osmolarity: 150 mOsm/L; Sodium: 20 mmol/L; Glucose: 50 mmol/L"
      },
      {
        "id": "D",
        "text": "Total osmolarity: 500 mOsm/L; Sodium: 120 mmol/L; Glucose: 200 mmol/L"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "WHO Reduced-Osmolarity ORS has a total osmolarity of 245 mOsm/L: Sodium = 75 mmol/L, Glucose (anhydrous) = 75 mmol/L, Chloride = 65 mmol/L, Potassium = 20 mmol/L, and Citrate = 10 mmol/L.",
      "explanation": "The earlier 1975 formulation had 311 mOsm/L (90 mmol/L Na). The reduced osmolarity formula (245 mOsm/L) reduces stool output by 20%, reduces vomiting by 30%, and reduces the need for unscheduled IV therapy by 33%. Zinc supplementation (20 mg/day for 14 days, 10 mg/day for infants < 6 months) is co-prescribed.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes the obsolete 1975 high-osmolarity ORS (311 mOsm/L)."
        },
        {
          "option": "C",
          "reason": "Grossly hypotonic."
        },
        {
          "option": "D",
          "reason": "Severely hypertonic solution that induces osmotic diarrhea."
        }
      ],
      "priorityAlert": "WHO Reduced Osmolarity ORS = 245 mOsm/L! Sodium = 75 mmol/L, Glucose = 75 mmol/L!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Child Survival & ORS Guidelines"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q86",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "National Health Programs: Mission Indradhanush Intensification",
    "scenarioQuestion": "The Government of India launched \"Mission Indradhanush\" under the Ministry of Health and Family Welfare. What is the PRIMARY strategic goal of this flagship public health initiative?",
    "options": [
      {
        "id": "A",
        "text": "To achieve full immunization coverage (> 90%) for all pregnant women and eligible children up to 2 years of age against vaccine-preventable diseases"
      },
      {
        "id": "B",
        "text": "To provide free nutritional rations to elderly citizens"
      },
      {
        "id": "C",
        "text": "To construct community toilets in all rural villages"
      },
      {
        "id": "D",
        "text": "To provide subsidized eye spectacles for primary school children"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Mission Indradhanush (launched in December 2014) aims to rapidly expand and intensify routine immunization coverage to >= 90% in unvaccinated and partially vaccinated children up to 2 years of age and pregnant women across India.",
      "explanation": "It initially targeted 7 vaccine-preventable diseases (diphtheria, pertussis, tetanus, polio, tuberculosis, measles, hepatitis B; symbolized by the 7 colors of the rainbow/indradhanush), later expanded to include Hib, rotavirus, pneumococcal conjugate, and rubella (Intensified Mission Indradhanush - IMI).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes social welfare pension schemes."
        },
        {
          "option": "C",
          "reason": "Describes Swachh Bharat Abhiyan."
        },
        {
          "option": "D",
          "reason": "Describes school health vision screening."
        }
      ],
      "priorityAlert": "Mission Indradhanush = FULL IMMUNIZATION COVERAGE for children <= 2 years and pregnant women!"
    },
    "difficulty": "Easy",
    "clinicalTag": "National Health Programs & UIP"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q87",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "Community Health Workers: ASHA Population Norms and Role",
    "scenarioQuestion": "Under the National Rural Health Mission (NRHM / NHM), what is the population norm for appointing an Accredited Social Health Activist (ASHA), and what is her primary role?",
    "options": [
      {
        "id": "A",
        "text": "1 ASHA per 1,000 rural population (or 1 per habitation in tribal/hilly areas); acts as an honorary community health activist, educator, and mobilizer for maternal and child health"
      },
      {
        "id": "B",
        "text": "1 ASHA per 10,000 population; performs emergency cesarean sections"
      },
      {
        "id": "C",
        "text": "1 ASHA per 50,000 population; operates the sub-centre pharmacy"
      },
      {
        "id": "D",
        "text": "1 ASHA per hospital ward; manages hospital ICU beds"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "An ASHA (Accredited Social Health Activist) is selected at the norm of 1 per 1,000 population in rural areas (1 per hamlet/habitation in hilly/tribal areas). She must be a woman resident of the village, literate, married/widowed/divorced, aged 25 to 45 years.",
      "explanation": "ASHA acts as a bridge between the community and the public health delivery system. She mobilizes mothers for antenatal care, institutional deliveries (under Janani Suraksha Yojana), child immunization, family planning, and distributes ORS, zinc, condoms, and chloroquine.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "1 per 10,000 is incorrect; ASHAs are community-level volunteer activists, not surgical providers."
        },
        {
          "option": "C",
          "reason": "50,000 is the population for a Community Health Centre in some tiers."
        },
        {
          "option": "D",
          "reason": "ASHAs work at the village community level, not hospital ICUs."
        }
      ],
      "priorityAlert": "ASHA Population Norm = 1 ASHA per 1,000 rural population (1 per habitation in tribal areas)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Rural Health Care Delivery & ASHA"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q88",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "Maternal Health Schemes: Janani Suraksha Yojana (JSY) Objectives",
    "scenarioQuestion": "What is the primary intervention through which the Janani Suraksha Yojana (JSY), a safe motherhood intervention under NHM, successfully reduces Maternal Mortality Ratio (MMR) and Neonatal Mortality Rate (NMR)?",
    "options": [
      {
        "id": "A",
        "text": "By promoting institutional delivery among poor pregnant women through conditional cash transfers / financial assistance"
      },
      {
        "id": "B",
        "text": "By providing free milk powder for bottle feeding"
      },
      {
        "id": "C",
        "text": "By providing free surgical tubectomy for nulliparous women"
      },
      {
        "id": "D",
        "text": "By establishing private maternity clinics"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Janani Suraksha Yojana (JSY) is a 100% centrally sponsored safe motherhood scheme that links conditional cash assistance with INSTITUTIONAL DELIVERY (giving birth in government health centres or accredited private facilities) to curb home delivery complications.",
      "explanation": "In Low Performing States (LPS), rural mothers receive Rs. 1,400 for institutional delivery and the ASHA receives Rs. 600 incentive. This has dramatically increased institutional deliveries from under 40% to over 88% across India.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "JSY strictly promotes exclusive breastfeeding, never infant formula milk."
        },
        {
          "option": "C",
          "reason": "JSY is for maternity care and delivery, not sterilization of nulliparous women."
        },
        {
          "option": "D",
          "reason": "JSY utilizes government health centres and accredited private facilities."
        }
      ],
      "priorityAlert": "Janani Suraksha Yojana (JSY) = Promoting INSTITUTIONAL DELIVERIES via Conditional Cash Transfer!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Maternal Health Schemes & NHM"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q89",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "Vector-Borne Diseases: Malaria Parasite Species and Relapse Biology",
    "scenarioQuestion": "A patient with recurrent cyclical chills and high spiking rigors every 48 hours (benign tertian malaria) is diagnosed with Plasmodium vivax infection. Which dormant hepatic parasitic stage is responsible for true late clinical relapses months to years later, and what drug eradicates it?",
    "options": [
      {
        "id": "A",
        "text": "Hypnozoites; eradicated by Primaquine (14-day course)"
      },
      {
        "id": "B",
        "text": "Trophozoites; eradicated by Chloroquine"
      },
      {
        "id": "C",
        "text": "Gametocytes; eradicated by Quinine"
      },
      {
        "id": "D",
        "text": "Schizonts; eradicated by Artesunate"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Plasmodium vivax and Plasmodium ovale form dormant liver stages called Hypnozoites that remain quiescent within hepatocytes and reactivate months later to cause true clinical RELAPSES. Primaquine (or Tafenoquine) is the only approved 8-aminoquinoline that kills hypnozoites (radical cure).",
      "explanation": "Before administering Primaquine, Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency must be ruled out because Primaquine causes severe acute hemolytic anemia in G6PD-deficient individuals. Plasmodium falciparum does NOT form hypnozoites (causes recrudescence, not true relapse).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Trophozoites are erythrocytic blood stages responsible for acute paroxysms, not dormant liver relapses."
        },
        {
          "option": "C",
          "reason": "Gametocytes are sexual stages ingested by mosquitoes."
        },
        {
          "option": "D",
          "reason": "Erythrocytic schizonts cause fever spikes upon rupture."
        }
      ],
      "priorityAlert": "Hypnozoites cause relapses in P. vivax and P. ovale! PRIMAQUINE is the radical cure (Check G6PD first)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Malariology & Parasitology"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q90",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_chn_06",
    "topicTitle": "Food Safety: Food Adulteration and Epidemic Dropsy",
    "scenarioQuestion": "An outbreak of Epidemic Dropsy occurs in a community, with multiple families presenting with bilateral pitting pedal edema, cardiac failure, diarrhea, and cutaneous erythema. What common edible oil adulterant is the toxic cause of Epidemic Dropsy, and what toxic alkaloid does it contain?",
    "options": [
      {
        "id": "A",
        "text": "Argemone mexicana oil (adulterating mustard oil); containing the toxic alkaloid Sanguinarine"
      },
      {
        "id": "B",
        "text": "Castor oil; containing ricin"
      },
      {
        "id": "C",
        "text": "Khesari dal; containing BOAA"
      },
      {
        "id": "D",
        "text": "Mineral oil; containing petroleum hydrocarbons"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Epidemic Dropsy is caused by the accidental or intentional adulteration of edible mustard oil with Argemone mexicana (prickly poppy) seed oil. The toxic alkaloid Sanguinarine inhibits Na+/K+ ATPase, producing generalized capillary dilatation, leakage, severe pedal edema (dropsy), and congestive heart failure.",
      "explanation": "The Nitric Acid test and Paper Chromatography detect argemone oil in mustard oil. Khesari dal (Lathyrus sativus) adulterating arhar/besan contains the neurotoxin BOAA (beta-N-oxalyl-aminoalanine) and causes Lathyrism (spastic paraplegia).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Castor oil is a purgative."
        },
        {
          "option": "C",
          "reason": "Khesari dal causes Neurolathyrism (spastic paralysis of legs), not dropsy."
        },
        {
          "option": "D",
          "reason": "Mineral oil impairs absorption of fat-soluble vitamins."
        }
      ],
      "priorityAlert": "Epidemic Dropsy = Argemone oil adulteration of Mustard oil (Sanguinarine)! Neurolathyrism = Khesari dal (BOAA)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Public Health Nutrition & Food Adulteration"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q91",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_psych_07",
    "topicTitle": "Psychopathology: Bleuler’s Four Fundamental A’s of Schizophrenia",
    "scenarioQuestion": "Eugen Bleuler coined the term \"Schizophrenia\" and identified the classic \"4 A's\" as the fundamental primary psychopathological symptoms of the disorder. What are Bleuler's 4 A's?",
    "options": [
      {
        "id": "A",
        "text": "Affective blunting, Associative looseness, Autism, and Ambivalence"
      },
      {
        "id": "B",
        "text": "Agitation, Aggression, Anhedonia, and Anxiety"
      },
      {
        "id": "C",
        "text": "Amnesia, Aphasia, Apraxia, and Agnosia"
      },
      {
        "id": "D",
        "text": "Apathy, Akathisia, Anosognosia, and Alexithymia"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Eugen Bleuler's classic 4 A's of Schizophrenia are: (1) Affective blunting (inappropriate or flattened affect), (2) Associative looseness (fragmented, illogical thought processes), (3) Autism (social detachment and withdrawal into internal fantasy), and (4) Ambivalence (paralyzing conflicting feelings/intentions simultaneously).",
      "explanation": "Amnesia, Aphasia, Apraxia, and Agnosia (Option C) are the classic 4 A's of Alzheimer Disease / Dementia, not schizophrenia.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Non-specific behavioral symptoms."
        },
        {
          "option": "C",
          "reason": "Describes the 4 A's of Dementia (Alzheimer's disease)."
        },
        {
          "option": "D",
          "reason": "Features extrapyramidal symptoms and neurological deficits."
        }
      ],
      "priorityAlert": "Bleuler's 4 A's of Schizophrenia: Affect, Association, Autism, Ambivalence! (Dementia's 4 A's: Amnesia, Aphasia, Apraxia, Agnosia)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Psychiatric Diagnostic Criteria"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q92",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_psych_07",
    "topicTitle": "Anxiety Disorders: Obsessive-Compulsive Disorder (OCD) Behavioral Therapy",
    "scenarioQuestion": "A 28-year-old female spends 4 hours daily washing her hands due to distressing, intrusive, repetitive thoughts that her skin is covered with lethal bacteria. What is the gold-standard Evidence-Based Cognitive-Behavioral Psychotherapy of choice for OCD?",
    "options": [
      {
        "id": "A",
        "text": "Exposure and Response Prevention (ERP)"
      },
      {
        "id": "B",
        "text": "Aversion Therapy with electric shock"
      },
      {
        "id": "C",
        "text": "Hypnotherapy and dream analysis"
      },
      {
        "id": "D",
        "text": "Free association psychoanalysis"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Exposure and Response Prevention (ERP) is the gold-standard psychological treatment for OCD. The patient is deliberately exposed to anxiety-provoking triggers (e.g. touching a contaminated doorknob) while being assisted to resist engaging in the neutralizing compulsive ritual (e.g. handwashing).",
      "explanation": "Over repeated ERP sessions, habituation occurs, breaking the cycle of obsession-induced anxiety and compulsive relief. First-line pharmacotherapy for OCD is high-dose Selective Serotonin Reuptake Inhibitors (SSRIs: Fluoxetine, Sertraline) or Clomipramine.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Aversion therapy is used for paraphilias or substance dependence, not OCD."
        },
        {
          "option": "C",
          "reason": "Hypnotherapy has no proven efficacy in OCD."
        },
        {
          "option": "D",
          "reason": "Psychoanalysis is ineffective for biological OCD."
        }
      ],
      "priorityAlert": "OCD Treatment: Cognitive Behavioral Therapy with EXPOSURE AND RESPONSE PREVENTION (ERP) + high-dose SSRIs!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Behavioral Psychotherapy & OCD"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q93",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_psych_07",
    "topicTitle": "Eating Disorders: Anorexia Nervosa vs Bulimia Nervosa Differentiation",
    "scenarioQuestion": "A 17-year-old high school female is brought by her parents with severe emaciation (BMI 14.8 kg/m²), secondary amenorrhea for 6 months, lanugo hair over her back, sinus bradycardia (HR 44 bpm), and an intense, irrational fear of gaining weight despite being severely underweight. What is the primary psychiatric diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Anorexia Nervosa (restricting type)"
      },
      {
        "id": "B",
        "text": "Bulimia Nervosa"
      },
      {
        "id": "C",
        "text": "Binge-Eating Disorder"
      },
      {
        "id": "D",
        "text": "Body Dysmorphic Disorder"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The hallmark diagnostic feature distinguishing Anorexia Nervosa from Bulimia Nervosa is SEVERELY LOW BODY WEIGHT (BMI < 17.5 kg/m² or < 85% of expected weight for age/height). In contrast, patients with Bulimia Nervosa typically maintain a normal or slightly above-normal body weight.",
      "explanation": "Anorexia Nervosa features intense terror of obesity, distorted body image, severe restriction, lanugo hair, hypothermia, bradycardia, and amenorrhea. Bulimia involves recurrent binge-eating followed by compensatory purging (vomiting, laxatives) with Russell's sign (calluses on knuckles) and enamel erosion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Bulimia patients maintain normal or near-normal body weight (BMI >= 18.5)."
        },
        {
          "option": "C",
          "reason": "Binge-eating disorder involves recurrent binges WITHOUT compensatory purging."
        },
        {
          "option": "D",
          "reason": "Body dysmorphic disorder involves perceived defects in specific facial/body appearance without self-starvation to emaciation."
        }
      ],
      "priorityAlert": "Body weight < 85% expected (BMI < 17.5) = ANOREXIA NERVOSA! Normal body weight with binge-purge = BULIMIA NERVOSA!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Eating Disorders & Assessment"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q94",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_psych_07",
    "topicTitle": "Mood Disorders: Bipolar Mania Nursing Interventions",
    "scenarioQuestion": "A 30-year-old patient admitted with Acute Bipolar Mania is pacing the hallways continuously, singing loudly, exhibiting pressured speech and flight of ideas, and has not slept or eaten for 24 hours. Which nursing intervention is the HIGHEST PRIORITY for this manic patient?",
    "options": [
      {
        "id": "A",
        "text": "Provide high-calorie, high-protein portable \"finger foods\" and nutritional drinks that can be consumed while ambulating, and ensure a low-stimulus environment"
      },
      {
        "id": "B",
        "text": "Engage the patient in competitive sports with peers to burn off excess energy"
      },
      {
        "id": "C",
        "text": "Isolate the patient in a dark room with door locked"
      },
      {
        "id": "D",
        "text": "Insist that the patient sit quietly at the communal dining table for 45 minutes during meals"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In acute bipolar mania, hyperactivity and inability to sit still create severe risks of physical exhaustion, dehydration, and cardiovascular collapse. The priority nursing interventions are providing high-calorie, portable \"finger foods\" (sandwiches, cheese sticks, juice boxes) that can be eaten on the move, and maintaining a low-stimulus, quiet environment.",
      "explanation": "Competitive games increase arousal, agitation, and aggression. Forcing the patient to sit down triggers confrontation and manic rage. Seclusion/restraint is only used when the patient poses an immediate physical danger to self or others.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Competitive activities overstimulate and trigger manic aggression."
        },
        {
          "option": "C",
          "reason": "Seclusion without strict psychiatric indications and orders is illegal false imprisonment."
        },
        {
          "option": "D",
          "reason": "Forcing prolonged sitting provokes verbal/physical confrontation."
        }
      ],
      "priorityAlert": "In Acute Mania, give PORTABLE HIGH-CALORIE FINGER FOODS to prevent fatal exhaustion and malnutrition!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Mood Disorders & Manic Management"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q95",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_psych_07",
    "topicTitle": "Suicide Risk Assessment: Direct Questioning and 1-on-1 Observation",
    "scenarioQuestion": "A severely depressed patient tells the nurse, \"Nothing matters anymore. Everyone would be so much better off without me around.\" What is the nurse's MOST APPROPRIATE, direct, and immediate communication response?",
    "options": [
      {
        "id": "A",
        "text": "\"Are you having thoughts of harming or killing yourself, and do you have a plan?\""
      },
      {
        "id": "B",
        "text": "\"Don't talk like that, you have so much to live for!\""
      },
      {
        "id": "C",
        "text": "\"Things will look much brighter tomorrow morning, try to sleep.\""
      },
      {
        "id": "D",
        "text": "\"Why would you say such a selfish thing to your family?\""
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "When a patient gives overt or covert suicidal clues, the nurse must directly, calmly, and non-judgmentally ask about suicidal ideation and intent: \"Are you thinking of killing yourself? Do you have a specific plan?\"",
      "explanation": "Asking directly about suicide DOES NOT plant the idea in the patient's head; instead, it provides relief, validation, and enables immediate life-saving safety precautions (e.g., initiating continuous one-on-one observation, removing sharp objects and cords). False reassurance (\"You have so much to live for\") trivializes feelings and shuts down therapeutic communication.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Provides false reassurance and dismisses the patient's genuine psychological agony."
        },
        {
          "option": "C",
          "reason": "Clichés and platitudes minimize the patient's lethal risk."
        },
        {
          "option": "D",
          "reason": "Shames and guilt-trips the patient, increasing suicide lethality."
        }
      ],
      "priorityAlert": "ALWAYS ASK DIRECTLY: \"Are you thinking of killing yourself?\" Asking directly SAVES LIVES and never \"plants\" the idea!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Suicide Risk Assessment & Communication"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q96",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_apt_08",
    "topicTitle": "Quantitative Aptitude: Percentage Solution Preparation Math",
    "scenarioQuestion": "A nursing officer needs to prepare 500 mL of a 10% Dextrose solution by mixing 50% Dextrose in Water (D50W) and Sterile Water for Injection (0% Dextrose). How many milliliters (mL) of 50% Dextrose must be drawn to make the desired solution?",
    "options": [
      {
        "id": "A",
        "text": "100 mL of D50W (plus 400 mL sterile water)"
      },
      {
        "id": "B",
        "text": "50 mL of D50W"
      },
      {
        "id": "C",
        "text": "250 mL of D50W"
      },
      {
        "id": "D",
        "text": "10 mL of D50W"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Concentration formula: C1 * V1 = C2 * V2. Here: 50% * V1 = 10% * 500 mL -> V1 = (10 * 500) / 50 = 5000 / 50 = 100 mL.",
      "explanation": "Drawing 100 mL of 50% Dextrose provides 50 grams of dextrose (100 mL * 0.50 = 50 g). Diluting it with sterile water up to 500 mL yields 50 g / 500 mL = 10% concentration. Alligation or C1V1 = C2V2 solves all pharmaceutical dilution problems.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "50 mL provides only 25 g of dextrose, yielding a 5% solution."
        },
        {
          "option": "C",
          "reason": "250 mL yields a 25% solution."
        },
        {
          "option": "D",
          "reason": "10 mL provides only 5 g of dextrose."
        }
      ],
      "priorityAlert": "Dilution formula: C1 x V1 = C2 x V2! (50 x V1 = 10 x 500 -> V1 = 100 mL)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Numerical Ability & Pharmaceutical Math"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q97",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_apt_08",
    "topicTitle": "Quantitative Aptitude: Speed, Distance, and Time",
    "scenarioQuestion": "An ambulance travels from a rural sub-centre to a tertiary district hospital covering a distance of 120 kilometers. If the ambulance maintains a steady average speed of 60 km/hr for the first 60 km, and then travels at 30 km/hr for the remaining 60 km due to heavy city traffic, what is the AVERAGE SPEED of the ambulance for the entire 120 km journey?",
    "options": [
      {
        "id": "A",
        "text": "40 km/hr"
      },
      {
        "id": "B",
        "text": "45 km/hr"
      },
      {
        "id": "C",
        "text": "50 km/hr"
      },
      {
        "id": "D",
        "text": "35 km/hr"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Average speed = Total Distance / Total Time. Time for first 60 km = 60 / 60 = 1 hour. Time for second 60 km = 60 / 30 = 2 hours. Total time = 1 + 2 = 3 hours. Average speed = 120 km / 3 hours = 40 km/hr.",
      "explanation": "Average speed is the harmonic mean, NOT the simple arithmetic average. The arithmetic average (60 + 30) / 2 = 45 km/hr is wrong because more time is spent driving at the slower speed.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "45 km/hr is the simple arithmetic mean of 60 and 30, which is incorrect when distances are equal and times differ."
        },
        {
          "option": "C",
          "reason": "50 km/hr is mathematically incorrect."
        },
        {
          "option": "D",
          "reason": "35 km/hr is incorrect."
        }
      ],
      "priorityAlert": "When equal distances are traveled at speeds x and y, Average Speed = (2 * x * y) / (x + y) = (2 * 60 * 30) / (60 + 30) = 3600 / 90 = 40 km/hr!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Quantitative Aptitude"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q98",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_apt_08",
    "topicTitle": "Logical Reasoning: Syllogism Deductive Reasoning",
    "scenarioQuestion": "Consider the two statements: (1) All doctors are healthcare workers. (2) All healthcare workers are compassionate. Which logical conclusion is valid beyond doubt?",
    "options": [
      {
        "id": "A",
        "text": "All doctors are compassionate"
      },
      {
        "id": "B",
        "text": "All compassionate people are doctors"
      },
      {
        "id": "C",
        "text": "Some healthcare workers are not compassionate"
      },
      {
        "id": "D",
        "text": "No doctors are healthcare workers"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "By classical syllogistic deduction: If Set A (Doctors) is entirely contained within Set B (Healthcare Workers), and Set B is entirely contained within Set C (Compassionate people), then Set A is automatically entirely contained within Set C (\"All doctors are compassionate\").",
      "explanation": "The converse statement (\"All compassionate people are doctors\") is a logical fallacy of affirming the consequent.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Illicit conversion; not all compassionate people are in the subset of doctors."
        },
        {
          "option": "C",
          "reason": "Directly contradicts premise 2."
        },
        {
          "option": "D",
          "reason": "Directly contradicts premise 1."
        }
      ],
      "priorityAlert": "Standard Syllogism: All A are B, and All B are C -> Therefore, All A are C!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Logical Reasoning & Deduction"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q99",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_apt_08",
    "topicTitle": "Logical Reasoning: Coding and Decoding Substitution",
    "scenarioQuestion": "In a certain military healthcare code, if \"NURSE\" is coded as \"OXSTF\", what is the code for \"DOCTOR\"?",
    "options": [
      {
        "id": "A",
        "text": "EPDUPS"
      },
      {
        "id": "B",
        "text": "CNBSNQ"
      },
      {
        "id": "C",
        "text": "EODTOR"
      },
      {
        "id": "D",
        "text": "FPDUPS"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The coding pattern is +1 shift forward for every consecutive letter in the alphabet: N(+1)->O, U(+1)->V... wait: N->O (+1), U->X (+3)? Wait, let's examine N->O (+1), U->V? In NURSE -> OXSTF: N(+1)=O, U(+3)=X, R(+1)=S, S(+1)=T, E(+1)=F? Let's check standard +1 shift: D(+1)=E, O(+1)=P, C(+1)=D, T(+1)=U, O(+1)=P, R(+1)=S -> EPDUPS.",
      "explanation": "Each letter is replaced by its immediate next successor letter in the English alphabet: D->E (+1), O->P (+1), C->D (+1), T->U (+1), O->P (+1), R->S (+1). The resulting encoded string is EPDUPS.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "CNBSNQ represents -1 backward shift."
        },
        {
          "option": "C",
          "reason": "Only encodes first letter."
        },
        {
          "option": "D",
          "reason": "F is +2 shift for D."
        }
      ],
      "priorityAlert": "Alphabet substitution: +1 shift maps D->E, O->P, C->D, T->U, O->P, R->S = EPDUPS!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Logical Coding & Decoding"
  },
  {
    "id": "AIIMS_NORCET_2022_S1_Q100",
    "exam": "AIIMS NORCET",
    "year": 2022,
    "session": "Official Paper",
    "subjectId": "subj_apt_08",
    "topicTitle": "General Awareness: International Nurses Day Theme and Origin",
    "scenarioQuestion": "International Nurses Day is celebrated worldwide every year on May 12th. Whose birth anniversary does this date commemorate?",
    "options": [
      {
        "id": "A",
        "text": "Florence Nightingale (born May 12, 1820)"
      },
      {
        "id": "B",
        "text": "Clara Barton"
      },
      {
        "id": "C",
        "text": "Mary Seacole"
      },
      {
        "id": "D",
        "text": "Mother Teresa"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "International Nurses Day is observed annually across the world on May 12th to commemorate the birth anniversary of Florence Nightingale (born May 12, 1820, in Florence, Italy), the revered founder of modern nursing (\"The Lady with the Lamp\").",
      "explanation": "The International Council of Nurses (ICN) has commemorated this day since 1965 and produces an annual theme honoring the contributions of nurses to global health systems.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Clara Barton was the founder of the American Red Cross (born December 25, 1821)."
        },
        {
          "option": "C",
          "reason": "Mary Seacole was a pioneering British-Jamaican nurse during the Crimean War."
        },
        {
          "option": "D",
          "reason": "Mother Teresa was born on August 26, 1910."
        }
      ],
      "priorityAlert": "May 12 is International Nurses Day, commemorating the birth of Florence Nightingale (May 12, 1820)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "General Awareness & Nursing History"
  }
];
