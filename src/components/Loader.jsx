import React, { useState, useEffect } from 'react';

const AiLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950">
     
      <div className="flex flex-col items-center gap-8">
        <div className="flex">
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">G</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">e</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">n</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">e</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">r</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">a</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">t</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">i</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">n</span>
          <span className="loader-letter text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">g</span>
        </div>

        <div className="loader w-50 h-50 rounded-full"></div>
        
        <p className="text-zinc-500 text-sm">{Math.min(Math.round(progress), 100)}%</p>
      </div>

    </div>
  );
};

export default AiLoader;