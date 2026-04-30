import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import Loader from './components/Loader';
import { LanguageProvider } from './context/LanguageContext';

// Lazy load heavy components for better performance
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`relative min-h-screen text-zinc-50 font-sans selection:bg-indigo-500/30 ${loading ? 'hidden' : ''}`}>
        <BackgroundEffect />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<div className="py-24 text-center text-zinc-500">Yükleniyor...</div>}>
            <Projects />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
