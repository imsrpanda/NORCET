import React from 'react';

interface ClinicalMarkdownProps {
  content: string;
}

export const ClinicalMarkdown: React.FC<ClinicalMarkdownProps> = ({ content }) => {
  // Parse sections, tables, lists, and headings
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let tableBuffer: string[] = [];
  let inTable = false;

  const flushTable = (key: number) => {
    if (tableBuffer.length < 2) {
      tableBuffer = [];
      inTable = false;
      return;
    }

    const headerLine = tableBuffer[0];
    const dataLines = tableBuffer.slice(2); // Skip separator row |:---|:---|

    const parseRow = (rowStr: string) =>
      rowStr
        .split('|')
        .map((cell) => cell.trim())
        .filter((_, idx, arr) => idx > 0 && idx < arr.length);

    const headers = parseRow(headerLine);
    const rows = dataLines.map((row) => parseRow(row));

    elements.push(
      <div key={`table-${key}`} className="my-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900/60">
        <table className="w-full text-left text-xs md:text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 font-semibold">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-3 py-2.5 whitespace-nowrap">
                  {renderInlineFormatting(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-3 py-2 text-slate-600 dark:text-slate-300">
                    {renderInlineFormatting(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

    tableBuffer = [];
    inTable = false;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Check if table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      inTable = true;
      tableBuffer.push(trimmed);
      return;
    } else if (inTable) {
      flushTable(index);
    }

    // Formulas enclosed in $$...$$ on their own line
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
      const formulaContent = trimmed.slice(2, -2).trim();
      elements.push(
        <div key={`formula-${index}`} className="my-3">
          {renderMathFormula(formulaContent)}
        </div>
      );
      return;
    }

    // Headings
    if (trimmed.startsWith('#### ')) {
      elements.push(
        <h4 key={index} className="text-sm font-bold text-teal-700 dark:text-teal-400 mt-4 mb-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block"></span>
          {renderInlineFormatting(trimmed.replace('#### ', ''))}
        </h4>
      );
    } else if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={index} className="text-base font-bold text-slate-900 dark:text-slate-100 mt-5 mb-2 pb-1 border-b border-slate-200 dark:border-slate-800">
          {renderInlineFormatting(trimmed.replace('### ', ''))}
        </h3>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
      const itemText = trimmed.replace(/^[-•*]\s*/, '');
      elements.push(
        <div key={index} className="flex items-start gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300 my-1 leading-relaxed">
          <span className="text-teal-600 dark:text-teal-400 font-bold select-none mt-0.5">•</span>
          <div className="flex-1">{renderInlineFormatting(itemText)}</div>
        </div>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      const numMatch = trimmed.match(/^(\d+)\.\s(.*)/);
      if (numMatch) {
        elements.push(
          <div key={index} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 dark:text-slate-300 my-1.5 leading-relaxed">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 text-[11px] font-bold flex items-center justify-center">
              {numMatch[1]}
            </span>
            <div className="flex-1 pt-0.5">{renderInlineFormatting(numMatch[2])}</div>
          </div>
        );
      }
    } else if (trimmed.length > 0) {
      elements.push(
        <p key={index} className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2">
          {renderInlineFormatting(trimmed)}
        </p>
      );
    }
  });

  if (inTable) {
    flushTable(lines.length);
  }

  return <div className="clinical-prose">{elements}</div>;
};

// Clean and render beautiful visual math fractions and formulas
function renderMathFormula(raw: string): React.ReactNode {
  // Clean LaTeX commands and any unescaped artifacts
  let cleaned = raw
    .replace(/\x0C/g, '') // remove form feed
    .replace(/\\?text\{([^}]+)\}/g, '$1')
    .replace(/(^|[^a-zA-Z])ext\{([^}]+)\}/g, '$1$2')
    .replace(/\\?frac\{/g, 'FRAC{')
    .replace(/(^|[^a-zA-Z])rac\{/g, '$1FRAC{')
    .replace(/\\?times/g, '×')
    .replace(/(^|\s)imes(\s|$)/g, '$1×$2')
    .replace(/Drop Fac[→\\]?r/g, 'Drop Factor')
    .replace(/\\?cdot/g, '·')
    .replace(/\\geq?/g, '≥')
    .replace(/\\leq?/g, '≤')
    .replace(/\\approx/g, '≈')
    .replace(/\\pm/g, '±')
    .replace(/\\to\b/g, '→')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '');

  // Check if formula contains a fraction: e.g. LeftSide = FRAC{Numerator}{Denominator}
  const fracRegex = /^(.*?)FRAC\{([^}]+)\}\{([^}]+)\}(.*?)$/;
  const match = cleaned.match(fracRegex);

  if (match) {
    const leftPart = match[1].trim().replace(/\\/g, '');
    const numerator = match[2].trim().replace(/\\?text\{([^}]+)\}/g, '$1').replace(/\\/g, '');
    const denominator = match[3].trim().replace(/\\?text\{([^}]+)\}/g, '$1').replace(/\\/g, '');
    const rightPart = match[4].trim().replace(/\\/g, '');

    return (
      <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 flex flex-wrap items-center justify-center gap-3 text-indigo-950 dark:text-indigo-200 font-sans shadow-xs my-2">
        {leftPart && <span className="font-bold text-xs sm:text-sm">{leftPart}</span>}
        
        {/* Stacked Fraction Block */}
        <div className="inline-flex flex-col items-center justify-center text-center px-2">
          <div className="font-semibold text-xs sm:text-sm pb-1 border-b-2 border-indigo-500/70 dark:border-indigo-400 w-full px-2">
            {numerator}
          </div>
          <div className="font-semibold text-xs sm:text-sm pt-1 w-full px-2 text-indigo-800 dark:text-indigo-300">
            {denominator}
          </div>
        </div>

        {rightPart && <span className="font-bold text-xs sm:text-sm">{rightPart}</span>}
      </div>
    );
  }

  // Fallback for simple formulas without fractions
  const cleanSimple = cleaned.replace(/\\/g, '');
  return (
    <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center font-mono text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 font-bold shadow-xs">
      {cleanSimple}
    </div>
  );
}

// Helper to format bold, code, math symbols, and color badges
function renderInlineFormatting(text: string): React.ReactNode {
  // First clean any inline LaTeX text commands and unescaped artifacts
  const preCleaned = text
    .replace(/\x0C/g, '') // remove form feed
    .replace(/\\?text\{([^}]+)\}/g, '$1')
    .replace(/(^|[^a-zA-Z])ext\{([^}]+)\}/g, '$1$2')
    .replace(/\\?times/g, '×')
    .replace(/(^|\s)imes(\s|$)/g, '$1×$2')
    .replace(/Drop Fac[→\\]?r/g, 'Drop Factor')
    .replace(/\\geq?/g, '≥')
    .replace(/\\leq?/g, '≤')
    .replace(/\\approx/g, '≈')
    .replace(/\\to\b/g, '→')
    .replace(/\$\^\{\\circ\}\\text\{C\}\$/g, '°C')
    .replace(/\$\\ge\s?(\d+)\^\{\\circ\}\\text\{C\}\$/g, '≥ $1°C');

  // Replace clean text tokens
  const parts = preCleaned.split(/(\*\*.*?\*\*|`.*?`|\$\$.*?\$\$|\$.*?\$)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-mono text-[11px]">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <React.Fragment key={i}>{renderMathFormula(part.slice(2, -2))}</React.Fragment>;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      // Inline math cleanup
      const cleanInline = part.slice(1, -1)
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\geq?/g, '≥')
        .replace(/\\leq?/g, '≤')
        .replace(/\\times/g, '×')
        .replace(/\\to\b/g, '→');
      return (
        <span key={i} className="font-mono text-teal-700 dark:text-teal-300 font-medium">
          {cleanInline}
        </span>
      );
    }
    return part;
  });
}
