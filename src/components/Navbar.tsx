import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  Atom,
  FlaskConical,
  Cpu,
  Briefcase,
  GraduationCap,
  Globe,
  Compass,
  Users,
  Send,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarProps {
  onOpenContact?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { isClinical } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    {
      href: '#research',
      label: t.nav.research,
      subtitle: 'Scientific Papers',
      icon: FlaskConical,
      darkGradient: 'from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30',
      lightGradient: 'from-purple-100 to-indigo-100 text-purple-700 border-purple-200',
    },
    {
      href: '#competencies',
      label: t.nav.skills,
      subtitle: 'Core Acumen',
      icon: Cpu,
      darkGradient: 'from-fuchsia-500/20 to-pink-500/20 text-fuchsia-300 border-fuchsia-500/30',
      lightGradient: 'from-fuchsia-100 to-pink-100 text-fuchsia-700 border-fuchsia-200',
    },
    {
      href: '#experience',
      label: t.nav.timeline,
      subtitle: 'Career History',
      icon: Briefcase,
      darkGradient: 'from-sky-500/20 to-indigo-500/20 text-sky-300 border-sky-500/30',
      lightGradient: 'from-sky-100 to-indigo-100 text-sky-700 border-sky-200',
    },
    {
      href: '#education',
      label: t.nav.education,
      subtitle: 'Degrees & Certs',
      icon: GraduationCap,
      darkGradient: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
      lightGradient: 'from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200',
    },
    {
      href: '#languages',
      label: 'Language',
      subtitle: 'English & Bengali',
      icon: Globe,
      darkGradient: 'from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30',
      lightGradient: 'from-violet-100 to-purple-100 text-violet-700 border-violet-200',
    },
    {
      href: '#interests',
      label: 'Interests',
      subtitle: 'Beyond the Lab',
      icon: Compass,
      darkGradient: 'from-amber-500/20 to-rose-500/20 text-amber-300 border-amber-500/30',
      lightGradient: 'from-amber-100 to-rose-100 text-amber-700 border-amber-200',
    },
    {
      href: '#references',
      label: 'References',
      subtitle: 'Academic Mentors',
      icon: Users,
      darkGradient: 'from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30',
      lightGradient: 'from-blue-100 to-cyan-100 text-blue-700 border-blue-200',
    },
    {
      href: '#contact',
      label: t.nav.contact,
      subtitle: 'Get In Touch',
      icon: Send,
      darkGradient: 'from-purple-600/30 to-pink-600/30 text-purple-300 border-purple-400/40',
      lightGradient: 'from-purple-200 to-pink-200 text-purple-800 border-purple-300',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isClinical
          ? isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-purple-200/80 shadow-md shadow-slate-200/40'
            : 'bg-transparent border-b border-transparent'
          : isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-purple-500/25 shadow-xl shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Thin, animated scroll progress bar at the top of the viewport */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-300 origin-left z-50 shadow-sm shadow-purple-500/50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Distinctive Portfolio Logo (No text 'lubna akter') */}
          <a
            href="#"
            aria-label="Portfolio Home"
            title="Portfolio Home"
            className="group flex items-center gap-3 shrink-0 py-1 transition-all"
          >
            {/* Visually Attractive Glowing Modern Emblem */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 shadow-lg shadow-purple-500/40 group-hover:scale-105 transition-all">
              <Atom className="w-5 h-5 text-white animate-spin-slow" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-purple-300 border-2 border-slate-950 animate-ping" />
            </div>

            {/* Logo Badge Label */}
            <div className="flex items-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-purple-300 group-hover:text-purple-200 transition-colors flex items-center gap-1.5">
                <span>PORTFOLIO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a
              href="#research"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              {t.nav.research}
            </a>
            <a
              href="#competencies"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              {t.nav.skills}
            </a>
            <a
              href="#experience"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              {t.nav.timeline}
            </a>
            <a
              href="#education"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              {t.nav.education}
            </a>
            <a
              href="#languages"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              Language
            </a>
            <a
              href="#interests"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              Interests
            </a>
            <a
              href="#references"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              References
            </a>
            <a
              href="#contact"
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-purple-400"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: Desktop Actions (Theme Switcher) */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeSwitcher />
          </div>

          {/* Mobile Right Controls: Theme + Animated Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeSwitcher />

            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-2 rounded-xl border transition-all duration-200 focus:outline-none cursor-pointer ${
                isClinical
                  ? mobileMenuOpen
                    ? 'bg-purple-100 border-purple-300 text-purple-800 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300 hover:text-purple-700'
                  : mobileMenuOpen
                  ? 'bg-purple-600/25 border-purple-400 text-purple-200 shadow-lg shadow-purple-600/30'
                  : 'bg-slate-900 border-purple-500/30 text-slate-200 hover:text-white hover:border-purple-400/60'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-5 h-5 text-purple-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Modern, Visually Striking Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden overflow-hidden border-b backdrop-blur-2xl transition-colors relative ${
              isClinical
                ? 'bg-white/98 border-purple-200/90 shadow-2xl shadow-purple-950/10'
                : 'bg-slate-950/98 border-purple-500/30 shadow-2xl shadow-black/80'
            }`}
          >
            {/* Luminous Ambient Background Glow */}
            <div
              className={`absolute inset-0 pointer-events-none ${
                isClinical
                  ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent'
                  : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent'
              }`}
            />

            {/* Top Micro-Bar: Portfolio Role & Menu Title */}
            <div
              className={`relative z-10 flex items-center justify-between px-5 pt-3.5 pb-2 text-[11px] font-mono tracking-wider uppercase border-b ${
                isClinical ? 'border-purple-100 text-slate-500' : 'border-purple-500/15 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-1.5 font-semibold text-purple-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Pharmacy Scholar</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] opacity-75">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>Navigation</span>
              </div>
            </div>

            {/* 2-Column Responsive Card Grid */}
            <div className="relative z-10 p-3.5 sm:p-4 grid grid-cols-2 gap-2 sm:gap-2.5 max-h-[calc(100vh-10rem)] overflow-y-auto">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: idx * 0.03,
                      duration: 0.22,
                      ease: 'easeOut',
                    }}
                    whileTap={{ scale: 0.96 }}
                    className={`group relative flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-200 overflow-hidden cursor-pointer ${
                      isClinical
                        ? 'bg-purple-50/40 hover:bg-purple-50 active:bg-purple-100/80 border-purple-100 hover:border-purple-300 shadow-sm'
                        : 'bg-slate-900/80 hover:bg-slate-800/95 active:bg-purple-950/50 border-purple-500/20 hover:border-purple-400/50 shadow-sm shadow-black/30'
                    }`}
                  >
                    {/* Micro-Gradient Icon Container */}
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border bg-gradient-to-br transition-all duration-200 group-hover:scale-108 group-hover:shadow-md ${
                        isClinical ? item.lightGradient : item.darkGradient
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Nav Title & Descriptive Subtitle */}
                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-xs font-bold truncate transition-colors leading-tight ${
                          isClinical
                            ? 'text-slate-900 group-hover:text-purple-700'
                            : 'text-slate-100 group-hover:text-purple-200'
                        }`}
                      >
                        {item.label}
                      </div>
                      <div
                        className={`text-[10px] font-medium truncate transition-colors leading-tight mt-0.5 ${
                          isClinical
                            ? 'text-purple-700/75 group-hover:text-purple-900'
                            : 'text-purple-300/75 group-hover:text-purple-200'
                        }`}
                      >
                        {item.subtitle}
                      </div>
                    </div>

                    {/* Interactive Arrow Indicator */}
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 ${
                        isClinical ? 'text-purple-700' : 'text-purple-300'
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Quick-Action Panel */}
            <div
              className={`relative z-10 px-4 pt-1 pb-4 flex items-center gap-2 border-t ${
                isClinical ? 'border-purple-100 bg-purple-50/20' : 'border-purple-500/15 bg-slate-950/60'
              }`}
            >
              {onOpenResume && (
                <motion.button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isClinical
                      ? 'bg-purple-600 hover:bg-purple-700 text-white border-purple-500 shadow-sm shadow-purple-600/30'
                      : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white border-purple-400/40 shadow-md shadow-purple-600/40 hover:shadow-purple-500/60'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.nav.viewCv || 'View Full CV'}</span>
                </motion.button>
              )}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isClinical
                    ? 'bg-white hover:bg-purple-50 text-purple-700 border-purple-200'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-purple-300 border-purple-500/30 hover:border-purple-400'
                }`}
              >
                <Send className="w-3.5 h-3.5 text-purple-400" />
                <span>{t.nav.contact}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
