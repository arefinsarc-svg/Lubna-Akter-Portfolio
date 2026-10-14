import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, Layers, Award, Cpu, Users, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CompetenciesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'soft' | 'computer'>('core');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { t } = useLanguage();
  const { data } = usePortfolio();

  const handleTabClick = (tab: 'core' | 'soft' | 'computer') => {
    setActiveTab(tab);
  };

  return (
    <section id="competencies" className="py-16 sm:py-20 border-t border-purple-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10 text-center px-2"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-[11px] sm:text-xs font-mono mb-2.5">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.skills.tag || 'Pharmaceutical Knowledge & Skills'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-center">
            {data.sectionTitles?.skills || t.skills.title || 'Pharmaceutical Knowledge & Skills'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto mt-2 text-center">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Tab Navigation - Centrally aligned, icon-only on mobile & tablet, labels on desktop, no number counts */}
        <div className="flex justify-center mb-8 px-2">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-slate-900/90 border border-purple-500/30 p-1.5 rounded-2xl shadow-lg max-w-full">
            <button
              onClick={() => handleTabClick('core')}
              type="button"
              title={t.skills.core || 'Pharmaceutical Knowledge'}
              aria-label={t.skills.core || 'Pharmaceutical Knowledge'}
              className={`flex items-center justify-center gap-2 px-3 sm:px-3.5 lg:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                activeTab === 'core'
                  ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/30 ring-1 ring-purple-400/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Award className="w-4 h-4 text-purple-300 shrink-0" />
              <span className="hidden lg:inline">{t.skills.core || 'Pharmaceutical Knowledge'}</span>
            </button>

            <button
              onClick={() => handleTabClick('soft')}
              type="button"
              title={t.skills.soft || 'Professional Strengths'}
              aria-label={t.skills.soft || 'Professional Strengths'}
              className={`flex items-center justify-center gap-2 px-3 sm:px-3.5 lg:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                activeTab === 'soft'
                  ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/30 ring-1 ring-purple-400/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Users className="w-4 h-4 text-indigo-300 shrink-0" />
              <span className="hidden lg:inline">{t.skills.soft || 'Professional Strengths'}</span>
            </button>

            <button
              onClick={() => handleTabClick('computer')}
              type="button"
              title={t.skills.computer || 'Tools & Research Support'}
              aria-label={t.skills.computer || 'Tools & Research Support'}
              className={`flex items-center justify-center gap-2 px-3 sm:px-3.5 lg:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                activeTab === 'computer'
                  ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/30 ring-1 ring-purple-400/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Cpu className="w-4 h-4 text-pink-300 shrink-0" />
              <span className="hidden lg:inline">{t.skills.computer || 'Tools & Research Support'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {activeTab === 'core' &&
              data.coreCompetencies.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.3) }}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                    selectedSkill === skill
                      ? 'bg-slate-900 border-purple-400 shadow-xl shadow-purple-500/20 lavender-glow scale-[1.02]'
                      : 'bg-slate-900/60 border-purple-500/20 hover:border-purple-400/50 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="flex items-center gap-3 text-left min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-300 group-hover:scale-110 transition-transform shrink-0">
                      <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
                      {skill}
                    </span>
                  </div>
                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-purple-400 opacity-80 shrink-0" />
                </motion.div>
              ))}

            {activeTab === 'soft' &&
              data.softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.3) }}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                    selectedSkill === skill
                      ? 'bg-slate-900 border-indigo-400 shadow-xl shadow-indigo-500/20 lavender-glow scale-[1.02]'
                      : 'bg-slate-900/60 border-purple-500/20 hover:border-indigo-400/50 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="flex items-center gap-3 text-left min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 group-hover:scale-110 transition-transform shrink-0">
                      <Users className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
                      {skill}
                    </span>
                  </div>
                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-indigo-400 opacity-80 shrink-0" />
                </motion.div>
              ))}

            {activeTab === 'computer' &&
              data.computerLiteracy.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.3) }}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                    selectedSkill === skill
                      ? 'bg-slate-900 border-pink-400 shadow-xl shadow-pink-500/20 lavender-glow scale-[1.02]'
                      : 'bg-slate-900/60 border-purple-500/20 hover:border-pink-400/50 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="flex items-center gap-3 text-left min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-pink-500/15 border border-pink-400/30 text-pink-300 group-hover:scale-110 transition-transform shrink-0">
                      <Cpu className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
                      {skill}
                    </span>
                  </div>
                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-pink-400 opacity-80 shrink-0" />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
