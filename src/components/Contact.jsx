import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { getSection } = useLanguage();
  const c = getSection('contact');

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">{c.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">{c.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-full text-indigo-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{c.emailLabel}</h4>
                <a href="mailto:edogukanergin@gmail.com" className="text-lg font-medium text-zinc-200 hover:text-indigo-400 transition-colors">
                  edogukanergin@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-full text-purple-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{c.phoneLabel}</h4>
                <a href="tel:+905346670965" className="text-lg font-medium text-zinc-200 hover:text-purple-400 transition-colors">
                  +90 534 667 09 65
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-zinc-900 rounded-full text-pink-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{c.locationLabel}</h4>
                <p className="text-lg font-medium text-zinc-200">{c.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-8 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">{c.formName}</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder={c.formNamePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">{c.formEmail}</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder={c.formEmailPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">{c.formMessage}</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder={c.formMessagePlaceholder}
              ></textarea>
            </div>
            <button 
              type="button"
              className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-lg font-bold hover:bg-zinc-200 transition-colors mt-2"
            >
              {c.sendMessage}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
