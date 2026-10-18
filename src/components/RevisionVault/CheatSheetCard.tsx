import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { ClinicalCheatSheet } from '../../types';
import { triggerHaptic } from '../../utils/haptics';

interface CheatSheetCardProps {
  sheet: ClinicalCheatSheet;
}

export const CheatSheetCard: React.FC<CheatSheetCardProps> = ({ sheet }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    triggerHaptic('light');
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
      {/* Header */}
      <button
        onClick={toggleOpen}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
      >
        <div className="min-w-0 flex-1 pr-2">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-900">
              {sheet.category}
            </span>
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white truncate">
            {sheet.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
            {sheet.description}
          </p>
        </div>

        <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 flex-shrink-0">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="px-4 pb-4 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-3">
          {/* Scrollable Clinical Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  {sheet.tableHeaders.map((header, i) => (
                    <th key={i} className="px-3 py-2.5 whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {sheet.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors">
                    {row.map((cell, cIdx) => {
                      const isObj = typeof cell === 'object' && cell !== null;
                      const text = isObj ? cell.text : cell;
                      const highlight = isObj && cell.highlight;
                      const badge = isObj ? cell.badge : undefined;

                      return (
                        <td key={cIdx} className="px-3 py-2 text-slate-700 dark:text-slate-300">
                          {badge ? (
                            <span className={`inline-block px-2 py-0.5 rounded-md font-bold text-[11px] ${badge}`}>
                              {text}
                            </span>
                          ) : highlight ? (
                            <strong className="font-bold text-slate-900 dark:text-white font-mono">
                              {text}
                            </strong>
                          ) : (
                            <span>{text}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Clinical Gold Pearl Banner */}
          <div className="p-3 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="font-medium leading-relaxed">{sheet.pearl}</div>
          </div>
        </div>
      )}
    </div>
  );
};
