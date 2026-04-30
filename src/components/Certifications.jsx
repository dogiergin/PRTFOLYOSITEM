import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Image } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import * as pdfjsLib from 'pdfjs-dist';

// PDF.js worker setup
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).toString();

const certificatesData = [
  {
    image: '/certificates/FordOtosan_Basari_Sertifikasi_Emre_Doğukan_ERGİN.png',
    pdf: null,
    titleEn: 'Ford Otosan Career & Development Week',
    titleTr: 'Ford Otosan Kariyer ve Gelişim Haftası'
  },
  {
    image: '/certificates/inovasyon ile kendini keşfet.jpeg',
    pdf: null,
    titleEn: 'TalenTree - Innovation & Self Discovery',
    titleTr: 'TalenTree - İnovasyon ile Kendini Keşfet'
  },
  {
    image: '/certificates/python-basics.png',
    pdf: null,
    titleEn: 'HackerRank - Python (Basic)',
    titleTr: 'HackerRank - Python (Temel)'
  },
  {
    image: null,
    pdf: '/certificates/Borusan  Teknoloji.pdf',
    titleEn: 'Borusan Technology School',
    titleTr: 'Borusan Teknoloji Okulu'
  },
  {
    image: null,
    pdf: '/certificates/Clean Code 101 Eğitimi.pdf',
    titleEn: 'Clean Code 101 Training',
    titleTr: 'Clean Code 101 Eğitimi'
  },
  {
    image: null,
    pdf: '/certificates/Digital  talent summit.pdf',
    titleEn: 'Digital Talent Summit',
    titleTr: 'Digital Talent Summit'
  },
  {
    image: null,
    pdf: '/certificates/Makine öğrenmesi  uygulamaları ile veriden  değer yaratma  eğitimi.pdf',
    titleEn: 'Creating Value from Data with ML Applications',
    titleTr: 'Makine Öğrenmesi Uygulamaları ile Veriden Değer Yaratma Eğitimi'
  },
  {
    image: null,
    pdf: '/certificates/SQL\'in Temelleri Eğitimi - Emre Doğukan Ergin.pdf',
    titleEn: 'SQL Fundamentals Training',
    titleTr: 'SQL\'in Temelleri Eğitimi'
  },
  {
    image: null,
    pdf: '/certificates/gelişim planlama ve takip.pdf',
    titleEn: 'Development Planning & Tracking',
    titleTr: 'Gelişim Planlama ve Takip'
  },
  {
    image: null,
    pdf: '/certificates/iş Bankası  pro school  It class.pdf',
    titleEn: 'Türkiye İŞ Bankası Pro School IT Class',
    titleTr: 'Türkiye İş Bankası Pro School IT Sınıfı'
  },
  {
    image: null,
    pdf: '/certificates/veri bilimi ve yapay zeka temelleri.pdf',
    titleEn: 'Data Science & AI Fundamentals',
    titleTr: 'Veri Bilimi ve Yapay Zeka Temelleri'
  },
  {
    image: null,
    pdf: '/certificates/yapay zekaya ilk adım.pdf',
    titleEn: 'First Step to AI',
    titleTr: 'Yapay Zekaya İlk Adım'
  },
];

// PDF thumbnail component - renders first page of PDF as canvas
const PdfThumbnail = ({ pdfUrl, alt }) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const renderPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1);
        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        const ctx = canvas.getContext('2d');
        // Render at a reasonable resolution for thumbnail
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(400 / viewport.width, 300 / viewport.height);
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
        if (!cancelled) setLoaded(true);
      } catch (err) {
        console.error('PDF render error:', err);
        if (!cancelled) setError(true);
      }
    };
    renderPdf();
    return () => { cancelled = true; };
  }, [pdfUrl]);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-3 text-zinc-500">
        <FileText size={48} className="text-indigo-400/50" />
        <span className="text-xs font-medium uppercase tracking-wider">PDF</span>
      </div>
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ display: loaded ? 'block' : 'none' }}
      />
      {!loaded && (
        <div className="flex flex-col items-center gap-3 text-zinc-500 animate-pulse">
          <FileText size={48} className="text-indigo-400/30" />
          <span className="text-xs font-medium">Yükleniyor...</span>
        </div>
      )}
    </>
  );
};

const Certifications = () => {
  const { getSection, language } = useLanguage();
  const certData = getSection('certifications');
  const [selectedCert, setSelectedCert] = useState(null);

  const getTitle = (cert) => language === 'tr' ? cert.titleTr : cert.titleEn;

  const handleCertClick = (cert) => {
    if (cert.pdf) {
      window.open(cert.pdf, '_blank');
    } else if (cert.image) {
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
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={getTitle(cert)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : cert.pdf ? (
                  <PdfThumbnail pdfUrl={cert.pdf} alt={getTitle(cert)} />
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                {cert.pdf ? (
                  <FileText size={14} className="text-indigo-400 flex-shrink-0" />
                ) : (
                  <Image size={14} className="text-indigo-400 flex-shrink-0" />
                )}
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
