import React, { useMemo } from 'react';
import { Lightbulb, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { appStore } from '../../store/useAppStore';

interface DailyPearl {
  title: string;
  summary: string;
  examTrap: string;
  subjectId: string;
  subtopicId: string;
  phaseId: string;
  bulletId: string;
}

const HIGH_YIELD_PEARLS: DailyPearl[] = [
  {
    title: 'Acute Hemolytic Transfusion Reaction: The Mandatory 1st Step',
    summary: 'When a patient develops lumbar flank pain, fever, or chills during blood transfusion, the immediate action is to STOP THE INFUSION IMMEDIATELY and disconnect the blood tubing from the cannula hub. Never flush the remaining blood into the vein!',
    examTrap: 'Exam Trap: Do not just slow the rate to KVO!',
    subjectId: 'subj_fon_01',
    subtopicId: 'sub_fon_iv_01',
    phaseId: 'ph_fon_1_2',
    bulletId: 'bp_fon_103'
  },
  {
    title: 'Peripheral IV Cannula Sizing & Flow Rate Priorities',
    summary: 'For massive trauma resuscitation and Post-Partum Hemorrhage, 14G (Orange, ~240 mL/min) and 16G (Grey, ~180 mL/min) are mandatory. 18G Green is the gold-standard routine choice for packed RBC transfusions.',
    examTrap: 'Exam Trap: 20G Pink is for routine fluids, NOT massive hemorrhage!',
    subjectId: 'subj_fon_01',
    subtopicId: 'sub_fon_iv_01',
    phaseId: 'ph_fon_1_1',
    bulletId: 'bp_fon_101'
  },
  {
    title: 'Crystalloid Osmolarity & Tonicity Dynamics',
    summary: '0.9% Normal Saline and Ringer Lactate are isotonic (~308 mOsm/L). 3% Hypertonic Saline draws edema fluid out of swollen brain cells. Hypotonic fluids (0.45% NaCl) are strictly contraindicated in raised ICP and burn shock.',
    examTrap: 'Exam Trap: D5W acts physiologically as free hypotonic water in vivo!',
    subjectId: 'subj_fon_01',
    subtopicId: 'sub_fon_iv_01',
    phaseId: 'ph_fon_1_1',
    bulletId: 'bp_fon_102'
  },
  {
    title: 'Nasogastric Tube Verification & Enteral Safety',
    summary: 'Abdominal X-ray is the only definitive gold-standard verification upon insertion. Ongoing bedside verification requires checking aspirate pH (<= 5.5). Auscultation of air rush (whoosh test) is obsolete and unreliable.',
    examTrap: 'Exam Trap: Never rely on epigastric air whoosh alone!',
    subjectId: 'subj_fon_01',
    subtopicId: 'sub_fon_gi_02',
    phaseId: 'ph_fon_2_1',
    bulletId: 'bp_fon_201'
  },
  {
    title: 'Tracheostomy & Endotracheal Cuff Pressure Standards',
    summary: 'Cuff pressure must be maintained at 20 to 25 mmHg (25 to 30 cmH2O). Pressures above 25–30 mmHg exceed tracheal mucosal capillary perfusion pressure, causing ischemic necrosis and late stenosis.',
    examTrap: 'Exam Trap: Check cuff pressure with a manometer, not finger palpation!',
    subjectId: 'subj_fon_01',
    subtopicId: 'sub_fon_resp_04',
    phaseId: 'ph_fon_4_1',
    bulletId: 'bp_fon_401'
  },
  {
    title: 'Braden Scale Pressure Ulcer Risk Thresholds',
    summary: 'Assesses sensory, moisture, activity, mobility, nutrition, and shear. Scores range from 6 to 23. Lower scores mean higher risk: a score <= 12 signifies High/Severe Risk requiring 2-hourly turns and pressure-relief mattresses.',
    examTrap: 'Exam Trap: Lower Braden score = HIGHER risk of ulcers!',
    subjectId: 'subj_fon_01',
    subtopicId: 'sub_fon_wound_05',
    phaseId: 'ph_fon_5_1',
    bulletId: 'bp_fon_501'
  },
  {
    title: 'Nursing Jurisprudence: Intentional Torts (Assault vs Battery)',
    summary: 'Assault is threatening verbal conduct that creates apprehension of imminent harm ("I will tie you down"). Battery is actual unconsented, non-privileged physical contact or unauthorized drug injection.',
    examTrap: 'Exam Trap: Threatening = Assault; Unauthorized injection = Battery!',
    subjectId: 'subj_fon_01',
    subtopicId: 'sub_fon_ethics_11',
    phaseId: 'ph_fon_11_1',
    bulletId: 'bp_fon_1101'
  }
];

export const PearlOfTheDay: React.FC = () => {
  // Rotates deterministically based on day of the year
  const activePearl = useMemo(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const index = Math.abs(dayOfYear) % HIGH_YIELD_PEARLS.length;
    return HIGH_YIELD_PEARLS[index];
  }, []);

  const handleReadFull = () => {
    appStore.jumpToStudy(
      activePearl.subjectId,
      activePearl.subtopicId,
      activePearl.phaseId,
      activePearl.bulletId
    );
  };

  return (
    <div className="bg-amber-500/10 dark:bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl p-4 sm:p-5 border border-y-amber-500/20 border-r-amber-500/20">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wide">
          <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>NORCET High-Yield Clinical Pearl</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300">
          DAILY ESSENTIAL
        </span>
      </div>

      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
        {activePearl.title}
      </h4>

      <p className="text-xs text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
        {activePearl.summary}
      </p>

      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-amber-500/20">
        <div className="flex items-center gap-1 text-[11px] font-medium text-amber-800 dark:text-amber-400">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
          <span>{activePearl.examTrap}</span>
        </div>

        <button
          onClick={handleReadFull}
          className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer"
        >
          <span>Read Protocol</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

