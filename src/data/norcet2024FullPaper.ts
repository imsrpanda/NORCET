import { PYQQuestion } from '../types';

export const NORCET_2024_STAGE1_100Q: PYQQuestion[] = [
  {
    "id": "AIIMS_NORCET_2024_S1_Q01",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Critical Care: Severe Hyperkalemia Management",
    "scenarioQuestion": "A patient with end-stage renal disease (ESRD) has a serum potassium level of 7.2 mEq/L. The telemetry monitor shows tall peaked T-waves, a prolonged PR interval, and widening of the QRS complex. Which medication should the nurse prepare to administer FIRST to prevent lethal arrhythmias?",
    "options": [
      {
        "id": "A",
        "text": "Regular Insulin 10 units IV with 50 mL of 50% Dextrose"
      },
      {
        "id": "B",
        "text": "Sodium Polystyrene Sulfonate (Kayexalate) 30 g orally"
      },
      {
        "id": "C",
        "text": "Intravenous 10% Calcium Gluconate 10 mL over 2 to 5 minutes"
      },
      {
        "id": "D",
        "text": "Sodium Bicarbonate 50 mEq IV push"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "In severe hyperkalemia with ECG changes, IV Calcium Gluconate is given FIRST because it immediately stabilizes the myocardial membrane threshold within 1 to 3 minutes, preventing fatal ventricular fibrillation.",
      "explanation": "While Insulin + Dextrose and Kayexalate lower serum potassium levels, they take 15 to 30 minutes (or hours). Calcium Gluconate does not lower potassium, but directly antagonizes the toxic cardiac membrane excitability of hyperkalemia within 1 to 3 minutes.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Insulin + Dextrose shifts K+ into cells but takes 15-30 minutes; membrane stabilization must occur first."
        },
        {
          "option": "B",
          "reason": "Kayexalate takes 2 to 4 hours to work via gastrointestinal exchange."
        },
        {
          "option": "D",
          "reason": "Sodium bicarbonate is secondary and slower than calcium gluconate."
        }
      ],
      "priorityAlert": "Calcium Gluconate stabilizes cardiac membranes; it does NOT alter serum K+ levels!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Electrolyte Crisis & Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q02",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiology: Inferior MI and Nitroglycerin Warning",
    "scenarioQuestion": "An emergency room nurse is reviewing the 12-lead ECG of a 65-year-old male with crushing chest pain. The ECG reveals 3 mm ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL. The patient’s BP is 108/68 mmHg, and HR is 54 bpm. Which prescribed intervention should the nurse QUESTION before administration?",
    "options": [
      {
        "id": "A",
        "text": "Aspirin 325 mg chewed immediately"
      },
      {
        "id": "B",
        "text": "Sublingual Nitroglycerin 0.4 mg every 5 minutes"
      },
      {
        "id": "C",
        "text": "Intravenous Normal Saline 0.9% infusion"
      },
      {
        "id": "D",
        "text": "12-lead Right-sided ECG (leads V3R and V4R)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "ST elevation in leads II, III, and aVF indicates an Inferior Wall MI (Right Coronary Artery). Up to 40% of inferior MIs have concurrent Right Ventricular (RV) Infarction, in which Nitroglycerin is contra-indicated.",
      "explanation": "Inferior wall MI frequently involves the Right Ventricle. The infarcted RV is extremely preload-dependent. Nitroglycerin is a potent venous vasodilator that drastically reduces preload, precipitating profound and refractory cardiogenic shock.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Aspirin is essential and should be chewed immediately."
        },
        {
          "option": "C",
          "reason": "IV Normal Saline is the treatment of choice in RV infarction to boost preload."
        },
        {
          "option": "D",
          "reason": "A right-sided ECG is standard of care to confirm RV involvement."
        }
      ],
      "priorityAlert": "Inferior Wall MI + Nitroglycerin = High Risk of Fatal Hypotension. Always check V3R/V4R first!"
    },
    "difficulty": "Hard",
    "clinicalTag": "ECG Localization & Hemodynamics"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q03",
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
      "keyTakeaway": "Low pH (7.28 < 7.35) = Acidosis. Low HCO3- (14 < 22) = Metabolic etiology. Low PaCO2 (29 < 35) = Respiratory compensation has started to blow off CO2, but pH has not yet normalized = Partially Compensated Metabolic Acidosis.",
      "explanation": "Step 1: pH 7.28 is acidemic. Step 2: HCO3- is 14 mEq/L (acidic, matches the pH). Step 3: PaCO2 is 29 mmHg (alkalotic, hyperventilation blows off carbon dioxide). Step 4: Because pH is not 7.35-7.45, compensation is partial.",
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
    "id": "AIIMS_NORCET_2024_S1_Q04",
    "exam": "AIIMS NORCET",
    "year": 2024,
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
      "explanation": "Sudden respiratory distress and stridor indicates fatal airway obstruction from upward balloon migration. A pair of scissors must be kept at the bedside at all times specifically to cut across all lumens and immediately extract the tube.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Increasing traction will pull the migrated balloon tighter against the vocal cords."
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
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q05",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
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
      "explanation": "In GCS Motor scoring: M6 = Obeys commands, M5 = Localizes to pain (crosses midline/above clavicle), M4 = Normal flexion (rapid withdrawal without crossing clavicle), M3 = Decorticate posturing, M2 = Decerebrate posturing, M1 = No response.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "M6 requires following verbal commands."
        },
        {
          "option": "C",
          "reason": "M4 involves rapid limb withdrawal without reaching above the clavicle."
        },
        {
          "option": "D",
          "reason": "M3 is stereotypical decorticate posturing."
        }
      ],
      "priorityAlert": "GCS Cutoff: A total GCS score of 8 or less indicates severe coma requiring prompt endotracheal intubation ('GCS 8, Intubate!')."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Neurological Assessment"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q06",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Med-Surg: Arteriovenous (AV) Fistula Vascular Access Safeguards",
    "scenarioQuestion": "A patient with chronic kidney disease has a newly matured left radiocephalic arteriovenous (AV) fistula. Which nursing assessment finding indicates that the fistula is patent and functioning properly?",
    "options": [
      {
        "id": "A",
        "text": "Presence of a palpable thrill and continuous audible bruit over the access site"
      },
      {
        "id": "B",
        "text": "Pulsatile radial pulse with an absence of any audible vascular murmur"
      },
      {
        "id": "C",
        "text": "Skin over the fistula is cold, pale, with a capillary refill time of 5 seconds"
      },
      {
        "id": "D",
        "text": "Blood pressure measured on the left arm is 10 mmHg higher than the right arm"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "A patent AV fistula is confirmed by palpating a buzzing vibration (thrill) and auscultating a rushing swishing sound (bruit) over the anastomotic site.",
      "explanation": "The high-pressure arterial flow entering the low-pressure venous conduit produces turbulent flow that creates both a thrill and a bruit. Disappearance of either signifies thrombosis and access occlusion.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "An absence of a bruit indicates thrombotic occlusion."
        },
        {
          "option": "C",
          "reason": "Cold, pale extremities indicate arterial steal syndrome."
        },
        {
          "option": "D",
          "reason": "Blood pressure and venipuncture are strictly prohibited on the fistula arm."
        }
      ],
      "priorityAlert": "Never perform blood pressure measurements, IV cannulation, or blood sampling on an extremity with a vascular access fistula!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Hemodialysis Access Management"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q07",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Acute Pancreatitis Assessment & Cullen's Sign",
    "scenarioQuestion": "A 45-year-old male with severe epigastric pain radiating to the back is admitted for acute necrotizing pancreatitis. During the physical examination, the nurse notes bluish discoloration around the umbilicus. How should the nurse document this sign?",
    "options": [
      {
        "id": "A",
        "text": "Grey Turner's sign"
      },
      {
        "id": "B",
        "text": "Cullen's sign"
      },
      {
        "id": "C",
        "text": "Chvostek's sign"
      },
      {
        "id": "D",
        "text": "Trousseau's sign"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Cullen's sign is bluish-purple periumbilical ecchymosis indicating retroperitoneal hemorrhage in acute pancreatitis.",
      "explanation": "Enzyme digestion of retroperitoneal tissues releases hemolyzed blood that tracks along the falciform ligament to the umbilicus (Cullen's sign) or along the flanks (Grey Turner's sign). Both indicate life-threatening hemorrhagic pancreatitis.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Grey Turner's sign refers to ecchymosis located in the flank/lumbar area."
        },
        {
          "option": "C",
          "reason": "Chvostek's sign is facial twitching triggered by tapping the facial nerve in hypocalcemia."
        },
        {
          "option": "D",
          "reason": "Trousseau's sign is carpal spasm induced by inflating a BP cuff above systolic pressure in hypocalcemia."
        }
      ],
      "priorityAlert": "Cullen's sign indicates severe retroperitoneal bleeding — prepare for massive transfusion and immediate ICU escalation!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Acute Pancreatitis Signs"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q08",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Emergency: Burns Parkland Formula Resuscitation Arithmetic",
    "scenarioQuestion": "A 70 kg adult patient sustained second and third-degree flame burns covering 40% of Total Body Surface Area (TBSA). Using the standard Parkland formula (4 mL × kg × %TBSA of Ringer's Lactate), at what rate should the nurse infuse fluid during the FIRST 8 hours post-injury?",
    "options": [
      {
        "id": "A",
        "text": "700 mL/hr"
      },
      {
        "id": "B",
        "text": "350 mL/hr"
      },
      {
        "id": "C",
        "text": "1400 mL/hr"
      },
      {
        "id": "D",
        "text": "525 mL/hr"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Total 24-hr fluid = 4 mL × 70 kg × 40 = 11,200 mL. Give half (5,600 mL) in the first 8 hours: 5,600 mL ÷ 8 hr = 700 mL/hr.",
      "explanation": "The Parkland formula mandates 50% of the total 24-hour volume be delivered in the first 8 hours calculated from the exact time of burn injury, not hospital arrival. 11,200 ÷ 2 = 5,600 mL. 5,600 mL ÷ 8 hr = 700 mL/hr.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "350 mL/hr is the rate for the subsequent 16 hours (5,600 mL ÷ 16 hr)."
        },
        {
          "option": "C",
          "reason": "1400 mL/hr results from trying to give the entire 24-hour fluid in 8 hours."
        },
        {
          "option": "D",
          "reason": "525 mL/hr is an erroneous calculation using a 3 mL formula."
        }
      ],
      "priorityAlert": "The most reliable clinical indicator of adequate burn fluid resuscitation is Urine Output: maintain 0.5 to 1 mL/kg/hr (30-50 mL/hr in adults)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Burns Fluid Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q09",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Orthopedics: Compartment Syndrome Earliest Clinical Manifestation",
    "scenarioQuestion": "A 22-year-old male with a closed tibia-fibula fracture has a circular plaster cast applied. Four hours later, the patient complains of severe leg pain. Which assessment finding is the EARLIEST and most reliable sign of Acute Compartment Syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Absence of palpable dorsalis pedis and posterior tibial pulses"
      },
      {
        "id": "B",
        "text": "Unrelenting pain out of proportion to injury that worsens on passive dorsiflexion of the toes"
      },
      {
        "id": "C",
        "text": "Cold, pale, and cyanotic extremity with skin necrosis"
      },
      {
        "id": "D",
        "text": "Complete motor paralysis and inability to move the toes"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Severe, unrelenting pain out of proportion to injury exacerbated by passive muscle stretch is the earliest and most sensitive symptom of Compartment Syndrome.",
      "explanation": "Elevated intracompartmental pressure compromises microvascular capillary perfusion. The sensory nerves are the first to suffer ischemic insult. Pulselessness, pallor, and paralysis are very late signs indicating irreversible neuromuscular necrosis.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Pulselessness is a very late sign; waiting for it leads to permanent limb amputation."
        },
        {
          "option": "C",
          "reason": "Pallor and coldness are late ischemic features."
        },
        {
          "option": "D",
          "reason": "Paralysis signifies completed muscle infarction."
        }
      ],
      "priorityAlert": "Never elevate a limb suspected of compartment syndrome above heart level! Elevation decreases arterial perfusion gradient."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Compartment Syndrome Assessment"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q10",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Cushing's Triad in Increased Intracranial Pressure (ICP)",
    "scenarioQuestion": "A patient with an acute subdural hematoma has an intracranial pressure (ICP) of 28 mmHg. The nurse assesses the vital signs and recognizes Cushing's Triad. Which combination of vital signs represents this late sign of impending brain herniation?",
    "options": [
      {
        "id": "A",
        "text": "Tachycardia, hypotension, and tachypnea"
      },
      {
        "id": "B",
        "text": "Bradycardia, systolic hypertension with widening pulse pressure, and irregular respirations (Cheyne-Stokes)"
      },
      {
        "id": "C",
        "text": "Bradycardia, hypotension, and hypothermia"
      },
      {
        "id": "D",
        "text": "Tachycardia, systolic hypertension, and hyperventilation"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Cushing's Triad: 1) Severe systolic hypertension with widening pulse pressure, 2) Bradycardia, and 3) Irregular respirations (e.g. Cheyne-Stokes or ataxic).",
      "explanation": "Increased ICP compresses the cerebral arterioles causing brainstem ischemia. Sympathetic vasoconstriction causes massive systolic HTN; carotid baroreceptors detect this and trigger reflex vagal bradycardia. Brainstem compression alters respiratory rhythm.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Tachycardia + hypotension + tachypnea is the classic triad of hypovolemic/septic shock, the exact opposite of Cushing's triad."
        },
        {
          "option": "C",
          "reason": "Hypotension does not occur in Cushing's response."
        },
        {
          "option": "D",
          "reason": "Tachycardia is inconsistent with Cushing's reflex bradycardia."
        }
      ],
      "priorityAlert": "Cushing's Triad is a LATE sign of impending transtentorial herniation — immediate IV Mannitol / 3% Saline and neurosurgical intervention are required!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Increased ICP Hemodynamics"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q11",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Myasthenia Gravis Tensilon (Edrophonium) Test",
    "scenarioQuestion": "A patient with Myasthenia Gravis presents with acute respiratory weakness and generalized muscle flaccidity. The neurologist performs a Tensilon (Edrophonium) test to differentiate Myasthenic Crisis from Cholinergic Crisis. Which finding indicates a CHOLINERGIC CRISIS?",
    "options": [
      {
        "id": "A",
        "text": "Rapid, dramatic improvement in muscle strength within 30 to 60 seconds"
      },
      {
        "id": "B",
        "text": "Worsening of muscle weakness, increased fasciculations, salivation, and bradycardia"
      },
      {
        "id": "C",
        "text": "Immediate normalization of pupillary constriction with no change in motor power"
      },
      {
        "id": "D",
        "text": "Sudden onset of severe hypertensive crisis and hyperthermia"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "If muscle weakness worsens following Edrophonium (acetylcholinesterase inhibitor), the patient is in Cholinergic Crisis (overmedication). Atropine Sulfate is the immediate antidote.",
      "explanation": "In Myasthenic Crisis (undermedication), giving Edrophonium improves muscle strength. In Cholinergic Crisis (overmedication with pyridostigmine), adding more acetylcholine exacerbates depolarizing block, causing severe weakness, excessive salivation, lacrimation, and bradycardia.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Improvement in strength is diagnostic of Myasthenic Crisis, not Cholinergic Crisis."
        },
        {
          "option": "C",
          "reason": "Edrophonium affects nicotinic neuromuscular junctions primarily."
        },
        {
          "option": "D",
          "reason": "Cholinergic excess triggers bradycardia and parasympathetic hyperactivity, not hypertension."
        }
      ],
      "priorityAlert": "Always keep Atropine Sulfate at the bedside during a Tensilon test to reverse severe bradycardia and cholinergic collapse!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Neuromuscular Crisis Differential"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q12",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrine: Post-Thyroidectomy Hypocalcemia & Emergency Tracheostomy",
    "scenarioQuestion": "Twelve hours after a total thyroidectomy for Graves' disease, the patient reports tingling and numbness around the lips (perioral paresthesia) and spasmodic cramping in both hands. What is the nurse's primary immediate priority?",
    "options": [
      {
        "id": "A",
        "text": "Reassure the patient that this is normal surgical edema and check vital signs in 4 hours"
      },
      {
        "id": "B",
        "text": "Prepare intravenous 10% Calcium Gluconate for slow administration and verify a tracheostomy tray is at the bedside"
      },
      {
        "id": "C",
        "text": "Administer oral Potassium Chloride 40 mEq immediately"
      },
      {
        "id": "D",
        "text": "Place the patient in a flat supine position and hyperextend the neck"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Accidental removal or vascular devascularization of the parathyroid glands causes acute hypocalcemia, presenting with perioral numbness, tetany, and potential lethal laryngospasm. IV Calcium Gluconate is the antidote.",
      "explanation": "Hypocalcemia causes motor nerve hyperexcitability. If untreated, tetany progresses rapidly to laryngospasm and total airway obstruction. Emergency IV Calcium Gluconate and a tracheostomy tray at the bedside are mandatory safety measures post-thyroidectomy.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Ignoring tetany risks fatal laryngospasm and asphyxiation."
        },
        {
          "option": "C",
          "reason": "The electrolyte deficit is calcium, not potassium."
        },
        {
          "option": "D",
          "reason": "Neck hyperextension puts tension on surgical suture lines and compromises the airway."
        }
      ],
      "priorityAlert": "Post-Thyroidectomy Emergency Tray: Always keep a sterile Tracheostomy set, suction, and Calcium Gluconate at the bedside!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Post-Thyroidectomy Complications"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q13",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Acute Appendicitis Signs & Contraindicated Interventions",
    "scenarioQuestion": "A 19-year-old male is admitted with suspected acute appendicitis. He has severe right lower quadrant pain at McBurney's point, low-grade fever, and rebound tenderness. Which of the following nursing interventions is STRICTLY CONTRAINDICATED?",
    "options": [
      {
        "id": "A",
        "text": "Maintaining strict NPO status for prospective emergency surgery"
      },
      {
        "id": "B",
        "text": "Applying a warm heating pad to the right lower abdomen for pain relief"
      },
      {
        "id": "C",
        "text": "Starting an intravenous line with isotonic crystalloids"
      },
      {
        "id": "D",
        "text": "Placing the patient in semi-Fowler's position with knees flexed"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Applying heat or administering cleansing enemas/laxatives in suspected appendicitis is strictly contraindicated because increased intraluminal pressure and vascular hyperemia provoke acute appendix perforation and peritonitis.",
      "explanation": "Heat increases local blood flow and appendix swelling, accelerating tissue necrosis and gangrene. An ice pack can be applied safely, but heat must NEVER be used. Laxatives/enemas can also trigger rupture.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Strict NPO is essential in anticipation of emergency appendectomy."
        },
        {
          "option": "C",
          "reason": "IV hydration is standard of care to correct fluid losses."
        },
        {
          "option": "D",
          "reason": "Semi-Fowler's with flexed knees relaxes abdominal musculature, relieving tension."
        }
      ],
      "priorityAlert": "Appendicitis Rule: Sudden cessation of acute pain without pain medications indicates appendix perforation (rupture) — call the surgeon immediately!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Appendicitis Safety Rules"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q14",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Gastroenterology: Hepatic Encephalopathy Asterixis & Lactulose Goal",
    "scenarioQuestion": "A patient with decompensated alcoholic cirrhosis is exhibiting flapping tremors of the outstretched hands (asterixis), lethargy, and mild disorientation. The physician orders Lactulose 30 mL orally three times daily. What is the expected clinical goal used by the nurse to evaluate drug efficacy?",
    "options": [
      {
        "id": "A",
        "text": "Complete cessation of bowel movements for at least 24 hours"
      },
      {
        "id": "B",
        "text": "Evacuation of 2 to 3 soft, acidic bowel movements per day with decreased serum ammonia"
      },
      {
        "id": "C",
        "text": "Reduction in serum total bilirubin below 1.0 mg/dL"
      },
      {
        "id": "D",
        "text": "Resolution of peripheral pedal edema and ascites"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The therapeutic endpoint of Lactulose therapy in hepatic encephalopathy is achieving 2 to 3 soft, formed, acidic stools per day to trap and expel toxic ammonia.",
      "explanation": "Colonic bacteria degrade Lactulose into lactic and acetic acids, lowering colonic pH. The acidic environment converts diffusible ammonia (NH3) into non-absorbable ammonium ions (NH4+), which are trapped in feces and expelled, clearing neurotoxic ammonia.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Constipation worsens encephalopathy because stagnant stool increases ammonia reabsorption."
        },
        {
          "option": "C",
          "reason": "Lactulose treats hyperammonemia, not hyperbilirubinemia."
        },
        {
          "option": "D",
          "reason": "Diuretics (Spironolactone, Furosemide) treat ascites, not lactulose."
        }
      ],
      "priorityAlert": "Titrate Lactulose to achieve 2-3 soft stools daily. Excessive diarrhea causes severe hypokalemia and dehydration!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Hepatic Encephalopathy Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q15",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Renal: Chronic Kidney Disease Phosphate Binders Administration",
    "scenarioQuestion": "A patient with Stage 5 Chronic Kidney Disease (CKD) on maintenance hemodialysis is prescribed Calcium Acetate (PhosLo) 667 mg orally. What instruction must the nurse emphasize regarding the timing of this medication?",
    "options": [
      {
        "id": "A",
        "text": "Take on an empty stomach at least 1 hour before breakfast"
      },
      {
        "id": "B",
        "text": "Take with meals or immediately after eating food"
      },
      {
        "id": "C",
        "text": "Take at bedtime with a large glass of grapefruit juice"
      },
      {
        "id": "D",
        "text": "Take only on non-dialysis days 2 hours after lunch"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Phosphate binders (Calcium Acetate, Sevelamer) must be taken WITH MEALS to bind dietary phosphorus in the gastrointestinal tract and prevent its systemic absorption.",
      "explanation": "In CKD, damaged kidneys cannot excrete phosphorus, leading to severe hyperphosphatemia and secondary hyperparathyroidism. Phosphate binders bind dietary phosphorus directly in the gut lumen, forming an insoluble precipitate excreted in feces.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "If taken on an empty stomach, calcium acetate is absorbed as a calcium supplement without binding food phosphorus."
        },
        {
          "option": "C",
          "reason": "Taking at bedtime misses binding meals and grapefruit juice alters CYP enzyme metabolism."
        },
        {
          "option": "D",
          "reason": "Phosphate binders must be taken with all meals every single day."
        }
      ],
      "priorityAlert": "Taking phosphate binders between meals causes hypercalcemia and vascular calcification instead of lowering phosphate!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Renal Pharmacology"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q16",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Pulmonary: Tension Pneumothorax Emergency Decompression",
    "scenarioQuestion": "A trauma patient with fractured ribs on mechanical ventilation develops sudden severe respiratory distress, cyanosis, and hypotension (BP 72/40 mmHg). On auscultation, breath sounds are absent on the right side, and the trachea is visibly deviated to the left. What is the emergency nurse's priority action?",
    "options": [
      {
        "id": "A",
        "text": "Immediately increase positive end-expiratory pressure (PEEP) on the mechanical ventilator"
      },
      {
        "id": "B",
        "text": "Assist with immediate needle thoracostomy decompression using a large-bore cannula at the 2nd intercostal space mid-clavicular line"
      },
      {
        "id": "C",
        "text": "Obtain an emergency stat portable chest X-ray to confirm pneumothorax"
      },
      {
        "id": "D",
        "text": "Perform vigorous bag-valve-mask manual hyperventilation"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Tension Pneumothorax is a clinical diagnosis requiring immediate needle thoracostomy decompression (2nd ICS midclavicular line or 5th ICS anterior axillary line) without waiting for a chest X-ray.",
      "explanation": "One-way air entry creates lethal intrapleural pressure, collapsing the ipsilateral lung and shifting the mediastinum, kinking the inferior vena cava. Venous return drops to zero, causing rapid pulseless electrical activity (PEA) arrest unless decompressed instantly.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Increasing PEEP increases intrathoracic pressure and worsens cardiac collapse."
        },
        {
          "option": "C",
          "reason": "Never delay needle decompression to wait for an X-ray in tension pneumothorax!"
        },
        {
          "option": "D",
          "reason": "Bag-valve-mask ventilation pumps more air into the pleural space, accelerating death."
        }
      ],
      "priorityAlert": "Tension Pneumothorax: Clinical diagnosis only! Waiting for radiographic confirmation is a fatal medical error!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Tension Pneumothorax Emergency"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q17",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Pulmonary: Acute Pulmonary Embolism (PE) Clinical Recognition",
    "scenarioQuestion": "A 60-year-old female on postoperative day 3 following total hip replacement suddenly develops sharp pleuritic chest pain, severe dyspnea, tachypnea (RR 34/min), tachycardia (HR 124 bpm), and a cough with blood-tinged sputum. Which diagnostic gold standard should the nurse anticipate?",
    "options": [
      {
        "id": "A",
        "text": "Computed Tomography Pulmonary Angiography (CTPA)"
      },
      {
        "id": "B",
        "text": "Barium swallow fluoroscopy"
      },
      {
        "id": "C",
        "text": "Sputum culture and sensitivity"
      },
      {
        "id": "D",
        "text": "Standard 2D Echocardiogram alone"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "CT Pulmonary Angiography (CTPA) is the recognized diagnostic gold standard for visualizing filling defects in the pulmonary arterial tree in suspected pulmonary embolism.",
      "explanation": "Post-arthroplasty patients are at high risk for DVT and PE. Sudden dyspnea, pleuritic pain, hemoptysis, and tachycardia form the classic presentation. CTPA provides definitive anatomical localization of the embolus.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Barium swallow assesses esophageal pathology, not pulmonary vasculature."
        },
        {
          "option": "C",
          "reason": "Sputum culture evaluates bacterial pneumonia."
        },
        {
          "option": "D",
          "reason": "Echocardiogram assesses right ventricular strain, but cannot visualize peripheral clots directly."
        }
      ],
      "priorityAlert": "First immediate nursing action for suspected PE: Elevate head of bed (High-Fowler's) and administer high-flow oxygen!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pulmonary Embolism Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q18",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Cardiology: Infective Endocarditis Peripheral Manifestations",
    "scenarioQuestion": "A patient with a prosthetic mitral valve presents with high fever, a new regurgitant heart murmur, and painful, tender, red erythematous nodules on the pads of the fingers and toes. How are these classical peripheral lesions named?",
    "options": [
      {
        "id": "A",
        "text": "Janeway lesions"
      },
      {
        "id": "B",
        "text": "Osler's nodes"
      },
      {
        "id": "C",
        "text": "Roth's spots"
      },
      {
        "id": "D",
        "text": "Splinter hemorrhages"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Osler's nodes are PAINFUL, tender, erythematous nodules on the pulp of fingers and toes due to immune complex deposition ('O' for Osler = 'O' for Ouch/Painful).",
      "explanation": "Infective endocarditis has hallmark cutaneous signs: Osler nodes (painful, immunologic), Janeway lesions (non-tender, hemorrhagic macules on palms/soles, septic emboli), Roth spots (retinal hemorrhages with pale centers), and splinter hemorrhages in nail beds.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Janeway lesions are painless flat macules on palms and soles."
        },
        {
          "option": "C",
          "reason": "Roth's spots are oval retinal hemorrhages with pale centers seen on fundoscopy."
        },
        {
          "option": "D",
          "reason": "Splinter hemorrhages are vertical red-brown streaks under the nail plates."
        }
      ],
      "priorityAlert": "Mnemonic: \"Osler = Ouch\" (Painful); \"Janeway = Just don't hurt\" (Painless)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Endocarditis Clinical Stigmata"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q19",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Endocrine: Acute Addisonian Crisis Life-Saving Intervention",
    "scenarioQuestion": "A patient with primary adrenal insufficiency (Addison's disease) on long-term Prednisolone abruptly stops taking their medication due to a viral illness. The patient presents to the ER in hypovolemic shock (BP 70/40 mmHg), profound lethargy, and hypoglycemia. Laboratory findings show: Na+ 122 mEq/L, K+ 6.8 mEq/L. Which medication is the LIFESAVING drug of choice?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous Dextrose 5% with Potassium chloride"
      },
      {
        "id": "B",
        "text": "Intravenous Hydrocortisone 100 mg bolus with Normal Saline 0.9%"
      },
      {
        "id": "C",
        "text": "Oral Fludrocortisone acetate 0.1 mg"
      },
      {
        "id": "D",
        "text": "Intravenous Spironolactone 50 mg"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Acute Addisonian crisis is an immediate medical emergency treated with IV Hydrocortisone (100 mg IV stat, then every 6-8 hours) and rapid 0.9% Normal Saline fluid replacement to restore vascular tone.",
      "explanation": "Abrupt withdrawal of corticosteroids leads to acute cortisol and aldosterone deficiency. Vascular smooth muscle becomes refractory to catecholamines, producing fatal hypotension. Hydrocortisone provides immediate glucocorticoid and mineralocorticoid activity, while Saline corrects hyponatremia and hypovolemia.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Adding potassium chloride is fatal because the patient is already severely hyperkalemic (6.8 mEq/L)."
        },
        {
          "option": "C",
          "reason": "Oral medication cannot be absorbed in acute shock."
        },
        {
          "option": "D",
          "reason": "Spironolactone is a potassium-sparing diuretic that would aggravate shock and hyperkalemia."
        }
      ],
      "priorityAlert": "Never give potassium in Addisonian crisis! The patient has mineralocorticoid deficiency and lethal hyperkalemia!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Adrenal Crisis Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q20",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Hematology: Pernicious Anemia & Vitamin B12 Pathophysiology",
    "scenarioQuestion": "A 58-year-old male presents with fatigue, paresthesias in both feet, ataxia, and a beefy, red, smooth, sore tongue (glossitis). A peripheral blood smear demonstrates macrocytic, normochromic erythrocytes. Which underlying pathophysiological defect causes Pernicious Anemia?",
    "options": [
      {
        "id": "A",
        "text": "Autoimmune destruction of gastric parietal cells leading to Intrinsic Factor deficiency"
      },
      {
        "id": "B",
        "text": "Dietary deficiency of ascorbic acid (Vitamin C)"
      },
      {
        "id": "C",
        "text": "Excessive destruction of erythrocytes by splenic macrophages"
      },
      {
        "id": "D",
        "text": "Impaired synthesis of the beta-globin chain of hemoglobin"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Pernicious Anemia results from autoimmune destruction of gastric parietal cells, eliminating Intrinsic Factor (IF) which is mandatory for Vitamin B12 absorption in the terminal ileum.",
      "explanation": "Without Intrinsic Factor, cyanocobalamin cannot be absorbed, leading to megaloblastic anemia and demyelination of the posterior and lateral columns of the spinal cord (subacute combined degeneration). Treatment requires lifelong intramuscular Vitamin B12 injections.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Vitamin C deficiency causes scurvy, not macrocytic anemia."
        },
        {
          "option": "C",
          "reason": "Splenic erythrocyte destruction describes hemolytic anemia."
        },
        {
          "option": "D",
          "reason": "Defects in beta-globin synthesis cause Beta-Thalassemia."
        }
      ],
      "priorityAlert": "Oral B12 is ineffective in true pernicious anemia because intrinsic factor is absent — lifelong parenteral (IM) B12 is required!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Hematology & Anemia Disorders"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q21",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Renal: Peritoneal Dialysis Effluent Peritonitis Warning",
    "scenarioQuestion": "A patient with end-stage renal disease performs continuous ambulatory peritoneal dialysis (CAPD) at home. The patient contacts the peritoneal dialysis clinic reporting that the drained dialysate fluid appears cloudy and murky. What should the nurse suspect as the primary complication?",
    "options": [
      {
        "id": "A",
        "text": "Normal, expected appearance of protein-rich dialysate effluent"
      },
      {
        "id": "B",
        "text": "Peritonitis requiring immediate effluent specimen culture and intraperitoneal antibiotics"
      },
      {
        "id": "C",
        "text": "Rapid catastrophic intra-abdominal arterial hemorrhage"
      },
      {
        "id": "D",
        "text": "Severe catheter lumen occlusion due to heparin fibrinous clots"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Cloudy, opaque dialysate effluent is the earliest and hallmark sign of Peritonitis in peritoneal dialysis, typically accompanied by rebound abdominal pain and fever.",
      "explanation": "Normal peritoneal dialysate effluent must be completely clear and pale yellow. Cloudiness indicates high white blood cell count (WBC > 100/mcL with > 50% PMNs), signaling bacterial contamination. The nurse must collect the drain bag for microscopy and culture and initiate antibiotics.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Normal dialysate effluent must be crystal clear; cloudiness is always pathological."
        },
        {
          "option": "C",
          "reason": "Arterial bleeding produces bright red bloody effluent, not cloudy effluent."
        },
        {
          "option": "D",
          "reason": "Catheter occlusion causes poor outflow drainage, not cloudiness."
        }
      ],
      "priorityAlert": "Strict aseptic technique during bag exchanges is the single most effective intervention to prevent peritonitis in CAPD!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Dialysis Complications"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q22",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Autonomic Dysreflexia Immediate Priority Action",
    "scenarioQuestion": "A patient with a T4 complete spinal cord injury suddenly complains of a pounding, throbbing headache, blurred vision, and nasal congestion. The nurse notes severe diaphoresis and flushing above the level of injury with goosebumps below. Vital signs: BP 210/110 mmHg, HR 50 bpm. What is the nurse's FIRST priority action?",
    "options": [
      {
        "id": "A",
        "text": "Place the patient in a flat supine position with legs elevated"
      },
      {
        "id": "B",
        "text": "Immediately elevate the head of the bed to a high-Fowler's (90°) position and loosen tight clothing"
      },
      {
        "id": "C",
        "text": "Administer an immediate IV bolus of 500 mL Normal Saline"
      },
      {
        "id": "D",
        "text": "Perform a lumbar puncture to measure cerebrospinal fluid opening pressure"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The immediate first action in Autonomic Dysreflexia is sitting the patient upright in High-Fowler's position (90°) with legs dangling to pool blood in the lower extremities and lower intracranial blood pressure.",
      "explanation": "Autonomic Dysreflexia occurs in SCI at T6 or above due to an uninhibited sympathetic response to a noxious stimulus below the injury (usually full bladder or impacted bowel). Sitting upright induces orthostatic pooling, preventing catastrophic intracranial hemorrhage.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Placing the patient supine increases venous return to the heart, exacerbating lethal hypertensive crisis."
        },
        {
          "option": "C",
          "reason": "IV fluid bolus worsens severe hypertension."
        },
        {
          "option": "D",
          "reason": "Lumbar puncture is contraindicated and delays immediate bladder decompression."
        }
      ],
      "priorityAlert": "Step 1: Sit patient upright! Step 2: Check for bladder distension (kinked Foley). Step 3: Check for fecal impaction!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Spinal Cord Injury Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q23",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Vascular: Deep Vein Thrombosis (DVT) Safeguards & Virchow's Triad",
    "scenarioQuestion": "A patient who underwent an exploratory laparotomy 4 days ago develops sudden warmth, tenderness, and a 3 cm circumference enlargement of the left calf compared to the right calf. Which action by a student nurse requires IMMEDIATE intervention by the supervising nursing officer?",
    "options": [
      {
        "id": "A",
        "text": "Maintaining the patient on bed rest with left leg elevated on pillows"
      },
      {
        "id": "B",
        "text": "Vigorously massaging the patient's left calf with lotion to relieve muscular cramping"
      },
      {
        "id": "C",
        "text": "Applying warm, moist compresses as prescribed to the affected calf"
      },
      {
        "id": "D",
        "text": "Measuring bilateral calf circumferences at the same anatomical distance below the patella"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Massaging a limb with suspected or confirmed Deep Vein Thrombosis (DVT) is strictly contraindicated because mechanical shearing forces dislodge the venous thrombus, causing a fatal Pulmonary Embolism.",
      "explanation": "A fresh venous thrombus is loosely adherent to the endothelium. Any massage, rubbing, or forceful palpation can fragment the clot. The embolus travels through the inferior vena cava and right heart chambers directly into the pulmonary arterial circulation.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Bed rest with elevation promotes venous return and reduces edema."
        },
        {
          "option": "C",
          "reason": "Warm moist heat provides analgesia and mild vasodilation."
        },
        {
          "option": "D",
          "reason": "Serial circumference measurements quantify progression of unilateral swelling."
        }
      ],
      "priorityAlert": "Never massage a swollen, painful calf! Dislodgement of a DVT produces catastrophic pulmonary embolism."
    },
    "difficulty": "Easy",
    "clinicalTag": "Thrombophlebitis Safety Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q24",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Guillain-Barré Syndrome (GBS) Respiratory Compromise",
    "scenarioQuestion": "A 28-year-old male is admitted with Guillain-Barré Syndrome (GBS) following a Campylobacter jejuni enteritis. The patient has progressive ascending symmetric muscle weakness that has now reached the upper arms. Which bedside clinical assessment is the MOST critical indicator of impending respiratory failure?",
    "options": [
      {
        "id": "A",
        "text": "Serial Forced Vital Capacity (FVC) dropping below 15 mL/kg and Negative Inspiratory Force (NIF) < -20 cmH2O"
      },
      {
        "id": "B",
        "text": "Loss of bilateral Achilles deep tendon reflexes"
      },
      {
        "id": "C",
        "text": "Development of bilateral stocking-glove paresthesias"
      },
      {
        "id": "D",
        "text": "Mild elevation in body temperature to 37.8°C"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In Guillain-Barré Syndrome, serial pulmonary function monitoring (Forced Vital Capacity < 15-20 mL/kg or NIF < -20 to -30 cmH2O) is the gold standard for timing elective intubation before acute asphyxiation.",
      "explanation": "GBS causes demyelination of peripheral and cranial nerves. As motor weakness ascends to the phrenic and intercostal nerves, diaphragm excursion fails. Waiting for SpO2 to drop or cyanosis to appear is a late, hazardous mistake.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Areflexia is a standard diagnostic hallmark of GBS, but does not predict immediate respiratory collapse."
        },
        {
          "option": "C",
          "reason": "Paresthesias are sensory symptoms that precede motor involvement."
        },
        {
          "option": "D",
          "reason": "Low-grade fever does not indicate diaphragmatic paralysis."
        }
      ],
      "priorityAlert": "Rule of 20/30/40 in GBS: FVC < 20 mL/kg, NIF < -30 cmH2O, or MEP < 40 cmH2O indicates immediate elective ICU intubation!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Neuromuscular Respiratory Monitoring"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q25",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_msn_02",
    "topicTitle": "Neurology: Multiple Sclerosis Uhthoff's Phenomenon & Lhermitte's Sign",
    "scenarioQuestion": "A 32-year-old female with relapsing-remitting Multiple Sclerosis (MS) complains that whenever she takes a hot shower or sits in a sauna, her vision becomes blurry and her lower extremity weakness worsens markedly. How should the nurse explain this physiological phenomenon?",
    "options": [
      {
        "id": "A",
        "text": "It represents Uhthoff's phenomenon, where elevated body temperature transiently slows conduction along demyelinated axons"
      },
      {
        "id": "B",
        "text": "It is Lhermitte's sign caused by cervical spinal cord compression"
      },
      {
        "id": "C",
        "text": "It signifies an acute irreversible bacterial meningoencephalitis"
      },
      {
        "id": "D",
        "text": "It indicates a toxic allergic reaction to prescribed Baclofen"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Uhthoff's phenomenon is the transient, reversible worsening of neurological symptoms in Multiple Sclerosis patients triggered by elevated body temperature (hot showers, fever, exercise).",
      "explanation": "Demyelinated central nervous system axons have a narrow safety margin for action potential propagation. Heat alters voltage-gated sodium channel kinetics, temporarily blocking nerve conduction. Symptoms resolve once the body cools.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Lhermitte's sign is an electric-shock sensation radiating down the spine upon neck flexion."
        },
        {
          "option": "C",
          "reason": "Transient heat sensitivity is non-infectious."
        },
        {
          "option": "D",
          "reason": "Baclofen treats muscle spasticity and does not cause heat-induced visual blurring."
        }
      ],
      "priorityAlert": "MS Education: Advise patients to avoid hot tubs, saunas, and prolonged sun exposure; use cooling vests during exercise!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Multiple Sclerosis Education"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q26",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Blood Transfusion Complications",
    "scenarioQuestion": "A 42-year-old female post-hysterectomy is receiving her first unit of Packed Red Blood Cells (PRBC). Seven minutes into the transfusion, the patient complains of sudden intense flank pain, severe chills, and dyspnea. Her vital signs are: BP 82/50 mmHg, HR 128 bpm, Temp 38.9°C (102°F). Which of the following is the nurse's FIRST priority action?",
    "options": [
      {
        "id": "A",
        "text": "Slow the transfusion to a keep-vein-open (KVO) rate and call the doctor immediately."
      },
      {
        "id": "B",
        "text": "Stop the blood transfusion immediately and disconnect the blood tubing from the IV catheter."
      },
      {
        "id": "C",
        "text": "Administer prescribed IV hydrocortisone and diphenhydramine through the blood line port."
      },
      {
        "id": "D",
        "text": "Flush the existing IV blood tubing vigorously with 50 mL of Normal Saline to clear micro-clots."
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The immediate priority in any suspected acute hemolytic transfusion reaction is to STOP the infusion immediately and disconnect the blood tubing at the cannula hub.",
      "explanation": "The patient presents with hallmark signs of Acute Hemolytic Transfusion Reaction (AHTR): sudden flank pain, chills, high fever, tachycardia, and hypotension. The nurse must stop the transfusion right away to prevent further incompatible cells from entering, and disconnect at the cannula hub.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Slowing rate still delivers fatal incompatible donor RBCs."
        },
        {
          "option": "C",
          "reason": "Medications should never be pushed into the blood line port."
        },
        {
          "option": "D",
          "reason": "Flushing boluses incompatible blood into the patient, triggering severe DIC."
        }
      ],
      "priorityAlert": "CRITICAL RULE: Disconnect the tubing at the catheter hub. Never flush the blood remaining in the tubing!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Transfusion Reaction Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q27",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Pediatric IV Micro-drip Calculation",
    "scenarioQuestion": "A doctor orders 500 mL of 0.45% Normal Saline to be infused over 8 hours for a 5-year-old child using a standard pediatric micro-drip burette set (drop factor: 60 gtt/mL). At what flow rate should the nursing officer regulate the infusion in drops per minute (gtt/min)?",
    "options": [
      {
        "id": "A",
        "text": "31 gtt/min"
      },
      {
        "id": "B",
        "text": "63 gtt/min"
      },
      {
        "id": "C",
        "text": "125 gtt/min"
      },
      {
        "id": "D",
        "text": "21 gtt/min"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Formula: Flow Rate (gtt/min) = [Total Volume (mL) × Drop Factor (gtt/mL)] ÷ [Time in Minutes]. With a micro-drip set (60 gtt/mL), gtt/min is numerically identical to mL/hr!",
      "explanation": "Step 1: Calculate hourly rate = 500 mL ÷ 8 hours = 62.5 mL/hr. Step 2: Using the micro-drip shortcut (60 ÷ 60 = 1), Drop rate = 62.5 gtt/min. Step 3: Round to nearest whole integer = 63 gtt/min.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "31 gtt/min results from assuming 16 hours."
        },
        {
          "option": "C",
          "reason": "125 gtt/min results from calculating for 4 hours."
        },
        {
          "option": "D",
          "reason": "21 gtt/min is the result if using a macro-drip factor of 20 gtt/mL."
        }
      ],
      "priorityAlert": "Clinical Rule: Always round drops per minute to the nearest WHOLE integer because a fraction of a drop cannot be delivered."
    },
    "difficulty": "Moderate",
    "clinicalTag": "IV Flow Rate Arithmetic"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q28",
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
      "explanation": "Stage I is intact skin with non-blanchable erythema. Stage II involves epidermis and dermis loss without visible subcutaneous fat. Stage III extends into subcutaneous fat. Intact serum-filled blister is diagnostic for Stage II.",
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
          "reason": "Unstageable has base completely covered by slough or eschar."
        }
      ],
      "priorityAlert": "Exam Rule: Intact or ruptured SERUM-filled blister = Stage II. Intact BLOOD-filled blister = Deep Tissue Pressure Injury (DTPI)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Wound Care & Staging"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q29",
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
      "explanation": "In chronic COPD retainers, central chemoreceptors are desensitized to elevated CO2; respiration is driven by peripheral hypoxia. High-concentration oxygen abolishes this hypoxic drive, causing CO2 narcosis and respiratory arrest.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "An NRBM delivers 80%–95% FiO2, extinguishing hypoxic drive."
        },
        {
          "option": "C",
          "reason": "A simple face mask at 3 L/min causes CO2 rebreathing; minimum flow rate is 5 L/min."
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
    "id": "AIIMS_NORCET_2024_S1_Q30",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Critical Care: Endotracheal Suctioning Complications",
    "scenarioQuestion": "While a nursing officer is performing endotracheal suctioning on a mechanically ventilated patient in the ICU, the bedside cardiac monitor suddenly displays severe sinus bradycardia with HR dropping from 86 bpm to 38 bpm. Which of the following is the nurse's IMMEDIATE priority action?",
    "options": [
      {
        "id": "A",
        "text": "Increase suction vacuum pressure to 160 mmHg to clear secretions faster"
      },
      {
        "id": "B",
        "text": "Immediately withdraw the catheter, stop suctioning, and hyperventilate with 100% oxygen"
      },
      {
        "id": "C",
        "text": "Push 1 mg IV Atropine through the central line without interrupting suctioning"
      },
      {
        "id": "D",
        "text": "Instill 10 mL of sterile Normal Saline down the ET tube to loosen mucous plugs"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Immediate action during suction-induced bradycardia or severe desaturation is to withdraw the catheter, discontinue negative pressure, and hyperventilate with 100% O2.",
      "explanation": "Endotracheal suctioning stimulates the vagus nerve (parasympathetic surge) and induces acute alveolar hypoxia, triggering profound bradycardia and dysrhythmias. Ceasing suction and re-oxygenating recovers heart rate and SpO2.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Increasing vacuum pressure intensifies hypoxemia."
        },
        {
          "option": "C",
          "reason": "Stopping the stimulus (suction) takes precedence over drug administration."
        },
        {
          "option": "D",
          "reason": "Saline instillation flushes biofilm into lungs, increasing VAP risk."
        }
      ],
      "priorityAlert": "Never suction continuously for more than 10–15 seconds! Always pre-oxygenate with 100% O2 for at least 30–60 seconds."
    },
    "difficulty": "Hard",
    "clinicalTag": "Airway Suctioning Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q31",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Critical Care: Accidental Fresh Tracheostomy Decannulation",
    "scenarioQuestion": "On postoperative day 1 after an open surgical tracheostomy, an agitated patient coughs forcefully and completely dislodges the tracheostomy tube onto the bed sheets. The patient exhibits sudden stridor and tachypnea. Which is the nurse's IMMEDIATE first action?",
    "options": [
      {
        "id": "A",
        "text": "Attempt to force a larger-size tracheostomy tube blindly back into the stoma"
      },
      {
        "id": "B",
        "text": "Spread the stoma with a sterile tracheal dilator or hemostat and call the emergency airway team"
      },
      {
        "id": "C",
        "text": "Cover the stoma tightly with an occlusive dressing and apply a simple face mask"
      },
      {
        "id": "D",
        "text": "Place the patient prone and perform back blows to maintain tracheal patency"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In a fresh tracheostomy (<7 days), the surgical tract has not matured. Accidental decannulation causes immediate stomal collapse. Spreading the tracheal opening with a sterile tracheal dilator prevents asphyxiation while an emergency airway team is summoned.",
      "explanation": "Blind reinsertion attempts can create a fatal false passage into the pretracheal space, causing tension pneumomediastinum or complete tracheal compression. The nurse must maintain stoma patency with a sterile tracheal dilator.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Blind reinsertion risks creating a false track and total airway closure."
        },
        {
          "option": "C",
          "reason": "Occluding the stoma suffocates the patient."
        },
        {
          "option": "D",
          "reason": "Prone positioning compromises breathing excursion."
        }
      ],
      "priorityAlert": "Safety Rule: Always keep an extra tracheostomy tube of the same size, one size smaller, an obturator, and a sterile tracheal dilator at the patient's bedside!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Airway Emergency Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q32",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
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
      "keyTakeaway": "The phlebostatic axis is located at the 4th intercostal space, mid-axillary line, corresponding anatomically to the level of the right atrium.",
      "explanation": "Zeroing the transducer at the phlebostatic axis aligns the measurement with hydrostatic pressure inside the right atrium. If the transducer is positioned too high, hydrostatic pressure artificially drops (falsely LOW CVP). If too low, it gives a falsely HIGH CVP.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "2nd ICS is too high and yields falsely depressed readings."
        },
        {
          "option": "C",
          "reason": "5th ICS anterior axillary line is improperly displaced."
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
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q33",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: IV Cannula Selection for Blood Transfusion",
    "scenarioQuestion": "A nursing officer is assigned to initiate a transfusion of 2 units of Packed Red Blood Cells (PRBC) for an adult patient with severe chronic anemia. Which IV cannula gauge is the recognized gold standard to prevent mechanical red cell hemolysis?",
    "options": [
      {
        "id": "A",
        "text": "24G Yellow"
      },
      {
        "id": "B",
        "text": "22G Blue"
      },
      {
        "id": "C",
        "text": "18G Green"
      },
      {
        "id": "D",
        "text": "26G Violet"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "18G Green cannula (1.3 mm diameter, ~90 mL/min flow rate) is the recognized clinical gold standard for blood transfusions in adult patients.",
      "explanation": "The larger internal lumen of an 18G cannula reduces shear stress on erythrocyte membranes, preventing in-line hemolysis during high-viscosity blood administration.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "24G Yellow has an extremely narrow lumen; infusing blood cells will cause rapid hemolysis."
        },
        {
          "option": "B",
          "reason": "22G Blue is reserved for maintenance crystalloids in fragile veins."
        },
        {
          "option": "D",
          "reason": "26G Violet is strictly used in premature neonates."
        }
      ],
      "priorityAlert": "Never use 24G or 26G for PRBC transfusions — cellular shearing causes massive hemoglobinuria and acute kidney injury."
    },
    "difficulty": "Easy",
    "clinicalTag": "IV Catheter Specifications"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q34",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Emergency: Trauma Resuscitation Cannula Sizing",
    "scenarioQuestion": "A 28-year-old motor vehicle crash victim is brought to the emergency department in hypovolemic hemorrhagic shock. Which size peripheral IV cannula should the emergency nurse insert immediately for rapid large-volume fluid resuscitation?",
    "options": [
      {
        "id": "A",
        "text": "16G Grey (or 14G Orange)"
      },
      {
        "id": "B",
        "text": "20G Pink"
      },
      {
        "id": "C",
        "text": "22G Blue"
      },
      {
        "id": "D",
        "text": "24G Yellow"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Poiseuille’s Law states flow rate is proportional to the 4th power of the radius. Large-bore cannulas (14G Orange ~240 mL/min, 16G Grey ~180 mL/min) are mandatory in acute shock.",
      "explanation": "For massive volume resuscitation in hemorrhagic shock, two large-bore peripheral IV lines (14G or 16G) in the antecubital fossa deliver fluid faster than a multi-lumen CVC.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "20G Pink delivers only ~60 mL/min, insufficient for rapid shock reversal."
        },
        {
          "option": "C",
          "reason": "22G delivers ~36 mL/min, too slow for acute trauma resuscitation."
        },
        {
          "option": "D",
          "reason": "24G is an infant cannula delivering only ~20 mL/min."
        }
      ],
      "priorityAlert": "Two large-bore peripheral lines (14G/16G) deliver fluid faster than a standard multi-lumen central venous catheter!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Trauma Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q35",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Urinary Catheterization Balloon Inflation",
    "scenarioQuestion": "A nurse is inserting an indwelling Foley catheter (16 Fr) in an adult male patient. After observing clear urine flowing into the tubing, what should the nurse do BEFORE inflating the retention balloon?",
    "options": [
      {
        "id": "A",
        "text": "Inflate the balloon immediately with 10 mL of Normal Saline at that exact point"
      },
      {
        "id": "B",
        "text": "Advance the catheter an additional 1 to 2 inches (2.5–5 cm) to ensure the balloon is completely within the bladder lumen"
      },
      {
        "id": "C",
        "text": "Pull back the catheter firmly until resistance is felt, then inflate with sterile water"
      },
      {
        "id": "D",
        "text": "Inflate the balloon with 10 mL of room air to prevent catheter weight pressure"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "After urine flash is seen, always advance the catheter another 1-2 inches (or to the bifurcation hub in males) BEFORE inflating the balloon to prevent traumatic urethral rupture.",
      "explanation": "Urine flow begins as soon as the catheter tip enters the bladder neck. The balloon is located 1-2 inches behind the eyelet. Inflating without advancing risks expanding the balloon inside the sensitive membranous/prostatic urethra, causing severe laceration and hemorrhage.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Inflating at the first drop of urine risks urethral rupture, and Normal Saline forms micro-crystals that jam the inflation valve."
        },
        {
          "option": "C",
          "reason": "Pulling back before inflation pulls the balloon into the urethra."
        },
        {
          "option": "D",
          "reason": "Air causes the balloon to float and obstruct the bladder outlet."
        }
      ],
      "priorityAlert": "Always inflate Foley balloons with STERILE WATER, never Normal Saline (crystallization jams deflation channel)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Urinary Catheterization Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q36",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Nasogastric (NG) Tube Verification Protocol",
    "scenarioQuestion": "A nursing officer has inserted a Salem sump nasogastric (NG) tube for a patient with intestinal obstruction. Which method is the recognized CLINICAL GOLD STANDARD to confirm correct anatomical placement before initiating enteral feeding?",
    "options": [
      {
        "id": "A",
        "text": "Auscultating a whooshing sound over the epigastrium while injecting 20 mL of air"
      },
      {
        "id": "B",
        "text": "Checking the pH of aspirated gastric contents and obtaining a radiographic Chest/Abdominal X-ray"
      },
      {
        "id": "C",
        "text": "Placing the external end of the NG tube into a cup of water and observing for bubbles"
      },
      {
        "id": "D",
        "text": "Asking the patient if they feel comfortable and can speak without coughing"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Abdominal X-ray is the absolute gold standard for verifying NG tube placement; bedside gastric aspirate pH (<5.5) is the primary ongoing biochemical check.",
      "explanation": "Auscultation of an air bolus is notoriously unreliable because air injected into the bronchus or pleural cavity can radiate sounds to the epigastrium. X-ray confirmation verifies the tip is past the gastroesophageal junction.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Auscultatory air insufflation is condemned in international safety guidelines due to fatal pulmonary aspiration cases."
        },
        {
          "option": "C",
          "reason": "Placing the tube in water risks fatal water aspiration if the patient inhales."
        },
        {
          "option": "D",
          "reason": "Comatose or neurologically impaired patients may not cough despite bronchial placement."
        }
      ],
      "priorityAlert": "Never rely on the \"air whoosh\" test alone to start feeds! Gastric aspirate pH must be < 5.5, or placement confirmed by X-ray."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Enteral Tube Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q37",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Emergency: Basic Life Support (BLS AHA 2020) Adult Compressions",
    "scenarioQuestion": "A nurse discovers an adult patient unresponsive, pulseless, and apneic in the hospital corridor. In accordance with the American Heart Association (AHA) CPR guidelines, what are the target chest compression RATE and DEPTH for adult resuscitation?",
    "options": [
      {
        "id": "A",
        "text": "80–100 compressions/min; depth of at least 1.5 inches (4 cm)"
      },
      {
        "id": "B",
        "text": "100–120 compressions/min; depth of 2 to 2.4 inches (5 to 6 cm)"
      },
      {
        "id": "C",
        "text": "120–140 compressions/min; depth of at least 3 inches (7.5 cm)"
      },
      {
        "id": "D",
        "text": "60–80 compressions/min; depth of 1 inch (2.5 cm)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "AHA CPR standard parameters for adults: Compression Rate = 100 to 120 beats/min; Compression Depth = 2 to 2.4 inches (5 to 6 cm) with complete chest recoil.",
      "explanation": "Compressing slower than 100/min provides inadequate coronary perfusion pressure; compressing faster than 120/min reduces diastolic filling time. Depth exceeding 2.4 inches (6 cm) increases internal visceral trauma.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "80-100/min is too slow to maintain coronary perfusion."
        },
        {
          "option": "C",
          "reason": "Excessive depth > 2.4 inches causes cardiac contusion and rib fractures."
        },
        {
          "option": "D",
          "reason": "60-80/min is an outdated and ineffective rate."
        }
      ],
      "priorityAlert": "Allow COMPLETE chest recoil between compressions to permit coronary artery blood flow!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Cardiopulmonary Resuscitation"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q38",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Cleansing Enema Administration Technique",
    "scenarioQuestion": "A nursing officer is administering a soap-suds cleansing enema to an adult patient before colon surgery. In which anatomical position should the patient be placed, and how high should the enema fluid container be held above the patient's rectum?",
    "options": [
      {
        "id": "A",
        "text": "Right lateral Sims' position; container held 24 inches high"
      },
      {
        "id": "B",
        "text": "Left lateral Sims' position with right knee flexed; container held 12 to 18 inches (30–45 cm) high"
      },
      {
        "id": "C",
        "text": "Lithotomy position; container held 6 inches high"
      },
      {
        "id": "D",
        "text": "Prone position with hips elevated; container held 30 inches high"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The patient must be placed in Left Lateral Sims' position to follow the natural anatomical curve of the sigmoid colon, with the container held 12-18 inches above the rectum.",
      "explanation": "The sigmoid colon and rectum naturally slope downward to the left. Positioning on the left side facilitates fluid flow by gravity into the descending colon. Holding the bag higher than 18 inches creates excessive hydrostatic pressure, causing severe cramping and potential bowel perforation.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Right lateral positioning works against gravity and 24 inches is dangerously high."
        },
        {
          "option": "C",
          "reason": "Lithotomy is uncomfortable and inappropriate for enema instillation."
        },
        {
          "option": "D",
          "reason": "Prone position is unsafe and 30 inches generates excessive pressure."
        }
      ],
      "priorityAlert": "If the patient complains of cramping during enema instillation, CLAMP the tubing temporarily or lower the container, and instruct the patient to take deep slow breaths!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Enema Administration Procedure"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q39",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Perioperative: WHO Surgical Safety Checklist Phases",
    "scenarioQuestion": "During an emergency laparotomy, the circulating nurse pauses all team activity immediately before the surgeon makes the skin incision to confirm patient identity, surgical site, and planned procedure. Which phase of the WHO Surgical Safety Checklist is being conducted?",
    "options": [
      {
        "id": "A",
        "text": "Sign In (before induction of anesthesia)"
      },
      {
        "id": "B",
        "text": "Time Out (before skin incision)"
      },
      {
        "id": "C",
        "text": "Sign Out (before patient leaves the operating room)"
      },
      {
        "id": "D",
        "text": "Debriefing (in post-anesthesia care unit)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The \"Time Out\" phase occurs immediately BEFORE the skin incision is made, where all operating team members verbally confirm the correct patient, correct site, correct procedure, and antibiotic administration.",
      "explanation": "WHO Surgical Checklist has 3 critical phases: 1) Sign In (before induction, with anesthetist & nurse), 2) Time Out (before skin incision, entire team), 3) Sign Out (before wound closure, needle/sponge count confirmation).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Sign In occurs prior to induction of anesthesia."
        },
        {
          "option": "C",
          "reason": "Sign Out occurs after surgery before the patient exits the OR."
        },
        {
          "option": "D",
          "reason": "Debriefing is a postoperative review process."
        }
      ],
      "priorityAlert": "During \"Time Out\", every single operating team member (surgeon, anesthetist, nurse) must stop and verbally confirm site marking!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Surgical Safety Standards"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q40",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Pharmacology: Eye Drop (Ophthalmic) Instillation Technique",
    "scenarioQuestion": "When administering eye drops (e.g. Timolol maleate for glaucoma), where should the nurse instill the drops, and what action should the nurse instruct the patient to perform immediately afterward to prevent systemic drug absorption?",
    "options": [
      {
        "id": "A",
        "text": "Instill directly onto the cornea; blink rapidly 10 times"
      },
      {
        "id": "B",
        "text": "Instill into the lower conjunctival sac; apply gentle digital pressure over the inner canthus (nasolacrimal duct) for 1 to 2 minutes"
      },
      {
        "id": "C",
        "text": "Instill onto the upper sclera; rub the closed eyelid vigorously"
      },
      {
        "id": "D",
        "text": "Instill into the outer canthus; keep the eye wide open for 30 seconds"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Ophthalmic drops must be instilled into the lower conjunctival sac. Occluding the nasolacrimal duct (inner canthus) for 1-2 minutes prevents systemic vascular absorption through nasal mucosa.",
      "explanation": "Never drop medication directly on the sensitive cornea (stimulates blinking and corneal abrasion). Pressing the inner canthus prevents beta-blockers like Timolol from entering systemic circulation and causing severe bradycardia and bronchospasm.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Direct corneal drops cause reflex tearing and wash out the drug."
        },
        {
          "option": "C",
          "reason": "Rubbing eyelids damages corneal epithelium and expresses the medication."
        },
        {
          "option": "D",
          "reason": "Outer canthus instillation leads to medication runoff."
        }
      ],
      "priorityAlert": "Wait at least 5 minutes between instilling two different ophthalmic medications to prevent dilution!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Medication Administration"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q41",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Infection Control: Personal Protective Equipment (PPE) Donning Sequence",
    "scenarioQuestion": "A nurse is preparing to care for a patient in contact and droplet isolation. According to CDC and hospital infection control guidelines, what is the CORRECT sequence for DONNING Personal Protective Equipment (PPE)?",
    "options": [
      {
        "id": "A",
        "text": "Gloves -> Mask -> Goggles -> Gown"
      },
      {
        "id": "B",
        "text": "Gown -> Mask/Respirator -> Goggles/Face Shield -> Gloves"
      },
      {
        "id": "C",
        "text": "Mask -> Gown -> Gloves -> Goggles"
      },
      {
        "id": "D",
        "text": "Goggles -> Mask -> Gown -> Gloves"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The CDC PPE Donning Sequence is: 1) Gown, 2) Mask/Respirator, 3) Goggles/Face Shield, 4) Gloves. The Doffing (removal) sequence is: Gloves -> Goggles -> Gown -> Mask.",
      "explanation": "Gown is put on first to cover clothing. Mask and eye protection are secured next. Gloves are donned last and pulled over the wrist cuffs of the gown to ensure complete containment.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Gloves must always be donned last."
        },
        {
          "option": "C",
          "reason": "Gown precedes mask in standard sequence."
        },
        {
          "option": "D",
          "reason": "Gown is the first item donned."
        }
      ],
      "priorityAlert": "Doffing Rule: Gloves are always the dirtiest item and removed FIRST! Respirator/Mask is removed outside the isolation room LAST."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Infection Control Protocols"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q42",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Intramuscular Injection Z-Track Technique",
    "scenarioQuestion": "A nursing officer is administering deep intramuscular Iron Dextran to an adult patient. Which technique must the nurse utilize to prevent tracking of the dark medication into subcutaneous tissue and cutaneous staining?",
    "options": [
      {
        "id": "A",
        "text": "Pinch the skin firmly and insert needle at a 45-degree angle"
      },
      {
        "id": "B",
        "text": "Z-Track technique: pull skin laterally 1 to 1.5 inches before needle insertion, inject slowly, wait 10 seconds, and release skin after withdrawing needle"
      },
      {
        "id": "C",
        "text": "Aspirate vigorously for 15 seconds and massage site vigorously for 2 minutes"
      },
      {
        "id": "D",
        "text": "Use a short 5/8-inch 25-gauge needle into the deltoid muscle"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The Z-track technique displaces skin and subcutaneous tissue laterally prior to injection, creating a zigzag track that seals the needle channel when released, preventing medication leakage and tattoo staining.",
      "explanation": "Irritating or staining drugs (Iron Dextran, Haloperidol) require Z-track technique in the ventrogluteal muscle. Waiting 10 seconds before needle withdrawal allows the medication to disperse into muscle fibers. Massaging the site is strictly contraindicated.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Pinching skin is used for subcutaneous injections at 45 degrees, not deep IM."
        },
        {
          "option": "C",
          "reason": "Massaging pushes the staining medication back up through the needle track."
        },
        {
          "option": "D",
          "reason": "Iron requires a deep 1.5 to 2-inch needle into large muscle mass (gluteal), never deltoid."
        }
      ],
      "priorityAlert": "Never massage an IM injection site after using the Z-track technique!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Invasive Medication Administration"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q43",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Infection Control: Autoclave Parameters & Biological Validation",
    "scenarioQuestion": "The Central Sterile Supply Department (CSSD) is sterilizing surgical instrument trays. Which operating temperature, pressure, and time parameters are standard for steam under pressure autoclaving?",
    "options": [
      {
        "id": "A",
        "text": "100°C at 5 psi for 60 minutes"
      },
      {
        "id": "B",
        "text": "121°C (250°F) at 15 psi for 15 to 20 minutes"
      },
      {
        "id": "C",
        "text": "160°C at atmospheric pressure for 10 minutes"
      },
      {
        "id": "D",
        "text": "80°C with ethylene oxide gas for 2 hours"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Standard steam sterilization parameters: 121°C (250°F) at 15 pounds per square inch (psi) pressure for 15 to 20 minutes (or 134°C at 30 psi for 3–5 minutes in high-speed pre-vacuum flash autoclaves).",
      "explanation": "Moist heat under pressure denatures and coagulates bacterial proteins and enzymes. The biological indicator of efficacy is Geobacillus stearothermophilus spores.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "100°C is simple boiling and does not kill bacterial endospores."
        },
        {
          "option": "C",
          "reason": "160°C for 2 hours represents dry heat oven sterilization."
        },
        {
          "option": "D",
          "reason": "80°C describes pasteurization, not autoclaving."
        }
      ],
      "priorityAlert": "Biological Spore Indicator: Geobacillus stearothermophilus for Steam Autoclaves; Bacillus atrophaeus for Ethylene Oxide (ETO) and Dry Heat!"
    },
    "difficulty": "Easy",
    "clinicalTag": "CSSD & Sterilization Parameters"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q44",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Hot and Cold Application Rebound Phenomenon",
    "scenarioQuestion": "A nurse applies an ice pack to a patient's sprained ankle to reduce swelling and vasoconstrict local capillaries. According to cryotherapy principles, after how many minutes does the physiological \"rebound phenomenon\" (paradoxical vasodilation) occur?",
    "options": [
      {
        "id": "A",
        "text": "5 to 10 minutes"
      },
      {
        "id": "B",
        "text": "20 to 30 minutes"
      },
      {
        "id": "C",
        "text": "60 to 90 minutes"
      },
      {
        "id": "D",
        "text": "120 minutes"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The rebound phenomenon occurs when hot or cold applications are left in place longer than 20 to 30 minutes, producing the exact opposite physiological effect (e.g. cold produces vasodilation, heat produces vasoconstriction).",
      "explanation": "Continuous application of cold past 30 minutes triggers the body's protective homeostatic reflex: pre-capillary sphincters dilate to prevent tissue freezing and ischemia. Cryotherapy and heat applications must be limited to 20 minutes on, followed by at least 20 minutes off.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "5-10 minutes is when therapeutic vasoconstriction is actively developing."
        },
        {
          "option": "C",
          "reason": "Leaving ice for 60-90 minutes causes severe frostbite, nerve palsy, and necrosis."
        },
        {
          "option": "D",
          "reason": "Excessive duration leads to severe tissue destruction."
        }
      ],
      "priorityAlert": "Never apply hot or cold packs directly to bare skin without a protective towel or cloth wrap!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Thermal Therapeutics"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q45",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_fon_01",
    "topicTitle": "Fundamentals: Postural Drainage & Percussion Timing",
    "scenarioQuestion": "A patient with bronchiectasis has copious thick sputum. The physician orders postural drainage and chest percussion three times daily. When is the OPTIMAL time for the nurse to perform postural drainage to prevent nausea, vomiting, and aspiration?",
    "options": [
      {
        "id": "A",
        "text": "Immediately following a large meal"
      },
      {
        "id": "B",
        "text": "Before meals (pre-prandial) or at least 2 hours after meals"
      },
      {
        "id": "C",
        "text": "During meals while the patient is swallowing"
      },
      {
        "id": "D",
        "text": "Only in the middle of the night during deep sleep"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Postural drainage and chest physiotherapy should be performed BEFORE meals or at least 2 hours after eating to prevent nausea, vomiting, and catastrophic aspiration.",
      "explanation": "Inverted positions and vigorous coughing provoke gastroesophageal reflux. Coughing up copious sputum can also ruin appetite if done during meals. Early morning upon waking is ideal to clear pooled overnight secretions.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Performing immediately after meals induces acute vomiting and pulmonary aspiration."
        },
        {
          "option": "C",
          "reason": "Performing while eating poses an immediate choking hazard."
        },
        {
          "option": "D",
          "reason": "Patient participation in deep coughing is mandatory."
        }
      ],
      "priorityAlert": "Contraindications to Trendelenburg postural drainage: Increased ICP, acute pulmonary edema, hemodynamically unstable status, and rib fractures!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Chest Physiotherapy"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q46",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Magnesium Sulfate Toxicity Monitoring",
    "scenarioQuestion": "A 28-year-old primi-gravida at 34 weeks gestation with severe preeclampsia is receiving continuous intravenous Magnesium Sulfate (MgSO4). During the hourly nursing assessment, which of the following findings represents the EARLIEST clinical sign of Magnesium Sulfate toxicity?",
    "options": [
      {
        "id": "A",
        "text": "Respiratory rate decreases to 10 breaths per minute"
      },
      {
        "id": "B",
        "text": "Loss of Deep Tendon Reflexes (absent Patellar reflex)"
      },
      {
        "id": "C",
        "text": "Urine output drops to 15 mL in the last hour"
      },
      {
        "id": "D",
        "text": "Sudden onset of severe generalized tonic-clonic convulsions"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Loss of Deep Tendon Reflexes (Patellar/knee-jerk reflex) is the earliest clinical manifestation of Magnesium Sulfate toxicity (occurs at serum levels > 7 to 8 mEq/L).",
      "explanation": "Sequential manifestations of MgSO4 toxicity: 1) Loss of patellar reflex (> 7-8 mEq/L), 2) Respiratory depression < 12/min (> 10-12 mEq/L), 3) Cardiac arrest (> 12-15 mEq/L). The nurse must check patellar reflexes hourly before each dose.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Respiratory depression occurs at higher serum levels (> 10 mEq/L) following loss of reflexes."
        },
        {
          "option": "C",
          "reason": "Oliguria is a cause of decreased excretion leading to toxicity, but not the earliest neuro sign."
        },
        {
          "option": "D",
          "reason": "MgSO4 is an anticonvulsant; seizures indicate undertreatment (eclampsia), not toxicity."
        }
      ],
      "priorityAlert": "Antidote for MgSO4 toxicity: 10 mL of 10% Calcium Gluconate slow IV over 5-10 minutes."
    },
    "difficulty": "Moderate",
    "clinicalTag": "High-Alert Drug Monitoring"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q47",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Fetal Heart Rate Decelerations (VEAL CHOP)",
    "scenarioQuestion": "A laboring mother at 39 weeks gestation has continuous electronic fetal monitoring. The monitor displays recurrent fetal heart rate decelerations that begin AFTER the peak of the uterine contraction and return to baseline well AFTER the contraction has ended. What does this pattern represent, and what is the nurse's immediate action?",
    "options": [
      {
        "id": "A",
        "text": "Early decelerations due to head compression; prepare for vaginal delivery"
      },
      {
        "id": "B",
        "text": "Variable decelerations due to cord compression; continue routine monitoring"
      },
      {
        "id": "C",
        "text": "Late decelerations due to uteroplacental insufficiency; turn mother to left lateral position, administer oxygen via face mask, and stop Oxytocin"
      },
      {
        "id": "D",
        "text": "Accelerations indicating reassuring fetal wellbeing"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "Late decelerations indicate Uteroplacental Insufficiency (compromised fetal oxygenation). Immediate interventions: Turn patient to Left Lateral position, administer high-flow O2 (8-10 L/min), discontinue Oxytocin, and give IV fluid bolus.",
      "explanation": "Mnemonic VEAL CHOP: Variable = Cord compression; Early = Head compression (benign); Acceleration = Oxygenation (good); Late = Placental insufficiency (ominous). Late decelerations reflect myocardial hypoxia during contractions.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Early decelerations mirror contractions exactly and are benign."
        },
        {
          "option": "B",
          "reason": "Variable decelerations have an abrupt V-shape due to cord compression."
        },
        {
          "option": "D",
          "reason": "Decelerations represent heart rate drops, not accelerations."
        }
      ],
      "priorityAlert": "First nursing action for Late Decelerations: Turn to Left Lateral position immediately to relieve vena caval compression!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Electronic Fetal Monitoring"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q48",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Postpartum Hemorrhage Uterotonic Contraindications",
    "scenarioQuestion": "A primiparous woman delivers a 4.2 kg infant and develops severe postpartum hemorrhage (PPH) due to uterine atony. The patient has a medical history of bronchial asthma. Which of the following uterotonic medications is STRICTLY CONTRAINDICATED in this patient?",
    "options": [
      {
        "id": "A",
        "text": "Oxytocin (Pitocin)"
      },
      {
        "id": "B",
        "text": "Carboprost Tromethamine (15-methyl PGF2α / Hemabate)"
      },
      {
        "id": "C",
        "text": "Misoprostol (PGE1 / Cytotec)"
      },
      {
        "id": "D",
        "text": "Tranexamic Acid"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Carboprost (Prostaglandin F2α) causes intense bronchospasm and is STRICTLY CONTRAINDICATED in patients with asthma. Methylergometrine is contraindicated in Hypertension/Preeclampsia.",
      "explanation": "Carboprost causes potent constriction of bronchial smooth muscle, which can trigger refractory status asthmaticus. Methylergometrine is an ergot alkaloid that causes peripheral vasoconstriction and severe hypertensive stroke.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Oxytocin is the first-line safe uterotonic of choice in all patients."
        },
        {
          "option": "C",
          "reason": "Misoprostol (PGE1) can be given rectally/orally safely in asthmatics."
        },
        {
          "option": "D",
          "reason": "Tranexamic acid is an antifibrinolytic safe in asthma."
        }
      ],
      "priorityAlert": "NORCET Twin Trap: Carboprost = Contraindicated in ASTHMA! Methylergometrine (Methergine) = Contraindicated in HYPERTENSION!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Uterotonic Drug Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q49",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Active Management of Third Stage of Labor (AMTSL)",
    "scenarioQuestion": "According to WHO guidelines for the Active Management of the Third Stage of Labor (AMTSL) to prevent postpartum hemorrhage, what is the RECOMMENDED first-line uterotonic drug and timing of administration?",
    "options": [
      {
        "id": "A",
        "text": "Methylergometrine 0.2 mg IV after placenta is completely delivered"
      },
      {
        "id": "B",
        "text": "Oxytocin 10 IU Intramuscular (IM) administered within 1 minute of the delivery of the baby"
      },
      {
        "id": "C",
        "text": "Misoprostol 1000 mcg sublingually before baby is born"
      },
      {
        "id": "D",
        "text": "Carboprost 250 mcg deep IM after 30 minutes of expectant waiting"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "WHO AMTSL 3 Components: 1) Oxytocin 10 IU IM within 1 minute of baby's delivery (after ruling out a second twin), 2) Controlled Cord Traction (Brandt-Andrews technique), 3) Uterine massage.",
      "explanation": "Oxytocin is the gold standard because it causes rhythmic, physiological contractions of the myometrium, sealing bleeding spiral arteries without causing severe hypertension or systemic adverse effects.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Methylergometrine carries a high risk of hypertensive crisis and is not first-line."
        },
        {
          "option": "C",
          "reason": "Misoprostol is a second-line alternative when oxytocin is unavailable."
        },
        {
          "option": "D",
          "reason": "Waiting 30 minutes is expectant management, not active management."
        }
      ],
      "priorityAlert": "Always palpate the abdomen to exclude a second twin BEFORE administering Oxytocin for AMTSL!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Labor & Delivery Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q50",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Placenta Previa vs Abruptio Placentae Differential",
    "scenarioQuestion": "A 32-year-old multigravida at 32 weeks gestation arrives at the labor room reporting sudden vaginal bleeding. The bleeding is bright red and completely PAINLESS. The uterus is soft, relaxed, and non-tender on palpation. Which diagnostic procedure is STRICTLY CONTRAINDICATED?",
    "options": [
      {
        "id": "A",
        "text": "External electronic fetal monitoring"
      },
      {
        "id": "B",
        "text": "Digital vaginal examination (per vaginum examination)"
      },
      {
        "id": "C",
        "text": "Transabdominal Ultrasound examination"
      },
      {
        "id": "D",
        "text": "Venipuncture for maternal blood group and cross-matching"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In third-trimester painless vaginal bleeding (Placenta Previa), digital vaginal examination is STRICTLY CONTRAINDICATED because inserting a finger can tear the placenta, causing catastrophic maternal hemorrhage within minutes.",
      "explanation": "Placenta previa is characterized by painless, bright red bleeding with a soft uterus. Abruptio placentae is characterized by dark venous bleeding, severe continuous abdominal pain, and a board-like rigid uterus. Placental localization by transabdominal ultrasound must always precede any pelvic examination.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Fetal monitoring is essential to assess fetal status."
        },
        {
          "option": "C",
          "reason": "Transabdominal ultrasound is the gold standard diagnostic tool."
        },
        {
          "option": "D",
          "reason": "Blood cross-matching is mandatory in anticipation of transfusion."
        }
      ],
      "priorityAlert": "Double-setup rule: Never perform a digital vaginal examination in antepartum hemorrhage unless in an operating room ready for immediate cesarean section!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Antepartum Hemorrhage"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q51",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Gestational Diabetes Mellitus (GDM) 75g OGTT Diagnosis",
    "scenarioQuestion": "Under the National Guidelines for Diagnosis and Management of Gestational Diabetes Mellitus (GDM in India - DIPSI criteria), what is the diagnostic single-step testing method and plasma glucose cutoff value for GDM?",
    "options": [
      {
        "id": "A",
        "text": "Fasting blood glucose > 126 mg/dL only"
      },
      {
        "id": "B",
        "text": "75g oral glucose load irrespective of last meal timing, with a 2-hour venous plasma glucose ≥ 140 mg/dL"
      },
      {
        "id": "C",
        "text": "100g 3-hour oral glucose tolerance test with 4 abnormal values"
      },
      {
        "id": "D",
        "text": "Random urine dipstick showing 2+ glycosuria"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Under DIPSI (Diabetes in Pregnancy Study Group of India) guidelines endorsed by MoHFW, GDM is diagnosed if 2-hour venous plasma glucose is ≥ 140 mg/dL following a 75g oral glucose load (regardless of fasting state).",
      "explanation": "DIPSI offers a non-fasting single-step procedure tailored for pregnant women visiting antenatal clinics. A value between 120-139 mg/dL is categorized as Gestational Glucose Intolerance (GGI), while ≥ 140 mg/dL is diagnostic of GDM.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Fasting glucose alone misses up to 40% of GDM cases in pregnancy."
        },
        {
          "option": "C",
          "reason": "The 100g 3-hour test is a complex multi-step US standard (Carpenter-Coustan)."
        },
        {
          "option": "D",
          "reason": "Urine glycosuria is physiological in pregnancy due to lowered renal threshold."
        }
      ],
      "priorityAlert": "First-line drug of choice for GDM when medical nutrition therapy fails in India: Human Insulin!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Obstetric Medicine & Endocrinology"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q52",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Hyperemesis Gravidarum Wernicke Encephalopathy Risk",
    "scenarioQuestion": "A 24-year-old primigravida at 10 weeks gestation is admitted with severe intractable vomiting, weight loss of 8%, dehydration, and ketonuria. The nurse understands that BEFORE initiating intravenous 5% or 10% Dextrose infusions, which vitamin supplement MUST be administered to prevent acute Wernicke's Encephalopathy?",
    "options": [
      {
        "id": "A",
        "text": "Vitamin C (Ascorbic acid)"
      },
      {
        "id": "B",
        "text": "Vitamin B1 (Thiamine 100 mg IV)"
      },
      {
        "id": "C",
        "text": "Vitamin K (Phytonadione)"
      },
      {
        "id": "D",
        "text": "Vitamin E (Tocopherol)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In severe prolonged vomiting (Hyperemesis Gravidarum), maternal Thiamine (Vitamin B1) stores are depleted. Administering IV Dextrose without Thiamine precipitates acute, irreversible Wernicke's Encephalopathy.",
      "explanation": "Dextrose metabolism requires thiamine pyrophosphate as a co-factor in the pyruvate dehydrogenase complex. Infusing glucose boluses rapidly exhausts remaining thiamine, causing mamillary body necrosis, ataxia, nystagmus, and confusion. Thiamine 100 mg IV must precede glucose.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Vitamin C is water-soluble but not involved in pyruvate carbohydrate metabolism."
        },
        {
          "option": "C",
          "reason": "Vitamin K manages coagulopathies."
        },
        {
          "option": "D",
          "reason": "Vitamin E is an antioxidant."
        }
      ],
      "priorityAlert": "Clinical Axiom: In starving or hyperemesis patients, THIAMINE ALWAYS PRECEDES DEXTROSE!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Hyperemesis Gravidarum Complications"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q53",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Ectopic Pregnancy Rupture & Kehr's Sign",
    "scenarioQuestion": "A 26-year-old female presents to the emergency room with amenorrhea of 7 weeks, sharp unilateral lower abdominal pain, and sudden dizziness. On examination, the patient exhibits shoulder-tip pain when lying supine (Kehr's sign) and cullens ecchymosis. What is the physiological mechanism behind shoulder-tip pain?",
    "options": [
      {
        "id": "A",
        "text": "Cervical nerve root compression from poor hospital bed ergonomics"
      },
      {
        "id": "B",
        "text": "Hemoperitoneum irritating the phrenic nerve under the diaphragm, with referred pain to the C3–C5 dermatome"
      },
      {
        "id": "C",
        "text": "Referred pain from active gallbladder contraction"
      },
      {
        "id": "D",
        "text": "Acute rotator cuff tear caused by sudden fainting"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Ruptured ectopic pregnancy causes hemoperitoneum. Blood pooling in the subdiaphragmatic space irritates the Phrenic nerve (C3, C4, C5), referring sensory pain to the supraclavicular shoulder region (Kehr's sign).",
      "explanation": "The phrenic nerve shares sensory roots with the supraclavicular nerves (C3-C5). When blood touches the diaphragm in the supine position, impulses travel up the phrenic nerve and are perceived in the shoulder tip, signifying massive intra-abdominal hemorrhage.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Ergonomics do not cause acute unilateral shoulder pain with shock."
        },
        {
          "option": "C",
          "reason": "Biliary pain refers to the right scapula, not bilateral shoulder tips triggered by supine positioning."
        },
        {
          "option": "D",
          "reason": "Rotator cuff injury does not correlate with hemoperitoneum."
        }
      ],
      "priorityAlert": "Kehr's Sign in suspected ectopic pregnancy is a medical emergency indicating internal rupture and hemoperitoneum — prepare for stat laparoscopy/laparotomy!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Ectopic Pregnancy Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q54",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: True Labor Contractions Differentiation",
    "scenarioQuestion": "A pregnant woman at 38 weeks gestation arrives at the triage desk stating she is in labor. Which characteristic confirms to the triage nurse that the patient is experiencing TRUE labor rather than false (Braxton Hicks) labor?",
    "options": [
      {
        "id": "A",
        "text": "Contractions occur irregularly and diminish in intensity upon walking"
      },
      {
        "id": "B",
        "text": "Pain is felt primarily in the upper abdomen and groin without radiation"
      },
      {
        "id": "C",
        "text": "Contractions produce progressive cervical effacement and dilatation, with pain radiating from lower back to abdomen"
      },
      {
        "id": "D",
        "text": "Vaginal examination shows the cervix is firm, closed, and posterior"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "The single definitive distinguishing hallmark of TRUE labor is progressive cervical dilatation and effacement over time.",
      "explanation": "True labor contractions occur at regular intervals, increase in frequency, duration, and intensity, radiate from lumbosacral region around to anterior abdomen, and intensify with ambulation. False labor contractions are irregular, stop with walking or rest, and cause no cervical change.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Diminishing with walking is characteristic of false (Braxton Hicks) labor."
        },
        {
          "option": "B",
          "reason": "Pain localized only to abdomen without back radiation indicates false labor."
        },
        {
          "option": "D",
          "reason": "A firm, closed cervix indicates labor has not started."
        }
      ],
      "priorityAlert": "Cervical change over serial examinations is the ONLY reliable differentiator between true and false labor."
    },
    "difficulty": "Easy",
    "clinicalTag": "Labor Assessment"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q55",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: WHO Modified Partograph Alert & Action Lines",
    "scenarioQuestion": "A labor room nurse is plotting cervical dilatation on the WHO Modified Partograph. The Alert Line starts at 4 cm dilatation. What is the time spacing between the Alert Line and the Action Line on the partograph, and what does reaching the Action Line signify?",
    "options": [
      {
        "id": "A",
        "text": "2 hours apart; indicates normal rapid labor"
      },
      {
        "id": "B",
        "text": "4 hours apart; indicates prolonged labor requiring obstetrician intervention and active management"
      },
      {
        "id": "C",
        "text": "6 hours apart; indicates delivery has occurred"
      },
      {
        "id": "D",
        "text": "1 hour apart; indicates fetal distress"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "On the WHO Modified Partograph, the Alert Line and Action Line are plotted exactly 4 hours apart. Crossing the Action Line indicates prolonged labor requiring immediate obstetric intervention (e.g. oxytocin augmentation or cesarean delivery).",
      "explanation": "The Alert line represents an expected cervical dilatation rate of 1 cm/hour in the active phase. If progress slows and the plotting crosses to the right of the Alert line, warning is noted. Crossing the Action line 4 hours later mandates decision-making to prevent obstructed labor and uterine rupture.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "2 hours is too short for the standardized WHO action threshold."
        },
        {
          "option": "C",
          "reason": "6 hours delays critical intervention for obstructed labor."
        },
        {
          "option": "D",
          "reason": "1 hour does not allow adequate assessment of contraction adequacy."
        }
      ],
      "priorityAlert": "Active phase of labor on the modified partograph starts at 4 cm (or 5 cm in recent WHO labor care guide)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Partograph & Labor Monitoring"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q56",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Normal Postpartum Lochia Sequence",
    "scenarioQuestion": "A nurse is providing discharge instructions to a postpartum mother on day 4 after vaginal delivery. The nurse teaches her to monitor vaginal discharge. What is the expected sequence and timeline of normal lochial flow?",
    "options": [
      {
        "id": "A",
        "text": "Lochia alba (days 1–3) -> Lochia serosa (days 4–10) -> Lochia rubra (days 11–21)"
      },
      {
        "id": "B",
        "text": "Lochia rubra (days 1–3) -> Lochia serosa (days 4–10) -> Lochia alba (days 11–21+)"
      },
      {
        "id": "C",
        "text": "Lochia serosa (days 1–5) -> Lochia rubra (days 6–10) -> Lochia purulenta"
      },
      {
        "id": "D",
        "text": "Constant bright red flow with large clots for the first 30 days"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Normal Lochia sequence: 1) Lochia Rubra (dark red, days 1 to 3), 2) Lochia Serosa (pinkish-brown, days 4 to 10), 3) Lochia Alba (yellowish-white, days 11 up to 3-6 weeks).",
      "explanation": "Rubra contains blood, decidua, and trophoblastic debris. Serosa contains old blood, serum, and leukocytes. Alba contains white blood cells, mucus, and epithelial cells. Reversion from alba back to bright red rubra indicates delayed postpartum hemorrhage or subinvolution.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "The sequence is inverted."
        },
        {
          "option": "C",
          "reason": "Purulent lochia indicates endometritis/infection."
        },
        {
          "option": "D",
          "reason": "Persistent bright red bleeding with large clots is abnormal PPH."
        }
      ],
      "priorityAlert": "Foul-smelling lochia is the hallmark sign of puerperal sepsis / endometritis!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Postpartum Assessment"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q57",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Umbilical Cord Prolapse Immediate Priority Action",
    "scenarioQuestion": "Upon artificial rupture of membranes (ARM) in a laboring mother, the nurse observes a loop of umbilical cord protruding through the vaginal introitus. The fetal heart rate suddenly decelerates to 65 bpm. What is the nurse's IMMEDIATE lifesaving action?",
    "options": [
      {
        "id": "A",
        "text": "Attempt to gently push the exposed umbilical cord back into the uterine cavity"
      },
      {
        "id": "B",
        "text": "Insert a gloved hand into the vagina to manually push the fetal presenting part up off the cord, and place the mother in knee-chest position"
      },
      {
        "id": "C",
        "text": "Administer an immediate IV bolus of 20 units of Oxytocin"
      },
      {
        "id": "D",
        "text": "Instruct the patient to bear down forcefully to deliver the baby immediately"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In overt Cord Prolapse, the immediate priority is to relieve mechanical compression on the cord by manually lifting the fetal presenting part upward with a gloved hand and holding it there until an emergency cesarean section is performed.",
      "explanation": "The presenting part compresses the umbilical vessels against the pelvic brim, cutting off fetal circulation within minutes. The nurse must insert a sterile gloved hand, elevate the head, position the mother in Knee-Chest or Trendelenburg position, and never take the hand out until the obstetrician cuts the abdomen.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Never push a prolapsed cord back inside; vasospasm will terminate fetal perfusion."
        },
        {
          "option": "C",
          "reason": "Oxytocin causes contractions that crush the cord tighter."
        },
        {
          "option": "D",
          "reason": "Bearing down pushes the head tighter onto the cord, causing immediate fetal demise."
        }
      ],
      "priorityAlert": "Do NOT remove your gloved hand from the vagina! Maintain upward pressure on the fetal head until the baby is delivered in the operating room."
    },
    "difficulty": "Hard",
    "clinicalTag": "Obstetric Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q58",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Gestational Trophoblastic Disease (Hydatidiform Mole)",
    "scenarioQuestion": "A 22-year-old female presents with 10 weeks of amenorrhea, severe hyperemesis, dark brown \"prune-juice\" vaginal discharge, and a uterine size measuring 18 weeks (larger than dates). Serum beta-hCG is >200,000 mIU/mL. Ultrasonography reveals a characteristic \"snowstorm\" appearance with absent fetal parts. What is the primary post-evacuation nursing priority?",
    "options": [
      {
        "id": "A",
        "text": "Immediate repeat pregnancy within 3 months to normalize hormones"
      },
      {
        "id": "B",
        "text": "Strict serial monitoring of serum beta-hCG levels and avoidance of pregnancy for 6 to 12 months using reliable contraception"
      },
      {
        "id": "C",
        "text": "Encouraging high-dose oral estrogen replacement therapy"
      },
      {
        "id": "D",
        "text": "No follow-up is needed once suction curettage is complete"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Post-evacuation of Hydatidiform Mole requires serial serum beta-hCG surveillance (weekly until normal, then monthly for 6 months) and pregnancy prevention for 6-12 months to detect malignant Choriocarcinoma.",
      "explanation": "A molar pregnancy carries a 15-20% risk of malignant transformation into gestational trophoblastic neoplasia (choriocarcinoma). If the patient becomes pregnant, rising hCG from a new pregnancy would mask persistent or malignant trophoblastic growth.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Pregnancy must be strictly avoided for 6-12 months."
        },
        {
          "option": "C",
          "reason": "Estrogen therapy is inappropriate."
        },
        {
          "option": "D",
          "reason": "Failing to follow up can lead to undetected metastatic choriocarcinoma."
        }
      ],
      "priorityAlert": "Contraception of choice post-molar evacuation: Combined Oral Contraceptives or barrier methods. Avoid IUCDs due to uterine perforation risk!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Trophoblastic Diseases"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q59",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Obstetrics: Rh Isoimmunization & Anti-D Administration Timing",
    "scenarioQuestion": "An Rh-negative primiparous woman delivers an Rh-positive healthy baby. An indirect Coombs test during pregnancy was negative. To prevent Rh isoimmunization and hemolytic disease of the newborn in subsequent pregnancies, within what time frame must Rho(D) Immune Globulin (Anti-D) be administered?",
    "options": [
      {
        "id": "A",
        "text": "Within 72 hours of delivery"
      },
      {
        "id": "B",
        "text": "At 6 weeks postpartum"
      },
      {
        "id": "C",
        "text": "Only if the baby develops physiological jaundice"
      },
      {
        "id": "D",
        "text": "Within 14 days of delivery"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Rho(D) Immune Globulin (300 mcg / 1500 IU) must be administered intramuscularly to an unsensitized Rh-negative mother within 72 HOURS of delivering an Rh-positive infant.",
      "explanation": "Fetomaternal hemorrhage during placental separation introduces Rh-positive fetal erythrocytes into maternal circulation. If untreated, maternal B-lymphocytes produce anti-Rh antibodies that will destroy erythrocytes in future Rh-positive pregnancies (Erythroblastosis fetalis). Administering Anti-D destroys fetal cells before maternal sensitization occurs.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "At 6 weeks, maternal active sensitization has already occurred and Anti-D is useless."
        },
        {
          "option": "C",
          "reason": "Anti-D is given to prevent maternal antibody formation, not treat neonatal jaundice."
        },
        {
          "option": "D",
          "reason": "Delaying to 14 days drastically lowers efficacy, though can be given up to 28 days as a salvage."
        }
      ],
      "priorityAlert": "Standard dosing: 300 mcg at 28 weeks gestation routinely, and repeat 300 mcg within 72 hours postpartum if baby is Rh-positive!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Rh Incompatibility Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q60",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_obg_03",
    "topicTitle": "Contraception: Intrauterine Contraceptive Device (IUCD Copper-T 380A)",
    "scenarioQuestion": "A mother visits the family planning clinic for spacing contraception. The public health nurse recommends Copper-T 380A. What is the approved effective lifespan (duration of contraceptive protection) of the Copper-T 380A IUCD?",
    "options": [
      {
        "id": "A",
        "text": "3 years"
      },
      {
        "id": "B",
        "text": "5 years"
      },
      {
        "id": "C",
        "text": "10 years"
      },
      {
        "id": "D",
        "text": "12 months"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "The Copper-T 380A IUCD has an approved effective contraceptive duration of 10 YEARS (compared to Copper-T 375 which is effective for 5 years).",
      "explanation": "Copper-T 380A releases copper ions into the uterine cavity, creating a sterile local inflammatory reaction that is toxic to spermatozoa and alters endometrial receptivity. It is an extremely cost-effective, long-acting reversible contraceptive (LARC).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "3 years is the lifespan of progestin implants like Implanon."
        },
        {
          "option": "B",
          "reason": "5 years is the duration for Copper-T 375 and Levonorgestrel-IUS (Mirena)."
        },
        {
          "option": "D",
          "reason": "12 months applies to progesterone-releasing IUCD (Progestasert)."
        }
      ],
      "priorityAlert": "NORCET Memory Hook: Cu-T 380A = 10 Years! Cu-T 375 = 5 Years!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Family Planning Devices"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q61",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Neonatal Resuscitation Program (NRP) Heart Rate Cutoff",
    "scenarioQuestion": "A full-term newborn is delivered limp, cyanotic, and apneic. After 30 seconds of initial steps (drying, warming, clearing airway, and tactile stimulation), the nurse auscultates the apical pulse and finds the heart rate is 78 bpm. What is the immediate NEXT action required according to NRP guidelines?",
    "options": [
      {
        "id": "A",
        "text": "Initiate immediate chest compressions at a 3:1 ratio with ventilations"
      },
      {
        "id": "B",
        "text": "Initiate Positive Pressure Ventilation (PPV) with a bag-valve-mask device at 40 to 60 breaths/min"
      },
      {
        "id": "C",
        "text": "Administer intravenous Epinephrine 0.02 mg/kg through the umbilical vein catheter"
      },
      {
        "id": "D",
        "text": "Provide free-flow blow-by oxygen via face mask at 5 L/min"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In neonatal resuscitation, if Heart Rate is < 100 bpm after 30 seconds of initial drying and stimulation, immediate Positive Pressure Ventilation (PPV) with room air (21% O2 in term infants) is mandatory.",
      "explanation": "Chest compressions are indicated ONLY if heart rate remains < 60 bpm despite 30 seconds of effective PPV with chest movement. Epinephrine is reserved for persistent HR < 60 bpm after coordinated CPR.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Chest compressions are not indicated unless HR is < 60 bpm despite effective PPV."
        },
        {
          "option": "C",
          "reason": "Epinephrine is a late intervention for refractory bradycardia < 60 bpm."
        },
        {
          "option": "D",
          "reason": "Free-flow oxygen is ineffective in an apneic neonate with HR < 100 bpm."
        }
      ],
      "priorityAlert": "NRP Algorithm Rule: HR < 100 = Start PPV! HR < 60 after 30s of effective PPV = Start Chest Compressions!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Neonatal Resuscitation Program"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q62",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
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
      "explanation": "Acrocyanosis (Score 1 for appearance) is completely normal in the first 24 hours of life. All other four parameters earned maximum scores of 2, yielding a total score of 9, which represents excellent neonatal adaptation.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "A score of 10 requires completely pink body and extremities."
        },
        {
          "option": "C",
          "reason": "8 erroneously subtracts two points."
        },
        {
          "option": "D",
          "reason": "7 indicates mild neonatal depression."
        }
      ],
      "priorityAlert": "An APGAR score of 7 to 10 indicates normal adaptation. A score of 4 to 6 requires tactile stimulation and supplemental O2; 0 to 3 requires immediate CPR!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Neonatal Resuscitation & Scoring"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q63",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Acute Epiglottitis Airway Contraindication",
    "scenarioQuestion": "A 4-year-old unimmunized child is brought to the pediatric emergency department with high fever, sore throat, severe inspiratory stridor, and difficulty swallowing. The child is sitting upright, leaning forward with the chin thrust outward and mouth open, drooling saliva (tripod position). Which of the following is STRICTLY CONTRAINDICATED?",
    "options": [
      {
        "id": "A",
        "text": "Administering humidified oxygen in a quiet environment"
      },
      {
        "id": "B",
        "text": "Direct inspection of the oral cavity and oropharynx with a tongue depressor"
      },
      {
        "id": "C",
        "text": "Having an emergency tracheostomy / endotracheal intubation tray ready"
      },
      {
        "id": "D",
        "text": "Allowing the parent to hold and comfort the child in the position of comfort"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "In suspected Acute Epiglottitis (Haemophilus influenzae type b), touching or examining the throat with a tongue blade is STRICTLY CONTRAINDICATED because any stimulation triggers fatal reflex laryngospasm and complete airway closure.",
      "explanation": "The epiglottis is swollen, edematous, and cherry-red. Agitation or instrumentation easily causes sudden complete obstruction. The child should be kept calm with the parent, and transported directly to the operating room for controlled intubation under anesthesia.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Humidified oxygen is helpful if tolerated without agitation."
        },
        {
          "option": "C",
          "reason": "Emergency airway equipment must be immediately at hand."
        },
        {
          "option": "D",
          "reason": "Parental comfort prevents crying and decreases airway turbulence."
        }
      ],
      "priorityAlert": "Never put anything into the mouth of a child with suspected epiglottitis! No tongue depressor, no throat swab, no oral thermometer!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric Airway Emergency"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q64",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Hypertrophic Pyloric Stenosis (HPS) Acid-Base Imbalance",
    "scenarioQuestion": "A 4-week-old first-born male infant presents with non-bilious projectile vomiting immediately after every feed. On palpation of the abdomen, the pediatric nurse identifies a firm, mobile, olive-shaped mass in the right epigastrium. Which metabolic acid-base disturbance is classically associated with this condition?",
    "options": [
      {
        "id": "A",
        "text": "Metabolic Acidosis with Hyperkalemia"
      },
      {
        "id": "B",
        "text": "Hypochloremic, Hypokalemic Metabolic Alkalosis"
      },
      {
        "id": "C",
        "text": "Respiratory Acidosis with Hypocalcemia"
      },
      {
        "id": "D",
        "text": "Normal Anion Gap Metabolic Acidosis"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Hypertrophic Pyloric Stenosis causes loss of gastric hydrochloric acid (HCl) through persistent non-bilious vomiting, resulting in Hypochloremic, Hypokalemic Metabolic Alkalosis.",
      "explanation": "Vomiting pure gastric juice depletes hydrogen (H+) and chloride (Cl-) ions. The kidneys attempt to conserve hydrogen by exchanging potassium for sodium in the distal tubules, precipitating severe hypokalemia. Surgery (Ramstedt pyloromyotomy) is delayed until electrolytes and acid-base status are corrected.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Loss of gastric acid causes alkalosis, not acidosis."
        },
        {
          "option": "C",
          "reason": "Respiratory parameters are not primarily affected."
        },
        {
          "option": "D",
          "reason": "Acidosis occurs in diarrhea, whereas vomiting causes alkalosis."
        }
      ],
      "priorityAlert": "Electrolyte correction with IV 0.45% Saline + 5% Dextrose + KCl is mandatory BEFORE surgery — never take an alkalotic child to the OR!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Pediatric Surgical Conditions"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q65",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Intussusception Clinical Presentation & Dance's Sign",
    "scenarioQuestion": "An 8-month-old infant is brought to the casualty with severe episodic colicky abdominal pain during which he pulls his legs up to his abdomen and screams inconsolably, followed by periods of lethargy. His mother reports his diaper contains dark red stool mixed with mucus resembling \"red currant jelly\". What is the initial therapeutic and diagnostic intervention of choice?",
    "options": [
      {
        "id": "A",
        "text": "Immediate exploratory laparotomy with bowel resection"
      },
      {
        "id": "B",
        "text": "Pneumatic (air) or Hydrostatic (barium/saline) contrast enema reduction under fluoroscopy or ultrasound"
      },
      {
        "id": "C",
        "text": "Oral administration of mineral oil laxatives"
      },
      {
        "id": "D",
        "text": "Upper gastrointestinal endoscopy"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Pneumatic (air) or hydrostatic contrast enema reduction is both the diagnostic gold standard and the first-line non-surgical treatment for non-perforated Intussusception (success rate >80-90%).",
      "explanation": "Intussusception is the telescoping of a proximal bowel segment into an adjacent distal segment (usually ileocolic). Currant jelly stools (blood and sloughed mucus) and Dance's sign (empty right lower quadrant) are classic. Controlled air pressure gently pushes the invaginated bowel back.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Surgery is reserved for failed enema reduction or signs of bowel perforation/peritonitis."
        },
        {
          "option": "C",
          "reason": "Oral laxatives can cause bowel perforation and are strictly contraindicated."
        },
        {
          "option": "D",
          "reason": "Upper GI endoscopy cannot reach the ileocecal junction."
        }
      ],
      "priorityAlert": "If the child passes a normal brown formed stool before enema reduction, notify the surgeon immediately — it signifies spontaneous reduction!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Pediatric GI Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q66",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Neonatology: Kangaroo Mother Care (KMC) Core Components",
    "scenarioQuestion": "A preterm infant weighing 1,600 grams is admitted to the Special Newborn Care Unit (SNCU). The staff nurse assists the mother in initiating Kangaroo Mother Care (KMC). In which position should the infant be placed on the mother's chest, and what are the two essential components of KMC?",
    "options": [
      {
        "id": "A",
        "text": "Supine on the abdomen; components are formula feeding and radiant heat"
      },
      {
        "id": "B",
        "text": "Prone, upright, in a \"frog-like\" position in direct skin-to-skin contact between maternal breasts; components are continuous Skin-to-Skin Contact and Exclusive Breastfeeding"
      },
      {
        "id": "C",
        "text": "Lateral position wrapped in 3 layers of swaddling blankets"
      },
      {
        "id": "D",
        "text": "Dorsal recumbent position with clothing between mother and baby"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "KMC has two essential pillars: 1) Continuous Skin-to-Skin Contact (infant upright in frog position on maternal bare chest), and 2) Exclusive Breastfeeding.",
      "explanation": "KMC prevents hypothermia (the mother's chest acts as a thermal biological incubator), reduces nosocomial sepsis, promotes growth and bonding, and reduces mortality in Low Birth Weight (<2500g) infants. The head is turned to one side in slightly extended position to maintain an open airway.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Formula feeding is contrary to KMC philosophy of exclusive breastfeeding."
        },
        {
          "option": "C",
          "reason": "Swaddling prevents direct skin-to-skin thermal conduction."
        },
        {
          "option": "D",
          "reason": "Clothing blocks direct skin contact."
        }
      ],
      "priorityAlert": "Minimum duration of each KMC session should be at least 1 HOUR to avoid disturbing the infant's sleep cycles!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Neonatal Care & KMC"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q67",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Neonatology: Phototherapy Nursing Safeguards for Neonatal Jaundice",
    "scenarioQuestion": "A 3-day-old neonate with pathological hyperbilirubinemia (total serum bilirubin 17.8 mg/dL) is placed under intense blue-light phototherapy (wavelength 460–490 nm). Which nursing action is ESSENTIAL to prevent physiological complications during phototherapy?",
    "options": [
      {
        "id": "A",
        "text": "Apply thick baby oil or moisturizing lotion over the infant's skin to prevent dryness"
      },
      {
        "id": "B",
        "text": "Cover the eyes with opaque eye shields and cover the genitalia, while turning the infant every 2 hours"
      },
      {
        "id": "C",
        "text": "Limit breastfeeding fluid intake to 50% to prevent diarrhea"
      },
      {
        "id": "D",
        "text": "Keep the infant dressed in a full cotton onesie to prevent hypothermia"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Opaque eye patches must protect the retinas from photochemical damage, and the diaper/genital shield protects gonads. Turning every 2 hours maximizes body surface area exposure.",
      "explanation": "Phototherapy converts unconjugated bilirubin into water-soluble structural photoisomers (lumirubin) excreted in bile and urine. Never apply oil or ointment (causes severe cutaneous burns). Hydration should be increased by 10-20% to replace insensible water loss.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Oils and lotions cause severe skin frying and burns under phototherapy lights."
        },
        {
          "option": "C",
          "reason": "Fluid intake must be INCREASED by 10-20%, not restricted."
        },
        {
          "option": "D",
          "reason": "The infant must be naked (except eye and genital cover) to expose maximal skin area."
        }
      ],
      "priorityAlert": "Always turn off phototherapy lights before drawing blood for serum bilirubin to prevent photo-oxidation in the blood vial!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Phototherapy Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q68",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Tetralogy of Fallot (TOF) Hypercyanotic \"Tet\" Spell Action",
    "scenarioQuestion": "A 14-month-old child with uncorrected Tetralogy of Fallot (TOF) begins crying vigorously during an IV cannulation attempt. The child suddenly develops deep cyanosis, tachypnea, and loss of consciousness (hypercyanotic \"tet\" spell). What is the nurse's IMMEDIATE priority action?",
    "options": [
      {
        "id": "A",
        "text": "Place the child in Knee-Chest (or squatting) position immediately and administer high-flow oxygen"
      },
      {
        "id": "B",
        "text": "Administer an immediate IV bolus of 50% Dextrose"
      },
      {
        "id": "C",
        "text": "Place the child supine and perform vigorous chest compressions"
      },
      {
        "id": "D",
        "text": "Administer oral Digoxin and beta-blocker syrup"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "The knee-chest position kinks the femoral arteries, abruptly increasing Systemic Vascular Resistance (SVR). Increased SVR reverses the right-to-left shunt across the VSD, forcing deoxygenated blood through the stenotic pulmonary valve into the lungs.",
      "explanation": "During a tet spell, infundibular pulmonary spasm increases right-to-left shunting of venous blood into the systemic circulation. Knee-chest positioning increases left ventricular afterload, reversing shunting and oxygenating the brain. Morphine sulfate and IV fluids follow.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Hypoglycemia is not the cause of tet spells."
        },
        {
          "option": "C",
          "reason": "Chest compressions are indicated only in cardiac arrest."
        },
        {
          "option": "D",
          "reason": "Oral medications cannot be administered during acute hypoxemic loss of consciousness."
        }
      ],
      "priorityAlert": "Tetralogy of Fallot 4 components: 1) Ventricular Septal Defect (VSD), 2) Pulmonary Stenosis, 3) Overriding Aorta, 4) Right Ventricular Hypertrophy (Mnemonic: PROVe)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Congenital Heart Defects"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q69",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Celiac Disease Dietary Management (BROW Mnemonic)",
    "scenarioQuestion": "A 2-year-old child is diagnosed with Celiac Disease (Gluten-sensitive enteropathy) after presenting with chronic diarrhea, abdominal distension, muscle wasting, and failure to thrive. Which grains must the nurse instruct the parents to STRICTLY EXCLUDE from the child's diet for life?",
    "options": [
      {
        "id": "A",
        "text": "Rice, Corn, Soya, and Tapioca"
      },
      {
        "id": "B",
        "text": "Barley, Rye, Oats, and Wheat (BROW)"
      },
      {
        "id": "C",
        "text": "Milk, Eggs, Peanuts, and Shellfish"
      },
      {
        "id": "D",
        "text": "Apples, Bananas, Potatoes, and Carrots"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Celiac disease management requires lifelong exclusion of GLUTEN-containing grains: Barley, Rye, Oats, and Wheat (Mnemonic: BROW). Safe alternatives include Rice, Corn, and Potato.",
      "explanation": "Gluten (gliadin fraction) triggers an autoimmune T-cell mediated destruction of small intestinal microvilli, causing pan-malabsorption. Adherence to a strict gluten-free diet restores mucosal architecture within months.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Rice and corn are completely gluten-free and form the foundation of a celiac diet."
        },
        {
          "option": "C",
          "reason": "These are common food allergens, but not gluten-related."
        },
        {
          "option": "D",
          "reason": "Fruits and vegetables are naturally gluten-free."
        }
      ],
      "priorityAlert": "Mnemonic for Celiac forbidden foods: BROW (Barley, Rye, Oats, Wheat)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Pediatric Nutrition & Gastro"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q70",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: Hirschsprung's Disease (Congenital Aganglionic Megacolon)",
    "scenarioQuestion": "A full-term newborn fails to pass meconium within the first 48 hours of life and develops abdominal distension and bile-stained vomiting. Digital rectal examination reveals a tight anal sphincter with an explosive discharge of foul-smelling gas and liquid stool upon finger withdrawal. What condition is this presentation classic for?",
    "options": [
      {
        "id": "A",
        "text": "Cystic fibrosis meconium ileus"
      },
      {
        "id": "B",
        "text": "Hirschsprung's Disease (Congenital Aganglionic Megacolon)"
      },
      {
        "id": "C",
        "text": "Hypertrophic pyloric stenosis"
      },
      {
        "id": "D",
        "text": "Duodenal atresia with Down syndrome"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Failure to pass meconium in the first 24 to 48 hours of life, followed by explosive stool expulsion after rectal examination (blast sign), is the hallmark of Hirschsprung's Disease.",
      "explanation": "Hirschsprung's disease is caused by the congenital absence of parasympathetic ganglion cells (Auerbach's and Meissner's plexuses) in the distal colon. The aganglionic segment remains in a state of permanent tonic contraction, causing functional intestinal obstruction.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Meconium ileus involves viscid inspissated meconium without explosive blast sign."
        },
        {
          "option": "C",
          "reason": "Pyloric stenosis presents at 3-6 weeks with non-bilious projectile vomiting."
        },
        {
          "option": "D",
          "reason": "Duodenal atresia presents with double-bubble sign on X-ray."
        }
      ],
      "priorityAlert": "Stool characteristic in older children with Hirschsprung's: Ribbon-like, pellet-shaped, foul-smelling stools!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Congenital Anomalies"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q71",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Infectious: Measles (Rubeola) Koplik's Spots Diagnostic Sign",
    "scenarioQuestion": "A 3-year-old child presents with high fever, cough, coryza, and conjunctivitis (the \"3 Cs\"). On inspecting the oral cavity, the nurse observes tiny, irregular, white, sand-like lesions with a red halo on the buccal mucosa opposite the second molars. What are these pathognomonic lesions, and what disease do they confirm?",
    "options": [
      {
        "id": "A",
        "text": "Aphthous ulcers in Coxsackievirus infection"
      },
      {
        "id": "B",
        "text": "Koplik's spots confirming Measles (Rubeola)"
      },
      {
        "id": "C",
        "text": "Strawberry tongue in Scarlet Fever"
      },
      {
        "id": "D",
        "text": "Oral thrush caused by Candida albicans"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Koplik's spots are pathognomonic for Measles (Rubeola). They appear on the buccal mucosa opposite the lower molars 24 to 48 hours BEFORE the characteristic maculopapular rash breaks out.",
      "explanation": "Measles is characterized by the 3 Cs (Cough, Coryza, Conjunctivitis) + Koplik spots. The rash starts at the hairline and spreads cephalocaudally. WHO mandates Vitamin A administration (100,000 IU for <1 yr, 200,000 IU for >1 yr) to prevent blindness and mortality.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Aphthous ulcers are painful non-specific mucosal erosions."
        },
        {
          "option": "C",
          "reason": "Strawberry tongue is seen in Scarlet Fever and Kawasaki disease."
        },
        {
          "option": "D",
          "reason": "Thrush presents as white curdy plaques that bleed when scraped."
        }
      ],
      "priorityAlert": "Vitamin A therapy is mandatory in all measles cases to prevent xerophthalmia and post-measles encephalitis!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Exanthematous Fevers"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q72",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_peds_04",
    "topicTitle": "Pediatrics: IMNCI Dehydration Classification & Treatment Plan",
    "scenarioQuestion": "According to Integrated Management of Neonatal and Childhood Illness (IMNCI) guidelines, a 15-month-old child with diarrhea exhibits lethargy, sunken eyes, inability to drink, and a skin pinch on the abdomen that goes back very slowly (>2 seconds). How should this child be classified and managed?",
    "options": [
      {
        "id": "A",
        "text": "No Dehydration; manage with Home Fluid Plan A"
      },
      {
        "id": "B",
        "text": "Some Dehydration; administer oral ORS solution under Plan B"
      },
      {
        "id": "C",
        "text": "Severe Dehydration; immediately start IV Ringer's Lactate (Plan C: 100 mL/kg)"
      },
      {
        "id": "D",
        "text": "Dysentery; give oral Cotrimoxazole and send home"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "Two of the following signs: 1) Lethargy/unconsciousness, 2) Sunken eyes, 3) Unable to drink/drinks poorly, 4) Skin pinch goes back very slowly (>2s) = SEVERE DEHYDRATION (Plan C: 100 mL/kg IV Ringer's Lactate stat).",
      "explanation": "For infants 12 months to 5 years under Plan C: Give 100 mL/kg Ringer's Lactate (30 mL/kg in first 30 minutes, followed by 70 mL/kg over 2.5 hours). Re-evaluate hourly.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "No dehydration requires home fluids and continued feeding."
        },
        {
          "option": "B",
          "reason": "Plan B (ORS) is for Some Dehydration (restless/irritable, drinks eagerly, skin pinch <2s)."
        },
        {
          "option": "D",
          "reason": "Severe dehydration is an emergency; oral antibiotics alone lead to hypovolemic death."
        }
      ],
      "priorityAlert": "Plan C Fluid of Choice: Ringer's Lactate (or Normal Saline if RL unavailable). Never give 5% Dextrose alone for shock!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "IMNCI & Diarrhea Protocol"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q73",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Heparin Toxicity & Antidote Protocol",
    "scenarioQuestion": "A patient receiving continuous IV Unfractionated Heparin infusion for Pulmonary Embolism develops sudden hematuria and epistaxis. Laboratory results reveal an aPTT of >150 seconds. The physician orders immediate reversal. Which specific antidote should the nurse prepare?",
    "options": [
      {
        "id": "A",
        "text": "Vitamin K (Phytonadione)"
      },
      {
        "id": "B",
        "text": "Protamine Sulfate"
      },
      {
        "id": "C",
        "text": "Calcium Gluconate 10%"
      },
      {
        "id": "D",
        "text": "Flumazenil"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Protamine Sulfate is the specific chemical antagonist for Unfractionated Heparin (1 mg of protamine neutralizes approx. 100 USP units of heparin).",
      "explanation": "Protamine is a basic polycationic protein that forms an inactive salt complex with acidic heparin. Administer by slow IV push over 10 minutes to prevent anaphylactoid collapse.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Vitamin K is the antidote for Warfarin (Coumadin)."
        },
        {
          "option": "C",
          "reason": "Calcium Gluconate is for hyperkalemia and magnesium toxicity."
        },
        {
          "option": "D",
          "reason": "Flumazenil reverses benzodiazepine overdose."
        }
      ],
      "priorityAlert": "Never push Protamine rapidly: rapid bolus triggers severe hypotension, bradycardia, and acute pulmonary edema!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Critical Antidotes"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q74",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Warfarin Antidote & PT/INR Monitoring",
    "scenarioQuestion": "A patient taking Warfarin (Coumadin) for atrial fibrillation has an INR of 7.2 with microscopic hematuria. What is the specific pharmacological reversal agent for Warfarin, and which coagulation parameter evaluates its therapeutic efficacy?",
    "options": [
      {
        "id": "A",
        "text": "Protamine Sulfate; monitored by aPTT"
      },
      {
        "id": "B",
        "text": "Vitamin K1 (Phytonadione); monitored by Prothrombin Time / International Normalized Ratio (PT/INR)"
      },
      {
        "id": "C",
        "text": "Naloxone; monitored by bleeding time"
      },
      {
        "id": "D",
        "text": "Deferoxamine; monitored by serum ferritin"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Vitamin K1 (Phytonadione) is the specific reversal agent for Warfarin toxicity. Therapeutic Warfarin therapy is monitored using Prothrombin Time / INR (target INR: 2.0 to 3.0 for AF/DVT, 2.5 to 3.5 for mechanical prosthetic valves).",
      "explanation": "Warfarin inhibits Vitamin K Epoxide Reductase, preventing gamma-carboxylation of clotting factors II, VII, IX, and X. Vitamin K bypasses this block. For major bleeding, Prothrombin Complex Concentrate (PCC) or Fresh Frozen Plasma (FFP) is co-administered.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Protamine sulfate reverses Heparin, monitored by aPTT."
        },
        {
          "option": "C",
          "reason": "Naloxone reverses opioids."
        },
        {
          "option": "D",
          "reason": "Deferoxamine chelates iron."
        }
      ],
      "priorityAlert": "Patient Education: Maintain consistent dietary intake of green leafy vegetables (rich in Vitamin K) — sudden increase drops INR!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Anticoagulation Management"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q75",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Digoxin Toxicity & Hypokalemia Link",
    "scenarioQuestion": "A 72-year-old patient with congestive heart failure receiving Digoxin 0.25 mg daily and Furosemide (Lasix) 40 mg daily complains of nausea, anorexia, and seeing yellowish-green halos around lights. Telemetry reveals a junctional escape rhythm with HR 44 bpm. Which electrolyte disturbance dramatically potentiates Digoxin toxicity?",
    "options": [
      {
        "id": "A",
        "text": "Hyperkalemia"
      },
      {
        "id": "B",
        "text": "Hypokalemia"
      },
      {
        "id": "C",
        "text": "Hypercalcemia"
      },
      {
        "id": "D",
        "text": "Hyponatremia"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Hypokalemia (serum K+ < 3.5 mEq/L) potentiates Digoxin toxicity because potassium competes with digoxin for binding on the myocardial Na+/K+ ATPase pump. In hypokalemia, more digoxin binds, causing severe toxicity even at normal therapeutic serum levels (0.5–2.0 ng/mL).",
      "explanation": "Loop diuretics (Furosemide) waste potassium in urine. Hallmark symptoms of digoxin toxicity are visual disturbances (xanthopsia/yellow-green halos), GI distress, and bradyarrhythmias. The specific antidote is Digoxin-specific Fab antibodies (DigiFab).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Hyperkalemia decreases digoxin binding, though severe toxicity causes hyperkalemia due to pump blockade."
        },
        {
          "option": "C",
          "reason": "Hypercalcemia potentiates toxicity, but hypokalemia is the most common clinical precipitant due to diuretics."
        },
        {
          "option": "D",
          "reason": "Sodium shifts do not modulate ATPase affinity."
        }
      ],
      "priorityAlert": "Nursing Rule: Always check apical pulse for 1 FULL MINUTE before administering Digoxin — withhold if HR < 60 bpm in adults!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Cardiac Glycoside Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q76",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Vancomycin Infusion Rate & Red Man Syndrome",
    "scenarioQuestion": "A patient is prescribed IV Vancomycin 1 gram in 250 mL Normal Saline for MRSA pneumonia. Thirty minutes into a rapid 30-minute infusion, the patient develops profound flushing, erythema of the face, neck, and upper chest, along with pruritus and hypotension. What is this reaction, and how is it prevented?",
    "options": [
      {
        "id": "A",
        "text": "Severe IgE-mediated anaphylaxis; discontinue drug permanently"
      },
      {
        "id": "B",
        "text": "Red Man Syndrome due to rapid infusion-related direct histamine release; prevent by infusing slowly over at least 60 minutes"
      },
      {
        "id": "C",
        "text": "Stevens-Johnson Syndrome; administer high-dose steroids"
      },
      {
        "id": "D",
        "text": "Malignant hyperthermia; administer Dantrolene"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Red Man Syndrome is an adverse rate-related reaction caused by non-immune direct degranulation of mast cells releasing histamine. It is NOT a true allergy. It is prevented by diluting and infusing slowly over at least 60 minutes (minimum 30 min per 500 mg).",
      "explanation": "Immediate action: Stop or slow the infusion rate to run over 90-120 minutes, administer an antihistamine (Diphenhydramine), and monitor blood pressure. Once symptoms resolve, the infusion can be resumed at the slower rate.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "It is a non-IgE pseudo-allergic reaction; drug does not need permanent discontinuation."
        },
        {
          "option": "C",
          "reason": "Stevens-Johnson presents with blistering skin detachment, not transient flushing."
        },
        {
          "option": "D",
          "reason": "Malignant hyperthermia is triggered by volatile anesthetics and succinylcholine."
        }
      ],
      "priorityAlert": "Vancomycin Rule: Always infuse at a rate NOT exceeding 10 mg/min (minimum 60 minutes for 1 gram; 120 minutes for 2 grams)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Antibiotic Administration Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q77",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Enoxaparin (LMWH) Subcutaneous Administration",
    "scenarioQuestion": "A nurse is preparing to administer Enoxaparin (Lovenox) 40 mg via prefilled syringe to a post-surgical patient for DVT prophylaxis. Which technique correctly demonstrates evidence-based medication administration?",
    "options": [
      {
        "id": "A",
        "text": "Expel the pre-filled nitrogen air bubble from the syringe before injection"
      },
      {
        "id": "B",
        "text": "Inject into the \"love handles\" (anterolateral or posterolateral abdominal wall) at 90 degrees, leaving the air bubble intact, and avoid massaging the site"
      },
      {
        "id": "C",
        "text": "Inject into the deltoid muscle at a 45-degree angle and aspirate for blood"
      },
      {
        "id": "D",
        "text": "Rub the injection site vigorously with an alcohol swab for 30 seconds after injection"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Enoxaparin (LMWH) must be injected deep subcutaneous at a 90° angle into the anterolateral or posterolateral abdominal wall (\"love handles\"). Do NOT expel the prefilled air bubble (it seals the medication track). Do NOT aspirate. Do NOT massage (prevents bruising/hematoma).",
      "explanation": "The nitrogen air bubble in manufacturer-filled syringes should remain at the plunger end so that it flushes the needle bore and prevents leakage into intradermal tissue, minimizing skin bruising and hematoma formation.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Expelling the air bubble leads to drug loss and increased subcutaneous bruising."
        },
        {
          "option": "C",
          "reason": "LMWH must never be given intramuscularly (risk of massive muscle hematoma)."
        },
        {
          "option": "D",
          "reason": "Massaging causes severe tissue trauma and extensive hematoma."
        }
      ],
      "priorityAlert": "Leave the air bubble in the Enoxaparin syringe! It clears the needle and seals the drug track in the subcutaneous space."
    },
    "difficulty": "Easy",
    "clinicalTag": "Anticoagulant Technique"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q78",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Metformin 48-Hour Radiocontrast Lactic Acidosis Rule",
    "scenarioQuestion": "A diabetic patient taking Metformin (Glucophage) 1000 mg twice daily is scheduled for a contrast-enhanced CT scan of the abdomen. What instruction must the nurse give regarding Metformin administration?",
    "options": [
      {
        "id": "A",
        "text": "Take a double dose of Metformin immediately before the scan to prevent hyperglycemia"
      },
      {
        "id": "B",
        "text": "Discontinue Metformin on the morning of the procedure and withhold for 48 hours post-procedure until renal function (serum creatinine) is verified normal"
      },
      {
        "id": "C",
        "text": "Metformin can be continued without any interruption"
      },
      {
        "id": "D",
        "text": "Switch to subcutaneous insulin for only 2 hours after the scan"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Metformin must be withheld on the day of IV radiocontrast administration and for 48 HOURS afterward until serum creatinine is reassessed as normal, preventing fatal Metformin-Associated Lactic Acidosis (MALA).",
      "explanation": "Iodinated radiocontrast media can induce acute contrast-induced nephropathy (CIN). Because Metformin is eliminated exclusively by the kidneys, acute renal failure causes toxic accumulation of metformin, inhibiting hepatic gluconeogenesis and producing life-threatening lactic acidosis (50% mortality).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Doubling the dose vastly increases lactic acidosis risk."
        },
        {
          "option": "C",
          "reason": "Continuing metformin during contrast exposure is a major medication safety violation."
        },
        {
          "option": "D",
          "reason": "2 hours is insufficient; renal recovery takes 48 hours."
        }
      ],
      "priorityAlert": "Metformin + Radiocontrast = Risk of Fatal Lactic Acidosis. Hold for 48 hours post-contrast until creatinine is normal!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Diagnostic Pharmacology Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q79",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Paracetamol (Acetaminophen) Toxicity & N-Acetylcysteine",
    "scenarioQuestion": "A 20-year-old female is brought to the emergency department after ingesting 25 tablets of Paracetamol (500 mg each) 4 hours ago in a suicide attempt. Which specific antidote must the nurse prepare to prevent irreversible acute fulminant hepatic necrosis?",
    "options": [
      {
        "id": "A",
        "text": "N-Acetylcysteine (NAC / Mucomyst)"
      },
      {
        "id": "B",
        "text": "Deferoxamine"
      },
      {
        "id": "C",
        "text": "Atropine Sulfate"
      },
      {
        "id": "D",
        "text": "Dimercaprol (BAL)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "N-Acetylcysteine (NAC) is the specific antidote for Paracetamol overdose. It replenishes hepatic glutathione stores, neutralizing the toxic reactive metabolite NAPQI (N-acetyl-p-benzoquinone imine).",
      "explanation": "Excess paracetamol saturates normal glucuronidation and sulfation pathways, shunting drug metabolism to CYP2E1 which produces toxic NAPQI. Without glutathione, NAPQI binds hepatic macromolecules causing centrilobular liver necrosis. NAC is 100% hepatoprotective if administered within 8 hours.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Deferoxamine is the antidote for acute iron poisoning."
        },
        {
          "option": "C",
          "reason": "Atropine reverses cholinergic and organophosphate poisoning."
        },
        {
          "option": "D",
          "reason": "Dimercaprol chelates heavy metals (arsenic, mercury, lead)."
        }
      ],
      "priorityAlert": "Rumack-Matthew Nomogram determines treatment threshold based on 4-hour post-ingestion serum paracetamol levels!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Toxicology & Antidotes"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q80",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Opioid Overdose & Naloxone (Narcan) Titration",
    "scenarioQuestion": "A postoperative patient on IV Morphine PCA becomes unresponsive with a respiratory rate of 6 breaths/min, pinpoint pupils (miosis), and SpO2 84%. What is the nurse's FIRST medication intervention?",
    "options": [
      {
        "id": "A",
        "text": "Administer Naloxone (Narcan) 0.4 mg IV push slowly, titrated to respiratory rate"
      },
      {
        "id": "B",
        "text": "Administer Flumazenil 0.2 mg IV push"
      },
      {
        "id": "C",
        "text": "Administer Epinephrine 1 mg IV push"
      },
      {
        "id": "D",
        "text": "Administer Dextrose 50% 50 mL IV bolus"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Naloxone (Narcan) is a competitive mu-opioid receptor antagonist that immediately reverses opioid-induced respiratory depression and coma within 1 to 2 minutes.",
      "explanation": "The classic opioid overdose triad: CNS depression, miosis (pinpoint pupils), and respiratory depression. Naloxone must be titrated in small doses (0.1–0.4 mg) to restore ventilation without precipitating severe acute withdrawal pain and sympathetic surge.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Flumazenil reverses benzodiazepine overdose, not opioids."
        },
        {
          "option": "C",
          "reason": "Epinephrine is for cardiac arrest and anaphylaxis."
        },
        {
          "option": "D",
          "reason": "Dextrose treats hypoglycemia."
        }
      ],
      "priorityAlert": "Naloxone half-life (30–90 min) is SHORTER than Morphine/Methadone (3–6+ hours) — monitor closely for rebound respiratory depression!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Emergency Antidotes"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q81",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Lithium Therapeutic Index & Dietary Sodium Intake",
    "scenarioQuestion": "A bipolar patient is stabilized on Lithium Carbonate 300 mg three times daily. Which dietary instruction is CRITICAL for the nurse to teach the patient to prevent lethal lithium toxicity?",
    "options": [
      {
        "id": "A",
        "text": "Follow a strict low-sodium, salt-free diet to reduce fluid retention"
      },
      {
        "id": "B",
        "text": "Maintain a constant, normal dietary intake of sodium and drink 2 to 3 liters of fluid daily"
      },
      {
        "id": "C",
        "text": "Completely eliminate potassium-rich foods like bananas and oranges"
      },
      {
        "id": "D",
        "text": "Take high-dose thiazide diuretics to flush excess lithium"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Patients on Lithium must maintain a CONSTANT, NORMAL dietary intake of salt (sodium) and adequate hydration (2–3 L/day). Sodium depletion causes the kidneys to reabsorb lithium in place of sodium, causing acute toxicity.",
      "explanation": "Lithium is handled identically to sodium by the renal proximal tubules. Low sodium intake, dehydration, vomiting, diarrhea, or thiazide diuretics trigger increased proximal tubule sodium reabsorption, dragging lithium along with it and producing toxic serum levels (>1.5 mEq/L).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "A low-sodium diet is dangerous because it directly precipitates lithium toxicity."
        },
        {
          "option": "C",
          "reason": "Potassium restriction is unrelated to lithium clearance."
        },
        {
          "option": "D",
          "reason": "Thiazide diuretics reduce sodium and increase lithium levels by 40%, a severe drug interaction."
        }
      ],
      "priorityAlert": "Narrow Therapeutic Index of Lithium: 0.6 to 1.2 mEq/L! Early toxicity signs: coarse hand tremors, ataxia, diarrhea, vomiting."
    },
    "difficulty": "Moderate",
    "clinicalTag": "Psychopharmacology Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q82",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_pharm_07",
    "topicTitle": "Pharmacology: Antitubercular Therapy (ATT) First-Line Drug Toxicity",
    "scenarioQuestion": "A patient with pulmonary tuberculosis is initiated on standard daily fixed-dose combination therapy: Isoniazid (H), Rifampicin (R), Pyrazinamide (Z), and Ethambutol (E). The patient reports peripheral tingling and burning numbness in both feet. Which vitamin co-prescription was omitted that prevents this Isoniazid-induced neuropathy?",
    "options": [
      {
        "id": "A",
        "text": "Vitamin B1 (Thiamine)"
      },
      {
        "id": "B",
        "text": "Vitamin B6 (Pyridoxine 10–25 mg daily)"
      },
      {
        "id": "C",
        "text": "Vitamin B12 (Cyanocobalamin)"
      },
      {
        "id": "D",
        "text": "Vitamin C (Ascorbic acid)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Isoniazid (INH) competitively inhibits Pyridoxine (Vitamin B6) metabolism and accelerates its renal excretion, causing peripheral neuropathy. Co-administration of Pyridoxine (10–25 mg daily) prevents this neurotoxicity.",
      "explanation": "ATT First-Line Toxicities: 1) Isoniazid: Peripheral neuropathy (give B6) & hepatotoxicity; 2) Rifampicin: Orange-red discoloration of urine/tears/sweat & enzyme inducer; 3) Pyrazinamide: Hyperuricemia (arthralgia/gout); 4) Ethambutol: Retrobulbar optic neuritis (loss of red-green visual discrimination).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Thiamine prevents Wernicke-Korsakoff, not INH-induced neuropathy."
        },
        {
          "option": "C",
          "reason": "B12 treats pernicious anemia."
        },
        {
          "option": "D",
          "reason": "Vitamin C is an antioxidant."
        }
      ],
      "priorityAlert": "NORCET ATT Checklist: INH = Pyridoxine B6! Rifampicin = Red/Orange urine! Ethambutol = Eye check (Red-Green color blindness)!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Infectious Disease Pharmacology"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q83",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Community: Biomedical Waste Management (BMW 2016)",
    "scenarioQuestion": "After completing a blood transfusion for an anemic patient, the nursing officer prepares to dispose of the empty blood transfusion bag and the attached IV blood administration tubing with filter. According to the Biomedical Waste Management (Amendment) Rules, which color-coded container should the BLOOD BAG be discarded into?",
    "options": [
      {
        "id": "A",
        "text": "Red non-chlorinated plastic bag (Recyclable Plastics)"
      },
      {
        "id": "B",
        "text": "Yellow non-chlorinated plastic bag (Incineration / Deep burial)"
      },
      {
        "id": "C",
        "text": "White translucent puncture-proof container"
      },
      {
        "id": "D",
        "text": "Blue cardboard box with blue colored marking"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Under BMW Rules 2016/2018, Blood Bags ALWAYS go into the YELLOW container due to biohazard classification, whereas the plastic IV tubing without needles goes into the RED container.",
      "explanation": "Even though blood bags are plastic, they are classified as biological/infectious material because they carry whole blood and cells. Under BMW Rules, blood bags must be pre-treated and incinerated, placing them strictly into the YELLOW container.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Contaminated IV tubing and syringes without needles go into Red, but Blood Bags are categorized in Yellow."
        },
        {
          "option": "C",
          "reason": "White containers are strictly reserved for metal sharps and scalpels."
        },
        {
          "option": "D",
          "reason": "Blue containers are reserved for glassware and metallic orthopedic implants."
        }
      ],
      "priorityAlert": "Exam Trap: Plastic blood bag = YELLOW bin! Tubing & plastic syringe barrel = RED bin!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Biomedical Waste Segregation"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q84",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
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
      "explanation": "The ILR maintains temperatures between +2°C and +8°C even during prolonged power cuts up to 24-48 hours. Freeze-sensitive vaccines (DPT, Pentavalent, TT, Hepatitis B) must be kept in the upper basket to prevent accidental freezing.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "-15°C to -25°C is the operating range for Deep Freezers used for freezing ice packs."
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
    "id": "AIIMS_NORCET_2024_S1_Q85",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Community: Reconstituted Vaccine 4-Hour Discard Protocol",
    "scenarioQuestion": "A community health nurse is conducting an outreach village immunization session. A vial of lyophilized (freeze-dried) BCG vaccine is reconstituted with sterile Normal Saline diluent at 9:00 AM. In accordance with Universal Immunization Programme (UIP) national cold-chain standards, what is the mandatory maximum time by which this opened vial MUST be discarded?",
    "options": [
      {
        "id": "A",
        "text": "Within 30 minutes of reconstitution"
      },
      {
        "id": "B",
        "text": "Strictly within 4 hours (by 1:00 PM) or at the end of the immunization session, whichever is earlier"
      },
      {
        "id": "C",
        "text": "Can be stored in the ILR and reused for up to 28 days under Open Vial Policy"
      },
      {
        "id": "D",
        "text": "Within 24 hours if maintained on an ice pack"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Reconstituted vaccines without preservatives (BCG, Measles/MR, and Japanese Encephalitis) MUST be discarded within 4 HOURS of reconstitution or at the end of the session, whichever is earlier.",
      "explanation": "These vaccines lack chemical preservatives. After 4 hours at ambient temperature, risk of toxic shock syndrome due to Staphylococcus aureus multiplication increases dramatically. Reconstituted vaccines are strictly EXCLUDED from the National Open Vial Policy.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "30 minutes is unnecessary and wastes vaccines."
        },
        {
          "option": "C",
          "reason": "The 28-day Open Vial Policy applies ONLY to liquid vaccines with preservatives (DPT, TT, Hepatitis B, OPV, Pentavalent)."
        },
        {
          "option": "D",
          "reason": "Keeping beyond 4 hours risks lethal toxic shock syndrome."
        }
      ],
      "priorityAlert": "Critical NORCET Rule: BCG Diluent = Normal Saline! Measles Diluent = Sterile Water for Injection (SWFI)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Vaccine Cold-Chain Safety"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q86",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Immunization: Vaccine Vial Monitor (VVM) Interpretation",
    "scenarioQuestion": "Before administering an Oral Polio Vaccine (OPV) dose to an infant, the community health nurse inspects the Vaccine Vial Monitor (VVM) label. The inner square is light purple, matching the exact color of the outer circle (Stage 3). What is the mandatory action by the nurse?",
    "options": [
      {
        "id": "A",
        "text": "Administer the vaccine immediately as long as it has not passed the printed expiry date"
      },
      {
        "id": "B",
        "text": "Do NOT use the vaccine; discard the vial immediately and notify the cold chain handler"
      },
      {
        "id": "C",
        "text": "Place the vial in the deep freezer for 2 hours to reverse the color change"
      },
      {
        "id": "D",
        "text": "Dilute the vaccine with cold normal saline to restore potency"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "When the inner square of a Vaccine Vial Monitor (VVM) MATCHES or is DARKER than the outer circle (Stages 3 and 4), the vaccine has exceeded its cumulative heat tolerance threshold and MUST BE DISCARDED.",
      "explanation": "VVM Stages: Stage 1 (inner square white = USE); Stage 2 (inner square lighter than circle = USE first); Stage 3 (inner square matches circle = DISCARD / DO NOT USE); Stage 4 (inner square darker than circle = DISCARD / DO NOT USE). Color changes are irreversible.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "A Stage 3 VVM invalidates the expiry date; thermal damage has destroyed live virus potency."
        },
        {
          "option": "C",
          "reason": "VVM color change is an irreversible chemical reaction; freezing cannot reverse it."
        },
        {
          "option": "D",
          "reason": "OPV is a liquid oral vaccine and must never be diluted."
        }
      ],
      "priorityAlert": "VVM Rule: If the inner square is lighter than the circle, USE it! If the inner square matches or is darker, DO NOT USE!"
    },
    "difficulty": "Easy",
    "clinicalTag": "UIP Vaccine Vial Monitor"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q87",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Epidemiology: Levels of Prevention Classification",
    "scenarioQuestion": "A nursing officer is organizing a community health fair that provides routine screening for hypertension and Type 2 Diabetes via blood pressure checks and random blood glucose testing. Which level of disease prevention does this activity represent?",
    "options": [
      {
        "id": "A",
        "text": "Primordial Prevention"
      },
      {
        "id": "B",
        "text": "Primary Prevention"
      },
      {
        "id": "C",
        "text": "Secondary Prevention"
      },
      {
        "id": "D",
        "text": "Tertiary Prevention"
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "Early diagnosis and prompt treatment (including screening tests such as Pap smears, mammography, and BP/glucose checks) define SECONDARY PREVENTION.",
      "explanation": "Levels of Prevention: 1) Primordial (prevent emergence of risk factors in population, e.g. anti-obesity campaigns in schools); 2) Primary (health promotion & specific protection, e.g. immunization, condoms, helmets); 3) Secondary (early detection through screening before irreversible damage occurs); 4) Tertiary (disability limitation and rehabilitation).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Primordial prevention prevents risk factors from emerging."
        },
        {
          "option": "B",
          "reason": "Primary prevention occurs before disease process begins (immunization)."
        },
        {
          "option": "D",
          "reason": "Tertiary prevention involves rehabilitation after disease has caused disability."
        }
      ],
      "priorityAlert": "Mnemonic: Screening = Secondary! Immunization = Primary! Rehabilitation = Tertiary!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Levels of Prevention"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q88",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Epidemiology: Incidence vs Prevalence Rates",
    "scenarioQuestion": "In an epidemiological study of tuberculosis in a district of 100,000 population, investigators record 50 new confirmed cases over a 1-year period, while the total number of individuals living with active tuberculosis on July 1st is 300. How are these two epidemiological parameters defined?",
    "options": [
      {
        "id": "A",
        "text": "Incidence is 300/100,000; Prevalence is 50/100,000"
      },
      {
        "id": "B",
        "text": "Incidence is 50/100,000 (rate of NEW cases); Prevalence is 300/100,000 (ALL existing cases at a point in time)"
      },
      {
        "id": "C",
        "text": "Both measures represent point prevalence"
      },
      {
        "id": "D",
        "text": "Both measures represent attack rates"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Incidence measures the number of NEW cases occurring in a population at risk during a specified time period. Prevalence measures ALL existing cases (new + old) in a defined population at a given point in time.",
      "explanation": "Formula: Prevalence = Incidence × Average Duration of disease (P = I × D). Incidence is the primary measure for evaluating the etiology and acute outbreaks of disease, while prevalence assesses the overall disease burden for healthcare resource planning.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "The definitions are inverted."
        },
        {
          "option": "C",
          "reason": "Incidence is a longitudinal rate of new occurrences, not point prevalence."
        },
        {
          "option": "D",
          "reason": "Attack rate is an incidence proportion used specifically in food poisoning outbreaks."
        }
      ],
      "priorityAlert": "NORCET Formula: Prevalence = Incidence × Duration (P = I × D)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Epidemiological Metrics"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q89",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Public Health: Landmark Healthcare Committees & PHC Concept",
    "scenarioQuestion": "Which historic healthcare committee in India, established in 1943 (report published in 1946), recommended the integration of preventive and curative health services and proposed the concept of Primary Health Centres (PHCs) and the 3-Million Plan?",
    "options": [
      {
        "id": "A",
        "text": "Mudaliar Committee (Health Survey and Planning Committee 1962)"
      },
      {
        "id": "B",
        "text": "Bhore Committee (Health Survey and Development Committee 1946)"
      },
      {
        "id": "C",
        "text": "Kartar Singh Committee (Committee on Multipurpose Workers 1973)"
      },
      {
        "id": "D",
        "text": "Shrivastav Committee (1975)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The Bhore Committee (1946) is the foundation of modern public health in India. It recommended free health services for all, 1 Primary Health Centre per 40,000 population, and elimination of the private practice of doctors.",
      "explanation": "Key Committee Milestones: Bhore (1946, PHC foundation & 3-million plan), Mudaliar (1962, strengthening district hospitals), Chadah (1963, malaria maintenance & basic health worker), Kartar Singh (1973, Multipurpose Worker / MPW concept), Shrivastav (1975, Village Health Guide & ROMER scheme).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Mudaliar Committee focused on quality over quantity and district hospital upgrades."
        },
        {
          "option": "C",
          "reason": "Kartar Singh introduced the Multipurpose Worker (ANM/MPW) concept."
        },
        {
          "option": "D",
          "reason": "Shrivastav introduced the Village Health Guide scheme."
        }
      ],
      "priorityAlert": "Bhore Committee = Father of Primary Health Care in India!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Public Health Committees"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q90",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_chn_06",
    "topicTitle": "Environmental Health: Water Purification & Free Residual Chlorine",
    "scenarioQuestion": "A public health nurse is monitoring the safety of piped drinking water in a community following municipal chlorination. According to national water standards, what is the RECOMMENDED level of Free Residual Chlorine after a minimum contact period of 1 hour?",
    "options": [
      {
        "id": "A",
        "text": "0.1 mg/L (ppm)"
      },
      {
        "id": "B",
        "text": "0.5 mg/L (ppm)"
      },
      {
        "id": "C",
        "text": "2.0 mg/L (ppm)"
      },
      {
        "id": "D",
        "text": "5.0 mg/L (ppm)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "The recommended standard for safe drinking water is a Free Residual Chlorine level of at least 0.5 mg/L (0.5 ppm) after a minimum contact time of 1 HOUR (60 minutes).",
      "explanation": "Chlorine demand is the amount needed to destroy bacteria and organic matter. Any chlorine remaining after satisfying this demand is free residual chlorine. It serves as a continuous antiseptic barrier against post-treatment microbial recontamination in pipelines.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "0.1 mg/L is insufficient to protect against downstream pipeline recontamination."
        },
        {
          "option": "C",
          "reason": "2.0 mg/L is used during cholera outbreaks, but not routine distribution."
        },
        {
          "option": "D",
          "reason": "5.0 mg/L gives unacceptable taste, odor, and mucosal irritation."
        }
      ],
      "priorityAlert": "Orthotolidine (OT) test: Free chlorine produces yellow color instantly (within 10 seconds); combined chlorine reacts slowly (after 5 minutes)!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Water Sanitation & Chlorination"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q91",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_05",
    "topicTitle": "Psychiatry: Suicide Risk & Sudden Mood Elevation Paradox",
    "scenarioQuestion": "A 40-year-old male with severe Major Depressive Disorder has been on the psychiatric unit on suicide precautions for 2 weeks. This morning, he appears energetic, cheerful, and gives his wristwatch away to his roommate, stating \"Everything is finally going to be peaceful today.\" How should the psychiatric nurse interpret this behavior?",
    "options": [
      {
        "id": "A",
        "text": "The antidepressant has achieved full therapeutic efficacy and suicide precautions can be discontinued"
      },
      {
        "id": "B",
        "text": "The patient is at an acutely heightened risk of suicide because the resolution of ambivalence and newfound energy provide the capability to carry out a plan"
      },
      {
        "id": "C",
        "text": "The patient has developed bipolar mania"
      },
      {
        "id": "D",
        "text": "The patient is exhibiting signs of social adaptation and readiness for discharge"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "A sudden, dramatic, uncharacteristic elevation in mood or giving away prized possessions in a severely depressed patient is a major RED FLAG for imminent suicide attempt.",
      "explanation": "During severe depression, psychomotor retardation prevents executing suicide. When antidepressants restore energy before lifting despair, or once a definitive decision to end life is made, a calm sense of relief appears. Suicide precautions must be INTENSIFIED.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Antidepressants take 4-6 weeks for full remission; abrupt cheerful mood is pathological."
        },
        {
          "option": "C",
          "reason": "Bipolar mania involves pressured speech, grandiosity, and flight of ideas."
        },
        {
          "option": "D",
          "reason": "Giving away prized possessions is a classic pre-suicide preparatory act."
        }
      ],
      "priorityAlert": "Never lower suicide watch when a depressed patient suddenly appears happy and gives away possessions — suicide risk is at its PEAK!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Suicide Risk Assessment"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q92",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_05",
    "topicTitle": "Psychiatry: Neuroleptic Malignant Syndrome (NMS) vs Serotonin Syndrome",
    "scenarioQuestion": "A patient with schizophrenia treated with Haloperidol (Haldol) develops extreme high fever (40.2°C / 104.4°F), \"lead-pipe\" generalized muscle rigidity, altered level of consciousness, and autonomic instability (tachycardia and fluctuating BP). Serum Creatine Kinase (CPK) is markedly elevated (15,000 U/L). What is this condition, and what is the primary antidote?",
    "options": [
      {
        "id": "A",
        "text": "Tardive dyskinesia; treat with Benztropine"
      },
      {
        "id": "B",
        "text": "Neuroleptic Malignant Syndrome (NMS); treat by stopping antipsychotic immediately and administering Dantrolene sodium or Bromocriptine"
      },
      {
        "id": "C",
        "text": "Acute dystonia; treat with Diphenhydramine"
      },
      {
        "id": "D",
        "text": "Serotonin syndrome; treat with Cyproheptadine"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Neuroleptic Malignant Syndrome (NMS) is an idiosyncratic life-threatening reaction to dopamine antagonists (antipsychotics). Cardinal triad: Hyperthermia, Lead-pipe rigidity, and Autonomic instability with elevated CPK. Treatment: Stop drug stat + Dantrolene / Bromocriptine.",
      "explanation": "Dantrolene is a direct-acting skeletal muscle relaxant that blocks ryanodine calcium channels in the sarcoplasmic reticulum, relieving rigidity and hyperthermia. Bromocriptine is a dopamine agonist that overcomes dopamine receptor blockade.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Tardive dyskinesia consists of involuntary choreoathetoid movements of face and tongue."
        },
        {
          "option": "C",
          "reason": "Acute dystonia presents with torticollis and oculogyric crisis without hyperthermia."
        },
        {
          "option": "D",
          "reason": "Serotonin syndrome presents with hyperreflexia, clonus, and tremor rather than lead-pipe rigidity."
        }
      ],
      "priorityAlert": "Mnemonic: NMS = Lead-pipe Rigidity + Hyporeflexia! Serotonin Syndrome = Hyperreflexia + Clonus + Shivering!"
    },
    "difficulty": "Hard",
    "clinicalTag": "Antipsychotic Emergencies"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q93",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_05",
    "topicTitle": "Psychiatry: Wernicke-Korsakoff Thiamine-Before-Glucose Rule",
    "scenarioQuestion": "A 50-year-old chronic alcoholic male is brought to the casualty in an emaciated, confused state. He exhibits horizontal nystagmus, bilateral sixth nerve (abducens) palsy, and severe ataxia. The physician orders IV 10% Dextrose. What must the nurse ensure is administered BEFORE the dextrose infusion?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous Thiamine (Vitamin B1) 100 mg to 500 mg"
      },
      {
        "id": "B",
        "text": "Intravenous Naloxone 0.4 mg"
      },
      {
        "id": "C",
        "text": "Intravenous Diazepam 10 mg"
      },
      {
        "id": "D",
        "text": "Oral Pyridoxine (Vitamin B6)"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "In chronic alcoholics or malnourished patients, Intravenous Thiamine (Vitamin B1) must ALWAYS be given BEFORE IV Dextrose to prevent precipitating acute, fatal Wernicke's Encephalopathy.",
      "explanation": "Wernicke's Encephalopathy triad: 1) Confusion, 2) Ophthalmoplegia/Nystagmus, 3) Ataxia. Giving glucose stimulates carbohydrate metabolism, which rapidly consumes the body's last traces of thiamine pyrophosphate, triggering irreversible mamillary body necrosis and Korsakoff's psychosis (irreversible amnesia & confabulation).",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Correct. Thiamine is the mandatory cofactor."
        },
        {
          "option": "B",
          "reason": "Naloxone reverses opioids, not alcohol."
        },
        {
          "option": "C",
          "reason": "Diazepam manages alcohol withdrawal tremors, but thiamine must precede glucose."
        },
        {
          "option": "D",
          "reason": "B6 prevents INH neuropathy, not Wernicke encephalopathy."
        }
      ],
      "priorityAlert": "Golden Rule in Emergency Nursing: \"Thiamine before Glucose, always and without exception!\""
    },
    "difficulty": "Moderate",
    "clinicalTag": "Substance Use Disorders"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q94",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_05",
    "topicTitle": "Psychiatry: Therapeutic Communication with Hallucinations",
    "scenarioQuestion": "A patient hospitalized with paranoid schizophrenia becomes agitated in the dayroom, stares intently at the empty corner, and shouts, \"Can't you hear them? The assassins are whispering that they are going to execute me tonight!\" Which response by the nurse is the MOST therapeutic?",
    "options": [
      {
        "id": "A",
        "text": "\"I hear them too, but don't worry, the security guards will protect us.\""
      },
      {
        "id": "B",
        "text": "\"You are imagining things; there is nobody in that corner whispering anything.\""
      },
      {
        "id": "C",
        "text": "\"I do not hear any voices, but I can see that you are feeling very frightened right now. You are safe here with us.\""
      },
      {
        "id": "D",
        "text": "\"Why do you think anyone would want to assassinate a peaceful person like you?\""
      }
    ],
    "correctOptionId": "C",
    "clinicalRationale": {
      "keyTakeaway": "The therapeutic response to hallucinations is: 1) Validate the patient's emotional feelings (empathy), 2) Present reality gently without arguing or validating the hallucination, and 3) Provide reassurance of safety.",
      "explanation": "Never validate or agree with hallucinations (reinforces psychosis). Never argue, mock, or dismiss the patient (\"You're imagining things\"). Validating the fear while stating \"I do not hear any voices\" grounds the patient in reality while maintaining therapeutic trust.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Pretending to hear the voices reinforces the hallucination."
        },
        {
          "option": "B",
          "reason": "Directly arguing makes the patient defensive and damages trust."
        },
        {
          "option": "D",
          "reason": "\"Why\" questions provoke defensive reactions and explore delusional content."
        }
      ],
      "priorityAlert": "Communication Rule: Never argue with a delusion, never agree with a hallucination! Validate the feeling, present reality."
    },
    "difficulty": "Easy",
    "clinicalTag": "Therapeutic Communication"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q95",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_psych_05",
    "topicTitle": "Psychiatry: Electroconvulsive Therapy (ECT) Pre-Medication",
    "scenarioQuestion": "A patient with treatment-resistant severe psychotic depression is scheduled for modified Electroconvulsive Therapy (ECT) under general anesthesia. Which anticholinergic medication is routinely administered 30 minutes before the procedure, and what is its specific pharmacological purpose?",
    "options": [
      {
        "id": "A",
        "text": "Succinylcholine to induce muscle paralysis"
      },
      {
        "id": "B",
        "text": "Atropine Sulfate (or Glycopyrrolate) to reduce oral/tracheal secretions and prevent vagally-mediated bradyarrhythmias"
      },
      {
        "id": "C",
        "text": "Methohexital to produce prolonged sedation"
      },
      {
        "id": "D",
        "text": "Diazepam to increase seizure threshold"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Atropine Sulfate (or Glycopyrrolate) is given pre-ECT to: 1) Dry oral and respiratory secretions (prevent aspiration), and 2) Block reflex parasympathetic vagal stimulation caused by the electric stimulus, preventing severe bradycardia and asystole.",
      "explanation": "Modified ECT protocol: 1) Atropine/Glycopyrrolate 30 min before; 2) Short-acting IV anesthetic (Propofol or Methohexital); 3) Muscle relaxant (Succinylcholine) to prevent bone fractures; 4) Bite block inserted; 5) 100% O2 bag-mask ventilation throughout.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Succinylcholine is the muscle relaxant, not an anticholinergic."
        },
        {
          "option": "C",
          "reason": "Methohexital is the ultra-short-acting barbiturate anesthetic."
        },
        {
          "option": "D",
          "reason": "Benzodiazepines (Diazepam) are withheld because they are anticonvulsants that abort therapeutic seizures."
        }
      ],
      "priorityAlert": "Under the Mental Healthcare Act 2017, \"Direct ECT\" (without anesthesia and muscle relaxant) is BANNED in India!"
    },
    "difficulty": "Moderate",
    "clinicalTag": "Biological Therapies in Psychiatry"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q96",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Aptitude: Direction Sense Test in Hospital Layout",
    "scenarioQuestion": "A nursing officer starts from the Central Nursing Station and walks 20 meters North to check the crash cart. She then turns to her right and walks 30 meters to Room 102. She then turns to her right again and walks 20 meters to the satellite pharmacy. In which direction and at what distance is the satellite pharmacy from the Central Nursing Station?",
    "options": [
      {
        "id": "A",
        "text": "30 meters East"
      },
      {
        "id": "B",
        "text": "20 meters South"
      },
      {
        "id": "C",
        "text": "50 meters North-East"
      },
      {
        "id": "D",
        "text": "30 meters West"
      }
    ],
    "correctOptionId": "A",
    "clinicalRationale": {
      "keyTakeaway": "Step 1: Walk 20m North (displacement: +20y). Step 2: Turn right (East) and walk 30m (+30x). Step 3: Turn right (South) and walk 20m (-20y). Net displacement = 30 meters East.",
      "explanation": "The 20 meters North and 20 meters South cancel out along the vertical Y-axis. The remaining horizontal X-axis displacement is exactly 30 meters to the East of the starting nursing station.",
      "whyOthersAreWrong": [
        {
          "option": "B",
          "reason": "Vertical displacements cancel to zero."
        },
        {
          "option": "C",
          "reason": "North-East ignores the final southward leg."
        },
        {
          "option": "D",
          "reason": "The first right turn from North is East, not West."
        }
      ],
      "priorityAlert": "Direction Sense Rule: Right turn from North = East! Right turn from East = South!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Direction Sense Reasoning"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q97",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Aptitude: Blood Relations Logical Deductions",
    "scenarioQuestion": "Pointing to a portrait of a hospital medical superintendent, a female nursing superintendent says: \"His mother is the only daughter of my mother.\" How is the nursing superintendent related to the medical superintendent?",
    "options": [
      {
        "id": "A",
        "text": "Sister"
      },
      {
        "id": "B",
        "text": "Mother"
      },
      {
        "id": "C",
        "text": "Maternal Aunt"
      },
      {
        "id": "D",
        "text": "Grandmother"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Deduction: \"The only daughter of my mother\" spoken by a woman refers to HERSELF. Therefore, \"His mother is myself\" means the nursing superintendent is his MOTHER.",
      "explanation": "Breakdown of statement: \"My mother's only daughter\" = the speaker herself (since the speaker is a female). \"His mother is [myself]\". Thus, she is the mother of the medical superintendent in the portrait.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Sister would require \"daughter of my parents\" with multiple sisters."
        },
        {
          "option": "C",
          "reason": "Maternal aunt would require a brother speaking about his sister."
        },
        {
          "option": "D",
          "reason": "Grandmother skips a generation."
        }
      ],
      "priorityAlert": "Blood Relations Rule: Identify \"my mother's only daughter\" = speaker herself!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Blood Relations Reasoning"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q98",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Aptitude: Pediatric Drug Dose Volume Calculation",
    "scenarioQuestion": "A pediatrician orders Ampicillin 150 mg IV every 6 hours for an infant with sepsis. The pharmacy supplies Ampicillin powder reconstituted with sterile water to yield a concentration of 500 mg in 5 mL. How many milliliters (mL) should the nurse administer per dose?",
    "options": [
      {
        "id": "A",
        "text": "1.0 mL"
      },
      {
        "id": "B",
        "text": "1.5 mL"
      },
      {
        "id": "C",
        "text": "2.5 mL"
      },
      {
        "id": "D",
        "text": "3.0 mL"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "Standard Formula: Volume to Administer = (Desired Dose ÷ Stock Dose) × Stock Volume. Calculation: (150 mg ÷ 500 mg) × 5 mL = 0.3 × 5 = 1.5 mL.",
      "explanation": "Step 1: Identify Desired Dose = 150 mg. Step 2: Stock on hand = 500 mg in 5 mL (concentration = 100 mg/mL). Step 3: Divide desired dose by concentration: 150 mg ÷ 100 mg/mL = 1.5 mL.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "1.0 mL provides only 100 mg."
        },
        {
          "option": "C",
          "reason": "2.5 mL provides 250 mg."
        },
        {
          "option": "D",
          "reason": "3.0 mL provides 300 mg."
        }
      ],
      "priorityAlert": "Always verify pediatric drug doses with a second qualified nurse before pushing IV!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Medication Mathematics"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q99",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "General Knowledge: World Health Day Commemoration Date",
    "scenarioQuestion": "Every year, the World Health Organization (WHO) observes World Health Day to draw global attention to priority public health concerns. On which date is World Health Day observed internationally?",
    "options": [
      {
        "id": "A",
        "text": "March 24"
      },
      {
        "id": "B",
        "text": "April 7"
      },
      {
        "id": "C",
        "text": "May 12"
      },
      {
        "id": "D",
        "text": "December 1"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "World Health Day is celebrated every year on APRIL 7, marking the historic founding of the World Health Organization (WHO) in 1948.",
      "explanation": "Important Global Health Days: April 7 = World Health Day; March 24 = World Tuberculosis Day (Dr. Robert Koch announced discovery of TB bacillus in 1882); May 12 = International Nurses Day (Florence Nightingale birth anniversary); December 1 = World AIDS Day; September 28 = World Rabies Day.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "March 24 is World Tuberculosis Day."
        },
        {
          "option": "C",
          "reason": "May 12 is International Nurses Day."
        },
        {
          "option": "D",
          "reason": "December 1 is World AIDS Day."
        }
      ],
      "priorityAlert": "Key Health Days: April 7 = World Health Day! May 12 = International Nurses Day!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Public Health Commemorations"
  },
  {
    "id": "AIIMS_NORCET_2024_S1_Q100",
    "exam": "AIIMS NORCET",
    "year": 2024,
    "session": "Stage I (Preliminary)",
    "subjectId": "subj_apt_08",
    "topicTitle": "Nursing History: International Nurses Day & Florence Nightingale",
    "scenarioQuestion": "International Nurses Day is celebrated across the globe on May 12 every year under the leadership of the International Council of Nurses (ICN). Whose birth anniversary does this historic day commemorate?",
    "options": [
      {
        "id": "A",
        "text": "Clara Barton (Founder of the American Red Cross)"
      },
      {
        "id": "B",
        "text": "Florence Nightingale (Founder of Modern Nursing, born May 12, 1820)"
      },
      {
        "id": "C",
        "text": "Mary Eliza Mahoney (First African American licensed nurse)"
      },
      {
        "id": "D",
        "text": "Virginia Henderson (Need Theory of Nursing pioneer)"
      }
    ],
    "correctOptionId": "B",
    "clinicalRationale": {
      "keyTakeaway": "International Nurses Day commemorates the birth anniversary of FLORENCE NIGHTINGALE, born on May 12, 1820 in Florence, Italy.",
      "explanation": "Known as the \"Lady with the Lamp\" for her night-time rounds caring for wounded British soldiers during the Crimean War (1853-1856), Nightingale established the world's first secular nursing school at St Thomas' Hospital in London (1860) and pioneered environmental sanitation in patient recovery.",
      "whyOthersAreWrong": [
        {
          "option": "A",
          "reason": "Clara Barton founded the American Red Cross in 1881."
        },
        {
          "option": "C",
          "reason": "Mary Mahoney was the first licensed African American professional nurse."
        },
        {
          "option": "D",
          "reason": "Virginia Henderson developed the 14 basic human needs nursing definition."
        }
      ],
      "priorityAlert": "Florence Nightingale's seminal book: \"Notes on Nursing: What It Is, and What It Is Not\" published in 1859!"
    },
    "difficulty": "Easy",
    "clinicalTag": "Nursing Foundations & History"
  }
];
