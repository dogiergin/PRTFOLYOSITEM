import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Server, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, getSection } = useLanguage();
  const aboutData = getSection('about');

  const icons = [
    <Code className="text-indigo-400" size={24} />,
    <Brain className="text-purple-400" size={24} />,
    <Server className="text-pink-400" size={24} />
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">{aboutData.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-zinc-400 text-lg leading-relaxed space-y-6">
              <p>{aboutData.description1}</p>
              <p>{aboutData.description2}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                <Award className="text-indigo-400" /> {aboutData.experienceTitle}
              </h3>
              <div className="space-y-6 border-l border-zinc-800 ml-3 pl-6">
                {aboutData.experience.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-zinc-950"></div>
                    <h4 className="text-lg font-bold text-zinc-200">{exp.role}</h4>
                    <div className="text-sm text-zinc-500 mb-2">{exp.company} | {exp.period}</div>
                    <p className="text-zinc-400 text-sm">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <h3 className="text-2xl font-bold text-zinc-100 mb-2">{aboutData.coreSkillsTitle}</h3>
            {aboutData.skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-panel p-6 flex gap-4 hover:bg-zinc-900/60 transition-colors"
              >
                <div className="flex-shrink-0 p-3 bg-zinc-800/50 rounded-xl h-fit">
                  {icons[index % icons.length]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">{skill.title}</h3>
                  <p className="text-zinc-400 text-sm">{skill.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="mt-6 glass-panel p-6 border-indigo-500/20">
               <h3 className="text-xl font-semibold text-zinc-100 mb-4">{aboutData.educationTitle}</h3>
               {aboutData.education.map((edu, i) => (
                 <div key={i}>
                   <h4 className="text-lg font-medium text-indigo-300">{edu.degree}</h4>
                   <p className="text-zinc-400">{edu.school}</p>
                   <p className="text-zinc-500">GPA: {edu.gpa}</p>
                   <span className="text-sm text-zinc-500">{edu.year}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
