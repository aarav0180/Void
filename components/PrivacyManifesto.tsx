import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Terminal, Shield } from 'lucide-react';

interface PrivacyManifestoProps {
  onBack: () => void;
}

const PrivacyManifesto: React.FC<PrivacyManifestoProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-void-bg text-void-text font-poppins selection:bg-void-purple selection:text-white pb-32"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 mix-blend-difference">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-poppins text-xs tracking-[0.2em] uppercase">Return to Void</span>
        </button>
      </nav>

      {/* Section 1: The Hero (The Statement) */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-playfair text-6xl md:text-8xl lg:text-9xl font-semibold text-white leading-[0.9] tracking-tight mb-8"
          >
            We know<br />nothing.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-playfair text-xl md:text-3xl text-void-muted italic"
          >
            And neither does anyone else.
          </motion.p>
        </div>

        {/* Visual Element: Data Graph */}
        <div className="w-full max-w-2xl mt-24 relative h-32 flex items-end">
           {/* Grid Lines */}
           <div className="absolute inset-0 border-b border-l border-white/10" />
           <div className="absolute bottom-1/2 w-full h-[1px] bg-white/5 border-dashed" />
           <div className="absolute bottom-full w-full h-[1px] bg-white/5 border-dashed" />
           
           {/* The Flat Line */}
           <div className="w-full h-[2px] bg-void-purple relative shadow-[0_0_20px_rgba(109,40,217,0.5)]">
              {/* Scanning Cursor */}
              <motion.div 
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-1 h-4 bg-white shadow-[0_0_10px_white]"
              >
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-void-panel border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-void-purple">
                    0 KB COLLECTED
                 </div>
              </motion.div>
           </div>
           
           {/* Axis Labels */}
           <div className="absolute -left-8 bottom-0 text-[10px] font-mono text-void-muted">0</div>
           <div className="absolute -left-8 top-0 text-[10px] font-mono text-void-muted">100</div>
        </div>
      </section>

      {/* Section 2: The 3 Axioms */}
      <section className="max-w-4xl mx-auto px-6 py-32 flex flex-col gap-32">
        <Axiom 
          number="I" 
          title="No Collection" 
          description="We do not have servers to store your data. We do not have a database to index your history. We do not have the keys to your profile."
        />
        <Axiom 
          number="II" 
          title="Local Sovereignty" 
          description="Your history, bookmarks, and preferences live on your device's physical silicon. If you delete the app, they cease to exist entirely."
        />
        <Axiom 
          number="III" 
          title="Zero Telemetry" 
          description="We stripped the 'phone home' code from the engine. Crash reports are opt-in. Usage stats are non-existent. We fly blind, on purpose."
        />
      </section>

      {/* Section 3: The Search Interactive Demo */}
      <section className="w-full bg-void-panel py-32 border-y border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-12">Verify The Void</h2>
          
          <SearchDemo />
          
          <p className="mt-12 font-poppins text-xs text-void-muted uppercase tracking-widest">
            Live connection to Void User Database
          </p>
        </div>
      </section>

      {/* Section 4: Legal Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-24 text-center">
         <p className="font-poppins text-sm text-void-muted mb-4">
           For those who need the legal jargon, here is the <span className="text-white underline decoration-void-purple cursor-pointer hover:text-void-purple transition-colors">raw text file</span>.
         </p>
         <p className="font-mono text-xs text-void-muted/50">
           Last updated: The beginning of time.
         </p>
      </footer>

    </motion.div>
  );
};

const Axiom: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="group relative border-b border-white/10 pb-12"
  >
    <div className="absolute -top-12 left-0 font-playfair text-9xl text-white/5 select-none pointer-events-none group-hover:text-void-purple/10 transition-colors duration-500">
      {number}
    </div>
    <h3 className="font-playfair text-4xl text-white mb-6 relative z-10">{title}</h3>
    <p className="font-poppins text-lg text-void-muted font-light leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors duration-300">
      {description}
    </p>
  </motion.div>
);

const SearchDemo: React.FC = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'not-found'>('idle');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setStatus('searching');
    // Immediate failure
    setTimeout(() => {
        setStatus('not-found');
    }, 400); // Slight delay for dramatic effect
  };

  return (
    <div className="w-full relative">
      <form onSubmit={handleSearch} className="relative group">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-void-muted w-6 h-6 group-focus-within:text-white transition-colors" />
        <input 
          type="text" 
          value={query}
          onChange={(e) => {
              setQuery(e.target.value);
              if (status !== 'idle') setStatus('idle');
          }}
          placeholder="Search our database for your name..."
          className="w-full bg-transparent border-b border-white/20 py-4 pl-10 pr-4 font-playfair text-xl md:text-2xl text-white focus:outline-none focus:border-void-purple transition-colors placeholder:text-void-muted/30"
        />
        <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-mono text-void-purple hover:text-white transition-colors uppercase tracking-wider">
           Run Query
        </button>
      </form>

      <div className="h-24 mt-8 flex items-center justify-center font-mono text-sm">
        <AnimatePresence mode="wait">
          {status === 'searching' && (
             <motion.div 
               key="searching"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="text-void-muted flex items-center gap-2"
             >
                <span className="animate-pulse">ACCESSING SHARDS...</span>
             </motion.div>
          )}
          
          {status === 'not-found' && (
             <motion.div 
               key="not-found"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-red-500/10 border border-red-500/50 p-4 rounded text-red-500 flex flex-col items-center gap-2 w-full"
             >
                <div className="flex items-center gap-2 font-bold">
                    <Shield size={16} />
                    <span>ERROR 404: VOID</span>
                </div>
                <p className="text-xs opacity-80">NO RECORDS FOUND. USER DOES NOT EXIST IN DATABASE.</p>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PrivacyManifesto;
