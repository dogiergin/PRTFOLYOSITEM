import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { getSection } = useLanguage();
  const projectsData = getSection('projects');

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">{projectsData.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.list.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
