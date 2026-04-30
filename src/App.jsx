import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import Loader from './components/Loader';
import { LanguageProvider } from './context/LanguageContext';

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
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
