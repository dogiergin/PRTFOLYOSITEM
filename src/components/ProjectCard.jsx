import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, index }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel group relative overflow-hidden flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-6 flex-grow flex flex-col relative z-10">
        <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-full border border-zinc-700/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <FiGithub size={18} /> {t('projects', 'code')}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
