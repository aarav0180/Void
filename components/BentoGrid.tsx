import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Sliders, ChevronLeft, ChevronRight, RotateCcw, X, Search } from 'lucide-react';
import ActiveDefenseBento from './ActiveDefenseBento';

const BentoGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col gap-32">
      
      {/* Features Section */}
      <section id="features" className="w-full">
        <h2 className="font-playfair text-4xl text-white mb-12 border-l-2 border-void-purple pl-6">Core Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 h-auto">
          
          {/* Feature A: The Airlock (Large Card) */}
          <div className="col-span-1 md:col-span-8 min-h-[400px] glass-panel rounded-2xl p-1 relative overflow-hidden group">
            <div className="absolute top-6 left-6 z-20">
              <h3 className="font-playfair text-2xl text-white">The Airlock</h3>
              <p className="font-poppins text-void-muted text-sm mt-1">Content extraction engine.</p>
            </div>
            
            <div className="w-full h-full bg-black/40 rounded-xl relative flex overflow-hidden">
              {/* Split Screen Concept */}
              <div className="w-1/2 h-full relative border-r border-white/5 overflow-hidden">
                 {/* Chaotic "Blocked" Side */}
                 <div className="absolute inset-0 bg-white/5 filter blur-sm scale-110 opacity-50 flex flex-col p-4 gap-2">
                    <div className="h-32 bg-red-500/20 w-full animate-pulse" />
                    <div className="h-8 bg-white/10 w-3/4" />
                    <div className="h-4 bg-white/10 w-full" />
                    <div className="h-4 bg-white/10 w-full" />
                    <div className="h-64 bg-blue-500/10 w-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-bold p-2 rotate-12">SUBSCRIBE NOW</div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
                   <div className="text-center">
                     <Shield className="w-12 h-12 text-void-muted mx-auto mb-2" />
                     <span className="font-poppins text-xs tracking-widest text-void-muted uppercase">Connection Severed</span>
                   </div>
                 </div>
              </div>

              <div className="w-1/2 h-full bg-void-black p-8 flex flex-col justify-center relative">
                 <div className="absolute top-4 right-4 text-void-green text-xs font-poppins border border-void-green/30 px-2 py-1 rounded">
                   SECURE
                 </div>
                 <p className="font-poppins text-void-muted text-xs mb-4 tracking-wide uppercase">Summarized Content</p>
                 <h4 className="font-playfair text-xl md:text-3xl leading-tight text-void-text">
                   "This site contains 3 popups and 1,500 words of fluff. Here is the answer."
                 </h4>
                 <div className="mt-8 h-[1px] w-12 bg-void-purple" />
              </div>
            </div>
          </div>

          {/* Feature B: Local Intelligence (Medium Card) */}
          <div className="col-span-1 md:col-span-4 min-h-[400px] glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="font-playfair text-2xl text-white">Local Intelligence</h3>
              <p className="font-poppins text-void-muted text-xs mt-1">7B Param • 4-bit Quant</p>
            </div>

            <div className="flex-grow flex items-center justify-center relative my-4">
               {/* Abstract Chip Visualization */}
               <div className="relative w-32 h-32">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-void-purple/30 rounded-full border-dashed"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-4 border border-void-text/10 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Cpu className="w-10 h-10 text-void-purple drop-shadow-[0_0_15px_rgba(109,40,217,0.5)]" />
                  </div>
                  {/* Data Shield */}
                  <div className="absolute -top-4 -right-4 bg-void-panel border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                     <div className="w-2 h-2 bg-void-green rounded-full animate-pulse" />
                     <span className="text-[10px] font-poppins text-void-text">OFFLINE</span>
                  </div>
               </div>
            </div>

            <div className="font-poppins text-xs text-void-muted border-t border-white/5 pt-4">
              0% Cloud. 100% Private. Your data never leaves your machine.
            </div>
          </div>

          {/* Feature C: Radical Minimalism (Medium/Small Card) */}
          <div className="col-span-1 md:col-span-4 min-h-[300px] glass-panel rounded-2xl p-6 relative">
             <MinimalismToggle />
          </div>
          
           {/* Feature D: Render Engine */}
          <div className="col-span-1 md:col-span-8 min-h-[300px] glass-panel rounded-2xl p-8 relative flex items-center justify-between overflow-hidden">
             <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-void-purple/10 to-transparent pointer-events-none" />
             <div className="relative z-10 max-w-md">
                <h3 className="font-playfair text-2xl text-white">Chromium Stripped</h3>
                <p className="font-poppins text-void-muted text-sm mt-2 leading-relaxed">
                   We gutted the engine. No telemetry. No Google sync. No extensions API. Just raw rendering power optimized for text and media consumption.
                </p>
             </div>
             <div className="hidden md:flex flex-col gap-2 font-mono text-xs text-void-purple opacity-50 text-right">
                <p>Telemetry... DISABLED</p>
                <p>SafeBrowsing... PURGED</p>
                <p>RLZ Ping... NULL</p>
             </div>
          </div>

        </div>
      </section>

      {/* Security Section Replacement */}
      <section id="security" className="w-full">
         <ActiveDefenseBento />
      </section>

    </div>
  );
};

const MinimalismToggle: React.FC = () => {
  const [minimalMode, setMinimalMode] = useState(true);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-playfair text-2xl text-white">Minimalism</h3>
          <p className="font-poppins text-void-muted text-xs mt-1">No one-liners.</p>
        </div>
        <button 
          onClick={() => setMinimalMode(!minimalMode)}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${minimalMode ? 'bg-void-muted/20' : 'bg-void-purple'}`}
        >
          <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${minimalMode ? '' : 'translate-x-6'}`} />
        </button>
      </div>

      <div className="flex-grow bg-black rounded-lg border border-white/5 p-4 flex flex-col gap-4">
         {/* Mock Browser UI */}
         <div className="w-full h-8 bg-void-panel rounded flex items-center px-3 gap-2 border border-white/5">
            <div className="flex gap-1">
               <div className="w-2 h-2 rounded-full bg-red-500/50" />
               <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
               <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-grow bg-black/50 h-5 rounded flex items-center justify-center text-[10px] text-void-muted font-mono">
               void://settings
            </div>
         </div>

         <div className="flex-grow flex items-center justify-center">
            {/* The Toolbar Demo */}
            <div className="flex gap-6 items-center">
               <ToolbarItem icon={<ChevronLeft size={18} />} label="Back" minimal={minimalMode} />
               <ToolbarItem icon={<ChevronRight size={18} />} label="Forward" minimal={minimalMode} />
               <ToolbarItem icon={<RotateCcw size={16} />} label="Reload" minimal={minimalMode} />
               <div className="w-[1px] h-6 bg-white/10 mx-2" />
               <ToolbarItem icon={<Search size={16} />} label="Find" minimal={minimalMode} />
               <ToolbarItem icon={<Sliders size={16} />} label="Settings" minimal={minimalMode} />
            </div>
         </div>
         
         <p className="text-center font-poppins text-[10px] text-void-muted/50 mt-2">
            {minimalMode ? "State: Zen Mode" : "State: Verbose Mode"}
         </p>
      </div>
    </div>
  );
};

const ToolbarItem = ({ icon, label, minimal }: { icon: React.ReactNode, label: string, minimal: boolean }) => (
  <div className="flex items-center gap-2 text-void-text hover:text-white transition-colors cursor-pointer group">
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <AnimatePresence>
      {!minimal && (
        <motion.span 
          initial={{ opacity: 0, width: 0, x: -10 }}
          animate={{ opacity: 1, width: 'auto', x: 0 }}
          exit={{ opacity: 0, width: 0, x: -10 }}
          className="font-poppins text-xs overflow-hidden whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}
    </AnimatePresence>
  </div>
);

export default BentoGrid;