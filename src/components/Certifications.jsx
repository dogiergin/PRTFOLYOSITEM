import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-700/50 text-zinc-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group"
      aria-label="Next"
    >
      <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-700/50 text-zinc-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group"
      aria-label="Previous"
    >
      <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
    </button>
  );
};

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
          arrows: false,
        }
      }
    ]
  };

  return (
    <section id="certifications" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
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

        <div className="cert-slider-container">
          <Slider {...settings}>
            {certificatesData.map((cert, index) => (
              <div key={index} className="px-2 py-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => handleCertClick(cert)}
                  className="glass-panel p-4 cursor-pointer hover:bg-zinc-900/60 transition-all group hover:shadow-lg hover:shadow-indigo-500/10 h-full"
                >
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-zinc-800/50 border border-zinc-700/30 mb-3 flex items-center justify-center">
                    {cert.image && (
                      <img 
                        src={cert.image}
                        alt={getTitle(cert)}
                        width={400}
                        height={300}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Image size={14} className="text-indigo-400 flex-shrink-0" />
                    <p className="text-sm font-medium text-zinc-300 group-hover:text-indigo-300 transition-colors line-clamp-1">
                      {getTitle(cert)}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
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
