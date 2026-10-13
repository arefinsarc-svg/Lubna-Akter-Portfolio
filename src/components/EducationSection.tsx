import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import {
  GraduationCap,
  School,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EducationSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const { data } = usePortfolio();

  const handleCardClick = (idx: number) => {
    // When tapped, stays still and pinned open until another click on the box
    setPinnedIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="education" className="py-14 sm:py-20 border-t border-purple-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10 text-center px-2"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-[11px] sm:text-xs font-mono mb-2 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.education.tag}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            {data.sectionTitles?.education || t.education.title}
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/70 mt-1 max-w-xl mx-auto leading-relaxed">
            {t.education.subtitle}
          </p>
        </motion.div>

        {/* Education List - Clean Bar Matching References Section */}
        <div className="space-y-3.5">
          {data.education.map((item, idx) => {
            const isExpanded = pinnedIndex === idx || hoveredIndex === idx;

            const institutionName = item.institution || '';
            const instituteLink =
              item.institutionUrl ||
              `https://www.google.com/search?q=${encodeURIComponent(institutionName)}`;

            const displayTimeline =
              item.timeline ||
              (item as any).yearStatus?.split('•')[0]?.trim() ||
              '';
            const displayLocation =
              item.location ||
              (item as any).yearStatus?.split('•')[1]?.trim() ||
              'Dhaka, Bangladesh';
            const displayGroup =
              item.group ||
              (item.discipline.includes('HSC') || item.discipline.includes('SSC')
                ? 'Science Group'
                : item.discipline.includes('B. Pharm')
                ? 'Faculty of Pharmacy'
                : 'General Studies');

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(idx)}
                className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md ${
                  isExpanded
                    ? 'bg-slate-900 border-purple-400 shadow-xl shadow-purple-500/20 lavender-glow ring-1 ring-purple-400/30'
                    : 'bg-slate-900/60 border-purple-500/20 hover:border-purple-400/40 shadow-sm hover:bg-slate-900/80'
                }`}
              >
                {/* Bar Header: Icon + Degree Title + Down Arrow (Hidden on Mobile) */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-3.5 text-center sm:text-left w-full sm:w-auto">
                    <div
                      className={`w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isExpanded
                          ? 'bg-purple-600 border-purple-300 text-white shadow-md shadow-purple-600/30 scale-105'
                          : 'bg-purple-950/60 border-purple-500/30 text-purple-300'
                      }`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg leading-snug text-center sm:text-left tracking-wide">
                        {item.discipline}
                      </h3>
                    </div>
                  </div>

                  {/* Arrow: Hidden in mobile view, displayed on PC/tablets */}
                  <div className="hidden sm:flex items-center justify-center shrink-0">
                    <span
                      className={`text-[11px] font-mono p-1 rounded-md transition-colors ${
                        isExpanded ? 'text-purple-300' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-purple-300' : ''
                        }`}
                      />
                    </span>
                  </div>
                </div>

                {/* Dropdown Content on Hover / Tap: Clean 2 Columns & 2 Rows, No Boxy Clutter */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4 pt-4 border-t border-purple-500/20"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs sm:text-sm">
                        {/* Row 1, Col 1: Institute */}
                        <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-200">
                          <School className="w-4 h-4 text-purple-400 shrink-0" />
                          <a
                            href={instituteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-medium text-white hover:text-purple-300 inline-flex items-center gap-1.5 transition-colors group/link truncate"
                          >
                            <span className="truncate">{institutionName}</span>
                            <ExternalLink className="w-3 h-3 text-purple-400 opacity-60 group-hover/link:opacity-100 transition-opacity shrink-0" />
                          </a>
                        </div>

                        {/* Row 1, Col 2: Department / Group */}
                        <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-200">
                          <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span className="font-medium text-purple-200 truncate">
                            {displayGroup}
                          </span>
                        </div>

                        {/* Row 2, Col 1: Timeline & Location (Lock icons and labels to prevent mobile alignment issues) */}
                        <div className="flex items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-slate-300 flex-wrap">
                          <div className="inline-flex items-center gap-1.5 shrink-0">
                            <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                            <span className="font-mono text-slate-200">{displayTimeline}</span>
                          </div>
                          <span className="text-purple-500/40 hidden sm:inline">•</span>
                          <div className="inline-flex items-center gap-1.5 shrink-0">
                            <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                            <span className="text-slate-300">{displayLocation}</span>
                          </div>
                        </div>

                        {/* Row 2, Col 2: Grade (Mentioned only ONCE) */}
                        <div className="flex items-center justify-center sm:justify-start gap-2.5">
                          <Award className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-mono font-bold text-purple-200 bg-purple-500/15 border border-purple-400/30 px-2.5 py-0.5 rounded-md shadow-sm">
                            {item.result}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
