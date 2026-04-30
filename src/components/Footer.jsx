import React from 'react';
import { FiGithub, FiLinkedin} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-zinc-800/50 relative z-10 bg-zinc-950/50 backdrop-blur-md">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} {t('footer', 'copyright')}
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/dogiergin" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <FiGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/dogukanergin" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <FiLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
