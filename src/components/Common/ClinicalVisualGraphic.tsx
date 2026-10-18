import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowDown, 
  AlertOctagon, 
  Sparkles, 
  Calculator
} from 'lucide-react';
import { ClinicalDiagramData } from '../../types/diagramTypes';
import { triggerHaptic } from '../../utils/haptics';

interface ClinicalVisualGraphicProps {
  diagram: ClinicalDiagramData;
}

export const ClinicalVisualGraphic: React.FC<ClinicalVisualGraphicProps> = ({ diagram }) => {
  const [selectedMatrixId, setSelectedMatrixId] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-2xl border border-teal-500/30 p-4 sm:p-5 shadow-xl text-white space-y-4 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Tag & Title */}
      <div className="relative z-10 flex items-start justify-between gap-3 flex-wrap border-b border-slate-800 pb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-extrabold uppercase tracking-wider border border-teal-400/30">
              <GitBranch className="w-3 h-3 text-teal-300" />
              <span>{diagram.tag}</span>
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-black text-white tracking-tight leading-snug">
            {diagram.title}
          </h3>
          {diagram.subtitle && (
            <p className="text-xs text-slate-400 mt-0.5">
              {diagram.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* RENDER MODE 1: MATRIX VIEW (e.g. IV Cannula Color Codes) */}
      {diagram.type === 'matrix' && diagram.matrixItems && (
        <div className="space-y-2.5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {diagram.matrixItems.map((item) => {
              const isSelected = selectedMatrixId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    triggerHaptic('light');
                    setSelectedMatrixId(isSelected ? null : item.id);
                  }}
                  className={`p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected || item.highlight
                      ? 'bg-slate-800/90 border-teal-500 shadow-md shadow-teal-500/15 ring-1 ring-teal-500/50'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded-full ${item.colorCode} shadow-xs flex-shrink-0`} />
                      <span className="font-extrabold text-xs text-white">
                        {item.label}
                      </span>
                    </div>

                    {item.metric && (
                      <span className="font-mono text-[11px] font-bold text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/60">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {item.indication}
                  </p>

                  {item.subLabel && (
                    <div className="text-[10px] text-slate-500 font-mono mt-1.5 pt-1 border-t border-slate-800/60 flex items-center justify-between">
                      <span>Outer Diameter</span>
                      <span className="text-slate-400">{item.subLabel}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* RENDER MODE 2: COMPARISON COLUMNS VIEW (e.g. Tonicity Shifts) */}
      {diagram.type === 'comparison' && diagram.comparisonColumns && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
          {diagram.comparisonColumns.map((col, idx) => {
            const borderColors = {
              teal: 'border-teal-500/40 bg-teal-950/20',
              indigo: 'border-indigo-500/40 bg-indigo-950/20',
              rose: 'border-rose-500/40 bg-rose-950/20',
              amber: 'border-amber-500/40 bg-amber-950/20',
              emerald: 'border-emerald-500/40 bg-emerald-950/20',
            }[col.accentColor] || 'border-slate-800 bg-slate-900';

            return (
              <div 
                key={idx}
                className={`p-3.5 rounded-2xl border ${borderColors} flex flex-col justify-between space-y-3`}
              >
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white border-b border-white/10 pb-2">
                    {col.title}
                  </h4>

                  <div className="space-y-2 mt-2.5">
                    {col.features.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          {feat.label}
                        </span>
                        <span className={`leading-snug block mt-0.5 ${feat.highlight ? 'font-bold text-rose-300' : 'text-slate-200'}`}>
                          {feat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* RENDER MODE 3: FLOWCHART ALGORITHM VIEW (e.g. Transfusion Reaction, CPR) */}
      {diagram.type === 'flowchart' && diagram.steps && (
        <div className="space-y-3 relative z-10">
          {/* Optional Formula Banner */}
          {diagram.formula && (
            <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-teal-300">
                <Calculator className="w-4 h-4" />
                <span>Formula:</span>
              </div>
              <div className="font-mono font-bold text-white bg-slate-950/60 p-2 rounded-lg border border-teal-500/20">
                {diagram.formula.expression}
              </div>
              <p className="text-[11px] text-slate-300">
                {diagram.formula.description}
              </p>
              {diagram.formula.example && (
                <div className="text-[11px] text-amber-300/90 pt-1 border-t border-teal-500/20">
                  <strong>Example:</strong> {diagram.formula.example}
                </div>
              )}
            </div>
          )}

          {/* Sequential Step Nodes with Connectors */}
          <div className="space-y-2">
            {diagram.steps.map((step, idx) => {
              const isLast = idx === (diagram.steps?.length || 0) - 1;

              const badgeColor = {
                critical: 'bg-rose-600 text-white border-rose-400',
                warning: 'bg-amber-600 text-white border-amber-400',
                success: 'bg-emerald-600 text-white border-emerald-400',
                standard: 'bg-teal-600 text-white border-teal-400',
              }[step.type || 'standard'];

              return (
                <div key={step.step} className="relative">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3 hover:border-teal-500/50 transition-colors">
                    {/* Step Number Badge */}
                    <div className={`w-7 h-7 rounded-lg font-mono font-black text-xs flex items-center justify-center flex-shrink-0 border shadow-xs ${badgeColor}`}>
                      {step.step}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                        {step.action}
                      </h4>
                      {step.detail && (
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {step.detail}
                        </p>
                      )}

                      {/* In-Step Critical Alert */}
                      {step.criticalAlert && (
                        <div className="mt-2 p-2 rounded-lg bg-rose-950/60 border border-rose-500/40 text-[11px] text-rose-200 flex items-start gap-1.5">
                          <AlertOctagon className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                          <span>{step.criticalAlert}</span>
                        </div>
                      )}

                      {/* In-Step Gold Pearl */}
                      {step.goldPearl && (
                        <div className="mt-2 p-2 rounded-lg bg-amber-950/60 border border-amber-500/40 text-[11px] text-amber-200 flex items-start gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{step.goldPearl}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Flow Arrow Connector between steps */}
                  {!isLast && (
                    <div className="flex justify-center py-0.5">
                      <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 my-0.5 shadow-xs">
                        <ArrowDown className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
