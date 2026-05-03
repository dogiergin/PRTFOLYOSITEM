import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      certifications: 'Certificates',
      contact: 'Contact',
      hireMe: 'Hire Me'
    },
    hero: {
      badge: 'Computer Engineer',
      greeting: "Hi, I'm Emre Dogukan",
      name: "ERGIN",
      description: "Innovative Computer Engineer with expertise in software development and systems administration. Skilled in designing and implementing cutting-edge solutions for diverse industries.",
      viewProjects: "View Projects",
      downloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      description1: "As a Computer Engineer, I have a strong foundation in both software development and data-driven systems. My academic background at Karadeniz Technical University provided me with deep knowledge of algorithms, system architecture, and problem-solving techniques.",
      description2: "From building machine learning models for predictive maintenance to developing full-stack web applications, I enjoy tackling complex technical challenges. I am constantly expanding my skill set, which includes certifications in Python Data & AI Bootcamps and Java Backend Development.",
      experienceTitle: "Experience",
      coreSkillsTitle: "Core Skills",
      educationTitle: "Education",
      skills: [
        {
          title: "Software Development",
          description: "Proficient in Java, C/C++, Python, PHP, and OOP. Experienced in system architecture and troubleshooting."
        },
        {
          title: "Machine Learning & AI",
          description: "Developing predictive models and image recognition tasks. Experienced with data analysis and statistical methods."
        },
        {
          title: "Backend & Data",
          description: "Building backend systems with Java and Redis. Experienced in SQL for data extraction and manipulation."
        }
      ],
      experience: [
        {
          role: "Software Developer",
          company: "Yaltes Elektronik Ve Bilgi Sistemleri Ticaret A.Ş",
          period: "Jul 2024 - Aug 2024",
          desc: "•	Developed a high-concurrency user registration system using Java and Redis on Linux, handling 1,000 concurrent requests and reducing average response time by 30% through optimized thread pooling and in-memory caching."
        },
        {
          role: "Data Analyst",
          company: "Türkiye Sigorta",
          period: "Aug 2022 - Sep 2022",
          desc: "•	Contributed to a machine learning recommendation engine that processed 50,000 customer transactions, increasing cross-sell conversion rates by 20% and improving targeted campaign ROI through predictive customer-product mapping."
        },
        {
          role: "Machine Learning Engineer",
          company: "Bizim Hesap Bilgi Sistemleri A.Ş",
          period: "Jun 2021 - Jul 2021",
          desc: "•	Optimized convolutional neural network architectures for image recognition, improving model accuracy by 15% while reducing inference latency by 25% through hyperparameter tuning, data augmentation, and layer optimization."
        }
      ],
      education: [
        {
          degree: "Bachelor Degree in Computer Engineering",
          school: "Karadeniz Technical University, Turkey",
          year: "2018 - 2025",
          gpa: "3.0/4.0"
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      code: "Code",
      list: [
        {
          title: "Note Share Platform",
          description: "Developed a website where students and teachers can upload and share class-related notes. Architected the database and backend logic alongside the frontend UI.",
          tags: ['PHP', 'SQL', 'HTML', 'CSS']
        },
        {
          title: "Autonomous UAV (Teknofest 2020)",
          description: "Participated in the Teknofest Autonomous Unmanned Aerial Vehicle competition. Implemented Object Detection and Image Processing algorithms for autonomous flight targeting.",
          tags: ['Python', 'Machine Learning', 'OpenCV']
        },
        {
          title: "ML Product Recommender",
          description: "Built software utilizing machine learning algorithms to analyze purchasing relationships and recommend relevant products to users.",
          tags: ['Python', 'Data Analysis', 'Algorithms']
        },
        {
          title: "Redis Registration System",
          description: "An OOP-based user registration program using Java threads and Redis caching on Linux environments to track admin actions.",
          tags: ['Java', 'Redis', 'OOP', 'Linux']
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      description: "I'm open for new opportunities in software engineering, machine learning, and systems administration. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Maltepe, İstanbul / Turkey",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formNamePlaceholder: "John Doe",
      formEmailPlaceholder: "john@example.com",
      formMessagePlaceholder: "Your message...",
      sendMessage: "Send Message"
    },
    certifications: {
      title: "Certifications & Courses",
      placeholder: "Certificate images will be added soon.",
      list: [
        "First Step to AI",
        "Digital Talent Summit",
        "Data Visualization with Python (Global AI Hub)",
        "Türkiye İŞ Bankası Pro School IT Class",
        "Borusan Technology School",
        "Teknofest Participation Certificate",
        "Python Data AI Bootcamp",
        "Java Bootcamp - Backend Development with Java"
      ]
    },
    footer: {
      copyright: "Emre Dogukan ERGIN. All rights reserved."
    }
  },
  tr: {
    navbar: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      certifications: 'Sertifikalar',
      contact: 'İletişim',
      hireMe: 'Bana Ulaşın'
    },
    hero: {
      badge: 'Bilgisayar Mühendisi',
      greeting: "Merhaba, Ben Emre Doğukan",
      name: "ERGİN",
      description: "Yazılım geliştirme ve sistem yönetimi konusunda uzman, yenilikçi bir Bilgisayar Mühendisiyim. Çeşitli endüstriler için son teknoloji çözümler tasarlama ve uygulama konusunda yetenekliyim.",
      viewProjects: "Projeleri Gör",
      downloadCV: "CV İndir"
    },
    about: {
      title: "Hakkımda",
      description1: "Bir Bilgisayar Mühendisi olarak hem yazılım geliştirme hem de veri odaklı sistemler konusunda güçlü bir temele sahibim. Karadeniz Teknik Üniversitesi'ndeki akademik geçmişim bana algoritmalar, sistem mimarisi ve problem çözme teknikleri konularında derin bilgiler kazandırdı.",
      description2: "Kestirimci bakım için makine öğrenimi modelleri oluşturmaktan full-stack web uygulamaları geliştirmeye kadar karmaşık teknik zorlukların üstesinden gelmeyi seviyorum. Python Veri & Yapay Zeka Bootcamp'leri ve Java Backend Geliştirme gibi sertifikalarla beceri setimi sürekli olarak genişletiyorum.",
      experienceTitle: "Deneyim",
      coreSkillsTitle: "Temel Yetenekler",
      educationTitle: "Eğitim",
      skills: [
        {
          title: "Yazılım Geliştirme",
          description: "Java, C/C++, Python, PHP ve OOP'de yetkin. Sistem mimarisi ve sorun giderme konularında deneyimli."
        },
        {
          title: "Makine Öğrenimi & Yapay Zeka",
          description: "Tahmine dayalı modeller ve görüntü tanıma görevleri geliştirme. Veri analizi ve istatistiksel yöntemlerde deneyimli."
        },
        {
          title: "Backend & Veri",
          description: "Java ve Redis ile arka uç sistemleri oluşturma. Veri çıkarımı ve manipülasyonu için SQL deneyimi."
        }
      ],
      experience: [
        {
          role: "Yazılım Geliştiricisi",
          company: "Yaltes Elektronik Ve Bilgi Sistemleri Ticaret A.Ş",
          period: "Tem 2024 - Ağu 2024",
          desc: "• Java ve Redis kullanarak Linux ortamında yüksek eşzamanlılıkta kullanıcı kayıt sistemi geliştirdim; optimize edilmiş thread havuzu ve önbellekleme ile 1.000+ eşzamanlı isteği yöneterek ortalama yanıt süresini %30 azalttım."
        },
        {
          role: "Veri Analisti",
          company: "Türkiye Sigorta",
          period: "Ağu 2022 - Eyl 2022",
          desc: "50.000+ müşteri işlemi işleyen makine öğrenimi tabanlı öneri motoruna katkı sağladım; tahmine dayalı müşteri-ürün eşleştirmesi ile çapraz satış dönüşüm oranlarını %20 artırarak hedefli kampanya ROI'sini iyileştirdim."
        },
        {
          role: "Makine Öğrenimi Mühendisi",
          company: "Bizim Hesap Bilgi Sistemleri A.Ş",
          period: "Haz 2021 - Tem 2021",
          desc: "Görüntü tanıma için evrişimli sinir ağı mimarilerini optimize ettim; hiperparametre ayarı, veri artırma ve katman optimizasyonu ile model doğruluğunu %15 artırırken çıkarım gecikmesini %25 azalttım."
        }
      ],
      education: [
        {
          degree: "Bilgisayar Mühendisliği Lisans Derecesesi",
          school: "Karadeniz Teknik Üniversitesi, Türkiye",
          year: "2018 - 2025",
          gpa: "3.0/4.0"
        }
      ]
    },
    projects: {
      title: "Öne Çıkan Projeler",
      code: "Kod",
      demo: "Canlı Demo",
      list: [
        {
          title: "Not Paylaşım Platformu",
          description: "Öğrencilerin ve öğretmenlerin dersle ilgili notları yükleyip paylaşabileceği bir web sitesi geliştirdim. Ön yüz UI tasarımı ile birlikte veritabanı ve arka uç mantığını mimarilendirdim.",
          tags: ['PHP', 'SQL', 'HTML', 'CSS']
        },
        {
          title: "Otonom İHA (Teknofest 2020)",
          description: "Teknofest Otonom İnsansız Hava Aracı yarışmasına katıldım. Otonom uçuş hedeflemesi için Nesne Tespiti ve Görüntü İşleme algoritmaları uyguladım.",
          tags: ['Python', 'Makine Öğrenimi', 'OpenCV']
        },
        {
          title: "ML Ürün Önerici",
          description: "Satın alma ilişkilerini analiz etmek ve kullanıcılara ilgili ürünleri önermek için makine öğrenimi algoritmalarını kullanan bir yazılım geliştirdim.",
          tags: ['Python', 'Veri Analizi', 'Algoritmalar']
        },
        {
          title: "Redis Kayıt Sistemi",
          description: "Yönetici eylemlerini izlemek için Linux ortamlarında Java iş parçacıkları ve Redis önbelleğe alma kullanan OOP tabanlı bir kullanıcı kayıt programı.",
          tags: ['Java', 'Redis', 'OOP', 'Linux']
        }
      ]
    },
    contact: {
      title: "İletişime Geçin",
      description: "Yazılım mühendisliği, makine öğrenimi ve sistem yönetimi alanlarında yeni fırsatlara açığım. İster bir sorunuz olsun ister sadece merhaba demek isteyin, size geri dönmek için elimden geleni yapacağım!",
      emailLabel: "E-posta",
      phoneLabel: "Telefon",
      locationLabel: "Konum",
      location: "Maltepe, İstanbul / Türkiye",
      formName: "İsim",
      formEmail: "E-posta",
      formMessage: "Mesaj",
      formNamePlaceholder: "Ahmet Yılmaz",
      formEmailPlaceholder: "ahmet@ornek.com",
      formMessagePlaceholder: "Mesajınız...",
      sendMessage: "Mesaj Gönder"
    },
    certifications: {
      title: "Sertifikalar & Kurslar",
      placeholder: "Sertifika görselleri yakında eklenecektir.",
      list: [
        "Yapay Zekaya İlk Adım",
        "Digital Talent Summit",
        "Python ile Veri Görselleştirme (Global AI Hub)",
        "Türkiye İŞ Bankası Pro School BT Sınıfı",
        "Borusan Teknoloji Okulu",
        "Teknofest Katılım Belgesi",
        "Python Veri Yapay Zeka Bootcamp",
        "Java Bootcamp - Java ile Backend Geliştirme"
      ]
    },
    footer: {
      copyright: "Emre Doğukan ERGİN. Tüm hakları saklıdır."
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');

  // A basic translation function
  const t = (section, key) => {
    return translations[language][section][key];
  };

  // For arrays/objects
  const getSection = (section) => {
    return translations[language][section];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getSection }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
