import React from 'react';
import { Calendar, Target, Sparkles } from 'lucide-react';
import { getTargetExamInfo } from '../../utils/helpers';

export const CountdownBanner: React.FC = () => {
  const { examName, daysLeft, examDateString } = getTargetExamInfo();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white p-5 shadow-lg shadow-teal-900/20 border border-teal-600/30">
      {/* Decorative medical glow backdrop */}
      <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-6 -top-6 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-teal-200 text-xs font-semibold">
            <Target className="w-3.5 h-3.5 text-teal-300" />
            <span>Target Exam</span>
          </div>
          <div className="flex items-center gap-1 text-slate-300 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>{examDateString}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              {examName}
              <Sparkles className="w-4 h-4 text-amber-300 animate-bounce" />
            </h2>
            <p className="text-xs text-teal-100/90 mt-1">
              AIIMS New Delhi Central Recruitment Cell
            </p>
          </div>

          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-amber-300 font-mono">
                {daysLeft}
              </span>
              <span className="text-xs uppercase tracking-wider text-teal-200 font-bold">
                Days Left
              </span>
            </div>
            <p className="text-[10px] text-teal-300/80 font-medium">Stage 1 + Stage 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};
