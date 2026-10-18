// PocketNORCET Master Syllabus Repository - Comprehensive 8 Core Subjects
// Verified for AIIMS NORCET Stage I & II, ESIC, RRB, and State Nursing Officer Exams
import { SubjectTopic } from '../types';

export const INITIAL_SYLLABUS_DATA: SubjectTopic[] = [
  {
    "id": "subj_fon_01",
    "name": "Fundamentals of Nursing & Clinical Skills",
    "code": "FON-101",
    "iconName": "Stethoscope",
    "weightagePercentage": 20,
    "color": "#0d9488",
    "subtopics": [
          {
                "id": "sub_fon_iv_01",
                "title": "Parenteral Therapy, IV Cannulation, Flow Rates & Blood Transfusions",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_1_1",
                            "order": 1,
                            "title": "Phase 1: IV Cannula Specifications & Fluid Tonicity Mechanics",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_101",
                                        "label": "Standard Peripheral IV Catheter Specifications (ISO 10555 Color Coding)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Peripheral IV Cannula Color, Flow Rate & Clinical Indications",
                                              "markdownContent": "### ISO 10555 Peripheral IV Cannula Matrix\n* **14G (Orange):** Outer Diameter 2.1 mm | Flow Rate **~240 mL/min**. Used in massive trauma resuscitation, rapid blood transfusions, and major open surgical procedures.\n* **16G (Grey):** Outer Diameter 1.8 mm | Flow Rate **~180 mL/min**. Indicated for rapid fluid resuscitation, multi-trauma, and Post-Partum Hemorrhage (PPH).\n* **18G (Green):** Outer Diameter 1.3 mm | Flow Rate **~90 mL/min**. **Gold standard routine choice for packed red blood cell (PRBC) transfusions**, contrast CT scans, and large-volume infusions.\n* **20G (Pink):** Outer Diameter 1.1 mm | Flow Rate **~60 mL/min**. Universal standard cannula for adult routine IV maintenance fluids and IV antibiotic administration.\n* **22G (Blue):** Outer Diameter 0.9 mm | Flow Rate **~36 mL/min**. Used in older adults, oncology patients with fragile sclerosed veins, and pediatric patients.\n* **24G (Yellow):** Outer Diameter 0.7 mm | Flow Rate **~20 mL/min**. Standard infant, toddler, and neonatal peripheral vein cannula.\n* **26G (Violet/Purple):** Outer Diameter 0.6 mm | Flow Rate **~13 mL/min**. Used strictly in premature and Extremely Low Birth Weight (ELBW) neonates.",
                                              "clinicalPearl": "Insert cannula at a 15° to 30° angle with bevel facing UP. Once blood flashback appears in chamber, advance 2 mm, lower angle nearly flush with skin, and thread the plastic catheter over the stylet.",
                                              "normalValues": [
                                                    {
                                                          "label": "Routine Peripheral IV Site Rotation",
                                                          "value": "Every 72 to 96 hours"
                                                    },
                                                    {
                                                          "label": "Continuous IV Administration Set Change",
                                                          "value": "Every 72 to 96 hours"
                                                    },
                                                    {
                                                          "label": "Lipid / TPN Administration Set Change",
                                                          "value": "Every 24 hours"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12",
                                                    "ESIC_2019_Q44"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_fon_102",
                                        "label": "Osmolarity & Tonicity Mechanics of Intravenous Crystalloids",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Isotonic, Hypotonic & Hypertonic Fluid Dynamics",
                                              "markdownContent": "### Intravenous Fluid Classification & Cellular Volume Shifts\n* **Isotonic Fluids (~275 to 295 mOsm/L):**\n  - **0.9% Normal Saline (308 mOsm/L)** & **Ringer's Lactate (273 mOsm/L)**.\n  - Expands the intravascular / extracellular compartment without altering intracellular volume.\n  - Preferred for shock, dehydration, burns, and intraoperative fluid replacement.\n* **Hypotonic Fluids (< 250 mOsm/L):**\n  - **0.45% NaCl (Half-Normal Saline)**.\n  - Osmotic pressure gradient causes water to shift from the vascular space **INTO tissue cells**.\n  - **STRICTLY CONTRAINDICATED in Increased ICP, Head Trauma, and Burns** (aggravates cerebral edema and hypovolemic collapse).\n* **Hypertonic Fluids (> 375 mOsm/L):**\n  - **3% NaCl, 5% Dextrose in Normal Saline (D5NS), 10% Dextrose (D10W)**.\n  - Draws water **OUT of swollen cells into the vascular space**. Indicated for symptomatic hyponatremia and acute cerebral edema.",
                                              "clinicalPearl": "D5W is isotonic in the IV bag (252 mOsm/L), but once infused into the bloodstream, dextrose is rapidly metabolized by insulin, leaving free water that acts physiologically as a HYPOTONIC fluid.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Serum Osmolality",
                                                          "value": "275 to 295 mOsm/kg"
                                                    },
                                                    {
                                                          "label": "0.9% Normal Saline Sodium & Chloride Content",
                                                          "value": "154 mEq/L Na+ and 154 mEq/L Cl-"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_1_2",
                            "order": 2,
                            "title": "Phase 2: Blood Transfusion Reactions & Safety Protocols",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_103",
                                        "label": "Acute Hemolytic vs Febrile Non-Hemolytic Transfusion Reaction Management",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Blood Administration Rates & Emergency Rejection Hierarchy",
                                              "markdownContent": "### Blood Transfusion Administration Protocols\n* Initiate transfusion within **30 minutes** of blood unit release from blood bank.\n* Complete entire unit infusion within strictly **4 hours** (bacterial proliferation hazard beyond 4 hours).\n* Infuse slowly at **2 mL/min (~10–15 gtt/min)** for the first 15 minutes; the nurse must remain at the bedside!\n\n### Acute Hemolytic Transfusion Reaction (ABO Incompatibility)\n* **Triad:** Sudden fever/chills, severe flank/lower back pain, and dark red/brown urine (hemoglobinuria), hypotension, tachycardia.\n* **MANDATORY STEPWISE EMERGENCY ACTIONS:**\n  1. **STOP THE TRANSFUSION IMMEDIATELY!**\n  2. Disconnect blood administration set at the cannula hub.\n  3. Keep the IV line patent with **Normal Saline using a completely NEW sterile IV tubing set**!\n  4. Notify physician and hospital blood bank immediately.\n  5. Return remaining blood unit, tubing, and labels to blood bank for antibody screening.\n  6. Collect blood and urine samples to check for free hemoglobin and DIC markers.",
                                              "clinicalPearl": "CRITICAL REACTION RULE: Never flush the remaining blood in the tubing into the patient! Stop the transfusion, disconnect tubing at the hub, and connect a NEW infusion set with Normal Saline.",
                                              "normalValues": [
                                                    {
                                                          "label": "Maximum PRBC Unit Infusion Time",
                                                          "value": "Strictly 4 hours"
                                                    },
                                                    {
                                                          "label": "Standard Blood Filter Pore Size",
                                                          "value": "170 to 260 microns"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "ESIC_2019_Q44"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_gi_02",
                "title": "Nasogastric Intubation, Enteral Feeds & Acid-Base Balance",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_2_1",
                            "order": 1,
                            "title": "Phase 1: NEX Measurement & Placement Verification",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_201",
                                        "label": "Ryle's Tube Measurement (NEX Method) & Placement Verification",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Nose-Ear-Xiphoid Measurement & Placement Diagnostics",
                                              "markdownContent": "### Nasogastric Tube (Ryle's Tube) Procedure\n* **Measurement Formula (NEX):** From **Tip of Nose → Earlobe → Xiphoid Process** of the sternum (add 5–10 cm for gastric placement).\n* **Insertion Technique:** High Fowler's position (90°). Pass tube with head tilted slightly back initially; once tube reaches pharynx, have patient flex neck forward and swallow sips of water.\n* **Placement Verification:**\n  - **GOLD STANDARD:** **Abdominal X-Ray** showing radiopaque tip below diaphragm in stomach.\n  - **Bedside Test:** Aspirate gastric contents and test with pH paper: **Gastric pH is strictly acidic (≤ 5.5)**. Respiratory pH is $> 6.0$.\n  - *Deprecated Method:* Auscultating whoosh of air over epigastrium is NOT reliable and does not guarantee gastric placement!",
                                              "clinicalPearl": "Air insufflation ('whoosh test') is NO LONGER considered reliable in modern nursing practice. X-ray is gold standard; aspirate pH testing (pH ≤ 5.5) is the primary bedside method.",
                                              "normalValues": [
                                                    {
                                                          "label": "Gastric Aspirate Normal pH",
                                                          "value": "1.0 to 5.5 (Acidic)"
                                                    },
                                                    {
                                                          "label": "Respiratory / Intestinal pH",
                                                          "value": "> 6.0 to 7.0"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_2_2",
                            "order": 2,
                            "title": "Phase 2: Enteral Nutrition Complications & Refeeding Syndrome",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_202",
                                        "label": "Gastric Residual Volume (GRV) Limits, Aspiration Prevention & Refeeding",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Enteral Feeding Protocols & Metabolic Complications",
                                              "markdownContent": "### Enteral Nutrition Safety Standards\n* **Aspiration Prevention:** Keep Head of Bed elevated to **30° to 45°** during continuous feeding and for at least **60 minutes after intermittent feeds**.\n* **Gastric Residual Volume (GRV):** Check GRV every 4–6 hours during continuous feeds and before each bolus feed.\n  - If $GRV < 250 mL$, return aspirate to stomach to prevent electrolyte loss.\n  - If $GRV > 250 to 500 mL$, hold feed, re-evaluate gastric motility, and consider prokinetic agents (Metoclopramide).\n* **Flushing:** Flush tube with **30 mL of sterile or tap water** every 4 hours during continuous feeds, before/after bolus feeds, and before/after drug administration.\n\n### Refeeding Syndrome in Severely Malnourished Patients\n* Rapid carbohydrate feeding triggers massive insulin surge → drives phosphate, potassium, and magnesium into cells.\n* **Hallmark:** Severe **Hypophosphatemia** (causes fatal cardiac arrhythmias, respiratory failure, and paresthesias).",
                                              "clinicalPearl": "Refeeding Syndrome Hallmark = Severe Hypophosphatemia! In malnourished patients, always check and correct serum phosphate before initiating aggressive enteral or parenteral nutrition.",
                                              "normalValues": [
                                                    {
                                                          "label": "Safe Enteral HOB Angle",
                                                          "value": "30° to 45°"
                                                    },
                                                    {
                                                          "label": "Routine Tube Flush Volume",
                                                          "value": "30 mL water"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_cath_03",
                "title": "Urinary Catheterization, Foley Sizing, Continuous Bladder Irrigation & CAUTI",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_3_1",
                            "order": 1,
                            "title": "Phase 1: Catheter Sizing, Insertion & Sterile Water Inflation",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_301",
                                        "label": "Foley Catheter Sizing, Male/Female Insertion Depth & Balloon Rules",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Aseptic Catheterization & Balloon Inflation Protocols",
                                              "markdownContent": "### Foley Catheter Specifications & Sizing\n* **French Gauge (Fr / Charrière):** $1 Fr = 0.33 mm$ outer diameter.\n  - Adult Females: **12 to 14 Fr**.\n  - Adult Males: **14 to 16 Fr**.\n  - Hematuria / Clot retention (3-way catheter): **18 to 22 Fr**.\n* **Insertion Technique:**\n  - *Female:* Dorsal recumbent position. Cleanse labia from front to back. Advance 5 to 7.5 cm (2–3 inches) until urine drains, then advance another 2.5 cm.\n  - *Male:* Supine with legs slightly abducted. Retract foreskin (if uncircumcised); hold penis at **90° angle perpendicular to body**. Advance **18 to 23 cm (7–9 inches)** until urine flows, then advance an **additional 2.5 to 5 cm (1–2 inches)** before inflating balloon!\n  - *Balloon Inflation:* Inflate strictly with **10 mL of STERILE WATER**. Never use Normal Saline (crystallizes in inflation port) and never use Air (floats and obstructs drainage channel).",
                                              "clinicalPearl": "Always advance a male Foley catheter all the way to the bifurcation (Y-junction) before inflating the balloon! Inflating a balloon inside the prostatic urethra causes severe urethral rupture and massive hemorrhage.",
                                              "normalValues": [
                                                    {
                                                          "label": "Female Catheter Size",
                                                          "value": "12 to 14 Fr"
                                                    },
                                                    {
                                                          "label": "Male Catheter Size",
                                                          "value": "14 to 16 Fr"
                                                    },
                                                    {
                                                          "label": "Balloon Inflation Fluid",
                                                          "value": "Sterile Water strictly"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_3_2",
                            "order": 2,
                            "title": "Phase 2: Continuous Bladder Irrigation (CBI) & CAUTI Bundles",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_302",
                                        "label": "Three-Way Continuous Bladder Irrigation (CBI) Post-TURP & CAUTI Bundle",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Post-Prostatectomy Hematuria Titration & Infection Bundles",
                                              "markdownContent": "### 3-Way Continuous Bladder Irrigation (CBI) Post-TURP\n* **Purpose:** Uses a large-bore 3-way catheter (18–22 Fr) with continuous normal saline inflow to prevent blood clot formation and catheter obstruction following Transurethral Resection of the Prostate (TURP).\n* **Titration Rule:** Titrate irrigation inflow rate to keep urinary drainage **CLEAR LIGHT PINK**. If drainage turns dark red or contains bright red clots, speed up irrigation!\n* **Catheter Obstruction Alarm:** If patient complains of severe bladder spasms or output stops, immediately stop irrigation and manually irrigate with 30–50 mL sterile normal saline using a piston syringe to dislodge clots.\n\n### Catheter-Associated Urinary Tract Infection (CAUTI) Prevention Bundle\n1. Maintain a strictly **closed drainage system**; never disconnect tubing unless irrigating.\n2. Drainage bag must remain **BELOW the level of the bladder** at all times to prevent retrograde infected urine reflux.\n3. Secure catheter tubing to the patient's anterior thigh (females) or abdomen/upper thigh (males) to prevent traction on bladder neck.\n4. Empty drainage bag when **2/3 full**; avoid allowing drain spigot to touch collection container.",
                                              "clinicalPearl": "In CBI, True Urine Output = Total Fluid in Drainage Bag MINUS Total Volume of Irrigation Fluid Infused. Maintain irrigation rate so drainage remains light pink.",
                                              "normalValues": [
                                                    {
                                                          "label": "Adult Normal Minimum Urine Output",
                                                          "value": "0.5 mL/kg/hr (30 mL/hr)"
                                                    },
                                                    {
                                                          "label": "CBI Target Drainage Color",
                                                          "value": "Clear Light Pink"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_resp_04",
                "title": "Oxygen Delivery Systems, Venturi Masks & Suctioning Protocols",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_4_1",
                            "order": 1,
                            "title": "Phase 1: Oxygen Delivery Systems & Venturi FiO2 Matrix",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_401",
                                        "label": "Oxygen Delivery Devices & Venturi Color-Coded FiO2 Matrix",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Low-Flow vs High-Flow Systems & Bernoulli Principle",
                                              "markdownContent": "### Venturi Mask Color-Coded Entrainment Ports\nProvides precise, fixed fractional inspired oxygen (FiO2) regardless of patient's respiratory rate:\n* **Blue:** 2 L/min = **24% FiO2**\n* **White:** 4 L/min = **28% FiO2**\n* **Orange:** 6 L/min = **31% FiO2**\n* **Yellow:** 8 L/min = **35% FiO2**\n* **Red:** 10 L/min = **40% FiO2**\n* **Green:** 15 L/min = **60% FiO2**\n*(Memory Mnemonic: **B**lue **W**hite **O**range **Y**ellow **R**ed **G**reen → 'Boys Will Only Yield Rare Gifts').*\n\n### Other Oxygen Delivery Devices\n* **Nasal Cannula:** 1 to 6 L/min → Delivers 24% to 44% FiO2 (Adds ~4% FiO2 per 1 L/min above room air 21%).\n* **Non-Rebreather Mask (NRBM):** 10 to 15 L/min → Delivers **80% to 95% FiO2** (Highest concentration among non-invasive masks; reservoir bag must stay 2/3 full!).",
                                              "clinicalPearl": "Venturi mask is the absolute gold standard for COPD patients with chronic hypercapnia because it delivers precise low-flow FiO2 without blunting hypoxic respiratory drive.",
                                              "normalValues": [
                                                    {
                                                          "label": "Room Air Oxygen Fraction",
                                                          "value": "21% (0.21)"
                                                    },
                                                    {
                                                          "label": "Target SpO2 in COPD",
                                                          "value": "88% to 92%"
                                                    },
                                                    {
                                                          "label": "Target SpO2 in Normal Adults",
                                                          "value": "95% to 100%"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_4_2",
                            "order": 2,
                            "title": "Phase 2: Endotracheal & Tracheostomy Suctioning Protocols",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_402",
                                        "label": "Closed vs Open Endotracheal & Tracheostomy Suctioning Protocol",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Airway Suctioning Pressures, Duration & Hypoxia Prevention",
                                              "markdownContent": "### Suction Pressure Thresholds by Age Group\n* **Adults:** 100 to 120 mmHg (Never exceed 150 mmHg).\n* **Children / Adolescents:** 80 to 100 mmHg.\n* **Infants / Neonates:** 60 to 80 mmHg.\n\n### Step-by-Step Clinical Procedure Hierarchy\n1. **Pre-Oxygenation:** Hyperoxygenate with 100% FiO2 for at least 30 to 60 seconds before catheter insertion.\n2. **Insertion:** Advance catheter WITHOUT applying suction until resistance is met or the patient coughs, then retract 1 cm before applying negative pressure.\n3. **Suction Application:** Apply intermittent suction **ONLY while rotating and withdrawing** the catheter.\n4. **Time Limit:** Continuous suction must strictly **NOT exceed 10 to 15 seconds** (5 seconds in infants).\n5. **Recovery:** Re-oxygenate and wait at least 1 minute before attempting a second pass (maximum 2–3 passes per session).",
                                              "clinicalPearl": "Earliest sign of hypoxemic distress during suctioning is Tachycardia and Cardiac Dysrhythmias. If the patient becomes bradycardic or desaturates, STOP suctioning immediately and hyperventilate with 100% O2!",
                                              "clinicalAlert": "NEVER apply suction pressure while advancing the catheter down the trachea — doing so causes massive tracheal mucosal shearing, severe vagal bradycardia, and sudden cardiac arrest!",
                                              "normalValues": [
                                                    {
                                                          "label": "Adult Suction Vacuum Pressure",
                                                          "value": "100–120 mmHg"
                                                    },
                                                    {
                                                          "label": "Max Suction Duration (Adult)",
                                                          "value": "10–15 seconds"
                                                    },
                                                    {
                                                          "label": "Adult Suction Catheter Sizing Formula",
                                                          "value": "(ET Tube Size - 2) × 2 (French gauge)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q39"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_wound_05",
                "title": "Pressure Injury (Bedsore) Staging, Braden Scale & Wound Evisceration",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_5_1",
                            "order": 1,
                            "title": "Phase 1: NPUAP Staging & Braden Scale Risk Stratification",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_501",
                                        "label": "NPUAP Pressure Injury Staging Criteria (Stage I to Unstageable)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "National Pressure Ulcer Advisory Panel (NPUAP) Staging Guide",
                                              "markdownContent": "### Pressure Injury Stage Differentiation Matrix\n* **Stage I (Non-blanchable Erythema):** Intact skin with localized area of persistent non-blanchable erythema.\n* **Stage II (Partial-Thickness Skin Loss):** Loss of epidermis with exposed dermis. Wound bed is viable, pink/red, moist. Also includes intact or ruptured serum-filled blisters. Subcutaneous fat is NOT visible.\n* **Stage III (Full-Thickness Skin Loss):** Full-thickness loss where subcutaneous adipose fat is visible. Bone, tendon, or muscle are NOT visible.\n* **Stage IV (Full-Thickness Tissue Loss):** Full-thickness loss with directly visible or palpable bone, tendon, ligament, or muscle. High risk of osteomyelitis.\n* **Unstageable:** Full-thickness loss obscured by slough (yellow, tan) or eschar (brown, black).\n* **Deep Tissue Pressure Injury (DTPI):** Persistent non-blanchable deep red, maroon, or purple discoloration.\n\n### Braden Scale Risk Score (Total 23 Points)\n* 6 Subscales: Sensory Perception, Moisture, Activity, Mobility, Nutrition, Friction & Shear.\n* **Score ≤ 9:** Very High Risk | **Score 10–12:** High Risk | **Score 13–14:** Moderate Risk | **Score 15–18:** Mild Risk | **Score 19–23:** Low Risk. (Lower score = Higher risk!).",
                                              "clinicalPearl": "Never massage reddened bony prominences! Massaging non-blanchable erythema shears deep capillaries and accelerates necrosis, rapidly converting a Stage I injury into Stage III.",
                                              "normalValues": [
                                                    {
                                                          "label": "Patient Repositioning Interval",
                                                          "value": "Every 2 hours (bed) / Every 1 hour (chair)"
                                                    },
                                                    {
                                                          "label": "Braden Scale High Risk Cut-off",
                                                          "value": "Score ≤ 12"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q92"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_5_2",
                            "order": 2,
                            "title": "Phase 2: Surgical Wound Healing Types, Dehiscence & Evisceration",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_502",
                                        "label": "Primary vs Secondary Intention & Wound Evisceration Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Wound Complication Protocols & Sterile Emergency Care",
                                              "markdownContent": "### Types of Wound Healing\n* **Primary Intention (First Intention):** Surgical incision with clean, well-approximated edges closed by sutures/staples. Minimal tissue loss and minimal scarring.\n* **Secondary Intention:** Wounds with extensive tissue loss (e.g. pressure ulcers, severe burns). Edges cannot be approximated; heals by granulation from bottom up with significant scar formation.\n* **Tertiary Intention (Delayed Primary Closure):** Contaminated infected wounds left intentionally open for drainage, then closed surgically days later after infection resolves.\n\n### Wound Dehiscence vs Wound Evisceration\n* **Dehiscence:** Partial or total separation of surgical wound incision margins without protrusion of internal organs.\n* **Evisceration (SURGICAL EMERGENCY):** Total separation of wound layers with **PROTRUSION OF INTERNAL VISCERA / BOWEL** through the incision!\n* **Emergency Nursing Actions for Evisceration:**\n  1. Stay with patient and call for urgent surgical help.\n  2. Place patient in **Low Fowler's Position ($15°–30°$) with knees flexed** (relieves intra-abdominal tension).\n  3. **Cover protruding bowel immediately with STERILE DRESSINGS SOAKED IN WARM STERILE NORMAL SALINE**!\n  4. Never attempt to push protruding organs back into the abdominal cavity!\n  5. Keep patient strictly NPO for immediate operating room transfer.",
                                              "clinicalPearl": "CRITICAL EVISCERATION RULE: Cover protruding viscera with sterile saline-soaked gauze and place patient in Low Fowler position with knees bent! Never push organs back inside!",
                                              "normalValues": [
                                                    {
                                                          "label": "Position for Wound Evisceration",
                                                          "value": "Low Fowler's (15–30°) with knees flexed"
                                                    },
                                                    {
                                                          "label": "Dressing for Eviscerated Bowel",
                                                          "value": "Sterile gauze soaked in sterile Normal Saline"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q92"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_safety_06",
                "title": "Hospital Infection Control, Standard Precautions & Isolation Types",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_6_1",
                            "order": 1,
                            "title": "Phase 1: Standard & Transmission-Based Isolation Precautions",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_601",
                                        "label": "Standard Precautions, Transmission Precautions & Negative Pressure Rooms",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Contact vs Droplet vs Airborne Isolation Guidelines",
                                              "markdownContent": "### Transmission-Based Isolation Precautions Matrix\n* **Airborne Precautions (Pathogens: TB, Measles, Varicella/Chickenpox):**\n  - Requires **Negative Pressure Isolation Room** with ≥ 12 air exchanges per hour.\n  - Healthcare workers must wear a fit-tested **N95 Respirator** before entering room. Door must remain closed.\n* **Droplet Precautions (Pathogens: Influenza, Meningococcal meningitis, Pertussis, Rubella, Mumps):**\n  - Droplets $> 5\\ \\mum$ travel $< 3 feet$ (1 meter).\n  - Wear a surgical mask when within 3–6 feet of patient. Dedicated equipment.\n* **Contact Precautions (Pathogens: MRSA, VRE, *Clostridioides difficile*, Scabies):**\n  - Gown and gloves required upon entering room. Dedicated stethoscope/BP cuff.\n  - **Special Rule for *C. difficile*:** Alcohol-based hand rubs do NOT kill spores! **Hand washing with soap and water is MANDATORY**!",
                                              "clinicalPearl": "Alcohol hand rubs DO NOT kill Clostridioides difficile spores! Hand washing with soap and water is mandatory after caring for a C. difficile patient.",
                                              "normalValues": [
                                                    {
                                                          "label": "Airborne Room Negative Pressure Exchanges",
                                                          "value": "≥ 12 air changes per hour"
                                                    },
                                                    {
                                                          "label": "Standard Alcohol Hand Rub Duration",
                                                          "value": "20 to 30 seconds until dry"
                                                    },
                                                    {
                                                          "label": "Surgical Hand Scrub Duration",
                                                          "value": "3 to 5 minutes"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q11"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_6_2",
                            "order": 2,
                            "title": "Phase 2: CDC Stepwise PPE Donning & Doffing Sequences",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_602",
                                        "label": "CDC Stepwise PPE Donning & Doffing Hierarchy Sequences",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "CDC Personal Protective Equipment Protocols",
                                              "markdownContent": "### CDC PPE Donning Sequence (Putting On - Bottom to Top Principle)\n1. **Gown:** Fully cover torso from neck to knees, arms to end of wrists; tie in back.\n2. **Mask or Respirator (N95):** Secure ties/bands; fit flexible nose band over nose bridge.\n3. **Goggles or Face Shield:** Place over face/eyes and adjust to fit.\n4. **Gloves:** Extend gloves to cover wrist of isolation gown.\n\n### CDC PPE Doffing Sequence (Taking Off - Alphabetical / Most Contaminated First)\n* *Gloves and gown front are the most heavily contaminated!*\n1. **Gloves:** Grasp outside edge with opposite gloved hand, peel off, hold in remaining hand, slide bare finger under wrist of second glove, and peel off inside out.\n2. **Goggles / Face Shield:** Remove from back by headband without touching front.\n3. **Gown:** Unfasten ties; pull away from neck and shoulders touching inside of gown only; turn inside out and fold into bundle.\n4. **Mask / Respirator (REMOVED LAST):** Grasp bottom ties, then top ties, and pull away from face without touching front of mask. Perform immediate hand hygiene!",
                                              "clinicalPearl": "PPE Doffing Memory Rule: Alphabetical order = G-G-G-M (Gloves, Goggles, Gown, Mask). Mask/Respirator is ALWAYS removed LAST, outside the patient's room for airborne precautions!",
                                              "normalValues": [
                                                    {
                                                          "label": "Last PPE Item Removed",
                                                          "value": "Mask / N95 Respirator"
                                                    },
                                                    {
                                                          "label": "First PPE Item Removed",
                                                          "value": "Gloves (most contaminated)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q11"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_meds_07",
                "title": "Medication Administration Protocols, 10 Rights & Injection Routes",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_7_1",
                            "order": 1,
                            "title": "Phase 1: 10 Rights of Medication & Injection Angles (ID, SC, IM)",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_701",
                                        "label": "The 10 Rights of Drug Administration & Parenteral Injection Angles",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Parenteral Injection Depths, Angles & Needle Specifications",
                                              "markdownContent": "### The 10 Rights of Medication Administration\n1. Right Patient (2 identifiers: Full Name + Date of Birth / Hospital ID)\n2. Right Medication (Check label 3 times)\n3. Right Dose\n4. Right Route\n5. Right Time / Frequency\n6. Right Documentation (immediately after administration, never before!)\n7. Right Reason / Indication\n8. Right Assessment (e.g. check apical pulse before Digoxin)\n9. Right Response / Evaluation\n10. Right to Refuse (educate on risks, notify doctor, document refusal)\n\n### Parenteral Injection Angle & Needle Gauge Matrix\n\n| Route | Needle Angle | Needle Gauge | Needle Length | Volume Limit | Standard Clinical Sites |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Intradermal (ID)** | **10° to 15°** (Bevel UP, produce wheal) | 25G to 27G | 3/8 to 1/2 inch | **0.1 mL** | Inner aspect of forearm, upper back |\n| **Subcutaneous (SC)** | **45°** (thin patient) or **90°** (adequate fat) | 25G to 30G | 3/8 to 5/8 inch | **1.0 to 1.5 mL** | Abdomen (2 inches from umbilicus), outer aspect of upper arm, anterior thigh |\n| **Intramuscular (IM)** | **90°** (Dart-like motion) | 20G to 23G | 1 to 1.5 inches | **Ventrogluteal: 2.5–3 mL**<br>Deltoid: **1.0 mL** | Ventrogluteal (Preferred), Deltoid, Vastus lateralis (Infants) |\n| **Intravenous (IV)** | **15° to 30°** | 14G to 24G | 1 to 1.25 inches | Variable | Cephalic, Basilic, Median cubital veins |",
                                              "clinicalPearl": "When administering Intradermal injections (Mantoux / Allergy skin test), always insert needle at 10°–15° with the BEVEL FACING UP. A pale, raised wheal/bleb (6–10 mm) must appear. If no wheal forms or bleeding occurs, the injection was too deep (subcutaneous) and must be repeated at another site.",
                                              "normalValues": [
                                                    {
                                                          "label": "Intradermal Angle",
                                                          "value": "10° to 15° (Bevel UP)"
                                                    },
                                                    {
                                                          "label": "Subcutaneous Angle",
                                                          "value": "45° to 90°"
                                                    },
                                                    {
                                                          "label": "Intramuscular Angle",
                                                          "value": "90° strictly"
                                                    },
                                                    {
                                                          "label": "Deltoid Max IM Volume",
                                                          "value": "1.0 mL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_7_2",
                            "order": 2,
                            "title": "Phase 2: Ventrogluteal Landmarks, Z-Track Method & High-Alert Drugs",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_702",
                                        "label": "Ventrogluteal Anatomical Landmarks & Z-Track Intramuscular Technique",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Intramuscular Site Selection & Staining Drug Precautions",
                                              "markdownContent": "### Ventrogluteal Site (Gluteus Medius & Minimus) — Gold Standard IM Site\n* **Why Preferred:** Free of major nerves and blood vessels; thick muscle layer; lowest risk of inadvertent sciatic nerve injury or hematoma compared to dorsogluteal site.\n* **Landmarking Procedure:**\n  1. Patient in side-lying or supine position.\n  2. Place palm of hand over the **Greater Trochanter** of the femur (use right hand for left hip, left hand for right hip).\n  3. Point index finger toward the **Anterior Superior Iliac Spine (ASIS)**.\n  4. Spread middle finger posteriorly along the iliac crest toward the buttock, forming a **\"V\" shape**.\n  5. The injection site is **the center of the triangle (\"V\") formed between the index and middle fingers**.\n\n### The Z-Track Technique for Irritating / Staining Drugs\n* **Indications:** Iron Dextran, Haloperidol, Hydroxyzine (prevents tracking of medication into subcutaneous tissue and permanent skin staining).\n* **Stepwise Procedure:**\n  1. Pull the overlying skin and subcutaneous tissue firmly **1 to 1.5 inches (2.5–3.8 cm) laterally** to one side.\n  2. Insert needle at **90°** into deep muscle.\n  3. Aspirate for 5–10 seconds (if blood appears, discard needle/syringe and start over).\n  4. Inject drug slowly (10 sec/mL), then **WAIT 10 SECONDS** before withdrawing needle to allow medication to disperse.\n  5. Withdraw needle smoothly and **simultaneously release the displaced skin**.\n  6. **NEVER MASSAGE THE INJECTION SITE!** Massaging forces medication into subcutaneous tissue.",
                                              "clinicalPearl": "CRITICAL Z-TRACK RULES: 1. Pull skin 1–1.5 inches to the side before insertion. 2. Wait 10 seconds after injecting before withdrawing needle. 3. NEVER massage the site after Z-track injection!",
                                              "normalValues": [
                                                    {
                                                          "label": "Z-Track Skin Displacement Distance",
                                                          "value": "1 to 1.5 inches (2.5–3.8 cm)"
                                                    },
                                                    {
                                                          "label": "Post-Injection Needle Pause Time",
                                                          "value": "10 seconds before withdrawal"
                                                    },
                                                    {
                                                          "label": "Vastus Lateralis Landmark",
                                                          "value": "Middle third of anterolateral thigh (Preferred in infants < 1 year)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_vitals_08",
                "title": "Vital Signs Monitoring, Thermoregulation & Blood Pressure Errors",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_8_1",
                            "order": 1,
                            "title": "Phase 1: Core vs Surface Temperature, Fever Patterns & Pulse Deficit",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_801",
                                        "label": "Core vs Surface Temperature, Fever Patterns & Apical-Radial Pulse Deficit",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Thermoregulation Alterations & Cardiac Pulse Discrepancies",
                                              "markdownContent": "### Core vs Surface Temperature Landmarks\n* **Core Sites:** Rectal, Tympanic membrane, Pulmonary artery catheter, Esophageal, Bladder. Rectal temperature is **0.5°C (1°F) HIGHER than oral**.\n* **Surface Sites:** Axillary, Oral, Forehead (temporal artery). Axillary temperature is **0.5°C (1°F) LOWER than oral**.\n* **Rectal Thermometer Contraindications:** Neonates/infants (risk of rectal perforation), neutropenic/thrombocytopenic patients (risk of sepsis/bleeding), cardiac patients (stimulates vagus nerve → reflex bradycardia).\n\n### Classic Clinical Fever Patterns\n* **Intermittent Fever:** Temperature returns to normal at least once in 24 hours (e.g. Malaria, Sepsis).\n* **Remittent Fever:** Temperature fluctuates widely ($> 2°C$ range) but **NEVER returns to normal** during the day (e.g. Infective Endocarditis).\n* **Continuous / Sustained Fever:** Temperature remains consistently elevated with minimal fluctuations ($< 1°C$) (e.g. Typhoid enteric fever with classic 'step-ladder' rise).\n\n### Apical-Radial Pulse Deficit Assessment\n* Indicates that cardiac contractions are ineffective and failing to transmit a peripheral pulse wave (common in **Atrial Fibrillation**).\n* **Technique:** Requires **TWO NURSES assessing simultaneously for 1 full minute**: Nurse 1 auscultates the Apical pulse at the 5th intercostal space midclavicular line; Nurse 2 palpates the Radial pulse.\n* Formula: $$Pulse Deficit = Apical Pulse Rate - Radial Pulse Rate$$\n* The apical pulse will **always be greater than or equal to** the radial pulse!",
                                              "clinicalPearl": "Pulse Deficit = Apical Pulse MINUS Radial Pulse. Assessed simultaneously by two nurses for 1 full minute. Apical can never be lower than radial pulse.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Body Temperature",
                                                          "value": "36.5°C to 37.5°C (97.7°F to 99.5°F)"
                                                    },
                                                    {
                                                          "label": "Rectal Temp Discrepancy",
                                                          "value": "0.5°C (1°F) higher than oral"
                                                    },
                                                    {
                                                          "label": "Axillary Temp Discrepancy",
                                                          "value": "0.5°C (1°F) lower than oral"
                                                    },
                                                    {
                                                          "label": "Normal Adult Pulse Rate",
                                                          "value": "60 to 100 bpm"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_8_2",
                            "order": 2,
                            "title": "Phase 2: Blood Pressure Measurement Errors & Korotkoff Sounds",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_802",
                                        "label": "Blood Pressure Cuff Sizing Rules & Common Measurement Errors",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "AHA Sphygmomanometer Sizing & Erroneous Reading Pitfalls",
                                              "markdownContent": "### Sphygmomanometer Cuff Sizing Standards (AHA)\n* **Cuff Width:** Must equal **40% of the upper arm circumference** (or 2/3 of upper arm length).\n* **Cuff Bladder Length:** Must encircle at least **80% to 100% of the arm circumference** in adults.\n\n### High-Yield Blood Pressure Measurement Errors Matrix\n\n| Technical Error | Impact on Blood Pressure Reading | Clinical Mechanism |\n| :--- | :--- | :--- |\n| **Cuff Too NARROW / Too Small** | **FALSELY HIGH (Elevated)** | Requires excessive balloon pressure to compress the underlying brachial artery |\n| **Cuff Too WIDE / Too Large** | **FALSELY LOW** | Spreads pressure over too broad an area |\n| **Cuff Wrapped Too LOOSELY** | **FALSELY HIGH** | Balloon balloons outwards before exerting pressure on artery |\n| **Arm Positioned BELOW Heart Level** | **FALSELY HIGH** | Adds hydrostatic fluid column pressure (+2 mmHg for every inch below heart) |\n| **Arm Positioned ABOVE Heart Level** | **FALSELY LOW** | Hydrostatic pressure decreases reading |\n| **Deflating Cuff Too RAPIDLY (>2–3 mmHg/sec)** | **Falsely Low Systolic / Falsely High Diastolic** | Misses true first Korotkoff sound |\n| **Re-inflating Cuff Immediately without Full Deflation** | **Falsely High Diastolic** | Venous congestion traps blood in forearm |\n\n### The Auscultatory Gap\n* Temporary disappearance of Korotkoff sounds between Phase I and Phase II during cuff deflation (common in hypertensive patients with arterial stiffness).\n* **Prevention:** Always determine the **Palpatory Systolic Pressure** first (inflate until radial pulse disappears, add 30 mmHg, then auscultate) to avoid underestimating systolic BP!",
                                              "clinicalPearl": "Memory Rule: Too NARROW or LOOSE cuff = Falsely HIGH BP! Too WIDE cuff = Falsely LOW BP! Arm BELOW heart = Falsely HIGH! Arm ABOVE heart = Falsely LOW!",
                                              "normalValues": [
                                                    {
                                                          "label": "Ideal Cuff Bladder Width",
                                                          "value": "40% of arm circumference"
                                                    },
                                                    {
                                                          "label": "Ideal Cuff Bladder Length",
                                                          "value": "80% to 100% of arm circumference"
                                                    },
                                                    {
                                                          "label": "Safe Deflation Rate",
                                                          "value": "2 to 3 mmHg per second"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_pos_09",
                "title": "Patient Positioning, Ergonomics, Immobility & Pre/Post-Op Nursing",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_9_1",
                            "order": 1,
                            "title": "Phase 1: Therapeutic Patient Positions (Fowler's, Trendelenburg, Sims, Lithotomy)",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_901",
                                        "label": "Therapeutic Patient Positions & Clinical Procedural Indications",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Surgical, Diagnostic & Postural Drainage Positions",
                                              "markdownContent": "### Master Clinical Positioning Guide\n* **Semi-Fowler's (30° to 45°):** Used for enteral tube feeding (prevents aspiration), mechanical ventilation (VAP prevention bundle), increased ICP reduction, and paracentesis.\n* **High-Fowler's (60° to 90°):** Severe dyspnea, acute pulmonary edema, asthma, NG tube insertion, and thoracic surgery recovery (maximizes lung expansion).\n* **Orthopneic Position (Tripod):** Sitting upright leaning forward over an overbed table padded with pillows. Relieves severe respiratory distress in COPD and acute pericarditis.\n* **Trendelenburg (Head Lower than Feet):** Promotes venous return during acute shock/hypotension; used during central venous catheter (CVC) insertion into internal jugular or subclavian vein to prevent air embolism and distend neck veins.\n* **Reverse Trendelenburg (Head Higher than Feet):** Gastroesophageal reflux disease (GERD) and surgical access to upper abdomen/neck.\n* **Sims' (Semi-Prone):** Patient lies on left side with right knee and hip flexed. **Position of choice for Enema administration, rectal temperature, and colonoscopy**.\n* **Lithotomy Position:** Supine with hips and knees flexed and legs in stirrups. Used for childbirth, gynecological exams, and cystoscopy.\n* **Prone Position:** Severe ARDS (improves dorsal lung ventilation-perfusion matching), post-lumbar puncture recovery, and myelomeningocele care.",
                                              "clinicalPearl": "CVC Insertion Position = Trendelenburg! Why? Gravitational pooling engorges the internal jugular/subclavian veins making puncture easier, and creates positive thoracic venous pressure that PREVENTS fatal air embolism during catheter threading.",
                                              "normalValues": [
                                                    {
                                                          "label": "Semi-Fowler Angle",
                                                          "value": "30° to 45°"
                                                    },
                                                    {
                                                          "label": "High Fowler Angle",
                                                          "value": "60° to 90°"
                                                    },
                                                    {
                                                          "label": "Low Fowler Angle",
                                                          "value": "15° to 30°"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_9_2",
                            "order": 2,
                            "title": "Phase 2: Complications of Immobility, DVT Prophylaxis & Informed Consent",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_902",
                                        "label": "Deep Vein Thrombosis (Virchow's Triad), SCD Pumps & Legal Informed Consent",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Immobility Hazards, DVT Prevention & Surgical Informed Consent",
                                              "markdownContent": "### Immobility & Virchow's Triad of Thrombogenesis\n1. **Venous Stasis:** Slowed blood flow from immobility, bed rest, long flights.\n2. **Endothelial Vascular Injury:** Surgery, trauma, IV catheter irritation.\n3. **Hypercoagulability:** Malignancy, dehydration, estrogen/OCP use, sepsis.\n\n### DVT Prevention & Nursing Interventions\n* Early ambulation (most effective intervention), sequential compression devices (SCD), graduated compression stockings (TED hose), and subcutaneous LMWH (Enoxaparin).\n* **CRITICAL DVT RULE:** If a patient is suspected of acute DVT (unilateral calf swelling, warmth, tenderness, positive Homans' sign): **MAINTAIN BED REST AND NEVER MASSAGE THE CALF!** Massaging the calf will dislodge the thrombus, triggering a fatal Pulmonary Embolism.\n\n### Legal Requirements of Surgical Informed Consent\n* The operating **surgeon is legally responsible for explaining the procedure, risks, alternatives, and expected outcomes**.\n* The **NURSE's role is strictly as a WITNESS**:\n  1. Verifying that the patient is alert, competent, and oriented.\n  2. Confirming that the patient gave consent voluntarily without coercion.\n  3. Verifying that the signature is authentic.\n* If the patient states they do not understand the surgery or has questions about alternative procedures, the nurse **MUST NOT ATTEMPT TO EXPLAIN THE SURGERY**! The nurse must notify the surgeon to return to the bedside to re-explain before the patient signs!",
                                              "clinicalPearl": "The nurse witnesses the SIGNATURE, not the medical explanation! If a patient has doubts or doesn't understand the surgical risks, HOLD the consent and summon the operating surgeon back to the bedside.",
                                              "normalValues": [
                                                    {
                                                          "label": "SCD Daily Wear Time",
                                                          "value": "At least 18 to 20 hours/day"
                                                    },
                                                    {
                                                          "label": "Post-Op Ambulation Goal",
                                                          "value": "Same day / within 24 hours"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_cpr_10",
                "title": "Cardiopulmonary Resuscitation (BLS / ACLS), Defibrillation & Crash Cart",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_10_1",
                            "order": 1,
                            "title": "Phase 1: Adult BLS Stepwise Algorithm & High-Quality CPR Metrics",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_1001",
                                        "label": "Adult Basic Life Support (AHA BLS 2020) Stepwise Emergency Sequence",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Recognition, Compressions & High-Quality Resuscitation",
                                              "markdownContent": "### AHA BLS Sequence (C-A-B Sequence)\n1. **Scene Safety:** Ensure scene is safe.\n2. **Check Responsiveness:** Tap shoulders and shout \"Are you OK?\".\n3. **Simultaneous Pulse & Breathing Check (Strictly 5 to 10 Seconds):**\n   - Palpate **Carotid Pulse** with 2 fingers while looking at chest for breathing/gasping.\n   - If no pulse and no normal breathing (or agonal gasps only) → Call for help / activate code blue and fetch AED/defibrillator!\n4. **Initiate High-Quality Chest Compressions Immediately:**\n   - Hand Placement: Lower half of the sternum (between nipples).\n   - Compression Rate: **100 to 120 compressions per minute**.\n   - Compression Depth: **At least 2 inches (5 cm) but no more than 2.4 inches (6 cm)**.\n   - Allow **complete chest recoil** between compressions (allows ventricular refill).\n   - Minimize interruptions in compressions (limit pauses to $< 10 seconds$).\n   - Compression-to-Ventilation Ratio: **30 : 2** (30 compressions followed by 2 breaths lasting 1 second each with visible chest rise).",
                                              "clinicalPearl": "Switch chest compressors every 2 minutes (or every 5 cycles of 30:2) to avoid compressor fatigue! Compressor fatigue sets in after 1–2 minutes, drastically degrading compression depth and cardiac output.",
                                              "normalValues": [
                                                    {
                                                          "label": "BLS Adult Compression Rate",
                                                          "value": "100 to 120 compressions/min"
                                                    },
                                                    {
                                                          "label": "BLS Adult Compression Depth",
                                                          "value": "2.0 to 2.4 inches (5 to 6 cm)"
                                                    },
                                                    {
                                                          "label": "Compression : Ventilation Ratio (Adult 1 or 2 Rescuers)",
                                                          "value": "30 : 2"
                                                    },
                                                    {
                                                          "label": "Pulse Check Duration",
                                                          "value": "Strictly 5 to 10 seconds"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_10_2",
                            "order": 2,
                            "title": "Phase 2: Shockable (VF/pVT) vs Non-Shockable (PEA/Asystole) & Defibrillation",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_1002",
                                        "label": "ACLS Arrest Rhythm Differentiation, Defibrillation Energy & Vasopressors",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Shockable vs Non-Shockable Rhythms & Defibrillator Safety",
                                              "markdownContent": "### ACLS Cardiac Arrest Rhythm Classification\n* **SHOCKABLE RHYTHMS (Require Immediate Defibrillation):**\n  1. **Ventricular Fibrillation (VF):** Chaotic, disorganized wavy baseline without identifiable QRS complexes.\n  2. **Pulseless Ventricular Tachycardia (pVT):** Rapid, wide, monomorphic or polymorphic ventricular complexes without a palpable pulse.\n  - **Defibrillation Energy:**\n    - Biphasic Defibrillator: **120 to 200 Joules** (or manufacturer specific).\n    - Monophasic Defibrillator: **360 Joules**.\n    - Immediately resume CPR (30:2) for **2 minutes** after delivering shock without pausing to check pulse or rhythm!\n* **NON-SHOCKABLE RHYTHMS (DO NOT SHOCK — Defibrillation is Fatal/Useless!):**\n  1. **Asystole (\"Flatline\"):** Complete absence of electrical activity (confirm in 2 leads!).\n  2. **Pulseless Electrical Activity (PEA):** Organized rhythm on monitor but no palpable pulse.\n  - **Management:** High-quality CPR + **Epinephrine 1 mg IV/IO every 3 to 5 minutes** + search for reversible causes (5 H's and 5 T's: Hypovolemia, Hypoxia, Hydrogen ion acidosis, Hypo/hyperkalemia, Hypothermia; Tension pneumothorax, Tamponade cardiac, Toxins, Thrombosis pulmonary, Thrombosis coronary).",
                                              "clinicalPearl": "CRITICAL DEFIBRILLATOR SAFETY: Always shout 'ALL CLEAR!' and visually sweep the room from head to toe to verify that NO ONE is touching the patient, bed, or IV pole before pressing the shock button! Immediately resume chest compressions after shock delivery.",
                                              "normalValues": [
                                                    {
                                                          "label": "Biphasic Shock Energy",
                                                          "value": "120 to 200 Joules"
                                                    },
                                                    {
                                                          "label": "Monophasic Shock Energy",
                                                          "value": "360 Joules"
                                                    },
                                                    {
                                                          "label": "ACLS Epinephrine Dose",
                                                          "value": "1 mg IV/IO every 3 to 5 minutes"
                                                    },
                                                    {
                                                          "label": "Amiodarone 1st Dose in Refractory VF/pVT",
                                                          "value": "300 mg IV bolus (2nd dose 150 mg)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_fon_ethics_11",
                "title": "Nursing Ethics, Legal Aspects, Torts & SBAR Documentation",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_fon_11_1",
                            "order": 1,
                            "title": "Phase 1: Ethical Principles (Beneficence, Autonomy, Justice) & Torts",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_1101",
                                        "label": "Ethical Principles, Intentional vs Unintentional Torts & Malpractice",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Legal Liability, Standards of Care & Bioethical Frameworks",
                                              "markdownContent": "### Core Bioethical Principles in Nursing\n* **Autonomy:** Respecting the patient's right to self-determination and independent decision-making (e.g. right to refuse treatment).\n* **Beneficence:** Duty to do good and act in the best interest of the patient.\n* **Non-Maleficence:** The fundamental duty to **\"Do No Harm\"** (protecting patients from danger).\n* **Justice:** Fairness and equal distribution of healthcare resources regardless of socioeconomic status.\n* **Fidelity:** Faithfulness, keeping promises, and upholding professional commitments.\n* **Veracity:** The obligation to tell the truth and not deceive patients.\n\n### Legal Torts in Nursing Practice\n* **Unintentional Torts:**\n  - **Negligence:** Performing an act that a reasonably prudent nurse would not do, or failing to perform an act that a prudent nurse would do.\n  - **Malpractice (Professional Negligence):** Requires 4 legal elements:\n    1. *Duty:* Nurse owed a professional duty of care to the patient.\n    2. *Breach of Duty:* Nurse failed to meet the standard of care.\n    3. *Injury / Harm:* Patient suffered physical or psychological harm.\n    4. *Causation (Proximate Cause):* The breach of duty directly caused the patient's injury.\n* **Intentional Torts:**\n  - **Assault:** A threat or attempt to make bodily contact without consent that puts the victim in reasonable apprehension of immediate harm (e.g. \"If you don't take this pill, I will restrain you!\").\n  - **Battery:** Actual, intentional, unconsented, unlawful touching of another person (e.g. administering an injection after the competent patient explicitly refused it, or surgical procedure without consent).\n  - **False Imprisonment:** Unjustified retention or confinement of a competent patient against their will without legal warrant (e.g. applying physical restraints without a valid medical prescription).",
                                              "clinicalPearl": "Threatening a patient = ASSAULT! Actually touching or injecting a patient without consent = BATTERY! Applying unauthorized physical restraints = FALSE IMPRISONMENT!",
                                              "normalValues": [
                                                    {
                                                          "label": "Four Elements of Malpractice",
                                                          "value": "Duty, Breach, Harm, Causation"
                                                    },
                                                    {
                                                          "label": "Physical Restraint Prescription Window",
                                                          "value": "Must be renewed every 24 hours by physician"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q92"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_fon_11_2",
                            "order": 2,
                            "title": "Phase 2: SBAR Structured Interprofessional Handoff Communication",
                            "bulletPoints": [
                                  {
                                        "id": "bp_fon_1102",
                                        "label": "SBAR (Situation, Background, Assessment, Recommendation) Framework",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Standardized Shift Handoff & Physician Escalation Format",
                                              "markdownContent": "### SBAR Standardized Communication Architecture\nEndorsed by WHO and The Joint Commission to prevent miscommunication during patient handoffs and emergency physician calls:\n* **S - Situation (What is happening right now?):**\n  - State your name, hospital unit, patient's name, room number, and the immediate urgent problem.\n  - *Example:* \"Dr. Sharma, this is Nurse Anita in ICU Bed 4. I am calling because Mr. Patel's blood pressure has dropped to 80/50 mmHg with an acute decrease in urine output.\"\n* **B - Background (What is the clinical context?):**\n  - State admission diagnosis, date of surgery/admission, relevant medical history, and brief summary of treatment received so far.\n  - *Example:* \"He is Post-Op Day 1 following an open abdominal aortic aneurysm repair. He has received 2 units of packed RBCs.\"\n* **A - Assessment (What do I think the problem is?):**\n  - State current vital signs, physical exam findings, and clinical judgment of severity.\n  - *Example:* \"Heart rate is 125 bpm, BP is 80/50, urine output is only 10 mL over the last 2 hours. His abdomen is distended and tense, and he appears pale and diaphoretic. I suspect active retroperitoneal bleeding.\"\n* **R - Recommendation (What do I need from you?):**\n  - State specific request, required orders, or timeframe for physician bedside attendance.\n  - *Example:* \"I recommend you come evaluate him immediately. Should I order a stat hemoglobin and cross-match 2 additional units of PRBCs, and start a normal saline bolus?\"",
                                              "clinicalPearl": "SBAR ensures that the nurse does not just report numbers, but provides a synthesis: Situation → Background → Assessment → Specific actionable Recommendation.",
                                              "normalValues": [
                                                    {
                                                          "label": "SBAR Sequence",
                                                          "value": "Situation, Background, Assessment, Recommendation"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q92"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          }
    ]
  },
  {
    "id": "subj_msn_02",
    "name": "Medical-Surgical Nursing (Adult Health)",
    "code": "MSN-102",
    "iconName": "Activity",
    "weightagePercentage": 25,
    "color": "#0284c7",
    "subtopics": [
          {
                "id": "sub_msn_cv_01",
                "title": "Cardiovascular Disorders: ACS (STEMI/NSTEMI), 12-Lead ECG & Heart Failure",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_1_1",
                            "order": 1,
                            "title": "Phase 1: Acute Coronary Syndrome & Infarct Localization by ECG Leads",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_101",
                                        "label": "STEMI vs NSTEMI Differential, 12-Lead ECG Leads & Infarct Localization",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Coronary Artery Topography & ST-Elevation Patterns",
                                              "markdownContent": "### Infarct Localization by ECG Leads & Culprit Arteries\n* **Anterior Wall Infarction:** Leads **V3, V4** (Left Anterior Descending - LAD artery, \"Widow maker\").\n* **Septal Wall Infarction:** Leads **V1, V2** (LAD branch).\n* **Anteroseptal Infarction:** Leads **V1 through V4** (Proximal LAD).\n* **Lateral Wall Infarction:** Leads **I, aVL, V5, V6** (Left Circumflex Artery - LCx).\n* **Inferior Wall Infarction:** Leads **II, III, aVF** (Right Coronary Artery - RCA in 90%).\n  - *Exam Rule:* In inferior wall MI, ALWAYS obtain Right-Sided ECG (Lead V4R) to check for Right Ventricular Infarction. In RV infarction, **Nitroglycerin is STRICTLY CONTRAINDICATED** because it causes severe venodilation, drops RV preload, and precipitates profound fatal shock!\n* **Posterior Wall Infarction:** Horizontal ST-depression and tall R-waves in **V1, V2**; ST-elevation in **V7, V8, V9**.",
                                              "clinicalPearl": "Inferior Wall MI (Leads II, III, aVF) = Never administer Nitroglycerin or Morphine without ruling out RV involvement! RV depends on preload; Nitroglycerin drops preload and causes cardiac arrest.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal PR Interval",
                                                          "value": "0.12 to 0.20 seconds (3 to 5 small boxes)"
                                                    },
                                                    {
                                                          "label": "Normal QRS Duration",
                                                          "value": "< 0.12 seconds (< 3 small boxes)"
                                                    },
                                                    {
                                                          "label": "Normal QTc Interval",
                                                          "value": "< 0.44 seconds in males, < 0.46 in females"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12",
                                                    "AIIMS_NORCET_2024_S1_Q03"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_msn_102",
                                        "label": "Cardiac Biomarkers (Troponin I/T, CK-MB, Myoglobin) Release Kinetics",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Enzyme Rise, Peak & Normalization Kinetics",
                                              "markdownContent": "### Cardiac Enzyme Timeline Matrix\n* **Myoglobin:** Rises earliest (**1 to 2 hours**), peaks at 6–8 hours, normalizes within **24 hours**. Sensitive early marker, but non-specific (present in skeletal muscle).\n* **Cardiac Troponin I (cTnI) & Troponin T (cTnT):**\n  - **Gold Standard & Most Specific Marker for Myocardial Necrosis**.\n  - Rises at **3 to 4 hours**, peaks at **12 to 24 hours**.\n  - Remains elevated for **10 to 14 days** (Troponin T up to 14 days; Troponin I for 7–10 days).\n* **CK-MB (Creatine Kinase-Myocardial Band):**\n  - Rises at **4 to 6 hours**, peaks at **18 to 24 hours**, normalizes in **48 to 72 hours (2–3 days)**.\n  - **Marker of Choice for Diagnosing RE-INFARCTION** occurring a few days after an initial MI (since Troponin is still elevated).",
                                              "clinicalPearl": "For diagnosing a RE-INFARCTION within 3 to 7 days of an acute MI, order CK-MB! Troponin remains elevated for up to 14 days and cannot differentiate old necrosis from a new event.",
                                              "normalValues": [
                                                    {
                                                          "label": "Troponin I Normal Baseline",
                                                          "value": "< 0.04 ng/mL"
                                                    },
                                                    {
                                                          "label": "CK-MB Normal Baseline",
                                                          "value": "< 5 ng/mL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_1_2",
                            "order": 2,
                            "title": "Phase 2: Acute Clinical Management of ACS, MONA & Heart Failure",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_103",
                                        "label": "MONA Protocol, PCI Timelines & Acute Pulmonary Edema Management",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Emergency Department Resuscitation & Flash Pulmonary Edema",
                                              "markdownContent": "### Initial ACS Management (MONA / FONA Protocol)\n1. **Morphine Sulfate:** 2 to 4 mg IV slowly for persistent pain (reduces myocardial oxygen demand; venodilator).\n2. **Oxygen:** Indicated **ONLY if $SpO_2 < 90%$** or in respiratory distress.\n3. **Nitroglycerin (NTG):** Sublingual 0.4 mg tablet or spray every 5 minutes (max 3 doses). Check BP before each dose; hold if systolic $BP < 90 mmHg$ or if patient took Sildenafil/Tadalafil within 24–48 hours!\n4. **Aspirin (Non-enteric coated):** **162 to 325 mg CHEWED** immediately for rapid buccal absorption.\n\n### Reperfusion Therapy Timelines\n* **Primary Percutaneous Coronary Intervention (PCI):** **Door-to-Balloon Time < 90 minutes**.\n* **Thrombolytic Therapy (Alteplase, Tenecteplase):** **Door-to-Needle Time < 30 minutes**.\n\n### Acute Decompensated Heart Failure (Flash Pulmonary Edema)\n* Symptoms: Severe orthopnea, air hunger, tachypnea, pink frothy sputum, bilateral crackles.\n* Management (LMNOP): **L**asix (Furosemide 40–80 mg IV bolus), **M**orphine (relieves pulmonary congestion), **N**itrates (venodilation), **O**xygen (BiPAP), **P**osition (High Fowler's with legs dangling over edge of bed to trap venous blood in lower limbs and reduce venous return).",
                                              "clinicalPearl": "Positioning for Flash Pulmonary Edema: Place patient in High-Fowler's position with LEGS DANGLING over the side of the bed! Gravitational pooling in legs reduces preload (venous return) to the overburdened left ventricle.",
                                              "normalValues": [
                                                    {
                                                          "label": "Door-to-Balloon Time (PCI)",
                                                          "value": "< 90 minutes"
                                                    },
                                                    {
                                                          "label": "Door-to-Needle Time (Lytic)",
                                                          "value": "< 30 minutes"
                                                    },
                                                    {
                                                          "label": "B-Type Natriuretic Peptide (BNP)",
                                                          "value": "< 100 pg/mL (Normal) | > 400 pg/mL (Heart Failure)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q12"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_neuro_02",
                "title": "Neurological Emergencies: GCS, Increased ICP, Brain Herniation & Stroke",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_2_1",
                            "order": 1,
                            "title": "Phase 1: Glasgow Coma Scale (GCS) & Increased ICP Nursing Care",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_201",
                                        "label": "Glasgow Coma Scale (GCS 3–15) Calculation & Intubation Threshold",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Eye Opening, Verbal Response & Motor Response Scoring",
                                              "markdownContent": "### Glasgow Coma Scale (GCS) Matrix (Range: 3 to 15)\n* **Eye Opening (E - Max 4):** 4 = Spontaneous, 3 = To voice, 2 = To pressure/pain, 1 = None.\n* **Verbal Response (V - Max 5):** 5 = Oriented, 4 = Confused, 3 = Inappropriate words, 2 = Incomprehensible sounds, 1 = None.\n* **Motor Response (M - Max 6):** 6 = Obeys commands, 5 = Localizes to pain, 4 = Normal flexion/withdrawal, 3 = **Decorticate Posturing (Abnormal flexion, cortical damage)**, 2 = **Decerebrate Posturing (Abnormal extension, midbrain/brainstem damage; worse prognosis)**, 1 = Flaccid / None.",
                                              "clinicalPearl": "GOLDEN AIRWAY RULE: 'GCS of 8, Intubate!' A patient with GCS ≤ 8 has lost protective airway reflexes; immediate endotracheal intubation is mandatory.",
                                              "normalValues": [
                                                    {
                                                          "label": "Maximum GCS",
                                                          "value": "15"
                                                    },
                                                    {
                                                          "label": "Minimum GCS",
                                                          "value": "3"
                                                    },
                                                    {
                                                          "label": "Intubation Cutoff",
                                                          "value": "GCS ≤ 8"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q22"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_msn_202",
                                        "label": "Increased ICP, Cushing's Triad & Mannitol / Hypertonic Saline Care",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Monro-Kellie Doctrine & Herniation Syndromes",
                                              "markdownContent": "### Monro-Kellie Hypothesis & Normal ICP\n* Normal ICP is **5 to 15 mmHg**. Treatment initiated if $ICP > 20 mmHg$.\n* **Cerebral Perfusion Pressure (CPP):** $$CPP = MAP - ICP$$ (Normal: 60 to 80 mmHg).\n\n### Cushing's Triad (Late Sign of Brainstem Herniation)\n1. **Severe Systolic Hypertension with WIDENED Pulse Pressure** (e.g. 210/60 mmHg).\n2. **Profound Bradycardia** (e.g. HR 40 bpm).\n3. **Irregular, Bradypneic Respirations** (Cheyne-Stokes breathing).\n*(Compare with Shock: Low BP + Tachycardia + Tachypnea).*\n\n### Nursing Interventions to Lower ICP\n* Elevate HOB strictly to **30°** with head in **neutral midline position** (promotes jugular venous drainage).\n* Hyperosmolar Therapy: **Mannitol 20% (0.5 to 1.0 g/kg IV)** with 5-micron in-line filter over 20–30 min.",
                                              "clinicalPearl": "Cushing's Triad = High Systolic BP with Wide Pulse Pressure + Low HR + Slow/Irregular RR.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal ICP",
                                                          "value": "5 to 15 mmHg"
                                                    },
                                                    {
                                                          "label": "Normal CPP Target",
                                                          "value": "60 to 80 mmHg"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q22"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_2_2",
                            "order": 2,
                            "title": "Phase 2: Ischemic vs Hemorrhagic Stroke, tPA Protocol & Autonomic Dysreflexia",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_203",
                                        "label": "Ischemic Stroke (tPA Recombinant Tissue Plasminogen Activator Window)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Thrombolytic Eligibility & Blood Pressure Control in Acute CVA",
                                              "markdownContent": "### Acute Ischemic Stroke Management & IV Alteplase (tPA)\n* **Golden Window for IV tPA (Alteplase 0.9 mg/kg, max 90 mg):** Must be infused within **strictly 3 to 4.5 hours of LAST KNOWN NORMAL** symptom onset!\n* **Blood Pressure Parameters for tPA:**\n  - BP must be **$< 185/110 mmHg$** before starting tPA, and maintained **$< 180/105 mmHg$** for 24 hours post-infusion to prevent fatal hemorrhagic transformation!\n  - Antihypertensives of choice: **IV Labetalol or Nicardipine**.\n* **Absolute tPA Contraindications:** Active internal bleeding, intracranial hemorrhage on non-contrast CT, head trauma or stroke within 3 months, platelets $< 100,000$, INR $> 1.7$.\n\n### Autonomic Dysreflexia (Hyperreflexia) in Spinal Cord Injury (T6 and Above)\n* Life-threatening uninhibited sympathetic discharge occurring in spinal cord injury at or above **T6**.\n* **Precipitating Triggers:** **Full/distended urinary bladder** (kinked Foley, #1 cause in 85%), fecal impaction, tight clothing/pressure ulcer.\n* **Signs:** Severe pounding headache, massive hypertension (e.g. 220/110 mmHg), profuse sweating and flushing **ABOVE the level of lesion**, and cold pale skin with goosebumps **BELOW the level of lesion**. Profound bradycardia (30–40 bpm).\n* **MANDATORY FIRST NURSING ACTIONS:**\n  1. **Immediately elevate the Head of Bed to 90° (High-Fowler's)** with legs dangling (uses gravity to induce postural hypotension and lower cranial BP).\n  2. Check and relieve urinary bladder distension (unkink catheter or perform immediate straight catheterization).\n  3. Loosen constrictive clothing; check for bowel impaction.",
                                              "clinicalPearl": "Autonomic Dysreflexia First Action: Immediately sit the patient UP in HIGH FOWLER'S (90°) with legs down to induce postural venous pooling and lower BP! Then immediately check the Foley catheter for kinks or obstruction.",
                                              "normalValues": [
                                                    {
                                                          "label": "tPA Thrombolysis Window",
                                                          "value": "Within 3 to 4.5 hours of onset"
                                                    },
                                                    {
                                                          "label": "Pre-tPA Max Safe Blood Pressure",
                                                          "value": "< 185/110 mmHg"
                                                    },
                                                    {
                                                          "label": "Autonomic Dysreflexia Vulnerability",
                                                          "value": "Spinal cord injury at or above T6"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q22"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_burns_03",
                "title": "Burn Resuscitation: Rule of Nines, Parkland Crystalloid Formula & Wound Care",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_3_1",
                            "order": 1,
                            "title": "Phase 1: Wallace Rule of Nines & Parkland Formula Budgeting",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_301",
                                        "label": "Wallace Rule of Nines for TBSA & Parkland Fluid Resuscitation",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "24-Hour Resuscitation Calculations & Urine Output Endpoints",
                                              "markdownContent": "### Wallace Rule of Nines (Adult TBSA %)\n* Head & Neck: **9%** (4.5% ant, 4.5% post)\n* Anterior Trunk (Chest + Abdomen): **18%**\n* Posterior Trunk (Back + Buttocks): **18%**\n* Each Upper Extremity: **9%** (Both arms = 18%)\n* Each Lower Extremity: **18%** (Both legs = 36%)\n* Perineum: **1%**\n*(Note: 1st-degree superficial erythema is EXCLUDED from TBSA calculation!).*\n\n### Parkland (Baxter) Fluid Resuscitation Formula\n* **Total Volume of Ringer's Lactate in First 24 Hours:**\n  $$Total 24-hr Fluid (mL) = 4 mL \\times Weight (kg) \\times \\%TBSA$$\n* **Fluid Delivery Schedule:**\n  - **First 8 Hours:** Deliver **50% (Half)** of total volume (calculated from **EXACT TIME OF INJURY**, not hospital admission!).\n  - **Next 16 Hours:** Deliver remaining **50%** (25% in 2nd 8 hrs, 25% in 3rd 8 hrs).\n* **Fluid of Choice:** **Ringer's Lactate (RL)**.\n* **Adequacy Endpoint:** **Urine Output is gold standard: 0.5 to 1.0 mL/kg/hr** (30 to 50 mL/hr in adults). In electrical burns: 75–100 mL/hr.",
                                              "clinicalPearl": "The 8-hour clock for Parkland fluid starts from the TIME OF INJURY, NOT hospital arrival! If burned at 10 AM and arrives at 12 PM, half the fluid must be infused over the remaining 6 hours.",
                                              "normalValues": [
                                                    {
                                                          "label": "Fluid of Choice in Burns",
                                                          "value": "Ringer's Lactate (RL)"
                                                    },
                                                    {
                                                          "label": "Adult Burn Target Urine Output",
                                                          "value": "0.5 to 1.0 mL/kg/hr (30–50 mL/hr)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q22"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_3_2",
                            "order": 2,
                            "title": "Phase 2: Inhalation Injury, Carbon Monoxide Poisoning & Burn Sepsis",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_302",
                                        "label": "Inhalation Airway Injury Signs & Carbon Monoxide (CO) Carboxyhemoglobin",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Airway Edema Warning Signs & 100% Hyperbaric Oxygen Therapy",
                                              "markdownContent": "### Clinical Signs of Inhalation Injury (Enclosed Space Fire)\n* Facial burns, singed nasal hairs, soot in sputum/oropharynx, hoarseness, brassy cough, and stridor.\n* **MANDATORY ACTION:** Immediate **prophylactic endotracheal intubation** before progressive supraglottic edema completely closes the airway!\n\n### Carbon Monoxide (CO) Poisoning\n* CO binds hemoglobin with **200 times higher affinity than oxygen**, forming **Carboxyhemoglobin (COHb)** and shifting oxygen-hemoglobin curve left.\n* **Classic Signs:** Headache, dizziness, cherry-red skin (late/rare sign).\n* **CRITICAL DIAGNOSTIC TRAP:** **Standard pulse oximeter reads FALSELY NORMAL or 100%**! Pulse oximeters cannot differentiate oxyhemoglobin from carboxyhemoglobin. Measure arterial COHb via co-oximeter.\n* **Treatment:** **100% Oxygen via Non-Rebreather Face Mask** (reduces CO half-life from 4 hours to 40 minutes) or Hyperbaric Oxygen chamber.",
                                              "clinicalPearl": "Pulse oximetry is completely useless in carbon monoxide poisoning! It will read 99%–100% SpO2 despite lethal tissue hypoxia. Administer 100% O2 via non-rebreather mask immediately.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Carboxyhemoglobin Level",
                                                          "value": "< 2% in non-smokers (< 5–10% in smokers)"
                                                    },
                                                    {
                                                          "label": "Toxic Carboxyhemoglobin Level",
                                                          "value": "> 15% (Symptoms) | > 50% (Lethal)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q22"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_resp_04",
                "title": "Mechanical Ventilation Alarms, Chest Tube Drainage & ARDS Mechanics",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_4_1",
                            "order": 1,
                            "title": "Phase 1: Critical Care Respiratory Mechanics & Ventilator Alarms",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_401",
                                        "label": "Mechanical Ventilator High vs Low Pressure Alarms & Troubleshooting",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Airway Obstruction vs Disconnection Alarms",
                                              "markdownContent": "### High-Pressure vs Low-Pressure Ventilator Alarms\n* **HIGH-PRESSURE ALARM (Resistance / Obstruction to Airflow):**\n  - Causes: Secretions/mucus plugging (suction needed), biting ET tube (insert bite block), kinked tubing, bronchospasm, patient coughing/bucking ventilator, Tension Pneumothorax.\n* **LOW-PRESSURE ALARM (Leak / Disconnection):**\n  - Causes: Tubing disconnected from ET tube or machine, cuff deflated/leaking (air sounds around mouth), accidental extubation.\n* **Golden Nursing Priority:** If an alarm sounds and the problem cannot be immediately resolved, **DISCONNECT PATIENT AND MANUALLY VENTILATE WITH 100% O2 USING A RESUSCITATION BAG (AMBU BAG)**!",
                                              "clinicalPearl": "Never silence a ventilator alarm without fixing the cause! If in doubt, disconnect the ventilator and manually ventilate with 100% O2 using an Ambu bag.",
                                              "normalValues": [
                                                    {
                                                          "label": "ET Tube Cuff Pressure",
                                                          "value": "20 to 30 cm H2O (prevents tracheal ischemia)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_4_2",
                            "order": 2,
                            "title": "Phase 2: Three-Chamber Chest Drainage Systems & ARDS Berlin Criteria",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_402",
                                        "label": "Water-Seal Chest Drainage Systems, Air Leaks & ARDS Prone Positioning",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Tidaling vs Air Leaks & Prone Ventilation in ARDS",
                                              "markdownContent": "### 3-Chamber Water-Seal Chest Drainage Mechanics\n1. **Collection Chamber:** Collects fluid/blood. Notify doctor if drainage is **$> 100 mL/hr$** or suddenly turns bright red.\n2. **Water-Seal Chamber (2 cm Sterile Water):**\n   - **Tidaling (Fluctuation):** Normal rise and fall with breathing. Absence means lung is fully re-expanded or tube is obstructed.\n   - **Bubbling:** **CONTINUOUS BUBBLING indicates an AIR LEAK** in the drainage system!\n3. **Suction Control Chamber (-20 cm H2O):** **Gentle continuous bubbling is NORMAL** here.\n* **Dislodgement Protocols:**\n  - Tube disconnects from drainage unit → Submerge distal open end into **2 to 4 cm of sterile water/saline** (recreates water seal).\n  - Tube pulled out of chest wall → Cover site with **sterile occlusive gauze taped on THREE SIDES ONLY** (prevents tension pneumothorax).\n\n### Acute Respiratory Distress Syndrome (ARDS) & Prone Positioning\n* **Berlin Criteria:** Acute onset within 1 week, bilateral infiltrates on chest X-ray not fully explained by heart failure, and refractory hypoxemia with $PaO_2 / FiO_2 le 300 mmHg$ on PEEP ≥ 5 cm H_2O.\n* **Prone Positioning (16 hours/day):** Dramatically improves oxygenation by recruiting atelectatic dorsal alveoli and optimizing ventilation-perfusion matching.",
                                              "clinicalPearl": "Accidental chest tube pull-out = Tape dressing on 3 SIDES ONLY! Accidental unit disconnection = Submerge tube end in sterile water!",
                                              "normalValues": [
                                                    {
                                                          "label": "Excessive Drainage Trigger",
                                                          "value": "> 100 mL/hr"
                                                    },
                                                    {
                                                          "label": "Water Seal Level",
                                                          "value": "2 cm sterile water"
                                                    },
                                                    {
                                                          "label": "ARDS Severe Hypoxemia Ratio",
                                                          "value": "PaO2 / FiO2 ≤ 100 mmHg"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_endo_05",
                "title": "Endocrine Emergencies: DKA vs HHS, Diabetes Insipidus vs SIADH & Thyroid Storm",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_5_1",
                            "order": 1,
                            "title": "Phase 1: Hyperglycemic Crises: DKA vs HHS Resuscitation",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_501",
                                        "label": "Diabetic Ketoacidosis (DKA) vs Hyperosmolar Hyperglycemic State (HHS)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Ketone Pathology, Serum Osmolality & IV Regular Insulin Titration",
                                              "markdownContent": "### DKA vs HHS Diagnostic Matrix\n* **DKA (Type 1 DM):** Glucose 250–600 mg/dL, strongly positive ketones, metabolic acidosis ($pH < 7.30, HCO_3 < 18 mEq/L$), high anion gap ($> 12$), Kussmaul respirations, fruity breath.\n* **HHS (Type 2 DM):** Glucose $> 600 mg/dL$ (often $> 1000$), negative ketones, normal pH, severe hyperosmolality ($> 320 mOsm/kg$).\n* **Potassium Safety Rule:** **NEVER start insulin if Serum Potassium is $< 3.3 mEq/L$**! Insulin shifts potassium into cells, precipitating fatal cardiac arrest.\n* **Dextrose Switch:** When glucose drops to **200 mg/dL in DKA** (or 250–300 mg/dL in HHS), **ADD 5% DEXTROSE (D5W)** to IV fluids while continuing insulin infusion to prevent cerebral edema!",
                                              "clinicalPearl": "When glucose reaches 200 mg/dL in DKA, ADD 5% Dextrose while continuing insulin until the anion gap closes! Never stop insulin early.",
                                              "normalValues": [
                                                    {
                                                          "label": "Safe Potassium for Insulin",
                                                          "value": "≥ 3.3 mEq/L"
                                                    },
                                                    {
                                                          "label": "Glucose Threshold to Add Dextrose",
                                                          "value": "200 mg/dL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_5_2",
                            "order": 2,
                            "title": "Phase 2: Diabetes Insipidus vs SIADH & Thyroid Storm / Myxedema Coma",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_502",
                                        "label": "Diabetes Insipidus vs SIADH & Thyroid Storm Emergency Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Endocrine Hormone Emergencies & Thyrotoxic Crisis",
                                              "markdownContent": "### Diabetes Insipidus (DI) vs SIADH\n* **DI (ADH Deficiency):** Massive dilute polyuria (4–20 L/day), specific gravity $< 1.005$, hypernatremia ($> 145 mEq/L$). Rx: Desmopressin (DDAVP).\n* **SIADH (Excess ADH):** Water retention, oliguria, high urine specific gravity ($> 1.030$), dilutional hyponatremia ($< 135 mEq/L$). Rx: Fluid restriction (500–1000 mL/day), 3% Hypertonic Saline. Correct sodium slowly ($< 8–10 mEq/L/24hr$) to avoid Central Pontine Myelinolysis!\n\n### Thyroid Storm (Thyrotoxic Crisis) vs Myxedema Coma\n* **Thyroid Storm:** Extreme hypermetabolic state: Hyperthermia ($> 40°C$), severe tachycardia ($> 140 bpm$), delirium, atrial fibrillation.\n  - *Rx Hierarchy:* **Propylthiouracil (PTU)** (blocks hormone synthesis and peripheral T4 to T3 conversion) → wait 1 hour → **Lugol's Iodine / Potassium Iodide** (Wolff-Chaikoff effect) → **Propranolol** (controls tachycardia) → **Hydrocortisone**.\n  - *CRITICAL ALERT:* **NEVER give Aspirin for fever in thyroid storm!** Aspirin displaces thyroid hormone from thyroid-binding globulin, drastically increasing free active T3/T4 and worsening the storm. Give Paracetamol and cooling blankets.\n* **Myxedema Coma:** Extreme hypothyroid state: Severe hypothermia, bradycardia, hypoventilation, non-pitting periorbital edema, coma. Rx: IV Levothyroxine (T4) + IV Hydrocortisone.",
                                              "clinicalPearl": "NEVER administer Aspirin in Thyroid Storm! Aspirin displaces thyroid hormone from plasma proteins, flooding the blood with free T3/T4 and worsening the crisis. Use Paracetamol only.",
                                              "normalValues": [
                                                    {
                                                          "label": "Urine Specific Gravity in DI",
                                                          "value": "< 1.005 (Dilute)"
                                                    },
                                                    {
                                                          "label": "Urine Specific Gravity in SIADH",
                                                          "value": "> 1.030 (Concentrated)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_renal_06",
                "title": "Renal Disorders: AKI RIFLE Criteria, Chronic Kidney Disease & Dialysis Protocols",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_6_1",
                            "order": 1,
                            "title": "Phase 1: Acute Kidney Injury (RIFLE Criteria) & AV Fistula Safeguards",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_601",
                                        "label": "Acute Kidney Injury (RIFLE Criteria) & AV Fistula Vascular Safeguards",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Prerenal vs Intrarenal vs Postrenal & Vascular Access Protection",
                                              "markdownContent": "### Etiological Classification of Acute Kidney Injury (AKI)\n* **Prerenal AKI (60%):** Hypoperfusion (dehydration, shock, sepsis, heart failure). $BUN : Creatinine > 20 : 1$; Fractional Excretion of Sodium (FENa) $< 1\\%$. Rapidly reversible with IV fluids!\n* **Intrarenal AKI (35%):** Acute Tubular Necrosis (ATN) due to ischemia or nephrotoxic drugs (Aminoglycosides, Vancomycin, NSAIDs, IV iodinated contrast). FENa $> 2\\%$; muddy brown granular casts in urine.\n* **Postrenal AKI (5%):** Mechanical obstruction (BPH, calculi, pelvic tumors).\n\n### Hemodialysis AV Fistula Safeguards\n* **Patency Assessment (Every Shift):**\n  - Auscultate for a **Bruit** (swishing sound).\n  - Palpate for a **Thrill** (buzzing vibration).\n  - Absence indicates acute thrombosis → surgical emergency!\n* **STRICT VASCULAR ACCESS RESTRICTIONS:**\n  - **NEVER check Blood Pressure on the arm with an AV fistula!**\n  - **NEVER draw blood or start IV lines on the fistula arm!**\n  - Post prominent warning over bed: **\"RESTRICTED EXTREMITY - NO BP / NO NEEDLESTICKS\"**.",
                                              "clinicalPearl": "Vascular Access Protection: The arm with an AV fistula must NEVER have blood pressure taken, IV lines inserted, or blood drawn! External compression destroys the fistula.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Serum Creatinine",
                                                          "value": "0.6 to 1.2 mg/dL"
                                                    },
                                                    {
                                                          "label": "Normal BUN",
                                                          "value": "7 to 20 mg/dL"
                                                    },
                                                    {
                                                          "label": "ESRD GFR Cutoff",
                                                          "value": "< 15 mL/min/1.73 m²"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q67"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_6_2",
                            "order": 2,
                            "title": "Phase 2: Peritoneal Dialysis Peritonitis & Severe Hyperkalemia Protocols",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_602",
                                        "label": "Peritoneal Dialysis Peritonitis Signs & Lethal Hyperkalemia ECG Changes",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Dialysate Inspection & Emergency Potassium Shift Protocols",
                                              "markdownContent": "### Peritoneal Dialysis (PD) & Peritonitis\n* **Earliest Hallmark Sign:** **CLOUDY / TURBID DIALYSATE EFFLUENT** (normally crystal clear pale yellow).\n* Accompanied by fever, abdominal pain, and rebound tenderness. Send effluent for cell count (WBC $> 100/µL$ with $> 50\\%$ neutrophils is diagnostic).\n\n### Emergency Management of Severe Hyperkalemia ($K^+ > 6.0 mEq/L$)\n* **ECG Changes:** Tall peaked T-waves → prolonged PR → flat P → wide QRS → sine wave → VFib / Asystole.\n* **Stepwise Emergency Treatment:**\n  1. **Myocardial Membrane Stabilization:** **10% Calcium Gluconate (10 mL IV over 2–3 min)**. Does NOT lower potassium, but immediately protects heart from fatal arrhythmias!\n  2. **Intracellular Potassium Shift:** **Regular Insulin 10 Units IV PLUS 50 mL of 50% Dextrose (D50W)** over 15–30 minutes ± nebulized Salbutamol (10–20 mg).\n  3. **Elimination:** Sodium Polystyrene Sulfonate (Kayexalate), IV Furosemide, or Emergent Hemodialysis.",
                                              "clinicalPearl": "In severe hyperkalemia with tall peaked T waves, the FIRST drug given is 10% Calcium Gluconate IV! It stabilizes the cardiac membrane within 1–3 minutes to prevent immediate ventricular arrest.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Serum Potassium",
                                                          "value": "3.5 to 5.0 mEq/L"
                                                    },
                                                    {
                                                          "label": "Hyperkalemia Emergency Cutoff",
                                                          "value": "> 6.5 mEq/L or any ECG change"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q67"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_gi_07",
                "title": "Gastrointestinal & Hepatic Failure: Cirrhosis, Varices, Pancreatitis & Obstruction",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_7_1",
                            "order": 1,
                            "title": "Phase 1: Hepatic Encephalopathy, Asterixis & Sengstaken-Blakemore Tube Safety",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_701",
                                        "label": "Hepatic Encephalopathy, Asterixis & Lactulose Titration Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Ammonia Neurotoxicity & Sengstaken-Blakemore Tube Safety",
                                              "markdownContent": "### Liver Cirrhosis & Hepatic Encephalopathy\n* Neurotoxic ammonia ($NH_3$) crosses blood-brain barrier.\n* **Clinical Hallmarks:** **Asterixis (\"Flapping Tremor\")**, Fetor Hepaticus (musty breath), altered sleep-wake cycle, confusion.\n* **Pharmacological Management:**\n  - **Lactulose:** Acidifies colon ($pH < 5$), converting lipophilic ammonia ($NH_3$) into non-absorbable ammonium ions ($NH_4^+$) trapped in stool.\n  - **Titration Goal:** Titrate lactulose dosage to achieve **2 to 3 soft acidic bowel movements per day**!\n\n### Bleeding Esophageal Varices & Sengstaken-Blakemore Tube Safety Mandate\n* Emergency drug: **IV Octreotide** (splanchnic vasoconstrictor).\n* **CRITICAL NURSING SAFETY RULE:** **A PAIR OF SCISSORS MUST ALWAYS BE KEPT AT THE BEDSIDE!** If the gastric balloon accidentally ruptures or deflates, the tube migrates upward into the oropharynx, completely occluding the airway. The nurse must **IMMEDIATELY CUT ALL THREE LUMENS OF THE TUBE** across to instantaneously deflate both balloons and pull the tube out!",
                                              "clinicalPearl": "CRITICAL BEDSIDE RULE: When a patient has a Sengstaken-Blakemore tube in place, a pair of scissors must be taped to the head of the bed at all times! If the patient suddenly develops respiratory distress or stridor, immediately CUT the tube to instantly deflate the balloons and clear the airway.",
                                              "normalValues": [
                                                    {
                                                          "label": "Target Daily Stool Frequency on Lactulose",
                                                          "value": "2 to 3 soft bowel movements per day"
                                                    },
                                                    {
                                                          "label": "Normal Serum Ammonia",
                                                          "value": "15 to 45 µg/dL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q87"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_7_2",
                            "order": 2,
                            "title": "Phase 2: Acute Pancreatitis (Lipase vs Amylase, Cullen's/Grey Turner's Signs)",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_702",
                                        "label": "Acute Pancreatitis Cullen's & Grey Turner's Signs, Lipase vs Amylase",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Autodigestion Necrosis & Calcium Saponification",
                                              "markdownContent": "### Acute Pancreatitis Biomarkers & Physical Signs\n* **Serum Lipase:** **Most sensitive and specific biomarker**! Remains elevated for **8 to 14 days** (Amylase normalizes in 3–5 days).\n* **Physical Examination Hallmark Signs:**\n  - Severe piercing epigastric pain radiating to the **BACK**, relieved by **sitting up and leaning forward or assuming a fetal position**.\n  - **Cullen's Sign:** Bluish periumbilical ecchymosis (retroperitoneal blood tracking along falciform ligament).\n  - **Grey Turner's Sign:** Bluish ecchymosis in the flanks.\n* **Nursing Priorities:** Strictly NPO, NG decompression, aggressive IV Ringer's Lactate hydration, hypocalcemia surveillance (fat saponification binds calcium; check Chvostek's & Trousseau's signs).",
                                              "clinicalPearl": "Serum Lipase is superior to Amylase for acute pancreatitis: Lipase is produced almost exclusively by the pancreas, stays elevated for up to 2 weeks, and has higher clinical sensitivity.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Serum Lipase",
                                                          "value": "0 to 160 U/L"
                                                    },
                                                    {
                                                          "label": "Hypocalcemia Emergency Trigger",
                                                          "value": "Total Calcium < 7.0 mg/dL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_ortho_08",
                "title": "Musculoskeletal Emergencies: Fractures, Traction Care & Compartment Syndrome",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_8_1",
                            "order": 1,
                            "title": "Phase 1: The 5 Ps of Compartment Syndrome, Emergency Bivalving & Fasciotomy",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_801",
                                        "label": "Compartment Syndrome (The 5 Ps) & Emergency Decompression Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Intra-Compartmental Pressure Dynamics & Ischemic Necrosis",
                                              "markdownContent": "### Pathophysiology & The 5 P's of Compartment Syndrome\nIncreased tissue pressure within a non-distensible fascial compartment impairs capillary perfusion, causing irreversible muscle and nerve ischemia within **4 to 6 hours**:\n1. **PAIN (EARLIEST & MOST IMPORTANT SIGN):** Severe, disproportionate pain unrelieved by increasing doses of opioids, dramatically exacerbated by **PASSIVE STRETCHING** of involved muscles!\n2. **PARESTHESIA (EARLY SENSORY SIGN):** \"Pins and needles\", numbness, tingling along nerve distribution.\n3. **PALLOR / POIKILOTHERMIA:** Pale, cold extremity with sluggish capillary refill.\n4. **PARALYSIS (LATE SIGN):** Inability to move digits (indicates advanced muscle necrosis).\n5. **PULSELESSNESS (VERY LATE / OMINOUS SIGN):** Absence of distal arterial pulse (indicates irreversible gangrene).\n\n### Emergency Nursing Interventions\n* **DO NOT ELEVATE THE EXTREMITY ABOVE HEART LEVEL!** Elevating above heart reduces arterial perfusion pressure, worsening compartment ischemia. Keep extremity at **heart level**!\n* **DO NOT APPLY COLD COMPRESSES / ICE PACKS!** Cold induces vasoconstriction, worsening tissue hypoperfusion.\n* **Immediate Decompression:** Loosen constrictive dressings; **Bivalve the cast** (cut cast and padding down both sides).\n* **Definitive Treatment:** Urgent **Emergency Surgical Fasciotomy** if intracompartmental pressure is **$> 30 mmHg$**.",
                                              "clinicalPearl": "CRITICAL COMPARTMENT RULES: 1. Earliest sign is PAIN with passive muscle stretch! 2. NEVER elevate the limb above heart level! 3. NEVER apply ice! 4. Prepare for emergency Fasciotomy if pressures exceed 30 mmHg.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Compartment Pressure",
                                                          "value": "0 to 8 mmHg"
                                                    },
                                                    {
                                                          "label": "Fasciotomy Threshold Pressure",
                                                          "value": "> 30 mmHg (or within 30 mmHg of diastolic BP)"
                                                    },
                                                    {
                                                          "label": "Irreversible Muscle Ischemia Window",
                                                          "value": "4 to 6 hours"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_8_2",
                            "order": 2,
                            "title": "Phase 2: Skeletal vs Skin (Buck's) Traction Care & Fat Embolism Syndrome Triad",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_802",
                                        "label": "Buck's Traction vs Skeletal Pin Site Care & Fat Embolism Syndrome Triad",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Traction Alignment Rules & Long Bone Fat Embolism Triad",
                                              "markdownContent": "### Skin Traction (Buck's Extension) vs Skeletal Traction\n* **Buck's Skin Traction:** Uses boots/straps applied to skin with weights (**5 to 8 lbs / 2.3–3.6 kg**). Used for temporary stabilization and muscle spasm relief in hip/femur fractures before surgery.\n* **Skeletal Traction:** Pins (Steinmann pin / Kirschner wire) inserted directly through bone with weights (**15 to 30 lbs / 6.8–13.6 kg**).\n* **MANDATORY TRACTION CARE RULES:**\n  1. **WEIGHTS MUST HANG FREELY AT ALL TIMES!** Weights must never touch the floor, bed frame, or rest on a chair.\n  2. **NEVER REMOVE OR LIFT WEIGHTS WITHOUT A PHYSICIAN'S ORDER**, unless intermittent traction is prescribed.\n  3. Ensure ropes are unobstructed in pulley grooves.\n  4. Pin Site Care: Clean skeletal pin sites daily using sterile chlorhexidine or normal saline; look for infection signs (erythema, purulent drainage).\n\n### Fat Embolism Syndrome (FES) in Long Bone / Pelvic Fractures\n* Fat globules released from bone marrow cavity into venous circulation 24 to 72 hours post-injury.\n* **Classic Clinical Triad:**\n  1. **Respiratory Distress / Hypoxemia:** Dyspnea, tachypnea, acute hypoxia, bilateral \"snowstorm\" infiltrates on chest X-ray.\n  2. **Neurological Changes:** Restlessness, confusion, agitation, encephalopathy.\n  3. **Petechial Rash (PATHOGNOMONIC SIGN):** Pinpoint petechial hemorrhages across **anterior chest, neck, axillae, and conjunctiva** (caused by fat emboli occluding capillaries).",
                                              "clinicalPearl": "PETECHIAL RASH across the chest, neck, and axillae 24–48 hours after a femur or pelvic fracture is pathognomonic for FAT EMBOLISM SYNDROME! Differentiates FES from pulmonary embolism.",
                                              "normalValues": [
                                                    {
                                                          "label": "Buck's Skin Traction Weight Limit",
                                                          "value": "5 to 8 lbs (2.3–3.6 kg)"
                                                    },
                                                    {
                                                          "label": "Skeletal Traction Weight Limit",
                                                          "value": "15 to 30 lbs (6.8–13.6 kg)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_heme_09",
                "title": "Hematological Disorders: Anemias, Thrombocytopenia (ITP/HIT) & DIC",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_9_1",
                            "order": 1,
                            "title": "Phase 1: Iron Deficiency vs Megaloblastic Anemias & Sickle Cell Crisis Vaso-Occlusion",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_901",
                                        "label": "Microcytic vs Macrocytic Anemias & Sickle Cell Pain Crisis Resuscitation",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Red Blood Cell Indices & Vaso-Occlusive Sickle Crises",
                                              "markdownContent": "### Differential Diagnosis by Mean Corpuscular Volume (MCV)\n* **Microcytic Hypochromic ($MCV < 80 fL$):**\n  - **Iron Deficiency Anemia (IDA):** Low ferritin ($< 15 ng/mL$), high Total Iron Binding Capacity (TIBC). Physical signs: Koilonychia (spoon nails), angular cheilitis, pica. Oral iron administration: Take on an empty stomach with **Vitamin C / Orange Juice** (enhances absorption); never take with milk, tea, or antacids! Warn patient of dark green/black stools.\n  - **Thalassemia:** Normal/high ferritin, target cells on peripheral smear.\n* **Macrocytic Megaloblastic ($MCV > 100 fL$):**\n  - **Vitamin B12 Deficiency (Pernicious Anemia):** Lack of Intrinsic Factor from gastric parietal cells. Causes **Neurological Deficits** (subacute combined degeneration of spinal cord, paresthesias, ataxia) + beefy red smooth tongue (glossitis). Positive Schilling test. Requires lifelong IM cyanocobalamin injections.\n  - **Folate Deficiency:** Similar megaloblastic anemia but **NO neurological symptoms**.\n\n### Sickle Cell Vaso-Occlusive Pain Crisis (HOP Protocol)\nSickled rigid deoxygenated RBCs clump in microvasculature, causing acute ischemia and excruciating bone/joint pain:\n1. **H - HYDRATION (FIRST PRIORITY):** Aggressive IV fluids ($0.45 or 0.9\\% NS$) to dilute sickled cells and reverse microvascular sludging.\n2. **O - OXYGENATION:** Administer O2 to reverse hypoxemia and prevent further RBC sickling.\n3. **P - PAIN RELIEF:** Continuous IV opioids (Morphine or Hydromorphone via PCA pump). Never withhold opioids!",
                                              "clinicalPearl": "Vitamin B12 deficiency causes NEUROLOGICAL symptoms (paresthesias, numbness, ataxia); Folate deficiency does NOT! Administering folate to a B12-deficient patient resolves the anemia but allows irreversible spinal cord degeneration to progress.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal MCV",
                                                          "value": "80 to 100 fL"
                                                    },
                                                    {
                                                          "label": "Normal Serum Ferritin",
                                                          "value": "15 to 200 ng/mL"
                                                    },
                                                    {
                                                          "label": "Normal Hemoglobin (Male / Female)",
                                                          "value": "13.5–17.5 g/dL / 12.0–15.5 g/dL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_9_2",
                            "order": 2,
                            "title": "Phase 2: Heparin-Induced Thrombocytopenia (HIT), Hemophilia & DIC",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_902",
                                        "label": "Heparin-Induced Thrombocytopenia (HIT), Hemophilia & DIC Consumption Coagulopathy",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Thrombosis Paradoxes & Coagulation Cascade Deficiencies",
                                              "markdownContent": "### Heparin-Induced Thrombocytopenia (HIT Type II)\n* Immune-mediated reaction: Antibodies form against **Platelet Factor 4 (PF4)-Heparin complexes**, causing massive platelet activation and paradoxical **WIDESPREAD THROMBOSIS** (White Clot Syndrome).\n* **Clinical Trigger:** A **$> 50%$ drop in platelet count** occurring **5 to 10 days** after starting heparin.\n* **MANDATORY ACTIONS:**\n  1. **IMMEDIATELY STOP ALL HEPARIN** (including heparin flushes)!\n  2. **NEVER ADMINISTER PLATELET TRANSFUSIONS** (fuels further thrombosis)!\n  3. Start a non-heparin direct thrombin inhibitor (**Argatroban or Fondaparinux**).\n\n### Hemophilia A vs Hemophilia B\n* X-linked recessive bleeding disorders:\n  - **Hemophilia A:** Deficiency of **Factor VIII (8)** (Classic, 85%).\n  - **Hemophilia B (Christmas Disease):** Deficiency of **Factor IX (9)** (15%).\n* **Hallmark:** Hemarthrosis (bleeding into joints, knee/elbow). Management during acute bleed: **RICE** (Rest, Ice, Compression, Elevation) + immediate Factor VIII/IX replacement. **Aspirin and NSAIDs are strictly contraindicated!**\n\n### Disseminated Intravascular Coagulation (DIC)\n* Widespread microvascular thrombi consume all clotting factors and platelets, leading to massive paradoxical bleeding.\n* **Laboratory Profile:** **Elevated D-Dimer & Fibrin Degradation Products (FDP)**, **Prolonged PT/INR and aPTT**, **Low Fibrinogen ($< 100 mg/dL$)**, and **Thrombocytopenia**.",
                                              "clinicalPearl": "HIT Paradox: Heparin causes low platelets, but the main complication is NOT bleeding — it is LETHAL ARTERIAL AND VENOUS THROMBOSIS! Stop heparin immediately and never give platelets.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Platelet Count",
                                                          "value": "150,000 to 450,000 / µL"
                                                    },
                                                    {
                                                          "label": "Normal Fibrinogen",
                                                          "value": "200 to 400 mg/dL"
                                                    },
                                                    {
                                                          "label": "HIT Suspect Trigger",
                                                          "value": "> 50% drop in platelet count from baseline"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_onco_10",
                "title": "Oncology Nursing, Chemotherapy Extravasation & Oncological Emergencies",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_10_1",
                            "order": 1,
                            "title": "Phase 1: Chemotherapy Safe Handling, Vesicant Extravasation & Radiation Shielding",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1001",
                                        "label": "Chemotherapy Vesicant Extravasation Protocols & Radiation Safety",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Vesicant vs Irritant Extravasation & Radiation Time-Distance-Shielding",
                                              "markdownContent": "### Chemotherapy Vesicant Extravasation Protocol\n* **Vesicant Drugs (e.g. Doxorubicin, Vincristine, Cisplatin):** Inadvertent leakage into surrounding subcutaneous tissue causes severe blistering, tissue sloughing, and necrosis.\n* **STEPWISE EXTRAVASATION EMERGENCY ACTIONS:**\n  1. **STOP THE INFUSION IMMEDIATELY!**\n  2. Disconnect IV tubing; leave the catheter in place!\n  3. Attach a syringe to the catheter and **aspirate as much residual drug as possible**.\n  4. Administer specific antidote if available (e.g. Dexrazoxane for Anthracyclines; Hyaluronidase for Vinca alkaloids).\n  5. Remove catheter.\n  6. **Thermal Compresses:**\n     - **COLD COMPRESS:** For most vesicants (Anthracyclines / Doxorubicin) → localizes drug and reduces cellular uptake.\n     - **WARM COMPRESS:** Specifically for **Vinca Alkaloids (Vincristine, Vinblastine)** → enhances local blood flow to disperse the drug.\n\n### Internal Radiation (Brachytherapy) Safety Standards\n* **3 Cardinal Principles:** **TIME (Minimize), DISTANCE (Maximize), SHIELDING (Lead apron)**.\n* Nurse must wear a **Dosimeter Film Badge** at all times (measures cumulative radiation; do not share badge).\n* Limit bedside direct patient contact to **strictly 30 minutes per 8-hour shift**.\n* Maintain a distance of **at least 6 feet (2 meters)** from the patient when not performing direct care.\n* Private room with lead-lined walls; pregnant nurses and visitors under 18 are strictly prohibited.\n* If a radiation source (applicator/seed) is accidentally dislodged onto the bed/floor: **NEVER TOUCH WITH BARE HANDS!** Use **long-handled lead forceps** to pick it up and deposit it immediately into a **lead container** kept in the room!",
                                              "clinicalPearl": "Radiation Emergency: If a cesium implant or radioactive seed falls out, NEVER pick it up with your fingers! Use long-handled lead forceps and drop it into the lead container in the room.",
                                              "normalValues": [
                                                    {
                                                          "label": "Max Direct Radiation Contact Time",
                                                          "value": "30 minutes per 8-hour shift"
                                                    },
                                                    {
                                                          "label": "Safe Radiation Distance",
                                                          "value": "At least 6 feet (2 meters)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_10_2",
                            "order": 2,
                            "title": "Phase 2: Oncological Emergencies: Tumor Lysis Syndrome (TLS) & SVCS",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1002",
                                        "label": "Tumor Lysis Syndrome (TLS) Metabolic Tetrad & Superior Vena Cava Syndrome",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Rapid Intracellular Release & Mediastinal Vascular Compression",
                                              "markdownContent": "### Tumor Lysis Syndrome (TLS) Metabolic Tetrad\nOccurs 24 to 48 hours after starting chemotherapy for high-turnover hematological malignancies (Leukemias, Lymphomas), as massive tumor cell death releases intracellular contents into the bloodstream:\n1. **HYPERKALEMIA ($K^+ > 5.5 mEq/L$):** Immediate lethal cardiac arrhythmia risk.\n2. **HYPERPHOSPHATEMIA ($PO_4^{3-} > 4.5 mg/dL$):** Phosphate binds calcium, forming calcium phosphate crystals in renal tubules.\n3. **HYPOCALCEMIA ($Ca^{2+} < 8.5 mg/dL$):** Secondary to hyperphosphatemia → Tetany, seizures, positive Chvostek's/Trousseau's signs, prolonged QT interval.\n4. **HYPERURICEMIA (Uric Acid $> 8.0 mg/dL$):** Purine breakdown → Uric acid crystal nephropathy and acute renal failure.\n* **Prevention & Treatment:**\n  - Aggressive pre-chemotherapy IV hydration (2 to 3 L/m²/day).\n  - **Allopurinol:** Xanthine oxidase inhibitor (prevents new uric acid formation).\n  - **Rasburicase (Recombinant Urate Oxidase):** Directly degrades existing uric acid into highly soluble allantoin excreted by kidneys.\n\n### Superior Vena Cava (SVC) Syndrome\n* Compression of SVC by mediastinal tumors (small cell lung cancer, lymphoma), obstructing venous return from head, neck, and upper extremities.\n* **Signs:** **Facial and periorbital edema**, plethora (ruddy red face), distended jugular and collateral chest wall veins, dyspnea, and feeling of tightness in collar (\"Stokes' sign\").\n* **Nursing Action:** Elevate HOB (Semi-Fowler's), avoid BP/venipunctures in upper extremities, emergent radiation or chemotherapy.",
                                              "clinicalPearl": "Tumor Lysis Syndrome Tetrad Mnemonic: 'P-U-K-Ca' = High Phosphate, High Uric acid, High Potassium, LOW Calcium. Rasburicase breaks down uric acid immediately.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Serum Uric Acid",
                                                          "value": "3.5 to 7.2 mg/dL"
                                                    },
                                                    {
                                                          "label": "Normal Serum Phosphorus",
                                                          "value": "2.5 to 4.5 mg/dL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_sepsis_11",
                "title": "Infectious Emergencies: Surviving Sepsis Hour-1 Bundle & Septic/Anaphylactic Shock",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_11_1",
                            "order": 1,
                            "title": "Phase 1: Surviving Sepsis Campaign Hour-1 Bundle & Septic Shock Fluid Resuscitation",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1101",
                                        "label": "Surviving Sepsis Campaign Hour-1 Bundle & Norepinephrine Vasopressor Targets",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Stepwise Resuscitation Sequence for Severe Sepsis & Septic Shock",
                                              "markdownContent": "### Surviving Sepsis Campaign: The Hour-1 Bundle (Must Begin Within 1 Hour!)\n1. **Measure Serum Lactate Level:** Re-measure if initial lactate is $> 2 mmol/L$ (lactate $> 4 mmol/L$ indicates severe tissue hypoperfusion).\n2. **Obtain Blood Cultures PRIOR to Administering Antibiotics:** Collect at least 2 sets of blood cultures (1 aerobic, 1 anaerobic) from two different peripheral sites. Do NOT delay antibiotics by more than 45 minutes if cultures are difficult to obtain!\n3. **Administer Broad-Spectrum IV Antibiotics:** Initiate within strictly 1 hour of sepsis recognition.\n4. **Rapid Fluid Resuscitation with Crystalloids:**\n   - Administer **30 mL/kg of IV Crystalloids (Ringer's Lactate or Normal Saline)** within 3 hours for hypotension (systolic $BP < 90 mmHg$ or $MAP < 65 mmHg$) OR serum lactate ≥ 4 mmol/L.\n5. **Apply Vasopressors if Hypotensive During or After Fluid Resuscitation:**\n   - **First-Choice Vasopressor:** **NOREPINEPHRINE (Levophed)** titrated via central line to maintain **$Mean Arterial Pressure (MAP) ge 65 mmHg$**.\n   - Second-line add-on: Vasopressin (0.03 units/min) or Epinephrine.",
                                              "clinicalPearl": "Hour-1 Bundle Sequence: Draw blood cultures FIRST, then immediately hang IV broad-spectrum antibiotics! First-choice vasopressor for septic shock is NOREPINEPHRINE to keep MAP ≥ 65 mmHg.",
                                              "normalValues": [
                                                    {
                                                          "label": "Target Mean Arterial Pressure (MAP)",
                                                          "value": "≥ 65 mmHg"
                                                    },
                                                    {
                                                          "label": "Sepsis Fluid Bolus Standard",
                                                          "value": "30 mL/kg IV Crystalloid"
                                                    },
                                                    {
                                                          "label": "Normal Blood Lactate",
                                                          "value": "< 2.0 mmol/L (Severe hypoperfusion: ≥ 4.0 mmol/L)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_11_2",
                            "order": 2,
                            "title": "Phase 2: Anaphylactic Shock Emergency Protocol & Epinephrine 1:1,000 Injections",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1102",
                                        "label": "Anaphylaxis Emergency Management: Epinephrine Dosing & Airway Stabilization",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Type I IgE-Mediated Hypersensitivity & Vasodilatory Collapse",
                                              "markdownContent": "### Anaphylactic Shock Pathophysiology\nSystemic IgE-mediated degranulation of mast cells and basophils releases histamine and leukotrienes, causing widespread arteriolar vasodilation, capillary leakage, bronchospasm, and laryngeal angioedema.\n\n### Emergency Anaphylaxis Protocol\n1. **FIRST-LINE DRUG OF CHOICE: EPINEPHRINE (ADRENALINE) 1 : 1,000 (1 mg/mL)**\n   - **Dose:** **0.3 to 0.5 mg (0.3 to 0.5 mL) INTRAMUSCULAR (IM)** in the **Anterolateral Mid-Thigh (Vastus Lateralis)**!\n   - IM injection in the vastus lateralis produces significantly faster and higher peak plasma concentrations than subcutaneous injection or deltoid injection!\n   - Repeat every **5 to 15 minutes** if symptoms fail to resolve.\n2. **Airway & Oxygen:** Administer 100% O2 via non-rebreather mask; prepare for emergent intubation or surgical cricothyroidotomy if severe stridor is present.\n3. **Positioning:** Recumbent position with legs elevated (unless respiratory distress requires sitting up). Never stand or walk an anaphylactic patient (triggers sudden empty-heart syndrome and cardiac arrest).\n4. **Second-Line Adjunctive Medications (Given AFTER Epinephrine):**\n   - IV Crystalloids (1–2 L normal saline for shock).\n   - Antihistamines: Diphenhydramine (H1 blocker) + Ranitidine/Famotidine (H2 blocker).\n   - Corticosteroids: Hydrocortisone 100–200 mg IV or Methylprednisolone (prevents biphasic delayed reactions).\n   - Inhaled Salbutamol for bronchospasm.",
                                              "clinicalPearl": "FIRST ACTION IN ANAPHYLAXIS: Administer EPINEPHRINE 1:1,000 (0.3–0.5 mg IM) into the ANTEROLATERAL THIGH immediately! Never delay epinephrine to give antihistamines or hydrocortisone.",
                                              "normalValues": [
                                                    {
                                                          "label": "Anaphylaxis Epinephrine Concentration",
                                                          "value": "1 : 1,000 (1 mg/mL) strictly IM"
                                                    },
                                                    {
                                                          "label": "Adult Epinephrine IM Dose",
                                                          "value": "0.3 to 0.5 mg IM (Repeat q5–15 min)"
                                                    },
                                                    {
                                                          "label": "Pediatric Epinephrine IM Dose",
                                                          "value": "0.01 mg/kg IM (Max 0.3 mg)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_peri_12",
                "title": "Perioperative Nursing: WHO Surgical Safety Checklist & Anesthesia Complications",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_12_1",
                            "order": 1,
                            "title": "Phase 1: WHO Surgical Safety Checklist (Sign In, Time Out, Sign Out)",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1201",
                                        "label": "WHO Surgical Safety Checklist Three Phases & Surgical Site Marking",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Operating Theatre Safety & Wrong-Site Surgery Prevention",
                                              "markdownContent": "### The 3 Phases of WHO Surgical Safety Checklist\n1. **SIGN IN (Before Induction of Anesthesia):**\n   - With at least the nurse and anesthesia professional present.\n   - Confirm patient identity, surgical procedure, consent, and site marking.\n   - Check pulse oximeter on patient and functioning.\n   - Confirm known allergies, difficult airway / aspiration risk, and risk of $> 500 mL$ blood loss ($> 7 mL/kg$ in children; verify 2 large-bore IVs/fluids available).\n2. **TIME OUT (Before Skin Incision):**\n   - Entire surgical team pauses immediately before making incision.\n   - All team members introduce themselves by name and role.\n   - Verbally confirm patient identity, correct procedure, and **correct anatomical site/side**.\n   - Anticipated critical events: Surgeon reviews steps, duration, blood loss; Anesthesia team reviews patient-specific concerns; Nursing team confirms sterility indicators and equipment availability.\n   - Confirm **prophylactic antibiotic administered within 60 minutes prior to incision**.\n3. **SIGN OUT (Before Patient Leaves Operating Room):**\n   - Nurse verbally confirms name of procedure recorded, **correct instrument/sponge/needle counts**, specimen labeling with patient's name, and equipment malfunctions.\n   - Surgeon, anesthetist, and nurse review key concerns for post-op recovery.",
                                              "clinicalPearl": "TIME OUT is performed immediately BEFORE skin incision with ALL team members pausing active tasks. Prophylactic antibiotics must be completely infused within 60 minutes before surgical incision.",
                                              "normalValues": [
                                                    {
                                                          "label": "Pre-Incision Antibiotic Timing",
                                                          "value": "Within 60 minutes prior to skin incision"
                                                    },
                                                    {
                                                          "label": "Surgical Site Marking Person",
                                                          "value": "Performed by the surgeon performing the procedure"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_12_2",
                            "order": 2,
                            "title": "Phase 2: Spinal Anesthesia Post-Dural Puncture Headache & Malignant Hyperthermia",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1202",
                                        "label": "Malignant Hyperthermia (Dantrolene Protocol) & Post-Dural Puncture Headache",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Pharmacogenetic Calcium Crisis & CSF Leak Headache Relief",
                                              "markdownContent": "### Malignant Hyperthermia (MH) — Life-Threatening Anesthetic Crisis\n* Rare, autosomal dominant pharmacogenetic disorder of skeletal muscle sarcoplasmic reticulum (ryanodine receptor RYR1 mutation).\n* **Triggering Agents:** **Inhalation Anesthetics (Halothane, Isoflurane, Sevoflurane)** and depolarizing neuromuscular blocker **SUCCINYLCHOLINE**.\n* **Pathophysiology:** Uncontrolled intracellular calcium release triggers hypermetabolism, sustained muscle rigidity, and cellular breakdown.\n* **Clinical Manifestations:**\n  - **EARLIEST SIGN:** **Unexplained Hypercarbia / Rising End-Tidal CO2 ($EtCO_2$)** refractory to increased ventilation!\n  - **Masseter Muscle Spasm (Jaw Rigidity)** upon succinylcholine administration.\n  - Tachycardia, tachypnea, skin mottling.\n  - **LATE SIGN:** **Severe Hyperthermia** (core temperature rising up to **$42°C–44°C$** at a rate of 1°C–2°C every 5 minutes!).\n  - Rhabdomyolysis, hyperkalemia, metabolic acidosis, dark myoglobinuria.\n* **STEPWISE EMERGENCY MANAGEMENT:**\n  1. Immediately **STOP all triggering anesthetics and succinylcholine**!\n  2. Hyperventilate with **100% Oxygen at high flow (10 L/min)**.\n  3. **SPECIFIC ANTIDOTE:** Administer **DANTROLENE SODIUM (2.5 mg/kg IV rapid push)**. Reconstitute each 20 mg vial with 60 mL sterile water without preservative. Repeat every 5–10 min until symptoms abate (max dose 10 mg/kg).\n  4. Active cooling: Cold saline IV, bladder/stomach lavage, ice packs to axillae/groin. Stop cooling when temperature drops to **$38.5°C$** to prevent hypothermia!\n\n### Post-Dural Puncture Headache (PDPH) Post-Spinal Anesthesia\n* Leakage of CSF through dural puncture site reduces intracranial CSF pressure, causing brain to sag and traction on pain-sensitive meninges.\n* **Hallmark:** Severe fronto-occipital throbbing headache that is **dramatically worse when sitting or standing, and completely relieved by lying flat (supine)**!\n* **Management:** Bed rest in flat supine position, aggressive oral/IV hydration, oral caffeine, and definitive **Epidural Blood Patch** (injecting 15–20 mL of autologous blood into epidural space to clot and seal the dural hole).",
                                              "clinicalPearl": "EARLIEST SIGN OF MALIGNANT HYPERTHERMIA = Unexplained rise in End-Tidal CO2 (Hypercarbia), NOT fever! Fever is a late sign. Antidote is DANTROLENE SODIUM IV (2.5 mg/kg).",
                                              "normalValues": [
                                                    {
                                                          "label": "Malignant Hyperthermia Antidote",
                                                          "value": "Dantrolene Sodium 2.5 mg/kg IV initial bolus"
                                                    },
                                                    {
                                                          "label": "Dantrolene Reconstitution Liquid",
                                                          "value": "Sterile Water without bacteriostatic agent (60 mL/vial)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_sensory_13",
                "title": "Sensory Organs (Eye & ENT): Glaucoma, Cataract, Retinal Detachment & Epistaxis",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_13_1",
                            "order": 1,
                            "title": "Phase 1: Acute Angle-Closure Glaucoma vs Cataract & Retinal Detachment",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1301",
                                        "label": "Acute Angle-Closure Glaucoma Ocular Emergency vs Cataract Care",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Intraocular Pressure Spikes, Halos & Post-Op Activity Restrictions",
                                              "markdownContent": "### Acute Angle-Closure Glaucoma (OPHTHALMIC EMERGENCY!)\n* Sudden physical blockage of trabecular meshwork by peripheral iris, trapping aqueous humor. Intraocular Pressure (IOP) spikes from normal 10–21 mmHg to **$> 50 to 70 mmHg$**!\n* **Symptoms:** Severe excruciating eye and facial pain, headache, nausea/vomiting, blurred vision, **seeing colored \"halos\" or rainbow rings around lights**, and a **fixed, mid-dilated, non-reactive pupil** with steamy/cloudy cornea.\n* **Medical Management:**\n  - **Topical Miotics (Pilocarpine 1%–2%):** Constricts pupil, pulling peripheral iris away from trabecular meshwork to open drainage angle.\n  - **IV Mannitol 20% & Oral Acetazolamide (Diamox):** Decreases aqueous humor production and draws fluid from eye.\n  - **STRICT CONTRAINDICATION: MYDRIATICS (Atropine, Tropicamide) ARE ABSOLUTELY FORBIDDEN!** Mydriatics dilate the pupil, bunching iris tissue into the angle, completely causing permanent blindness within hours!\n\n### Cataract Surgery Post-Operative Patient Education\n* Extracapsular cataract extraction with intraocular lens (IOL) implant.\n* **Avoid Activities that Increase Intraocular Pressure (IOP):**\n  - Do NOT bend forward from waist (bend at knees to pick items up).\n  - Do NOT lift heavy objects ($> 10 lbs / 4.5 kg$).\n  - Do NOT cough forcefully, sneeze, blow nose, or strain during bowel movements (administer stool softeners).\n  - Sleep with protective rigid eye shield on the **UNAFFECTED SIDE** or on back (never sleep on operative side!).\n  - Severe sudden sharp eye pain indicates increased IOP or hemorrhage → notify ophthalmologist immediately!",
                                              "clinicalPearl": "CRITICAL GLAUCOMA BAN: ATROPINE and all Mydriatics/Cycloplegics are strictly BANNED in Angle-Closure Glaucoma! Dilating the pupil permanently blocks the iridocorneal drainage angle.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Intraocular Pressure (IOP)",
                                                          "value": "10 to 21 mmHg (Schiotz / Tonometry)"
                                                    },
                                                    {
                                                          "label": "Acute Glaucoma IOP Spike",
                                                          "value": "> 50 to 70 mmHg"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_msn_1302",
                                        "label": "Retinal Detachment Curtain Sign & Post-Scleral Buckle Positioning",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Separation of Neurosensory Retina & Pneumatic Retinopexy",
                                              "markdownContent": "### Retinal Detachment Pathognomonic Presentation\nSeparation of the neurosensory retina from the underlying retinal pigment epithelium:\n1. **Photopsia:** Sudden bright flashes of light.\n2. **Floaters:** Sudden appearance of hundreds of dark spots, cobwebs, or \"floating hair\" in visual field.\n3. **Painless Loss of Vision:** Classic description of a **\"dark curtain or shadow falling over the field of vision\"** starting from the periphery.\n* **Note:** Retinal detachment is **COMPLETELY PAINLESS** (retina lacks pain receptors!).\n* **Emergency Nursing Actions:** Maintain strict bed rest, bilateral eye patches to restrict eye movements, and position patient so the retinal tear is in a **dependent position** to prevent gravity from peeling retina further.",
                                              "clinicalPearl": "Painless loss of vision with a 'curtain falling over the eye' + flashes of light (photopsia) = RETINAL DETACHMENT! Always painless.",
                                              "normalValues": [
                                                    {
                                                          "label": "Pneumatic Retinopexy Posture",
                                                          "value": "Prone / Head-down position for gas bubble tamponade"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_13_2",
                            "order": 2,
                            "title": "Phase 2: Epistaxis Anterior/Posterior Nasal Packing & Meniere's Disease",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1303",
                                        "label": "Epistaxis Emergency First Aid & Anterior vs Posterior Nasal Packing",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Kiesselbach's Plexus Bleeding & Airway Obstruction Risks",
                                              "markdownContent": "### Epistaxis First-Aid Technique\n* **Anterior Epistaxis (Kiesselbach's Plexus / Little's Area):** 90% of nosebleeds.\n* **Stepwise Actions:**\n  1. Sit patient upright and **lean head SLIGHTLY FORWARD** (prevents swallowing blood into stomach or aspirating into trachea).\n  2. Pinch the **soft lower anterior part of the nose continuously for 10 to 15 minutes** with thumb and forefinger.\n  3. Instruct patient to breathe through mouth and spit out any blood that trickles into the pharynx.\n  4. Apply ice pack across bridge of nose (vasoconstriction).\n\n### Posterior Epistaxis (Woodruff's Plexus / Sphenopalatine Artery)\n* Common in older adults with atherosclerosis and severe hypertension; blood flows profusely down posterior oropharynx.\n* Requires **Posterior Nasal Packing** or double-balloon catheter (epistaxis balloon).\n* **Airway Warning:** Posterior packing can cause hypoxia, hypercapnia, and vagal bradycardia (nasopulmonary reflex). **Always keep a wire cutter / scissors and suction at the bedside**; monitor pulse oximetry continuously!",
                                              "clinicalPearl": "Epistaxis Positioning: Always lean the patient SLIGHTLY FORWARD, never tilt the head backward! Tilting backward causes blood to be swallowed (triggering vomiting) or aspirated into lungs.",
                                              "normalValues": [
                                                    {
                                                          "label": "Continuous Nasal Pinch Duration",
                                                          "value": "10 to 15 continuous minutes"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_msn_integ_14",
                "title": "Integumentary Emergencies: Stevens-Johnson Syndrome (SJS / TEN) & Psoriasis",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_msn_14_1",
                            "order": 1,
                            "title": "Phase 1: Stevens-Johnson Syndrome (SJS) vs Toxic Epidermal Necrolysis (TEN)",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1401",
                                        "label": "Stevens-Johnson Syndrome (SJS) vs Toxic Epidermal Necrolysis (TEN)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Severe Cutaneous Adverse Reactions (SCAR) & Nikolsky's Sign",
                                              "markdownContent": "### SJS vs TEN Spectrum (Drug-Induced Keratinocyte Apoptosis)\nSevere, life-threatening mucocutaneous reactions characterized by extensive epidermal necrosis and detachment:\n* **High-Risk Culprit Drugs:** **Allopurinol, Carbamazepine, Phenytoin, Lamotrigine, Sulfonamides (Cotrimoxazole), and Oxicam NSAIDs**.\n* **Classification by Body Surface Area (BSA) Epidermal Detachment:**\n  - **Stevens-Johnson Syndrome (SJS):** **$< 10%$ BSA** epidermal detachment.\n  - **SJS / TEN Overlap:** **10% to 30% BSA** detachment.\n  - **Toxic Epidermal Necrolysis (TEN):** **$> 30%$ BSA** full-thickness epidermal detachment (mortality up to 40%–50%).\n\n### Physical Examination Hallmarks\n* Targetoid lesions with central dusky purpura, severe hemorrhagic oral mucositis, conjunctivitis.\n* **POSITIVE NIKOLSKY'S SIGN (Pathognomonic):** Gentle lateral shearing pressure applied to normal-appearing skin causes the epidermis to slide and separate from the dermis like wet tissue paper!\n\n### Clinical Management Priorities\n* **IMMEDIATELY DISCONTINUE ALL SUSPECT DRUGS!**\n* Transfer patient to an **Intensive Care Unit (ICU) or Burn Unit**.\n* Treat identically to severe partial-thickness burns: Strict reverse isolation, fluid and electrolyte resuscitation, warm ambient room temperature ($30°–32°C$ to prevent hypothermia from skin barrier loss), aggressive eye care with preservative-free artificial tears to prevent symblepharon (eyelid-globe adhesions) and blindness.",
                                              "clinicalPearl": "Nikolsky's Sign: Light shearing friction causes the top layer of skin to peel off in sheets. Pathognomonic for Pemphigus Vulgaris, SJS/TEN, and Staphylococcal Scalded Skin Syndrome (SSSS). Negative in Bullous Pemphigoid.",
                                              "normalValues": [
                                                    {
                                                          "label": "SJS BSA Cutoff",
                                                          "value": "< 10% BSA detachment"
                                                    },
                                                    {
                                                          "label": "TEN BSA Cutoff",
                                                          "value": "> 30% BSA detachment"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_msn_14_2",
                            "order": 2,
                            "title": "Phase 2: Psoriasis Vulgaris (Auspitz Sign) & Necrotizing Fasciitis",
                            "bulletPoints": [
                                  {
                                        "id": "bp_msn_1402",
                                        "label": "Psoriasis Vulgaris (Auspitz Sign, Koebner Phenomenon) & Necrotizing Fasciitis",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Autoimmune Keratinocyte Hyperproliferation & Soft Tissue Necrosis",
                                              "markdownContent": "### Psoriasis Vulgaris Pathognomonic Signs\nChronic autoimmune inflammatory disorder characterized by marked epidermal hyperproliferation:\n* **Classic Lesions:** Well-demarcated erythematous plaques covered by silvery-white micaceous scales on extensor surfaces (elbows, knees, scalp, lumbosacral).\n* **Auspitz's Sign:** Pinpoint bleeding spots when silvery scales are scraped off or mechanically removed (due to dilated capillaries in thinned suprapapillary dermal plates).\n* **Koebner's Phenomenon (Isomorphic Response):** Development of new psoriatic lesions along lines of physical trauma, scratching, or surgical scars.\n\n### Necrotizing Fasciitis (\"Flesh-Eating\" Bacterial Infection)\n* Rapidly spreading, destructive bacterial infection of subcutaneous tissue and deep fascia (Group A *Streptococcus*, mixed anaerobes).\n* **Clinical Hallmark:** **PAIN SEVERELY OUT OF PROPORTION to visible physical findings** (intense severe pain despite minimal skin erythema).\n* Rapid progression to woody induration, skin bullae, purple necrosis, and subcutaneous **Crepitus** (gas in soft tissues).\n* **Treatment:** Immediate **emergency surgical debridement** down to bleeding healthy tissue + IV broad-spectrum antibiotics (Piperacillin-Tazobactam + Vancomycin + Clindamycin to inhibit toxin synthesis).",
                                              "clinicalPearl": "Pain out of proportion to physical exam findings = Think COMPARTMENT SYNDROME (in extremities) or NECROTIZING FASCIITIS (in skin/soft tissue) or MESENTERIC ISCHEMIA (in abdomen)!",
                                              "normalValues": [
                                                    {
                                                          "label": "Psoriasis Epidermal Transit Time",
                                                          "value": "3 to 4 days (Normal is 28 days)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          }
    ]
  },
  {
    "id": "subj_obg_03",
    "name": "Obstetric & Gynecological Nursing (Midwifery)",
    "code": "OBG-103",
    "iconName": "Baby",
    "weightagePercentage": 15,
    "color": "#db2777",
    "subtopics": [
          {
                "id": "sub_obg_antenatal_01",
                "title": "Antenatal Assessment, Fetoplacental Physiology & High-Risk Pregnancy",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_obg_1_1",
                            "order": 1,
                            "title": "Phase 1: Antenatal Assessment & Gestational Physiology",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_101",
                                        "label": "Naegele's Rule, Leopold's Maneuvers & Probable Signs of Pregnancy",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "EDD Calculation & Named Clinical Signs of Pregnancy",
                                              "markdownContent": "### 1. Naegele's Formula for Expected Date of Delivery (EDD)\n* **Standard Formula:** $$EDD = LMP + 9  Months + 7  Days$$\n  *(Or subtract 3 months and add 7 days + 1 year for a regular 28-day cycle).*\n* **Adjustment for Cycle Variations:** Add or subtract days based on deviation from 28-day cycle (e.g. for a 35-day cycle, add 7 additional days: LMP + 9 months + 14 days).\n\n### 2. Named Probable Signs of Pregnancy\n* **Chadwick's (Jacquemier's) Sign (6–8 Weeks):** Bluish-violet discoloration of cervix and vaginal mucosa from local venous congestion.\n* **Goodell's Sign (6 Weeks):** Softening of the cervix (feels like the lips instead of the normal firm cartilaginous tip of the nose).\n* **Hegar's Sign (6–8 Weeks):** Softening and extreme compressibility of the lower uterine segment (isthmus) felt on bimanual examination.\n* **Osiander's Sign (8 Weeks):** Increased arterial pulsations palpated in lateral vaginal fornices.\n* **Palmer's Sign (4–8 Weeks):** Regular, rhythmic, painless uterine contractions felt during pelvic examination.\n\n### 3. Leopold's Four Maneuvers (Performed with empty bladder, slight left tilt)\n1. **First Maneuver (Fundal Grip):** Identifies which fetal pole occupies the fundus (Breech is soft, irregular, non-ballottable; Head is hard, round, freely ballottable).\n2. **Second Maneuver (Umbilical / Lateral Grip):** Palpates smooth, convex resistance of fetal back (auscultate FHR here!) vs nodular small fetal parts (limbs).\n3. **Third Maneuver (Pawlik's Grip):** Single examining hand over suprapubic area determines whether the presenting part is engaged or mobile.\n4. **Fourth Maneuver (Pelvic Grip):** Examiner turns to face maternal feet; assesses degree of cephalic flexion and attitude.",
                                              "clinicalPearl": "Positive (Confirmatory) signs of pregnancy are ONLY THREE: 1. Ultrasound visualization of fetus (TVS detects sac at 4.5–5 weeks), 2. Fetal Heart Sounds auscultated via Doppler (10–12 weeks) or Fetoscope/Pinard (18–20 weeks), and 3. Fetal movements palpable by the clinician (18–20 weeks).",
                                              "normalValues": [
                                                    {
                                                          "label": "Fundus at Symphysis Pubis",
                                                          "value": "12 Weeks Gestation"
                                                    },
                                                    {
                                                          "label": "Fundus Midway between Pubis and Umbilicus",
                                                          "value": "16 Weeks Gestation"
                                                    },
                                                    {
                                                          "label": "Fundus at Level of Umbilicus",
                                                          "value": "20 to 22 Weeks Gestation"
                                                    },
                                                    {
                                                          "label": "Fundus at Xiphisternum",
                                                          "value": "36 Weeks (highest level)"
                                                    },
                                                    {
                                                          "label": "Fundus Drops to 32-Week Level (Lightening)",
                                                          "value": "38 to 40 Weeks in Primigravida"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_102",
                                        "label": "Amniotic Fluid Index (AFI) Dynamics & Umbilical Cord Vessels",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Amniotic Fluid Variations & Fetal Well-Being Surveillance",
                                              "markdownContent": "### Amniotic Fluid Volume & Clinical Indices\n* **Normal Volume:** Reaches peak of ~800–1000 mL at 36–38 weeks, then declines to ~200–400 mL post-term (> 42 weeks).\n* **Amniotic Fluid Index (AFI):** Sum of deepest vertical pockets in four quadrants of maternal abdomen.\n  - **Normal AFI:** **5 to 25 cm**.\n  - **Oligohydramnios:** $AFI < 5 cm$ (or single deepest pocket $< 2 cm$). Associated with renal agenesis (Potter sequence), pulmonary hypoplasia, and post-maturity.\n  - **Polyhydramnios:** $AFI > 25 cm$ (or single deepest pocket $> 8 cm$). Associated with maternal diabetes, esophageal/duodenal atresia (cannot swallow fluid), and anencephaly.\n\n### Umbilical Cord Anatomy & Single Umbilical Artery (SUA)\n* Normal cord contains **2 Arteries + 1 Vein (2A + 1V)** surrounded by protective **Wharton's Jelly**.\n* *Vein* carries oxygenated blood from placenta to fetus; *Arteries* carry deoxygenated blood from fetus to placenta.\n* **Single Umbilical Artery (SUA / 2-Vessel Cord):** Present in ~1% of births. Strongly associated with congenital renal and cardiovascular anomalies; requires detailed postnatal renal ultrasound.",
                                              "clinicalPearl": "Exam Trap: Umbilical VEIN carries 80% oxygenated blood TO the fetus; Umbilical ARTERIES carry deoxygenated waste blood FROM the fetus back to the placenta. Exactly opposite of adult circulation!",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Amniotic Fluid Index (AFI)",
                                                          "value": "5 to 25 cm"
                                                    },
                                                    {
                                                          "label": "Oligohydramnios Threshold",
                                                          "value": "AFI < 5 cm (or single pocket < 2 cm)"
                                                    },
                                                    {
                                                          "label": "Polyhydramnios Threshold",
                                                          "value": "AFI > 25 cm (or single pocket > 8 cm)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_obg_1_2",
                            "order": 2,
                            "title": "Phase 2: Fetal Surveillance & High-Risk Screening Tests",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_103",
                                        "label": "Cardiotocography (CTG), Non-Stress Test (NST) & Fetal Acoustic Stimulation",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Antepartum Electronic Fetal Monitoring Interpretation",
                                              "markdownContent": "### Non-Stress Test (NST) Protocols\nAssesses fetal autonomic nervous system and placental perfusion without uterine contractions:\n* **Reactive (Normal / Reassuring) NST:**\n  - Presence of **2 or more Fetal Heart Rate (FHR) Accelerations** of at least **15 bpm above baseline**, lasting for at least **15 seconds** (15 x 15 rule) within a **20-minute window**, in the presence of normal baseline FHR (110–160 bpm) and moderate variability.\n* **Non-Reactive (Abnormal) NST:**\n  - Lack of sufficient accelerations over a 40-minute testing period.\n  - Most common benign cause: Fetal sleep cycle (lasts ~20–40 min).\n  - Nursing Action: Provide maternal juice/snack, gently reposition mother to left lateral, or apply **Vibroacoustic Stimulation (FAS)** over fetal head for 3 seconds to arouse fetus.",
                                              "clinicalPearl": "In fetuses < 32 weeks gestation, the 10 x 10 rule applies: accelerations of at least 10 bpm lasting 10 seconds due to neurological immaturity.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Baseline FHR",
                                                          "value": "110 to 160 bpm"
                                                    },
                                                    {
                                                          "label": "Reactive NST Acceleration Criteria (≥32 wks)",
                                                          "value": "≥ 2 accelerations of 15 bpm for 15 sec in 20 min"
                                                    },
                                                    {
                                                          "label": "Fetal Sleep Cycle Duration",
                                                          "value": "20 to 40 minutes"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_104",
                                        "label": "Biophysical Profile (BPP / Manning Score) & Fetal Distress Indicators",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Ultrasound & NST Scoring for Chronic Asphyxia",
                                              "markdownContent": "### Biophysical Profile (BPP / Manning Score) Components (2 Points Each)\n1. **Fetal Breathing Movements:** ≥ 1 episode of sustained rhythmic breathing lasting ≥ 30 seconds in 30 minutes.\n2. **Gross Fetal Body Movements:** ≥ 3 discrete body or limb movements in 30 minutes.\n3. **Fetal Tone:** ≥ 1 episode of active extension with return to flexion of limbs or spine (e.g. opening and closing hand).\n4. **Reactive NST:** Reactive tracing meeting 15x15 criteria.\n5. **Amniotic Fluid Volume:** ≥ 1 single vertical pocket of fluid measuring ≥ 2 cm in two perpendicular planes.\n\n### Clinical Interpretation & Action Matrix\n* **Score 8 to 10:** Normal, reassuring; low risk of chronic fetal asphyxia.\n* **Score 6:** Equivocal; if oligohydramnios present → deliver; if normal fluid → repeat in 24 hours.\n* **Score 0 to 4:** Strongly abnormal; severe fetal compromise → immediate delivery regardless of gestational age.",
                                              "clinicalPearl": "Fetal parameters disappear in reverse order of their embryological development during acute hypoxemia: Tone develops first (8 wks), movement (9 wks), breathing (20 wks), and NST reactivity last (28 wks). Therefore, under progressive hypoxia, NST reactivity is lost first, followed by breathing, movement, and finally tone.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal BPP Score",
                                                          "value": "8 / 10 (or 8/8 without NST)"
                                                    },
                                                    {
                                                          "label": "Severe Fetal Asphyxia BPP",
                                                          "value": "0 to 4 / 10 (Urgent Delivery)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_obg_labor_02",
                "title": "Mechanism of Normal Labor, Stages, Partograph & Bishop Score",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_obg_2_1",
                            "order": 1,
                            "title": "Phase 1: Cardinal Movements & 4 Stages of Labor",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_201",
                                        "label": "The Four Stages of Labor & Active Management Timelines",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Labor Stage Definitions & Normal Physiological Durations",
                                              "markdownContent": "### Stages of Labor Overview\n* **Stage 1 (Cervical Dilation & Effacement):** From onset of true regular labor contractions until full **10 cm cervical dilation**.\n  - *Latent Phase:* Slow cervical dilation from 0 to 4–5 cm.\n  - *Active Phase:* Rapid cervical dilation from 5 cm to 10 cm (rate: ≥ 1 cm/hr in primigravida; ≥ 1.5 cm/hr in multipara).\n* **Stage 2 (Fetal Expulsion):** From full 10 cm cervical dilation until complete birth of baby. Duration: ~1–2 hours in primigravida; ~30–60 min in multipara.\n* **Stage 3 (Placental Expulsion):** From delivery of baby until complete expulsion of placenta and membranes. Normal duration is **$< 30 minutes$** (average 5–15 min).\n* **Stage 4 (Observation Phase):** First **2 to 4 hours postpartum**. Critical observation period for postpartum hemorrhage (PPH), uterine atony, and vital signs stabilization.",
                                              "clinicalPearl": "A third stage of labor lasting longer than 30 minutes is defined as Retained Placenta, requiring manual removal of placenta (MROP) under general anesthesia.",
                                              "normalValues": [
                                                    {
                                                          "label": "Full Cervical Dilation",
                                                          "value": "10 cm"
                                                    },
                                                    {
                                                          "label": "Max Normal Duration of Third Stage",
                                                          "value": "30 minutes"
                                                    },
                                                    {
                                                          "label": "Active Stage 1 Cervical Dilation Rate",
                                                          "value": "≥ 1.0 cm/hr in primigravida"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_202",
                                        "label": "The 7 Cardinal Movements of Labor in Vertex Presentation Sequence",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Biomechanical Descent Mechanism (ED FI ERE Mnemonic)",
                                              "markdownContent": "### Cardinal Movements of Labor in Vertex (Cephalic) Presentation\n1. **Engagement:** Biparietal diameter ($9.5 cm$) passes through pelvic inlet; leading bony edge reaches ischial spines (**Station 0**).\n2. **Descent:** Continuous downward movement through pelvic cavity driven by uterine contractions and maternal bearing down.\n3. **Flexion:** Fetal chin touches chest upon encountering pelvic floor resistance, substituting smaller Suboccipitobregmatic diameter ($9.5 cm$) for larger Occipitofrontal ($11.5 cm$).\n4. **Internal Rotation of the Head:** Occiput rotates **$1/8th$ of a circle (45°)** anteriorly toward symphysis pubis.\n5. **Extension:** Fetal head crowns and delivers by extension under the pubic arch (vulva distends → brow, face, and chin sweep over perineum).\n6. **Restitution:** Head untwists $45^\\circ$ back to align with fetal shoulders in pelvis.\n7. **External Rotation of the Head:** Shoulders rotate $45^\\circ$ internally to anteroposterior diameter; head rotates another $45^\\circ$ externally to match. Delivery of anterior shoulder occurs first under pubic symphysis, followed by posterior shoulder and body.",
                                              "clinicalPearl": "Exam Sequence Memory Trick: 'Every Darn Fool In Egypt Eats Raw Eggs' = Engagement, Descent, Flexion, Internal Rotation, Extension, Restitution, External Rotation, Expulsion.",
                                              "normalValues": [
                                                    {
                                                          "label": "Fetal Head Suboccipitobregmatic Diameter",
                                                          "value": "9.5 cm (Vertex presentation)"
                                                    },
                                                    {
                                                          "label": "Station 0 Landmark",
                                                          "value": "Level of maternal Ischial Spines"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_obg_2_2",
                            "order": 2,
                            "title": "Phase 2: Partograph Dynamics, Bishop Score & Labor Augmentation",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_203",
                                        "label": "Modified WHO Partograph (Alert & Action Lines) Interpretation",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Visual Labor Progress Monitoring & Intervention Triggers",
                                              "markdownContent": "### Modified WHO Partograph Architecture\nPlotted starting strictly at the **Active Phase (≥ 4 or  5 cm cervical dilation)**:\n* **Alert Line:** Straight diagonal line starting at 4 cm dilation representing normal minimum dilation rate of **1 cm per hour**.\n* **Action Line:** Drawn parallel to the Alert Line, placed strictly **4 HOURS to the right** of the Alert Line.\n* **Clinical Decision Triggers:**\n  - *Normal Progress:* Cervical dilation plot stays on or to the **LEFT of the Alert Line**.\n  - *Prolonged Labor Warning:* Plot crosses to the **RIGHT of the Alert Line**. Indicates need for close maternal-fetal re-assessment, amniotomy, and transfer to referral center.\n  - *Emergency Action Trigger:* Plot reaches or crosses the **Action Line**. Indicates obstructed labor or cephalopelvic disproportion (CPD) → requires immediate medical augmentation (Oxytocin) or Emergency Cesarean Section.",
                                              "clinicalPearl": "The time interval between the Alert Line and Action Line on a WHO Partograph is STRICTLY 4 HOURS. This 4-hour safety buffer allows safe referral or preparation for surgical intervention.",
                                              "normalValues": [
                                                    {
                                                          "label": "Time Gap between Alert and Action Lines",
                                                          "value": "Strictly 4 hours"
                                                    },
                                                    {
                                                          "label": "Partograph Active Phase Starting Point",
                                                          "value": "≥ 4 cm cervical dilation"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_204",
                                        "label": "Bishop Score for Cervical Ripening & Oxytocin Induction Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Pre-Induction Cervical Assessment & High-Alert Titration",
                                              "markdownContent": "### Bishop Scoring System (0 to 3 Points per Parameter)\n\n| Parameter | 0 Points | 1 Point | 2 Points | 3 Points |\n| :--- | :--- | :--- | :--- | :--- |\n| **Dilation (cm)** | Closed (0 cm) | 1–2 cm | 3–4 cm | ≥ 5 cm |\n| **Effacement (%)** | 0%–30% | 40%–50% | 60%–70% | ≥ 80\\% |\n| **Station** | -3 | -2 | -1, 0 | +1, +2 |\n| **Consistency** | Firm (like nose) | Medium | Soft (like lips) | — |\n| **Position** | Posterior | Mid-position | Anterior | — |\n\n### Bishop Score Action Protocol\n* **Score ≥ 8:** Favorable cervix; successful vaginal induction is highly likely → proceed with **IV Oxytocin Infusion** or amniotomy.\n* **Score $< 6$:** Unfavorable (unripe) cervix → requires **cervical ripening** first using **Dinoprostone (PGE2) gel 0.5 mg intracervically** or Misoprostol (PGE1) 25 mcg orally/vaginally before oxytocin administration.\n\n### Oxytocin (Pitocin) High-Alert Administration Rules\n* Must be administered via an **Infusion Pump** piggybacked into a primary IV line.\n* Starting dose: 1 to 2 mU/min; titrate by 1–2 mU/min every 30 minutes until **3 contractions every 10 minutes, lasting 40–60 seconds**.\n* **Uterine Tachysystole Hazard:** $> 5$ contractions in 10 minutes OR contractions lasting $> 90 seconds$. **Immediate Action:** Turn off oxytocin infusion immediately, turn mother to left lateral position, administer 100% O2, and open primary IV fluids!",
                                              "clinicalPearl": "Uterine Tachysystole (> 5 contractions in 10 min) causes fetal hypoxemia by cutting off intervillous uterine blood flow during contractions. The FIRST action is ALWAYS to STOP the Oxytocin infusion!",
                                              "normalValues": [
                                                    {
                                                          "label": "Favorable Bishop Score",
                                                          "value": "≥ 8"
                                                    },
                                                    {
                                                          "label": "Unfavorable Bishop Score (Requires Ripening)",
                                                          "value": "< 6"
                                                    },
                                                    {
                                                          "label": "Target Active Labor Contractions",
                                                          "value": "3 to 4 contractions in 10 min, lasting 45–60 sec"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_obg_hemorrhage_03",
                "title": "Obstetric Hemorrhage: Antepartum (APH), Postpartum (PPH) & Uterotonics",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_obg_3_1",
                            "order": 1,
                            "title": "Phase 1: Antepartum Hemorrhage (Placenta Previa vs Abruptio Placentae)",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_301",
                                        "label": "Placenta Previa vs Abruptio Placentae Differential Diagnosis",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Antepartum Hemorrhage (APH) Clinical Triads & Warnings",
                                              "markdownContent": "### Differential Diagnosis: Placenta Previa vs Abruptio Placentae\n\n| Clinical Feature | Placenta Previa | Abruptio Placentae (Placental Abruption) |\n| :--- | :--- | :--- |\n| **Pathophysiology** | Placenta implanted in lower uterine segment over internal cervical os | Premature separation of normally implanted placenta from uterine wall before delivery |\n| **Bleeding Character** | **Painless, causeless, recurrent, bright red** bleeding | **Painful, sudden, continuous, dark venous or concealed** bleeding |\n| **Abdominal Exam** | **Soft, relaxed, non-tender uterus** | **Tense, woody, rigid, board-like, exquisitely tender uterus** |\n| **Fetal Heart Rate** | Usually normal and reassuring | Fetal bradycardia, late decelerations, or absent FHR (severe distress) |\n| **Fetal Presentation** | Presenting part high, unengaged, or abnormal lie (transverse/breech) | Usually normal engagement; high risk of intrauterine demise |\n| **Maternal Shock** | Shock is proportionate to visible blood loss | **Maternal shock is out of proportion to visible blood loss** (concealed hemorrhage) |\n| **Complications** | Postpartum hemorrhage, morbidly adherent placenta (Accreta, Increta, Percreta) | **Disseminated Intravascular Coagulation (DIC)**, Couvelaire uterus, renal cortical necrosis |",
                                              "clinicalPearl": "ABSOLUTE CONTRAINDICATION IN PLACENTA PREVIA: NEVER perform a digital vaginal examination (PV exam) in any pregnant woman presenting with third-trimester vaginal bleeding until placenta previa is ruled out by Ultrasound! A finger through the cervix can tear the placenta and precipitate catastrophic, exsanguinating hemorrhage within minutes.",
                                              "normalValues": [
                                                    {
                                                          "label": "APH Gestational Age Definition",
                                                          "value": "Bleeding from genital tract after 28 weeks up to delivery"
                                                    },
                                                    {
                                                          "label": "Couvelaire Uterus Pathognomonic Finding",
                                                          "value": "Uteroplacental apoplexy with dark purple-blue patchy myometrium"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_302",
                                        "label": "Morbidly Adherent Placenta (Accreta, Increta, Percreta) Classifications",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "Abnormal Myometrial Invasion Staging",
                                              "markdownContent": "### Spectrum of Morbidly Adherent Placenta\n* **Placenta Accreta:** Chorionic villi attach directly to the myometrium without invading it (deficiency of decidua basalis / Nitabuch's layer). Most common type (~75%).\n* **Placenta Increta:** Chorionic villi invade deeply **INTO the myometrium** (~15%).\n* **Placenta Percreta:** Chorionic villi penetrate completely **THROUGH the myometrium** and serosa, often invading adjacent pelvic structures like the urinary bladder (~5%).\n* **Major Risk Factor:** Previous Cesarean Section combined with concurrent low-lying Placenta Previa.",
                                              "clinicalPearl": "Placenta accreta is the leading cause of emergency peripartum hysterectomy. Never forcefully tug or yank on the cord during delivery if morbidly adherent placenta is suspected.",
                                              "normalValues": [
                                                    {
                                                          "label": "Nitabuch Layer Absence",
                                                          "value": "Definitive microscopic hallmark of Placenta Accreta"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_obg_3_2",
                            "order": 2,
                            "title": "Phase 2: Postpartum Hemorrhage (PPH) & Uterotonic Escalation Ladder",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_303",
                                        "label": "PPH 4 Ts Etiology, Active Management (AMTSL) & Fundal Massage",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Immediate Resuscitation & The 4 T's Diagnostic Framework",
                                              "markdownContent": "### Definition & Classification of Postpartum Hemorrhage (PPH)\n* **Blood Loss Criteria:** ≥ 500 mL following vaginal delivery or ≥ 1000 mL following Cesarean section (or any bleeding that causes hemodynamic instability).\n* **Primary PPH:** Occurs within **first 24 hours** of delivery.\n* **Secondary PPH:** Occurs between 24 hours and 6 weeks postpartum (most common cause: retained placental fragments or subinvolution).\n\n### The 4 T's Etiology Framework\n1. **Tone (Atony - 70% to 80%):** Boggy, soft, flaccid, uncontracted uterus. Leading cause of maternal mortality.\n2. **Trauma (20%):** Cervical, vaginal, or perineal lacerations; uterine rupture. Suspected when uterus is firm and contracted but bright red bleeding continues.\n3. **Tissue (10%):** Retained placental cotyledons or membranes.\n4. **Thrombin (1%):** Pre-existing or acquired coagulopathies (e.g. DIC, idiopathic thrombocytopenic purpura).\n\n### Active Management of Third Stage of Labor (AMTSL - 3 Mandatory Steps)\n1. **Uterotonic Drug Administration:** **Oxytocin 10 IU IM** given immediately within 1 minute of fetal delivery.\n2. **Controlled Cord Traction (CCT / Brandt-Andrews Maneuver):** Traction on clamped cord with simultaneous counter-traction pushing the uterus upward and backward above the pubic symphysis.\n3. **Uterine Fundal Massage:** Immediately after placental delivery, massage fundus until contracted; reassess every 15 minutes for 2 hours.",
                                              "clinicalPearl": "If you walk into a postpartum room and the mother is bleeding heavily with a soft, boggy fundus, the VERY FIRST IMMEDIATE ACTION is to MASSAGE THE UTERINE FUNDUS with both hands until it becomes firm! Do not leave the bedside to call the doctor or search for medications until the fundus is being actively massaged.",
                                              "normalValues": [
                                                    {
                                                          "label": "Vaginal Delivery PPH Threshold",
                                                          "value": "≥ 500 mL blood loss"
                                                    },
                                                    {
                                                          "label": "Cesarean Delivery PPH Threshold",
                                                          "value": "≥ 1000 mL blood loss"
                                                    },
                                                    {
                                                          "label": "Oxytocin Prophylactic Dose (AMTSL)",
                                                          "value": "10 IU IM within 1 minute of birth"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_304",
                                        "label": "Pharmacological Uterotonic Escalation Ladder & Contraindication Matrix",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Uterotonic Drug Hierarchy & Emergency Tamponade",
                                              "markdownContent": "### Uterotonic Pharmacological Escalation Ladder\n\n| Step | Drug & Dose | Route | Mechanism | Critical Contraindication |\n| :--- | :--- | :--- | :--- | :--- |\n| **1st Line** | **Oxytocin (Pitocin)** 10–20 IU in 500 mL RL | IV Infusion (at 125–250 mL/hr) | Stimulates rhythmic uterine contractions | Rapid IV bolus causes sudden hypotension and tachycardia |\n| **2nd Line** | **Methylergometrine (Methergine)** 0.2 mg | **Intramuscular (IM)** | Sustained tetanic uterine contraction | **STRICTLY CONTRAINDICATED in Hypertensive Disorders, Preeclampsia & Cardiac Disease** |\n| **3rd Line** | **Carboprost Tromethamine (PGF2$\\alpha$)** 250 mcg | Deep **IM** (repeat q15–90 min, max 8 doses) | Potent myometrial contraction & vasoconstriction | **STRICTLY CONTRAINDICATED in Bronchial Asthma** (causes fatal bronchospasm) |\n| **4th Line** | **Misoprostol (PGE1)** 800–1000 mcg | **Sublingual or Per Rectal** | Prostaglandin myometrial stimulation | Pyrexia, transient shivering, and diarrhea |\n\n### Mechanical & Surgical Escalation\n* **Bimanual Uterine Compression:** One gloved hand in vagina forming a fist in anterior fornix while other hand compresses posterior fundus through abdominal wall.\n* **Bakri Uterine Balloon Tamponade:** Silicone balloon inflated with 300–500 mL sterile saline inside uterine cavity.\n* **Surgical Interventions:** B-Lynch uterine brace compression suture, internal iliac (hypogastric) artery ligation, and emergency peripartum hysterectomy.",
                                              "clinicalPearl": "CRITICAL EXAM PAIRING: Methergine is BANNED in Preeclampsia/Hypertension (triggers hypertensive crisis and stroke)! Carboprost (PGF2a / Hemabate) is BANNED in Asthma (triggers life-threatening bronchoconstriction)!",
                                              "normalValues": [
                                                    {
                                                          "label": "Methylergometrine Dose",
                                                          "value": "0.2 mg IM (Never give IV bolus)"
                                                    },
                                                    {
                                                          "label": "Carboprost Dose",
                                                          "value": "250 mcg deep IM (Max 8 doses = 2 mg)"
                                                    },
                                                    {
                                                          "label": "Misoprostol Rectal Dose for PPH",
                                                          "value": "800 to 1000 mcg per rectum"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_obg_preeclampsia_04",
                "title": "Hypertensive Disorders in Pregnancy, Eclampsia & Magnesium Sulfate Regimen",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_obg_4_1",
                            "order": 1,
                            "title": "Phase 1: Classification: Gestational HTN, Preeclampsia & HELLP Syndrome",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_401",
                                        "label": "Hypertensive Disorders of Pregnancy Classification & Severity Criteria",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Preeclampsia Diagnostic Criteria & End-Organ Targets",
                                              "markdownContent": "### Spectrum of Pregnancy Hypertensive Disorders\n1. **Gestational Hypertension:** Systolic BP ≥ 140 mmHg and/or Diastolic BP ≥ 90 mmHg developing **after 20 weeks of gestation** in a previously normotensive woman, with **NO Proteinuria** and no end-organ dysfunction. BP normalizes within 12 weeks postpartum.\n2. **Preeclampsia:** Hypertension (≥ 140/90 mmHg) after 20 weeks gestation accompanied by:\n   - **Proteinuria:** ≥ 300 mg per 24-hour urine collection (or urine dipstick ≥ +1 or protein-to-creatinine ratio ≥ 0.3).\n   - *OR In the absence of proteinuria, any new-onset end-organ dysfunction:*\n     - Thrombocytopenia (Platelets $< 100,000/µL$).\n     - Renal insufficiency (Serum Creatinine $> 1.1 mg/dL$ or doubling).\n     - Impaired liver function (AST / ALT twice upper limit of normal).\n     - Pulmonary edema.\n     - New-onset persistent headache and visual scotomas/blurring.\n3. **Severe Features of Preeclampsia:**\n   - BP ≥ 160/110 mmHg measured on two occasions at least 4 hours apart.\n   - Platelets $< 100,000/µL$.\n   - Severe persistent right upper quadrant or epigastric pain (hepatic capsule stretch / subcapsular hematoma).\n\n### HELLP Syndrome (A Severe Variant of Preeclampsia)\n* **H - Hemolysis:** Microangiopathic hemolytic anemia with fragmented RBCs (schistocytes) and elevated serum bilirubin $> 1.2 mg/dL$ and $LDH > 600 IU/L$.\n* **EL - Elevated Liver Enzymes:** Serum $AST ge 70 IU/L$ and $ALT ge 70 IU/L$.\n* **LP - Low Platelets:** Thrombocytopenia with platelet count $< 100,000/µL$.",
                                              "clinicalPearl": "Epigastric or Right Upper Quadrant pain in a woman with preeclampsia is a critical warning sign of impending hepatic capsule rupture and subcapsular hematoma. It warrants immediate delivery regardless of gestational age!",
                                              "normalValues": [
                                                    {
                                                          "label": "Preeclampsia Blood Pressure Cutoff",
                                                          "value": "≥ 140/90 mmHg after 20 weeks"
                                                    },
                                                    {
                                                          "label": "Severe Preeclampsia BP Cutoff",
                                                          "value": "≥ 160/110 mmHg"
                                                    },
                                                    {
                                                          "label": "Diagnostic 24-hr Proteinuria",
                                                          "value": "≥ 300 mg / 24 hours"
                                                    },
                                                    {
                                                          "label": "HELLP Platelet Threshold",
                                                          "value": "< 100,000 / µL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_402",
                                        "label": "Antihypertensive Pharmacotherapy in Pregnancy (Labetalol vs Hydralazine)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Safe Antihypertensives & Teratogenic Contraindications",
                                              "markdownContent": "### Safe Antihypertensives for Severe Gestational Hypertension\n1. **Labetalol (Combined Alpha- and Beta-Blocker):** First-line agent. 20 mg IV bolus over 2 minutes, followed by 40 mg, then 80 mg every 10–20 minutes (max 300 mg). Contraindicated in asthma and heart failure.\n2. **Hydralazine (Direct Arteriolar Vasodilator):** 5 to 10 mg IV slowly over 2 minutes. Can cause maternal reflex tachycardia and headaches.\n3. **Nifedipine (Oral Calcium Channel Blocker):** 10 mg oral capsule swallowed (never given sublingually due to precipitous hypotensive crash and fetal distress).\n4. **Methyldopa (Centrally Acting Alpha-2 Agonist):** Gold standard oral maintenance drug for chronic and mild-to-moderate gestational hypertension.\n\n### STRICTLY CONTRAINDICATED DRUGS IN PREGNANCY\n* **ACE Inhibitors (e.g. Enalapril, Ramipril) & ARBs (e.g. Losartan, Telmisartan):** Strictly contraindicated! Cause fetal renal dysgenesis, oligohydramnios, neonatal renal failure, skull hypoplasia, and fetal death.",
                                              "clinicalPearl": "ACE inhibitors and ARBs are absolute teratogenic poisons in pregnancy! They destroy the fetal renin-angiotensin system, causing severe oligohydramnios, pulmonary hypoplasia, and anuria.",
                                              "normalValues": [
                                                    {
                                                          "label": "Target Diastolic BP in Severe Pre-eclampsia",
                                                          "value": "90 to 100 mmHg (never drop below 80 mmHg to preserve placental perfusion)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_obg_4_2",
                            "order": 2,
                            "title": "Phase 2: Eclampsia Seizure Management & Magnesium Sulfate ($MgSO_4$) Protocols",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_403",
                                        "label": "Magnesium Sulfate ($MgSO_4$) Pritchard & Zuspan Regimens",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Seizure Prophylaxis & Anticonvulsant Protocols",
                                              "markdownContent": "### Magnesium Sulfate ($MgSO_4$) — Drug of Choice for Eclampsia\n* Acts centrally by blocking N-methyl-D-aspartate (NMDA) receptors, relieving cerebral vasospasm, and lowering acetylcholine release at neuromuscular junctions. It is an **anticonvulsant**, NOT primarily an antihypertensive!\n\n### Pritchard Regimen (Intramuscular Protocol)\n* **Loading Dose:**\n  - **4 g IV** (as 20% solution, 20 mL) slowly over **10 to 15 minutes**.\n  - **PLUS 10 g IM** (5 g of 50% solution, 10 mL injected deep IM into EACH buttock using a 20G needle with 1 mL of 2% lignocaine to reduce severe pain).\n  - *Total Loading Dose = 14 g*.\n* **Maintenance Dose:**\n  - **5 g IM (50% solution, 10 mL)** every **4 hours** in alternating buttocks.\n  - Continued for **strictly 24 HOURS after delivery** or 24 hours after the last seizure (whichever is later).\n\n### Zuspan Regimen (Intravenous Infusion Protocol)\n* **Loading Dose:** **4 to 6 g IV** over 15 to 20 minutes in 100 mL IV fluid.\n* **Maintenance Dose:** **1 to 2 g/hour continuous IV infusion** via infusion pump for 24 hours postpartum.",
                                              "clinicalPearl": "The definitive cure for preeclampsia and eclampsia is DELIVERY of the fetus and placenta. Magnesium sulfate does not cure the disease; it prevents recurrent seizures until delivery can be safely accomplished.",
                                              "normalValues": [
                                                    {
                                                          "label": "Pritchard Total Loading Dose",
                                                          "value": "14 g (4 g IV + 10 g IM)"
                                                    },
                                                    {
                                                          "label": "MgSO4 Therapeutic Serum Level",
                                                          "value": "4.0 to 7.0 mEq/L (4.8 to 8.4 mg/dL)"
                                                    },
                                                    {
                                                          "label": "Postpartum MgSO4 Duration",
                                                          "value": "Strictly 24 hours after delivery or last seizure"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_404",
                                        "label": "Magnesium Toxicity Triad, Bedside Checks & Calcium Gluconate Antidote",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Mandatory Nursing Safety Checks Before Every Dose",
                                              "markdownContent": "### The 3 Mandatory Clinical Checks BEFORE Administering Any Dose of MgSO4\nBecause magnesium is excreted **almost 100% via the kidneys**, it rapidly accumulates if renal function declines. Before every maintenance dose, verify:\n1. **Patellar (Knee-Jerk) Deep Tendon Reflex is PRESENT:** Loss of patellar reflex is the **EARLIEST sign of magnesium toxicity** (occurs at serum levels of **$8–10 mEq/L$**).\n2. **Respiratory Rate is ≥ 16 Breaths/Minute:** Respiratory depression occurs at **$12–15 mEq/L$**, followed by respiratory arrest.\n3. **Urine Output is ≥ 30 mL/Hour (or ≥ 100 mL over 4 hours):** Decreased urine output will cause rapid lethal toxicity!\n\n### Magnesium Toxicity Spectrum & Antidote\n* Serum Levels:\n  - $4–7 mEq/L$: Therapeutic Anticonvulsant Range.\n  - $8–10 mEq/L$: **Loss of Patellar (Knee-Jerk) Reflex**.\n  - $12–15 mEq/L$: **Respiratory Depression & Arrest**.\n  - $> 15 mEq/L$: **Cardiac Arrest in Diastole**.\n* **SPECIFIC ANTIDOTE:**\n  - **10% Calcium Gluconate (10 mL = 1 g)** administered **IV slowly over 3 to 5 minutes**.\n  - *Nursing Mandate:* A 10 mL vial of 10% Calcium Gluconate with a syringe must ALWAYS be physically kept at the patient's bedside!",
                                              "clinicalPearl": "FIRST SIGN of Magnesium Toxicity = Loss of Patellar Reflex (Knee Jerk)! If patellar reflex is absent, immediately HOLD the dose, check serum magnesium, and have Calcium Gluconate ready.",
                                              "normalValues": [
                                                    {
                                                          "label": "Minimum Respiratory Rate for MgSO4",
                                                          "value": "≥ 16 breaths/min"
                                                    },
                                                    {
                                                          "label": "Minimum Urine Output for MgSO4",
                                                          "value": "≥ 30 mL/hr (100 mL / 4 hrs)"
                                                    },
                                                    {
                                                          "label": "Earliest Toxicity Sign (8–10 mEq/L)",
                                                          "value": "Loss of Deep Tendon (Patellar) Reflex"
                                                    },
                                                    {
                                                          "label": "Calcium Gluconate Antidote Dose",
                                                          "value": "10 mL of 10% solution (1 g IV slow over 3–5 min)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_obg_gdm_gyn_05",
                "title": "Gestational Diabetes (GDM), Gynecological Oncology & Ectopic Pregnancy",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_obg_5_1",
                            "order": 1,
                            "title": "Phase 1: Gestational Diabetes Mellitus (GDM) & Ectopic Pregnancy",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_501",
                                        "label": "Gestational Diabetes Mellitus (GDM DIPSI Criteria) & Neonatal Hazards",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "75g OGTT Single-Step Protocol & Glycemic Goals",
                                              "markdownContent": "### Pathophysiology & DIPSI Diagnostic Criteria\n* **Human Placental Lactogen (hPL), cortisol, and progesterone** create peripheral insulin resistance peaking at **24 to 28 weeks of gestation**.\n* **DIPSI (Diabetes in Pregnancy Study Group India) Single-Step Non-Fasting Test:**\n  - Pregnant woman given **75 g oral glucose** dissolved in 200–300 mL water regardless of the time of her last meal.\n  - Venous plasma glucose measured at **2 hours**.\n  - **GDM Diagnostic Threshold:** **Venous Plasma Glucose ≥ 140 mg/dL**.\n\n### Glycemic Control Targets in GDM\n* Fasting Blood Sugar: **≤ 95 mg/dL**.\n* 1-Hour Post-Prandial: **≤ 140 mg/dL**.\n* 2-Hour Post-Prandial: **≤ 120 mg/dL**.\n* **Pharmacotherapy:** **Human Insulin** is the gold standard (does not cross the placenta). Metformin is an acceptable alternative.\n\n### Fetal & Neonatal Complications\n* **Fetal Macrosomia (Weight $> 4000 g$):** Maternal hyperglycemia crosses placenta → fetal hyperinsulinemia acts as growth hormone → organomegaly, excessive fat deposition around shoulders → **Shoulder Dystocia**.\n* **Neonatal Hypoglycemia (Blood glucose $< 40 mg/dL$):** Cord clamping abruptly stops maternal glucose supply, but hyperplastic fetal islets continue pouring out high insulin! Breastfeed within 30 minutes of birth and monitor blood glucose at 1, 2, 4, 6 hours.\n* **Respiratory Distress Syndrome (RDS):** High fetal insulin inhibits cortisol-induced pulmonary surfactant synthesis by type II pneumocytes.",
                                              "clinicalPearl": "Why does the infant of a diabetic mother develop hypoglycemia immediately after birth? Because maternal glucose stops flowing across the cut umbilical cord, but the baby's hyperplastic pancreas keeps oversecreting insulin! Feed immediately within 30 minutes.",
                                              "normalValues": [
                                                    {
                                                          "label": "DIPSI 2-hr 75g Glucose Cutoff",
                                                          "value": "≥ 140 mg/dL"
                                                    },
                                                    {
                                                          "label": "GDM Target Fasting Sugar",
                                                          "value": "≤ 95 mg/dL"
                                                    },
                                                    {
                                                          "label": "Neonatal Hypoglycemia Threshold",
                                                          "value": "< 40 mg/dL (< 2.2 mmol/L)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_502",
                                        "label": "Ectopic Pregnancy Sites, Rupture Signs & Methotrexate Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Tubal Implantation, Ruptured Shock & Culdocentesis",
                                              "markdownContent": "### Ectopic Pregnancy Implantation Sites\n* **Fallopian Tube (95% of cases):**\n  - **Ampulla (70%):** Most common tubal site overall.\n  - **Isthmus (12%):** Earliest to rupture (at 6–8 weeks) due to narrow, non-distensible lumen.\n  - **Fimbria (11%)** and **Interstitial / Cornual (2–3%):** Ruptures latest (at 12–16 weeks) with massive catastrophic hemorrhage.\n\n### Clinical Triad of Ectopic Pregnancy\n1. **Amenorrhea** (history of missed period, 6–8 weeks).\n2. **Abdominal / Pelvic Pain** (unilateral, sharp, cramping).\n3. **Abnormal / Irregular Vaginal Bleeding / Spotting** (dark brown \"prune juice\" discharge).\n\n### Ruptured Tubal Pregnancy Emergencies\n* Severe sharp lower abdominal pain followed by syncope and hypovolemic shock.\n* **Kehr's Sign:** Referred pain to the **left shoulder tip** caused by intraperitoneal blood irritating the phrenic nerve on the diaphragm.\n* **Cullen's Sign:** Bluish discoloration around umbilicus (hemoperitoneum).\n* **Cervical Motion Tenderness (Chandelier Sign):** Exquisite pain on moving cervix during bimanual exam.\n* **Culdocentesis:** Aspiration of non-clotting dark blood from the pouch of Douglas (rectouterine pouch).\n* **Medical Management:** **Methotrexate** (folic acid antagonist, single-dose $50 mg/m^2$ IM). Criteria: Hemodynamically stable, serum $\beta-hCG < 5000 mIU/mL$, unruptured mass $< 3.5 cm$, no embryonic cardiac activity.",
                                              "clinicalPearl": "Left shoulder tip pain (Kehr's sign) in a woman with lower abdominal pain and a missed period indicates intraperitoneal hemorrhage from a ruptured ectopic pregnancy irritating the diaphragm! Prepare for immediate emergency laparotomy.",
                                              "normalValues": [
                                                    {
                                                          "label": "Most Common Tubal Site",
                                                          "value": "Ampulla of Fallopian Tube (~70%)"
                                                    },
                                                    {
                                                          "label": "Earliest Rupture Site",
                                                          "value": "Isthmus (6 to 8 weeks)"
                                                    },
                                                    {
                                                          "label": "Methotrexate Candidate hCG Threshold",
                                                          "value": "< 5,000 mIU/mL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_obg_5_2",
                            "order": 2,
                            "title": "Phase 2: Gynecological Malignancies (Cervical, Ovarian, Endometrial) & Molar Pregnancy",
                            "bulletPoints": [
                                  {
                                        "id": "bp_obg_503",
                                        "label": "Cervical Cancer Screening (Pap Smear, HPV DNA, VIA) & Clinical Staging",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Screening Modalities & Pre-Invasive Lesion Identification",
                                              "markdownContent": "### Cervical Cancer Etiology & Screening\n* **Etiology:** High-risk oncogenic **Human Papillomavirus (HPV) genotypes 16 and 18** cause ~70% of invasive cervical cancers by inactivating tumor suppressor proteins p53 (via viral E6) and Rb (via viral E7).\n* **Earliest Clinical Symptom:** **Post-coital (contact) vaginal bleeding** or painless watery, foul-smelling vaginal discharge.\n* **Screening Modalities:**\n  - **Pap Smear (Cytology):** Samples taken from the **Transformation Zone (Squamocolumnar Junction)** using an Ayre's spatula (cervical surface) and Cytobrush (endocervix). Fix immediately in 95% ethyl alcohol.\n  - **Visual Inspection with Acetic Acid (VIA):** Application of freshly prepared **3% to 5% Acetic Acid** to cervix; turns pre-cancerous dysplastic epithelium into a sharp **opaque white area (Acetowhite lesion)** within 1 minute. Low-cost screening in rural public health centers.\n  - **Visual Inspection with Lugol's Iodine (VILI / Schiller's Test):** Normal glycogen-rich epithelium stains dark mahogany brown; cancer lesions lack glycogen and remain unstained (yellow).\n* **Prevention:** Bivalent (Cervarix - 16, 18), Quadrivalent (Gardasil - 6, 11, 16, 18), or Nonavalent HPV vaccines administered to girls aged **9 to 14 years** (2 doses 6 months apart).",
                                              "clinicalPearl": "The Transformation Zone (Squamocolumnar Junction) is where squamous metaplasia occurs and is the exact anatomical site of origin for >90% of cervical dysplasias and carcinomas. Pap smears must sample this exact junction.",
                                              "normalValues": [
                                                    {
                                                          "label": "Pap Smear Screening Interval",
                                                          "value": "Every 3 years for women aged 21–29; every 5 years with HPV co-test aged 30–65"
                                                    },
                                                    {
                                                          "label": "Acetic Acid Concentration for VIA",
                                                          "value": "3% to 5% freshly prepared"
                                                    },
                                                    {
                                                          "label": "HPV Target Vaccination Age",
                                                          "value": "9 to 14 years (2-dose schedule: 0 and 6 months)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q47"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_obg_504",
                                        "label": "Hydatidiform Mole (Molar Pregnancy) Triad, Snowstorm Sign & hCG Monitoring",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Gestational Trophoblastic Disease & Choriocarcinoma Prevention",
                                              "markdownContent": "### Complete vs Partial Hydatidiform Mole\n* **Complete Mole (46, XX):** Fertilization of an empty enucleated ovum by a single sperm (which duplicates) or two sperm. All chromosomes are paternal. No fetal tissue or embryo present. 20% risk of malignant transformation into choriocarcinoma.\n* **Partial Mole (69, XXY):** Fertilization of a normal ovum by two sperm (triploidy). Fetal parts / embryo present. < 5% malignant risk.\n\n### Clinical Hallmarks of Molar Pregnancy\n1. **Passage of \"Grape-like Vesicles\"** per vaginum (pathognomonic sign).\n2. **Uterine size markedly larger than expected for gestational dates**.\n3. **Extremely High Serum $\beta$-hCG levels ($> 100,000 mIU/mL$):** Triggers severe hyperemesis gravidarum and early-onset preeclampsia in the first trimester.\n4. **Pelvic Ultrasound Finding:** Classic **\"Snowstorm\" Appearance** or \"Honeycomb\" pattern without an identifiable gestational sac or fetal heart activity, often accompanied by bilateral **Theca Lutein Ovarian Cysts**.\n\n### Treatment & Critical Post-Evacuation Follow-Up\n* **Treatment:** Suction and evacuation of molar tissue using large-bore suction curette.\n* **Follow-up Protocol (To rule out Choriocarcinoma):**\n  - Measure serum $\beta$-hCG **weekly** until 3 consecutive weekly levels are normal (< 5 mIU/mL).\n  - Then measure **monthly** for 6 consecutive months.\n  - **Mandatory Patient Teaching:** The woman must use reliable contraception (barrier methods or OCPs; avoid IUCDs due to perforation risk) and **STRICTLY AVOID PREGNANCY FOR AT LEAST 6 TO 12 MONTHS** because a new pregnancy would elevate hCG and mask persistent choriocarcinoma!",
                                              "clinicalPearl": "CRITICAL MOLAR FOLLOW-UP RULE: The woman MUST avoid becoming pregnant for at least 6 to 12 months following molar evacuation! A rising beta-hCG from a new pregnancy cannot be differentiated from fatal malignant Choriocarcinoma recurrence.",
                                              "normalValues": [
                                                    {
                                                          "label": "Molar Pregnancy Serum hCG",
                                                          "value": "Often > 100,000 mIU/mL"
                                                    },
                                                    {
                                                          "label": "Mandatory Post-Mole Contraceptive Window",
                                                          "value": "Strictly 6 to 12 months"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          }
    ]
  },
  {
    "id": "subj_peds_04",
    "name": "Child Health Nursing (Pediatrics & Neonatology)",
    "code": "PED-104",
    "iconName": "HeartHandshake",
    "weightagePercentage": 12,
    "color": "#d97706",
    "subtopics": [
          {
                "id": "sub_peds_neo_01",
                "title": "Neonatal Resuscitation Program (NRP), Primitive Reflexes & High-Risk Newborn Care",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_peds_1_1",
                            "order": 1,
                            "title": "Phase 1: NRP Golden Minute Algorithm & Newborn Assessment",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_101",
                                        "label": "Neonatal Resuscitation Program (NRP 8th Edition) & The Golden Minute",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Stepwise Delivery Room Resuscitation Sequence",
                                              "markdownContent": "### NRP 8th Edition Stepwise Algorithm\n1. **Initial Assessment (First 30 Seconds):**\n   * Ask 3 questions: **Term gestation? Good muscle tone? Breathing or crying?**\n   * If YES: Baby stays with mother for skin-to-skin contact, drying, and clearing secretions if needed.\n   * If NO: Move to radiant warmer. Provide warmth, clear airway (mouth then nose), dry, and provide gentle tactile stimulation (flicking soles or rubbing back).\n2. **Heart Rate & Respiration Check (at 60 Seconds - \"The Golden Minute\"):**\n   * Evaluate heart rate by auscultating the precordium for 6 seconds and multiply by 10.\n   * If **Apneic, Gasping, OR Heart Rate < 100 bpm**:\n     * Initiate **Positive Pressure Ventilation (PPV)** immediately using a T-piece resuscitator or self-inflating bag with mask.\n     * Rate: **40 to 60 breaths per minute** (Rhythm: \"Breathe, Two, Three, Breathe...\").\n     * Starting FiO2: ≥ 35 weeks gestation start with **21% O2 (Room Air)**; $< 35$ weeks start with **21%–30% O2**.\n   * If chest is not rising effectively with PPV, initiate **MR. SOPA** ventilation corrective steps:\n     * **M** - Mask readjustment\n     * **R** - Reposition airway (sniffing position)\n     * **S** - Suction mouth and nose\n     * **O** - Open mouth slightly\n     * **P** - Pressure increase (by 5–10 cm H2O increments)\n     * **A** - Alternative airway (Endotracheal tube or Laryngeal Mask Airway)\n3. **Chest Compressions (If Heart Rate Remains < 60 bpm despite 30 seconds of effective PPV):**\n   * Ratio: **3 : 1** (3 compressions to 1 ventilation → 90 compressions + 30 breaths = 120 events per minute).\n   * Technique: **Two-thumb encircling-hands technique** over lower third of sternum.\n   * Increase FiO2 to **100%**.\n4. **Epinephrine Administration (If Heart Rate Remains < 60 bpm after 60 seconds of chest compressions with 100% O2):**\n   * Concentration: **1 : 10,000 (0.1 mg/mL)**.\n   * IV / IO Dose: **0.01 to 0.03 mg/kg** (equivalent to **0.1 to 0.3 mL/kg** of 1:10,000 solution) followed by 3 mL normal saline flush.",
                                              "clinicalPearl": "Golden Minute Priority: If a newborn is apneic or HR < 100 bpm, Positive Pressure Ventilation (PPV) is the single most effective step. Never begin chest compressions until at least 30 seconds of effective PPV that moves the chest has been delivered!",
                                              "clinicalAlert": "Never suction vigorously or deeply into the posterior pharynx! Deep pharyngeal suctioning induces profound vagal stimulation, triggering reflex bradycardia and laryngospasm. Suction mouth first, then nose ('M before N').",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Neonatal Heart Rate",
                                                          "value": "120–160 bpm"
                                                    },
                                                    {
                                                          "label": "Normal Neonatal Respiratory Rate",
                                                          "value": "30–60 breaths/min"
                                                    },
                                                    {
                                                          "label": "NRP Chest Compression : Breath Ratio",
                                                          "value": "3 : 1 (120 events/min)"
                                                    },
                                                    {
                                                          "label": "NRP Epinephrine Dose (1:10,000 IV/IO)",
                                                          "value": "0.01–0.03 mg/kg (0.1–0.3 mL/kg)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q82",
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_102",
                                        "label": "APGAR Scoring Matrix & Neonatal Vital Sign Interpretations",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Clinical Assessment at 1 and 5 Minutes Post-Birth",
                                              "markdownContent": "### APGAR Scoring System (0, 1, 2 Points Each)\n\n| Indicator | 0 Points | 1 Point | 2 Points |\n| :--- | :--- | :--- | :--- |\n| **A - Appearance** (Skin Color) | Completely Blue / Pale | Body pink, extremities blue (**Acrocyanosis**) | Completely Pink all over |\n| **P - Pulse** (Heart Rate) | Absent (0 bpm) | **< 100 bpm** | **≥ 100 bpm** |\n| **G - Grimace** (Reflex Irritability) | Flaccid / No response | Grimace / Weak response to suction | Vigorous Cry, cough, or sneeze |\n| **A - Activity** (Muscle Tone) | Flaccid / Limp | Some flexion of arms and legs | Well-flexed, active motion |\n| **R - Respiration** (Effort) | Absent (Apneic) | Slow, irregular, weak gasp | Strong, lusty vigorous cry |\n\n### APGAR Score Clinical Interpretation\n* **7 to 10:** Normal, vigorous newborn requiring routine supportive care. Acrocyanosis (score of 9) is normal in the first 24 hours.\n* **4 to 6:** Moderately depressed infant; indicates need for immediate tactile stimulation, airway clearing, and PPV.\n* **0 to 3:** Severely depressed infant; indicates severe birth asphyxia requiring full resuscitation (PPV, chest compressions, intubation).",
                                              "clinicalPearl": "APGAR score at 1 minute reflects the need for immediate resuscitation, while the 5-minute score is the primary prognostic indicator of neurological outcome and response to resuscitation.",
                                              "normalValues": [
                                                    {
                                                          "label": "Severe Birth Asphyxia APGAR",
                                                          "value": "Score 0 to 3"
                                                    },
                                                    {
                                                          "label": "Moderate Asphyxia APGAR",
                                                          "value": "Score 4 to 6"
                                                    },
                                                    {
                                                          "label": "Normal / Reassuring APGAR",
                                                          "value": "Score 7 to 10"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_peds_1_2",
                            "order": 2,
                            "title": "Phase 2: Primitive Neonatal Reflexes & Neurological Assessment",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_103",
                                        "label": "Primitive Neonatal Reflexes (Moro, Grasp, Babinski, Tonic Neck) Timeline",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Reflex Elicitation, Disappearance Milestones & Red Flags",
                                              "markdownContent": "### Primitive Reflex Profiles & Timeline\n\n| Reflex | Elicitation Technique | Normal Expected Response | Disappearance Age |\n| :--- | :--- | :--- | :--- |\n| **Moro Reflex** | Allow infant's head to drop gently backward suddenly | Sudden symmetrical extension and abduction of arms, opening of hands, followed by flexion and adduction (embrace), with crying | **3 to 4 Months** |\n| **Rooting Reflex** | Stroke cheek or corner of mouth | Head turns toward stimulated side with mouth open to latch | **3 to 4 Months** |\n| **Palmar Grasp** | Place finger into infant's palm | Strong flexion of all fingers clutching examiner's finger | **3 to 4 Months** |\n| **Plantar Grasp** | Touch sole of foot behind toes | Toes curl downward (flexion) | **8 to 9 Months** |\n| **Babinski Reflex** | Stroke lateral sole from heel upward across metatarsals | **Dorsiflexion of great toe with fanning of other toes** | **Up to 1 to 2 Years** (Normal due to incomplete myelination) |\n| **Asymmetric Tonic Neck (ATNR / 'Fencer')** | Turn infant's head to one side while supine | Arm and leg on the side the face is turned EXTEND; contralateral limbs FLEX | **4 to 6 Months** |\n| **Stepping / Dancing** | Hold infant upright with soles touching flat surface | Stepping motions with reciprocal leg flexion and extension | **4 to 6 Weeks** |",
                                              "clinicalPearl": "An asymmetric Moro reflex strongly indicates unilateral brachial plexus injury (Erb-Duchenne palsy C5-C6) or a fractured clavicle from shoulder dystocia. Complete absence of Moro reflex indicates severe CNS injury or severe depression.",
                                              "clinicalAlert": "Persistence of primitive reflexes (especially Moro or Tonic Neck reflex) beyond 6 months of age is a major clinical red flag indicating cerebral palsy or severe upper motor neuron pathology.",
                                              "normalValues": [
                                                    {
                                                          "label": "Moro Reflex Disappearance",
                                                          "value": "3 to 4 months"
                                                    },
                                                    {
                                                          "label": "Palmar Grasp Disappearance",
                                                          "value": "3 to 4 months"
                                                    },
                                                    {
                                                          "label": "Babinski Normal Pediatric Duration",
                                                          "value": "Up to 12–24 months of age"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_104",
                                        "label": "Gestational Age Assessment (New Ballard Score) & Preterm Nuances",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "Neuromuscular & Physical Maturity Grading",
                                              "markdownContent": "### New Ballard Score Components\n* **Neuromuscular Maturity (6 Signs):**\n  1. **Posture:** Fully extended in extreme preterm (-1) → fully flexed with tight limbs in term (+4).\n  2. **Square Window (Wrist Flexion):** $>90^\\circ$ in preterm → $0^\\circ$ (hand touches forearm) in post-term.\n  3. **Arm Recoil:** Sluggish/no recoil in preterm → brisk rapid snap-back in term.\n  4. **Popliteal Angle:** $>180^\\circ$ in extreme preterm → $<90^\\circ$ in term.\n  5. **Scarf Sign:** Elbow crosses opposite axillary line in preterm → cannot reach midline in term.\n  6. **Heel to Ear:** Foot reaches ear easily without resistance in preterm → significant resistance in term.\n* **Physical Maturity (6 Signs):**\n  - **Skin:** Gelatinous, translucent with visible veins in preterm → thick, parchment-like, cracked, no vessels visible in post-term.\n  - **Lanugo:** Absent in extreme preterm → abundant across back in moderate preterm → mostly bald in term.\n  - **Plantar Creases:** No creases (smooth sole) in preterm $<32$ wks → anterior transverse crease only (34–36 wks) → deep creases over entire sole in term.\n  - **Breast Nodule:** Non-palpable in preterm → raised $5–10 mm$ stippled areola in term.\n  - **Eye / Ear:** Fused eyelids in extreme preterm; soft, flat pinna with slow recoil in preterm → firm, thick cartilage with instant recoil in term.\n  - **Genitalia:** Male: Flat, empty scrotum with faint rugae in preterm → testes descended with deep pendulous rugae in term. Female: Prominent clitoris with flat labia majora in preterm → labia majora completely cover labia minora and clitoris in term.",
                                              "clinicalPearl": "Scarf sign: In a preterm infant, the elbow easily crosses the midline because of hypotonia. In a full-term infant with normal flexor tone, the elbow cannot be pulled past the mid-sternum without resistance.",
                                              "normalValues": [
                                                    {
                                                          "label": "Term Infant Gestation",
                                                          "value": "37 to 41 completed weeks"
                                                    },
                                                    {
                                                          "label": "Extremely Low Birth Weight (ELBW)",
                                                          "value": "< 1000 grams"
                                                    },
                                                    {
                                                          "label": "Very Low Birth Weight (VLBW)",
                                                          "value": "< 1500 grams"
                                                    },
                                                    {
                                                          "label": "Low Birth Weight (LBW)",
                                                          "value": "< 2500 grams"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_peds_jaundice_02",
                "title": "Neonatal Hyperbilirubinemia, Thermal Control & Kangaroo Mother Care (KMC)",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_peds_2_1",
                            "order": 1,
                            "title": "Phase 1: Physiological vs Pathological Jaundice & Phototherapy/Exchange Transfusion",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_201",
                                        "label": "Physiological vs Pathological Jaundice & Kernicterus Pathophysiology",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Differential Diagnosis & Bilirubin Encephalopathy Surveillance",
                                              "markdownContent": "### Differential Diagnosis: Physiological vs Pathological Jaundice\n\n| Feature | Physiological Jaundice | Pathological Jaundice |\n| :--- | :--- | :--- |\n| **Onset** | **AFTER 24 Hours** of birth (typically Day 2–3) | **WITHIN FIRST 24 Hours** of life |\n| **Peak Bilirubin** | Day 3–5 in term ($< 15 mg/dL$); Day 5–7 in preterm | Exceeds **$15 mg/dL$** at any time |\n| **Rate of Rise** | $< 5 mg/dL / day$ ($< 0.2 mg/dL/hr$) | **$> 5 mg/dL / day$** ($> 0.2 mg/dL/hr$) |\n| **Resolution** | Disappears by **Day 10–14** in term (by Day 21 in preterm) | Persists **$> 2 weeks$** in term ($> 3 weeks$ in preterm) |\n| **Bilirubin Type** | Strictly **Unconjugated (Indirect)** | **Conjugated (Direct) $> 2 mg/dL$** or unconjugated |\n| **Etiology** | Hepatic immaturity (low glucuronyl transferase) + high RBC mass | Rh / ABO incompatibility, G6PD deficiency, Sepsis, Biliary atresia |\n\n### Kernicterus (Acute Bilirubin Encephalopathy)\n* High unconjugated (lipid-soluble) bilirubin crosses the immature blood-brain barrier and deposits in the **Basal Ganglia** (specifically the subthalamic nucleus and globus pallidus) and cranial nerve nuclei.\n* **Clinical Phases:**\n  - *Phase 1 (Early):* Lethargy, poor feeding, hypotonia, high-pitched shrill cry.\n  - *Phase 2 (Intermediate):* Hypertonia, retrocollis (neck arching), **Opisthotonos** (severe backward spinal hyperextension), fever, seizures.\n  - *Phase 3 (Late / Chronic):* Choreoathetoid cerebral palsy, sensorineural hearing loss, upward gaze palsy, dental enamel dysplasia.",
                                              "clinicalPearl": "Kramer's Dermal Icterus Rule: Jaundice progresses in a CEPHALOCAUDAL direction (head to toe): Zone 1 (Head & neck ~5 mg/dL), Zone 2 (Upper trunk ~10 mg/dL), Zone 3 (Lower trunk & thighs ~12 mg/dL), Zone 4 (Arms & lower legs ~15 mg/dL), Zone 5 (Palms & Soles >15 mg/dL). Jaundice on palms and soles is ALWAYS a medical emergency!",
                                              "clinicalAlert": "Never assess jaundice under yellow artificial fluorescent light! Always blanch the skin with gentle finger pressure over a bony prominence (forehead or sternum) under natural daylight.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Neonatal Serum Bilirubin",
                                                          "value": "< 2 mg/dL at birth"
                                                    },
                                                    {
                                                          "label": "Pathological Direct Bilirubin Cutoff",
                                                          "value": "> 2 mg/dL (or > 20% of total)"
                                                    },
                                                    {
                                                          "label": "Dangerous Kernicterus Risk Threshold",
                                                          "value": "> 20–25 mg/dL unconjugated bilirubin"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_202",
                                        "label": "Phototherapy Guidelines, Nursing Interventions & Exchange Transfusion",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Phototherapy Protocols, Complications & Double Volume Exchange",
                                              "markdownContent": "### Phototherapy Physics & Mechanisms\n* **Mechanism:** Converts unconjugated bilirubin into water-soluble non-toxic photoisomers (**Lumirubin**) via structural photoisomerization, excreted into bile and urine without requiring hepatic glucuronidation.\n* **Light Specs:** **Blue-Green light spectrum (wavelength 460 to 490 nm)** with irradiance ≥ 30\\ \\muW/cm^2/nm.\n* **Distance:** Lamp placed strictly **30 to 45 cm** above the naked infant.\n\n### Mandatory Nursing Protocols during Phototherapy\n1. **Eye Protection:** Cover eyes with opaque eye patches/goggles to prevent retinal damage. Ensure patches do not occlude nares. Remove patches during feeds for maternal eye contact.\n2. **Genital Shielding:** Cover gonads with minimal diaper to expose maximum body surface area.\n3. **Repositioning:** Turn the infant **every 2 hours** to expose different skin surfaces.\n4. **Hydration & Feeds:** Continue frequent breastfeeding every 2–3 hours; increase daily fluid intake by **10% to 20%** to compensate for increased insensible water loss and loose watery stools.\n5. **Temperature:** Check axillary temperature every 2–4 hours (watch for hyperthermia or hypothermia).\n6. **Complications:** Loose green stools, erythematous rash, dehydration, hyperthermia, and **Bronze Baby Syndrome** (gray-brown discoloration of skin, serum, and urine occurring ONLY when phototherapy is mistakenly given in the presence of conjugated/direct hyperbilirubinemia).\n\n### Double Volume Exchange Transfusion (DVET)\n* **Volume:** **160 to 170 mL/kg** (twice the newborn's circulating blood volume of ~80–85 mL/kg). Replaces ~85% of circulating RBCs and lowers bilirubin by 50%.\n* **Route:** Umbilical Vein Catheter (UVC); push-pull technique (10–20 mL aliquots over 1–2 hours).\n* **Monitoring:** Administer **1 mL of 10% Calcium Gluconate IV** after every 100 mL of citrated donor blood to counteract hypocalcemia (citrate binds ionized calcium). Watch for cardiac arrhythmias.",
                                              "clinicalPearl": "Exam Trap: Always TURN OFF phototherapy lights before drawing blood for serum bilirubin! Ambient blue light will photo-degrade bilirubin inside the test tube, causing a falsely low lab report.",
                                              "normalValues": [
                                                    {
                                                          "label": "Phototherapy Light Wavelength",
                                                          "value": "460–490 nm (Blue-Green Spectrum)"
                                                    },
                                                    {
                                                          "label": "Phototherapy Distance from Infant",
                                                          "value": "30 to 45 cm"
                                                    },
                                                    {
                                                          "label": "Exchange Transfusion Blood Volume",
                                                          "value": "160 to 170 mL/kg (Double Volume)"
                                                    },
                                                    {
                                                          "label": "Calcium Gluconate Infusion during Exchange",
                                                          "value": "1 mL 10% solution per 100 mL blood exchanged"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_peds_2_2",
                            "order": 2,
                            "title": "Phase 2: Warm Chain, Neonatal Hypothermia & Kangaroo Mother Care (KMC)",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_203",
                                        "label": "WHO Warm Chain Steps, Hypothermia Classification & Non-Shivering Thermogenesis",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Thermoregulation Dynamics & Cold Stress Consequences",
                                              "markdownContent": "### The 10 Steps of WHO Warm Chain\n1. Warm delivery room ($25°C to 28°C$, free of drafts).\n2. Immediate drying with warm towel.\n3. Skin-to-skin contact with mother.\n4. Early exclusive breastfeeding within 1 hour.\n5. Delayed bathing (postpone for at least 24 hours in normal newborns; postpone 48–72 hours in LBW infants).\n6. Appropriate clothing & wrapping (head covered with cap).\n7. Mother and baby kept together (Rooming-in).\n8. Warm transportation (transport incubator or KMC).\n9. Warm resuscitation (under radiant warmer).\n10. Training and awareness of healthcare staff.\n\n### Classification of Neonatal Hypothermia (Axillary Temp)\n* **Normal Range:** **36.5°C to 37.5°C** (97.7°F to 99.5°F).\n* **Cold Stress (Mild Hypothermia):** **36.0°C to 36.4°C**. Managed by skin-to-skin contact, warm clothing, and room heating.\n* **Moderate Hypothermia:** **32.0°C to 35.9°C**. Rewarm under radiant warmer or incubator ($0.5°C/hr$ slow rewarming).\n* **Severe Hypothermia ('Silent Killer'):** **< 32.0°C**. Causes **Sclerema neonatorum** (woody hard induration of skin and subcutaneous fat), profound hypoglycemia, metabolic acidosis, and massive pulmonary hemorrhage.\n\n### Non-Shivering Thermogenesis (Brown Adipose Tissue - BAT)\n* Newborns cannot shiver! When exposed to cold, norepinephrine stimulates lipolysis of **Brown Adipose Tissue (BAT)** located around scapulae, neck, axillae, mediastinum, and perirenal areas, producing heat at the expense of high oxygen and glucose consumption.",
                                              "clinicalPearl": "Cold stress triggers a lethal vicious cycle: Hypothermia → Brown fat breakdown → High O2 and glucose consumption → Hypoglycemia and Hypoxemia → Pulmonary vasoconstriction → Metabolic Acidosis.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Neonatal Axillary Temperature",
                                                          "value": "36.5°C to 37.5°C"
                                                    },
                                                    {
                                                          "label": "Cold Stress Range",
                                                          "value": "36.0°C to 36.4°C"
                                                    },
                                                    {
                                                          "label": "Severe Hypothermia Cutoff",
                                                          "value": "< 32.0°C"
                                                    },
                                                    {
                                                          "label": "Standard Delivery Room Temperature",
                                                          "value": "25°C to 28°C"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_204",
                                        "label": "Kangaroo Mother Care (KMC) Eligibility, Positioning & Minimum Duration",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Low Birth Weight Management with Skin-to-Skin Care",
                                              "markdownContent": "### Kangaroo Mother Care (KMC) Core Components\n1. **Kangaroo Position:**\n   - Infant placed naked (except for diaper, cap, and socks) vertically in an upright position against mother's bare chest between her breasts.\n   - Head turned to one side in a slightly extended \"sniffing\" position to ensure open airway.\n   - Hips and arms flexed in a **\"frog-like\" posture**; mother's garment wrapped securely to support the baby's posture.\n2. **Kangaroo Nutrition:** Exclusive and frequent breastfeeding (or expressed breast milk by cup/paladai).\n3. **Kangaroo Discharge & Follow-up:** Early discharge once weight gain is documented.\n\n### Eligibility & Duration Parameters\n* **Eligibility Criteria:**\n  - Stable Low Birth Weight (**LBW < 2500 g**) and Preterm neonates.\n  - Baby must be hemodynamically stable (no severe respiratory distress, no apnea, not on mechanical ventilation).\n* **Minimum Duration:**\n  - Each KMC session should last for **at least 1 continuous hour** (shorter sessions disturb the baby's sleep cycle and cause temperature drops).\n  - Can be practiced for up to **24 hours a day**, interrupted only for diaper changing and hygiene.\n  - Can be continued until the baby reaches **2500 g** or until the infant begins to show signs of discomfort/wriggling out (~37–40 weeks post-menstrual age).",
                                              "clinicalPearl": "KMC can also be provided by fathers, grandmothers, or other family members when the mother needs to rest, bath, or recover! Father-infant KMC is highly encouraged.",
                                              "normalValues": [
                                                    {
                                                          "label": "KMC Minimum Single-Session Duration",
                                                          "value": "At least 1 continuous hour"
                                                    },
                                                    {
                                                          "label": "Target KMC Daily Total",
                                                          "value": "As close to 24 hours/day as possible"
                                                    },
                                                    {
                                                          "label": "KMC Weaning Weight Target",
                                                          "value": "~2500 grams"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_peds_growth_03",
                "title": "Physical Growth Patterns, Developmental Milestones & Pediatric Nutrition",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_peds_3_1",
                            "order": 1,
                            "title": "Phase 1: Physical Growth Formulas, Fontanelle Closure & Dentition",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_301",
                                        "label": "Anthropometric Growth Formulas (Weight, Height, Head Circumference & Fontanelles)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Pediatric Physical Growth Rules & Fontanelle Milestones",
                                              "markdownContent": "### Weight & Height Mathematical Rules\n* **Birth Weight (Average 2.5 to 3.5 kg):**\n  - Loses 5% to 10% of birth weight during the first 7–10 days of life due to physiological diuresis and meconium passage.\n  - Regains birth weight by **10 to 14 days of age**.\n  - **Doubles** birth weight by **5 to 6 months of age**.\n  - **Triples** birth weight by **1 year of age**.\n  - **Quadruples (4x)** birth weight by **2 years of age**.\n  - Formula for age 1 to 6 years: $$Weight (kg) = [Age in Years \\times 2] + 8$$\n* **Length / Height (Average 50 cm at birth):**\n  - Increases to **75 cm at 1 year** (+25 cm in first year).\n  - **Doubles to 100 cm at 4 years of age**.\n  - **Triples to 150 cm at 12 years of age**.\n* **Head & Chest Circumference:**\n  - Head Circumference at birth is **33 to 35 cm** (exceeds chest circumference by ~2 to 3 cm).\n  - Chest Circumference **EQUALS** Head Circumference at **1 year of age** (~45 cm). Beyond 1 year, chest exceeds head.\n* **Cranial Fontanelle Closure Timelines:**\n  - **Posterior Fontanelle (Lambda - Triangular):** Closes at **6 to 8 weeks (1.5 to 2 months)**.\n  - **Anterior Fontanelle (Bregma - Diamond Shaped):** Closes at **12 to 18 months (1 to 1.5 years)**. Early closure (< 6 months) indicates craniosynostosis/microcephaly; delayed closure (> 18 months) indicates rickets, cretinism (congenital hypothyroidism), hydrocephalus, or Down syndrome.",
                                              "clinicalPearl": "Exam Mnemonics: P for Posterior fontanelle = Petit (small/triangular) closes at 2 months; A for Anterior fontanelle = Adult-like (diamond) closes at 18 months. Weight: 5 mos (2x), 1 yr (3x), 2 yrs (4x). Height: 4 yrs (2x = 100 cm).",
                                              "normalValues": [
                                                    {
                                                          "label": "Weight Doubling Age",
                                                          "value": "5 to 6 months"
                                                    },
                                                    {
                                                          "label": "Weight Tripling Age",
                                                          "value": "12 months (1 year)"
                                                    },
                                                    {
                                                          "label": "Height Doubling Age (100 cm)",
                                                          "value": "4 years"
                                                    },
                                                    {
                                                          "label": "Posterior Fontanelle Closure",
                                                          "value": "6 to 8 weeks"
                                                    },
                                                    {
                                                          "label": "Anterior Fontanelle Closure",
                                                          "value": "12 to 18 months"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q27",
                                                    "AIIMS_NORCET_2023_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_302",
                                        "label": "Primary (Deciduous) vs Permanent Dentition & Teething Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Tooth Eruption Sequences & Teething Care",
                                              "markdownContent": "### Primary (Deciduous / Milk) Teeth (Total = 20 Teeth)\n* **Formula:** $\\frac{2102}{2102}$ (2 Incisors, 1 Canine, 0 Premolars, 2 Molars per quadrant). **Premolars are completely ABSENT** in primary dentition!\n* **First Tooth to Erupt:** **Lower Central Incisor at 6 to 8 months of age**.\n* **Sequence:** Lower central incisors → Upper central incisors → Upper lateral incisors → Lower lateral incisors → First molars → Canines → Second molars.\n* Complete primary dentition (all 20 teeth) is present by **2.5 to 3 years of age**.\n* Tooth Count Formula: $$Number of Primary Teeth = Age in Months - 6$$ (e.g. at 12 months, child has $12 - 6 = 6$ teeth).\n\n### Permanent Teeth (Total = 32 Teeth)\n* **Formula:** $\\frac{2123}{2123}$ (2 Incisors, 1 Canine, 2 Premolars, 3 Molars).\n* **First Permanent Tooth to Erupt:** **First Molar ('6-Year Molar') at 6 years of age**. Does not replace any primary tooth; erupts posterior to deciduous molars.",
                                              "clinicalPearl": "Delayed dentition is defined as absence of teeth by 13 months of age. Most common pathological causes are Congenital Hypothyroidism (Cretinism), Rickets, and Hypopituitarism.",
                                              "normalValues": [
                                                    {
                                                          "label": "Total Number of Primary Milk Teeth",
                                                          "value": "20 Teeth (Premolars absent)"
                                                    },
                                                    {
                                                          "label": "First Deciduous Tooth Eruption Age",
                                                          "value": "6 to 8 months (Lower Central Incisor)"
                                                    },
                                                    {
                                                          "label": "Primary Dentition Completion",
                                                          "value": "2.5 to 3 years"
                                                    },
                                                    {
                                                          "label": "First Permanent Tooth Eruption",
                                                          "value": "6 years (First Molar)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q27"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_peds_3_2",
                            "order": 2,
                            "title": "Phase 2: Developmental Milestones (Gross, Fine, Social, Language) & Red Flags",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_303",
                                        "label": "Developmental Milestones Matrix (Gross Motor, Fine Motor, Social & Language)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Comprehensive Pediatric Milestone Roadmap",
                                              "markdownContent": "### 1. Gross Motor Milestones\n* **3 Months:** Holds head steady when supported upright (**Neck Holding**).\n* **5 Months:** Rolls over from prone to supine; sits with own hand support (tripod).\n* **6 Months:** Rolls over supine to prone; sits with minimal support.\n* **8 Months:** **Sits steadily without support**.\n* **9 Months:** Crawls on hands and knees; pulls to standing with furniture support.\n* **10–11 Months:** Cruises along furniture; walks with one hand held.\n* **12–15 Months:** **Walks independently without support**.\n* **18 Months:** Runs stiffly; walks backward; kicks ball.\n* **2 Years:** Walks up and down stairs **2 feet per step**; jumps with both feet.\n* **3 Years:** Walks up stairs **alternating feet**; rides a **tricycle**.\n* **4 Years:** Hops on one foot; walks down stairs alternating feet.\n* **5 Years:** Skips rope; jumps over hurdles.\n\n### 2. Fine Motor Milestones\n* **4 Months:** Reaches out for objects with both hands (**Bidextrous grasp**).\n* **6 Months:** Transfers objects from one hand to the other (**Unidextrous reach**).\n* **9 Months:** **Immature Pincer Grasp** (between finger pads and thumb pad).\n* **12 Months:** **Mature Pincer Grasp** (picks up small pellet/raisin between tip of index and tip of thumb).\n* **15 Months:** Tower of 2 cubes; scribbles spontaneously.\n* **2 Years:** Tower of 6 cubes; imitates vertical stroke.\n* **3 Years:** Tower of 9 cubes; **copies a Circle**.\n* **4 Years:** **Copies a Cross (+)** and cuts paper with scissors.\n* **4.5 Years:** **Copies a Square**.\n* **5 Years:** **Copies a Triangle**.\n\n### 3. Language & Social Milestones\n* **2 Months:** **Social Smile** (smiles in response to human face/voice).\n* **3 Months:** Coos; laughs aloud.\n* **6 Months:** Monosyllabic babbling ('ba', 'da', 'ma').\n* **7–8 Months:** **Stranger Anxiety** (fears strangers, clings to mother).\n* **9 Months:** Bisyllabic babbling ('mama', 'dada' non-specifically); waves 'bye-bye'.\n* **12 Months:** Says 1–2 words with meaning; knows own name.\n* **2 Years:** 2-word telegraphic phrases ('want milk'); refers to self by name.\n* **3 Years:** Uses pronouns ('I', 'me', 'you'); counts up to 3; knows own gender and age.",
                                              "clinicalPearl": "Geometric Drawing Memory Rule: Child can copy a Circle at 3 years (360° circle = 3 yrs), a Cross (+) at 4 years (4 points = 4 yrs), a Square at 4.5 years (4 sides), and a Triangle at 5 years (5 corners in triangle + 2 = 5 yrs).",
                                              "clinicalAlert": "Developmental Red Flags: Lack of social smile at 3 months, lack of head control at 4 months, unable to sit unsupported at 9 months, or inability to walk independently by 18 months warrants immediate neurological evaluation.",
                                              "normalValues": [
                                                    {
                                                          "label": "Sitting Unsupported",
                                                          "value": "8 months"
                                                    },
                                                    {
                                                          "label": "Independent Walking",
                                                          "value": "12 to 15 months"
                                                    },
                                                    {
                                                          "label": "Mature Pincer Grasp",
                                                          "value": "12 months"
                                                    },
                                                    {
                                                          "label": "Tricycle Riding",
                                                          "value": "3 years"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q27",
                                                    "AIIMS_NORCET_2024_S2_Q08"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_304",
                                        "label": "Severe Acute Malnutrition (SAM), Kwashiorkor vs Marasmus Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "WHO Management of Severe Acute Malnutrition",
                                              "markdownContent": "### Kwashiorkor vs Marasmus Comparison\n\n| Feature | Kwashiorkor | Marasmus |\n| :--- | :--- | :--- |\n| **Deficiency** | Severe **Protein Deficiency** with adequate/reduced calories | Severe **Calorie / Total Starvation** (Proteins + Energy) |\n| **Peak Age** | **1 to 4 Years** (often post-weaning when shifted to starchy gruel) | **< 1 Year** (early infancy, failed lactation) |\n| **Body Weight** | 60%–80% of expected weight (masked by edema) | **< 60% of expected weight** |\n| **Edema** | **Pitting Edema Present** (starts on dorsum of feet/legs, ascites) | **EDEMA ABSENT** |\n| **Muscle / Fat** | Muscle wasting present but masked by subcutaneous fat & edema | Severe loss of subcutaneous fat & profound muscle wasting |\n| **Facial Appearance** | **Moon Facies** (puffy, edematous cheeks) | **Old Man / Monkey Facies** (hollow cheeks, sunken eyes) |\n| **Skin & Hair** | **Flaky-paint dermatosis** (crazy paving), **Flag Sign** (alternating dark and light bands in hair) | Dry, loose, folded wrinkly skin ('baggy pants' gluteal folds) |\n| **Behavior** | Apathetic, irritable, lethargic, anorexia | Voraciously hungry, alert, anxious |\n| **Enlarged Liver** | **Hepatomegaly Present** (severe fatty liver infiltration) | Hepatomegaly absent |\n\n### 10 Steps of WHO Severe Acute Malnutrition (SAM) Inpatient Management\n1. **Hypoglycemia (< 54 mg/dL):** Feed immediately with 10% dextrose or F-75 formula.\n2. **Hypothermia (< 36.5°C):** Warm environment, kangaroo mother care, warm blankets.\n3. **Dehydration:** Use **ReSoMal (Rehydration Solution for Malnutrition)** - low sodium (45 mmol/L), high potassium (40 mmol/L). Never use standard ORS!\n4. **Electrolytes:** Correct potassium and magnesium deficiency.\n5. **Infection:** Routine broad-spectrum antibiotics (Ampicillin + Gentamicin).\n6. **Micronutrients:** Vitamin A on Day 1, Zinc, Folic acid. **NEVER give Iron in the initial acute phase** (free iron fuels systemic bacterial growth)!\n7. **Cautious Feeding:** **F-75 Starter Diet (75 kcal / 100 mL)** in small frequent feeds.\n8. **Catch-up Growth:** Transition to **F-100 Catch-up Diet (100 kcal / 100 mL)** once appetite returns.\n9. **Sensory Stimulation & Play Therapy.**\n10. **Discharge Preparation & Follow-up.**",
                                              "clinicalPearl": "CRITICAL EXAM ALERT: Iron MUST NEVER be administered during the initial stabilization phase of Severe Acute Malnutrition! Unbound free iron precipitates fatal septicemia. Start iron therapy ONLY after the child regains appetite and edema resolves (rehabilitation phase).",
                                              "normalValues": [
                                                    {
                                                          "label": "SAM Diagnostic Mid-Upper Arm Circumference (MUAC)",
                                                          "value": "< 11.5 cm (Red Zone)"
                                                    },
                                                    {
                                                          "label": "Weight-for-Height Z-score for SAM",
                                                          "value": "< -3 SD"
                                                    },
                                                    {
                                                          "label": "ReSoMal Sodium Concentration",
                                                          "value": "45 mmol/L (lower than standard ORS 75 mmol/L)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_peds_cardiorespiratory_04",
                "title": "Congenital Heart Defects (Acyanotic vs Cyanotic) & Pediatric Airway Emergencies",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_peds_4_1",
                            "order": 1,
                            "title": "Phase 1: Acyanotic vs Cyanotic Congenital Heart Defects & Tet Spells",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_401",
                                        "label": "Acyanotic Congenital Heart Defects (VSD, ASD, PDA & Coarctation)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Left-to-Right Shunting Hemodynamics & Murmurs",
                                              "markdownContent": "### Acyanotic CHDs (Left-to-Right Shunt → Increased Pulmonary Blood Flow)\n* **Ventricular Septal Defect (VSD) — Most Common Congenital Heart Defect Overall:**\n  - Shunt from left ventricle to right ventricle.\n  - Auscultation: Harsh **Holosystolic / Pansystolic Murmur** heard best at the **lower left sternal border** (3rd–4th intercostal space) with a systolic thrill.\n  - Large defects cause congestive heart failure, pulmonary hypertension, and failure to thrive.\n* **Atrial Septal Defect (ASD):**\n  - Shunt from left atrium to right atrium.\n  - Auscultation: **Wide, Fixed, Split Second Heart Sound ($S_2$)** with a systolic ejection murmur at upper left sternal border (pulmonic area). Split does not vary with respiration!\n* **Patent Ductus Arteriosus (PDA):**\n  - Failure of ductus arteriosus to close within first 72 hours of birth.\n  - Auscultation: Characteristic **Continuous \"Machinery-like\" Murmur** heard loudest beneath the left clavicle in the infraclavicular area. Wide pulse pressure and bounding peripheral pulses.\n  - Pharmacological Closure: **Indomethacin or IV Ibuprofen** (inhibits prostaglandin synthesis).\n  - Pharmacological Patency: **Alprostadil (PGE1)** keeps ductus open in duct-dependent cyanotic lesions.\n* **Coarctation of the Aorta (CoA):**\n  - Localized narrowing of aorta distal to left subclavian artery.\n  - Classic Finding: **High blood pressure and bounding pulses in upper extremities, with weak, delayed, or absent femoral pulses and cold/hypotensive lower extremities**.",
                                              "clinicalPearl": "Murmur Recognition Summary: VSD = Harsh pansystolic murmur at lower left sternal border. ASD = Wide, fixed split S2. PDA = Continuous machinery-like murmur under left clavicle. Coarctation = Upper BP > Lower BP.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Infant Heart Rate",
                                                          "value": "100–160 bpm"
                                                    },
                                                    {
                                                          "label": "Drug of Choice to Close PDA",
                                                          "value": "Indomethacin or IV Ibuprofen"
                                                    },
                                                    {
                                                          "label": "Drug to Maintain PDA Patency",
                                                          "value": "Alprostadil (Prostaglandin E1 IV)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q08"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_402",
                                        "label": "Tetralogy of Fallot (TOF) & Hypercyanotic 'Tet' Spell Emergency Protocol",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Right-to-Left Shunting Cyanosis & Infundibular Spasm Management",
                                              "markdownContent": "### Tetralogy of Fallot (Mnemonic: PROVe)\n1. **P - Pulmonary Infundibular Stenosis:** Degree of pulmonary outflow tract obstruction determines the severity of cyanosis!\n2. **R - Right Ventricular Hypertrophy:** Compensatory hypertrophy yielding a **Boot-Shaped Heart (Coeur en sabot)** with upturned apex on chest X-ray.\n3. **O - Overriding of the Aorta:** Sits directly over the VSD, receiving mixed blood from both ventricles.\n4. **V - Ventricular Septal Defect (VSD):** Large non-restrictive septal defect allowing right-to-left shunting.\n\n### Hypercyanotic 'Tet' Spell (Blue Spell) Emergency Algorithm\nTriggered by crying, defecation, dehydration, or feeding, causing acute infundibular spasm that completely shuts down pulmonary blood flow:\n1. **IMMEDIATE FIRST ACTION: Place child in the KNEE-CHEST (Genupectoral) Position** (or encourage squatting in toddlers).\n   * *Mechanism:* Dramatically increases **Systemic Vascular Resistance (SVR)**, creating higher pressure in the left ventricle. This forces deoxygenated blood to flow into the pulmonary artery instead of shunting right-to-left across the VSD, instantly improving pulmonary blood flow and arterial oxygenation.\n2. **Administer 100% Oxygen** via non-rebreather face mask (pulmonary vasodilator).\n3. **Administer Morphine Sulfate (0.1 to 0.2 mg/kg SC/IV):** Calms respiratory center and relieves infundibular muscular spasm.\n4. **IV Crystalloid Bolus:** Expands intravascular volume and enhances right ventricular filling.\n5. **Administer Propranolol (Beta-blocker) IV:** Relaxes the infundibular spasm and prevents recurring spells.",
                                              "clinicalPearl": "If a child with TOF squats spontaneously during playing or running, NEVER force them to stand or lie down! Squatting is an instinctual life-saving physiologic mechanism that restores systemic resistance and relieves acute cerebral hypoxemia.",
                                              "clinicalAlert": "Avoid stressful venipunctures or invasive interventions without sedation in TOF infants. Severe crying precipitates sudden catastrophic hypercyanotic hypoxia and syncope.",
                                              "normalValues": [
                                                    {
                                                          "label": "Morphine Dose for Tet Spell",
                                                          "value": "0.1 to 0.2 mg/kg SC/IM/IV"
                                                    },
                                                    {
                                                          "label": "TOF Diagnostic X-Ray Sign",
                                                          "value": "Boot-shaped heart (Coeur en sabot) with oligemic lung fields"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q08",
                                                    "AIIMS_NORCET_2023_S1_Q36"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_peds_4_2",
                            "order": 2,
                            "title": "Phase 2: Pediatric Acute Airway Emergencies: Epiglottitis vs Croup vs Foreign Body",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_403",
                                        "label": "Acute Epiglottitis vs Croup (Laryngotracheobronchitis) Differential Diagnosis",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Life-Threatening Upper Airway Obstruction Differentiation",
                                              "markdownContent": "### Differential Diagnosis: Epiglottitis vs Croup\n\n| Clinical Feature | Acute Epiglottitis | Croup (Laryngotracheobronchitis) |\n| :--- | :--- | :--- |\n| **Etiology** | **Bacterial** (*Haemophilus influenzae* type B - Hib) | **Viral** (Parainfluenza virus types 1 & 3) |\n| **Peak Age** | **2 to 7 Years** (mostly unvaccinated children) | **6 Months to 3 Years** |\n| **Onset** | **Sudden, explosive, rapidly progressive (< 12 hrs)** | Gradual over 2–3 days (preceded by URI/runny nose) |\n| **Fever** | High fever ($> 38.5°C / 102°F$), toxic appearance | Low-grade fever, non-toxic looking |\n| **Cough** | **ABSENT** (Swallowing hurts too severely to cough) | **Classic Barking, Brassy, \"Seal-like\" Cough** |\n| **Posture & Signs** | **Tripod Posture** (sitting upright, leaning forward, chin thrusted, mouth open) + **3 D's: Dysphagia, Drooling, Distress** | Restless, hoarseness, inspiratory stridor worse at night |\n| **X-Ray Sign** | **\"Thumbprint Sign\"** (swollen cherry-red epiglottis on lateral neck X-ray) | **\"Steeple Sign\"** (subglottic tracheal narrowing on AP neck X-ray) |\n| **Treatment** | Emergency airway / intubation, IV Ceftriaxone | Cool mist, single-dose oral Dexamethasone ($0.15–0.6 mg/kg$), nebulized Racemic Epinephrine |",
                                              "clinicalPearl": "CRITICAL AIRWAY CONTRAINDICATION: In a child suspected of acute epiglottitis (drooling + tripod position + high fever), NEVER insert a tongue depressor, never perform a throat examination, and never leave the child unattended! Any throat instrumentation triggers instant reflex laryngospasm and complete fatal airway obstruction.",
                                              "clinicalAlert": "After administering nebulized Racemic Epinephrine for severe croup, the child must be monitored in the hospital for at least 3 to 4 hours due to the risk of REBOUND bronchospasm and stridor as the drug wears off.",
                                              "normalValues": [
                                                    {
                                                          "label": "Dexamethasone Dose for Croup",
                                                          "value": "0.15 to 0.6 mg/kg oral/IM (max 16 mg)"
                                                    },
                                                    {
                                                          "label": "Post-Racemic Epinephrine Observation Window",
                                                          "value": "Minimum 3 to 4 hours"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q52",
                                                    "AIIMS_NORCET_2023_S1_Q36"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_404",
                                        "label": "Foreign Body Airway Obstruction (FBAO) in Infants vs Children Guidelines",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "AHA BLS Pediatric Choking Relief Algorithms",
                                              "markdownContent": "### Foreign Body Airway Obstruction Management\n* **Conscious Infant (< 1 Year of Age):**\n  1. Hold infant face down along the rescuer's forearm, supporting the head and jaw with the hand, with the head lower than the trunk.\n  2. Deliver **5 Quick Back Slaps (Blows)** firmly between the shoulder blades using the heel of the hand.\n  3. Turn the infant face up, supporting the back of the head. Deliver **5 Quick Chest Thrusts** in the center of the chest (lower half of sternum, same as chest compressions).\n  4. Repeat sequence of 5 back slaps and 5 chest thrusts until object is expelled or infant becomes unconscious.\n  5. **NEVER PERFORM BLIND FINGER SWEEPS!** Blind sweeps push foreign objects deeper into the larynx.\n* **Conscious Child (≥ 1 Year of Age):**\n  - Stand or kneel behind the child. Perform **Abdominal Thrusts (Heimlich Maneuver)** placing the thumb side of the fist just above the umbilicus and well below the xiphoid process. Thrust inward and upward.\n* **Unconscious Pediatric Choking Victim (Any Age):**\n  - Lower the victim to the floor. Call for emergency help.\n  - Begin **CPR immediately** starting with chest compressions (do not check for a pulse).\n  - Each time the airway is opened to deliver breaths, look inside the mouth; if an object is clearly visible, remove it with a careful finger sweep.",
                                              "clinicalPearl": "In infants under 1 year of age, abdominal thrusts (Heimlich maneuver) are strictly contraindicated because of the high risk of lacerating the relatively large and unprotected liver or spleen! Use alternating 5 back slaps and 5 chest thrusts.",
                                              "normalValues": [
                                                    {
                                                          "label": "Infant Choking Maneuver",
                                                          "value": "5 Back Slaps followed by 5 Chest Thrusts"
                                                    },
                                                    {
                                                          "label": "Child (≥1 year) Choking Maneuver",
                                                          "value": "Subdiaphragmatic Abdominal Thrusts (Heimlich)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q52"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_peds_surgical_05",
                "title": "Pediatric Surgical Emergencies: Gastrointestinal & Neural Tube Anomalies",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_peds_5_1",
                            "order": 1,
                            "title": "Phase 1: Tracheoesophageal Fistula, Pyloric Stenosis & Intussusception",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_501",
                                        "label": "Tracheoesophageal Fistula (TEF) & Esophageal Atresia (EA) Triad",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Type C Anatomical Variant & Pre-Operative Stabilization",
                                              "markdownContent": "### Anatomical Variations & Prevalence\n* **Type C (85% — Most Common):** Proximal esophagus ends in a **blind-ended pouch**, and the distal esophagus connects directly to the trachea via a fistula (**Esophageal Atresia with Distal Tracheoesophageal Fistula**).\n* History of **Maternal Polyhydramnios** (fetus cannot swallow amniotic fluid in utero).\n\n### The Classic 3 C's Triad\n1. **C - Coughing**\n2. **C - Choking**\n3. **C - Cyanosis**\n* Occurs immediately upon the very first oral feeding attempt.\n* Accompanied by **excessive, frothy, bubbly drooling and saliva** bubbling from mouth and nose that returns continuously despite suctioning.\n* Abdominal distension occurs rapidly as crying forces air down the trachea through the distal fistula into the stomach.\n\n### Emergency Nursing Interventions\n1. **Stop Feeding Immediately:** Keep infant strictly **NPO (Nothing by Mouth)**.\n2. **Positioning:** Elevate head of bed to **30° to 45°** (prevents reflux of corrosive gastric acid up the fistula into the lungs, protecting against chemical aspiration pneumonia).\n3. **Continuous Suction:** Insert a double-lumen Replogle tube or catheter into the upper blind pouch and connect to continuous low suction ($-20 cm H_2O$).\n4. **Confirm Diagnosis:** Attempt to pass an 8–10 Fr radiopaque catheter; passage arrests at **10 to 12 cm from gum line**. Confirmed on chest/abdominal X-ray (catheter coiling in upper pouch; presence of air in stomach confirms distal fistula).",
                                              "clinicalPearl": "Pre-Op Golden Rule for TEF: Keep NPO, elevate head 30°–45°, and place a continuous suction catheter into the upper pouch! Never feed a baby with excessive frothy drooling until TEF is ruled out.",
                                              "normalValues": [
                                                    {
                                                          "label": "Catheter Arrest Distance in TEF",
                                                          "value": "10 to 12 cm from alveolar margin"
                                                    },
                                                    {
                                                          "label": "Head Elevation Target",
                                                          "value": "30° to 45° reverse Trendelenburg"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q27"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_502",
                                        "label": "Hypertrophic Pyloric Stenosis (HPS) vs Intussusception Triads & Management",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Pyloric Olive Mass vs Intussusception Sausage Mass",
                                              "markdownContent": "### Hypertrophic Pyloric Stenosis (HPS)\n* Hypertrophy of circular muscle of pylorus causing gastric outlet obstruction.\n* **Peak Age:** **2 to 8 Weeks of life** (more common in first-born males).\n* **Hallmark Clinical Triad:**\n  1. **Projectile, Non-Bilious Vomiting:** Occurs immediately after feeding; infant remains hungry and eager to re-feed ('hungry vomiter').\n  2. **Olive-Shaped Mass:** Firm, non-tender, mobile mass palpable in the **Right Upper Quadrant / Epigastrium**, best felt immediately after vomiting when abdominal wall is relaxed.\n  3. **Visible Gastric Peristaltic Waves:** Waves moving from **Left to Right** across the upper abdomen.\n* **Metabolic Derangement:** **Hypochloremic, Hypokalemic Metabolic Alkalosis** with paradoxical aciduria (loss of gastric $HCl$ and potassium).\n* **Treatment:** Pre-op correction of dehydration and electrolytes with IV Normal Saline $+ KCl$, followed by **Ramstedt's Pyloromyotomy**.\n\n### Intussusception (Telescoping of Bowel)\n* Telescoping of proximal segment of bowel into distal segment (most commonly **Ileocolic** at ileocecal valve).\n* **Peak Age:** **5 Months to 2 Years** (most common cause of intestinal obstruction in infants).\n* **Hallmark Clinical Triad:**\n  1. **Intermittent, Severe Colicky Abdominal Pain:** Child suddenly screams, draws knees up to chest, followed by pain-free quiet intervals.\n  2. **Sausage-Shaped Abdominal Mass:** Palpable in the right upper quadrant/epigastrium, with an empty right lower quadrant (**Dance's Sign**).\n  3. **\"Red Currant Jelly\" Stools:** Passage of blood and mucus from ischemic mucosal sloughing.\n* **Management:**\n  - Non-operative reduction via **Pneumatic (Air) or Hydrostatic (Barium/Saline) Enema** under ultrasound/fluoroscopy. Successful in 80%–90% of uncomplicated cases.\n  - If enema fails or peritonitis/bowel gangrene is present → urgent surgical resection.",
                                              "clinicalPearl": "Exam Pairing: Pyloric Stenosis = Non-bilious projectile vomit + Olive mass + Metabolic Alkalosis! Intussusception = Currant jelly stools + Sausage mass + Dance's sign (empty RIF).",
                                              "clinicalAlert": "In Pyloric Stenosis, surgery (pyloromyotomy) is NEVER an immediate emergency! The true emergency is the life-threatening hypochloremic metabolic alkalosis, which MUST be fully corrected with IV fluids before general anesthesia to prevent intraoperative respiratory arrest.",
                                              "normalValues": [
                                                    {
                                                          "label": "Pyloric Stenosis Peak Onset",
                                                          "value": "2 to 6 weeks of age"
                                                    },
                                                    {
                                                          "label": "Intussusception Peak Age",
                                                          "value": "5 to 12 months"
                                                    },
                                                    {
                                                          "label": "Classic Pyloric ABG Finding",
                                                          "value": "pH > 7.45, HCO3- > 28, Cl- < 95, K+ < 3.5 (Metabolic Alkalosis)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q41",
                                                    "AIIMS_NORCET_2024_S2_Q65"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_peds_5_2",
                            "order": 2,
                            "title": "Phase 2: Hirschsprung's Disease, Imperforate Anus & Neural Tube Defects",
                            "bulletPoints": [
                                  {
                                        "id": "bp_peds_503",
                                        "label": "Hirschsprung's Disease (Congenital Aganglionic Megacolon) Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Aganglionosis, Delayed Meconium & Ribbon Stools",
                                              "markdownContent": "### Pathophysiology & Aganglionosis\nCongenital absence of parasympathetic ganglion cells in the submucosal (**Meissner's**) and myenteric (**Auerbach's**) plexuses of the distal rectum and rectosigmoid colon. The affected aganglionic segment remains permanently contracted and fails to relax, causing functional intestinal obstruction and massive proximal colon dilatation (**Megacolon**).\n\n### Clinical Manifestations\n* **Neonatal Period:**\n  - **Failure to pass meconium within the first 24 to 48 hours of life** (normal term infants pass meconium within 24 hours).\n  - Progressive abdominal distension and **bilious vomiting**.\n* **Infancy / Childhood:**\n  - Chronic intractable constipation alternating with foul-smelling diarrhea.\n  - Classic **Ribbon-like (pellet-like), foul-smelling stools**.\n  - Visible peristalsis and palpable fecal masses in left lower quadrant.\n  - Digital Rectal Exam (DRE): Tight anal sphincter; upon withdrawal of examiner's finger, there is an **explosive gush of foul liquid stool and flatus** (temporary relief).\n* **Diagnostic Gold Standard:** **Full-thickness Rectal Suction Biopsy** (demonstrates complete absence of ganglion cells and hypertrophied nerve bundles).\n* **Treatment:** Temporary diverting colostomy followed by definitive pull-through surgery (**Swenson, Duhamel, or Soave pull-through**).",
                                              "clinicalPearl": "Hirschsprung's Disease hallmark triad: Failure to pass meconium within 48 hours + Abdominal distension + Explosive stool release upon digital rectal exam.",
                                              "normalValues": [
                                                    {
                                                          "label": "Normal Meconium Passage Limit",
                                                          "value": "Within first 24 hours of life"
                                                    },
                                                    {
                                                          "label": "Delayed Meconium Red Flag",
                                                          "value": "> 48 hours after delivery"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q65"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_peds_504",
                                        "label": "Neural Tube Defects (Spina Bifida, Meningocele, Myelomeningocele) & Shunts",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Sac Protection, Latex Precautions & Hydrocephalus Surveillance",
                                              "markdownContent": "### Spina Bifida Classifications\n* **Spina Bifida Occulta:** Defect in vertebral arches without herniation of spinal cord or meninges. Often asymptomatic; identified by skin manifestations at L5-S1: **tuft of dark hair, dimple, lipoma, or port-wine angioma**.\n* **Spina Bifida Cystica:**\n  - **Meningocele:** Sac contains **meninges and CSF only**; spinal cord remains within canal. Neurological function usually intact.\n  - **Myelomeningocele (Meningomyelocele):** Sac contains **meninges, CSF, spinal cord, and nerve roots**. Associated with sensory loss, motor paralysis of lower limbs, neurogenic bladder/bowel, and **Arnold-Chiari II malformation** leading to hydrocephalus.\n\n### Pre-Operative Nursing Management (Myelomeningocele)\n1. **Sac Care:** Cover the protruding sac immediately with a **sterile, moist, non-adherent dressing soaked in sterile Normal Saline**. Keep dressing moist by adding saline every 2–4 hours (prevents sac drying, tearing, and bacterial infection).\n2. **Positioning:** Maintain infant in a strict **PRONE position** (face down with head turned to side) with hips slightly flexed and abducted. Never place in supine position!\n3. **Infection Prevention:** Place a sterile plastic drape below the sac to prevent stool and urine contamination.\n4. **MANDATORY LATEX-FREE ENVIRONMENT:** Children with myelomeningocele have an extremely high risk of severe, life-threatening **Latex Allergy** due to frequent latex catheterizations and surgeries. Use strictly latex-free gloves, catheters, and supplies!\n\n### Hydrocephalus Signs & Ventriculoperitoneal (VP) Shunt Care\n* Signs: Enlarged head circumference ($> 97th$ percentile), bulging non-pulsatile anterior fontanelle, separated cranial sutures, dilated scalp veins, **\"Setting-Sun\" eye sign** (sclera visible above iris), and **Macewen's Sign (\"Cracked Pot\" sound)** upon cranial percussion.\n* VP Shunt Complications: Infection (fever, neck stiffness, red shunt track) and Shunt Malfunction/Obstruction (vomiting, headache, lethargy, sunsetting eyes).",
                                              "clinicalPearl": "Prevention of Neural Tube Defects: All women of childbearing age should take Folic Acid 0.4 mg (400 mcg) daily starting at least 1 month before conception through the first trimester. Women with a previous NTD-affected child require a high dose of 4.0 mg (4000 mcg) daily.",
                                              "clinicalAlert": "LATEX ALLERGY HAZARD: Every newborn with Spina Bifida / Myelomeningocele MUST be treated under strict LATEX-FREE precautions from the moment of birth! Never use natural rubber latex products.",
                                              "normalValues": [
                                                    {
                                                          "label": "Standard Preconceptional Folic Acid",
                                                          "value": "0.4 mg (400 mcg) daily"
                                                    },
                                                    {
                                                          "label": "High-Risk Recurrence Folic Acid Dose",
                                                          "value": "4.0 mg (4000 mcg) daily"
                                                    },
                                                    {
                                                          "label": "Myelomeningocele Surgical Window",
                                                          "value": "Within 24 to 48 hours of birth"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q27"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          }
    ]
  },
  {
    "id": "subj_psych_05",
    "name": "Psychiatric & Mental Health Nursing",
    "code": "PSY-105",
    "iconName": "Brain",
    "weightagePercentage": 10,
    "color": "#7c3aed",
    "subtopics": [
      {
        "id": "sub_psych_pharm_01",
        "title": "Psychopharmacology: Lithium, Antipsychotics, EPS & NMS",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_psych_1_1",
            "order": 1,
            "title": "Phase 1: Lithium Carbonate Kinetics, Clozapine & Antidepressants",
            "bulletPoints": [
              {
                "id": "bp_psych_101",
                "label": "Lithium Therapeutic Monitoring (0.6–1.2 mEq/L), Sodium Balance & Toxicity Traps",
                "isHighYield": true,
                "context": {
                  "heading": "Therapeutic Window & Sodium-Lithium Relationship",
                  "markdownContent": "### Lithium Carbonate Therapeutic Parameters\n* **Acute Mania Range:** **0.8 to 1.2 mEq/L**\n* **Maintenance Range:** **0.6 to 1.0 mEq/L**\n* **Toxicity Threshold:** **> 1.5 mEq/L** (Severe toxicity: > 2.0 to 2.5 mEq/L)\n* **Sampling Rule:** Draw serum lithium trough levels **exactly 12 hours after the previous evening dose**, usually in the morning before the next dose.\n\n### The Sodium-Lithium Renal Interplay (Cardinal Exam Rule)\n* Lithium is an alkali metal handled by the renal proximal tubules identically to Sodium ($Na^+$).\n* **Hyponatremia or Dehydration** (caused by sweating, fever, diarrhea, vomiting, or sodium-restricted diets) causes the kidneys to aggressively reabsorb sodium — **simultaneously reabsorbing toxic amounts of Lithium!**\n* **Diuretic Warning:** Thiazide diuretics (Hydrochlorothiazide) and Loop diuretics (Furosemide) are **CONTRAINDICATED** or require major dose reduction because they cause sodium depletion, precipitating severe lithium toxicity.\n* **NSAID Warning:** Ibuprofen, Indomethacin, and Naproxen decrease renal blood flow, increasing lithium levels by up to 40% (Acetaminophen/Aspirin are safer alternatives).\n\n### Signs of Lithium Toxicity by Severity\n* **Mild Toxicity (1.5–2.0 mEq/L):** Blurred vision, coarse hand tremors, persistent nausea, vomiting, severe diarrhea, muscle weakness.\n* **Moderate to Severe Toxicity (2.0–2.5 mEq/L):** Ataxia, giddiness, slurred speech, clonic jerks, hyperreflexia, tinnitus, large output of dilute urine.\n* **Life-Threatening (> 2.5 mEq/L):** Seizures, cardiac dysrhythmias, peripheral vascular collapse, oliguria/renal failure, coma, death. (Treatment: Hemodialysis).",
                  "clinicalPearl": "Instruct patients on Lithium to maintain a CONSTANT, NORMAL dietary sodium intake and drink 2 to 3 Liters of fluid daily. Never initiate a low-salt diet or engage in uncompensated strenuous sweating — sodium loss triggers immediate lithium toxicity!",
                  "clinicalAlert": "Fine resting hand tremors are a common, benign therapeutic side effect of lithium. But a COARSE hand tremor, accompanied by ataxia and diarrhea, is a hallmark of LITHIUM TOXICITY — hold the drug and draw a stat serum lithium level!",
                  "normalValues": [
                    {
                      "label": "Lithium Acute Mania Target",
                      "value": "0.8–1.2 mEq/L"
                    },
                    {
                      "label": "Lithium Maintenance Target",
                      "value": "0.6–1.0 mEq/L"
                    },
                    {
                      "label": "Lithium Toxic Blood Level",
                      "value": "> 1.5 mEq/L"
                    },
                    {
                      "label": "Trough Blood Draw Timing",
                      "value": "Strictly 12 hours post last dose"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S1_Q11"
                  ]
                }
              },
              {
                "id": "bp_psych_102",
                "label": "Clozapine Agranulocytosis Protocol (ANC Monitoring) & SSRI / MAOI Dietary Rules",
                "isHighYield": true,
                "context": {
                  "heading": "Atypical Antipsychotics & Antidepressant Lethal Interactions",
                  "markdownContent": "### Clozapine (Clozaril) & Agranulocytosis Protocol\n* Indication: Treatment-resistant Schizophrenia and recurrent suicidal behavior.\n* Black Box Warning: **Agranulocytosis** (severe, life-threatening drop in white blood cells).\n* **Laboratory Monitoring Mandate:**\n  * Must check baseline **Absolute Neutrophil Count (ANC)** before initiating.\n  * Monitor ANC **weekly for the first 6 months**, then bi-weekly for 6 months, then monthly.\n  * **Thresholds:** Withhold Clozapine if **ANC < 1500 /mcL** (< 1.5 × 10⁹/L). If ANC < 1000 /mcL, permanently discontinue drug!\n  * Patient Education: Teach patient to report immediate signs of infection: **sore throat, fever, chills, body aches, mouth ulcers**.\n\n### MAOIs (Monoamine Oxidase Inhibitors) & Hypertensive Crisis\n* Drugs: Phenelzine, Tranylcypromine, Isocarboxazid, Selegiline.\n* Mechanism: Inhibit monoamine oxidase, preventing breakdown of tyramine in the gut.\n* **Tyramine Dietary Restriction:** Ingesting tyramine-rich foods triggers massive norepinephrine release, causing fatal **Hypertensive Crisis** (systolic BP > 200 mmHg, occipital headache, neck stiffness, intracranial hemorrhage).\n* **Forbidden Foods:** Aged cheeses (cheddar, blue), cured/smoked meats (salami, pepperoni), red wine, tap beers, soy sauce, fava beans, yeast extracts (Marmite).",
                  "clinicalPearl": "A patient on Clozapine presenting with a mild fever or sore throat must have an immediate emergency Complete Blood Count (CBC) with differential. Never treat with routine antipyretics without verifying Absolute Neutrophil Count!",
                  "clinicalAlert": "Never combine an SSRI (Fluoxetine, Sertraline) with an MAOI! Allow a strict 14-day washout period (5 weeks for Fluoxetine) between discontinuing one and starting the other to prevent fatal Serotonin Syndrome.",
                  "normalValues": [
                    {
                      "label": "Clozapine Safe Baseline ANC",
                      "value": "≥ 1500 /mcL (≥ 1.5 × 10⁹/L)"
                    },
                    {
                      "label": "Clozapine Severe Neutropenia Stop Level",
                      "value": "< 1000 /mcL (Permanent Discontinuation)"
                    },
                    {
                      "label": "SSRI to MAOI Washout Period",
                      "value": "Minimum 14 days (5 weeks for Fluoxetine)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S2_Q52"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_psych_1_2",
            "order": 2,
            "title": "Phase 2: Antipsychotic Complications: Acute Dystonia, Akathisia & NMS Protocol",
            "bulletPoints": [
              {
                "id": "bp_psych_103",
                "label": "Extrapyramidal Symptoms (EPS) vs Neuroleptic Malignant Syndrome (NMS) Management",
                "isHighYield": true,
                "context": {
                  "heading": "Differential Diagnosis of Dopaminergic Blockade Complications",
                  "markdownContent": "### EPS vs NMS Comparison Matrix\n\n| Adverse Syndrome | Onset Timeline | Clinical Hallmark Signs | Primary Medical / Nursing Action |\n| :--- | :--- | :--- | :--- |\n| **Acute Dystonia** | Hours to Days | Severe painful muscle spasm of neck (torticollis), tongue protrusion, upward gaze (**Oculogyric Crisis**) | **Emergency IV/IM Diphenhydramine (50 mg) or Benztropine (1–2 mg)** |\n| **Akathisia** | Days to Weeks | Intense internal motor restlessness, pacing, inability to sit still (often mistaken for anxiety) | **Beta-blockers (Propranolol)** or Benzodiazepines (Lorazepam) |\n| **Pseudoparkinsonism** | Weeks to Months | Shuffling gait, pill-rolling tremor, cogwheel rigidity, mask-like blank facies | Oral Anticholinergics (Trihexyphenidyl / Benztropine) |\n| **Tardive Dyskinesia** | Months to Years | Involuntary rhythmic choreoathetoid movements of tongue, lip smacking, facial grimacing | Discontinue agent; switch to Clozapine. (Anticholinergics worsen TD!) |\n| **Neuroleptic Malignant Syndrome (NMS)** | Any time (Hours to Days) | **Hyperpyrexia (Temp > 40°C), \"Lead-Pipe\" muscle rigidity**, autonomic instability, CK > 10,000 U/L | **STOP ANTIPSYCHOTIC IMMEDIATELY! Administer Dantrolene & Bromocriptine** |",
                  "clinicalPearl": "Acute Dystonia can cause laryngeal dystonia, closing the airway within minutes. Always treat oculogyric crisis or severe tongue spasm as an emergency airway threat and give IM/IV Diphenhydramine or Benztropine stat.",
                  "clinicalAlert": "Never confuse NMS with Serotonin Syndrome! NMS has \"Lead-pipe\" rigidity and hyporeflexia. Serotonin Syndrome has hyperreflexia, shivering, and prominent clonus (myoclonus).",
                  "normalValues": [
                    {
                      "label": "Normal Serum CK Level",
                      "value": "55–170 U/L"
                    },
                    {
                      "label": "NMS Serum CK Elevation",
                      "value": "> 1,000 to > 10,000+ U/L"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S2_Q52"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_psych_schiz_02",
        "title": "Schizophrenia Spectrum, Delusional Disorders & Hallucination Management",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_psych_2_1",
            "order": 1,
            "title": "Phase 1: Schneiderian First-Rank Symptoms & Bleuler's 4 A's Criteria",
            "bulletPoints": [
              {
                "id": "bp_psych_201",
                "label": "Schneiderian First-Rank Symptoms & Delusion Typologies (Persecutory, Grandiose, Nihilistic)",
                "isHighYield": true,
                "context": {
                  "heading": "Diagnostic Criteria & Delusional Patterns in Psychosis",
                  "markdownContent": "### Schneider's First-Rank Symptoms of Schizophrenia\nKurt Schneider identified specific symptoms whose presence strongly diagnoses schizophrenia in the absence of organic disease:\n1. **Auditory Hallucinations:**\n   * Hearing voices arguing with each other.\n   * Hearing voices commenting on one's actions in real-time (third-person commentary).\n   * Audible thoughts (Gedankenlautwerden / Thought echo).\n2. **Delusions of Passivity / Control:**\n   * \"Made\" feelings, \"made\" impulses, or \"made\" volitional acts (belief that somatic actions are controlled by an external alien force).\n3. **Thought Alienation Phenomenon:**\n   * **Thought Insertion:** Foreign thoughts are placed directly into the mind from an outside agency.\n   * **Thought Broadcasting:** One's private thoughts escape into the open and are heard by everyone.\n   * **Thought Withdrawal:** Thoughts are suddenly stolen or sucked out of the mind.\n\n### Bleuler's 4 A's of Schizophrenia (Fundamental Symptoms)\n* **A - Affective Blunting:** Flat, shallow, or inappropriate emotional expression.\n* **A - Associative Looseness:** Fragmented, illogically connected speech; word salad, flight of ideas.\n* **A - Autism:** Social withdrawal, living in an internal fantasy world detached from reality.\n* **A - Ambivalence:** Simultaneous co-existence of two opposing feelings, wishes, or impulses toward the same object.",
                  "clinicalPearl": "Hallucinations are sensory perceptions without an external stimulus (hearing voices). Illusions are misinterpretations of an ACTUAL external stimulus (seeing a snake in a dark corner which is actually a coiled garden hose). Know this distinction on exam day!",
                  "clinicalAlert": "Command Hallucinations (voices telling the patient to harm themselves or others) represent a psychiatric emergency. Always ask directly: \"What are the voices telling you to do?\" and initiate immediate 1:1 suicide/violence precautions if commands are destructive.",
                  "normalValues": [
                    {
                      "label": "DSM-5 Schizophrenia Duration Criterion",
                      "value": "Minimum 6 months with ≥ 1 month active symptoms"
                    },
                    {
                      "label": "Brief Psychotic Disorder Duration",
                      "value": "< 1 month (Full recovery)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S1_Q67"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_psych_2_2",
            "order": 2,
            "title": "Phase 2: Therapeutic Communication Protocols for Hallucinations & Paranoia",
            "bulletPoints": [
              {
                "id": "bp_psych_202",
                "label": "Verbal De-escalation & Communication Protocols for Actively Hallucinating Patients",
                "isHighYield": true,
                "context": {
                  "heading": "Clinical Communication Safeguards with Psychotic Patients",
                  "markdownContent": "### Cardinal Communication Rules for Delusions & Hallucinations\n1. **Never Validate or Reinforce the False Perception:**\n   * INCORRECT: \"Yes, I see the man standing by the door too.\" (Never lie or validate).\n2. **Never Argue, Debate, or Attempt to Disprove the Delusion:**\n   * INCORRECT: \"That is scientifically impossible; the government is not tracking you through the TV.\" (Causes intense paranoia and damages nurse-patient rapport).\n3. **Acknowledge the Patient's Feelings & State Reality Clearly:**\n   * CORRECT (Gold Standard): *\"I understand that you hear voices speaking to you and it must feel very frightening, but I do not hear any voices.\"*\n4. **Distract and Redirect to Reality-Based Activities:**\n   * Focus on real, concrete here-and-now activities: simple board games, listening to music through headphones, coloring, or discussing current ward activities.\n\n### Managing Paranoia & Persecutory Delusions\n* Do not whisper, laugh, or speak quietly within sight of the paranoid patient.\n* Provide pre-packaged, sealed food (canned food, milk cartons, bananas) if the patient fears food is being poisoned.\n* Do not touch the patient without prior verbal warning and permission.",
                  "clinicalPearl": "When a patient experiences persecutory delusions, encourage them to express their feelings (fear, anger), but do not delve into the intricate details of the delusion — delusive exploration only reinforces the delusional framework.",
                  "clinicalAlert": "Never touch an acutely paranoid patient from behind or enter their personal space abruptly — paranoid patients misinterpret touch as physical attack, prompting explosive defensive violence.",
                  "normalValues": [
                    {
                      "label": "Interpersonal Distance in Paranoia",
                      "value": "Maintain 4–6 feet (comfortable personal boundary)"
                    },
                    {
                      "label": "Milieu Environment",
                      "value": "Low stimulus, minimal ambient noise, no bright strobing lights"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S1_Q67"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_psych_mood_03",
        "title": "Mood Disorders, Bipolar Mania & Suicide Crisis Intervention",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_psych_3_1",
            "order": 1,
            "title": "Phase 1: Bipolar Mania Acute Care & Nutritional Interventions",
            "bulletPoints": [
              {
                "id": "bp_psych_301",
                "label": "Acute Manic Episode Management: Milieu Therapy & High-Calorie Finger Foods",
                "isHighYield": true,
                "context": {
                  "heading": "Bipolar I Disorder Acute Mania Nursing Care Hierarchy",
                  "markdownContent": "### Core Clinical Manifestations of Acute Mania (DIG FAST)\n* **D**istractibility, **I**ndiscretion (reckless spending, hypersexuality), **G**randiosity, **F**light of ideas, **A**ctivity increase (psychomotor agitation), **S**leep deficit (feels fully rested after 2 hours), **T**alkativeness (pressured speech).\n\n### Essential Nursing Priorities in Acute Mania\n1. **Safety & Environmental Milieu:**\n   * Assign a **private room in a quiet area** of the unit away from nurses' stations, television lounges, and elevators.\n   * Keep environmental stimuli (lighting, sound, visual clutter) as LOW as possible.\n2. **Nutrition & Hydration (Classic Exam Question):**\n   * Manic patients are constantly pacing and cannot sit down for three structured meals a day, leading to severe dehydration, weight loss, and physical exhaustion.\n   * Provide **High-Protein, High-Calorie FINGER FOODS** that can be eaten on the move:\n     * Examples: Sandwiches, cheese sticks, hard-boiled eggs, chicken tenders, protein shakes, peanut butter crackers, cut fruit.\n3. **Communication Strategies:**\n   * Use **calm, firm, short, concise statements**. Avoid long explanations or philosophical debates.\n   * Set clear, consistent behavioral limits on manipulative behavior and intrusive boundary-crossing.",
                  "clinicalPearl": "When a manic patient is pacing restlessly, offer nutritious finger foods and beverages frequently throughout the day. Never demand that the patient sit down at a dining table to finish their meal.",
                  "clinicalAlert": "Acute physical exhaustion in mania is a medical emergency that can precipitate fatal cardiovascular collapse. If non-pharmacological soothing fails, administer prescribed rapid-acting sedatives (Haloperidol + Lorazepam).",
                  "normalValues": [
                    {
                      "label": "Target Daily Fluid Intake in Mania",
                      "value": "2500–3000 mL/day"
                    },
                    {
                      "label": "Ideal Physical Exercise",
                      "value": "Solitary, non-competitive activities (walking, sweeping, coloring)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S1_Q48"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_psych_3_2",
            "order": 2,
            "title": "Phase 2: SAD PERSONS Suicide Risk Stratification & 1:1 Safety Precautions",
            "bulletPoints": [
              {
                "id": "bp_psych_302",
                "label": "SAD PERSONS Suicide Risk Scale, Direct Inquiry & The High-Risk \"Improvement\" Window",
                "isHighYield": true,
                "context": {
                  "heading": "Suicide Lethality Assessment & Constant Observation Protocols",
                  "markdownContent": "### SAD PERSONS Suicide Lethality Scale\n* **S**ex (Male gender has higher completed suicide rate; females have higher attempt rate)\n* **A**ge (< 19 or > 45 years)\n* **D**epression / Hopelessness\n* **P**revious attempt (Single strongest predictor of future completed suicide!)\n* **E**thanol / Substance abuse\n* **R**ational thinking loss (psychosis, command hallucinations)\n* **S**ocial support lacking\n* **O**rganized plan (detailed lethal plan with accessible means = immediate danger)\n* **N**o spouse (single, widowed, divorced)\n* **S**ickness (chronic, debilitating, terminal illness)\n* **Scoring:** Score ≥ 7–10 indicates extreme suicide risk requiring immediate hospitalization and 1:1 observation.\n\n### The \"Sudden Improvement\" Paradox (The Golden NORCET Trap)\n* A severely depressed patient who **suddenly becomes cheerful, peaceful, calm, and energetic** is at the **HIGHEST IMMEDIATE RISK OF SUICIDE**.\n* *Explanation:* The sudden elevation in mood often occurs because the patient has finally made the decision to end their life, feeling relief that their suffering is ending, and now possesses the physical energy to carry out the lethal plan.\n\n### Nursing Interventions for Suicide Risk\n* **Direct Inquiry:** Always ask directly: *\"Are you having thoughts of killing yourself? Do you have a plan?\"* (Direct questioning DOES NOT plant the idea of suicide into the patient's mind).\n* **1:1 Constant Observation:** Assign a designated staff member to maintain visual contact **within arm's reach 24/7**, including during bathroom and shower use.\n* **Environmental Safety:** Remove all sharp objects, mirrors, belts, shoelaces, electrical cords, and glass items. Search personal belongings and inspect visitor gifts.",
                  "clinicalPearl": "Asking a patient directly about suicide does NOT encourage or plant the thought of suicide. It provides tremendous relief to an overwhelmed patient and opens the door for life-saving communication.",
                  "clinicalAlert": "Never decrease suicide observation levels when a severely depressed patient suddenly appears happier or gives away cherished personal possessions — this is the classic warning sign of imminent suicide execution!",
                  "normalValues": [
                    {
                      "label": "SAD PERSONS High-Risk Cut-off",
                      "value": "Score ≥ 7"
                    },
                    {
                      "label": "Observation Protocol for Active Plan",
                      "value": "1:1 Continuous visual contact within arm's reach"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S1_Q48"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_psych_ect_04",
        "title": "Electroconvulsive Therapy (ECT) Protocols & Ego Defense Mechanisms",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_psych_4_1",
            "order": 1,
            "title": "Phase 1: Pre-ECT Preparation, Anesthesia Triad & Post-ECT Amnesia Care",
            "bulletPoints": [
              {
                "id": "bp_psych_401",
                "label": "Pre-ECT Anticholinergic & Neuromuscular Blockade Protocol (Atropine, Succinylcholine)",
                "isHighYield": true,
                "context": {
                  "heading": "Somatotherapy & Controlled Seizure Induction Guidelines",
                  "markdownContent": "### Primary Indications for ECT\n1. **Severe Major Depression with active suicidal intent or psychotic features** requiring rapid emergency response.\n2. Treatment-resistant Depression unresponsive to multiple antidepressant trials.\n3. Severe catatonia and acute intractable mania.\n\n### Pre-ECT Medication Triad & Rationales\n1. **Atropine Sulfate (or Glycopyrrolate) IM/IV 30 min prior:**\n   * *Purpose:* Anticholinergic given to **dry oral secretions** (preventing aspiration) and **prevent severe vagal bradycardia / asystole** triggered by electrical stimulation.\n2. **Methohexital / Propofol IV:**\n   * *Purpose:* Ultra short-acting anesthetic given immediately before stimulation to induce rapid unconsciousness.\n3. **Succinylcholine (Anectine) IV:**\n   * *Purpose:* Short-acting depolarizing neuromuscular blocker given to **relax skeletal muscles**, preventing violent motor spasms, spinal compression fractures, and joint dislocations during the generalized tonic-clonic seizure.\n\n### Procedural & Post-ECT Care\n* Pre-op: Strictly **NPO for 6 to 8 hours**; remove dentures, eyeglasses, hearing aids, and hairpins; have patient void bladder.\n* **Seizure Duration:** Effective therapeutic generalized seizure lasts **at least 25 to 60 seconds**.\n* Post-op: Position patient on side (**lateral recovery position**) to prevent airway aspiration; monitor vitals.\n* **Most Common Side Effect:** Transient **Retrograde & Anterograde Amnesia (memory loss)** and confusion, which typically resolves within weeks.",
                  "clinicalPearl": "The only ABSOLUTE CONTRAINDICATION to ECT is Increased Intracranial Pressure (ICP) (due to brain tumor, aneurysm, or recent cerebrovascular hemorrhage) because ECT transiently raises cerebral blood flow and intracranial pressure.",
                  "clinicalAlert": "Under the Mental Healthcare Act (MHCA 2017), \"Direct ECT\" (administering ECT without muscle relaxants and general anesthesia) is STRICTLY ILLEGAL in India. Modified ECT with full anesthesia and muscle relaxation is mandatory.",
                  "normalValues": [
                    {
                      "label": "Minimum NPO Duration for ECT",
                      "value": "6–8 hours"
                    },
                    {
                      "label": "Ideal Therapeutic Seizure Duration",
                      "value": "25–60 seconds"
                    },
                    {
                      "label": "Standard Treatment Course",
                      "value": "6 to 12 sessions (2–3 times weekly)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S2_Q19"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_psych_4_2",
            "order": 2,
            "title": "Phase 2: Ego Defense Mechanisms Differentiation (Sublimation, Projection, Reaction Formation)",
            "bulletPoints": [
              {
                "id": "bp_psych_402",
                "label": "High-Yield Ego Defense Mechanisms Matrix with Clinical Exam Vignettes",
                "isHighYield": true,
                "context": {
                  "heading": "Psychodynamic Defense Mechanisms & Scenario Differentiators",
                  "markdownContent": "### Ego Defense Mechanisms Matrix (NORCET High-Frequency)\n\n| Defense Mechanism | Psychological Definition | Clinical Exam Vignette |\n| :--- | :--- | :--- |\n| **Sublimation (Healthy)** | Channeling unacceptable sexual or aggressive impulses into socially productive, positive activities. | A man with intense aggressive impulses becomes a champion competitive boxer or surgeon. |\n| **Projection** | Attributing one's own unacknowledged, unacceptable feelings or thoughts onto another person. | A husband who is secretly having extramarital desires constantly accuses his faithful wife of cheating. |\n| **Reaction Formation** | Expressing thoughts, attitudes, or behaviors that are the exact OPPOSITE of one's true unconscious feelings. | A woman who intensely dislikes her demanding mother-in-law acts overly affectionate and showers her with constant gifts. |\n| **Displacement** | Shifting unacceptable feelings or anger from a threatening target to a safer, less threatening object. | An employee who is berated by his angry boss goes home and kicks the family dog or yells at his child. |\n| **Rationalization** | Formulating logical, plausible, socially acceptable excuses to justify unacceptable behaviors or feelings. | A student who fails an examination says, \"The teacher hates me and made the questions tricky on purpose.\" |\n| **Undoing** | Engaging in an action or ritual to symbolically cancel out or make amends for a previous unacceptable act or thought. | A husband who physically abuses his wife buys her an expensive diamond necklace the next morning. |\n| **Regression** | Retreating to an earlier, more comfortable developmental stage during times of acute psychological stress. | A toilet-trained 5-year-old child starts wetting the bed and sucking his thumb after a new baby sibling is born. |",
                  "clinicalPearl": "Sublimation and Altruism are the ONLY purely mature, healthy ego defense mechanisms recognized in psychology. All other defense mechanisms distort reality to protect the ego from acute anxiety.",
                  "clinicalAlert": "Exam Distinction: Projection = Blaming others for your own internal faults. Displacement = Transferring anger from a powerful person to a helpless object. Do not confuse them on exam day!",
                  "normalValues": [
                    {
                      "label": "Most Mature Defense Mechanism",
                      "value": "Sublimation & Altruism"
                    },
                    {
                      "label": "Most Immature / Pathological Defenses",
                      "value": "Denial, Splitting & Projection"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S2_Q31"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_psych_substance_05",
        "title": "Substance Use Disorders, Alcohol Withdrawal & Delirium Tremens",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_psych_5_1",
            "order": 1,
            "title": "Phase 1: CIWA-Ar Protocol & Delirium Tremens (DTs) Medical Emergency",
            "bulletPoints": [
              {
                "id": "bp_psych_501",
                "label": "Alcohol Withdrawal Timeline, CIWA Scoring & Benzodiazepine Taper Protocol",
                "isHighYield": true,
                "context": {
                  "heading": "Alcohol Withdrawal Syndrome Chronology & Pharmacotherapy",
                  "markdownContent": "### Alcohol Withdrawal Chronological Spectrum\n* **Mild / Stage 1 (6 to 12 hours post-last drink):** Fine hand tremors, diaphoresis, tachycardia, hypertension, insomnia, mild nausea, anxiety.\n* **Alcoholic Hallucinosis (12 to 24 hours):** Auditory, visual, or tactile illusions/hallucinations with a CLEAR SENSORIUM (intact orientation).\n* **Withdrawal Seizures (24 to 48 hours):** Generalized tonic-clonic (\"rum fits\") seizures.\n* **Delirium Tremens (DTs) (48 to 72+ hours - MEDICAL EMERGENCY):**\n  * Severe fluctuating consciousness, disorientation, gross autonomic hyperactivity (severe tachycardia, extreme fever, profuse sweating, malignant hypertension), violent agitation, and **vivid tactile hallucinations (bugs/insects crawling on skin - Formication)** or visual terrors.\n  * Untreated mortality reaches up to 15%–20% due to cardiovascular collapse or hyperthermia.\n\n### CIWA-Ar (Clinical Institute Withdrawal Assessment)\nAssesses 10 parameters (Nausea, Tremor, Sweats, Anxiety, Agitation, Tactile/Auditory/Visual disturbances, Headache, Orientation).\n* **Score < 10:** Mild withdrawal (supportive care).\n* **Score 10–19:** Moderate withdrawal (requires scheduled benzodiazepines).\n* **Score ≥ 20:** Severe withdrawal (high risk of Delirium Tremens; aggressive IV benzodiazepines).\n\n### Pharmacological Management of Withdrawal\n* **First-Line Drug of Choice:** **Benzodiazepines** (Chlordiazepoxide [Librium] or Diazepam [Valium]). They provide cross-tolerance with alcohol at GABA-A receptors, calming hyperactivity and preventing seizures.\n* In patients with **hepatic failure / cirrhosis**: Use short-acting Benzodiazepines that undergo direct glucuronidation without active hepatic metabolites: **Lorazepam (Ativan)** or Oxazepam.",
                  "clinicalPearl": "The drug of choice for alcohol withdrawal is Chlordiazepoxide (Librium) or Diazepam. However, in patients with severe alcoholic liver cirrhosis or hepatitis, LORAZEPAM (Ativan) is preferred because it is not metabolized by hepatic cytochrome P450 enzymes.",
                  "clinicalAlert": "Never restrain a patient in Delirium Tremens without continuous visual monitoring! Restraints intensify panic, physical struggle, and lactic acidosis, accelerating sudden cardiac death from autonomic exhaustion.",
                  "normalValues": [
                    {
                      "label": "Delirium Tremens Peak Onset Window",
                      "value": "48–72 hours after last drink"
                    },
                    {
                      "label": "CIWA-Ar Severe Score Threshold",
                      "value": "Score ≥ 20"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S2_Q56"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_psych_5_2",
            "order": 2,
            "title": "Phase 2: Wernicke-Korsakoff Syndrome & Thiamine-Before-Glucose Rule",
            "bulletPoints": [
              {
                "id": "bp_psych_502",
                "label": "Wernicke Encephalopathy Triad & The Life-Saving \"Thiamine Before Dextrose\" Mandate",
                "isHighYield": true,
                "context": {
                  "heading": "Thiamine (Vitamin B1) Deficiency Neuropsychiatric Emergencies",
                  "markdownContent": "### Wernicke's Encephalopathy (Acute & Reversible)\nCaused by severe **Thiamine (Vitamin B1) deficiency** secondary to chronic alcohol malnutrition and impaired intestinal absorption:\n* **Classic Clinical Triad (Mnemonic: CAN):**\n  1. **C - Confusion** (Global cognitive dullness, disorientation)\n  2. **A - Ataxia** (Wide-based, unsteady staggering gait)\n  3. **N - Nystagmus & Ophthalmoplegia** (Horizontal nystagmus, bilateral sixth nerve ocular palsy)\n\n### Korsakoff's Psychosis (Chronic & Often Irreversible)\nIf Wernicke's encephalopathy is untreated or treated too late, irreversible necrosis of the mamillary bodies and thalamus develops:\n* **Hallmark Features:**\n  * Severe **Anterograde and Retrograde Amnesia**.\n  * **Confabulation:** The patient makes up imaginary, fabricated stories to fill in gaps in their memory, genuinely believing the fabrications are true (NOT intentional lying!).\n\n### The Life-Saving \"Thiamine Before Glucose\" Rule (Exam Priority)\n* **NEVER ADMINISTER INTRAVENOUS GLUCOSE (D5W / D10W) BEFORE GIVING THIAMINE!**\n* *Biochemical Rationale:* Glucose metabolism requires thiamine pyrophosphate as an essential cofactor in the Krebs cycle. Infusing glucose into a thiamine-depleted patient rapidly exhausts any microscopic remaining thiamine stores, precipitating acute, fatal Wernicke encephalopathy and sudden death.\n* **Mandatory Nursing Protocol:** Always administer **High-Dose IV Thiamine (Pabrinex / 200–500 mg IV)** first, THEN administer IV glucose fluids.",
                  "clinicalPearl": "GOLDEN RULE IN EMERGENCY: When an unresponsive or hypoglycemic chronic alcoholic patient arrives in the ER, always administer INTRAVENOUS THIAMINE BEFORE OR CONCURRENTLY WITH INTRAVENOUS DEXTROSE. Dextrose alone can trigger permanent brain damage!",
                  "clinicalAlert": "Disulfiram (Antabuse) Education: If a patient takes alcohol while on Disulfiram, it causes acute acetaldehyde accumulation resulting in severe throbbing headache, flushing, nausea, vomiting, chest pain, and hypotension. Warn patients to avoid ALL hidden alcohol: cough syrups, mouthwashes, aftershaves, and vinegar!",
                  "normalValues": [
                    {
                      "label": "Therapeutic IV Thiamine Dose in Wernicke's",
                      "value": "200–500 mg IV TID for 3–5 days"
                    },
                    {
                      "label": "Disulfiram Alcohol Avoidance Window",
                      "value": "Must avoid alcohol for 14 days after stopping Disulfiram"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S2_Q56"
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "subj_chn_06",
    "name": "Community Health Nursing & Epidemiology",
    "code": "CHN-106",
    "iconName": "ShieldAlert",
    "weightagePercentage": 10,
    "color": "#059669",
    "subtopics": [
          {
                "id": "sub_chn_bmw_01",
                "title": "Biomedical Waste (BMW 2016/2019 Rules), Infection Control & Environmental Sanitation",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_chn_1_1",
                            "order": 1,
                            "title": "Phase 1: 4-Color Category Segregation & Spill Protocols",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_101",
                                        "label": "BMW Rules 2016/2018/2019 4-Color Coded Segregation & Disposal Matrix",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Hospital Waste Segregation Bins & Final Treatment Methods",
                                              "markdownContent": "### Biomedical Waste Management (BMW) Color-Coded Segregation\n\n| Bin Color | Container Type | Permissible Waste Types | Treatment & Disposal Route |\n| :--- | :--- | :--- | :--- |\n| **Yellow** | Non-chlorinated plastic bags | Human & animal anatomical tissues, placenta, amputated organs, soiled gauze/dressings, blood bags, expired cytotoxic drugs, microbiology cultures | Incineration (>1050°C) or plasma pyrolysis; deep burial in remote rural areas |\n| **Red** | Non-chlorinated plastic bags | Contaminated recyclable plastics: IV tubings, Foley catheters, urine bags, Ryle's tubes, plastic syringe barrels WITHOUT needles, disposable gloves | Autoclaving/Microwaving followed by shredding and recycling |\n| **White (Translucent)** | Puncture-proof, tamper-proof, leak-proof container | Metal sharps: Contaminated needles, fixed-needle syringes, scalpels, surgical blades, lumbar puncture needles, suture needles | Autoclaving/Dry heat, followed by shredding/mutilation and encapsulation in sharp pit |\n| **Blue** | Puncture-proof cardboard box / container with blue marking | Glassware & metal body implants: Broken or intact medicine ampoules, vials, glass slides, orthopedic implants, pins | Disinfection (soaking in 1% sodium hypochlorite) or autoclaving/microwaving, then recycling |",
                                              "clinicalPearl": "CRITICAL EXAM TRAP: Blood Bags are made of plastic, but they ALWAYS go into the YELLOW container because they contain whole biological biohazard fluid! Syringe plastic barrel goes into RED, but the detached needle goes into WHITE puncture-proof container.",
                                              "clinicalAlert": "BMW must never be stored beyond a maximum of 48 hours without treatment. Non-chlorinated plastic bags are mandatory to prevent toxic dioxin and furan emission during incineration.",
                                              "normalValues": [
                                                    {
                                                          "label": "Maximum BMW Storage Time",
                                                          "value": "Strictly within 48 hours"
                                                    },
                                                    {
                                                          "label": "Yellow Bin Incineration Secondary Chamber Temp",
                                                          "value": "1050°C ± 50°C"
                                                    },
                                                    {
                                                          "label": "White Container Sharps Pit Sealing",
                                                          "value": "Filled up to 3/4th capacity before sealing"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q11",
                                                    "ESIC_2024_Q02"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_102",
                                        "label": "Hospital Blood & Chemical Spill Management with Sodium Hypochlorite",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Body Fluid Spill Decontamination Protocol",
                                              "markdownContent": "### Spill Management Protocol & Hypochlorite Dilution\n* **Minor Blood Spill (< 10 mL):**\n  * Cover spill area with paper towels/gauze.\n  * Pour freshly prepared **1% Sodium Hypochlorite** solution (10,000 ppm available chlorine).\n  * Allow a mandatory **20 to 30 minutes contact time** for bacterial, viral (HIV, HBV, HCV), and spore disinfection.\n  * Wipe up absorbent towels, discard in **Yellow Bin**, and mop area.\n* **Major Blood Spill (> 10 mL / Gross Pool):**\n  * Flood the spill with **10% Sodium Hypochlorite** solution (100,000 ppm available chlorine).\n  * Allow **30 minutes contact time**.\n  * Use dedicated spill kit scoop and absorbent granules/towels. Discard contaminated waste into **Yellow Bin**.\n* **Mercury Spill Management:**\n  * NEVER use a vacuum cleaner, broom, or bleach!\n  * Wear nitrile gloves; pick up mercury beads using cardboard sheets or a 10 mL syringe/eyedropper.\n  * Consolidate beads into an airtight plastic container containing water/glycerin.\n  * Sprinkle sulfur powder or calcium hydroxide over residual micro-droplets.",
                                              "clinicalPearl": "Sodium hypochlorite solutions are unstable and degrade rapidly upon exposure to air and light. They must be prepared freshly every 24 hours in opaque plastic containers.",
                                              "normalValues": [
                                                    {
                                                          "label": "Minor Spill (<10 mL) Hypochlorite Conc",
                                                          "value": "1% (10,000 ppm) for 20–30 min"
                                                    },
                                                    {
                                                          "label": "Major Spill (>10 mL) Hypochlorite Conc",
                                                          "value": "10% (100,000 ppm) for 30 min"
                                                    },
                                                    {
                                                          "label": "Hypochlorite Solution Shelf Life",
                                                          "value": "Freshly prepared every 24 hours"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q11"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_chn_1_2",
                            "order": 2,
                            "title": "Phase 2: Water Purification, Chlorination & Sanitation Standards",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_103",
                                        "label": "Large-Scale Water Purification & Orthotolidine (OT/OTA) Chlorination Tests",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Chlorination Dynamics & Chlorine Demand Testing",
                                              "markdownContent": "### Stages of Large-Scale Water Purification\n1. **Storage / Sedimentation:** Reduces suspended solids by 90% and aerobic bacteria by 90–95% over 10–14 days.\n2. **Filtration:**\n   - **Slow Sand (Biological) Filters:** Uses vital layer (*Schmutzdecke* / zoogleal slimy layer) containing algae, bacteria, and protozoa. Does NOT require pre-coagulation. Cleans water by scraping top layer.\n   - **Rapid Sand (Mechanical) Filters:** Requires chemical coagulation with **Alum (Aluminum sulfate 5–40 mg/L)**. Cleans water by **backwashing** with compressed air and clean water.\n3. **Disinfection (Chlorination):**\n   - Chlorine acts as **Hypochlorous acid (HOCl)**, which is 70–80 times more bactericidal than hypochlorite ion ($OCl^-$).\n   - **Breakpoint Chlorination:** The point where all chlorine demand (organic matter, ammonia, iron) has been satisfied and free residual chlorine begins to appear.\n   - **Horrock's Apparatus:** Determines the chlorine demand (bleaching powder requirement) of water.\n   - **Orthotolidine (OT) Test:** Reacts with free and combined chlorine to produce a yellow color. Free chlorine yellow color forms within **10 seconds**, while combined chloramines take **15–20 minutes**.\n   - **Orthotolidine Arsenite (OTA) Test:** Specifically differentiates free chlorine from chloramines and eliminates false-positive interference from iron, manganese, and nitrites.",
                                              "clinicalPearl": "For drinking water disinfection, the minimum Free Residual Chlorine must be 0.5 mg/L (0.5 ppm) after a mandatory 1-hour contact period. During epidemics (e.g. Cholera), target free residual chlorine is 1.0 mg/L.",
                                              "normalValues": [
                                                    {
                                                          "label": "Post-Contact Free Residual Chlorine",
                                                          "value": "≥ 0.5 mg/L (ppm) after 1 hour"
                                                    },
                                                    {
                                                          "label": "Epidemic Cholera Residual Chlorine Target",
                                                          "value": "1.0 mg/L (ppm)"
                                                    },
                                                    {
                                                          "label": "Bleaching Powder Available Chlorine",
                                                          "value": "33% available chlorine"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_104",
                                        "label": "Solid Waste Management, Sanitary Landfill & Sewage Treatment Indices",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "Municipal & Hospital Environmental Sanitation Standards",
                                              "markdownContent": "### Methods of Solid Waste Disposal\n* **Sanitary Landfill (Controlled Tipping):** Most hygienic and economical method for municipal solid refuse. Refuse is compacted in layers of 2 meters and sealed daily with a 15–23 cm layer of clean earth. Temperature rises to 60°C within 7 days (destroying pathogens) via anaerobic digestion.\n* **Composting:** Combined disposal of refuse and night soil.\n  - **Bangalore Method (Anaerobic):** Passive decomposition in pits over 4–5 months; low labor.\n  - **Indore Method (Aerobic):** Frequent turning over 2–3 months; requires manual labor.\n* **Sewage Quality Indicators:**\n  - **Biochemical Oxygen Demand (BOD):** Amount of oxygen absorbed by sewage in 5 days at 20°C. Standard drinking water BOD should be **0 mg/L**; untreated domestic sewage is 100–300 mg/L.\n  - **Chemical Oxygen Demand (COD):** Measures total chemically oxidizable organic matter using potassium dichromate.",
                                              "clinicalPearl": "BOD (5-day at 20°C) is the universal indicator of organic pollution strength in water and wastewater effluents. Higher BOD indicates greater pollution and rapid oxygen depletion.",
                                              "normalValues": [
                                                    {
                                                          "label": "Pure Drinking Water BOD",
                                                          "value": "0 mg/L"
                                                    },
                                                    {
                                                          "label": "Safe Treated Sewage Effluent BOD",
                                                          "value": "< 30 mg/L"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_chn_imm_02",
                "title": "National Immunization Schedule (NIS), Cold Chain Maintenance & VVM",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_chn_2_1",
                            "order": 1,
                            "title": "Phase 1: Universal Immunization Schedule (NIS) & Dosing Regimens",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_201",
                                        "label": "National Immunization Schedule (NIS) Comprehensive Antigen Matrix",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "UIP Universal Childhood & Maternal Immunization Dosing",
                                              "markdownContent": "### Complete National Immunization Schedule (NIS)\n\n| Age | Vaccine | Dose | Route | Site |\n| :--- | :--- | :--- | :--- | :--- |\n| **Birth** | **BCG** | 0.05 mL (<1 mo) / 0.1 mL (>1 mo) | Intradermal (ID) | Left upper arm (deltoid) |\n| | **OPV (Zero dose)** | 2 drops | Oral | Oral |\n| | **Hepatitis B (Birth dose)** | 0.5 mL (within 24 hrs) | Intramuscular (IM) | Anterolateral mid-thigh |\n| **6 Weeks** | **Pentavalent 1 (DPT+HepB+Hib)** | 0.5 mL | Intramuscular (IM) | Anterolateral mid-thigh |\n| | **Rotavirus 1** | 5 drops (liquid) | Oral | Oral |\n| | **fIPV 1 (Fractional IPV)** | 0.1 mL | Intradermal (ID) | Right upper arm (deltoid) |\n| | **PCV 1 (Pneumococcal)** | 0.5 mL | Intramuscular (IM) | Anterolateral mid-thigh |\n| **10 Weeks** | **Pentavalent 2** | 0.5 mL | Intramuscular (IM) | Anterolateral mid-thigh |\n| | **Rotavirus 2** | 5 drops | Oral | Oral |\n| **14 Weeks** | **Pentavalent 3** | 0.5 mL | Intramuscular (IM) | Anterolateral mid-thigh |\n| | **Rotavirus 3** | 5 drops | Oral | Oral |\n| | **fIPV 2** | 0.1 mL | Intradermal (ID) | Right upper arm (deltoid) |\n| | **PCV 2** | 0.5 mL | Intramuscular (IM) | Anterolateral mid-thigh |\n| **9 Months** | **MR 1st Dose (Measles-Rubella)** | 0.5 mL | Subcutaneous (SC) | Right upper arm |\n| | **JE 1st Dose (Endemic areas)** | 0.5 mL | Subcutaneous (SC) | Left upper arm |\n| | **PCV Booster** | 0.5 mL | Intramuscular (IM) | Anterolateral mid-thigh |\n| | **Vitamin A (1st Dose)** | 1 mL (100,000 IU) | Oral | Oral |\n| **16–24 Mos** | **MR 2nd Dose** | 0.5 mL | Subcutaneous (SC) | Right upper arm |\n| | **JE 2nd Dose** | 0.5 mL | Subcutaneous (SC) | Left upper arm |\n| | **DPT 1st Booster** | 0.5 mL | Intramuscular (IM) | Anterolateral mid-thigh |\n| | **OPV Booster** | 2 drops | Oral | Oral |\n| | **Vitamin A (2nd Dose)** | 2 mL (200,000 IU) | Oral | Oral |",
                                              "clinicalPearl": "BCG vaccination leaves a permanent scar: Papule appears at 2–3 weeks -> turns into shallow ulcer at 5–6 weeks -> heals by 8–12 weeks leaving a permanent round, indented scar. If no scar develops, repeat BCG is NOT recommended.",
                                              "clinicalAlert": "Hepatitis B birth dose must be administered within strictly 24 HOURS of birth to prevent perinatal vertical transmission. Beyond 24 hours, birth dose should not be given.",
                                              "normalValues": [
                                                    {
                                                          "label": "BCG Dose (< 1 month of age)",
                                                          "value": "0.05 mL Intradermal"
                                                    },
                                                    {
                                                          "label": "BCG Dose (≥ 1 month to 1 year)",
                                                          "value": "0.1 mL Intradermal"
                                                    },
                                                    {
                                                          "label": "Fractional IPV (fIPV) Dose",
                                                          "value": "0.1 mL ID at 6 & 14 weeks"
                                                    },
                                                    {
                                                          "label": "Vitamin A Prophylaxis Total Regimen",
                                                          "value": "9 doses = 17 Lakh IU by age 5"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q71",
                                                    "AIIMS_NORCET_2024_S1_Q63"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_202",
                                        "label": "Reconstituted Vaccine Stability, Diluents & Open Vial Policy Rules",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Reconstitution Safety & Open Vial Policy (OVP) Guidelines",
                                              "markdownContent": "### Reconstitution Rules & Diluents\n* **BCG Vaccine:** Diluent is **Sterile Normal Saline (0.9% NaCl)**. Never use sterile water (causes local pain, hypotonic irritation, and cell lysis).\n* **Measles / MR Vaccine:** Diluent is **Sterile Water for Injection (SWFI)**.\n* **Strict 4-Hour Rule:** Reconstituted **BCG, Measles/MR, and JE** vaccines MUST be kept cold on ice packs and used within strictly **4 HOURS**. Discard immediately after 4 hours due to high risk of fatal *Staphylococcus aureus* contamination and Toxic Shock Syndrome (TSS).\n\n### Open Vial Policy (OVP) Criteria (Can be reused up to 28 days)\n* **Applicable Vaccines:** Liquid formulations: **Hep B, OPV, DPT, Pentavalent, Td, Liquid IPV**.\n* **Mandatory Conditions:**\n  1. The expiry date has not passed.\n  2. Vaccine stored in proper cold chain (+2°C to +8°C).\n  3. Vaccine vial septum has not been submerged in water or contaminated.\n  4. Aseptic technique used for withdrawing doses.\n  5. Vaccine Vial Monitor (VVM) is in Stage 1 or 2 (usable).\n* **Non-Applicable Vaccines:** Never apply OVP to reconstituted vaccines (BCG, MR, JE, Rotavirus lyophilized). They must be discarded after 4 hours!",
                                              "clinicalPearl": "Golden Rule: Never use diluents from one vaccine for another! Diluents and freeze-dried vaccines must be chilled together to +2°C to +8°C at least 24 hours prior to reconstitution to avoid thermal shock.",
                                              "normalValues": [
                                                    {
                                                          "label": "Reconstituted BCG & MR Max Lifespan",
                                                          "value": "Strictly 4 hours"
                                                    },
                                                    {
                                                          "label": "Open Vial Policy (OVP) Max Reuse Window",
                                                          "value": "Up to 28 days for liquid unadulterated vials"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q15"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_chn_2_2",
                            "order": 2,
                            "title": "Phase 2: Cold Chain Maintenance, VVM Stages & The Shake Test",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_203",
                                        "label": "Cold Chain Equipment (ILR vs Deep Freezer) & Temperature Monitoring",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Cold Chain Storage Temperatures & Vaccine Placement",
                                              "markdownContent": "### Cold Chain Equipment Architecture\n* **Ice-Lined Refrigerator (ILR):**\n  - Main operational unit at Community Health Centers (CHC) and Primary Health Centers (PHC).\n  - Maintained at **+2°C to +8°C**.\n  - **Top Basket / Shelf:** Stores **Heat-Sensitive** vaccines (**OPV, Measles, MR, BCG, JE**).\n  - **Bottom Compartment:** Stores **Freeze-Sensitive** vaccines (**Hepatitis B, Pentavalent, DPT, Td, TT, PCV, IPV**).\n  - Never allow freeze-sensitive vaccines to touch the inner walls or bottom floor of the ILR!\n* **Deep Freezer:**\n  - Maintained at **-15°C to -25°C**.\n  - Used for freezing ice packs and long-term storage of **OPV** at district/state headquarters.\n  - NEVER place freeze-sensitive vaccines (DPT, Hep B, TT) into the deep freezer!\n* **Vaccine Carrier:**\n  - Carries vaccines to outreach session sites. Contains **4 conditioned ice packs**.\n  - Conditioning: Take ice packs from deep freezer and keep at room temperature until water droplets form and ice shakes inside with a sloshing sound before placing in carrier.",
                                              "clinicalPearl": "Temperature in the ILR must be recorded twice daily (morning and evening) using a stem dial thermometer or digital data logger. Freezing damage destroys vaccines faster and more permanently than mild heat exposure!",
                                              "normalValues": [
                                                    {
                                                          "label": "ILR Safe Operating Temperature",
                                                          "value": "+2°C to +8°C"
                                                    },
                                                    {
                                                          "label": "Deep Freezer Operating Temperature",
                                                          "value": "-15°C to -25°C"
                                                    },
                                                    {
                                                          "label": "Ice Pack Conditioning Criteria",
                                                          "value": "Sloshing sound upon shaking"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q61"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_204",
                                        "label": "Vaccine Vial Monitor (VVM) Stages 1–4 & The Shake Test Protocol",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Quality Check & Freeze-Damage Assessment",
                                              "markdownContent": "### Vaccine Vial Monitor (VVM) Interpretation\nThe VVM is a temperature-sensitive label containing an outer circle and an inner square:\n* **Stage 1 (Usable):** Inner square is markedly lighter than outer circle.\n* **Stage 2 (Usable):** Inner square is still lighter than outer circle. Use these vials FIRST.\n* **Stage 3 (DO NOT USE - DISCARD):** Inner square color matches the outer circle.\n* **Stage 4 (DO NOT USE - DISCARD):** Inner square is darker than the outer circle.\n\n### The Shake Test for Freeze-Sensitive Vaccines (Hep B, DPT, Td, Pentavalent)\n1. Freezing causes the aluminum hydroxide/phosphate adjuvant to aggregate into large, granular flakes that precipitate rapidly.\n2. **Procedure:**\n   - Take a suspect frozen vial and a known non-frozen control vial of the same batch/manufacturer.\n   - Shake both vials vigorously for 10–15 seconds and place side-by-side on a flat surface.\n   - Observe sedimentation under good light over 30–60 minutes.\n3. **Interpretation:**\n   - If the suspect vial sediments **more rapidly** and leaves a clear supernatant liquid compared to the slow-sedimenting cloudy control vial, the vaccine **FAILED THE SHAKE TEST** (irreversibly damaged by freezing) and MUST BE DISCARDED.",
                                              "clinicalPearl": "Freezing irreversibly dissociates the antigen from its aluminum adjuvant, leading to loss of potency and causing sterile subcutaneous cold abscesses when injected.",
                                              "normalValues": [
                                                    {
                                                          "label": "VVM Usable Stages",
                                                          "value": "Stage 1 and Stage 2 only"
                                                    },
                                                    {
                                                          "label": "VVM Discard Threshold",
                                                          "value": "Stage 3 (Color match) & Stage 4 (Darker square)"
                                                    },
                                                    {
                                                          "label": "Shake Test Observation Window",
                                                          "value": "30 to 60 minutes"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S2_Q15"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_chn_epi_03",
                "title": "Epidemiology Concepts, Study Designs & Levels of Prevention",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_chn_3_1",
                            "order": 1,
                            "title": "Phase 1: Epidemiological Principles, Measurements & Study Designs",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_301",
                                        "label": "Epidemiological Triad, Incidence vs Prevalence & Disease Causation",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Epidemiological Measurements of Morbidity & Mortality",
                                              "markdownContent": "### The Epidemiological Triad\nInteraction between **Agent** (biological, chemical, nutrient), **Host** (demographics, immunity, genetics), and **Environment** (physical, biological, psychosocial factors). Vector acts as an intermediary.\n\n### Incidence vs Prevalence Calculations\n* **Incidence:**\n  $$Incidence = \\frac{Number of NEW cases occurring in a defined population during a specific time}{Total population at risk during the same time period} \\times 1000$$\n  - Reflects the **rate of disease development** and acute disease risk.\n  - Calculated strictly through **Cohort (Longitudinal) Studies**.\n* **Prevalence:**\n  $$Prevalence = \\frac{Total number of ALL cases (OLD + NEW) existing at a given point in time}{Total population at that point in time} \\times 100$$\n  - Reflects the **burden of disease** in the community.\n  - Measured through **Cross-Sectional (Prevalence) Surveys**.\n  - **Relationship Equation:** $$Prevalence = Incidence \\times Duration of Disease (P = I \\times D)$$.",
                                              "clinicalPearl": "A new drug that cures a chronic disease decreases Prevalence without changing Incidence. A drug that prolongs patient survival without curing increases Prevalence! Incidence is the sole measure to evaluate preventive programs.",
                                              "normalValues": [
                                                    {
                                                          "label": "Incidence Denominator",
                                                          "value": "Population AT RISK only (excludes existing cases)"
                                                    },
                                                    {
                                                          "label": "Prevalence Denominator",
                                                          "value": "Total population"
                                                    },
                                                    {
                                                          "label": "Point Prevalence vs Period Prevalence",
                                                          "value": "Instantaneous snapshot vs span of time"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q47"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_302",
                                        "label": "Observational Study Designs (Case-Control vs Cohort) & Test Validity",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Analytical Epidemiology & Screening Sensitivity/Specificity",
                                              "markdownContent": "### Comparison of Core Analytical Study Designs\n\n| Feature | Case-Control Study | Cohort Study |\n| :--- | :--- | :--- |\n| **Direction** | **Retrospective** (Effect → Cause) | **Prospective** (Cause → Effect) |\n| **Starting Point** | Diseased (Cases) vs Non-Diseased (Controls) | Exposed vs Non-Exposed healthy individuals |\n| **Risk Measurement** | **Odds Ratio (OR)** | **Relative Risk (RR)** & Attributable Risk |\n| **Suited For** | Rare diseases, long latency periods | Rare exposures, common diseases |\n| **Cost & Duration** | Fast, inexpensive, small sample size | Prolonged, expensive, attrition/loss to follow-up |\n\n### Validity of Screening Tests\n* **Sensitivity:** Ability of a test to correctly identify individuals who HAVE the disease (True Positive Rate = $TP / [TP + FN]$). High sensitivity minimizes False Negatives.\n* **Specificity:** Ability of a test to correctly identify individuals who DO NOT HAVE the disease (True Negative Rate = $TN / [TN + FP]$). High specificity minimizes False Positives.\n* **Positive Predictive Value (PPV):** Probability that a patient with a positive test actually has the disease ($TP / [TP + FP]$). PPV increases when disease prevalence rises.",
                                              "clinicalPearl": "Screening tests prioritize high SENSITIVITY (to catch all potential cases, e.g. ELISA for HIV). Confirmatory diagnostic tests prioritize high SPECIFICITY (to avoid false labeling, e.g. Western Blot / PCR).",
                                              "normalValues": [
                                                    {
                                                          "label": "Ideal Screening Test Sensitivity",
                                                          "value": "> 95%"
                                                    },
                                                    {
                                                          "label": "Ideal Confirmatory Test Specificity",
                                                          "value": "> 99%"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q47"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_chn_3_2",
                            "order": 2,
                            "title": "Phase 2: Levels of Prevention & Intervention Modes",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_303",
                                        "label": "Four Levels of Prevention & Clinical Intervention Examples",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Levels of Prevention: From Pre-Pathogenesis to Rehabilitation",
                                              "markdownContent": "### The Four Levels of Prevention\n\n| Level of Prevention | Target Phase | Core Modes of Intervention | Hallmark Exam Examples |\n| :--- | :--- | :--- | :--- |\n| **Primordial** | Before emergence of risk factors | Individual & mass education; lifestyle changes | Educating school children on healthy diet & avoiding tobacco to prevent atherosclerosis |\n| **Primary** | Pre-pathogenesis phase (Risk factors present, disease absent) | 1. **Health Promotion** (clean water, nutrition)<br>2. **Specific Protection** (immunization, chemoprophylaxis) | - Routine childhood immunization (NIS)<br>- Wearing helmets & seatbelts<br>- Condom use for STI prevention<br>- Vitamin A prophylaxis / Iron-folic acid pills |\n| **Secondary** | Early pathogenesis phase (Subclinical / early clinical) | **Early Diagnosis & Prompt Treatment** | - Screening Pap smear, Mammography<br>- Sputum examination for AFB in cough >2 wks<br>- Mantoux test, Contact tracing<br>- Blood pressure screening in community |\n| **Tertiary** | Late pathogenesis phase (Advanced disease / disability) | 1. **Disability Limitation**<br>2. **Rehabilitation** (physical, vocational, psychological) | - Physiotherapy post-stroke hemiplegia<br>- Fitting artificial limbs / Jaipur foot<br>- Reconstructive surgery in leprosy<br>- Cardiac rehabilitation post-CABG |",
                                              "clinicalPearl": "GOLDEN EXAM RULE: Whenever a question mentions 'SCREENING', 'CASE-FINDING', 'MAMMOGRAM', 'PAP SMEAR', or 'EARLY DETECTION', it is ALWAYS SECONDARY PREVENTION! Whenever it mentions 'IMMUNIZATION', 'VACCINE', 'CHEMOPROPHYLAXIS', or 'HELMET', it is ALWAYS PRIMARY PREVENTION!",
                                              "normalValues": [
                                                    {
                                                          "label": "Pap Smear Screening Interval",
                                                          "value": "Every 3 years for women aged 21–65"
                                                    },
                                                    {
                                                          "label": "Mammography Screening",
                                                          "value": "Biennial (every 2 yrs) for women aged 40–74"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q47"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_304",
                                        "label": "Epidemic Dynamics, Quarantine vs Isolation & IDSP Reporting",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "Outbreak Surveillance & Infection Containment Measures",
                                              "markdownContent": "### Quarantine vs Isolation\n* **Isolation:** Separation of **INFECTED individuals** (who have active disease/symptoms) from others during the period of communicability to prevent transmission.\n* **Quarantine:** Restriction of activities of **HEALTHY individuals who have been EXPOSED** to a communicable disease during the incubation period. Duration is equal to the **longest incubation period** of the disease.\n\n### Integrated Disease Surveillance Programme (IDSP)\n* **Weekly Reporting Channels:**\n  - **S-Form (Syndromic):** Reported by health workers / ASHAs based on symptoms (fever, rash, loose stools).\n  - **P-Form (Presumptive):** Reported by Medical Officers at PHCs based on clinical diagnosis.\n  - **L-Form (Laboratory):** Reported by laboratory personnel after confirmatory testing (microscopy, culture, serology).",
                                              "clinicalPearl": "Quarantine applies to exposed healthy contacts (duration = maximum incubation period); Isolation applies to clinically sick patients (duration = period of communicability).",
                                              "normalValues": [
                                                    {
                                                          "label": "Quarantine Duration Standard",
                                                          "value": "Maximum incubation period of the pathogen"
                                                    },
                                                    {
                                                          "label": "IDSP Surveillance Frequency",
                                                          "value": "Weekly reporting cycle (Monday to Sunday)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q47"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_chn_prog_04",
                "title": "National Health Programs, Infectious Disease Surveillance & Vector Control",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_chn_4_1",
                            "order": 1,
                            "title": "Phase 1: National Tuberculosis Elimination Program (NTEP) & CBNAAT/Nikshay",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_401",
                                        "label": "NTEP Diagnostic Algorithms, CBNAAT / TrueNat & Nikshay Portal",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Tuberculosis Diagnosis, Case Notification & DBT Incentives",
                                              "markdownContent": "### NTEP Diagnostic & Surveillance Protocol\n* **Presumptive Pulmonary TB:** Any individual presenting with cough for **≥ 2 weeks**, evening fever, night sweats, unexplained weight loss, or hemoptysis.\n* **Diagnostic Modality:**\n  - **CBNAAT (Cartridge Based Nucleic Acid Amplification Test / GeneXpert MTB/RIF):** Real-time PCR providing results in **2 hours**. Simultaneously detects *Mycobacterium tuberculosis* AND **Rifampicin resistance** (rpoB gene mutation).\n  - **TrueNat:** Portable chip-based micro-PCR used at primary care settings.\n  - Sputum microscopy (Ziehl-Neelsen staining) remains primary tool at decentralized peripheral labs.\n* **Nikshay Portal:** Mandatory online case-based TB notification registry in India.\n* **Nikshay Poshan Yojana (NPY):** Direct Benefit Transfer (DBT) of **₹500 per month** into patient's bank account for nutritional support throughout the treatment duration.",
                                              "clinicalPearl": "CBNAAT / TrueNat is the front-line test for presumptive TB in children, HIV-positive patients, extrapulmonary TB, and presumptive drug-resistant TB cases.",
                                              "normalValues": [
                                                    {
                                                          "label": "CBNAAT Turnaround Time",
                                                          "value": "< 2 hours"
                                                    },
                                                    {
                                                          "label": "Nikshay Poshan Yojana Financial Aid",
                                                          "value": "₹500 per month during active treatment"
                                                    },
                                                    {
                                                          "label": "Target TB Elimination in India",
                                                          "value": "Zero incidence by 2025 (SDG target 2030)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q64"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_402",
                                        "label": "Daily Fixed-Dose Combination (FDC) Regimens & Drug Adverse Reactions",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "First-Line ATT (HRZE) Weight-Banded Dosages & Toxicities",
                                              "markdownContent": "### First-Line Treatment for Microbiologically Confirmed Pulmonary TB\n* **Intensive Phase (IP - 2 Months):** 4 Drugs → **H - R - Z - E** (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol).\n* **Continuation Phase (CP - 4 Months):** 3 Drugs → **H - R - E** (Isoniazid, Rifampicin, Ethambutol - Pyrazinamide is stopped!).\n\n### Critical Drug Reactions & Nursing Interventions\n* **Isoniazid (H):** Causes **Peripheral Neuropathy** via Pyridoxine (Vitamin $B_6$) depletion. Co-prescribe **Pyridoxine 10–50 mg daily**. Also causes hepatotoxicity.\n* **Rifampicin (R):** Causes **Red-Orange discoloration of urine, sweat, saliva, and tears**. Reassure patient this is benign. Potent hepatic cytochrome P450 inducer (reduces efficacy of oral contraceptive pills!).\n* **Pyrazinamide (Z):** Most hepatotoxic first-line drug; causes **Hyperuricemia & Arthralgia**.\n* **Ethambutol (E):** Causes **Retrobulbar Optic Neuritis** with decreased visual acuity and loss of **Red-Green color discrimination**. Contraindicated in young children who cannot report color changes. Not hepatotoxic.",
                                              "clinicalPearl": "Exam Mnemonics: E for Ethambutol = EYE (Optic Neuritis); R for Rifampicin = RED secretions; I for Isoniazid = INH Neuropathy (treat with Vit B6); Z for Pyrazinamide = Zout / Gout (Hyperuricemia).",
                                              "normalValues": [
                                                    {
                                                          "label": "TB Intensive Phase Duration",
                                                          "value": "2 months (8 weeks) daily FDC"
                                                    },
                                                    {
                                                          "label": "TB Continuation Phase Duration",
                                                          "value": "4 months (16 weeks) daily FDC"
                                                    },
                                                    {
                                                          "label": "Follow-up Sputum Smear Check",
                                                          "value": "At end of IP (2 months) and end of treatment"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q64"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_chn_4_2",
                            "order": 2,
                            "title": "Phase 2: Vector-Borne Diseases (NVBDCP) & Endemic Infections",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_403",
                                        "label": "Malaria, Dengue & Chikungunya Vectors, Diagnostics & Warning Signs",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "NVBDCP Vector Dynamics & Clinical Warning Signs",
                                              "markdownContent": "### Vector Biology Comparison\n\n| Vector Mosquito | Disease Transmitted | Biting Habit | Breeding Sites |\n| :--- | :--- | :--- | :--- |\n| **Anopheles (Female)** | Malaria (*P. vivax, P. falciparum*) | **Night / Twilight** biter; rests at 45° angle | Clean fresh water (ponds, overhead tanks) |\n| **Aedes aegypti (Tiger)** | Dengue, Chikungunya, Zika, Yellow fever | **Daytime** biter (early morning & late afternoon); striped body | Artificial domestic water collections (coolers, flower pots, tires) |\n| **Culex quinquefasciatus** | Lymphatic Filariasis, Japanese Encephalitis | Night biter; rests parallel to surface | Dirty, polluted, stagnant drainage water |\n\n### Dengue Clinical Markers & Severe Warning Signs\n* **Diagnostic Markers:**\n  - **NS1 Antigen:** Positive on **Day 1 to Day 5** of fever.\n  - **IgM ELISA:** Appears after **Day 5** of symptom onset.\n  - **Tourniquet Test:** Inflate BP cuff midway between systolic and diastolic for 5 min; ≥ 20 petechiae per square inch is positive.\n* **Warning Signs for Severe Dengue (Impending Plasma Leakage):**\n  1. Severe abdominal pain or persistent vomiting.\n  2. Mucosal bleeding (epistaxis, hematemesis, melena).\n  3. Fluid accumulation (pleural effusion, ascites).\n  4. Lethargy or restlessness.\n  5. **Rapid hematocrit rise (≥ 20%) with concurrent rapid platelet count drop ($< 100,000/µL$)**.",
                                              "clinicalPearl": "In Dengue, NEVER administer Aspirin, Ibuprofen, or other NSAIDs! NSAIDs aggravate thrombocytopenic bleeding and cause Reye's syndrome. Paracetamol is the ONLY safe antipyretic (max 3–4 g/day).",
                                              "normalValues": [
                                                    {
                                                          "label": "Annual Parasite Incidence (API) Elimination Cut-off",
                                                          "value": "< 1 case per 1000 population at risk"
                                                    },
                                                    {
                                                          "label": "Dengue Severe Platelet Warning Trigger",
                                                          "value": "< 20,000/µL or active hemorrhage"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_404",
                                        "label": "Lymphatic Filariasis (MDA), Kala-Azar & Leprosy (NLEP) Guidelines",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "Endemic Disease Control Protocols",
                                              "markdownContent": "### Lymphatic Filariasis (*Wuchereria bancrofti*)\n* Transmitted by *Culex quinquefasciatus*. Causes lymphangitis, lymphedema, and elephantiasis.\n* **Nocturnal Blood Survey:** Microfilariae exhibit nocturnal periodicity (peak circulation in peripheral blood between **8:30 PM to 12:00 Midnight**).\n* **Mass Drug Administration (MDA):** Annual single-dose co-administration of **DEC (Diethylcarbamazine 6 mg/kg) + Albendazole (400 mg)** $\±$ **Ivermectin (IDA regimen)**.\n\n### Kala-Azar / Visceral Leishmaniasis (*Leishmania donovani*)\n* Vector: **Sandfly (*Phlebotomus argentipes*)**.\n* Triad: Prolonged fever, hepatosplenomegaly, and pancytopenia.\n* Diagnostic standard: **rK39 rapid dipstick antigen test**.\n* Drug of Choice: Single-dose **Liposomal Amphotericin B (10 mg/kg IV)**.\n\n### Leprosy / Hansen's Disease (*Mycobacterium leprae*)\n* Classification: Paucibacillary (1–5 skin lesions) vs Multibacillary (> 5 skin lesions).\n* **MDT Blister Pack Drugs:** **Rifampicin, Dapsone, and Clofazimine** for 6–12 months.",
                                              "clinicalPearl": "Clofazimine causes reversible red-brown skin hyperpigmentation and ichthyosis. Patients must be counseled in advance to ensure medication compliance.",
                                              "normalValues": [
                                                    {
                                                          "label": "Nocturnal Blood Smear Collection Window",
                                                          "value": "8:30 PM to 12:00 Midnight"
                                                    },
                                                    {
                                                          "label": "Kala-Azar Elimination Threshold",
                                                          "value": "< 1 case per 10,000 population at block level"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_chn_mch_05",
                "title": "Demography, Maternal & Child Health (RMNCH+A) & Contraceptive Technology",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_chn_5_1",
                            "order": 1,
                            "title": "Phase 1: Vital Health Statistics, Demography & RMNCH+A Flagships",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_501",
                                        "label": "Vital Demographic Indicators (IMR, MMR, NMR) & Demographic Cycle Stages",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Demographic Indices & National Health Mission (NHM) Goals",
                                              "markdownContent": "### Vital Demographic Formulas & National Targets\n\n| Indicator | Mathematical Definition | Denominator Base | Key NORCET Notes |\n| :--- | :--- | :--- | :--- |\n| **Maternal Mortality Ratio (MMR)** | Number of maternal deaths due to pregnancy/delivery complications within 42 days of delivery | **100,000 Live Births** | #1 Cause of maternal death in India is **Post-Partum Hemorrhage (PPH)** |\n| **Infant Mortality Rate (IMR)** | Deaths of infants under 1 year of age per year | **1,000 Live Births** | Single most sensitive indicator of overall community health & living standards |\n| **Neonatal Mortality Rate (NMR)** | Deaths within first 28 completed days of life | **1,000 Live Births** | Constitutes ~70% of total IMR; major cause is prematurity/LBW & sepsis |\n| **Under-5 Mortality Rate (U5MR)** | Deaths of children under 5 years of age | **1,000 Live Births** | Leading cause is pneumonia and diarrhea |\n| **Sex Ratio** | Number of females per 1,000 males | **1,000 Males** | Measured overall and child sex ratio (0–6 years) |\n\n### The Demographic Cycle Stages\n1. **Stage 1 (High Stationary):** High birth rate, high death rate (e.g., India before 1920).\n2. **Stage 2 (Early Expanding):** High birth rate, rapidly falling death rate (many African countries).\n3. **Stage 3 (Late Expanding):** Falling birth rate, death rate declining more slowly. **India is currently in Stage 3**.\n4. **Stage 4 (Low Stationary):** Low birth rate, low death rate (e.g., USA, UK, Japan).\n5. **Stage 5 (Declining):** Birth rate falls lower than death rate; population declines (Germany, Hungary).",
                                              "clinicalPearl": "Exam Trap: Maternal Mortality RATIO has a denominator of 100,000 Live Births (NOT 1,000!). Infant Mortality Rate (IMR) has a denominator of 1,000 Live Births. Total Fertility Rate (TFR) target replacement level is 2.1.",
                                              "normalValues": [
                                                    {
                                                          "label": "Target Total Fertility Rate (TFR)",
                                                          "value": "2.1 (Replacement level)"
                                                    },
                                                    {
                                                          "label": "Maternal Mortality Ratio (MMR) Denominator",
                                                          "value": "Per 100,000 Live Births"
                                                    },
                                                    {
                                                          "label": "Infant Mortality Rate (IMR) Denominator",
                                                          "value": "Per 1,000 Live Births"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q38"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_502",
                                        "label": "RMNCH+A Initiatives: JSY, JSSK, PMSMA & SUMAN Guidelines",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "Government Cash Incentive & Quality Care Schemes",
                                              "markdownContent": "### Maternal Health Welfare Schemes\n* **Janani Suraksha Yojana (JSY):** Safe motherhood intervention under NHM. Promotes institutional delivery by providing direct cash assistance.\n  - Low Performing States (LPS): Rural ₹1,400 to mother + ₹600 to ASHA; Urban ₹1,000 to mother + ₹400 to ASHA.\n* **Janani Shishu Suraksha Karyakram (JSSK):** Entitles all pregnant women delivering in public health institutions to **completely free delivery**, including C-section, free drugs, diagnostics, diet, and free transport from home to hospital and back. Also covers sick infants up to 1 year of age.\n* **Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA):** Provides fixed-day assured, comprehensive, and quality antenatal care (ANC) on the **9th of every month** by a doctor/OBGYN.\n* **Surakshit Matritva Aashwasan (SUMAN):** Zero tolerance for denial of services to assured pregnant women and sick neonates.",
                                              "clinicalPearl": "JSY provides cash assistance; JSSK provides 100% cashless, zero out-of-pocket expenses for delivery, C-section, drugs, blood, and transport.",
                                              "normalValues": [
                                                    {
                                                          "label": "PMSMA Clinic Day",
                                                          "value": "9th of every month"
                                                    },
                                                    {
                                                          "label": "Minimum Recommended ANC Visits (WHO/Govt)",
                                                          "value": "Minimum 4 ANC visits (ideally 8 per WHO 2016)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q38"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_chn_5_2",
                            "order": 2,
                            "title": "Phase 2: Modern Contraceptive Methods & Permanent Sterilization",
                            "bulletPoints": [
                                  {
                                        "id": "bp_chn_503",
                                        "label": "Temporary Contraceptives (OCPs, Chhaya, Antara & Emergency Contraception)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Hormonal & Non-Hormonal Spacing Methods",
                                              "markdownContent": "### Modern Spacing Contraceptives in National Family Welfare Programme\n* **Combined Oral Contraceptive Pills (Mala-N / Mala-D):**\n  - Contains **Ethinylestradiol (0.03 mg) + Levonorgestrel (0.15 mg)**.\n  - 28-pill pack: 21 white hormonal pills starting from Day 1 to Day 5 of menses + 7 brown iron (Ferrous fumarate 60 mg) pills.\n  - Missed Pill Rule: If 1 pill missed, take as soon as remembered and take next at regular time (2 pills on same day). If ≥ 2 pills missed, take current pill and use barrier backup for 7 days.\n* **Centchroman / Ormeloxifene ('Chhaya'):**\n  - **Non-hormonal, non-steroidal once-a-week pill**. Selective Estrogen Receptor Modulator (SERM).\n  - Dosage: 30 mg twice weekly for the first 3 months, then **once weekly** thereafter. No risk of thromboembolism or nausea.\n* **Injectable DMPA ('Antara'):**\n  - **Depot Medroxyprogesterone Acetate (150 mg IM)** every **3 months (12 weeks)**.\n  - Injected deep IM in deltoid or gluteus within first 5 days of menses. Common side effect is irregular spotting or amenorrhea.\n* **Emergency Contraceptive Pill (ECP):**\n  - **Levonorgestrel (1.5 mg single dose)** taken orally as soon as possible, within strictly **72 HOURS (3 days)** of unprotected intercourse. Prevents ovulation.",
                                              "clinicalPearl": "Progestin-only pills (POPs / Mini-pills) and Antara injections are completely safe during breastfeeding because they do NOT suppress milk production. Combined estrogen-containing pills (Mala-N) suppress lactation and are contraindicated until 6 months postpartum.",
                                              "normalValues": [
                                                    {
                                                          "label": "Emergency Contraception Efficacy Window",
                                                          "value": "Within 72 hours of intercourse"
                                                    },
                                                    {
                                                          "label": "Chhaya (Centchroman) Initial Regimen",
                                                          "value": "Twice weekly for first 3 months, then once weekly"
                                                    },
                                                    {
                                                          "label": "Antara (DMPA) Injection Interval",
                                                          "value": "Every 3 months (150 mg deep IM)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q38"
                                              ]
                                        }
                                  },
                                  {
                                        "id": "bp_chn_504",
                                        "label": "Intrauterine Devices (Cu-T 380A vs Mirena) & Sterilization Protocols",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "IUD Insertion Timing & Permanent Surgical Sterilization",
                                              "markdownContent": "### Intrauterine Contraceptive Devices (IUCD) Comparison\n\n| Device | Type & Mechanism | Effective Lifespan | Key Clinical Notes |\n| :--- | :--- | :--- | :--- |\n| **Cu-T 380A** | Copper device; copper ions are spermicidal & inhibit sperm motility | **10 Years** | Surface area of copper is $380 mm^2$. Most common IUCD in public sector |\n| **Cu-T 375** | Copper device; flexible curved arms | **5 Years** | Lower expulsion rate |\n| **Mirena (LNG-IUS)** | Hormone-releasing intrauterine system (releases Levonorgestrel $20\\ \\mug/day$) | **5 to 8 Years** | Causes local endometrial atrophy & thick cervical mucus. **Drug of choice for Menorrhagia (Heavy Menstrual Bleeding)** |\n\n### Timing of IUCD Insertion\n* **Interval Insertion:** Anytime during menstrual cycle when woman is sure not pregnant (ideally **Day 1 to Day 7** when cervical os is slightly patent).\n* **Post-Placental:** Within **10 minutes** of placental expulsion during delivery.\n* **Post-Partum:** Within **48 hours** of delivery.\n* **Post-Abortion:** Immediately after first-trimester MTP/miscarriage.\n\n### Permanent Sterilization Guidelines\n* **Female Sterilization:** Minilaparotomy (Pomeroy method - excision and ligation of loop of fallopian tube) or Laparoscopic sterilization (Fallope rings).\n* **No-Scalpel Vasectomy (NSV):** Safe, quick outpatient procedure for males. Puncture technique to ligate vas deferens.\n  - **Crucial Patient Teaching:** NSV is **NOT immediately effective**! Stored viable sperm remain in the ampulla. The client must use condoms or alternative contraception for **3 MONTHS or until 30 EJACULATIONS**, followed by a semen analysis confirming **Azoospermia (Zero motile sperm)** before relying on vasectomy alone.",
                                              "clinicalPearl": "EXAM TRAP: Vasectomy does NOT produce immediate sterility! Azoospermia must be confirmed by semen analysis after 3 months (or ~30 ejaculations). Until then, condoms are mandatory.",
                                              "normalValues": [
                                                    {
                                                          "label": "Cu-T 380A Effective Duration",
                                                          "value": "10 years"
                                                    },
                                                    {
                                                          "label": "Cu-T 375 Effective Duration",
                                                          "value": "5 years"
                                                    },
                                                    {
                                                          "label": "Mirena (LNG-IUS) Duration",
                                                          "value": "5 to 8 years"
                                                    },
                                                    {
                                                          "label": "Post-Vasectomy Contraceptive Backup Required",
                                                          "value": "Strictly 3 months / ~30 ejaculations"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S2_Q38"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          }
    ]
  },
  {
    "id": "subj_pharm_07",
    "name": "Allied Sciences & Clinical Pharmacology",
    "code": "PHA-107",
    "iconName": "Pill",
    "weightagePercentage": 10,
    "color": "#dc2626",
    "subtopics": [
      {
        "id": "sub_pharm_antidotes_01",
        "title": "Critical Drug Antidotes, Crash Cart Protocols & Phlebotomy Order of Draw",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_pharm_1_1",
            "order": 1,
            "title": "Phase 1: Emergency Antidote Pairings & CLSI Phlebotomy Tube Sequence",
            "bulletPoints": [
              {
                "id": "bp_pharm_101",
                "label": "Universal Drug Antidotes Matrix & Mechanism of Action",
                "isHighYield": true,
                "context": {
                  "heading": "Life-Saving Chemical & Pharmacological Antagonist Protocols",
                  "markdownContent": "### High-Frequency Antidote Matrix (AIIMS NORCET Core)\n\n| Poison / Drug Overdose | Specific Antidote | Mechanism of Action | Critical Nursing Action |\n| :--- | :--- | :--- | :--- |\n| **Heparin** | **Protamine Sulfate** | Basic polycationic protein binds acidic heparin forming an inert stable salt | Give by SLOW IV push (over 10 min); 1 mg neutralizes ~100 units of heparin; rapid push causes severe hypotension & bradycardia |\n| **Warfarin (Coumadin)** | **Vitamin K1 (Phytonadione)** | Essential cofactor for hepatic synthesis of factors II, VII, IX, X | Takes 6–8 hours. For immediate life-threatening bleeding, infuse Fresh Frozen Plasma (FFP) or Prothrombin Complex Concentrate (PCC) |\n| **Acetaminophen (Paracetamol)** | **N-Acetylcysteine (NAC)** | Replenishes hepatic stores of glutathione, detoxifying NAPQI | Most effective within 8 to 10 hours of ingestion. Follow Rumack-Matthew nomogram |\n| **Opioids (Morphine, Fentanyl)** | **Naloxone (Narcan)** | Pure competitive mu-opioid receptor antagonist | Half-life (30–90 min) is shorter than morphine; monitor for relapse of respiratory depression! |\n| **Benzodiazepines (Midazolam, Diazepam)** | **Flumazenil** | Competitive antagonist at benzodiazepine receptor on GABA-A complex | Contraindicated in chronic benzodiazepine dependence or TCA overdose — induces refractory status epilepticus |\n| **Magnesium Sulfate (MgSO4)** | **Calcium Gluconate 10%** | Antagonizes toxic magnesium neuromuscular blockade at motor endplate | Keep at bedside in eclampsia/pre-eclampsia suites; check hourly patellar deep tendon reflexes |\n| **Digoxin** | **Digoxin Immune Fab (DigiFab)** | Antigen-binding fragments bind free intravascular digoxin | Indicated when serum K+ > 5.0 mEq/L or life-threatening ventricular arrhythmias occur |\n| **Organophosphate Insecticides** | **Atropine + Pralidoxime (2-PAM)** | Competitive muscarinic antagonist + cholinesterase enzyme reactivator | Titrate Atropine until pulmonary secretions clear (\"Atropinization\": dry mouth, clear lungs, HR > 80 bpm) |\n| **Beta-Blockers** | **Glucagon** | Increases myocardial cAMP independently of beta-adrenergic receptors | Reverses refractory bradycardia and profound cardiogenic shock |",
                  "clinicalPearl": "The gold-standard clinical indicator of adequate Atropinization in organophosphate poisoning is CLEAR LUNG SOUNDS and drying of tracheobronchial secretions. Dilated pupils alone are NOT a reliable marker of adequate atropinization.",
                  "clinicalAlert": "Never administer Flumazenil to a patient with a history of seizure disorder or chronic benzodiazepine use — it triggers acute benzodiazepine withdrawal with severe, intractable status epilepticus!",
                  "normalValues": [
                    {
                      "label": "Protamine Sulfate Dosing",
                      "value": "1 mg per 100 units of Heparin"
                    },
                    {
                      "label": "Calcium Gluconate 10% Bedside Dose",
                      "value": "10 mL (1 g) slow IV over 3–5 minutes"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S2_Q45"
                  ]
                }
              },
              {
                "id": "bp_pharm_102",
                "label": "CLSI Phlebotomy Order of Draw & Additive Cross-Contamination Prevention",
                "isHighYield": true,
                "context": {
                  "heading": "Vacuum Tube Phlebotomy Sequence Guidelines (CLSI H3-A6)",
                  "markdownContent": "### Strict Vacuum Blood Tube Collection Hierarchy\nFollowing the Clinical and Laboratory Standards Institute (CLSI) order of draw prevents additive cross-contamination between tubes:\n\n1. **Blood Culture Bottles (Yellow/Black or Broth bottles):**\n   * *Rationale:* Must be drawn FIRST to maintain absolute surgical sterility and prevent skin flora contamination.\n2. **Light Blue Top (Sodium Citrate - 3.2%):**\n   * *Tests:* Coagulation studies (PT/INR, aPTT, D-Dimer).\n   * *Critical Rule:* Must be filled to the exact **9:1 blood-to-anticoagulant fill line**! Underfilled tubes yield falsely prolonged clotting times.\n3. **Red / Gold / Tiger Top (Serum Separator Tubes - SST):**\n   * *Tests:* Chemistry panel, Liver Function Tests (LFT), Kidney Function Tests (KFT), cardiac biomarkers, serology. Contains clot activator and silica gel.\n4. **Green Top (Heparin - Sodium or Lithium):**\n   * *Tests:* Blood gases, ammonia, specialized chemistries.\n5. **Lavender / Purple Top (K2/K3 EDTA):**\n   * *Tests:* Complete Blood Count (CBC), ESR, HbA1c, peripheral blood smear.\n   * *Mechanism:* Chelates calcium. Must NEVER precede Light Blue (Citrate) or Red/Green tubes (EDTA contamination causes pseudohyperkalemia and invalidates coagulation).\n6. **Grey Top (Sodium Fluoride & Potassium Oxalate):**\n   * *Tests:* Blood glucose, lactic acid. (Fluoride inhibits glycolytic enzymes).",
                  "clinicalPearl": "Memory Mnemonic for Phlebotomy Order of Draw: \"Boys Light Red Gowns Every Grey Day\" (Blood Culture -> Light Blue -> Red -> Green -> EDTA/Lavender -> Grey).",
                  "clinicalAlert": "Never draw coagulation tubes (Light Blue) after EDTA (Lavender)! EDTA contains potassium and binds calcium; drawing Lavender first causes profound pseudohyperkalemia and falsely prolonged PT/INR.",
                  "normalValues": [
                    {
                      "label": "Sodium Citrate Blood-to-Anticoagulant Ratio",
                      "value": "Strictly 9:1"
                    },
                    {
                      "label": "Light Blue Tube Inversion Count",
                      "value": "3 to 4 gentle inversions"
                    },
                    {
                      "label": "EDTA Lavender Tube Inversion Count",
                      "value": "8 to 10 gentle inversions"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S1_Q71"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_pharm_1_2",
            "order": 2,
            "title": "Phase 2: Emergency Resuscitation Pharmacology: Epinephrine & Adenosine",
            "bulletPoints": [
              {
                "id": "bp_pharm_103",
                "label": "Emergency Resuscitation Pharmacology: Epinephrine (1:1,000 vs 1:10,000) & Adenosine Rapid Push",
                "isHighYield": true,
                "context": {
                  "heading": "ACLS Resuscitation Concentrations & Rapid Administration Safeguards",
                  "markdownContent": "### Epinephrine (Adrenaline) Concentration Dilution Rules\n* **Anaphylactic Shock:**\n  * Concentration: **1:1,000 (1 mg/mL)**.\n  * Dose & Route: **0.3 to 0.5 mg Intramuscularly (IM)** into the mid-anterolateral aspect of the thigh (vastus lateralis).\n  * *Rationale:* IM absorption in the thigh provides faster, higher peak plasma levels than subcutaneous or deltoid injection.\n* **Cardiac Arrest (Ventricular Fibrillation, Pulseless VT, Asystole, PEA):**\n  * Concentration: **1:10,000 (0.1 mg/mL)**.\n  * Dose & Route: **1 mg IV/IO push every 3 to 5 minutes**, followed immediately by a **20 mL Normal Saline bolus flush** and arm elevation for 10–20 seconds.\n\n### Adenosine (PSVT Conversion) Protocol\n* Indication: Paroxysmal Supraventricular Tachycardia (PSVT) with narrow complex regular rhythm.\n* **Administration Technique:**\n  * **6 mg rapid IV bolus over 1 to 2 seconds** into a large antecubital peripheral vein.\n  * Follow IMMEDIATELY with a **20 mL Normal Saline flush** using a 3-way stopcock.\n  * If PSVT persists after 1–2 minutes, administer **12 mg rapid IV push**.\n  * Pre-procedure Education: Warn the patient that they will feel sudden flushing, chest tightness, dizziness, and a profound sensation of \"heart stopping.\" The monitor will show a brief period of **asystole (cardiac standstill)** for several seconds before sinus rhythm resumes.",
                  "clinicalPearl": "Adenosine has an ultra-short half-life of LESS THAN 10 SECONDS because it is rapidly cleared by circulating erythrocytes and vascular endothelium. It MUST be administered as an ultra-rapid bolus over 1–2 seconds via a large bore cannula placed as close to the heart as possible.",
                  "clinicalAlert": "Never administer 1:1,000 Epinephrine undiluted via IV push! Giving 1:1,000 IV triggers severe hypertensive encephalopathy, acute cerebral hemorrhage, and lethal ventricular tachyarrhythmias.",
                  "normalValues": [
                    {
                      "label": "Adenosine Biological Half-Life",
                      "value": "< 10 seconds"
                    },
                    {
                      "label": "Epinephrine Anaphylaxis Adult Dose",
                      "value": "0.3–0.5 mg IM (1:1,000)"
                    },
                    {
                      "label": "Epinephrine Cardiac Arrest Dose",
                      "value": "1.0 mg IV (1:10,000) every 3–5 min"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S1_Q28"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_pharm_cardio_02",
        "title": "Cardiovascular, Anticoagulant & Thrombolytic Pharmacology",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_pharm_2_1",
            "order": 1,
            "title": "Phase 1: Heparin, Enoxaparin (LMWH) & Warfarin Monitoring Protocols",
            "bulletPoints": [
              {
                "id": "bp_pharm_201",
                "label": "Heparin (aPTT) vs Warfarin (PT/INR) & Subcutaneous Enoxaparin Administration Technique",
                "isHighYield": true,
                "context": {
                  "heading": "Anticoagulation Parameters & Nursing Safeguards",
                  "markdownContent": "### Heparin vs Warfarin Comparison Matrix\n\n| Clinical Feature | Unfractionated Heparin (UFH) | Warfarin (Coumadin) | Low Molecular Weight Heparin (Enoxaparin) |\n| :--- | :--- | :--- | :--- |\n| **Route of Administration** | Intravenous (Continuous) or Subcutaneous | Oral (Tablet) | Subcutaneous (Prefilled syringe) |\n| **Laboratory Monitoring** | **aPTT (Activated Partial Thromboplastin Time)** | **PT / INR (International Normalized Ratio)** | No routine coagulation test needed (Anti-Factor Xa if renal failure) |\n| **Therapeutic Target** | **1.5 to 2.5 times the control** (Normal aPTT: 30–40s; Therapeutic: **60–80 seconds**) | Target INR: **2.0 to 3.0** (Target: **2.5 to 3.5** for mechanical heart valves) | Weight-based (1 mg/kg every 12 hrs or 1.5 mg/kg daily) |\n| **Onset of Action** | Immediate (Minutes) | Slow (takes **48 to 72 hours**; full effect 5–7 days) | Rapid (3 to 5 hours) |\n| **Specific Antidote** | **Protamine Sulfate** | **Vitamin K1 (Phytonadione)** / FFP / PCC | Protamine Sulfate (Partial reversal ~60%) |\n\n### Enoxaparin (Lovenox) Injection Technique Rules (AIIMS Favorite)\n1. **Site:** Inject strictly into the **anterolateral or posterolateral abdominal wall** (\"love handles\"), at least **2 inches (5 cm) away from the umbilicus**.\n2. **Air Bubble Rule:** **DO NOT EXPEL the nitrogen air bubble** from the prefilled syringe! The air bubble is manufactured intentionally to seal the medication in the subcutaneous tissue and prevent track leakage.\n3. **Pinch & Angle:** Pinch a skinfold between thumb and forefinger, insert needle at a strict **90° angle**, and maintain the skin pinch throughout the injection.\n4. **Never Rub Site:** **DO NOT RUB or massage the injection site** after injection! Rubbing shears delicate capillaries, causing massive subcutaneous hematomas and bruising.",
                  "clinicalPearl": "When bridging a patient from IV Heparin to Oral Warfarin, Heparin infusion MUST CONTINUE concurrently for at least 4 to 5 days until the INR is therapeutic (between 2.0 and 3.0) for two consecutive days because Warfarin depletes protein C and S first, creating a transient pro-thrombotic state.",
                  "clinicalAlert": "Never expel the air bubble from prefilled enoxaparin syringes, and NEVER rub the injection site after administering subcutaneous heparin or enoxaparin — doing so causes severe tissue bruising and hematoma formation!",
                  "normalValues": [
                    {
                      "label": "Normal Baseline aPTT",
                      "value": "30–40 seconds"
                    },
                    {
                      "label": "Therapeutic Heparin aPTT Target",
                      "value": "60–80 seconds (1.5–2.5× control)"
                    },
                    {
                      "label": "Normal Baseline INR (Non-anticoagulated)",
                      "value": "0.8–1.2"
                    },
                    {
                      "label": "Therapeutic Warfarin INR Target",
                      "value": "2.0–3.0 (2.5–3.5 for mechanical valves)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S2_Q14"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_pharm_2_2",
            "order": 2,
            "title": "Phase 2: Antihypertensives, Antianginals & Vasodilator Safety Alerts",
            "bulletPoints": [
              {
                "id": "bp_pharm_202",
                "label": "Nitroglycerin Storage & Sildenafil Contraindication, ACE-Inhibitor Cough & Beta-Blocker Rules",
                "isHighYield": true,
                "context": {
                  "heading": "Cardiovascular Medication Safeguards & Drug Interactions",
                  "markdownContent": "### Sublingual Nitroglycerin (NTG) Patient Instructions\n* **Dosing Protocol:** Take **1 sublingual tablet under the tongue at the onset of chest pain**. If pain is unresolved or worsens after 5 minutes, **call emergency services (102/108)** and take a 2nd tablet. Take a maximum of **3 tablets within 15 minutes** (5 min apart).\n* **Storage Rules:** Nitroglycerin decomposes when exposed to heat, moisture, and light:\n  * Store strictly in its **original dark amber glass bottle with a tightly capped metal lid**.\n  * Replace tablet supply every **6 months** once opened.\n  * A burning or tingling sensation under the tongue indicates that the tablet is active and potent.\n* **Side Effects:** Throbbing vascular headache (expected and transient), postural hypotension, dizziness.\n\n### The Fatal Nitroglycerin + Sildenafil (Viagra) Interaction\n* **ABSOLUTE CONTRAINDICATION:** Taking Nitroglycerin with phosphodiesterase-5 (PDE-5) inhibitors (**Sildenafil [Viagra], Tadalafil [Cialis]**) within **24 to 48 hours** triggers massive, uncontrollable systemic vasodilation, resulting in **fatal refractory hypotension, severe cardiogenic shock, and cardiac arrest!**\n\n### Antihypertensive Classes & High-Yield Exam Traps\n* **ACE Inhibitors (Enalapril, Ramipril, Lisinopril):**\n  * Hallmark Adverse Effect: **Dry, hacking persistent cough** caused by accumulation of **bradykinin** in the lungs. (If intolerable, switch to ARBs like Losartan).\n  * Life-Threatening Emergency: **Angioedema** (swelling of lips, tongue, glottis).\n  * Electrolyte Effect: **Hyperkalemia** (avoid potassium supplements and salt substitutes).\n* **Beta-Blockers (Metoprolol, Atenolol, Propranolol):**\n  * Check **apical pulse and blood pressure** before administration: Hold if HR < 60 bpm or Systolic BP < 100 mmHg.\n  * Contraindication: Non-selective beta-blockers (Propranolol) are **CONTRAINDICATED in Bronchial Asthma & COPD** because beta-2 blockade triggers severe bronchospasm.",
                  "clinicalPearl": "Instruct patients to sit down immediately before taking sublingual Nitroglycerin. Vasodilation causes rapid venous pooling, and taking NTG while standing can trigger sudden syncopal falls and severe head trauma.",
                  "clinicalAlert": "Never administer nitrates to any patient who has taken Sildenafil (Viagra) within the past 24 hours or Tadalafil (Cialis) within 48 hours — the combination causes irreversible cardiovascular collapse and death!",
                  "normalValues": [
                    {
                      "label": "Max Sublingual NTG Dosing",
                      "value": "1 tablet every 5 min up to 3 doses in 15 min"
                    },
                    {
                      "label": "Minimum Heart Rate to Administer Beta-Blockers",
                      "value": "60 bpm (Adults)"
                    },
                    {
                      "label": "Serum Potassium Upper Limit with ACE-Inhibitors",
                      "value": "5.0 mEq/L"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S1_Q59"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_pharm_anti_03",
        "title": "Antimicrobial Therapy, Antitubercular (ATT) Regimens & Infusion Hazards",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_pharm_3_1",
            "order": 1,
            "title": "Phase 1: Vancomycin Infusion Safety, Red Man Syndrome & Aminoglycoside Toxicity",
            "bulletPoints": [
              {
                "id": "bp_pharm_301",
                "label": "Vancomycin 60-Minute Infusion Mandate, Red Man Syndrome vs Anaphylaxis & Peak/Trough Monitoring",
                "isHighYield": true,
                "context": {
                  "heading": "Glycopeptide & Aminoglycoside Critical Care Protocols",
                  "markdownContent": "### Vancomycin Infusion Safety & \"Red Man Syndrome\"\n* Indication: Drug of choice for Methicillin-Resistant Staphylococcus Aureus (MRSA) and severe Clostridium difficile colitis (oral route only).\n* **\"Red Man Syndrome\" (RMS) Mechanism:**\n  * RMS is an **infusion-related histamine release reaction**, NOT a true IgE-mediated allergic reaction!\n  * Manifestations: Erythematous rash, flushing, pruritus, and burning of the face, neck, chest, and upper back; hypotension.\n  * **Prevention & Nursing Action:**\n    1. **Mandatory Rate:** Must infuse SLOWLY over **at least 60 minutes** (for doses > 1 g, infuse over 90–120 minutes).\n    2. If Red Man Syndrome develops: **Slow the infusion rate** (or temporarily pause until flushing subsides) and administer an antihistamine (Diphenhydramine). Do NOT permanently cancel the antibiotic.\n* **Trough Level Monitoring:** Draw trough levels **within 30 minutes prior to the 4th dose**.\n  * Therapeutic trough: **10 to 20 mcg/mL** (15–20 mcg/mL for severe bacteremia/endocarditis).\n* **Toxicities:** Nephrotoxicity (monitor serum creatinine and BUN daily) and Ototoxicity (tinnitus, hearing loss).\n\n### Aminoglycosides (Gentamicin, Amikacin, Tobramycin)\n* Serious Adverse Effects: **Ototoxicity (damage to 8th cranial nerve)** and **Nephrotoxicity (acute tubular necrosis)**.\n* Nursing Vigilance: Instruct patient to report immediate ear fullness, buzzing, tinnitus, dizziness, or hearing changes. Check urine output (> 30 mL/hr).",
                  "clinicalPearl": "Vancomycin Red Man Syndrome is caused by rapid infusion triggering direct mast cell degranulation. It is NOT a true allergy. Slowing the infusion rate to run over 60–90 minutes eliminates the reaction.",
                  "clinicalAlert": "Never push Vancomycin or administer it faster than 60 minutes! Rapid bolusing causes catastrophic hypotension, severe chest muscle spasms (\"red neck\"), and cardiac arrest.",
                  "normalValues": [
                    {
                      "label": "Minimum Vancomycin Infusion Duration",
                      "value": "Strictly ≥ 60 minutes (≥ 120 min for > 1 g)"
                    },
                    {
                      "label": "Vancomycin Therapeutic Trough Range",
                      "value": "10–20 mcg/mL (Drawn 30 min before next dose)"
                    },
                    {
                      "label": "Normal Adult Urine Output Minimum",
                      "value": "30 mL/hr (0.5 mL/kg/hr)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S1_Q73"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_pharm_3_2",
            "order": 2,
            "title": "Phase 2: First-Line Antitubercular (ATT / DOTS) Pharmacology & Organ Toxicities",
            "bulletPoints": [
              {
                "id": "bp_pharm_302",
                "label": "Antitubercular Drugs (INH, Rifampicin, Pyrazinamide, Ethambutol) Adverse Effects & Pyridoxine Pairing",
                "isHighYield": true,
                "context": {
                  "heading": "RNTCP / NTEP First-Line Antitubercular Drug Profiles",
                  "markdownContent": "### First-Line Antitubercular Therapy (HRZE Mnemonic)\n\n| Drug & Abbreviation | Mechanism & Target | Hallmark Adverse Effect | Cardinal Nursing Responsibility |\n| :--- | :--- | :--- | :--- |\n| **Isoniazid (H / INH)** | Inhibits mycolic acid cell wall synthesis | **Peripheral Neuropathy** (numbness, tingling in fingers/toes) & Hepatotoxicity | **Co-administer Pyridoxine (Vitamin B6) 10–25 mg daily** to prevent neuropathy. Monitor liver enzymes (AST/ALT) |\n| **Rifampicin (R)** | Inhibits bacterial DNA-dependent RNA polymerase | **Red-Orange discoloration of urine, sweat, saliva, and tears** (benign) | Reassure patient that orange urine/tears is normal; warn that **soft contact lenses will be permanently stained red**; accelerates hepatic CYP450, inactivating oral contraceptive pills (use barrier contraception!) |\n| **Pyrazinamide (Z)** | Disrupts mycobacterial cell membrane metabolism | **Hyperuricemia & Gouty Arthralgia**, Hepatotoxicity | Monitor serum uric acid; assess for severe joint swelling and pain (gout) |\n| **Ethambutol (E)** | Inhibits arabinosyl transferase cell wall synthesis | **Retrobulbar Optic Neuritis**, decreased visual acuity, **loss of red-green color discrimination** | Conduct baseline and monthly Snellen visual acuity and Ishihara red-green color testing. Discontinue immediately if vision blurs. **Do not give to children < 5 years** |\n| **Streptomycin (S)** | Aminoglycoside 30S protein inhibitor | **Ototoxicity (8th Cranial Nerve)** & Nephrotoxicity | **CONTRAINDICATED IN PREGNANCY** (causes congenital sensorineural deafness in fetus) |",
                  "clinicalPearl": "Rifampicin is a potent enzyme inducer that drastically lowers circulating levels of Oral Contraceptive Pills (OCPs), Warfarin, and Antiretrovirals. Women taking OCPs MUST be instructed to use non-hormonal barrier contraception (condoms) throughout ATT therapy.",
                  "clinicalAlert": "Isoniazid (INH) competitively inhibits pyridoxal kinase, depleting Vitamin B6 and causing severe peripheral neuropathy and ataxia. Always prescribe Pyridoxine concurrently with INH, especially in malnourished, diabetic, or pregnant patients!",
                  "normalValues": [
                    {
                      "label": "Concurrent Pyridoxine Dose with INH",
                      "value": "10–25 mg daily (up to 50 mg in neuropathy)"
                    },
                    {
                      "label": "Normal Serum Uric Acid",
                      "value": "3.5–7.2 mg/dL"
                    },
                    {
                      "label": "DOTS Intensive Phase Duration",
                      "value": "2 Months (HRZE) followed by 4 Months Continuation (HRE)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S1_Q71"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_pharm_steril_04",
        "title": "Hospital Sterilization, Autoclaving Parameters & Disinfection Science",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_pharm_4_1",
            "order": 1,
            "title": "Phase 1: Physical Sterilization: Autoclaving vs Hot Air Oven & Biological Indicators",
            "bulletPoints": [
              {
                "id": "bp_pharm_401",
                "label": "Autoclave (121°C @ 15 psi) vs Dry Heat Oven Parameters & Geobacillus Spore Testing",
                "isHighYield": true,
                "context": {
                  "heading": "Thermal Sterilization Methods & Spore Efficacy Controls",
                  "markdownContent": "### Physical Sterilization Comparison Matrix\n\n| Parameter | Autoclaving (Moist Heat Under Pressure) | Hot Air Oven (Dry Heat) | Ethylene Oxide (ETO Gas) |\n| :--- | :--- | :--- | :--- |\n| **Operational Temperature** | **121°C (250°F)** (or 134°C for Flash) | **160°C to 170°C (320°F–340°F)** | 37°C to 55°C (Low temperature) |\n| **Pressure & Holding Time** | **15 psi for 15 to 20 minutes** (Flash: 30 psi for 3–5 min) | **160°C for 2 hours** (or 170°C for 1 hour) | 2 to 5 hours + 8–12 hrs aeration |\n| **Mechanism of Lethality** | **Coagulation and denaturation of bacterial proteins** | **Oxidation of cellular constituents** | Alkylation of microbial DNA/proteins |\n| **Biological Indicator (Spore)** | **Geobacillus stearothermophilus** spores | **Bacillus subtilis (Bacillus atrophaeus)** | **Bacillus atrophaeus** spores |\n| **Clinical Uses** | Surgical gowns, drapes, rubber gloves, surgical steel instruments, culture media | Glassware (Petri dishes, pipettes, test tubes), powders, liquid paraffin, oils | Heat-sensitive plastics, cardiac catheters, artificial joints, heart-lung oxygenators |",
                  "clinicalPearl": "Autoclaving kills ALL microorganisms, including the hardiest bacterial endospores (Clostridium tetani, Bacillus anthracis). The gold-standard biological indicator used to certify autoclave sterilization efficacy is Geobacillus stearothermophilus.",
                  "clinicalAlert": "Never autoclave anhydrous oils, greases, or dry talcum powders — steam cannot penetrate oily hydrophobic substances. Powders and oils must be sterilized in a Hot Air Oven using dry heat!",
                  "normalValues": [
                    {
                      "label": "Standard Autoclave Parameters",
                      "value": "121°C at 15 psi for 15–20 minutes"
                    },
                    {
                      "label": "Flash Autoclave Parameters",
                      "value": "134°C at 30 psi for 3–5 minutes"
                    },
                    {
                      "label": "Hot Air Oven Parameters",
                      "value": "160°C for 2 hours (or 170°C for 1 hour)"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S2_Q48"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_pharm_4_2",
            "order": 2,
            "title": "Phase 2: Chemical Sterilization: Glutaraldehyde (Cidex 2%) & Hand Hygiene Standards",
            "bulletPoints": [
              {
                "id": "bp_pharm_402",
                "label": "Glutaraldehyde (Cidex 2%) High-Level Disinfection vs 10-Hour Sterilization & Hand Hygiene Protocols",
                "isHighYield": true,
                "context": {
                  "heading": "Cold Chemical Sterilization & Hospital Infection Control Standards",
                  "markdownContent": "### Glutaraldehyde (Cidex 2% Solution) Guidelines\n* **Nature:** Activated alkaline glutaraldehyde solution. Once the activating powder is added, the solution turns green and remains active for **strictly 14 or 28 days** (check manufacturer specifications).\n* **High-Level Disinfection (HLD):**\n  * Immersion Time: **20 minutes at 20°C–25°C**.\n  * Destroys all vegetative bacteria, viruses (HIV, HBV), and Mycobacterium tuberculosis, but does NOT reliably destroy all spores.\n* **Chemical Cold Sterilization:**\n  * Immersion Time: **STRICTLY 10 HOURS** of continuous immersion.\n  * Destroys bacterial endospores. Used for fiberoptic bronchoscopes, endoscopes, laparoscopes, and plastic corrugated anaesthesia tubing.\n* **Post-Immersion Rinsing:** Instruments must be rinsed thoroughly with **sterile water** before patient contact (glutaraldehyde residue causes severe chemical colitis and chemical burns).\n\n### Hand Hygiene Standards (WHO 5 Moments)\n1. Before touching a patient\n2. Before clean/aseptic procedure\n3. After body fluid exposure risk\n4. After touching a patient\n5. After touching patient surroundings\n\n### Alcohol Hand Rub vs Soap & Water Duration\n* **Alcohol-Based Hand Rub:** Rub vigorously over all surfaces of both hands for **20 to 30 seconds** until completely dry.\n* **Hand Washing with Soap & Water:** Wash for **40 to 60 seconds**.\n  * **MANDATORY INDICATIONS FOR SOAP & WATER:**\n    1. When hands are **visibly soiled or contaminated with blood/body fluids**.\n    2. After caring for patients with **Clostridium difficile (C. diff) or Norovirus** (alcohol rubs do NOT kill C. difficile bacterial spores!).",
                  "clinicalPearl": "Alcohol-based hand rubs are ineffective against Clostridium difficile endospores. When caring for a patient with C. diff pseudomembranous colitis, the nurse MUST wash hands with soap and water for 40 to 60 seconds to mechanically rinse spores down the sink drain.",
                  "clinicalAlert": "Never use Cidex-sterilized endoscopes or instruments without rinsing them thoroughly with sterile water! Residual glutaraldehyde is extremely caustic and causes acute chemical proctitis, mucosal ulceration, and bronchospasm.",
                  "normalValues": [
                    {
                      "label": "Cidex 2% High-Level Disinfection Time",
                      "value": "20 minutes"
                    },
                    {
                      "label": "Cidex 2% Total Spores Sterilization Time",
                      "value": "Strictly 10 hours"
                    },
                    {
                      "label": "Alcohol Hand Rub Duration",
                      "value": "20–30 seconds"
                    },
                    {
                      "label": "Soap and Water Hand Wash Duration",
                      "value": "40–60 seconds"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2023_S1_Q71"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "sub_pharm_nutr_05",
        "title": "Clinical Nutrition, Deficiency Syndromes & Endocrine Pharmacology",
        "importanceTier": "High",
        "phases": [
          {
            "id": "ph_pharm_5_1",
            "order": 1,
            "title": "Phase 1: Protein-Energy Malnutrition (Kwashiorkor vs Marasmus) & Vitamin Deficiencies",
            "bulletPoints": [
              {
                "id": "bp_pharm_501",
                "label": "PEM Diagnostic Matrix (Kwashiorkor vs Marasmus) & High-Yield Vitamin Deficiency Signs",
                "isHighYield": true,
                "context": {
                  "heading": "Nutritional Deficiency Syndromes & Clinical Signs",
                  "markdownContent": "### Kwashiorkor vs Marasmus Differentiation Matrix\n\n| Diagnostic Feature | Kwashiorkor (Protein Deficiency) | Marasmus (Calorie / Total Starvation) |\n| :--- | :--- | :--- |\n| **Deficiency Type** | Pure severe **Protein deficiency** with adequate calories | **Severe deficiency of both calories and protein** |\n| **Typical Age** | Older infants/toddlers (**1 to 4 years**) after weaning | Infants **under 1 year of age** |\n| **Generalized Edema** | **PRESENT (Pitting edema in lower limbs/face)** due to hypoalbuminemia | **ABSENT (No edema)** |\n| **Facial Appearance** | **\"Moon Face\"** (puffy cheeks due to edema) | **\"Old Man Face\" / \"Monkey Face\"** (wrinkled, sunken cheeks due to loss of Bichat buccal fat pads) |\n| **Subcutaneous Fat** | Preserved to reduced; liver enlargement (**Hepatomegaly** due to fatty infiltration) | **Completely absent / Severe wasting**; ribs prominent |\n| **Skin & Hair Changes** | **\"Flaky Paint\" dermatosis**, skin peeling; hair is dry, brittle, with alternating bands of light and dark color (**\"Flag Sign\"**) | Skin is dry, loose, hanging in folds (\"baggy pants\" over buttocks); hair changes are minimal |\n| **Mental Demeanor** | Apathetic, irritable, lethargic | Alert, anxious, ravenously hungry |\n\n### High-Yield Vitamin Deficiency Hallmarks\n* **Vitamin A (Retinol):** Earliest symptom is **Night Blindness (Nyctalopia)**; triangular pearly-white foamy spots on conjunctiva (**Bitot's Spots**); corneal softening (**Keratomalacia**).\n* **Vitamin C (Ascorbic Acid):** **Scurvy** — bleeding, swollen spongy gums, perifollicular petechiae, corkscrew hairs, delayed wound healing.\n* **Vitamin B3 (Niacin):** **Pellagra — The 4 D's:** **Diarrhea, Dermatitis** (photosensitive rash on sun-exposed skin — Casal's necklace), **Dementia, and Death**.\n* **Vitamin B9 (Folate / Folic Acid):** Deficiency during early pregnancy causes **Neural Tube Defects (Spina Bifida, Anencephaly)**. Preconception requirement: **400 mcg daily** (4 mg daily if previous affected pregnancy).",
                  "clinicalPearl": "The cardinal distinguishing sign between Kwashiorkor and Marasmus is EDEMA. If a malnourished child presents with bilateral pitting edema and a swollen abdomen, it is Kwashiorkor. If there is severe wasting without any edema (\"old man face\"), it is Marasmus.",
                  "clinicalAlert": "Folic acid supplementation (400 mcg daily) must be started BEFORE conception and throughout the first trimester. Neural tube closure occurs by the 28th day of gestation, often before a woman realizes she is pregnant!",
                  "normalValues": [
                    {
                      "label": "Normal Serum Albumin",
                      "value": "3.5–5.0 g/dL"
                    },
                    {
                      "label": "Preconception Folic Acid Prophylaxis",
                      "value": "400 mcg (0.4 mg) daily"
                    },
                    {
                      "label": "Vitamin A Prophylaxis (Infant Dose at 9 Months)",
                      "value": "100,000 IU oral"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S1_Q63"
                  ]
                }
              }
            ]
          },
          {
            "id": "ph_pharm_5_2",
            "order": 2,
            "title": "Phase 2: Endocrine Pharmacology: Metformin Radiocontrast Hold & Levothyroxine Dosing",
            "bulletPoints": [
              {
                "id": "bp_pharm_502",
                "label": "Metformin 48-Hour Radiocontrast Lactic Acidosis Rule & Levothyroxine Empty-Stomach Dosing",
                "isHighYield": true,
                "context": {
                  "heading": "Oral Hypoglycemic Hazards & Thyroid Hormone Optimization",
                  "markdownContent": "### Metformin (Glucophage) & IV Radiocontrast Protocol\n* Drug Class: Biguanide (first-line for Type 2 Diabetes; decreases hepatic glucose production and increases peripheral insulin sensitivity).\n* **The 48-Hour Radiocontrast Rule (Cardinal Examination Question):**\n  * Patients taking Metformin scheduled for diagnostic imaging involving **Intravenous Iodinated Radiocontrast Media** (e.g., Contrast CT scans, Cardiac Catheterization, Angiography) are at high risk of contrast-induced nephropathy.\n  * If acute renal failure develops, Metformin cannot be excreted and accumulates, triggering life-threatening **Lactic Acidosis** (severe metabolic acidosis, hyperventilation, lethargy, mortality ~50%).\n  * **Mandatory Protocol:** **DISCONTINUE METFORMIN 48 HOURS PRIOR to the contrast procedure** (or morning of procedure if emergency) and **HOLD FOR AT LEAST 48 HOURS AFTER the procedure**.\n  * **Resumption Criterion:** Only resume Metformin after verifying that renal function (Serum Creatinine and eGFR) has remained completely normal post-procedure.\n\n### Levothyroxine Sodium (Eltroxin, Synthroid) Patient Education\n* Indication: Replacement therapy in primary hypothyroidism (Hashimoto's thyroiditis, post-thyroidectomy).\n* **Dosing Instructions:** Must be taken **early in the morning on an EMPTY STOMACH at least 30 to 60 minutes before breakfast** with a full glass of water.\n* *Drug Interactions:* Food, calcium supplements, iron (ferrous sulfate), and antacids drastically impair levothyroxine absorption in the gastrointestinal tract (separate by at least 4 hours).\n* **Toxicity / Overdose Vigilance:** Hyperthyroidism signs: tachycardia, palpitations, chest pain, insomnia, heat intolerance, tremor. Assess pulse rate before administration; hold if HR > 100 bpm.",
                  "clinicalPearl": "Instruct hypothyroid patients that Levothyroxine is a lifelong hormone replacement therapy that takes 3 to 4 weeks to reach full therapeutic steady-state. Never discontinue medication even when feeling completely healthy and energized.",
                  "clinicalAlert": "Never allow a diabetic patient taking Metformin to undergo an elective contrast CT scan without confirming that Metformin has been withheld for 48 hours — contrast nephropathy with Metformin accumulation causes fatal Lactic Acidosis!",
                  "normalValues": [
                    {
                      "label": "Metformin Contrast Hold Window",
                      "value": "48 hours before and 48 hours after IV contrast"
                    },
                    {
                      "label": "Normal Serum TSH Level",
                      "value": "0.4–4.0 mIU/L"
                    },
                    {
                      "label": "Levothyroxine Morning Empty Stomach Interval",
                      "value": "30–60 minutes before breakfast"
                    }
                  ],
                  "linkedPyqIds": [
                    "AIIMS_NORCET_2024_S2_Q29"
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "subj_apt_08",
    "name": "General Aptitude, Reasoning & Healthcare GK",
    "code": "APT-108",
    "iconName": "Calculator",
    "weightagePercentage": 8,
    "color": "#4f46e5",
    "subtopics": [
          {
                "id": "sub_apt_math_01",
                "title": "Clinical Mathematics, Solution Dilutions & Drug Dosage Arithmetic",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_apt_1_1",
                            "order": 1,
                            "title": "Phase 1: Solution Dilution Formulas, Percentage Calculations & Work-Time",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_101",
                                        "label": "Solution Dilution Equations (C1V1 = C2V2) & Bleach Preparation",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Stock Solution Dilution & Practical Nursing Mathematics",
                                              "markdownContent": "### Solution Dilution Formula (Universal Clinical Mathematics)\n* **Equation:** $$C_1 \\times V_1 = C_2 \\times V_2$$\n  - $C_1$ = Concentration of Stock Solution\n  - $V_1$ = Volume of Stock Solution needed\n  - $C_2$ = Desired Final Concentration\n  - $V_2$ = Desired Final Total Volume\n* **Parts of Water Shortcut Formula:**\n  $$Parts of Water to Add to 1 Part Stock = \\left(\\frac{\\% Concentration of Stock}{\\% Desired Concentration}\\right) - 1$$\n* **Clinical NORCET Example:**\n  - *To prepare 1% Sodium Hypochlorite from 5% stock bleach solution:*\n    $$Parts of Water = \\left(\\frac{5}{1}\\right) - 1 = 5 - 1 = 4 parts of water$$\n  - *Answer:* Mix **1 Part of 5% Bleach with 4 Parts of Water** (e.g. 200 mL bleach + 800 mL water = 1000 mL of 1% solution).\n\n### Clinical Work-Time & Percentage Shortcuts\n* If Nurse A can complete medication administration for a ward in 2 hours and Nurse B can complete it in 3 hours, working together they finish in:\n  $$Time = \\frac{A \\times B}{A + B} = \\frac{2 \\times 3}{2 + 3} = \\frac{6}{5} = 1.2 hours = 1 hour  12 minutes$$",
                                              "clinicalPearl": "To dilute a 5% solution to 1%: 5 divided by 1 = 5; subtract 1 = 4 parts water. Always add 4 parts water to 1 part stock solution.",
                                              "normalValues": [
                                                    {
                                                          "label": "1% Sodium Hypochlorite Available Chlorine",
                                                          "value": "10,000 ppm (Minor spills)"
                                                    },
                                                    {
                                                          "label": "10% Sodium Hypochlorite Available Chlorine",
                                                          "value": "100,000 ppm (Gross blood spills)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q92"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_apt_1_2",
                            "order": 2,
                            "title": "Phase 2: IV Infusion Flow Rates & Pediatric Weight-Based Arithmetic",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_102",
                                        "label": "Intravenous Gravity Drip Rate & Micro-drip vs Macro-drip Calculations",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Flow Rate Formulas & Drop Factor Arithmetic",
                                              "markdownContent": "### Standard IV Flow Rate Calculation Formula\n$$Flow Rate (gtt/min) = \\frac{Total Volume to Infuse (mL) \\times Drop Factor (gtt/mL)}{Time in Minutes}$$\n* **Drop Factors:**\n  - **Macro-Drip Sets:** 15 gtt/mL (standard adult blood & fluid set) or 20 gtt/mL.\n  - **Micro-Drip (Pediatric / Burette Set):** **60 gtt/mL**.\n* **Micro-Drip Shortcut Rule:**\n  - When Drop Factor is **60 gtt/mL**, the drops per minute (gtt/min) is **EXACTLY EQUAL** to the hourly infusion rate in mL/hr!\n  - *Example:* If an order reads 75 mL/hr via micro-drip, the flow rate is automatically **75 gtt/min**.\n\n### Pediatric Dosage Arithmetic Rules\n* **Clark's Rule (Based on Weight):**\n  $$Child Dose = \\frac{Child Weight in Pounds (lbs)}{150} \\times Adult Dose$$\n* **Young's Rule (Based on Age in Years):**\n  $$Child Dose = \\frac{Age in Years}{Age in Years + 12} \\times Adult Dose$$",
                                              "clinicalPearl": "On exam day, always round drops per minute to the nearest WHOLE integer because an IV drip chamber cannot deliver a fraction of a drop!",
                                              "normalValues": [
                                                    {
                                                          "label": "Micro-drip Factor",
                                                          "value": "60 gtt/mL"
                                                    },
                                                    {
                                                          "label": "Standard Macro-drip Factor",
                                                          "value": "15 or 20 gtt/mL"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q88"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_apt_reasoning_02",
                "title": "General Mental Ability, Logical Reasoning, Coding & Direction Sense",
                "importanceTier": "Moderate",
                "phases": [
                      {
                            "id": "ph_apt_2_1",
                            "order": 1,
                            "title": "Phase 1: Coding-Decoding, Number Series & Blood Relations",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_201",
                                        "label": "Alphabet Coding Ladders, Number Sequences & Family Tree Relations",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Deterministic Reasoning Frameworks for 20-Mark Non-Nursing Section",
                                              "markdownContent": "### 1. Reverse Alphabet Pairs & Position Numbers (EJOTY Mnemonic)\n* **E = 5, J = 10, O = 15, T = 20, Y = 25**.\n* **Opposite Letter Pairs (Sum of Positions = 27):**\n  - A-Z (Azad), B-Y (Boy), C-X (Crux), D-W (Dew), E-V (Even), F-U (Full), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jungle Queen), K-P (Kurta Pajama), L-O (Love), M-N (Man).\n\n### 2. Blood Relations Decoding Tree\n* Draw a family tree using standard symbols:\n  - Male = Square $[\\ ]$; Female = Circle $(O)$.\n  - Sibling relationship = Single horizontal line (—); Marriage = Double horizontal line (=).\n  - Generational gap = Vertical line $(\\vert)$.\n  - *Key Exam Distinctions:* Maternal Uncle = Mother's brother; Paternal Uncle = Father's brother. 'Only son of my grandfather' = Father (if paternal).",
                                              "clinicalPearl": "In the 20-question Non-Nursing section of AIIMS NORCET Stage I, solving Blood Relations, Direction Sense, and Coding-Decoding carries 100% deterministic accuracy with zero ambiguity against the -0.33 negative marking penalty.",
                                              "normalValues": [
                                                    {
                                                          "label": "NORCET Non-Nursing Weightage",
                                                          "value": "20 Questions (20 Marks) in Stage I"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "DSSSB_2022_Q05"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_apt_2_2",
                            "order": 2,
                            "title": "Phase 2: Direction Sense, Syllogisms & Seating Arrangements",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_202",
                                        "label": "Direction Sense Cardinal Coordinates & Venn Diagram Syllogisms",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "Compass Geometry & Logical Deduction",
                                              "markdownContent": "### Direction Sense Tests & Pythagoras Theorem\n* **Compass Cardinal Axes:** North (Up), South (Down), East (Right), West (Left).\n* **Right Turn:** Turn $90^\\circ$ Clockwise.\n* **Left Turn:** Turn $90^\\circ$ Counter-Clockwise.\n* **Shortest Distance Calculation:** Always apply **Pythagoras Theorem**:\n  $$Hypotenuse^2 = Base^2 + Perpendicular^2$$\n  *(Common Pythagorean Triples: 3-4-5, 6-8-10, 5-12-13, 8-15-17).*\n* **Shadow Rules:**\n  - *At Sunrise (Morning):* Sun is in the East → All shadows point to the **WEST**.\n  - *At Sunset (Evening):* Sun is in the West → All shadows point to the **EAST**.\n  - *At 12:00 Noon:* Sun is overhead → No shadow!",
                                              "clinicalPearl": "Morning shadow is ALWAYS to the West; Evening shadow is ALWAYS to the East. Use this rule to instantly deduce which direction a person is facing.",
                                              "normalValues": [
                                                    {
                                                          "label": "Cardinal Turn Angle",
                                                          "value": "90 degrees"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "DSSSB_2022_Q05"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_apt_committees_03",
                "title": "Landmark Healthcare Committees, Health Delivery System & Staffing Norms",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_apt_3_1",
                            "order": 1,
                            "title": "Phase 1: Historical Healthcare Committees in India",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_301",
                                        "label": "Landmark Healthcare Committees in India (Bhore to Shrivastav)",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "Historical Health Planning Chronology & Mandates",
                                              "markdownContent": "### Chronology of Public Health Committees in India\n* **Bhore Committee (1946) — 'Health Survey & Development Committee':**\n  - **Most Frequently Asked Committee in Nursing Officer Exams!**\n  - Conceptualized the **3-Tier Primary Health Care delivery system** in India.\n  - Recommended integrating preventive and curative health services at all administrative levels.\n  - Recommended 1 Primary Health Centre (PHC) for every 40,000 population.\n  - Coined the concept of 'Social Physician'.\n* **Mudaliar Committee (1962) — 'Health Survey & Planning Committee':**\n  - Recommended strengthening District Hospitals to act as regional referral hubs.\n  - Recommended setting up regional medical colleges.\n* **Chadah Committee (1963):** Recommended integrating the National Malaria Eradication Programme with general public health services.\n* **Mukherjee Committee (1965 & 1966):** Delinked Family Planning from Malaria programs.\n* **Jungalwalla Committee (1967) — 'Integration of Health Services':** Recommended eliminating private practice by government doctors, unified cadre, and equal pay for equal work.\n* **Kartar Singh Committee (1973) — 'Multipurpose Workers Committee':**\n  - Replaced uni-purpose health workers with **Multi-Purpose Workers (MPWs)** (Male & Female).\n  - Recommended transforming ANMs into MPW (Female).\n* **Shrivastav Committee (1975) — 'Medical Education and Support Manpower':**\n  - Created the cadre of **Village Health Guides (Community Health Volunteers)**.\n  - Recommended the **Reorientation of Medical Education (ROME)** scheme.",
                                              "clinicalPearl": "Exam Committee Mnemonic: 'Big Men Make Money Just Keeping Secret' = Bhore (3-tier PHC), Mudaliar (District hospitals), Mukherjee (Family planning delink), Jungalwalla (No private practice), Kartar (Multipurpose Worker), Shrivastav (Village health guides).",
                                              "normalValues": [
                                                    {
                                                          "label": "Bhore Committee Year",
                                                          "value": "1946 (Health Survey & Development)"
                                                    },
                                                    {
                                                          "label": "Kartar Singh Committee Mandate",
                                                          "value": "1973 (Multipurpose Worker MPW Cadre)"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q55"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_apt_3_2",
                            "order": 2,
                            "title": "Phase 2: Indian Public Health Standards (IPHS) & Staffing Norms",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_302",
                                        "label": "Sub-Centre, PHC, CHC Population Norms & INC Staffing Ratios",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "IPHS Rural Health Infrastructure & Nurse-to-Patient Ratios",
                                              "markdownContent": "### Population Norms for Rural Health Infrastructure in India\n\n| Health Facility | Population Norm (Plain Area) | Population Norm (Hilly / Tribal / Desert) | Key Staffing Highlights |\n| :--- | :--- | :--- | :--- |\n| **Sub-Centre (Ayushman Arogya Mandir)** | **5,000** | **3,000** | Staffed by 1 Female Health Worker (ANM), 1 Male Health Worker (MPW-M), and 1 Community Health Officer (CHO) |\n| **Primary Health Centre (PHC)** | **30,000** | **20,000** | First contact point between community and Medical Officer (MBBS); covers ~6 Sub-Centres; 4–6 inpatient beds |\n| **Community Health Centre (CHC)** | **120,000** | **80,000** | First Referral Unit (FRU); 30 inpatient beds; 4 Specialists (Surgeon, Physician, Gynaecologist, Paediatrician); covers ~4 PHCs |\n\n### Indian Nursing Council (INC) & SIU Nurse-to-Patient Ratios\n* **Intensive Care Unit (ICU / CCU / NICU):** **1 : 1** (1 nurse per bed per shift) or 1 : 2 for step-down HDU.\n* **Labor Room:** **1 : 1 per active delivery table**.\n* **Operation Theatre:** **2 : 1 per active table** (1 scrub nurse + 1 circulating nurse).\n* **Pediatric / Burns / Neurology Ward:** **1 : 4**.\n* **General Medical-Surgical Ward:** **1 : 3 (Teaching Hospital)** or **1 : 6 (Staff Inspection Unit - SIU norm)**.",
                                              "clinicalPearl": "Exam Trap: A Community Health Centre (CHC) serves 120,000 in plain areas and 80,000 in hilly areas. A Primary Health Centre (PHC) serves 30,000 in plain and 20,000 in hilly. Sub-centre serves 5,000 in plain and 3,000 in hilly.",
                                              "normalValues": [
                                                    {
                                                          "label": "Sub-Centre Plain / Hilly Norm",
                                                          "value": "5,000 / 3,000"
                                                    },
                                                    {
                                                          "label": "PHC Plain / Hilly Norm",
                                                          "value": "30,000 / 20,000"
                                                    },
                                                    {
                                                          "label": "CHC Plain / Hilly Norm",
                                                          "value": "120,000 / 80,000"
                                                    },
                                                    {
                                                          "label": "ICU Nurse-to-Patient Ratio",
                                                          "value": "1 : 1 per shift"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2023_S1_Q55",
                                                    "AIIMS_NORCET_2024_S1_Q19"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          },
          {
                "id": "sub_apt_gk_04",
                "title": "National Digital Health Mission, Flagship Welfare Schemes & Healthcare GK",
                "importanceTier": "High",
                "phases": [
                      {
                            "id": "ph_apt_4_1",
                            "order": 1,
                            "title": "Phase 1: Ayushman Bharat, PM-JAY & ABHA Digital Ecosystem",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_401",
                                        "label": "Ayushman Bharat PM-JAY (₹5 Lakh Cover) & ABHA Health Account",
                                        "isHighYield": true,
                                        "context": {
                                              "heading": "World's Largest Government Health Assurance Scheme",
                                              "markdownContent": "### Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)\n* **Launched:** September 23, 2018 (from Ranchi, Jharkhand).\n* **Financial Benefit:** Provides a defined health cover of **₹5 Lakh per family per year** for secondary and tertiary care hospitalization across public and empaneled private hospitals.\n* **Target Beneficiaries:** Covers over 12 crore poor and vulnerable families (~55 crore beneficiaries), representing the bottom 40% of the Indian population based on SECC 2011 data. Recently expanded to **all senior citizens aged 70 years and above** regardless of income!\n* **Key Features:** Completely cashless and paperless at point of service delivery; covers pre-existing conditions from Day 1; covers 3 days pre-hospitalization and 15 days post-hospitalization expenses.\n\n### Ayushman Bharat Digital Mission (ABDM)\n* **ABHA (Ayushman Bharat Health Account) Number:** A unique **14-digit digital health identification number** that randomly identifies an individual in India's digital healthcare ecosystem, linking laboratory reports, prescriptions, and discharge summaries across all healthcare providers.",
                                              "clinicalPearl": "AB PM-JAY provides ₹5,00,000 (5 Lakhs) per family per year. ABHA card has a 14-digit unique identification number.",
                                              "normalValues": [
                                                    {
                                                          "label": "PM-JAY Health Coverage Limit",
                                                          "value": "₹5,00,000 (5 Lakhs) per family per year"
                                                    },
                                                    {
                                                          "label": "ABHA Card Digits",
                                                          "value": "14 Digits"
                                                    },
                                                    {
                                                          "label": "Post-Hospitalization Coverage Window",
                                                          "value": "15 days"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q19"
                                              ]
                                        }
                                  }
                            ]
                      },
                      {
                            "id": "ph_apt_4_2",
                            "order": 2,
                            "title": "Phase 2: National Health Policy 2017 Key Goals & Healthcare GK",
                            "bulletPoints": [
                                  {
                                        "id": "bp_apt_402",
                                        "label": "National Health Policy 2017 Key Targets & International Health Days",
                                        "isHighYield": false,
                                        "context": {
                                              "heading": "National Strategic Targets & Healthcare GK Milestones",
                                              "markdownContent": "### National Health Policy (NHP) 2017 Quantitative Goals\n* **Public Health Expenditure:** Increase government health expenditure to **2.5% of GDP**.\n* **Life Expectancy at Birth:** Increase from 67.5 to **70 years by 2025**.\n* **Mortality Reductions:**\n  - Infant Mortality Rate (IMR) target: **< 28 per 1,000 live births**.\n  - Maternal Mortality Ratio (MMR) target: **< 70 per 100,000 live births** (SDG target).\n  - Under-5 Mortality Rate (U5MR) target: **< 23 per 1,000 live births**.\n  - Total Fertility Rate (TFR) target: **2.1 (Replacement level)**.\n* **Disease Elimination Targets:** Leprosy, Kala-Azar, and Lymphatic Filariasis elimination at block level.\n\n### High-Yield Healthcare Calendar Days (Frequently Asked in GK)\n* **April 7:** **World Health Day** (Founding date of WHO in 1948).\n* **March 24:** **World Tuberculosis Day** (Dr. Robert Koch discovered *M. tuberculosis* in 1882).\n* **May 12:** **International Nurses Day** (Birth anniversary of Florence Nightingale, 'The Lady with the Lamp').\n* **December 1:** **World AIDS Day**.\n* **November 14:** **World Diabetes Day** (Birth anniversary of Frederick Banting, co-discoverer of Insulin).\n* **September 28:** **World Rabies Day** (Death anniversary of Louis Pasteur).",
                                              "clinicalPearl": "May 12 is International Nurses Day commemorating Florence Nightingale's birth (May 12, 1820). April 7 is World Health Day commemorating WHO foundation (April 7, 1948).",
                                              "normalValues": [
                                                    {
                                                          "label": "NHP 2017 Target Health GDP Share",
                                                          "value": "2.5% of GDP"
                                                    },
                                                    {
                                                          "label": "SDG Maternal Mortality Ratio Target",
                                                          "value": "< 70 per 100,000 live births"
                                                    }
                                              ],
                                              "linkedPyqIds": [
                                                    "AIIMS_NORCET_2024_S1_Q19"
                                              ]
                                        }
                                  }
                            ]
                      }
                ]
          }
    ]
  }
];
