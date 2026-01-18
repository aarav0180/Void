import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NoiseMarquee from './components/NoiseMarquee';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import Manifesto from './components/Manifesto';
import SuccessGateway from './components/SuccessGateway';
import PrivacyManifesto from './components/PrivacyManifesto';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'success' | 'privacy'>('home');

  const handlePrivacyClick = () => {
    setView('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-void-bg font-poppins text-void-text selection:bg-void-purple selection:text-white overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        
        {view === 'success' && (
          <motion.div 
            key="success-gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SuccessGateway onBack={() => setView('home')} />
          </motion.div>
        )}

        {view === 'privacy' && (
          <motion.div
             key="privacy-manifesto"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
          >
             <PrivacyManifesto onBack={() => setView('home')} />
          </motion.div>
        )}

        {view === 'home' && (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="flex flex-col items-center w-full"
          >
            <Header />
            <main className="flex flex-col items-center w-full">
              <Hero onSuccess={() => setView('success')} />
              <Manifesto />
              <NoiseMarquee />
              <BentoGrid />
              <Footer onPrivacyClick={handlePrivacyClick} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;