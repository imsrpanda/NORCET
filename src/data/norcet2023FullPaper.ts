import { PYQQuestion } from '../types';

export const NORCET_2023_STAGE1_100Q: PYQQuestion[] = [
  {
    "id": "AIIMS_NORCET_2023_S1_Q01",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiology: Acute Coronary Syndrome Biomarker Kinetics",
    "scenarioQuestion": "A 55-year-old male arrives at the emergency department with substernal crushing chest pain radiating to the left arm for 3 hours. Which cardiac biomarker is the MOST sensitive and specific gold standard for diagnosing acute myocardial infarction, and when does it first elevate in serum?",
    "options": [
      {
        "id": "A",
        "text": "Cardiac Troponin I (cTnI); elevates within 3 to 4 hours, peaks at 24 hours, and remains elevated for up to 10 to 14 days"
      },
      {
        "id": "B",
        "text": "Myoglobin; elevates at 12 hours and remains elevated for 30 days"
      },
      {
        "id": "C",
        "text": "Creatine Kinase-MB (CK-MB); elevates after 48 hours only"
      },
      {
        "id": "D",
        "text": "Lactate Dehydrogenase (LDH); elevates in 30 minutes"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Cardiac Troponin I (cTnI) and Troponin T (cTnT) are the gold-standard biomarkers of myocardial necrosis due to superior cardiac tissue specificity. They rise within 3–4 hours and persist for up to 10–14 days.",
      "explanation": "Myoglobin is the earliest marker (rises within 1–2 hours) but lacks cardiac specificity. CK-MB rises in 4–6 hours and returns to baseline in 48–72 hours (useful for re-infarction). Troponins remain the definitive diagnostic gold standard.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Myoglobin rises early (1-2 hours) and disappears rapidly within 24 hours."
        },
        {
          "option": "C",
          "reason": "CK-MB rises within 4 to 6 hours, not 48 hours."
        },
        {
          "option": "D",
          "reason": "LDH is a late non-specific marker that elevates after 24 to 48 hours."
        }
      ],
      "priorityAlert": "CK-MB is the biomarker of choice for detecting RE-INFARCTION because it clears within 48–72 hours, whereas Troponins stay elevated for 2 weeks!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Myocardial Infarction Biomarkers"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q02",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Emergency: Ventricular Fibrillation Defibrillation Energy Levels",
    "scenarioQuestion": "A telemetry monitor displays coarse Ventricular Fibrillation (VF) in an unconscious patient with no carotid pulse. CPR is in progress and a biphasic defibrillator arrives. What is the recommended initial defibrillation energy dose?",
    "options": [
      {
        "id": "A",
        "text": "50 Joules synchronized"
      },
      {
        "id": "B",
        "text": "120 to 200 Joules unsynchronized (or manufacturer recommended maximum)"
      },
      {
        "id": "C",
        "text": "360 Joules synchronized"
      },
      {
        "id": "D",
        "text": "20 Joules monophasic"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "For pulseless VT and Ventricular Fibrillation, initial shock with a biphasic defibrillator is 120 to 200 Joules unsynchronized. For monophasic defibrillators, it is 360 Joules.",
      "explanation": "Defibrillation in cardiac arrest is always unsynchronized (asynchronous) because no organized QRS complexes exist. Synchronized cardioversion is reserved for unstable tachyarrhythmias with a pulse (AF, VT with pulse, SVT).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "50 Joules synchronized is used for atrial flutter or SVT, not pulseless VF arrest."
        },
        {
          "option": "C",
          "reason": "Synchronized mode will refuse to fire in VF because the device cannot detect an R-wave."
        },
        {
          "option": "D",
          "reason": "20 Joules is subtherapeutic."
        }
      ],
      "priorityAlert": "Never use \"Sync\" mode in Ventricular Fibrillation! The machine will search for an R-wave that does not exist and will never deliver the shock!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "ACLS Resuscitation Protocols"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q03",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Emergency: Anaphylactic Shock First-Line Pharmacotherapy",
    "scenarioQuestion": "A patient receiving IV Ceftriaxone develops sudden stridor, wheezing, diffuse urticaria, periorbital angioedema, and a blood pressure drop to 76/42 mmHg. What is the nurse's IMMEDIATE first-line lifesaving medication?",
    "options": [
      {
        "id": "A",
        "text": "Oral Diphenhydramine 50 mg"
      },
      {
        "id": "B",
        "text": "Intramuscular Epinephrine (1:1000) 0.5 mg in the anterolateral thigh"
      },
      {
        "id": "C",
        "text": "Intravenous Hydrocortisone 100 mg push"
      },
      {
        "id": "D",
        "text": "Subcutaneous Glucagon 1 mg"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Intramuscular Epinephrine (1:1000 concentration, 0.3 to 0.5 mg in adults) injected into the anterolateral vastus lateralis thigh is the absolute FIRST-LINE drug of choice in anaphylaxis.",
      "explanation": "Epinephrine stimulates alpha-1 receptors (vasoconstriction, raises BP, reduces mucosal edema), beta-1 receptors (increases cardiac output), and beta-2 receptors (bronchodilation and halts mast cell degranulation). Antihistamines and corticosteroids are second-line adjuncts that do not reverse acute airway spasm or shock.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Oral drugs cannot be given during airway compromise, and antihistamines are second-line."
        },
        {
          "option": "C",
          "reason": "Hydrocortisone takes 4 to 6 hours to work; it prevents biphasic relapse but cannot treat acute collapse."
        },
        {
          "option": "D",
          "reason": "Glucagon is used only in anaphylactic patients refractory to epinephrine who are taking beta-blockers."
        }
      ],
      "priorityAlert": "Intramuscular (IM) injection in the vastus lateralis achieves higher and faster plasma concentrations than subcutaneous injection!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Anaphylaxis Management"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q04",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Acute Ischemic Stroke IV rtPA (Alteplase) Eligibility Window",
    "scenarioQuestion": "A 64-year-old male presents to the stroke unit with acute right-sided hemiplegia and expressive aphasia. Non-contrast cranial CT rules out intracranial hemorrhage. In accordance with AHA/ASA guidelines, within what time window from \"last known well\" must intravenous Alteplase (rtPA) be initiated?",
    "options": [
      {
        "id": "A",
        "text": "Within 3 to 4.5 hours of symptom onset"
      },
      {
        "id": "B",
        "text": "Within 12 to 24 hours of symptom onset"
      },
      {
        "id": "C",
        "text": "Within 48 hours of hospital admission"
      },
      {
        "id": "D",
        "text": "Only after 6 hours to allow collateral circulation"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Intravenous recombinant tissue plasminogen activator (rtPA / Alteplase 0.9 mg/kg) must be administered within 3 to 4.5 hours of symptom onset (\"last known well\") in eligible ischemic stroke patients.",
      "explanation": "Beyond 4.5 hours, the risk of symptomatic intracerebral hemorrhage drastically outweighs the benefits of salvaging ischemic penumbra. Blood pressure must be lowered below 185/110 mmHg before initiating rtPA, and maintained < 180/105 mmHg for 24 hours.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Beyond 4.5 hours, IV rtPA is contraindicated due to lethal hemorrhagic transformation risk."
        },
        {
          "option": "C",
          "reason": "48 hours is far outside any therapeutic reperfusion window."
        },
        {
          "option": "D",
          "reason": "Every minute of delay results in the loss of 1.9 million neurons (\"Time is Brain\")."
        }
      ],
      "priorityAlert": "Do NOT insert nasogastric tubes, indwelling urinary catheters, or arterial lines for 24 hours post-rtPA to prevent severe internal bleeding!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Acute Stroke Protocol"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q05",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Increased Intracranial Pressure (ICP) Positioning",
    "scenarioQuestion": "A patient with severe traumatic brain injury has an intracranial pressure monitoring catheter displaying an ICP of 24 mmHg (normal < 15 mmHg). In which position should the critical care nurse position the patient to optimize cerebral venous outflow?",
    "options": [
      {
        "id": "A",
        "text": "Flat supine position with bilateral knee flexion"
      },
      {
        "id": "B",
        "text": "Head of bed elevated 30 degrees with head and neck maintained in neutral midline alignment"
      },
      {
        "id": "C",
        "text": "Left lateral Trendelenburg position"
      },
      {
        "id": "D",
        "text": "Prone position with neck rotated 45 degrees to the right"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Elevating the head of the bed 30 degrees while keeping the head and neck in neutral midline alignment promotes jugular venous drainage by gravity, effectively lowering intracranial pressure.",
      "explanation": "Neck flexion, hyperextension, or extreme rotation compresses the internal jugular veins, obstructing venous return from the brain and dramatically raising ICP. Extreme hip flexion (>90°) increases intra-abdominal and intrathoracic pressure, similarly impeding cerebral venous drainage.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Flat supine position increases intracranial blood volume and raises ICP."
        },
        {
          "option": "C",
          "reason": "Trendelenburg position is strictly contraindicated because it causes acute venous engorgement and brain herniation."
        },
        {
          "option": "D",
          "reason": "Neck rotation obstructs jugular outflow and spikes ICP."
        }
      ],
      "priorityAlert": "Never flex the patient's hips past 90 degrees or rotate the neck — jugular compression causes an immediate dangerous spike in ICP!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neurotrauma Nursing Interventions"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q06",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrine: Diabetic Ketoacidosis (DKA) Initial Fluid Resuscitation",
    "scenarioQuestion": "A 21-year-old with Type 1 Diabetes is admitted in Diabetic Ketoacidosis with blood glucose 580 mg/dL, arterial pH 7.15, serum potassium 5.2 mEq/L, and signs of severe dehydration. What is the nurse's FIRST priority intervention?",
    "options": [
      {
        "id": "A",
        "text": "Administer an immediate IV bolus of Regular Insulin 20 units"
      },
      {
        "id": "B",
        "text": "Initiate rapid intravenous hydration with 0.9% Normal Saline (1000–1500 mL/hr)"
      },
      {
        "id": "C",
        "text": "Infuse 50 mEq of Potassium Chloride IV push"
      },
      {
        "id": "D",
        "text": "Administer 50% Dextrose 50 mL IV push"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The immediate first priority in DKA is rapid volume resuscitation with 0.9% Normal Saline (1 to 1.5 L in the first hour) to restore intravascular volume and renal perfusion before starting insulin.",
      "explanation": "DKA patients suffer profound osmotic diuresis leading to an average fluid deficit of 5 to 8 liters. Giving insulin without prior volume expansion causes rapid extracellular fluid shifts into cells, precipitating vascular collapse and hypovolemic shock.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Insulin without prior fluid resuscitation causes acute vascular collapse and fatal hypokalemia."
        },
        {
          "option": "C",
          "reason": "KCl must never be given IV push (instant arrest) and K+ is already 5.2 mEq/L."
        },
        {
          "option": "D",
          "reason": "Dextrose is added only when blood glucose drops below 200–250 mg/dL to prevent hypoglycemia and cerebral edema."
        }
      ],
      "priorityAlert": "When blood glucose reaches 200–250 mg/dL in DKA, switch IV fluids to 5% Dextrose with 0.45% Saline to prevent rapid cerebral edema!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Diabetic Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q07",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Pulmonary: Acute Asthma Exacerbation Peak Flow & First-Line Therapy",
    "scenarioQuestion": "A 28-year-old female presents to the casualty with severe acute asthma exacerbation. Her Peak Expiratory Flow Rate (PEFR) is 45% of personal best (Red Zone). Auscultation reveals severe bilateral expiratory wheezes and prolonged expiration. Which inhaled medication is the FIRST-LINE rescue agent?",
    "options": [
      {
        "id": "A",
        "text": "Inhaled Fluticasone propionate"
      },
      {
        "id": "B",
        "text": "Inhaled Short-Acting Beta-2 Agonist (Salbutamol / Albuterol nebulization)"
      },
      {
        "id": "C",
        "text": "Oral Montelukast"
      },
      {
        "id": "D",
        "text": "Subcutaneous Omalizumab"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Short-Acting Beta-2 Agonists (SABAs such as Salbutamol / Albuterol) administered via nebulizer are the first-line bronchodilators for acute asthma exacerbation.",
      "explanation": "Salbutamol rapidly stimulates bronchial smooth muscle beta-2 receptors, increasing intracellular cyclic AMP and causing smooth muscle relaxation within 5 minutes. Inhaled corticosteroids (Fluticasone) and leukotriene receptor antagonists (Montelukast) are maintenance drugs that cannot relieve acute bronchospasm.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Inhaled steroids treat chronic airway inflammation, not acute bronchospasm."
        },
        {
          "option": "C",
          "reason": "Montelukast is an oral maintenance controller medication."
        },
        {
          "option": "D",
          "reason": "Omalizumab is a monoclonal anti-IgE antibody for chronic allergic asthma."
        }
      ],
      "priorityAlert": "Silent Chest Warning: In acute severe asthma, the sudden disappearance of wheezing accompanied by fatigue is a sign of impending respiratory arrest due to air movement failure!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Asthma Management"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q08",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Abdominal Paracentesis Nursing Safeguards",
    "scenarioQuestion": "A patient with decompensated alcoholic cirrhosis and tense refractory ascites is scheduled for a 5-liter therapeutic abdominal paracentesis. Which nursing action is ESSENTIAL immediately prior to the procedure to prevent accidental visceral trauma?",
    "options": [
      {
        "id": "A",
        "text": "Instruct the patient to void completely or empty the bladder"
      },
      {
        "id": "B",
        "text": "Administer an immediate tap water cleansing enema"
      },
      {
        "id": "C",
        "text": "Place the patient in a prone Trendelenburg position"
      },
      {
        "id": "D",
        "text": "Infuse 2 units of Packed Red Blood Cells"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The patient must completely empty their urinary bladder (voiding or via urinary catheter) immediately prior to paracentesis to prevent accidental trocar puncture of a distended bladder.",
      "explanation": "A distended bladder ascends out of the true pelvis into the lower abdominal cavity, directly in the path of the paracentesis trocar inserted in the midline or lower quadrant. Voiding collapses the bladder into the pelvic floor. The patient is placed in semi-Fowler's or upright sitting position.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Enemas are not indicated and risk bowel perforation."
        },
        {
          "option": "C",
          "reason": "The patient must be seated upright or semi-Fowler's to allow fluid to accumulate in lower abdomen by gravity."
        },
        {
          "option": "D",
          "reason": "Post-procedure IV Albumin (6–8 g per liter of ascites removed) is given to prevent circulatory dysfunction, not PRBC."
        }
      ],
      "priorityAlert": "Post-paracentesis: Monitor blood pressure closely for post-paracentesis circulatory dysfunction (PCD) and administer IV Albumin as ordered!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Ascites & Paracentesis"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q09",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Renal: Acute Post-Streptococcal Glomerulonephritis (APSGN) Presentation",
    "scenarioQuestion": "A 10-year-old child presents 2 weeks after recovering from a Group A beta-hemolytic streptococcal pharyngitis. The mother notes the child's face is puffy around the eyes in the morning and his urine is dark \"tea-colored\" or smoky. What is the underlying pathophysiology of the smoky urine?",
    "options": [
      {
        "id": "A",
        "text": "Massive proteinuria causing urinary foam"
      },
      {
        "id": "B",
        "text": "Hematuria and red blood cell casts resulting from immune-complex mediated glomerular capillary basement membrane destruction"
      },
      {
        "id": "C",
        "text": "Bilirubinuria due to acute hepatic failure"
      },
      {
        "id": "D",
        "text": "Myoglobinuria caused by rhabdomyolysis"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Smoky, cola-colored, or tea-colored urine in APSGN is caused by gross hematuria and Dysmorphic Red Blood Cells / RBC Casts leaking through inflamed glomerular basement membranes.",
      "explanation": "Antigen-antibody immune complexes deposit in the glomerular mesangium and subepithelial spaces, activating complement (low serum C3). Glomerular capillary wall damage allows erythrocytes to leak into tubular fluid, where acidity oxidizes hemoglobin into dark brown methemoglobin.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Proteinuria causes frothy urine, but the dark cola color is from RBCs and methemoglobin."
        },
        {
          "option": "C",
          "reason": "Bilirubinuria is absent; liver enzymes are normal."
        },
        {
          "option": "D",
          "reason": "Myoglobinuria occurs after massive muscle crush injury."
        }
      ],
      "priorityAlert": "APSGN Triad: Hematuria (tea-colored), Periorbital Edema, and Hypertension! ASO (Antistreptolysin O) titer confirms recent streptococcal infection."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Nephrology & Glomerular Diseases"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q10",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Critical Care: Tracheostomy Cuff Pressure Monitoring",
    "scenarioQuestion": "A patient in the intensive care unit has a cuffed tracheostomy tube connected to a mechanical ventilator. To maintain an adequate seal without causing ischemic necrosis of the tracheal mucosal capillary bed, what is the recommended tracheostomy cuff pressure range?",
    "options": [
      {
        "id": "A",
        "text": "5 to 10 cmH2O"
      },
      {
        "id": "B",
        "text": "20 to 25 cmH2O (or 14 to 18 mmHg)"
      },
      {
        "id": "C",
        "text": "35 to 45 cmH2O"
      },
      {
        "id": "D",
        "text": "50 to 60 cmH2O"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The safe tracheostomy/endotracheal cuff pressure range is 20 to 25 cmH2O (equivalent to 14 to 18 mmHg). Pressure must not exceed 25 cmH2O.",
      "explanation": "Normal tracheal mucosal capillary perfusion pressure is approximately 25 to 30 cmH2O (18 to 22 mmHg). Cuff pressures exceeding 25–30 cmH2O compress capillaries, producing mucosal ischemia, ulceration, chondritis, and eventual tracheomalacia or tracheoesophageal fistula.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "5 to 10 cmH2O is too low to prevent air leak and aspiration of oral secretions."
        },
        {
          "option": "C",
          "reason": "35 to 45 cmH2O exceeds capillary perfusion pressure and causes tracheal necrosis."
        },
        {
          "option": "D",
          "reason": "50 to 60 cmH2O causes rapid tracheal wall necrosis and fistula formation."
        }
      ],
      "priorityAlert": "Measure cuff pressure with a calibrated cuff manometer at least every 8 to 12 hours and after any re-positioning!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Airway Management"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q11",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Critical Care: Chest Drainage Water-Seal Chamber Bubbling",
    "scenarioQuestion": "A patient with a left pneumothorax has a 3-chamber water-seal chest tube drainage system. During the nursing assessment, the nurse notes continuous, vigorous bubbling in the WATER-SEAL chamber. What does this finding indicate?",
    "options": [
      {
        "id": "A",
        "text": "Normal, expected finding confirming effective negative suction"
      },
      {
        "id": "B",
        "text": "An air leak in the drainage system or pleural space that requires immediate localization"
      },
      {
        "id": "C",
        "text": "Complete resolution and healing of the pneumothorax"
      },
      {
        "id": "D",
        "text": "Catastrophic rupture of the lung parenchyma requiring immediate clamping"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "CONTINUOUS bubbling in the Water-Seal Chamber indicates an air leak in the chest tube drainage system or persistent pleural air leak. Bubbling in the Suction Control chamber is normal.",
      "explanation": "Intermittent bubbling in the water-seal chamber during exhalation or coughing is normal as air leaves the pneumothorax. However, continuous bubbling indicates air is being sucked into the closed system. The nurse checks connections, dressing, and briefly cross-clamps near insertion to isolate the leak.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Continuous bubbling is normal in the SUCTION CONTROL chamber, NOT the water-seal chamber."
        },
        {
          "option": "C",
          "reason": "Resolution of pneumothorax is indicated by absence of bubbling and lung expansion on X-ray."
        },
        {
          "option": "D",
          "reason": "Routine clamping of chest tubes is contraindicated because it triggers tension pneumothorax."
        }
      ],
      "priorityAlert": "Never routinely clamp a chest tube! Clamping traps air in the pleural space, causing immediate life-threatening Tension Pneumothorax."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Chest Tube Management"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q12",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Bacterial Meningitis Meningeal Irritation Signs",
    "scenarioQuestion": "A 24-year-old student is admitted with suspected acute bacterial meningitis. When the nurse flexes the patient's neck forward toward the chest, the patient involuntarily flexes both hips and knees. How should the nurse document this classical physical finding?",
    "options": [
      {
        "id": "A",
        "text": "Kernig's sign"
      },
      {
        "id": "B",
        "text": "Brudzinski's sign"
      },
      {
        "id": "C",
        "text": "Babinski's reflex"
      },
      {
        "id": "D",
        "text": "Romberg's sign"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Brudzinski's sign: Involuntary flexion of the hips and knees triggered by passive forward flexion of the patient's neck, indicating meningeal irritation.",
      "explanation": "Kernig's sign is the inability to completely extend the leg when the hip is flexed at 90 degrees due to severe hamstring spasm. Both Kernig's and Brudzinski's signs confirm acute meningeal irritation in bacterial meningitis or subarachnoid hemorrhage.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Kernig's sign involves pain/resistance on passive knee extension when hip is at 90 degrees."
        },
        {
          "option": "C",
          "reason": "Babinski reflex is dorsiflexion of great toe indicating upper motor neuron lesion."
        },
        {
          "option": "D",
          "reason": "Romberg test evaluates sensory ataxia and dorsal column proprioception."
        }
      ],
      "priorityAlert": "Mnemonic: Brudzinski = Bends knees when neck bends! Kernig = Knee cannot extend!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Meningitis Assessment"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q13",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Peptic Ulcer Disease Gastric vs Duodenal Differential",
    "scenarioQuestion": "A 42-year-old male complains of gnawing epigastric pain that awakens him at 2:00 AM. He reports that eating food, drinking milk, or taking antacids provides immediate pain relief for 2 to 3 hours, after which the pain returns. Which condition is most consistent with this history?",
    "options": [
      {
        "id": "A",
        "text": "Gastric Ulcer"
      },
      {
        "id": "B",
        "text": "Duodenal Ulcer"
      },
      {
        "id": "C",
        "text": "Acute Cholecystitis"
      },
      {
        "id": "D",
        "text": "Acute Pancreatitis"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Duodenal ulcer pain occurs 2 to 4 hours after meals or in the middle of the night (empty stomach) and is RELIEVED by food or antacids (\"Food-Pain Relief-Pain pattern\").",
      "explanation": "In Duodenal ulcers, food buffers gastric acid entering the duodenum, providing temporary relief. In Gastric ulcers, eating triggers immediate acid secretion, causing pain within 30 to 60 minutes after meals (\"Food-Pain pattern\"), leading to weight loss due to food avoidance.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Gastric ulcer pain is aggravated by food and occurs 30-60 minutes after meals."
        },
        {
          "option": "C",
          "reason": "Cholecystitis pain worsens after fatty meals and radiates to the right shoulder."
        },
        {
          "option": "D",
          "reason": "Pancreatitis pain is severe, constant, radiates to the back, and worsens with eating."
        }
      ],
      "priorityAlert": "H. pylori eradication triple therapy: Proton Pump Inhibitor (Omeprazole) + Clarithromycin + Amoxicillin for 14 days!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Gastrointestinal Disorders"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q14",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrine: Pheochromocytoma 5 Ps & Paroxysmal Hypertension",
    "scenarioQuestion": "A patient with an adrenal medullary tumor (Pheochromocytoma) experiences episodes of severe paroxysmal hypertension (BP 230/120 mmHg), pounding headache, profuse sweating, and palpitations. Which nursing action is STRICTLY CONTRAINDICATED during the physical assessment?",
    "options": [
      {
        "id": "A",
        "text": "Continuous non-invasive blood pressure monitoring"
      },
      {
        "id": "B",
        "text": "Deep palpation of the patient's abdomen"
      },
      {
        "id": "C",
        "text": "Collecting a 24-hour urine specimen for vanillylmandelic acid (VMA)"
      },
      {
        "id": "D",
        "text": "Administering prescribed alpha-adrenergic blockers (Phenoxybenzamine)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Deep abdominal palpation in suspected or confirmed Pheochromocytoma is STRICTLY CONTRAINDICATED because mechanical compression of the tumor induces massive release of catecholamines, precipitating a lethal hypertensive crisis.",
      "explanation": "Pheochromocytoma secretes excessive epinephrine and norepinephrine. Palpation or abdominal trauma triggers sudden release, causing encephalopathy, acute pulmonary edema, aortic dissection, or stroke. Alpha-blockers (Phenoxybenzamine) must always precede beta-blockers before surgery.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Continuous BP monitoring is essential."
        },
        {
          "option": "C",
          "reason": "24-hr urinary metanephrines and VMA are diagnostic tests."
        },
        {
          "option": "D",
          "reason": "Alpha-blockade is mandatory prior to surgery."
        }
      ],
      "priorityAlert": "Never administer beta-blockers alone in Pheochromocytoma without prior alpha-blockade! Unopposed alpha-stimulation produces fatal hypertensive crisis."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Endocrine Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q15",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Acute Pancreatitis Diagnostic Enzyme Specificity",
    "scenarioQuestion": "A patient is admitted with suspected acute pancreatitis. The physician orders serum amylase and serum lipase. Why is Serum Lipase preferred over Serum Amylase as the clinical diagnostic biomarker of choice?",
    "options": [
      {
        "id": "A",
        "text": "Lipase elevates within 1 minute of pain onset and disappears within 2 hours"
      },
      {
        "id": "B",
        "text": "Lipase is synthesized exclusively by the pancreas, has higher specificity, and remains elevated for 8 to 14 days compared to amylase which normalizes in 48 to 72 hours"
      },
      {
        "id": "C",
        "text": "Lipase is secreted primarily by the parotid salivary glands"
      },
      {
        "id": "D",
        "text": "Serum amylase is never elevated in pancreatitis"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Serum Lipase is superior to Amylase for diagnosing acute pancreatitis because it is produced almost exclusively by the pancreas (higher specificity) and remains elevated for up to 8–14 days, whereas amylase normalizes within 48–72 hours.",
      "explanation": "Amylase is also produced by salivary glands, ovaries, and fallopian tubes (elevated in mumps, ectopic pregnancy, renal failure). Lipase provides greater diagnostic accuracy, especially in patients presenting several days after symptom onset.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Lipase rises within 4 to 8 hours and persists for up to two weeks."
        },
        {
          "option": "C",
          "reason": "Amylase is secreted by salivary glands, not lipase."
        },
        {
          "option": "D",
          "reason": "Amylase is elevated in acute pancreatitis, but less specific."
        }
      ],
      "priorityAlert": "Diagnosis of Acute Pancreatitis requires at least 2 of 3 criteria: 1) Characteristic epigastric pain, 2) Serum lipase/amylase ≥ 3x upper limit of normal, 3) Characteristic CT/MRI findings."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pancreatic Biomarkers"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q16",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Pulmonary: Chronic Bronchitis vs Emphysema (Pursed-Lip Breathing)",
    "scenarioQuestion": "A 66-year-old male with severe pulmonary emphysema (\"Pink Puffer\") is taught pursed-lip breathing by the respiratory nurse. What is the physiological mechanism by which pursed-lip breathing benefits patients with emphysema?",
    "options": [
      {
        "id": "A",
        "text": "It increases the respiratory rate to blow off excess carbon dioxide"
      },
      {
        "id": "B",
        "text": "It creates positive end-expiratory pressure in the airways, preventing premature bronchiolar collapse during exhalation and reducing air trapping"
      },
      {
        "id": "C",
        "text": "It increases inspiratory capacity by forcing rapid diaphragmatic descent"
      },
      {
        "id": "D",
        "text": "It eliminates the need for supplemental oxygen therapy completely"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Pursed-lip breathing maintains positive back-pressure within the bronchial tree during expiration, keeping floppy, elastolytic airways splinted open and preventing air trapping in emphysema.",
      "explanation": "In emphysema, destruction of alveolar elastin causes dynamic airway collapse during active exhalation, trapping air in distal airspaces. Exhaling slowly through pursed lips creates positive expiratory backpressure that stents open airways and facilitates complete lung emptying.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Pursed-lip breathing SLOWS the respiratory rate and prolongs exhalation."
        },
        {
          "option": "C",
          "reason": "It targets expiration, not inspiration."
        },
        {
          "option": "D",
          "reason": "It does not replace prescribed supplemental oxygen."
        }
      ],
      "priorityAlert": "Technique instruction: Inhale slowly through the nose for 2 counts, purse lips like whistling, and exhale slowly for 4 counts (1:2 ratio)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "COPD Rehabilitation"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q17",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Renal: Acute Kidney Injury (AKI) Prerenal Etiology & Fractional Excretion",
    "scenarioQuestion": "A patient with severe dehydration and hypovolemia develops oliguria (urine output 250 mL/day). Laboratory findings: Blood Urea Nitrogen (BUN) 84 mg/dL, Serum Creatinine 2.1 mg/dL (BUN:Cr ratio 40:1), and Fractional Excretion of Sodium (FeNa) is < 1%. What classification of Acute Kidney Injury is present?",
    "options": [
      {
        "id": "A",
        "text": "Prerenal Acute Kidney Injury"
      },
      {
        "id": "B",
        "text": "Intrinsic Acute Tubular Necrosis"
      },
      {
        "id": "C",
        "text": "Postrenal Obstructive Nephropathy"
      },
      {
        "id": "D",
        "text": "Chronic Glomerulosclerosis"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Prerenal AKI is characterized by BUN:Creatinine ratio > 20:1, Urine Osmolality > 500 mOsm/kg, and Fractional Excretion of Sodium (FeNa) < 1%, indicating intact tubular reabsorptive function attempting to conserve volume.",
      "explanation": "Prerenal azotemia is caused by decreased renal blood flow (hypovolemia, shock, heart failure) without intrinsic parenchymal damage. Intact nephrons maximally reabsorb sodium and water (FeNa < 1%). Prompt fluid replacement reverses prerenal failure before it progresses to ischemic Acute Tubular Necrosis (FeNa > 2%).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Acute Tubular Necrosis has FeNa > 2% and BUN:Cr ratio < 15:1 because damaged tubules cannot conserve sodium."
        },
        {
          "option": "C",
          "reason": "Postrenal failure is caused by bilateral urinary tract obstruction."
        },
        {
          "option": "D",
          "reason": "Acute oliguria with high BUN:Cr ratio reflects acute prerenal hypoperfusion."
        }
      ],
      "priorityAlert": "Prompt fluid resuscitation in prerenal AKI prevents progression to irreversible ischemic Acute Tubular Necrosis (ATN)!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Renal Failure Differential"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q18",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Rheumatology: Rheumatoid Arthritis Morning Stiffness & Joint Deformities",
    "scenarioQuestion": "A 45-year-old female presents with bilateral, symmetrical swelling, pain, and stiffness in the proximal interphalangeal (PIP) and metacarpophalangeal (MCP) joints of both hands. She states her joints are stiff for more than 1 hour every morning. Which classic hand deformities are associated with advanced Rheumatoid Arthritis?",
    "options": [
      {
        "id": "A",
        "text": "Heberden's and Bouchard's nodes"
      },
      {
        "id": "B",
        "text": "Swan-neck deformity, Boutonnière deformity, and Ulnar deviation of the fingers"
      },
      {
        "id": "C",
        "text": "Tophi formation and podagra of the great toe"
      },
      {
        "id": "D",
        "text": "Dupuytren's contracture and trigger finger"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Rheumatoid Arthritis produces symmetric inflammatory synovitis characterized by morning stiffness lasting > 1 hour, Swan-neck deformity (PIP hyperextension with DIP flexion), Boutonnière deformity, and Ulnar drift of fingers.",
      "explanation": "Heberden's nodes (DIP joints) and Bouchard's nodes (PIP joints) are hard osteophytes characteristic of Osteoarthritis (degenerative), not Rheumatoid Arthritis. Tophi occur in chronic gout.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Heberden's and Bouchard's nodes are pathognomonic for Osteoarthritis."
        },
        {
          "option": "C",
          "reason": "Podagra and tophi are classic for Gouty Arthritis."
        },
        {
          "option": "D",
          "reason": "Dupuytren's contracture is palmar fascial fibromatosis."
        }
      ],
      "priorityAlert": "Disease-Modifying Anti-Rheumatic Drugs (DMARDs like Methotrexate) must be initiated early to halt permanent erosive joint destruction!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Autoimmune Joint Disorders"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q19",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Orthopedics: Osteoporosis Bisphosphonate (Alendronate) Administration",
    "scenarioQuestion": "A 68-year-old postmenopausal female with a DEXA scan T-score of -3.1 is prescribed oral Alendronate (Fosamax) 70 mg once weekly for osteoporosis. What specific instructions must the nurse emphasize to prevent severe pill-induced esophageal ulceration?",
    "options": [
      {
        "id": "A",
        "text": "Take at bedtime with milk and lie flat immediately"
      },
      {
        "id": "B",
        "text": "Take first thing in the morning with a full glass (240 mL) of plain water on an empty stomach, and remain upright (sitting or standing) for at least 30 minutes"
      },
      {
        "id": "C",
        "text": "Crush the tablet and mix with applesauce after dinner"
      },
      {
        "id": "D",
        "text": "Take with calcium and iron supplements to enhance bone mineral density"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Bisphosphonates (Alendronate, Risedronate) cause severe chemical esophagitis and ulceration. They must be taken on an empty stomach with a full glass of plain water, and the patient must remain strictly upright for at least 30 minutes.",
      "explanation": "Bisphosphonates have poor oral bioavailability (< 1%) which is blocked by food, coffee, or calcium. If the tablet lodges in the esophagus, it produces severe mucosal erosion. Staying upright facilitates esophageal transit by gravity into the stomach.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Lying down causes pill retention and fatal esophageal perforation."
        },
        {
          "option": "C",
          "reason": "Crushing releases chemical irritants that burn the oral mucosa."
        },
        {
          "option": "D",
          "reason": "Calcium and iron chelate bisphosphonates, reducing absorption to zero."
        }
      ],
      "priorityAlert": "If severe difficulty swallowing (dysphagia) or retrosternal burning occurs on Alendronate, withhold the drug and report immediately!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Bone Density Therapeutics"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q20",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Orthopedics: Fat Embolism Syndrome (FES) Triad After Femur Fracture",
    "scenarioQuestion": "Thirty-six hours after sustaining a closed fracture of the right femur shaft in a motor vehicle collision, a 23-year-old patient develops sudden dyspnea, tachypnea, confusion, agitation, and petechial hemorrhages across the anterior chest, axillae, and conjunctivae. What life-threatening complication is the patient experiencing?",
    "options": [
      {
        "id": "A",
        "text": "Compartment Syndrome"
      },
      {
        "id": "B",
        "text": "Fat Embolism Syndrome (FES)"
      },
      {
        "id": "C",
        "text": "Deep Vein Thrombosis"
      },
      {
        "id": "D",
        "text": "Avascular Necrosis of the femoral head"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The classic clinical triad of Fat Embolism Syndrome (FES) following long bone (femur/pelvis) fractures: 1) Respiratory insufficiency (hypoxemia, dyspnea), 2) Neurological changes (confusion, agitation), and 3) Petechial rash on anterior chest, neck, and axilla.",
      "explanation": "Disrupted medullary bone marrow fat globules enter torn venules and occlude pulmonary capillaries. Lipase breaks fat into toxic free fatty acids that cause acute lung injury (ARDS). Petechiae are pathognomonic and result from microvascular fat occlusion and thrombocytopenia.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Compartment syndrome causes neurovascular compromise of an extremity, not systemic petechiae and hypoxemia."
        },
        {
          "option": "C",
          "reason": "DVT presents with unilateral leg swelling without upper body petechial rash."
        },
        {
          "option": "D",
          "reason": "Avascular necrosis is a chronic late ischemic bone complication."
        }
      ],
      "priorityAlert": "The single most effective preventive intervention for Fat Embolism Syndrome is EARLY, PROMPT SURGICAL IMMOBILIZATION AND FIXATION of long bone fractures!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Orthopedic Trauma Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q21",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Urology: Transurethral Resection of Prostate (TURP) Continuous Bladder Irrigation",
    "scenarioQuestion": "A 70-year-old male is on continuous bladder irrigation (CBI) with 0.9% Normal Saline via a 3-way Foley catheter following a TURP for benign prostatic hyperplasia. The nurse notes bright red urinary drainage with numerous large blood clots, and the patient reports severe spasmodic suprapubic pain. What is the nurse's immediate action?",
    "options": [
      {
        "id": "A",
        "text": "Slow down the CBI irrigation rate to keep-vein-open"
      },
      {
        "id": "B",
        "text": "Increase the CBI irrigation flow rate to flush out clots, and manually irrigate with 50 mL sterile saline if catheter is obstructed"
      },
      {
        "id": "C",
        "text": "Remove the 3-way catheter immediately and insert a straight catheter"
      },
      {
        "id": "D",
        "text": "Administer an immediate IV dose of Furosemide"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The rate of Continuous Bladder Irrigation (CBI) is titrated to maintain clear, light pink urinary drainage. If bright red drainage or clots appear, INCREASE the flow rate to prevent clot formation and bladder obstruction.",
      "explanation": "Severe suprapubic pain in a CBI patient indicates bladder distension from blood clot obstruction. The nurse must increase irrigation flow to flush clots. If inflow continues without outflow, stop infusion and gently irrigate with a 50 mL piston syringe to dislodge obstructing clots.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Slowing the irrigation allows blood to pool and form massive occlusive clots."
        },
        {
          "option": "C",
          "reason": "Removing a fresh TURP catheter causes severe urethral hemorrhage and disruption of the prostatic fossa."
        },
        {
          "option": "D",
          "reason": "Diuretics do not clear mechanical catheter obstruction."
        }
      ],
      "priorityAlert": "CBI Calculation Rule: True Urine Output = Total Fluid Collected in drainage bag MINUS Total Volume of Irrigation Saline infused!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Urological Nursing Interventions"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q22",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrine: Hypocalcemia Neuromuscular Signs (Chvostek & Trousseau)",
    "scenarioQuestion": "A patient with chronic hypoparathyroidism has a serum total calcium level of 6.4 mg/dL. During physical assessment, the nurse inflates a blood pressure cuff on the patient's upper arm above systolic pressure for 3 minutes. The patient develops involuntary flexion of the wrist and metacarpophalangeal joints with extension of fingers (carpopedal spasm). What is this sign named?",
    "options": [
      {
        "id": "A",
        "text": "Chvostek's sign"
      },
      {
        "id": "B",
        "text": "Trousseau's sign"
      },
      {
        "id": "C",
        "text": "Kernig's sign"
      },
      {
        "id": "D",
        "text": "Homans' sign"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Trousseau's sign is carpopedal spasm induced by occluding arterial blood flow in the upper arm with a blood pressure cuff inflated 20 mmHg above systolic BP for 3 minutes. It is a highly sensitive and specific sign of latent tetany / hypocalcemia.",
      "explanation": "Chvostek's sign is twitching of facial muscles elicited by tapping the facial nerve anterior to the ear. Both signs reflect neuromuscular irritability due to low extracellular ionized calcium lowering nerve resting membrane potential.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Chvostek's sign is elicited by tapping the facial nerve."
        },
        {
          "option": "C",
          "reason": "Kernig's sign indicates meningeal irritation."
        },
        {
          "option": "D",
          "reason": "Homans' sign is calf pain on dorsiflexion historically checked in DVT."
        }
      ],
      "priorityAlert": "Normal Serum Calcium: 8.5 to 10.5 mg/dL! Critical value < 7.0 mg/dL risks lethal laryngospasm and cardiac arrhythmias!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Electrolyte Assessment"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q23",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiology: Hypokalemia Electrocardiographic (ECG) Manifestations",
    "scenarioQuestion": "A patient receiving high-dose intravenous Furosemide has a serum potassium level of 2.6 mEq/L. Which characteristic electrocardiographic (ECG) changes should the critical care nurse anticipate on the cardiac monitor?",
    "options": [
      {
        "id": "A",
        "text": "Tall peaked T waves, prolonged PR interval, and wide QRS complex"
      },
      {
        "id": "B",
        "text": "Flattened or inverted T waves, ST-segment depression, and prominent U waves"
      },
      {
        "id": "C",
        "text": "Shortened QT interval and Osborn J waves"
      },
      {
        "id": "D",
        "text": "Electrical alternans with low voltage QRS"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Hypokalemia ECG hallmarks: 1) Flattened or inverted T waves, 2) ST-segment depression, 3) Prominent U waves (positive deflection following T wave), and 4) Prolonged QT/QU interval with risk of Torsades de Pointes.",
      "explanation": "Potassium is the primary intracellular cation responsible for myocardial repolarization. Low extracellular potassium prolongs repolarization and creates prominent U waves. Tall peaked T waves occur in HYPERkalemia.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Tall peaked T waves are pathognomonic for HYPERkalemia."
        },
        {
          "option": "C",
          "reason": "Shortened QT occurs in hypercalcemia; Osborn waves in hypothermia."
        },
        {
          "option": "D",
          "reason": "Electrical alternans occurs in massive pericardial tamponade."
        }
      ],
      "priorityAlert": "Mnemonic for Hypokalemia ECG: \"U wave, Flat T, Depressed ST, Prolonged QT\"!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "ECG Electrolyte Changes"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q24",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrine: Hypercalcemic Crisis Acute Management",
    "scenarioQuestion": "A patient with metastatic breast cancer presents with acute confusion, severe constipation, polyuria, polydipsia, and a serum calcium level of 15.2 mg/dL. Telemetry shows a markedly shortened QT interval. What is the INITIAL pharmacotherapeutic intervention of choice?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous Normal Saline 0.9% infusion at 200–300 mL/hr to promote renal calcium calciuresis"
      },
      {
        "id": "B",
        "text": "Immediate oral Calcium Carbonate 1000 mg"
      },
      {
        "id": "C",
        "text": "Intravenous Thiazide diuretics (Hydrochlorothiazide)"
      },
      {
        "id": "D",
        "text": "Oral Potassium Citrate"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The immediate first-line management of Hypercalcemic Crisis (serum Ca > 14 mg/dL) is vigorous volume expansion with 0.9% Normal Saline (200–300 mL/hr) to restore intravascular volume and promote renal calcium excretion.",
      "explanation": "Hypercalcemia impairs renal concentrating ability (nephrogenic diabetes insipidus), causing profound dehydration. Normal Saline expands volume and sodium competes with calcium for reabsorption in the thick ascending limb of Henle, promoting calciuresis. Loop diuretics and Bisphosphonates follow.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Calcium supplements worsen fatal hypercalcemic crisis."
        },
        {
          "option": "C",
          "reason": "Thiazide diuretics are strictly CONTRAINDICATED because they increase renal tubular calcium reabsorption."
        },
        {
          "option": "D",
          "reason": "Potassium citrate does not lower serum calcium."
        }
      ],
      "priorityAlert": "Thiazides INCREASE calcium! Loop diuretics (Furosemide) LOSE calcium! Thiazides are strictly contraindicated in hypercalcemia!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Oncologic & Electrolyte Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q25",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Rheumatology: Acute Gouty Arthritis Podagra & Allopurinol Mechanism",
    "scenarioQuestion": "A 50-year-old male presents with excruciating, throbbing pain, erythema, and severe edema of the right first metatarsophalangeal joint (podagra). Synovial fluid aspiration reveals needle-shaped, negatively birefringent monosodium urate crystals under polarized light. Which medication is used for CHRONIC uric acid-lowering maintenance therapy, and what is its enzyme target?",
    "options": [
      {
        "id": "A",
        "text": "Allopurinol; inhibits Xanthine Oxidase"
      },
      {
        "id": "B",
        "text": "Colchicine; inhibits cyclooxygenase-2"
      },
      {
        "id": "C",
        "text": "Indomethacin; inhibits uricase"
      },
      {
        "id": "D",
        "text": "Probenecid; inhibits xanthine dehydrogenase"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Allopurinol is a Xanthine Oxidase inhibitor used for chronic maintenance therapy to block the conversion of hypoxanthine and xanthine into uric acid.",
      "explanation": "Allopurinol prevents recurrent gouty attacks and tophi formation. However, it should NOT be initiated during an acute flare because abrupt shifts in serum uric acid worsen joint inflammation. Acute flares are treated with NSAIDs (Indomethacin), Colchicine, or corticosteroids.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Colchicine inhibits microtubule polymerization and neutrophil chemotaxis in acute flares."
        },
        {
          "option": "C",
          "reason": "Indomethacin is an NSAID inhibiting COX enzymes."
        },
        {
          "option": "D",
          "reason": "Probenecid is a uricosuric drug that blocks tubular reabsorption of uric acid, not xanthine dehydrogenase."
        }
      ],
      "priorityAlert": "Never start Allopurinol during an acute gout attack! It causes rapid crystal mobilization and prolongs the painful flare!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Metabolic Joint Diseases"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q26",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Infection Control: Donning and Doffing PPE Protocol",
    "scenarioQuestion": "A nursing officer is caring for a patient placed under airborne and contact precautions for disseminated Varicella-Zoster in an isolation room. What is the CORRECT sequence for removing (doffing) Personal Protective Equipment (PPE) upon leaving the room?",
    "options": [
      {
        "id": "A",
        "text": "Gloves -> Goggles/Face Shield -> Gown -> Respirator (N95)"
      },
      {
        "id": "B",
        "text": "Respirator (N95) -> Gown -> Gloves -> Goggles"
      },
      {
        "id": "C",
        "text": "Gown -> Gloves -> Respirator -> Goggles"
      },
      {
        "id": "D",
        "text": "Goggles -> Gloves -> Gown -> Respirator"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The standard CDC/AIIMS sequence for doffing PPE is: Gloves first (most contaminated) -> Goggles/Face Shield -> Gown -> Mask/Respirator (removed last, outside the patient room).",
      "explanation": "Gloves are the most heavily contaminated item and must be removed first, followed by protective eyewear and gown. Hand hygiene is performed immediately. The respirator (N95) is always removed outside the negative-pressure isolation room to avoid inhaling airborne pathogens.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Respirator is never removed first; doing so exposes respiratory mucosa in the dirty zone."
        },
        {
          "option": "C",
          "reason": "Gown removal before gloves contaminates the inner clothing with soiled glove hands."
        },
        {
          "option": "D",
          "reason": "Touching goggles before gloves transfers pathogens to facial skin."
        }
      ],
      "priorityAlert": "Always remove the N95 respirator AFTER leaving the patient room and closing the isolation door!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Infection Control & PPE"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q27",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Parenteral Therapy: IV Cannula Gauges & Color Coding",
    "scenarioQuestion": "A 24-year-old trauma victim is brought to the resuscitation bay with hemorrhagic shock and active arterial bleeding. The trauma team leader orders immediate massive blood transfusion and rapid fluid boluses. Which peripheral intravenous cannula gauge and color code is the BEST choice?",
    "options": [
      {
        "id": "A",
        "text": "14 Gauge (Orange) or 16 Gauge (Grey)"
      },
      {
        "id": "B",
        "text": "20 Gauge (Pink)"
      },
      {
        "id": "C",
        "text": "22 Gauge (Blue)"
      },
      {
        "id": "D",
        "text": "24 Gauge (Yellow)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Large-bore cannulas (14G Orange: ~330 mL/min, 16G Grey: ~200 mL/min) provide the lowest resistance and highest flow rates required for rapid volume resuscitation and blood transfusion.",
      "explanation": "According to Poiseuille's Law, fluid flow is proportional to the fourth power of the catheter radius. 14G and 16G catheters allow rapid administration of viscous blood products without hemolysis. 20G (Pink) is for routine fluids, 22G (Blue) for fragile veins, and 24G (Yellow) for neonates.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "20G (Pink) has a maximum flow of ~60 mL/min, inadequate for active hemorrhagic resuscitation."
        },
        {
          "option": "C",
          "reason": "22G (Blue) causes hemolysis when blood is pressure-infused."
        },
        {
          "option": "D",
          "reason": "24G (Yellow) is pediatric/neonatal size and cannot deliver massive adult fluid volumes."
        }
      ],
      "priorityAlert": "In hemorrhagic shock, always establish two large-bore peripheral IV lines (14G or 16G) in the antecubital fossae!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Emergency Resuscitation & Vascular Access"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q28",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Thermoregulation: Heat Loss Mechanisms in Post-Op Patients",
    "scenarioQuestion": "A post-laparotomy patient in the recovery room is shivering with a core body temperature of 35.1°C (95.2°F). The operating theatre environment was 19°C. What represents the PRIMARY mechanism through which un-draped surgical patients lose up to 65% of their body heat in the OT?",
    "options": [
      {
        "id": "A",
        "text": "Radiation"
      },
      {
        "id": "B",
        "text": "Conduction"
      },
      {
        "id": "C",
        "text": "Convection"
      },
      {
        "id": "D",
        "text": "Evaporation"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Radiation (transfer of radiant infrared heat from the warm body surface to cooler surrounding operating room walls and air) accounts for 60%–65% of total body heat loss.",
      "explanation": "Radiation is the predominant heat loss mechanism in unclothed surgical patients. Convection accounts for 15% (air currents), evaporation 15%–20% (skin and exposed viscera), and conduction 3%–5% (cold OT table contact).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Conduction accounts for only 3-5% of heat loss to direct surfaces."
        },
        {
          "option": "C",
          "reason": "Convection accounts for roughly 15% via laminar airflow."
        },
        {
          "option": "D",
          "reason": "Evaporation accounts for 15-20% through wet skin/cavity exposure."
        }
      ],
      "priorityAlert": "Forced-air warming blankets and radiant warmers reduce radiative heat loss and prevent hypothermia-induced coagulopathy!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Surgical Nursing & Thermoregulation"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q29",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Wound Care: Pressure Injury Staging Criteria (NPUAP)",
    "scenarioQuestion": "During bed-bath, the nurse notes a localized area over the sacrum with full-thickness skin loss. Subcutaneous fat is visible, but bone, tendon, and muscle are NOT exposed. Some slough is present, and there is slight undermining. According to NPUAP staging, which stage is this pressure injury?",
    "options": [
      {
        "id": "A",
        "text": "Stage 1"
      },
      {
        "id": "B",
        "text": "Stage 2"
      },
      {
        "id": "C",
        "text": "Stage 3"
      },
      {
        "id": "D",
        "text": "Stage 4"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "Stage 3 Pressure Injury is characterized by full-thickness skin loss where subcutaneous fat is visible, but muscle, tendon, ligament, cartilage, or bone are not exposed.",
      "explanation": "Stage 1 is non-blanchable erythema of intact skin. Stage 2 is partial-thickness loss with exposed dermis (shallow open ulcer or blister). Stage 3 extends into adipose tissue. Stage 4 has directly exposed or palpable bone, tendon, or muscle. Unstageable occurs when obscured by slough/eschar.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Stage 1 involves intact skin with localized non-blanchable erythema."
        },
        {
          "option": "B",
          "reason": "Stage 2 involves partial-thickness dermis loss with pink/red wound bed, no adipose visible."
        },
        {
          "option": "D",
          "reason": "Stage 4 involves directly exposed bone, tendon, muscle, or joint capsule."
        }
      ],
      "priorityAlert": "Never down-stage a healing pressure ulcer! A healing Stage 3 ulcer is documented as \"healing Stage 3\", NOT Stage 2!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Integumentary & Wound Care"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q30",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Enema Administration: Insertion Depth and Temperature",
    "scenarioQuestion": "A nursing officer is preparing to administer a tap-water cleansing enema to an adult patient with severe fecal impaction. What is the CORRECT patient positioning, catheter insertion depth, and height of the enema container above the anus?",
    "options": [
      {
        "id": "A",
        "text": "Left Sims' position; insert tube 7.5 to 10 cm (3 to 4 inches); container 30 to 45 cm (12 to 18 inches) above anus"
      },
      {
        "id": "B",
        "text": "Right lateral position; insert tube 15 cm; container 60 cm above anus"
      },
      {
        "id": "C",
        "text": "Supine position with knee flexion; insert tube 5 cm; container 10 cm above anus"
      },
      {
        "id": "D",
        "text": "High Fowler's position; insert tube 12 cm; container 90 cm above anus"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "For adult enema administration: Left Sims' position facilitates flow down the sigmoid colon by gravity; insertion depth is 7.5 to 10 cm (3 to 4 inches); container height should not exceed 30 to 45 cm (12 to 18 inches) to avoid excessive hydrostatic pressure.",
      "explanation": "The anatomical curve of the sigmoid and descending colon runs on the left side of the abdomen. Holding the enema can higher than 45 cm causes rapid inflow, bowel distension, abdominal cramping, and rectal wall perforation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Right lateral makes fluid flow uphill against gravity into the sigmoid colon."
        },
        {
          "option": "C",
          "reason": "Supine positioning inhibits fluid retention and flow into the colon."
        },
        {
          "option": "D",
          "reason": "Fowler's is unsafe; 90 cm height generates dangerous hydrostatic pressure triggering vagal syncope."
        }
      ],
      "priorityAlert": "If the patient complains of sudden severe abdominal cramping during the enema, immediately clamp the tubing and lower the bag!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Gastrointestinal Procedures"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q31",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Enteral Nutrition: Nasogastric Tube Placement Verification",
    "scenarioQuestion": "A new nasogastric (NG) feeding tube has just been inserted in an unconscious patient. Which method is considered the definitive GOLD STANDARD to confirm correct anatomical placement before initiating the first enteral feed?",
    "options": [
      {
        "id": "A",
        "text": "Abdominal X-ray (radiographic confirmation) visualizing the tube tip in the stomach"
      },
      {
        "id": "B",
        "text": "Auscultation of an air rush (whoosh test) over the epigastrium with a 30 mL syringe"
      },
      {
        "id": "C",
        "text": "Submerging the proximal end of the tube under water to observe for bubbling"
      },
      {
        "id": "D",
        "text": "Aspirating fluid and checking only for visual cloudiness"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Radiographic examination (X-ray) showing the catheter tip beyond the gastroesophageal junction in the stomach is the sole definitive gold standard for verifying NG tube placement.",
      "explanation": "Auscultation of air (whoosh test) is obsolete and unreliable because an air bolus into the lungs or bronchus sounds indistinguishable from gastric insufflation. Submerging the tube in water can cause fatal tracheal aspiration if the patient inhales.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "The whoosh test has high false-positive rates and is not evidence-based."
        },
        {
          "option": "C",
          "reason": "Water bubbling test can lead to aspiration pneumonia if negative pressure draws water inward."
        },
        {
          "option": "D",
          "reason": "Visual fluid inspection alone cannot differentiate gastric acid from pleural effusions or bronchial secretions."
        }
      ],
      "priorityAlert": "Never administer medications or enteral feeds via a newly inserted NG tube without radiographic confirmation or pH verification (pH < 5.5)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Enteral Nutrition & Patient Safety"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q32",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Diagnostic Tests: CLSI Order of Draw for Venipuncture",
    "scenarioQuestion": "A nursing officer is drawing multiple blood tubes via venipuncture. The requisition includes Blood Cultures, Serum Electrolytes (gel separator tube), Complete Blood Count (EDTA), and Coagulation Profile (Sodium Citrate). In what order should the tubes be drawn to prevent cross-contamination of additives?",
    "options": [
      {
        "id": "A",
        "text": "Blood Culture bottles -> Sodium Citrate (Light Blue) -> Serum Separator (Yellow/Gold) -> EDTA (Lavender)"
      },
      {
        "id": "B",
        "text": "EDTA (Lavender) -> Sodium Citrate (Light Blue) -> Blood Cultures -> Serum Separator"
      },
      {
        "id": "C",
        "text": "Serum Separator -> EDTA -> Sodium Citrate -> Blood Cultures"
      },
      {
        "id": "D",
        "text": "Sodium Citrate -> EDTA -> Serum Separator -> Blood Cultures"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The CLSI standard order of draw is: (1) Blood Cultures -> (2) Sodium Citrate (Light Blue) -> (3) Serum tubes (Red/Gold SST) -> (4) Heparin (Green) -> (5) EDTA (Lavender) -> (6) Sodium Fluoride (Grey).",
      "explanation": "Blood cultures are drawn first under strict sterile technique to prevent bacterial contamination. Light blue (citrate) comes second to avoid tissue thromboplastin interference. EDTA (Lavender) contains potassium ethylenediaminetetraacetate; if drawn before serum tubes, EDTA micro-droplets falsely elevate potassium and chelate calcium.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Drawing EDTA first contaminates subsequent tubes with potassium and falsifies coagulation."
        },
        {
          "option": "C",
          "reason": "Drawing serum separator before blood culture introduces skin flora contamination."
        },
        {
          "option": "D",
          "reason": "EDTA before serum/cultures causes massive analytical errors."
        }
      ],
      "priorityAlert": "EDTA contains high concentrations of K+; carrying EDTA into serum chemistry tubes produces dangerous PSEUDO-HYPERKALEMIA!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Phlebotomy & Lab Diagnostics"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q33",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Oxygen Therapy: Venturi Mask FIO2 Precision Delivery",
    "scenarioQuestion": "A 68-year-old patient with severe COPD and chronic hypercapnia requires oxygen therapy to maintain SpO2 between 88% and 92%. The physician requests an exact FiO2 of 28% to prevent suppression of the hypoxic respiratory drive. Which oxygen delivery device is the MOST appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Venturi Mask with White / Yellow color-coded calibrated entrainment valve"
      },
      {
        "id": "B",
        "text": "Simple Face Mask at 6 L/min"
      },
      {
        "id": "C",
        "text": "Non-Rebreather Mask (NRB) with reservoir at 12 L/min"
      },
      {
        "id": "D",
        "text": "Nasal Cannula at 5 L/min"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Venturi Mask is a high-flow oxygen delivery system that delivers a precise, fixed FiO2 (24% to 50%) regardless of the patient's respiratory rate, tidal volume, or breathing pattern.",
      "explanation": "COPD patients with chronic CO2 retention rely on hypoxic drive (low arterial PaO2) to stimulate respiration. Excessive oxygen blunts this drive, causing CO2 narcosis. The Venturi mask uses Bernoulli's principle to entrain room air precisely, guaranteeing stable FiO2 (e.g., 28% with a white/yellow adapter).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Simple face mask delivers variable FiO2 (40-60%) and requires minimum 5-6 L/min to prevent CO2 rebreathing."
        },
        {
          "option": "C",
          "reason": "NRB mask delivers 80-95% FiO2, which abolishes hypoxic drive in COPD."
        },
        {
          "option": "D",
          "reason": "Nasal cannula delivery is low-flow and variable, fluctuating with mouth breathing and tidal volume."
        }
      ],
      "priorityAlert": "Target SpO2 in chronic hypercapnic COPD is 88%–92%, NOT 100%! Over-oxygenation leads to acute respiratory acidosis and coma!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Respiratory Support & Oxygen Devices"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q34",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Surgical Asepsis: Maintaining Sterile Field Boundaries",
    "scenarioQuestion": "A scrub nurse is setting up an instrument trolley for an emergency abdominal surgery. Which of the following observations indicates a CONTAMINATION of the sterile field requiring immediate replacement?",
    "options": [
      {
        "id": "A",
        "text": "A sterile normal saline solution spills onto the cloth drape, soaking completely through to the unsterile trolley surface (strike-through)"
      },
      {
        "id": "B",
        "text": "Sterile items are kept within the 1-inch (2.5 cm) inner perimeter border"
      },
      {
        "id": "C",
        "text": "The scrub nurse faces the sterile field at all times with hands clasped at chest level"
      },
      {
        "id": "D",
        "text": "The sterile drape is placed table-level and remains above waist height"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Strike-through occurs when liquids soak through a sterile cloth or paper drape to an unsterile surface, creating a continuous capillary wick that draws micro-organisms into the sterile field.",
      "explanation": "Moisture facilitates bacterial migration via capillary action. Any wet non-impermeable drape must be considered contaminated immediately. A new sterile barrier drape must be placed over the area.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Keeping items within the borders is correct; the outer 1-inch border is considered unsterile."
        },
        {
          "option": "C",
          "reason": "Facing the sterile field with hands above the waist/chest level preserves sterility."
        },
        {
          "option": "D",
          "reason": "Sterile fields must always remain at or above waist level."
        }
      ],
      "priorityAlert": "Any wet drape on an unsterile surface is immediately contaminated due to capillary strike-through!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Sterile Technique & OR Nursing"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q35",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Catheterization: Prevention of Catheter-Associated UTI (CAUTI)",
    "scenarioQuestion": "To prevent Catheter-Associated Urinary Tract Infections (CAUTI) in an intensive care patient with an indwelling Foley catheter, which nursing intervention is an EVIDENCE-BASED standard?",
    "options": [
      {
        "id": "A",
        "text": "Maintain a closed drainage system and keep the drainage bag positioned BELOW bladder level without touching the floor"
      },
      {
        "id": "B",
        "text": "Perform routine bladder irrigation with antimicrobial solutions every 8 hours"
      },
      {
        "id": "C",
        "text": "Cleanse the urethral meatus vigorously with concentrated Povidone-Iodine twice daily"
      },
      {
        "id": "D",
        "text": "Disconnect the catheter from the tubing every shift to obtain fresh urine samples"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The single most effective evidence-based practice to prevent CAUTI is maintaining an unbroken, sterile closed drainage system with the bag below bladder level to prevent retrograde reflux.",
      "explanation": "CDC and SHEA guidelines recommend: (1) maintain sterile closed drainage, (2) keep bag below bladder level, (3) daily routine meatal washing with mild soap and water (NOT povidone-iodine), and (4) remove catheter as soon as clinically unnecessary.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Routine antimicrobial bladder irrigations increase resistant bacterial colonization and mucosal injury."
        },
        {
          "option": "C",
          "reason": "Antiseptic meatal cleansers (iodine) cause mucosal irritation and do not reduce CAUTI rates compared to soap/water."
        },
        {
          "option": "D",
          "reason": "Opening the closed system introduces environmental bacteria directly into the bladder."
        }
      ],
      "priorityAlert": "Never raise the urinary drainage bag above bladder level during patient transfers without clamping, to prevent retrograde contaminated urine flow!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Urinary Nursing & CAUTI Prevention"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q36",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fluid & Electrolytes: Osmolality Classification of IV Solutions",
    "scenarioQuestion": "A patient is prescribed 3% Sodium Chloride (3% NaCl) IV infusion for symptomatic cerebral edema. How is this intravenous solution classified in terms of tonicity, and what is the primary cellular fluid shift it produces?",
    "options": [
      {
        "id": "A",
        "text": "Hypertonic solution; draws water out of intracellular space into the intravascular compartment"
      },
      {
        "id": "B",
        "text": "Hypotonic solution; drives fluid into the brain cells to hydrate neurons"
      },
      {
        "id": "C",
        "text": "Isotonic solution; maintains equal osmolar balance across cell membranes"
      },
      {
        "id": "D",
        "text": "Colloidal suspension; coats capillary membranes without osmotic movement"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "3% Sodium Chloride is a potent hypertonic solution (~1026 mOsm/L, compared to plasma 275–295 mOsm/L) that shifts water from edematous brain parenchymal cells into the hyperosmolar vascular space, lowering ICP.",
      "explanation": "Hypertonic fluids have a higher osmolality than serum. By osmotic gradient, free water exits swollen intracellular compartments into the bloodstream to be eliminated by kidneys. It must be administered through a central line with frequent serum sodium monitoring.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Hypotonic solutions (like 0.45% NaCl) swell brain cells and worsen cerebral edema."
        },
        {
          "option": "C",
          "reason": "Isotonic solutions (0.9% NaCl, Ringer Lactate) have osmolarity equal to serum (~308 mOsm/L)."
        },
        {
          "option": "D",
          "reason": "3% NaCl is a crystalloid, not a colloid (like Albumin or Dextran)."
        }
      ],
      "priorityAlert": "Monitor serum sodium hourly when infusing 3% Saline. Correcting severe hyponatremia too rapidly (>8–10 mEq/24h) causes Central Pontine Myelinolysis (Osmotic Demyelination Syndrome)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Fluid & Electrolyte Balance"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q37",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Medication Administration: Intramuscular Injection Sites & Landmarks",
    "scenarioQuestion": "When administering a 3 mL deep intramuscular injection of an oily depot antipsychotic in an adult, which anatomical site is the SAFEST preferred choice to avoid major nerve and vascular injury?",
    "options": [
      {
        "id": "A",
        "text": "Ventrogluteal site (gluteus medius and minimus, bounded by anterior superior iliac spine and iliac crest)"
      },
      {
        "id": "B",
        "text": "Dorsogluteal site (upper outer quadrant of the buttock)"
      },
      {
        "id": "C",
        "text": "Deltoid muscle (acromion process landmark)"
      },
      {
        "id": "D",
        "text": "Vastus lateralis muscle (anterior thigh)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Ventrogluteal site is the safest preferred IM injection site for adults because it is deep, well-developed, free of major nerves and large blood vessels, and bounded by reliable bony landmarks.",
      "explanation": "The dorsogluteal site is no longer recommended due to high risk of sciatic nerve injury and accidental injection into subcutaneous fat. The deltoid muscle can accommodate a maximum volume of only 1 mL.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Dorsogluteal site risks permanent sciatic nerve palsy and superior gluteal artery puncture."
        },
        {
          "option": "C",
          "reason": "Deltoid muscle volume is limited to 1 mL maximum."
        },
        {
          "option": "D",
          "reason": "Vastus lateralis is ideal in infants/children, but in adults ventrogluteal is preferred for 3 mL oily volume."
        }
      ],
      "priorityAlert": "Dorsogluteal site is obsolete in modern nursing practice due to high incidence of sciatic nerve paralysis!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Medication Administration Standards"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q38",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Physical Assessment: Korotkoff Sounds and Blood Pressure Errors",
    "scenarioQuestion": "A nurse uses an adult blood pressure cuff that is too narrow and short for an obese patient's arm. How will this improper cuff size affect the recorded blood pressure reading?",
    "options": [
      {
        "id": "A",
        "text": "Falsely elevated (spuriously high) blood pressure"
      },
      {
        "id": "B",
        "text": "Falsely lowered (spuriously low) blood pressure"
      },
      {
        "id": "C",
        "text": "No change in reading"
      },
      {
        "id": "D",
        "text": "Inaudible diastolic pressure with normal systolic"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "An undersized (too small or too narrow) BP cuff requires higher inflation pressure to occlude the artery, producing a falsely high (spuriously elevated) blood pressure measurement.",
      "explanation": "A proper cuff bladder width should encircle 40% of the mid-arm circumference, and bladder length should encircle 80%–100%. A small cuff cannot transmit pressure effectively to the underlying brachial artery, yielding false high readings. An oversized cuff produces falsely low readings.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "A cuff that is too large or wide results in falsely low readings."
        },
        {
          "option": "C",
          "reason": "Cuff size significantly affects hydrostatic tissue pressure transmission."
        },
        {
          "option": "D",
          "reason": "Both systolic and diastolic readings are falsely elevated by a tight cuff."
        }
      ],
      "priorityAlert": "Too small cuff = False High BP! Too large cuff = False Low BP!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Vital Signs & Clinical Errors"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q39",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Suctioning: Endotracheal Suction Technique & Complications",
    "scenarioQuestion": "A mechanically ventilated patient with copious thick tracheobronchial secretions requires endotracheal suctioning. What are the recommended MAXIMUM suction pressure and MAXIMUM duration of continuous suction application to prevent mucosal damage and hypoxemia?",
    "options": [
      {
        "id": "A",
        "text": "Suction pressure 80 to 120 mmHg; maximum suctioning duration 10 to 15 seconds"
      },
      {
        "id": "B",
        "text": "Suction pressure 180 to 200 mmHg; maximum suctioning duration 30 seconds"
      },
      {
        "id": "C",
        "text": "Suction pressure 40 to 60 mmHg; maximum suctioning duration 5 seconds"
      },
      {
        "id": "D",
        "text": "Suction pressure 150 to 180 mmHg; maximum suctioning duration 20 seconds"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In adult endotracheal suctioning, negative suction pressure should be set to 80–120 mmHg (up to 150 mmHg in open systems), and suction should never be applied for more than 10–15 seconds.",
      "explanation": "Continuous suctioning longer than 15 seconds removes alveolar gas and produces severe atelectasis, profound hypoxemia, and vagal nerve stimulation causing bradycardia and cardiac arrest. Patients must be pre-oxygenated with 100% O2 for at least 30 to 60 seconds.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "180-200 mmHg causes tracheal mucosal hemorrhage, tissue invagination, and barotrauma."
        },
        {
          "option": "C",
          "reason": "40-60 mmHg is neonatal suction pressure, insufficient to clear thick adult secretions."
        },
        {
          "option": "D",
          "reason": "20 seconds is excessively prolonged and provokes severe hypoxemia."
        }
      ],
      "priorityAlert": "Always hyper-oxygenate with 100% O2 before and after suctioning! Stop suctioning immediately if heart rate drops by >20 bpm or arrhythmias occur!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Airway Management & Critical Care"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q40",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fluid Balance: 24-Hour Insensible Water Loss Estimation",
    "scenarioQuestion": "In a resting, afebrile adult patient weighing 70 kg under standard ambient conditions, what is the approximate average daily INSENSIBLE water loss through the skin (perspiration) and lungs (respiration)?",
    "options": [
      {
        "id": "A",
        "text": "600 to 900 mL/day"
      },
      {
        "id": "B",
        "text": "100 to 200 mL/day"
      },
      {
        "id": "C",
        "text": "1800 to 2200 mL/day"
      },
      {
        "id": "D",
        "text": "3000 to 3500 mL/day"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Insensible fluid loss (unmeasurable water lost via skin transudation and exhaled water vapor) averages approximately 600–900 mL per 24 hours in a healthy adult (skin ~400–500 mL, lungs ~300–400 mL).",
      "explanation": "Sensible losses are measurable (urine ~1500 mL, feces ~100–200 mL). Insensible losses cannot be measured directly on intake/output charts but increase by 10%–12% for each 1°C elevation in body temperature or with tachypnea.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "100-200 mL accounts only for fecal water loss, not total insensible loss."
        },
        {
          "option": "C",
          "reason": "1800-2200 mL is total normal 24-hour adult fluid intake, not insensible output."
        },
        {
          "option": "D",
          "reason": "3000 mL is seen only in severe burn shock or uncompensated diabetes insipidus."
        }
      ],
      "priorityAlert": "Fever increases insensible water loss by roughly 100 to 150 mL/day for every 1°C increase above 37°C!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Fluid & Electrolyte Calculation"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q41",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Positioning: Post-Lumbar Puncture Bed Rest Protocol",
    "scenarioQuestion": "Following a diagnostic lumbar puncture at L3–L4 to rule out meningitis, what nursing position is ordered for the patient to prevent post-dural puncture headache (PDPH)?",
    "options": [
      {
        "id": "A",
        "text": "Flat supine (prone or dorsal recumbent) with head of bed at 0 degrees for 4 to 6 hours"
      },
      {
        "id": "B",
        "text": "High Fowler's position (90 degrees)"
      },
      {
        "id": "C",
        "text": "Trendelenburg position (-30 degrees) for 24 hours"
      },
      {
        "id": "D",
        "text": "Sitting upright at the edge of the bed with feet dangling"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Placing the patient flat in a supine or prone position for 4 to 6 hours minimizes CSF leakage through the dural puncture site, significantly decreasing post-lumbar puncture headache.",
      "explanation": "When upright, gravity increases CSF pressure at the lumbar puncture site, accelerating CSF extravasation into epidural tissue. CSF volume depletion exerts traction on pain-sensitive cerebral dural and vascular structures, producing a severe bifrontal/occipital headache relieved only by lying flat.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "High Fowler's promotes maximal CSF hydrostatic leak and triggers excruciating headache."
        },
        {
          "option": "C",
          "reason": "Extreme Trendelenburg causes increased intracranial pressure and respiratory compromise."
        },
        {
          "option": "D",
          "reason": "Sitting upright immediately precipitates severe dural traction and vomiting."
        }
      ],
      "priorityAlert": "Post-dural puncture headache is characteristically throbbing, aggravated by standing/sitting upright, and promptly relieved by recumbency!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neurological Procedures"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q42",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Ethics & Legal: Components of Valid Informed Consent",
    "scenarioQuestion": "A surgeon is obtaining informed consent for a planned cholecystectomy. Which statement accurately describes the NURSING OFFICER'S legal and professional role regarding the consent form?",
    "options": [
      {
        "id": "A",
        "text": "The nurse serves as a witness to the patient's signature and confirms that the patient is competent and signed voluntarily"
      },
      {
        "id": "B",
        "text": "The nurse is legally responsible for explaining the surgical risks, benefits, and alternative procedures"
      },
      {
        "id": "C",
        "text": "The nurse may sign consent on behalf of an alert adult patient if family members agree"
      },
      {
        "id": "D",
        "text": "The nurse must guarantee surgical success and answer questions regarding surgical technique"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The primary legal responsibility of the nurse in surgical consent is to WITNESS the client's signature, verify patient identity, and ensure that consent is given voluntarily without coercion while the patient is mentally competent.",
      "explanation": "Explaining surgical procedure details, surgical risks, anticipated benefits, and non-surgical alternatives is the exclusive legal duty of the operating provider/physician. If the patient expresses confusion or lack of understanding, the nurse must notify the surgeon to return and re-explain.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Explaining risks, benefits, and complications is the physician's statutory responsibility."
        },
        {
          "option": "C",
          "reason": "A nurse cannot sign consent for a conscious competent adult."
        },
        {
          "option": "D",
          "reason": "No healthcare provider can guarantee surgical success."
        }
      ],
      "priorityAlert": "If a patient signed a consent form but later states \"I don't understand what surgery the doctor will do\", the nurse MUST hold the pre-op medications and call the surgeon!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Nursing Jurisprudence & Ethics"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q43",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Biomedical Waste: BMWM 2016 Color Coding Guidelines",
    "scenarioQuestion": "Under the Biomedical Waste Management (BMWM) Rules (India, 2016/amended), in which designated waste container should contaminated items such as soiled cotton gauze, dressings, anatomical tissues, and expired cytotoxic drugs be discarded?",
    "options": [
      {
        "id": "A",
        "text": "Yellow non-chlorinated plastic bag / container"
      },
      {
        "id": "B",
        "text": "Red bag / container"
      },
      {
        "id": "C",
        "text": "Blue cardboard box / container"
      },
      {
        "id": "D",
        "text": "White translucent puncture-proof container"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Yellow containers are dedicated for incinerable/plasma pyrolysis waste, including anatomical tissues, soiled dressings/cotton swabs, blood bags, expired drugs, and cytotoxic substances.",
      "explanation": "Red containers are for recyclable plastics (catheters, IV tubing, syringes without needles, uro-bags). Blue containers/boxes are for glassware and metallic implants. White translucent puncture-proof containers are for sharps (needles, scalpels).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Red bins are exclusively for recyclable plastics (syringes without needles, IV tubing, catheters)."
        },
        {
          "option": "C",
          "reason": "Blue bins are for glassware (vials, ampoules) and metallic orthopaedic implants."
        },
        {
          "option": "D",
          "reason": "White containers are puncture-proof sharps boxes for needles, blade tips, and scalpels."
        }
      ],
      "priorityAlert": "Blood bags, anatomical waste, and plaster casts go in YELLOW! Plastic IV bottles and catheters go in RED! Sharps go in WHITE!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Hospital Infection Control & BMWM"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q44",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Pharmacology Math: Pediatric Micro-Drip Infusion Rate Calculation",
    "scenarioQuestion": "A pediatric patient is prescribed 250 mL of 5% Dextrose in 0.45% Saline IV to be infused over 5 hours using a micro-drip infusion set (drop factor = 60 gtts/mL). At what drip rate (drops per minute) should the nurse regulate the IV line?",
    "options": [
      {
        "id": "A",
        "text": "50 drops/minute"
      },
      {
        "id": "B",
        "text": "25 drops/minute"
      },
      {
        "id": "C",
        "text": "100 drops/minute"
      },
      {
        "id": "D",
        "text": "12 drops/minute"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Formula: Drip rate (gtts/min) = (Total Volume in mL * Drop Factor) / (Time in minutes). For micro-drip (60 gtts/mL), drops/min equals mL/hour.",
      "explanation": "Infusion rate in mL/hr = 250 mL / 5 hr = 50 mL/hr. Using formula: (250 * 60) / (5 * 60) = 250 / 5 = 50 drops/min. When using a micro-drip set of 60 gtts/mL, the rate in drops per minute is ALWAYS numerically identical to the flow rate in mL per hour.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "25 gtts/min would infuse only 125 mL over 5 hours (half dose)."
        },
        {
          "option": "C",
          "reason": "100 gtts/min would complete the infusion in 2.5 hours, risking fluid overload."
        },
        {
          "option": "D",
          "reason": "12 gtts/min would take over 20 hours to infuse."
        }
      ],
      "priorityAlert": "High-yield math rule: For 60 gtts/mL micro-sets, gtts/min = mL/hr!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Drug Calculations & Dosage"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q45",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Comfort & Safety: Restraints Protocol and Monitoring Standards",
    "scenarioQuestion": "A confused, delirious ICU patient is repeatedly pulling at his endotracheal tube. The physician orders bilateral wrist restraints. What is the MANDATORY nursing monitoring protocol for physical restraints?",
    "options": [
      {
        "id": "A",
        "text": "Assess neurovascular status and skin integrity every 30 minutes, release restraints every 2 hours for ROM exercises"
      },
      {
        "id": "B",
        "text": "Tie restraints securely using a tight square knot to the movable side-rails"
      },
      {
        "id": "C",
        "text": "Remove restraints only once per 24-hour shift during linen change"
      },
      {
        "id": "D",
        "text": "Obtain an open-ended \"as needed\" (PRN) restraint order valid for one week"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Physical restraints require neurovascular checks (pulse, color, temperature, capillary refill) every 30 minutes, release for skin care and range-of-motion every 2 hours, and a quick-release knot tied to the bed frame (never side-rails).",
      "explanation": "PRN restraint orders are strictly forbidden by Joint Commission and NABH. Restraint prescriptions must be time-limited (e.g., maximum 24 hours for violent/self-harm behavior, requiring daily physician re-evaluation). Tying restraints to side-rails causes severe fractures or avulsion injuries when rails are lowered.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Restraints must NEVER be tied to movable side rails; they must be secured to the stable bed frame using quick-release slip knots."
        },
        {
          "option": "C",
          "reason": "Leaving restraints unreleased for 24 hours causes nerve palsy, skin necrosis, and contractures."
        },
        {
          "option": "D",
          "reason": "PRN restraint orders are illegal and unethical under all regulatory guidelines."
        }
      ],
      "priorityAlert": "Always use a quick-release knot and secure to the BED FRAME, never to the movable side rail!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Patient Safety & Restraint Guidelines"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q46",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Naegele’s Rule for Expected Date of Delivery (EDD)",
    "scenarioQuestion": "A primigravida presents for her first prenatal visit. Her Last Menstrual Period (LMP) began on March 14, 2023, and she has regular 28-day menstrual cycles. According to Naegele's Rule, what is her Expected Date of Delivery (EDD)?",
    "options": [
      {
        "id": "A",
        "text": "December 21, 2023"
      },
      {
        "id": "B",
        "text": "December 14, 2023"
      },
      {
        "id": "C",
        "text": "January 21, 2024"
      },
      {
        "id": "D",
        "text": "November 21, 2023"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Naegele's Rule formula: EDD = LMP + 7 days - 3 months + 1 year (or LMP + 9 months + 7 days). March 14 + 7 days = March 21; March minus 3 months = December; Year = 2023.",
      "explanation": "March 14 + 7 days = March 21. Count back 3 months from March: February, January, December. Therefore, the EDD is December 21, 2023.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "December 14 forgot to add the 7 days."
        },
        {
          "option": "C",
          "reason": "January 21 added too many months (subtracted 2 months instead of 3)."
        },
        {
          "option": "D",
          "reason": "November 21 subtracted 4 months."
        }
      ],
      "priorityAlert": "Naegele's rule is based on a standard 28-day cycle! If cycles are longer (e.g. 35 days), add additional days!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Antenatal Assessment & EDD Calculation"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q47",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Normal Fetal Heart Rate and Accelerations",
    "scenarioQuestion": "During electronic fetal heart monitoring (cardiotocography) of a 38-week pregnant woman in early labor, the baseline Fetal Heart Rate (FHR) is recorded. What is the normal physiological baseline FHR range in a term fetus?",
    "options": [
      {
        "id": "A",
        "text": "110 to 160 beats per minute"
      },
      {
        "id": "B",
        "text": "80 to 100 beats per minute"
      },
      {
        "id": "C",
        "text": "160 to 200 beats per minute"
      },
      {
        "id": "D",
        "text": "60 to 90 beats per minute"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The normal baseline fetal heart rate (FHR) at term is 110 to 160 beats per minute, characterized by moderate variability (6–25 bpm) and absence of late/variable decelerations.",
      "explanation": "Fetal tachycardia is defined as baseline FHR > 160 bpm lasting > 10 minutes (often due to maternal chorioamnionitis, fever, or terbutaline). Fetal bradycardia is baseline < 110 bpm lasting > 10 minutes (fetal hypoxia, cord prolapse).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "80-100 bpm indicates severe fetal bradycardia and acute fetal distress."
        },
        {
          "option": "C",
          "reason": "160-200 bpm indicates severe fetal tachycardia."
        },
        {
          "option": "D",
          "reason": "60-90 bpm is profound bradycardia requiring emergency cesarean delivery."
        }
      ],
      "priorityAlert": "Maternal fever is the most common cause of fetal tachycardia! Check maternal temperature immediately if baseline FHR > 160!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Intrapartum Fetal Monitoring"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q48",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "High-Risk Pregnancy: Magnesium Sulfate Toxicity Antidote",
    "scenarioQuestion": "A severe pre-eclamptic mother is receiving a continuous intravenous Magnesium Sulfate infusion. On hourly assessment, the nurse notes: respiratory rate 8 breaths/min, deep tendon reflexes (patellar) absent (0+), and urinary output 15 mL over the last hour. What is the IMMEDIATE priority nursing action?",
    "options": [
      {
        "id": "A",
        "text": "Stop the Magnesium Sulfate infusion immediately and administer 10% Calcium Gluconate 10 mL IV over 3 to 5 minutes"
      },
      {
        "id": "B",
        "text": "Increase IV Ringer Lactate to 200 mL/hr to promote renal clearance"
      },
      {
        "id": "C",
        "text": "Administer Naloxone 0.4 mg IV"
      },
      {
        "id": "D",
        "text": "Reposition the patient to right lateral and continue monitoring"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Loss of patellar reflexes (serum Mg 8–10 mEq/L) and respiratory depression < 12/min (serum Mg > 12 mEq/L) are classic signs of Magnesium Toxicity. The infusion must be STOPPED immediately and 10% Calcium Gluconate (1 g) given IV over 3–5 minutes.",
      "explanation": "Magnesium competitively blocks calcium at the neuromuscular junction. Calcium Gluconate is the direct physiological antagonist. Diminished urine output (< 30 mL/hr) allows magnesium to accumulate rapidly since it is excreted exclusively by the kidneys.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Fluids alone cannot rapidly reverse neuromuscular respiratory arrest."
        },
        {
          "option": "C",
          "reason": "Naloxone is an opioid receptor antagonist, completely ineffective against magnesium toxicity."
        },
        {
          "option": "D",
          "reason": "Continuing the infusion in respiratory depression leads to fatal cardiac arrest."
        }
      ],
      "priorityAlert": "Always keep a vial of 10% Calcium Gluconate at the bedside whenever Magnesium Sulfate is being infused!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "High-Risk Obstetrics & Eclampsia"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q49",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetric Emergencies: Shoulder Dystocia Resuscitation Maneuvers",
    "scenarioQuestion": "During vaginal delivery of a 4.2 kg fetus, after delivery of the fetal head, it retracts tightly against the maternal perineum (the \"turtle sign\"). Gentle traction fails to deliver the anterior shoulder. What is the FIRST-LINE nursing intervention to relieve shoulder dystocia?",
    "options": [
      {
        "id": "A",
        "text": "McRoberts maneuver (hyperflexing maternal legs onto abdomen) combined with suprapubic pressure"
      },
      {
        "id": "B",
        "text": "Vigorous fundal pressure to push the infant through the pelvic outlet"
      },
      {
        "id": "C",
        "text": "Immediate application of high-vacuum cup"
      },
      {
        "id": "D",
        "text": "Zavanelli maneuver"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The initial first-line management of shoulder dystocia is the McRoberts maneuver (sharp maternal thigh hyperflexion) combined with downward suprapubic pressure (Rubin I).",
      "explanation": "McRoberts maneuver flattens the sacral promontory and rotates the symphysis pubis cephalad, widening the pelvic diameter. Suprapubic pressure dislodges the impacted anterior shoulder from behind the pubic bone. Fundal pressure is strictly CONTRAINDICATED because it impacts the shoulder harder and causes uterine rupture.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Fundal pressure is STRICTLY CONTRAINDICATED; it worsens shoulder impaction and causes uterine rupture or brachial plexus avulsion."
        },
        {
          "option": "C",
          "reason": "Vacuum extraction when shoulders are impacted causes fetal neck stretching and brachial plexus injury (Erb's palsy)."
        },
        {
          "option": "D",
          "reason": "Zavanelli (cephalic replacement for emergency C-section) is a desperate last-resort maneuver after all others fail."
        }
      ],
      "priorityAlert": "FUNDAL PRESSURE IS STRICTLY CONTRAINDICATED in shoulder dystocia! Apply SUPRAPUBIC pressure only!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Obstetric Emergencies & Labor Complications"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q50",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Antepartum Hemorrhage: Placenta Previa vs Abruptio Placentae",
    "scenarioQuestion": "A 32-week pregnant woman presents to the triage unit with sudden-onset third-trimester vaginal bleeding. Which clinical presentation is characteristic of PLACENTA PREVIA rather than abruptio placentae?",
    "options": [
      {
        "id": "A",
        "text": "Painless, bright red vaginal bleeding with a soft, non-tender, relaxed uterus"
      },
      {
        "id": "B",
        "text": "Painful, dark venous bleeding with a rigid, board-like, hypertonic uterus"
      },
      {
        "id": "C",
        "text": "Sudden severe stabbing abdominal pain with absent fetal heart sounds and maternal shock"
      },
      {
        "id": "D",
        "text": "Continuous watery discharge with intermittent mild backaches"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Placenta Previa classically presents with PAINLESS, bright red vaginal bleeding and a soft, non-tender, relaxed uterus. Abruptio placentae presents with PAINFUL, dark red bleeding with severe uterine tenderness and rigidity.",
      "explanation": "In placenta previa, the low-lying placenta tears away painlessly from the lower uterine segment as it thins and dilates. In abruptio, retroplacental hematoma formation causes painful uterine spasm, extravasation into myometrium (Couvelaire uterus), and woody rigidity.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Painful, dark bleeding with board-like uterine rigidity is the classic hallmark of Abruptio Placentae."
        },
        {
          "option": "C",
          "reason": "Sudden tearing pain with uterine shape loss indicates complete uterine rupture."
        },
        {
          "option": "D",
          "reason": "Watery discharge indicates premature rupture of membranes (PROM)."
        }
      ],
      "priorityAlert": "NEVER perform a digital vaginal examination (per-vaginal exam) in third-trimester vaginal bleeding until ultrasound has ruled out Placenta Previa!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Antepartum Hemorrhage Differentiation"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q51",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Postpartum Hemorrhage: Uterotonic Medications & Contraindications",
    "scenarioQuestion": "A multiparous woman experiences active primary postpartum hemorrhage (PPH) secondary to uterine atony following delivery. The patient has a known history of chronic bronchial asthma. Which uterotonic drug is strictly CONTRAINDICATED in this patient?",
    "options": [
      {
        "id": "A",
        "text": "Carboprost Tromethamine (15-methyl PGF2-alpha / Hemabate)"
      },
      {
        "id": "B",
        "text": "Oxytocin (Syntocinon)"
      },
      {
        "id": "C",
        "text": "Methylergonovine (Methergine)"
      },
      {
        "id": "D",
        "text": "Misoprostol (PGE1)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Carboprost Tromethamine (Prostaglandin F2-alpha) is a potent bronchoconstrictor and is strictly contraindicated in patients with bronchial asthma or reactive airway disease.",
      "explanation": "Prostaglandin F2-alpha induces severe bronchospasm and airway constriction. For asthmatic patients with PPH, Oxytocin, Misoprostol, or Tranexamic acid are used. Methylergonovine causes peripheral vasoconstriction and is contraindicated in hypertension/pre-eclampsia, not asthma.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Oxytocin is the safe, universal first-line uterotonic in all patients including asthmatics."
        },
        {
          "option": "C",
          "reason": "Methylergonovine is contraindicated in gestational hypertension/pre-eclampsia, not asthma."
        },
        {
          "option": "D",
          "reason": "Misoprostol (PGE1) causes mild bronchodilation and is safe in asthma."
        }
      ],
      "priorityAlert": "Carboprost (PGF2a) = Contraindicated in ASTHMA! Methylergonovine = Contraindicated in HYPERTENSION!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Postpartum Hemorrhage Pharmacology"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q52",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Labor & Delivery: True vs False Labor Contractions",
    "scenarioQuestion": "A primigravida at 39 weeks calls the maternity triage unit asking whether her contractions signify true labor. Which characteristic confirms TRUE labor contractions?",
    "options": [
      {
        "id": "A",
        "text": "Contractions produce progressive cervical effacement and cervical dilatation"
      },
      {
        "id": "B",
        "text": "Contractions are irregular and cease when the mother ambulates or rests"
      },
      {
        "id": "C",
        "text": "Pain is confined entirely to the lower abdomen and groin without radiating to the back"
      },
      {
        "id": "D",
        "text": "Contraction intensity diminishes after warm shower and oral hydration"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The definitive hallmark distinguishing TRUE labor from false labor (Braxton Hicks) is progressive cervical effacement (thinning) and cervical dilatation.",
      "explanation": "True labor contractions occur at regular intervals, progressively increase in frequency, duration, and intensity, radiate from the lumbosacral back to the anterior abdomen, and intensify with ambulation. False labor contractions are irregular, do not cause cervical change, and subside with rest.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Irregular contractions that stop with walking are Braxton Hicks (false labor)."
        },
        {
          "option": "C",
          "reason": "True labor pain begins in the lower back and radiates around to the lower abdomen."
        },
        {
          "option": "D",
          "reason": "Subsides with hydration is a feature of false labor."
        }
      ],
      "priorityAlert": "Cervical dilatation and effacement are the ONLY definitive clinical signs of true labor!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Intrapartum Nursing Assessment"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q53",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Lochia Assessment: Normal Postpartum Progression",
    "scenarioQuestion": "On postpartum Day 4, the nurse examines the lochia of a primiparous mother who delivered vaginally. What type of lochia is normally expected on days 4 to 10 postpartum?",
    "options": [
      {
        "id": "A",
        "text": "Lochia serosa (pinkish-brown, watery discharge consisting of serous exudate, erythrocytes, and leukocytes)"
      },
      {
        "id": "B",
        "text": "Lochia rubra (dark red with fleshy odor and occasional small clots)"
      },
      {
        "id": "C",
        "text": "Lochia alba (yellowish-white discharge lasting up to 3 to 6 weeks)"
      },
      {
        "id": "D",
        "text": "Purulent foul-smelling lochia with large fresh clots"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Normal lochia progression: Lochia Rubra (Days 1–3, dark red); Lochia Serosa (Days 4–10, pinkish-brown, watery); Lochia Alba (Days 11–21+, yellowish-white).",
      "explanation": "Lochia serosa contains old blood, serum, leukocytes, and tissue debris. Foul-smelling lochia indicates puerperal endometritis. Saturated perineal pad in < 15 minutes indicates acute postpartum hemorrhage.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Lochia rubra is expected on postpartum days 1 to 3."
        },
        {
          "option": "C",
          "reason": "Lochia alba is expected from day 10 to 14 up to 3 to 6 weeks postpartum."
        },
        {
          "option": "D",
          "reason": "Foul odor indicates puerperal sepsis/endometritis."
        }
      ],
      "priorityAlert": "Reversal of lochia (e.g. from serosa back to heavy rubra) indicates retained placental fragments or subinvolution!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Postpartum Involution & Assessment"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q54",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetric Complications: Umbilical Cord Prolapse Emergency",
    "scenarioQuestion": "Following spontaneous rupture of membranes in a laboring woman at 4 cm dilatation with fetal station at -2, the nurse observes variable decelerations to 60 bpm and visualizes a loop of pulsating umbilical cord protruding from the introitus. What is the IMMEDIATE priority nursing action?",
    "options": [
      {
        "id": "A",
        "text": "Insert a sterile gloved hand into the vagina and apply upward pressure on the fetal presenting part to relieve cord compression"
      },
      {
        "id": "B",
        "text": "Push the protruding umbilical cord back into the uterine cavity with sterile gauze"
      },
      {
        "id": "C",
        "text": "Start an Oxytocin infusion to accelerate vaginal delivery"
      },
      {
        "id": "D",
        "text": "Have the mother bear down with all her strength"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In overt umbilical cord prolapse, the immediate priority is to insert a sterile gloved hand into the vagina to elevate the presenting part off the cord until an emergency cesarean section is performed.",
      "explanation": "Cord compression stops fetal umbilical blood flow, causing rapid asphyxia and death. The nurse keeps the hand in the vagina elevating the head while placing the mother in Trendelenburg or Knee-Chest position. Never attempt to push the cord back into the uterus as this causes umbilical vasospasm.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Attempting to push the cord back triggers severe vasospasm and complete fetal hypoxia."
        },
        {
          "option": "C",
          "reason": "Oxytocin intensifies contractions and crushes the umbilical cord against the pelvis."
        },
        {
          "option": "D",
          "reason": "Bearing down pushes the fetal head tighter against the cord."
        }
      ],
      "priorityAlert": "Do NOT remove the gloved hand! Keep elevating the fetal head continuously all the way into the operating theatre until the baby is delivered by C-section!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Obstetric Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q55",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Contraception: Copper-T 380A Duration and Mechanism",
    "scenarioQuestion": "A 28-year-old postpartum woman requests an intrauterine contraceptive device (IUCD). The nurse counsels her on the Copper-T 380A. What is the approved maximum lifespan of the Copper-T 380A and its primary mechanism of action?",
    "options": [
      {
        "id": "A",
        "text": "10 years; releases copper ions creating a sterile inflammatory response that is toxic to sperm motility and fertilization"
      },
      {
        "id": "B",
        "text": "3 years; suppresses ovulation via release of progesterone"
      },
      {
        "id": "C",
        "text": "5 years; thickens cervical mucus via levonorgestrel release"
      },
      {
        "id": "D",
        "text": "1 year; causes chemical sterilization of fallopian tubes"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Copper-T 380A has an approved contraceptive efficacy of 10 years. It acts primarily as a spermicide by causing a local sterile foreign body inflammatory reaction and releasing copper ions that impair sperm motility and viability.",
      "explanation": "Copper-T 380A contains 380 mm² of copper wire and sleeves. Cu-T 375 is approved for 5 years. Levonorgestrel-releasing IUDs (Mirena) act by cervical mucus thickening and are approved for 5 to 8 years.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Copper-T does not release progesterone and does not suppress pituitary ovulation."
        },
        {
          "option": "C",
          "reason": "5-year levonorgestrel release describes LNG-IUD (Mirena), not Copper-T 380A."
        },
        {
          "option": "D",
          "reason": "Copper-T does not cause permanent tubal sterilization."
        }
      ],
      "priorityAlert": "Copper-T 380A = 10 years! Copper-T 200 = 3 years! Cu-T 375 = 5 years!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Family Planning & Contraception"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q56",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Gestational Diabetes: Screening and Diagnostic Thresholds",
    "scenarioQuestion": "Under the National Health Mission (NHM) / DIPSI guidelines in India, a pregnant woman is tested for Gestational Diabetes Mellitus (GDM) using a 75 g Oral Glucose Tolerance Test (non-fasting). What 2-hour venous plasma blood glucose level is diagnostic of GDM?",
    "options": [
      {
        "id": "A",
        "text": ">= 140 mg/dL (7.8 mmol/L)"
      },
      {
        "id": "B",
        "text": ">= 200 mg/dL"
      },
      {
        "id": "C",
        "text": ">= 110 mg/dL"
      },
      {
        "id": "D",
        "text": ">= 250 mg/dL"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Under DIPSI (Diabetes in Pregnancy Study Group India) single-step guidelines, a 2-hour plasma glucose value >= 140 mg/dL following a 75 g oral glucose load in either the fasting or non-fasting state is diagnostic of GDM.",
      "explanation": "DIPSI recommends universal screening at first antenatal visit and repeated at 24–28 weeks. A cutoff of >= 140 mg/dL identifies mothers requiring medical nutrition therapy (MNT) and insulin to prevent fetal macrosomia and neonatal hypoglycemia.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": ">= 200 mg/dL is the overt non-pregnant diabetes mellitus random threshold."
        },
        {
          "option": "C",
          "reason": ">= 110 mg/dL is normal."
        },
        {
          "option": "D",
          "reason": ">= 250 mg/dL indicates severe diabetic ketoacidosis/uncontrolled state."
        }
      ],
      "priorityAlert": "DIPSI diagnostic cutoff is exactly >= 140 mg/dL at 2 hours post 75g glucose load!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "High-Risk Antenatal Care & GDM"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q57",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Ectopic Pregnancy: Classic Triad and Rupture Emergency",
    "scenarioQuestion": "A 26-year-old woman with a history of pelvic inflammatory disease presents with sudden excruciating unilateral lower abdominal pain, 6 weeks of amenorrhea, scant dark vaginal spotting, and shoulder tip pain (Kehr's sign). Her BP is 86/52 mmHg. What is the MOST likely clinical diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Ruptured Tubal Ectopic Pregnancy with hemoperitoneum"
      },
      {
        "id": "B",
        "text": "Acute appendicitis"
      },
      {
        "id": "C",
        "text": "Threatened abortion"
      },
      {
        "id": "D",
        "text": "Ovarian hyperstimulation syndrome"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The classic triad of ectopic pregnancy is amenorrhea, unilateral pelvic pain, and vaginal spotting. Kehr's sign (referred shoulder tip pain from diaphragmatic irritation by blood) and hypotension confirm acute rupture with hemoperitoneum.",
      "explanation": "The ampulla is the most common site of tubal ectopic pregnancy (~70%), followed by the isthmus. Rupture produces acute intraperitoneal hemorrhage leading to hypovolemic shock. Emergency laparoscopy/laparotomy salpingectomy is indicated.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Appendicitis presents with periumbilical pain radiating to McBurney's point, fever, and leukocytosis, without Kehr's sign or amenorrhea."
        },
        {
          "option": "C",
          "reason": "Threatened abortion presents with intrauterine pregnancy, mild cramping, closed os, and no hemoperitoneum/shoulder pain."
        },
        {
          "option": "D",
          "reason": "Ovarian hyperstimulation occurs after assisted reproduction gonadotropins and presents with ascites and enlarged multicystic ovaries."
        }
      ],
      "priorityAlert": "Shoulder tip pain (Kehr's sign) in a pregnant patient with pelvic pain signals massive intraperitoneal bleeding from ruptured ectopic pregnancy!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Early Pregnancy Complications"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q58",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Pelvic Anatomy: True vs False Pelvis and Pelvic Planes",
    "scenarioQuestion": "In obstetric pelvic anatomy, which imaginary line divides the pelvis into the \"False Pelvis\" (pelvis major) above and the \"True Pelvis\" (pelvis minor) below?",
    "options": [
      {
        "id": "A",
        "text": "Pelvic Brim (Linea Terminalis)"
      },
      {
        "id": "B",
        "text": "Interspinous line"
      },
      {
        "id": "C",
        "text": "Inferior border of symphysis pubis"
      },
      {
        "id": "D",
        "text": "Intercristal line"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Pelvic Brim (Linea Terminalis) divides the pelvic cavity into the false pelvis above (supports abdominal viscera) and the true pelvis below (forms the bony birth canal).",
      "explanation": "The Linea Terminalis is formed by the sacral promontory, sacral alae, arcuate line of the ilium, pectineal line (pecten pubis), and pubic crest. The true pelvis contains the inlet, cavity, and outlet through which the fetus must descend during labor.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "The interspinous line connects the ischial spines and represents the narrowest transverse diameter of the pelvic cavity (mid-pelvis)."
        },
        {
          "option": "C",
          "reason": "The inferior border of the symphysis pubis marks the anterior boundary of the pelvic outlet."
        },
        {
          "option": "D",
          "reason": "The intercristal line connects the highest points of the iliac crests (used for L4 lumbar puncture)."
        }
      ],
      "priorityAlert": "The true obstetric conjugate measures 10 cm and cannot be measured clinically; the diagonal conjugate is measured per vaginam and is 12 cm (Obstetric = Diagonal - 1.5 to 2 cm)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Obstetric Pelvic Anatomy"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q59",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Gynecological Oncology: Cervical Cancer Screening (Pap Smear)",
    "scenarioQuestion": "During an outpatient well-woman exam, a 30-year-old woman is scheduled for a Papanicolaou (Pap) smear. From which anatomical region of the cervix must cells be sampled to ensure an adequate and accurate oncological screening specimen?",
    "options": [
      {
        "id": "A",
        "text": "Transformation Zone (Squamocolumnar Junction)"
      },
      {
        "id": "B",
        "text": "Anterior vaginal fornix"
      },
      {
        "id": "C",
        "text": "Internal cervical os"
      },
      {
        "id": "D",
        "text": "Endometrial fundus"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Transformation Zone (Squamocolumnar Junction - SCJ), where the columnar epithelium of the endocervix transitions into the stratified squamous epithelium of the ectocervix, is the primary site of HPV infection and cervical neoplasia (CIN / cervical carcinoma).",
      "explanation": "An adequate Pap smear requires both ectocervical cells (Ayre's spatula) and endocervical cells (cytobrush) to sample the transformation zone. Sampling only the vaginal vault yields an unsatisfactory specimen.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Vaginal fornix smears do not contain endocervical transformation cells."
        },
        {
          "option": "C",
          "reason": "Sampling the internal os is an endometrial biopsy procedure, not a screening Pap smear."
        },
        {
          "option": "D",
          "reason": "The fundus is inside the uterine cavity and sampled via Pipelle biopsy."
        }
      ],
      "priorityAlert": "A Pap smear report stating \"Transformation Zone Absent\" is considered inadequate and requires repeat sampling!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Gynecological Oncology Screening"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q60",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Fetal Development: Function of Fetal Shunts (Ductus Arteriosus)",
    "scenarioQuestion": "In fetal circulation, what is the physiological function of the Ductus Arteriosus, and into what anatomical remnant does it normally obliterate after birth?",
    "options": [
      {
        "id": "A",
        "text": "Shunts oxygenated blood from the pulmonary artery into the aorta, bypassing the fluid-filled non-functioning fetal lungs; obliterates into Ligamentum Arteriosum"
      },
      {
        "id": "B",
        "text": "Shunts blood from the right atrium directly to the left atrium; obliterates into Fossa Ovalis"
      },
      {
        "id": "C",
        "text": "Shunts blood from the umbilical vein to the inferior vena cava; obliterates into Ligamentum Venosum"
      },
      {
        "id": "D",
        "text": "Shunts blood from portal vein to renal veins; obliterates into Ligamentum Teres"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Ductus Arteriosus connects the pulmonary artery to the descending aorta, diverting ~90% of right ventricular output away from high-resistance fetal lungs. Postnatally, it closes functional within 10–15 hours and anatomically obliterates into the Ligamentum Arteriosum.",
      "explanation": "Foramen ovale connects the right and left atria (becomes Fossa Ovalis). Ductus venosus shunts umbilical vein blood past the liver into the IVC (becomes Ligamentum Venosum). Umbilical vein obliterates into Ligamentum Teres hepatis.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes the Foramen Ovale, which becomes the Fossa Ovalis."
        },
        {
          "option": "C",
          "reason": "Describes the Ductus Venosus, which becomes the Ligamentum Venosum."
        },
        {
          "option": "D",
          "reason": "Umbilical vein becomes the Ligamentum Teres."
        }
      ],
      "priorityAlert": "Indomethacin (NSAID) inhibits prostaglandins and closes a Patent Ductus Arteriosus (PDA); Alprostadil (PGE1) keeps it open in ductal-dependent congenital heart lesions!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Embryology & Fetal Circulation"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q61",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Neonatology: APGAR Scoring System Evaluation",
    "scenarioQuestion": "At 1 minute after birth, a male neonate has: HR 112 bpm, weak irregular cry, some flexion of extremities, grimace response to bulb suctioning, and pink body with blue hands and feet (acrocyanosis). What is his APGAR score at 1 minute?",
    "options": [
      {
        "id": "A",
        "text": "6 (Heart rate: 2, Cry: 1, Muscle tone: 1, Reflex irritability: 1, Color: 1)"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "APGAR criteria: Heart rate > 100 = 2; Respiratory effort (weak/slow) = 1; Muscle tone (some flexion) = 1; Reflex irritability (grimace) = 1; Color (acrocyanosis) = 1. Total score = 2 + 1 + 1 + 1 + 1 = 6.",
      "explanation": "A score of 7–10 is normal/reassuring, 4–6 indicates moderate depression requiring stimulation and supplemental oxygen/positive pressure, and 0–3 indicates severe distress requiring immediate full cardiopulmonary resuscitation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "8 would require vigorous active motion and completely pink trunk/extremities."
        },
        {
          "option": "C",
          "reason": "4 undercounts the heart rate > 100 and positive responses."
        },
        {
          "option": "D",
          "reason": "10 requires complete perfection with no acrocyanosis and vigorous cry."
        }
      ],
      "priorityAlert": "Acrocyanosis (blue extremities with pink torso) is normal in the first 24–48 hours and receives 1 point for color!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neonatal Resuscitation & APGAR"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q62",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Congenital Anomalies: Hirschsprung Disease Clinical Features",
    "scenarioQuestion": "A full-term newborn fails to pass meconium within the first 48 hours of life. The infant develops abdominal distension and begins vomiting bile-stained fluid. On digital rectal examination, there is explosive expulsion of liquid stool and foul flatus. What is the underlying pathology of this disorder?",
    "options": [
      {
        "id": "A",
        "text": "Congenital absence of parasympathetic ganglion cells (Auerbach and Meissner plexuses) in the distal bowel segment"
      },
      {
        "id": "B",
        "text": "Hypertrophy and hyperplasia of the circular pyloric sphincter muscle"
      },
      {
        "id": "C",
        "text": "Telescoping of the ileum into the cecum causing bowel ischemia"
      },
      {
        "id": "D",
        "text": "Herniation of abdominal contents into the base of the umbilical cord"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Hirschsprung Disease (congenital aganglionic megacolon) is caused by the failure of neural crest cells to migrate, leading to an absence of autonomic ganglion cells in the myenteric (Auerbach) and submucosal (Meissner) plexuses of the distal rectum/colon.",
      "explanation": "The aganglionic segment remains permanently contracted and fails to relax peristaltically, creating a functional bowel obstruction. Upstream proximal bowel becomes massively dilated (megacolon). Digital rectal exam causes a characteristic \"squirt sign\" or \"blast sign\". Rectal suction biopsy confirming absence of ganglion cells is the gold standard.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Describes Hypertrophic Pyloric Stenosis (non-bilious projectile vomiting, olive-shaped mass)."
        },
        {
          "option": "C",
          "reason": "Describes Intussusception (currant jelly stool, sausage-shaped mass)."
        },
        {
          "option": "D",
          "reason": "Describes Omphalocele."
        }
      ],
      "priorityAlert": "Failure to pass meconium within 24 to 48 hours of birth is the hallmark initial warning sign of Hirschsprung Disease or Cystic Fibrosis (meconium ileus)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric GI Anomalies"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q63",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Pediatric GI: Hypertrophic Pyloric Stenosis Classic Signs",
    "scenarioQuestion": "A 4-week-old first-born male infant presents with sudden, non-bilious projectile vomiting immediately after every feed. The infant is constantly hungry and eager to nurse again. On palpation, a firm, non-tender olive-shaped mass is felt in the right epigastrium. What classic metabolic derangement does this infant develop?",
    "options": [
      {
        "id": "A",
        "text": "Hypochloremic, Hypokalemic Metabolic Alkalosis"
      },
      {
        "id": "B",
        "text": "Hyperkalemic Metabolic Acidosis"
      },
      {
        "id": "C",
        "text": "Hyperchloremic Respiratory Acidosis"
      },
      {
        "id": "D",
        "text": "Hypoglycemic Ketoacidosis"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Persistent severe non-bilious vomiting causes massive loss of gastric hydrochloric acid (HCl) and potassium, resulting in Hypochloremic, Hypokalemic Metabolic Alkalosis.",
      "explanation": "As the stomach expels H+ and Cl-, serum bicarbonate rises (metabolic alkalosis). The kidneys try to retain hydrogen ions in exchange for potassium, accelerating urinary potassium wasting. The infant must receive IV fluid rehydration and electrolyte correction prior to surgical pyloromyotomy (Ramstedt procedure).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Metabolic acidosis occurs in diarrhea or dehydration with shock, not isolated gastric vomiting."
        },
        {
          "option": "C",
          "reason": "Respiratory acidosis is caused by pulmonary hypoventilation, not GI losses."
        },
        {
          "option": "D",
          "reason": "Ketoacidosis occurs in uncontrolled diabetes or prolonged starvation."
        }
      ],
      "priorityAlert": "Pyloric stenosis vomiting is ALWAYS NON-BILIOUS because the obstruction is proximal to the ampulla of Vater!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Surgical Conditions"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q64",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Pediatric GI: Intussusception Clinical Triad & Reduction",
    "scenarioQuestion": "An 8-month-old infant is brought to the casualty with severe episodic colicky abdominal pain during which he draws his knees up to his chest and screams inconsolably, alternating with lethargy. Stool examination reveals mucus mixed with dark blood (\"red currant jelly stool\"). A tubular, sausage-shaped mass is palpated in the right upper quadrant. What is the initial NON-SURGICAL therapeutic procedure of choice?",
    "options": [
      {
        "id": "A",
        "text": "Pneumatic (air) or Hydrostatic (saline/barium) contrast enema reduction under fluoroscopic/ultrasound guidance"
      },
      {
        "id": "B",
        "text": "Immediate exploratory laparotomy with segmental bowel resection"
      },
      {
        "id": "C",
        "text": "Administration of high-dose intravenous Neostigmine"
      },
      {
        "id": "D",
        "text": "Continuous nasogastric decompression with watchful waiting for 72 hours"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In non-perforated intussusception without signs of peritonitis or shock, pneumatic (air insufflation) or hydrostatic (normal saline/contrast) enema is both diagnostic and therapeutic, successfully reducing the invagination in >80% of cases.",
      "explanation": "The controlled pressure of air or fluid exerts retrograde pressure on the intussusceptum, pushing it back out of the intussuscipiens. If signs of peritonitis, bowel necrosis, or perforation exist, enema reduction is contraindicated and immediate laparotomy is mandated.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Surgery is reserved for failure of enema reduction, peritonitis, perforation, or gangrenous bowel."
        },
        {
          "option": "C",
          "reason": "Neostigmine increases bowel motility and can rupture the ischemic intussuscepted bowel."
        },
        {
          "option": "D",
          "reason": "Delaying reduction for 72 hours leads to transmural necrosis, gangrene, and septic shock."
        }
      ],
      "priorityAlert": "If the infant passes a normal brown stool before the scheduled enema or surgery, notify the surgeon immediately — it signifies spontaneous reduction!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q65",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Congenital Heart Disease: Tetralogy of Fallot Components",
    "scenarioQuestion": "A 2-year-old child with known congenital heart disease squats frequently during play. Echocardiography confirms Tetralogy of Fallot (TOF). What are the FOUR classic anatomical defects comprising TOF?",
    "options": [
      {
        "id": "A",
        "text": "Ventricular Septal Defect (VSD), Pulmonic Stenosis (infundibular), Overriding of the Aorta, and Right Ventricular Hypertrophy (RVH)"
      },
      {
        "id": "B",
        "text": "Atrial Septal Defect (ASD), Aortic Stenosis, Coarctation of Aorta, Left Ventricular Hypertrophy"
      },
      {
        "id": "C",
        "text": "Patent Ductus Arteriosus, Transposition of Great Arteries, Tricuspid Atresia, Mitral Stenosis"
      },
      {
        "id": "D",
        "text": "VSD, Pulmonary Atresia, Dextrocardia, Endocardial Cushion Defect"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Tetralogy of Fallot consists of: (1) Ventricular Septal Defect (large), (2) Pulmonic Stenosis (sub-pulmonic infundibular stenosis), (3) Overriding Aorta, and (4) Right Ventricular Hypertrophy (RVH). Mnemonic: \"PROVe\".",
      "explanation": "The degree of Pulmonic Stenosis is the primary determinant of clinical severity and degree of cyanosis. Squatting increases systemic vascular resistance (SVR), which decreases the right-to-left shunt across the VSD, directing more desaturated blood into the pulmonary circulation for oxygenation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Does not match TOF criteria (contains ASD, LVH, Coarctation)."
        },
        {
          "option": "C",
          "reason": "Lists other complex acyanotic/cyanotic anomalies."
        },
        {
          "option": "D",
          "reason": "Incorrect anatomy."
        }
      ],
      "priorityAlert": "During a hypercyanotic \"TET spell\", place the child immediately in the KNEE-CHEST position to increase systemic vascular resistance and abort the hypoxic spell!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Congenital Cardiology"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q66",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Developmental Milestones: Social Smile and Neck Holding",
    "scenarioQuestion": "A mother brings her infant to the child health clinic for routine developmental milestone assessment. At what age does a normal infant demonstrate social smile and complete head control (no neck lag when pulled to sit)?",
    "options": [
      {
        "id": "A",
        "text": "Social smile at 2 months; complete head control (neck holding) at 3 to 4 months"
      },
      {
        "id": "B",
        "text": "Social smile at 6 months; head control at 8 months"
      },
      {
        "id": "C",
        "text": "Social smile at birth; head control at 1 month"
      },
      {
        "id": "D",
        "text": "Social smile at 9 months; head control at 12 months"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Key gross motor and personal-social milestones: Social smile appears at 2 months of age. Sustained neck holding / head control without head lag when pulled to sit is achieved at 3 to 4 months.",
      "explanation": "Rolling over front-to-back occurs at 4–5 months; sitting without support at 6–8 months; crawling at 8–9 months; standing with support at 9–10 months; walking alone at 12–15 months.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "By 6 months, infants can sit with support and babble, well past social smile."
        },
        {
          "option": "C",
          "reason": "Endogenous smiles during REM sleep occur in neonates, but intentional social smile requires cortical visual response at 2 months."
        },
        {
          "option": "D",
          "reason": "9 to 12 months represents pincer grasp, standing, and first words."
        }
      ],
      "priorityAlert": "Persistent head lag beyond 4 to 6 months of age is a major red flag indicating cerebral palsy or hypotonia!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Growth & Development"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q67",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Pediatric Respiratory: Croup (Laryngotracheobronchitis) vs Epiglottitis",
    "scenarioQuestion": "A 2-year-old toddler is brought to the pediatric ER with a barking, seal-like cough, inspiratory stridor, and hoarseness that worsens at night. Neck AP radiography shows subglottic narrowing known as the \"steeple sign\". What is the initial medical therapy of choice for moderate-to-severe viral croup?",
    "options": [
      {
        "id": "A",
        "text": "Single dose of oral or IM Dexamethasone (0.6 mg/kg) plus Nebulized Racemic Epinephrine"
      },
      {
        "id": "B",
        "text": "Immediate endotracheal intubation and IV Ampicillin"
      },
      {
        "id": "C",
        "text": "Oral Codeine cough suppressant and warm milk"
      },
      {
        "id": "D",
        "text": "Nebulized Albuterol every 15 minutes"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Viral croup (Laryngotracheobronchitis, commonly Parainfluenza virus) is treated with Dexamethasone (0.15–0.6 mg/kg) to reduce subglottic mucosal edema, accompanied by Nebulized Epinephrine for rapid vasoconstriction in moderate-to-severe stridor.",
      "explanation": "The classic radiologic finding is the \"steeple sign\" (tapering of the subglottic trachea). Epiglottitis, in contrast, presents with high fever, toxic appearance, absence of cough, drooling, and a \"thumbprint sign\" on lateral neck X-ray.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Invasive intubation is unnecessary in croup unless impending respiratory failure; it is more typical for acute bacterial epiglottitis."
        },
        {
          "option": "C",
          "reason": "Cough suppressants cause sedation and suppress protective airway clearance."
        },
        {
          "option": "D",
          "reason": "Albuterol targets lower airway beta-2 receptors for bronchospasm; it does not relieve upper subglottic mucosal swelling."
        }
      ],
      "priorityAlert": "Never use a tongue depressor to inspect the throat if Acute Epiglottitis is suspected! Doing so can trigger fatal laryngospasm!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Pulmonology & Airway"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q68",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Infectious Diseases: Measles (Rubeola) Koplik Spots",
    "scenarioQuestion": "A 3-year-old unimmunized child presents with high fever, conjunctivitis with photophobia, coryza, and a severe hacking cough (the 3 Cs). On oral examination 48 hours prior to the appearance of a maculopapular rash, tiny bluish-white ulcerated spots on an erythematous base are observed on the buccal mucosa opposite the lower molars. What are these diagnostic lesions called?",
    "options": [
      {
        "id": "A",
        "text": "Koplik spots (pathognomonic of Measles/Rubeola)"
      },
      {
        "id": "B",
        "text": "Epstein pearls"
      },
      {
        "id": "C",
        "text": "Brushfield spots"
      },
      {
        "id": "D",
        "text": "Bitot's spots"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Koplik spots (small, irregular bluish-white grains on a red background resembling grains of sand on the buccal mucosa opposite second molars) are pathognomonic for Measles (Rubeola).",
      "explanation": "Koplik spots appear 1 to 2 days before the maculopapular exanthem (which begins at hairline/behind ears and spreads cephalocaudally). Epstein pearls are benign keratin cysts on newborn palates. Brushfield spots are iris speckling in Down syndrome. Bitot's spots are conjunctival plaques of Vitamin A deficiency.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Epstein pearls are normal benign epithelial cysts in neonates."
        },
        {
          "option": "C",
          "reason": "Brushfield spots are white/gray spots on the iris in Trisomy 21."
        },
        {
          "option": "D",
          "reason": "Bitot's spots are triangular keratinized conjunctival deposits from Vitamin A deficiency."
        }
      ],
      "priorityAlert": "WHO recommends administering high-dose Vitamin A (100,000–200,000 IU) to all children diagnosed with measles to prevent corneal ulceration and fatal pneumonia!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Infectious Diseases"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q69",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Genetic Disorders: Down Syndrome (Trisomy 21) Physical Features",
    "scenarioQuestion": "A nurse examines a newborn infant suspected of having Down Syndrome (Trisomy 21). Which combination of clinical features is MOST characteristic of this chromosomal abnormality?",
    "options": [
      {
        "id": "A",
        "text": "Upward-slanting palpebral fissures, flat nasal bridge, single transverse palmar crease (simian crease), low-set ears, and muscular hypotonia"
      },
      {
        "id": "B",
        "text": "Rocker-bottom feet, micrognathia, overlapping fingers, and severe microcephaly"
      },
      {
        "id": "C",
        "text": "Holoprosencephaly, cleft lip/palate, microphthalmia, and polydactyly"
      },
      {
        "id": "D",
        "text": "Webbed neck, short stature, widely spaced nipples, and coarctation of the aorta in a female"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Trisomy 21 (Down syndrome) presents with upward-slanting palpebral fissures, epicanthal folds, flat nasal bridge, protruding tongue, single transverse palmar (simian) crease, gap between 1st and 2nd toes (sandal gap), and generalized marked hypotonia.",
      "explanation": "Trisomy 18 (Edwards syndrome) features rocker-bottom feet and clenched overlapping fingers. Trisomy 13 (Patau syndrome) features microphthalmia, cleft lip/palate, and polydactyly. Turner syndrome (45,X0) features webbed neck, shield chest, and coarctation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Features Edwards syndrome (Trisomy 18)."
        },
        {
          "option": "C",
          "reason": "Features Patau syndrome (Trisomy 13)."
        },
        {
          "option": "D",
          "reason": "Features Turner syndrome (45,X0)."
        }
      ],
      "priorityAlert": "Up to 40%–50% of children with Down Syndrome have congenital heart defects, most commonly Endocardial Cushion Defects (Atrioventricular Septal Defect)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Genetics & Dysmorphology"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q70",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Nutrition: Severe Acute Malnutrition (SAM) Diagnostic Criteria",
    "scenarioQuestion": "According to WHO and National Health Mission (NHM) standards, which anthropometric measurement classifies a 2-year-old child as having Severe Acute Malnutrition (SAM) requiring admission to a Nutrition Rehabilitation Centre (NRC)?",
    "options": [
      {
        "id": "A",
        "text": "Weight-for-height Z-score < -3 SD and/or Mid-Upper Arm Circumference (MUAC) < 115 mm (11.5 cm) and/or bilateral pitting edema"
      },
      {
        "id": "B",
        "text": "MUAC between 125 mm and 135 mm"
      },
      {
        "id": "C",
        "text": "Weight-for-age Z-score between -1 and -2 SD"
      },
      {
        "id": "D",
        "text": "Height-for-age Z-score < -2 SD only"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "WHO/NHM criteria for Severe Acute Malnutrition (SAM) in children 6–59 months: (1) Weight-for-height/length < -3 Z-scores, (2) MUAC < 115 mm (11.5 cm, Red on Shakir tape), or (3) Presence of bilateral nutritional pitting edema (kwashiorkor).",
      "explanation": "Moderate Acute Malnutrition (MAM) is defined as MUAC between 115 and 125 mm (Yellow) or WHZ between -2 and -3 SD. Height-for-age reflects chronic malnutrition (stunting), while weight-for-height reflects acute malnutrition (wasting).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "MUAC > 125 mm is green (normal/mildly malnourished)."
        },
        {
          "option": "C",
          "reason": "Weight-for-age reflects general underweight, not SAM criteria."
        },
        {
          "option": "D",
          "reason": "Height-for-age < -2 SD is stunting (chronic growth faltering)."
        }
      ],
      "priorityAlert": "MUAC < 11.5 cm (115 mm) = RED = SAM! In SAM resuscitation, never give IV fluids aggressively; use low-osmolarity ReSoMal to prevent heart failure!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Nutrition & SAM"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q71",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Renal Disorders: Minimal Change Disease Nephrotic Syndrome",
    "scenarioQuestion": "A 4-year-old boy presents with severe generalized edema (anasarca), periorbital puffiness upon waking, ascites, and scrotal swelling. Urinalysis reveals 4+ proteinuria (>50 mg/kg/day) and fatty casts, while serum albumin is 1.6 g/dL and cholesterol is 380 mg/dL. What is the FIRST-LINE medical treatment of choice for idiopathic childhood nephrotic syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Oral Prednisolone (corticosteroid therapy at 2 mg/kg/day or 60 mg/m2/day)"
      },
      {
        "id": "B",
        "text": "Intravenous Cyclophosphamide"
      },
      {
        "id": "C",
        "text": "High-dose Loop Diuretic alone without albumin"
      },
      {
        "id": "D",
        "text": "Lifelong renal dialysis"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The hallmark features of Nephrotic Syndrome are massive proteinuria, severe hypoalbuminemia (<2.5 g/dL), generalized edema, and hyperlipidemia. First-line therapy for Minimal Change Disease is oral Prednisolone (60 mg/m2/day for 6 weeks, followed by alternate-day tapering).",
      "explanation": "Minimal Change Disease accounts for >80% of childhood nephrotic syndrome and has an exceptional steroid response rate (>90%). Prednisolone suppresses cytokine-mediated loss of podocyte foot processes and restores glomerular charge selectivity.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Cyclophosphamide is second-line therapy reserved for steroid-dependent or frequent-relapsing cases."
        },
        {
          "option": "C",
          "reason": "Aggressive loop diuretics without albumin in severe hypovolemia precipitate acute tubular necrosis and thromboembolism."
        },
        {
          "option": "D",
          "reason": "Childhood nephrotic syndrome rarely leads to end-stage renal disease."
        }
      ],
      "priorityAlert": "Children with Nephrotic Syndrome are at high risk for spontaneous bacterial peritonitis (Streptococcus pneumoniae) and deep venous thrombosis due to loss of Antithrombin III in urine!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Nephrology"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q72",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_05",
    "topicTitle": "Pediatric Oncology: Wilms Tumor (Nephroblastoma) Abdominal Caution",
    "scenarioQuestion": "A 3-year-old child is admitted for evaluation of a painless, firm abdominal mass discovered by the mother during bathing. A diagnosis of Wilms tumor (Nephroblastoma) is suspected. What is the MOST critical nursing precaution that must be posted above the child’s bed?",
    "options": [
      {
        "id": "A",
        "text": "\"DO NOT PALPATE THE ABDOMEN\" — palpation can rupture the encapsulated tumor and cause peritoneal dissemination of malignant cells"
      },
      {
        "id": "B",
        "text": "\"Strict NPO at all times\""
      },
      {
        "id": "C",
        "text": "\"Keep in Trendelenburg position continuously\""
      },
      {
        "id": "D",
        "text": "\"Administer warm abdominal compresses hourly\""
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In Wilms tumor (Nephroblastoma), abdominal palpation is strictly forbidden and a prominent sign \"DO NOT PALPATE ABDOMEN\" must be posted at the bedside. Palpation can easily rupture the delicate tumor capsule, spilling malignant nephroblastic cells into the peritoneal cavity.",
      "explanation": "Wilms tumor arises from embryonic renal precursors and is surrounded by a thin pseudocapsule. Capsule rupture transforms a localized resectable Stage I/II tumor into a widespread Stage III/IV malignancy requiring extensive chemotherapy and radiotherapy.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "NPO is only required before surgery or anesthesia."
        },
        {
          "option": "C",
          "reason": "Trendelenburg position is inappropriate and increases respiratory work."
        },
        {
          "option": "D",
          "reason": "Warm compresses increase vascularity and tumor rupture risk."
        }
      ],
      "priorityAlert": "Never palpate an abdominal mass suspected to be Wilms Tumor! Place a warning sign immediately at the patient bedside!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Oncology & Nursing Safety"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q73",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiovascular Pharmacology: Digoxin Toxicity Manifestations",
    "scenarioQuestion": "A 72-year-old patient with congestive heart failure and atrial fibrillation is taking oral Digoxin 0.25 mg daily. Which symptom is recognized as an early classic sensory indicator of Digoxin toxicity?",
    "options": [
      {
        "id": "A",
        "text": "Visual disturbances, including yellow-green halos around lights (xanthopsia) and blurred vision"
      },
      {
        "id": "B",
        "text": "Sudden high spiking fever and chills"
      },
      {
        "id": "C",
        "text": "Flushing of the face and warm extremities"
      },
      {
        "id": "D",
        "text": "Marked polyuria and excessive thirst"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Classic signs of Digoxin toxicity include GI symptoms (anorexia, nausea, vomiting as the earliest signs), neurological signs (confusion, fatigue), and ocular disturbances (yellow-green halos/xanthopsia, blurry vision).",
      "explanation": "Therapeutic serum digoxin level is 0.5 to 0.9 ng/mL (toxicity occurs > 2.0 ng/mL). Hypokalemia sensitizes the myocardium to digitalis toxicity because potassium and digoxin compete for binding on the Na+/K+ ATPase pump. Digoxin immune Fab (DigiFab) is the specific antidote.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Fever and chills are signs of infection, not digitalis toxicity."
        },
        {
          "option": "C",
          "reason": "Flushing occurs with vasodilators (nitrates, niacin), not cardiac glycosides."
        },
        {
          "option": "D",
          "reason": "Polyuria is seen in diabetes mellitus/insipidus."
        }
      ],
      "priorityAlert": "Always check serum Potassium before giving Digoxin! Hypokalemia dramatically increases the risk of fatal Digoxin-induced ventricular arrhythmias!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Cardiac Glycosides & Toxicity"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q74",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Anticoagulation Pharmacology: Heparin vs Warfarin Monitoring",
    "scenarioQuestion": "A patient with pulmonary embolism is receiving a continuous Unfractionated Heparin (UFH) IV infusion and is being transitioned to oral Warfarin (Coumadin). Which laboratory parameters must the nurse monitor to evaluate the therapeutic efficacy of Heparin and Warfarin, respectively?",
    "options": [
      {
        "id": "A",
        "text": "Heparin: Activated Partial Thromboplastin Time (aPTT); Warfarin: Prothrombin Time / International Normalized Ratio (PT/INR)"
      },
      {
        "id": "B",
        "text": "Heparin: PT/INR; Warfarin: aPTT"
      },
      {
        "id": "C",
        "text": "Heparin: Platelet Count only; Warfarin: Bleeding Time"
      },
      {
        "id": "D",
        "text": "Heparin: Serum Fibrinogen; Warfarin: Thrombin Time"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Heparin affects the intrinsic coagulation cascade and is monitored via aPTT (target 1.5 to 2.5 times the control baseline: ~60–80 seconds). Warfarin inhibits Vitamin K epoxide reductase (extrinsic cascade) and is monitored via PT/INR (target INR 2.0 to 3.0).",
      "explanation": "Heparin's antidote is Protamine Sulfate (1 mg neutralizes 100 units of heparin). Warfarin's antidote is Vitamin K1 (Phytonadione) and Prothrombin Complex Concentrate (PCC) or Fresh Frozen Plasma (FFP).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Inverted the tests (PT/INR belongs to Warfarin, aPTT to Heparin)."
        },
        {
          "option": "C",
          "reason": "Bleeding time measures platelet function, not oral vitamin K antagonism."
        },
        {
          "option": "D",
          "reason": "Fibrinogen is monitored in DIC and thrombolytic therapy."
        }
      ],
      "priorityAlert": "UFH = aPTT (Antidote: Protamine Sulfate)! Warfarin = PT/INR (Antidote: Vitamin K / PCC)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Anticoagulation Monitoring & Antidotes"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q75",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrine Pharmacology: Rapid-Acting Insulin Lispro Timing",
    "scenarioQuestion": "A hospitalized diabetic patient is prescribed 6 units of subcutaneous Insulin Lispro (Humalog) with breakfast. What is the ONSET of action of Lispro, and when should the meal tray be physically present in front of the patient?",
    "options": [
      {
        "id": "A",
        "text": "Onset 10 to 15 minutes; meal tray must be at the bedside before or immediately within 15 minutes of injection"
      },
      {
        "id": "B",
        "text": "Onset 30 to 60 minutes; give 1 hour before food arrives from the pantry"
      },
      {
        "id": "C",
        "text": "Onset 2 to 4 hours; meal is unnecessary"
      },
      {
        "id": "D",
        "text": "Onset 10 seconds; inject only after dinner is digested"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Rapid-acting insulins (Lispro, Aspart, Glulisine) have an onset of action of 10 to 15 minutes, peak in 30 to 90 minutes, and duration of 3 to 5 hours. Food must be at bedside to prevent severe hypoglycemia.",
      "explanation": "Regular insulin (short-acting) has an onset of 30 to 60 minutes and is administered 30 minutes before meals. NPH (intermediate) has an onset of 1 to 2 hours (peak 4–12 hours). Glargine/Detemir (long-acting) are peakless basal insulins.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "30-60 minutes onset describes Regular (short-acting) human insulin."
        },
        {
          "option": "C",
          "reason": "2-4 hours describes intermediate NPH insulin."
        },
        {
          "option": "D",
          "reason": "Insulin does not work in 10 seconds."
        }
      ],
      "priorityAlert": "Never administer rapid-acting insulin (Lispro/Aspart) unless the patient's food tray is sitting right in front of them!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Diabetes & Insulin Kinetics"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q76",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Emergency Antidotes: Acetaminophen (Paracetamol) Poisoning",
    "scenarioQuestion": "A 20-year-old ingested 30 tablets of Paracetamol (500 mg each) 4 hours ago in a suicide attempt. The emergency physician orders the specific antidote to prevent fatal hepatic necrosis. What is the antidote, and how does it protect hepatocytes?",
    "options": [
      {
        "id": "A",
        "text": "N-Acetylcysteine (NAC); replenishes intracellular glutathione reserves to detoxify toxic NAPQI metabolite"
      },
      {
        "id": "B",
        "text": "Flumazenil; acts as a competitive GABA receptor antagonist"
      },
      {
        "id": "C",
        "text": "Deferoxamine; chelates free circulating iron"
      },
      {
        "id": "D",
        "text": "Methylene Blue; reduces ferric iron to ferrous iron"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "N-Acetylcysteine (NAC / Mucomyst) is the specific antidote for Acetaminophen (Paracetamol) overdose. It restores depleted hepatic glutathione, allowing conjugation and non-toxic excretion of the reactive hepatotoxic metabolite N-acetyl-p-benzoquinone imine (NAPQI).",
      "explanation": "NAC is maximally effective when administered within 8 to 10 hours of acute ingestion, guided by the Rumack-Matthew nomogram. Flumazenil reverses benzodiazepines, Deferoxamine treats iron toxicity, and Methylene Blue treats methemoglobinemia.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Flumazenil is the antidote for Benzodiazepine toxicity."
        },
        {
          "option": "C",
          "reason": "Deferoxamine is the antidote for Acute Iron poisoning."
        },
        {
          "option": "D",
          "reason": "Methylene Blue is the antidote for Methemoglobinemia."
        }
      ],
      "priorityAlert": "Paracetamol antidote = N-Acetylcysteine (NAC)! Benzodiazepine antidote = Flumazenil! Opioid antidote = Naloxone!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Toxicology & Antidotes"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q77",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Antimicrobial Pharmacology: Vancomycin Red Man Syndrome",
    "scenarioQuestion": "During rapid intravenous infusion of Vancomycin 1000 mg over 20 minutes, the patient suddenly develops profound flushing, erythema, and a pruritic erythematous rash across the face, neck, and upper torso, accompanied by mild hypotension. What is the cause of this reaction, and what should the nurse do?",
    "options": [
      {
        "id": "A",
        "text": "Red Man Syndrome caused by non-immune direct histamine release due to rapid infusion; stop/slow infusion rate to run over at least 60 to 120 minutes"
      },
      {
        "id": "B",
        "text": "True IgE-mediated anaphylactic shock; administer IV Epinephrine 1 mg push immediately"
      },
      {
        "id": "C",
        "text": "Stevens-Johnson Syndrome; discontinue all future glycopeptides forever"
      },
      {
        "id": "D",
        "text": "Infiltration of IV cannula; apply cold compress and speed up pump"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Red Man Syndrome is a rate-dependent, non-allergic (pseudo-allergic) adverse reaction caused by rapid IV administration of Vancomycin triggering direct mast cell degranulation and histamine release. It is prevented by infusing Vancomycin slowly over at least 60 to 120 minutes (at rate <= 10 mg/min).",
      "explanation": "If Red Man Syndrome occurs, stop the infusion immediately, administer an antihistamine (Diphenhydramine), and once erythema resolves, restart the infusion at half the previous rate (diluted to run over >= 2 hours).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "True anaphylaxis is IgE-mediated with wheezing, laryngeal edema, and cardiovascular collapse; Red Man is an infusion-rate phenomenon."
        },
        {
          "option": "C",
          "reason": "Stevens-Johnson is an immune mucocutaneous detachment reaction occurring days later."
        },
        {
          "option": "D",
          "reason": "Speeding up the pump worsens the histamine surge."
        }
      ],
      "priorityAlert": "Always infuse Vancomycin at a rate no faster than 10 mg/min or over a minimum of 60 minutes for each 1000 mg to prevent Red Man Syndrome!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Antibiotics & Adverse Drug Reactions"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q78",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurological Pharmacology: Phenytoin Toxicity & Administration Precautions",
    "scenarioQuestion": "A patient with generalized tonic-clonic seizures is receiving IV Phenytoin (Dilantin). Which intravenous fluid is COMPATIBLE with Phenytoin infusion, and what is the maximum recommended IV infusion rate in adults?",
    "options": [
      {
        "id": "A",
        "text": "Normal Saline (0.9% NaCl) only; maximum rate 50 mg/minute"
      },
      {
        "id": "B",
        "text": "5% Dextrose in Water (D5W); maximum rate 100 mg/minute"
      },
      {
        "id": "C",
        "text": "Ringer Lactate; maximum rate 200 mg/minute"
      },
      {
        "id": "D",
        "text": "Total Parenteral Nutrition (TPN); rate 10 mg/minute"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Phenytoin is strictly compatible ONLY with 0.9% Normal Saline because it precipitates immediately in dextrose-containing solutions. In adults, the maximum IV infusion rate is 50 mg/minute (to prevent severe hypotension and cardiac arrest).",
      "explanation": "Phenytoin is highly alkaline (pH 12). Rapid IV infusion causes profound myocardial depression and fatal arrhythmias. In elderly patients or cardiac disease, the rate should not exceed 25 mg/min. Therapeutic blood level is 10 to 20 mcg/mL. Gingival hyperplasia and nystagmus are classic chronic side effects.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Dextrose causes immediate crystal precipitation of phenytoin in the tubing."
        },
        {
          "option": "C",
          "reason": "200 mg/min causes cardiovascular collapse and ventricular asystole."
        },
        {
          "option": "D",
          "reason": "Never mix phenytoin into TPN."
        }
      ],
      "priorityAlert": "Phenytoin precipitates instantly in Dextrose! Always flush line with 0.9% Normal Saline before and after administration!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Antiepileptics & IV Safety"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q79",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Renal Pharmacology: Loop Diuretic Ototoxicity Mechanism",
    "scenarioQuestion": "A patient with severe acute decompensated heart failure is receiving high-dose intravenous Furosemide (Lasix). What serious, potentially irreversible sensory complication can occur if Furosemide is pushed too rapidly as an IV bolus?",
    "options": [
      {
        "id": "A",
        "text": "Ototoxicity (tinnitus, sensorineural hearing loss, and vertigo)"
      },
      {
        "id": "B",
        "text": "Optic neuritis with central scotoma"
      },
      {
        "id": "C",
        "text": "Loss of sense of taste (dysgeusia)"
      },
      {
        "id": "D",
        "text": "Permanent anosmia"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Rapid intravenous administration of high-dose Loop Diuretics (Furosemide, Bumetanide) alters endolymph electrolyte composition in the stria vascularis of the cochlea, causing transient or permanent Ototoxicity (tinnitus, hearing impairment).",
      "explanation": "The risk of ototoxicity is dramatically increased when IV push rate exceeds 4 mg/minute or when co-administered with other ototoxic drugs like Aminoglycosides (Gentamicin, Amikacin).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Optic neuritis is associated with Ethambutol, not Furosemide."
        },
        {
          "option": "C",
          "reason": "Dysgeusia is common with Metronidazole or ACE inhibitors."
        },
        {
          "option": "D",
          "reason": "Anosmia is associated with zinc deficiency or viral damage."
        }
      ],
      "priorityAlert": "Never push IV Furosemide faster than 4 mg per minute! Fast push causes cochlear damage and tinnitus!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Diuretics & Sensory Complications"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q80",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Respiratory Pharmacology: Inhaled Corticosteroids Oral Candidiasis",
    "scenarioQuestion": "A patient with persistent asthma is prescribed inhaled Fluticasone propionate via a metered-dose inhaler (MDI) twice daily. Which nursing instruction is ESSENTIAL to prevent the development of oropharyngeal candidiasis (oral thrush) and dysphonia?",
    "options": [
      {
        "id": "A",
        "text": "Rinse the mouth thoroughly with water and spit it out after every inhalation, and use a spacer device"
      },
      {
        "id": "B",
        "text": "Swallow the rinse water to coat the esophagus"
      },
      {
        "id": "C",
        "text": "Take the corticosteroid only after meals and avoid brushing teeth"
      },
      {
        "id": "D",
        "text": "Exhale rapidly into the inhaler device before closing the cap"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Inhaled corticosteroids (ICS) deposit particles in the oropharynx, suppressing local mucosal immunity and causing oral candidiasis (thrush) and vocal cord dysphonia. Rinsing and spitting out water plus using a spacer device eliminates oropharyngeal deposition.",
      "explanation": "Using a spacer increases drug delivery to small airways and reduces large-droplet impact in the mouth. Swallowing rinse water must be avoided to prevent systemic steroid absorption and adrenal suppression.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Swallowing rinse water increases systemic corticosteroid bioavailability and side effects."
        },
        {
          "option": "C",
          "reason": "Brushing teeth and oral hygiene are essential."
        },
        {
          "option": "D",
          "reason": "Exhaling into the inhaler introduces moisture and clogs the mouthpiece."
        }
      ],
      "priorityAlert": "Always teach patients: Rinse mouth and SPIT out water after using any steroid inhaler!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Asthma Inhalation Techniques"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q81",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Psychotropic Pharmacology: Lithium Therapeutic Range & Toxicity",
    "scenarioQuestion": "A bipolar patient maintained on Lithium carbonate presents to the outpatient clinic with coarse hand tremors, persistent diarrhea, ataxia, confusion, and tinnitus. The nurse checks the patient’s serum lithium level. What is the standard therapeutic maintenance range for serum lithium?",
    "options": [
      {
        "id": "A",
        "text": "0.6 to 1.2 mEq/L (toxicity emerges at > 1.5 mEq/L)"
      },
      {
        "id": "B",
        "text": "2.0 to 4.0 mEq/L"
      },
      {
        "id": "C",
        "text": "0.1 to 0.3 mEq/L"
      },
      {
        "id": "D",
        "text": "10 to 20 mEq/L"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The therapeutic maintenance range for serum Lithium is 0.6 to 1.2 mEq/L (0.8–1.2 mEq/L for acute mania; 0.6–1.0 mEq/L for maintenance). Toxic manifestations appear when levels exceed 1.5 mEq/L, and severe life-threatening neurotoxicity/seizures occur at > 2.0–2.5 mEq/L.",
      "explanation": "Sodium depletion (hyponatremia, dehydration, thiazide diuretics) causes the proximal renal tubules to reabsorb lithium instead of sodium, triggering toxic lithium accumulation. Patients must maintain adequate hydration (2–3 L/day) and consistent dietary sodium intake.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "2.0 to 4.0 mEq/L causes life-threatening toxicity, coma, and seizures requiring hemodialysis."
        },
        {
          "option": "C",
          "reason": "0.1 to 0.3 mEq/L is sub-therapeutic."
        },
        {
          "option": "D",
          "reason": "10 to 20 mEq/L is the therapeutic range for Theophylline or Phenytoin (in mcg/mL), not Lithium."
        }
      ],
      "priorityAlert": "Hyponatremia causes LITHIUM TOXICITY! Never put a patient on Lithium on a low-sodium diet or thiazide diuretics!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Mood Stabilizers & Therapeutic Monitoring"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q82",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Chemotherapy Precautions: Extravasation Management",
    "scenarioQuestion": "During peripheral intravenous infusion of Doxorubicin (Adriamycin), a potent vesicant, the patient complains of intense burning and stinging at the cannula site. The nurse observes swelling and erythema around the insertion point. What is the nurse's IMMEDIATE priority action?",
    "options": [
      {
        "id": "A",
        "text": "Stop the infusion immediately, aspirate residual drug from the cannula with an empty syringe, and disconnect the line without flushing"
      },
      {
        "id": "B",
        "text": "Slow the infusion rate and apply a warm heating pad to promote absorption"
      },
      {
        "id": "C",
        "text": "Flush the line with 20 mL of sterile water to dilute the vesicant in the tissue"
      },
      {
        "id": "D",
        "text": "Remove the IV cannula immediately before attempting any aspiration"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In vesicant chemotherapy extravasation: (1) STOP infusion immediately, (2) attach an empty syringe and aspirate as much extravasated drug as possible from the cannula, (3) instill specific antidote if indicated, (4) remove catheter, and (5) outline margins with a surgical marker.",
      "explanation": "Flushing the line pushes remaining vesicant into surrounding subcutaneous tissues, causing extensive necrosis, tendon damage, and compartment syndrome. Doxorubicin is treated with cold compresses and the specific antidote Dexrazoxane.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Never continue or slow an extravasating vesicant infusion; it causes full-thickness tissue sloughing."
        },
        {
          "option": "C",
          "reason": "Flushing pushes vesicant deeper into tissue planes, worsening necrosis."
        },
        {
          "option": "D",
          "reason": "Catheter should not be pulled out before aspirating remaining drug and instilling the antidote."
        }
      ],
      "priorityAlert": "NEVER FLUSH an IV line suspected of vesicant extravasation! Stop immediately and aspirate!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Oncologic Nursing & Vesicant Safety"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q83",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Immunization: National Immunization Schedule (NIS) Pentavalent Vaccine",
    "scenarioQuestion": "Under the Universal Immunization Programme (UIP) in India, what FIVE antigens are contained in the Pentavalent vaccine, and at what ages is it administered as primary doses to infants?",
    "options": [
      {
        "id": "A",
        "text": "Diphtheria, Pertussis, Tetanus, Hepatitis B, and Haemophilus influenzae type b (Hib); administered at 6, 10, and 14 weeks"
      },
      {
        "id": "B",
        "text": "Diphtheria, Pertussis, Tetanus, Polio, and Measles; administered at birth, 6 months, and 9 months"
      },
      {
        "id": "C",
        "text": "BCG, OPV, Rotavirus, Rubella, and Typhoid; administered at 9 months"
      },
      {
        "id": "D",
        "text": "Hepatitis A, Hepatitis B, Cholera, Rabies, and Tetanus; administered at 1 year"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The Pentavalent vaccine protects against 5 diseases: Diphtheria, Pertussis (whooping cough), Tetanus, Hepatitis B, and Hib (Haemophilus influenzae type b). It is administered intramuscularly in the anterolateral midthigh at 6, 10, and 14 weeks of age (0.5 mL).",
      "explanation": "Replacing DPT with Pentavalent has drastically reduced Hib-induced pediatric meningitis and epiglottitis. Booster doses of DPT are subsequently given at 16–24 months and 5–6 years.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Polio and measles are given separately (bOPV/fIPV and MR vaccine)."
        },
        {
          "option": "C",
          "reason": "BCG and OPV are birth doses; Rotavirus is oral drops; MR is at 9 months."
        },
        {
          "option": "D",
          "reason": "Hepatitis A, Cholera, and Rabies are not part of routine UIP pentavalent."
        }
      ],
      "priorityAlert": "Pentavalent is administered INTRAMUSCULARLY in the anterolateral aspect of the middle third of the left thigh!"
    },
    "difficulty": "Easy",
    "clinicalTag": "UIP & Pediatric Vaccines"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q84",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Cold Chain: Vaccine Storage Temperatures & VVM Stages",
    "scenarioQuestion": "Under UIP guidelines, which vaccine is MOST sensitive to freezing (damaged if frozen) and must be stored at +2°C to +8°C in the cold chain, and which vaccine is MOST heat sensitive?",
    "options": [
      {
        "id": "A",
        "text": "Most freeze-sensitive: Hepatitis B / Tetanus / Pentavalent; Most heat-sensitive: Oral Polio Vaccine (OPV)"
      },
      {
        "id": "B",
        "text": "Most freeze-sensitive: OPV; Most heat-sensitive: Tetanus Toxoid"
      },
      {
        "id": "C",
        "text": "Most freeze-sensitive: BCG; Most heat-sensitive: Rabies vaccine"
      },
      {
        "id": "D",
        "text": "All vaccines can be safely frozen at -20°C"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Oral Polio Vaccine (OPV) is the most heat-sensitive vaccine and can be kept in deep freezers (-20°C). Hepatitis B, Tetanus (Td), and Pentavalent contain aluminum adjuvants that precipitate and lose potency if frozen; they are the MOST FREEZE-SENSITIVE vaccines (must never be frozen; store at +2°C to +8°C).",
      "explanation": "The \"Shake Test\" is performed to verify whether an aluminum-adsorbed vaccine (Hepatitis B, DPT, Td, Pentavalent) has been damaged by accidental freezing. If frozen, the sediment settles much faster than a non-frozen control vial.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Inverts heat vs freeze sensitivity; OPV is heat sensitive, Hepatitis B is freeze sensitive."
        },
        {
          "option": "C",
          "reason": "BCG can withstand freezing; freeze-dried BCG is heat sensitive once reconstituted."
        },
        {
          "option": "D",
          "reason": "Freezing destroys aluminum-adsorbed vaccines."
        }
      ],
      "priorityAlert": "Shake Test is used exclusively for FREEZE-SENSITIVE adsorbed vaccines (Hepatitis B, Td, Pentavalent, DPT)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Cold Chain Management"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q85",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Epidemiology: Levels of Disease Prevention Classifications",
    "scenarioQuestion": "A community health nurse conducts Pap smear screening camps for early detection of cervical dysplasia among rural women. According to Leavell and Clark’s levels of prevention, which level does this screening activity represent?",
    "options": [
      {
        "id": "A",
        "text": "Secondary prevention (early diagnosis and prompt treatment)"
      },
      {
        "id": "B",
        "text": "Primary prevention (health promotion and specific protection)"
      },
      {
        "id": "C",
        "text": "Tertiary prevention (disability limitation and rehabilitation)"
      },
      {
        "id": "D",
        "text": "Primordial prevention (prevention of emergence of risk factors)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Secondary Prevention aims at early detection and prompt intervention to arrest disease progression before irreversible damage occurs. Screening tests (Pap smear, mammography, sputum AFB, BP measurement) represent Secondary Prevention.",
      "explanation": "Primordial prevention prevents emergence of environmental/social risk factors (e.g. promoting active lifestyle in children). Primary prevention targets specific protection (immunization, condoms, seatbelts). Tertiary prevention focuses on disability limitation and physical rehabilitation.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Primary prevention prevents disease occurrence through vaccines or lifestyle before disease onset."
        },
        {
          "option": "C",
          "reason": "Tertiary prevention manages established complications to minimize permanent disability."
        },
        {
          "option": "D",
          "reason": "Primordial prevention targets societal risk factor prevention before risk factors exist."
        }
      ],
      "priorityAlert": "All screening tests and diagnostic health surveys belong to SECONDARY PREVENTION!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Epidemiology & Preventive Medicine"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q86",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Demography: Maternal Mortality Ratio (MMR) Definition",
    "scenarioQuestion": "How is the Maternal Mortality Ratio (MMR) epidemiologically defined and calculated in demographic statistics?",
    "options": [
      {
        "id": "A",
        "text": "Number of maternal deaths per 100,000 live births during a given year"
      },
      {
        "id": "B",
        "text": "Number of maternal deaths per 1,000 live births"
      },
      {
        "id": "C",
        "text": "Number of maternal deaths per 100,000 women of reproductive age (15–49 years)"
      },
      {
        "id": "D",
        "text": "Number of maternal deaths per 1,000 total pregnancies"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Maternal Mortality RATIO (MMR) is expressed as the number of resident maternal deaths per 100,000 live births occurring within a given geographic area during a specified year.",
      "explanation": "Maternal Mortality RATE (in contrast to ratio) is the number of maternal deaths per 100,000 women of reproductive age (15–49 years). Infant Mortality Rate (IMR) and Crude Birth Rate (CBR) use 1,000 live births/population as denominator.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Per 1,000 live births is used for Infant Mortality Rate (IMR) and Under-5 Mortality Rate."
        },
        {
          "option": "C",
          "reason": "Maternal deaths per 100,000 women of childbearing age defines Maternal Mortality RATE, not Ratio."
        },
        {
          "option": "D",
          "reason": "Total pregnancies cannot be accurately measured due to unrecorded early miscarriages."
        }
      ],
      "priorityAlert": "MMR (Ratio) = per 100,000 LIVE BIRTHS! IMR = per 1,000 LIVE BIRTHS!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Demography & Vital Health Statistics"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q87",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Health Care Delivery: Population Norms for Sub-Centres and PHCs",
    "scenarioQuestion": "Under the Indian Public Health Standards (IPHS) and Rural Health Care delivery system in India, what population is covered by a Primary Health Centre (PHC) in plain areas and hilly/tribal/difficult areas, respectively?",
    "options": [
      {
        "id": "A",
        "text": "30,000 in plain areas; 20,000 in hilly/tribal/desert areas"
      },
      {
        "id": "B",
        "text": "5,000 in plain areas; 3,000 in hilly/tribal areas"
      },
      {
        "id": "C",
        "text": "120,000 in plain areas; 80,000 in hilly areas"
      },
      {
        "id": "D",
        "text": "50,000 in plain areas; 40,000 in hilly areas"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Rural healthcare population norms: Sub-Centre (Health & Wellness Centre) covers 5,000 (plains) / 3,000 (hilly/tribal); Primary Health Centre (PHC) covers 30,000 (plains) / 20,000 (hilly/tribal); Community Health Centre (CHC) covers 120,000 (plains) / 80,000 (hilly/tribal).",
      "explanation": "One PHC serves as a referral centre for 6 Sub-Centres and has 4 to 6 inpatient beds staffed by a Medical Officer, Staff Nurses, and support staff. One CHC serves 4 PHCs and has 30 beds with 4 specialists (Surgeon, Physician, Gynaecologist, Paediatrician).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "5,000 / 3,000 describes the population norm for a Sub-Centre (Health and Wellness Centre)."
        },
        {
          "option": "C",
          "reason": "120,000 / 80,000 describes the population norm for a Community Health Centre (CHC)."
        },
        {
          "option": "D",
          "reason": "Does not correspond to any standard IPHS administrative tier."
        }
      ],
      "priorityAlert": "Sub-Centre: 5k/3k! PHC: 30k/20k! CHC: 120k/80k!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Health Administration & IPHS Norms"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q88",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Environmental Sanitation: Water Chlorination & Orthotolidine Test",
    "scenarioQuestion": "In community water purification, what is the minimum contact period required after adding chlorine to well water, and what is the recommended minimum FREE residual chlorine level at the consumer end to ensure potable disinfection?",
    "options": [
      {
        "id": "A",
        "text": "Contact time of 60 minutes (1 hour); free residual chlorine >= 0.5 mg/L (ppm)"
      },
      {
        "id": "B",
        "text": "Contact time of 5 minutes; free residual chlorine 0.01 mg/L"
      },
      {
        "id": "C",
        "text": "Contact time of 10 hours; free residual chlorine 5.0 mg/L"
      },
      {
        "id": "D",
        "text": "Contact time of 30 seconds; free residual chlorine 0.1 mg/L"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Standard public health water chlorination requires a minimum contact time of 60 minutes after breakpoint chlorination. A free residual chlorine of at least 0.5 mg/L (ppm) must remain to protect against post-treatment secondary contamination in distribution pipes.",
      "explanation": "Free residual chlorine kills bacteria and viruses within the 1-hour contact period. The Orthotolidine Arsenite (OTA) test or DPD (Diethyl-p-phenylene diamine) test is used to measure free and combined residual chlorine.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "5 minutes is too brief for chlorine to inactivate enteric pathogens."
        },
        {
          "option": "C",
          "reason": "5.0 mg/L imparts an unpalatable chemical taste and odor."
        },
        {
          "option": "D",
          "reason": "30 seconds contact is ineffective against pathogens."
        }
      ],
      "priorityAlert": "Free residual chlorine after 1 hour contact time must be AT LEAST 0.5 mg/L (0.5 ppm)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Environmental Health & Sanitation"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q89",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Vector-Borne Diseases: Dengue Vector & Transmission Dynamics",
    "scenarioQuestion": "Which mosquito species is the PRIMARY biological vector responsible for transmitting the Dengue virus, Chikungunya, and Zika virus in urban communities, and what is its characteristic biting habit?",
    "options": [
      {
        "id": "A",
        "text": "Aedes aegypti (tiger mosquito); daytime biter that breeds in clean, artificial domestic water collections"
      },
      {
        "id": "B",
        "text": "Anopheles stephensi; night biter that breeds in stagnant marshes"
      },
      {
        "id": "C",
        "text": "Culex quinquefasciatus; evening biter that breeds in dirty drain sewage"
      },
      {
        "id": "D",
        "text": "Mansonia annulifera; breeds attached to Pistia plants"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Aedes aegypti (the yellow fever mosquito, characterized by white lyre markings on thorax and striped legs) is an aggressive daytime biter that breeds in clean, man-made domestic water containers (desert coolers, flower vases, discarded tires).",
      "explanation": "Anopheles transmits Malaria (bites at dusk and night). Culex transmits Lymphatic Filariasis and Japanese Encephalitis (breeds in polluted/sewage water). Mansonia transmits Malayan filariasis (attaches to aquatic vegetation like Pistia).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Anopheles transmits Malaria."
        },
        {
          "option": "C",
          "reason": "Culex transmits Filariasis and Japanese Encephalitis."
        },
        {
          "option": "D",
          "reason": "Mansonia transmits Brugian filariasis."
        }
      ],
      "priorityAlert": "Aedes = DAY biter in CLEAN water! Culex = NIGHT biter in DIRTY water!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Vector-Borne Diseases & Entomology"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q90",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Tuberculosis Control: NTEP Diagnostic Algorithm & CBNAAT / Truenat",
    "scenarioQuestion": "Under the National Tuberculosis Elimination Program (NTEP) in India, what is the FIRST-LINE rapid molecular diagnostic test used to detect Mycobacterium tuberculosis and determine Rifampicin resistance simultaneously within 2 hours?",
    "options": [
      {
        "id": "A",
        "text": "Cartridge-Based Nucleic Acid Amplification Test (CBNAAT / GeneXpert) or Truenat"
      },
      {
        "id": "B",
        "text": "Ziehl-Neelsen (ZN) sputum microscopy for Acid-Fast Bacilli (AFB)"
      },
      {
        "id": "C",
        "text": "Mantoux Tuberculin Skin Test (TST)"
      },
      {
        "id": "D",
        "text": "Lowenstein-Jensen (LJ) solid culture"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "CBNAAT (GeneXpert MTB/RIF) and Truenat are upfront automated real-time PCR molecular assays recommended by NTEP that detect Mycobacterium tuberculosis DNA and detect Rifampicin resistance (mutation in rpoB gene) within 2 hours.",
      "explanation": "Upfront NAAT testing has replaced conventional smear microscopy as the primary diagnostic tool in NTEP to facilitate rapid identification of multidrug-resistant TB (MDR-TB). Mantoux only indicates immune exposure, not active disease.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Smear microscopy has low sensitivity and cannot assess drug resistance."
        },
        {
          "option": "C",
          "reason": "Mantoux test cannot differentiate active TB infection from latent TB or prior BCG vaccination."
        },
        {
          "option": "D",
          "reason": "LJ solid culture takes 6 to 8 weeks for mycobacterial colonies to grow."
        }
      ],
      "priorityAlert": "CBNAAT / Truenat detects both MTB and Rifampicin resistance in under 2 hours!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Communicable Diseases & NTEP"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q91",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_07",
    "topicTitle": "Psychopathology: Delusions vs Hallucinations Differentiation",
    "scenarioQuestion": "A patient hospitalized with paranoid schizophrenia firmly insists that television news anchors are broadcasting secret coded messages about his thoughts, despite overwhelming proof to the contrary. How is this false, fixed psychopathological belief classified?",
    "options": [
      {
        "id": "A",
        "text": "Delusion of reference"
      },
      {
        "id": "B",
        "text": "Auditory hallucination"
      },
      {
        "id": "C",
        "text": "Illusion"
      },
      {
        "id": "D",
        "text": "Depersonalization"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "A Delusion of Reference is a false, fixed belief (content of thought disorder) that innocent external events, public broadcasts, or gestures of strangers have a direct, unique personal meaning or message for the individual.",
      "explanation": "A delusion is a disorder of thought content. A hallucination is a false sensory perception occurring without any external stimulus. An illusion is a misinterpretation of a real external sensory stimulus (e.g. mistaking a coat rack for a person in dim light).",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Hallucination is a perceptual disorder where voices are heard with no sound present."
        },
        {
          "option": "C",
          "reason": "Illusion is misinterpretation of an existing real physical stimulus."
        },
        {
          "option": "D",
          "reason": "Depersonalization is a feeling of detachment from one's own body or mind."
        }
      ],
      "priorityAlert": "Never argue with or validate a delusional belief! Acknowledge feelings without reinforcing the false content: \"I understand that must feel scary to you, but I do not see or hear those messages.\""
    },
    "difficulty": "Easy",
    "clinicalTag": "Psychiatric Symptomatology"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q92",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_07",
    "topicTitle": "Therapeutics: Electroconvulsive Therapy (ECT) Pre-Op Medications",
    "scenarioQuestion": "A severely depressed, suicidal patient is scheduled for modified Electroconvulsive Therapy (ECT). Which anticholinergic medication is administered 30 minutes pre-procedure, and what is its PRIMARY therapeutic purpose?",
    "options": [
      {
        "id": "A",
        "text": "Atropine sulfate or Glycopyrrolate; to reduce oral/tracheobronchial secretions and prevent vagally-mediated bradycardia"
      },
      {
        "id": "B",
        "text": "Succinylcholine; to induce general anesthesia"
      },
      {
        "id": "C",
        "text": "Propofol; to paralyze skeletal muscles"
      },
      {
        "id": "D",
        "text": "Naloxone; to enhance seizure duration"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Pre-ECT medication protocol includes Atropine or Glycopyrrolate (anticholinergic) to dry respiratory secretions (reducing aspiration risk) and prevent vagal surge bradycardia or asystole triggered by electric stimulus passing through the brainstem.",
      "explanation": "Modified ECT also uses an ultra-short-acting anesthetic agent (Methohexital or Propofol) for unconsciousness, followed by a short-acting muscle relaxant (Succinylcholine) to prevent musculoskeletal fractures during the induced tonic-clonic cerebral seizure.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Succinylcholine is a depolarizing neuromuscular blocker, not an anesthetic."
        },
        {
          "option": "C",
          "reason": "Propofol is an IV anesthetic, not a neuromuscular paralytic."
        },
        {
          "option": "D",
          "reason": "Naloxone is an opioid reversal agent with no role in routine ECT."
        }
      ],
      "priorityAlert": "The most common post-ECT adverse effect is transient retrograde and anterograde amnesia (confusion/memory loss)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Somatic Therapies & ECT"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q93",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_07",
    "topicTitle": "Psychopharmacology: Neuroleptic Malignant Syndrome (NMS)",
    "scenarioQuestion": "A patient started on Haloperidol (a high-potency typical antipsychotic) develops acute extreme muscle stiffness (\"lead-pipe rigidity\"), hyperthermia (temp 40.2°C / 104.4°F), diaphoresis, tachycardia, and autonomic instability. Laboratory tests reveal a markedly elevated serum Creatine Kinase (CK > 20,000 U/L). What life-threatening complication is occurring?",
    "options": [
      {
        "id": "A",
        "text": "Neuroleptic Malignant Syndrome (NMS)"
      },
      {
        "id": "B",
        "text": "Tardive Dyskinesia"
      },
      {
        "id": "C",
        "text": "Acute Dystonic Reaction"
      },
      {
        "id": "D",
        "text": "Serotonin Syndrome"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Neuroleptic Malignant Syndrome (NMS) is a life-threatening idiosyncratic reaction to dopamine receptor antagonists characterized by the tetrad: (1) Hyperthermia, (2) \"Lead-pipe\" muscle rigidity, (3) Autonomic instability, and (4) Altered mental status, with massive elevation in serum Creatine Kinase (CK).",
      "explanation": "Management requires immediate cessation of the antipsychotic, aggressive cooling, and pharmacotherapy with Dantrolene (direct-acting skeletal muscle relaxant) and Bromocriptine (dopamine agonist). Serotonin syndrome features hyperreflexia and clonus rather than lead-pipe rigidity.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Tardive dyskinesia is a chronic condition causing involuntary choreoathetoid movements of the tongue and face."
        },
        {
          "option": "C",
          "reason": "Acute dystonia presents with sudden spasms of neck (torticollis) or eyes (oculogyric crisis) without hyperthermia."
        },
        {
          "option": "D",
          "reason": "Serotonin syndrome produces neuromuscular excitation (hyperreflexia, tremor, clonus), not lead-pipe rigidity."
        }
      ],
      "priorityAlert": "Antipsychotic + High Fever + Lead-Pipe Rigidity + High CK = Neuroleptic Malignant Syndrome! Treat with DANTROLENE!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Psychiatric Emergencies & NMS"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q94",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_07",
    "topicTitle": "Substance Use: Alcohol Withdrawal Delirium (Delirium Tremens)",
    "scenarioQuestion": "A chronic alcoholic patient admitted 72 hours ago for an elective surgical repair suddenly becomes severely agitated, disoriented to time and place, and experiences vivid visual and tactile hallucinations (crawling insects). Vital signs show BP 178/104 mmHg, HR 132 bpm, and profuse diaphoresis. What is this medical emergency, and what is the FIRST-LINE drug class for treatment?",
    "options": [
      {
        "id": "A",
        "text": "Delirium Tremens (DTs); treated with IV Benzodiazepines (Diazepam or Lorazepam)"
      },
      {
        "id": "B",
        "text": "Korsakoff psychosis; treated with high-dose Haloperidol"
      },
      {
        "id": "C",
        "text": "Wernicke encephalopathy; treated with 50% Dextrose bolus before thiamine"
      },
      {
        "id": "D",
        "text": "Schizoaffective disorder; treated with Clozapine"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Delirium Tremens (DTs) is the most severe manifestation of alcohol withdrawal, emerging 48 to 96 hours after the last drink. It features delirium, autonomic hyperactivity, severe tremor, and vivid hallucinations. Long-acting Benzodiazepines (Diazepam, Chlordiazepoxide, or Lorazepam in liver disease) are the gold-standard treatment.",
      "explanation": "Benzodiazepines bind to GABA-A receptors, compensating for alcohol's absent GABA-ergic inhibitory tone and preventing fatal seizure activity. Thiamine (Vitamin B1) must always be given BEFORE any glucose infusions to prevent precipitating acute Wernicke encephalopathy.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Korsakoff psychosis is a chronic irreversible memory disorder with confabulation."
        },
        {
          "option": "C",
          "reason": "Administering Dextrose before Thiamine depletes remaining thiamine and precipitates Wernicke encephalopathy."
        },
        {
          "option": "D",
          "reason": "Clozapine lowers seizure threshold and is contraindicated in acute delirium."
        }
      ],
      "priorityAlert": "Always administer IV Thiamine (Vitamin B1) BEFORE administering IV Dextrose in alcoholic patients to avoid irreversible Wernicke encephalopathy!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Addiction Psychiatry & Alcohol Withdrawal"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q95",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_07",
    "topicTitle": "Defense Mechanisms: Reaction Formation vs Sublimation",
    "scenarioQuestion": "A client who harbors intense, subconscious hatred and jealousy toward an overbearing colleague treats that coworker with exaggerated, effusive affection, excessive compliments, and sweet friendliness. Which ego defense mechanism is this individual unconsciously employing?",
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
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Reaction Formation is an ego defense mechanism where unacceptable subconscious impulses or feelings are mastered by conscious over-expression of their exact direct opposite (e.g. disguising hostility as exaggerated excessive friendliness).",
      "explanation": "Sublimation is channeling socially unacceptable impulses into constructive, productive activities (e.g. an aggressive person becoming an amateur boxer). Projection is attributing one's own unacceptable impulses to others. Displacement is redirecting anger to a safer, less threatening substitute target.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Sublimation transforms impulses into socially useful, artistic, or sports pursuits."
        },
        {
          "option": "C",
          "reason": "Projection attributes own unacceptable feelings to others (\"He hates me\", when I hate him)."
        },
        {
          "option": "D",
          "reason": "Displacement vents emotions on a neutral target (e.g., slamming a door after an argument with boss)."
        }
      ],
      "priorityAlert": "Sublimation and Altruism are the only mature, healthy ego defense mechanisms!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Psychodynamics & Defense Mechanisms"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q96",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Quantitative Aptitude: Work and Time Mathematics",
    "scenarioQuestion": "Nurse Anita can complete dressing changes for a ward of patients in 6 hours, while Nurse Babita can complete the same work in 3 hours. If both nurses work together simultaneously at their consistent rates, how many hours will it take them to finish the entire ward?",
    "options": [
      {
        "id": "A",
        "text": "2 hours"
      },
      {
        "id": "B",
        "text": "4.5 hours"
      },
      {
        "id": "C",
        "text": "1.5 hours"
      },
      {
        "id": "D",
        "text": "2.5 hours"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Combined work formula: Time together = (A * B) / (A + B). Here: (6 * 3) / (6 + 3) = 18 / 9 = 2 hours.",
      "explanation": "Rate of Anita = 1/6 per hour. Rate of Babita = 1/3 per hour. Combined rate = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 of the ward per hour. Therefore, reciprocal of 1/2 is 2 hours to complete the job.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "4.5 hours is simply the average of 6 and 3, which is a common mathematical error."
        },
        {
          "option": "C",
          "reason": "1.5 hours would require even higher combined speed."
        },
        {
          "option": "D",
          "reason": "Calculation error."
        }
      ],
      "priorityAlert": "Time and Work formula: (A * B) / (A + B) gives the combined time immediately!"
    },
    "difficulty": "Easy",
    "clinicalTag": "General Numerical Ability"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q97",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Logical Reasoning: Blood Relations Coding",
    "scenarioQuestion": "Pointing to a photograph of a man, a woman says: \"His mother is the only daughter of my mother.\" How is the woman related to the man in the photograph?",
    "options": [
      {
        "id": "A",
        "text": "Mother"
      },
      {
        "id": "B",
        "text": "Sister"
      },
      {
        "id": "C",
        "text": "Aunt"
      },
      {
        "id": "D",
        "text": "Grandmother"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "\"Only daughter of my mother\" means the woman herself (since she is the daughter). Therefore, the man's mother is the woman herself. Thus, the woman is the man's mother.",
      "explanation": "Breaking it down step-by-step: \"My mother\" = the woman's mother. \"Only daughter of my mother\" = the woman herself. \"His mother is...\" = the man's mother is the woman. Hence, the woman is his mother.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Sister would imply multiple daughters."
        },
        {
          "option": "C",
          "reason": "Aunt would require the man's mother to be her sister, but she is the \"only daughter\"."
        },
        {
          "option": "D",
          "reason": "Grandmother skips a generation."
        }
      ],
      "priorityAlert": "Phrases with \"only son/daughter of my mother/father\" referring to the speaker directly identify the speaker!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Logical Reasoning"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q98",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Quantitative Aptitude: Ratio and Proportion Drug Dilution",
    "scenarioQuestion": "An ampoule contains 50 mg of a drug in 2 mL of solution. A doctor prescribes 15 mg of the drug to be administered intravenously. How many milliliters (mL) of the solution should the nurse draw into the syringe?",
    "options": [
      {
        "id": "A",
        "text": "0.6 mL"
      },
      {
        "id": "B",
        "text": "0.3 mL"
      },
      {
        "id": "C",
        "text": "1.2 mL"
      },
      {
        "id": "D",
        "text": "0.8 mL"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Formula: Desired dose / On hand dose * Volume. (15 mg / 50 mg) * 2 mL = 0.3 * 2 mL = 0.6 mL.",
      "explanation": "Concentration of solution = 50 mg / 2 mL = 25 mg/mL. To deliver 15 mg: Volume = 15 mg / 25 mg/mL = 0.6 mL.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "0.3 mL would deliver only 7.5 mg (half dose)."
        },
        {
          "option": "C",
          "reason": "1.2 mL would deliver 30 mg (double dose)."
        },
        {
          "option": "D",
          "reason": "0.8 mL would deliver 20 mg."
        }
      ],
      "priorityAlert": "Always verify basic unit math: (Desired / Have) * Quantity = (15 / 50) * 2 = 0.6 mL!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Drug Math & Proportion"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q99",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Logical Reasoning: Number Series Pattern Recognition",
    "scenarioQuestion": "What is the NEXT number in the logical sequence: 3, 7, 15, 31, 63, ...?",
    "options": [
      {
        "id": "A",
        "text": "127"
      },
      {
        "id": "B",
        "text": "126"
      },
      {
        "id": "C",
        "text": "125"
      },
      {
        "id": "D",
        "text": "128"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The pattern is (Previous Number * 2) + 1. 3 * 2 + 1 = 7; 7 * 2 + 1 = 15; 15 * 2 + 1 = 31; 31 * 2 + 1 = 63; 63 * 2 + 1 = 127.",
      "explanation": "Alternatively, differences between consecutive numbers double each time: +4, +8, +16, +32, so next is +64. 63 + 64 = 127.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "126 is simply 63 * 2 without adding 1."
        },
        {
          "option": "C",
          "reason": "Arithmetic mistake."
        },
        {
          "option": "D",
          "reason": "128 is 2^7, off by one."
        }
      ],
      "priorityAlert": "Look for either (x * 2 + 1) or powers of 2 differences in exponential number series!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Logical Reasoning & Series"
  },
  {
    "id": "AIIMS_NORCET_2023_S1_Q100",
    "exam": "AIIMS NORCET",
    "year": 2023,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "General Knowledge: AIIMS New Delhi Establishment Act",
    "scenarioQuestion": "All India Institute of Medical Sciences (AIIMS), New Delhi, the premier apex medical institution of India, was established in 1956 under an Act of Parliament as an Autonomous Institution of National Importance. Under which Union Ministry does AIIMS function?",
    "options": [
      {
        "id": "A",
        "text": "Ministry of Health and Family Welfare (MoHFW)"
      },
      {
        "id": "B",
        "text": "Ministry of Education"
      },
      {
        "id": "C",
        "text": "Ministry of Science and Technology"
      },
      {
        "id": "D",
        "text": "Ministry of Home Affairs"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "AIIMS New Delhi was established in 1956 through the AIIMS Act, 1956, as an autonomous apex healthcare institute of national importance operating under the Ministry of Health and Family Welfare (MoHFW), Government of India.",
      "explanation": "The foundation stone was laid by Rajkumari Amrit Kaur (India's first Health Minister). The governing body is chaired by the Union Minister of Health and Family Welfare.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Ministry of Education oversees central universities and IITs, not AIIMS."
        },
        {
          "option": "C",
          "reason": "Science & Technology oversees CSIR and DST."
        },
        {
          "option": "D",
          "reason": "Home Affairs oversees CAPF and paramilitary hospitals."
        }
      ],
      "priorityAlert": "All AIIMS institutes function directly under the Ministry of Health and Family Welfare (MoHFW)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "General Awareness & Health GK"
  }
];
