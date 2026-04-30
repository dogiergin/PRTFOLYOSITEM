import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('navbar', 'home'), href: '#home' },
    { name: t('navbar', 'about'), href: '#about' },
    { name: t('navbar', 'projects'), href: '#projects' },
    { name: t('navbar', 'certifications'), href: '#certifications' },
    { name: t('navbar', 'contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-zinc-100 tracking-tighter">
          Emre<span className="text-indigo-400">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-white bg-indigo-600/80 hover:bg-indigo-500 rounded-full transition-colors border border-indigo-500/30"
          >
            {t('navbar', 'hireMe')}
          </a>

          {/* Language Toggle Slider */}
          <div 
            onClick={toggleLanguage}
            className="relative flex items-center w-14 h-7 bg-zinc-800 rounded-full p-1 cursor-pointer select-none border border-zinc-700 shadow-inner"
          >
            <div className="absolute left-1.5 text-[10px] z-10 flex items-center justify-center pointer-events-none">🇹🇷</div>
            <div className="absolute right-1.5 text-[10px] z-10 flex items-center justify-center pointer-events-none">🇺🇸</div>
            <motion.div 
              layout
              className="w-5 h-5 bg-zinc-200 rounded-full shadow-sm z-20 flex items-center justify-center"
              animate={{
                x: language === 'tr' ? 0 : 28
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <div 
            onClick={toggleLanguage}
            className="relative flex items-center w-14 h-7 bg-zinc-800 rounded-full p-1 cursor-pointer select-none border border-zinc-700 shadow-inner"
          >
            <div className="absolute left-1.5 text-[10px] z-10 pointer-events-none">🇹🇷</div>
            <div className="absolute right-1.5 text-[10px] z-10 pointer-events-none">🇺🇸</div>
            <motion.div 
              layout
              className="w-5 h-5 bg-zinc-200 rounded-full shadow-sm z-20"
              animate={{
                x: language === 'tr' ? 0 : 28
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
          <button
            className="text-zinc-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t-0 rounded-t-none border-x-0 py-4 flex flex-col items-center gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
