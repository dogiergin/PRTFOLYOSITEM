import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 rounded-full glass-panel border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8"
        >
          {t('hero', 'badge')}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight mb-6"
        >
          {t('hero', 'greeting')} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            {t('hero', 'name')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
        >
          {t('hero', 'description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
          >
            {t('hero', 'viewProjects')} <ArrowRight size={18} />
          </a>
          <a
            href="CV (1).pdf"
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 glass-panel hover:bg-white/5 text-zinc-100 rounded-full font-semibold transition-colors"
          >
            {t('hero', 'downloadCV')} <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
