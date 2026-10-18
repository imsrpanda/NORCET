import React, { useState } from 'react';
import { 
  Bookmark, 
  Table, 
  Flame, 
  Search, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { CLINICAL_CHEAT_SHEETS } from '../../data/revisionVaultData';
import { CheatSheetCard } from './CheatSheetCard';
import { useAppStore, appStore } from '../../store/useAppStore';
import { BulletPointItem } from '../../types';
import { triggerHaptic } from '../../utils/haptics';

export const RevisionVaultView: React.FC = () => {
  const { syllabus, userProgress } = useAppStore();
  const [subTab, setSubTab] = useState<'sheets' | 'bookmarks' | 'high-yield'>('sheets');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all bookmarked bullets
  const bookmarkedBullets: { bullet: BulletPointItem; subjectName: string; subtopicTitle: string; phaseTitle: string; subjectId: string; subtopicId: string; phaseId: string }[] = [];
  const highYieldBullets: { bullet: BulletPointItem; subjectName: string; subtopicTitle: string; phaseTitle: string; subjectId: string; subtopicId: string; phaseId: string }[] = [];

  syllabus.forEach((subject) => {
    subject.subtopics.forEach((subtopic) => {
      subtopic.phases.forEach((phase) => {
        phase.bulletPoints.forEach((bullet) => {
          if (userProgress.bookmarkedBulletIds[bullet.id]) {
            bookmarkedBullets.push({
              bullet,
              subjectName: subject.name,
              subtopicTitle: subtopic.title,
              phaseTitle: phase.title,
              subjectId: subject.id,
              subtopicId: subtopic.id,
              phaseId: phase.id,
            });
          }
          if (bullet.isHighYield) {
            highYieldBullets.push({
              bullet,
              subjectName: subject.name,
              subtopicTitle: subtopic.title,
              phaseTitle: phase.title,
              subjectId: subject.id,
              subtopicId: subtopic.id,
              phaseId: phase.id,
            });
          }
        });
      });
    });
  });

  const handleOpenBullet = (item: typeof bookmarkedBullets[0]) => {
    triggerHaptic('medium');
    appStore.jumpToStudy(item.subjectId, item.subtopicId, item.phaseId, item.bullet.id);
  };

  // Filter cheat sheets by search
  const filteredSheets = CLINICAL_CHEAT_SHEETS.filter((sheet) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sheet.title.toLowerCase().includes(q) ||
      sheet.category.toLowerCase().includes(q) ||
      sheet.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-teal-800 via-teal-900 to-slate-950 p-5 rounded-2xl text-white border border-teal-700/40 shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-1.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-bold w-fit">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>High-Yield Retention Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Quick Revision Vault
          </h2>
          <p className="text-xs text-teal-100">
            Rapid clinical memory aids, IV gauge color matrices, ECG lead anatomy, and saved pearls.
          </p>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search cheat sheets, IV sizes, drugs, or lab values..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[11px] font-bold text-slate-400 hover:text-slate-600 absolute right-3.5 top-1/2 -translate-y-1/2"
          >
            Clear
          </button>
        )}
      </div>

      {/* Vault Sub-Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
        <button
          onClick={() => {
            triggerHaptic('light');
            setSubTab('sheets');
          }}
          className={`py-2 px-1 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            subTab === 'sheets'
              ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 shadow-xs'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Table className="w-3.5 h-3.5" />
          <span>Cheat Sheets</span>
        </button>

        <button
          onClick={() => {
            triggerHaptic('light');
            setSubTab('bookmarks');
          }}
          className={`py-2 px-1 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            subTab === 'bookmarks'
              ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Saved ({bookmarkedBullets.length})</span>
        </button>

        <button
          onClick={() => {
            triggerHaptic('light');
            setSubTab('high-yield');
          }}
          className={`py-2 px-1 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            subTab === 'high-yield'
              ? 'bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 shadow-xs'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>High Yield ({highYieldBullets.length})</span>
        </button>
      </div>

      {/* SubTab 1: Rapid Clinical Cheat Sheets */}
      {subTab === 'sheets' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredSheets.length === 0 ? (
            <div className="col-span-full text-center py-8 text-xs text-slate-400">
              No clinical cheat sheets match "{searchQuery}"
            </div>
          ) : (
            filteredSheets.map((sheet) => (
              <CheatSheetCard key={sheet.id} sheet={sheet} />
            ))
          )}
        </div>
      )}

      {/* SubTab 2: Bookmarked Concepts */}
      {subTab === 'bookmarks' && (
        <div>
          {bookmarkedBullets.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <Bookmark className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
              <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                No Bookmarked Concepts Yet
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Tap the bookmark icon on any Level 4 card or Level 5 drawer to save critical clinical points for rapid revision.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bookmarkedBullets.map((item) => (
                <div
                  key={item.bullet.id}
                  onClick={() => handleOpenBullet(item)}
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3 group"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">
                      <Bookmark className="w-3 h-3 fill-amber-500" />
                      <span>{item.subjectName}</span>
                      <span>•</span>
                      <span className="text-slate-400">{item.phaseTitle}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {item.bullet.label}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform flex-shrink-0">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SubTab 3: High Yield Flagged Gems */}
      {subTab === 'high-yield' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highYieldBullets.map((item) => (
            <div
              key={item.bullet.id}
              onClick={() => handleOpenBullet(item)}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3 group"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase">
                  <Flame className="w-3 h-3 fill-rose-500" />
                  <span>{item.subjectName}</span>
                  <span>•</span>
                  <span className="text-slate-400">{item.phaseTitle}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate mt-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {item.bullet.label}
                </h4>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:translate-x-1 transition-transform flex-shrink-0">
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
