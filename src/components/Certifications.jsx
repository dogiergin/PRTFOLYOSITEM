import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const certificatesData = [
  {
    image: '/certificates/FordOtosan_Basari_Sertifikasi_Emre_Doğukan_ERGİN.jpg',
    titleEn: 'Ford Otosan Career & Development Week',
    titleTr: 'Ford Otosan Kariyer ve Gelişim Haftası'
  },
  {
    image: '/certificates/inovasyon ile kendini keşfet.jpeg',
    titleEn: 'TalenTree - Innovation & Self Discovery',
    titleTr: 'TalenTree - İnovasyon ile Kendini Keşfet'
  },
  {
    image: '/certificates/python-basics.jpg',
    titleEn: 'HackerRank - Python (Basic)',
    titleTr: 'HackerRank - Python (Temel)'
  },
  {
    image: '/certificates/Borusan  Teknoloji.jpg',
    titleEn: 'Borusan Technology School',
    titleTr: 'Borusan Teknoloji Okulu'
  },
  {
    image: '/certificates/Clean Code 101 Eğitimi.jpg',
    titleEn: 'Clean Code 101 Training',
    titleTr: 'Clean Code 101 Eğitimi'
  },
  {
    image: '/certificates/Digital  talent summit.jpg',
    titleEn: 'Digital Talent Summit',
    titleTr: 'Digital Talent Summit'
  },
  {
    image: '/certificates/SQL\'in temelleri.jpg',
    titleEn: 'SQL Fundamentals Training',
    titleTr: 'SQL\'in Temelleri Eğitimi'
  },
  {
    image: '/certificates/gelişim planlama ve takip.jpg',
    titleEn: 'Development Planning & Tracking',
    titleTr: 'Gelişim Planlama ve Takip'
  },
  {
    image: '/certificates/iş Bankası  pro school  It class.jpg',
    titleEn: 'Türkiye İŞ Bankası Pro School IT Class',
    titleTr: 'Türkiye İş Bankası Pro School IT Sınıfı'
  },
  {
    image: '/certificates/Veri bilimi ve yapay zeka .jpg',
    titleEn: 'Data Science & AI Fundamentals',
    titleTr: 'Veri Bilimi ve Yapay Zeka Temelleri'
  },
  {
    image: '/certificates/yapay zekaya ilk adım.jpg',
    titleEn: 'First Step to AI',
    titleTr: 'Yapay Zekaya İlk Adım'
  },
  {
    image: '/certificates/Makine öğrenmesi  uygulamaları ile veriden  değer yaratma  eğitimi.jpg',
    titleEn: 'Machine Learning - Creating Value from Data',
    titleTr: 'Makine Öğrenmesi Uygulamaları ile Veriden Değer Yaratma Eğitimi'
  },
];



const Certifications = () => {
  const { getSection, language } = useLanguage();
  const certData = getSection('certifications');
  const [selectedCert, setSelectedCert] = useState(null);

  const getTitle = (cert) => language === 'tr' ? cert.titleTr : cert.titleEn;

  const handleCertClick = (cert) => {
    if (cert.image) {
      setSelectedCert(cert);
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">{certData.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => handleCertClick(cert)}
              className="glass-panel p-4 cursor-pointer hover:bg-zinc-900/60 transition-all group hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-zinc-800/50 border border-zinc-700/30 mb-3 flex items-center justify-center">
                {cert.image && (
                  <img 
                    src={cert.image} 
                    alt={getTitle(cert)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="flex items-center gap-2">
                <Image size={14} className="text-indigo-400 flex-shrink-0" />
                <p className="text-sm font-medium text-zinc-300 group-hover:text-indigo-300 transition-colors truncate">
                  {getTitle(cert)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for images */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-2 z-10 shadow-lg"
              >
                <X size={20} />
              </button>
              <img 
                src={selectedCert.image} 
                alt={getTitle(selectedCert)}
                className="w-full rounded-xl shadow-2xl"
              />
              <p className="text-center text-zinc-200 font-medium mt-4 text-lg">
                {getTitle(selectedCert)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
