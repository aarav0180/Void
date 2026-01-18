import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Search } from 'lucide-react';

const DeviceShowcase: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Smoother parallax
  const yDesktop = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yMobile = useTransform(scrollYProgress, [0, 0.5], [20, -50]);
  
  // Parallax x-axis only active on large screens to prevent overlap
  const xMobileDesktop = useTransform(scrollYProgress, [0, 0.3], [-50, 40]); 
  
  return (
    <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden min-h-auto lg:min-h-[800px]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-void-purple/5 to-transparent opacity-20 pointer-events-none" />

      {/* Container for devices - Stacks on Tablet, Side-by-side on LG+ */}
      <div className="container mx-auto px-4 md:px-6 relative flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-0 lg:h-[600px]">
        
        {/* Desktop Device */}
        <motion.div 
          style={{ y: yDesktop }}
          className="relative z-10 w-full max-w-[90%] md:max-w-[700px] aspect-[16/10]"
        >
          <LaptopFrame>
            {/* Desktop Content */}
            <div className="flex-grow flex items-center justify-center flex-col p-8 w-full h-full">
               <div className="w-12 h-12 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                 <div className="w-2 h-2 bg-void-purple rounded-full animate-pulse" />
               </div>
               <h3 className="font-playfair text-xl md:text-2xl text-void-text mb-2 text-center">Syncing Encrypted Shards...</h3>
               <div className="w-48 md:w-64 h-1 bg-white/5 rounded-full overflow-hidden mt-4">
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   className="w-1/2 h-full bg-void-purple/50"
                 />
               </div>
               <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="bg-white/5 rounded p-3 text-center">
                    <div className="text-[10px] text-void-muted uppercase tracking-widest mb-1">Bandwidth Saved</div>
                    <div className="text-sm md:text-lg font-mono text-void-green">1.2 GB</div>
                  </div>
                  <div className="bg-white/5 rounded p-3 text-center">
                    <div className="text-[10px] text-void-muted uppercase tracking-widest mb-1">Trackers Blocked</div>
                    <div className="text-sm md:text-lg font-mono text-void-purple">8,402</div>
                  </div>
               </div>
            </div>
          </LaptopFrame>
        </motion.div>

        {/* Mobile Device - Stacks below on tablet, absolute positioning only on LG+ */}
        <motion.div 
          style={{ 
            y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? yMobile : 0, 
            x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? xMobileDesktop : 0 
          }}
          className="relative z-20 w-[260px] md:w-[280px] h-[540px] md:h-[580px] lg:absolute lg:right-10 xl:right-32 flex-shrink-0"
        >
          <PhoneFrame>
             <MobileAirlockDemo />
          </PhoneFrame>
        </motion.div>

      </div>
      
      <div className="mt-16 md:mt-24 text-center px-6">
         <h2 className="font-playfair text-2xl md:text-4xl text-white mb-2">One Void. Any Device.</h2>
         <p className="font-poppins text-void-muted text-xs md:text-sm tracking-wide max-w-md mx-auto">Seamless encryption across macOS, iOS, and Arch Linux.</p>
      </div>
    </section>
  );
};

// SVG Based Laptop Frame for Stability
const LaptopFrame: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="relative w-full h-full group">
       {/* SVG Frame */}
       <svg className="absolute inset-0 w-full h-full drop-shadow-2xl" viewBox="0 0 800 500" preserveAspectRatio="none">
          <rect x="2" y="2" width="796" height="496" rx="20" ry="20" fill="#0d0d0d" stroke="#333" strokeWidth="1" />
          {/* Screen bg */}
          <rect x="20" y="20" width="760" height="460" rx="4" ry="4" fill="#050505" />
       </svg>
       
       {/* Camera Notch Area (HTML overlaid) */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[16px] bg-[#0d0d0d] rounded-b-lg z-20 border-b border-x border-[#333] flex justify-center items-center">
          <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full border border-[#333]" />
       </div>

       {/* Screen Content Container */}
       <div className="absolute inset-[20px] rounded-lg overflow-hidden bg-void-bg flex flex-col">
          {/* Browser Bar */}
          <div className="h-8 bg-[#0a0a0a] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
             <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
             </div>
             <div className="ml-4 font-mono text-[10px] text-void-muted/50 truncate">void://dashboard</div>
          </div>
          {children}
       </div>
    </div>
  );
};

// SVG Based Phone Frame for Stability
const PhoneFrame: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="relative w-full h-full drop-shadow-2xl">
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 300 600" preserveAspectRatio="none">
        {/* Frame Body */}
        <rect x="1" y="1" width="298" height="598" rx="45" ry="45" fill="none" stroke="#2a2a2a" strokeWidth="6" />
        <rect x="5" y="5" width="290" height="590" rx="40" ry="40" fill="none" stroke="#000" strokeWidth="4" />
      </svg>
      
      {/* Dynamic Island / Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-40" />

      {/* Screen Content */}
      <div className="absolute inset-[12px] bg-black rounded-[32px] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const MobileAirlockDemo: React.FC = () => {
  const [stage, setStage] = useState<'dirty' | 'scanning' | 'clean'>('dirty');

  useEffect(() => {
    const cycle = async () => {
      setStage('dirty');
      await new Promise(r => setTimeout(r, 2000));
      setStage('scanning');
      await new Promise(r => setTimeout(r, 1500)); // Scan duration
      setStage('clean');
      await new Promise(r => setTimeout(r, 4000)); // Read duration
      cycle();
    };
    cycle();
  }, []);

  return (
    <div className="w-full h-full relative font-sans bg-white select-none">
      
      {/* Dirty State (The Bad Web) */}
      <motion.div 
        animate={{ opacity: stage === 'clean' ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-white text-black overflow-hidden flex flex-col"
      >
        <div className="h-12 bg-gray-50 flex items-center px-4 border-b border-gray-100 justify-between">
           <div className="w-6 h-6 rounded bg-gray-200" />
           <div className="w-32 h-3 bg-gray-200 rounded" />
           <div className="w-6 h-6 rounded bg-gray-200" />
        </div>
        <div className="p-4 flex-col gap-2 flex relative h-full">
           {/* Ad Banner */}
           <div className="w-full h-24 bg-gradient-to-r from-red-500 to-orange-500 animate-pulse flex items-center justify-center text-white font-bold text-center p-2 text-sm leading-tight shadow-md rounded">
             <span className="animate-bounce">🎁 WINNER! TAP HERE!</span>
           </div>
           
           <div className="h-4 bg-gray-100 w-full rounded mt-2" />
           <div className="h-4 bg-gray-100 w-5/6 rounded" />
           <div className="h-4 bg-gray-100 w-full rounded" />
           
           {/* Popup */}
           <motion.div 
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.5, type: 'spring' }}
             className="absolute top-32 left-4 right-4 bg-white shadow-2xl border border-gray-200 p-6 rounded-xl z-10 flex flex-col items-center text-center"
           >
              <div className="text-sm font-bold mb-2 text-gray-800">JOIN OUR LIST</div>
              <div className="w-full h-10 bg-gray-50 border border-gray-200 rounded mb-2" />
              <div className="w-full h-10 bg-blue-600 text-white font-bold rounded flex items-center justify-center text-xs tracking-wider">SUBSCRIBE</div>
              <div className="mt-2 text-[8px] text-gray-400 underline">No thanks, I hate savings</div>
           </motion.div>

           <div className="h-32 bg-gray-50 w-full rounded mt-4" />
           <div className="h-4 bg-gray-100 w-full rounded" />
           <div className="h-4 bg-gray-100 w-3/4 rounded" />
        </div>
      </motion.div>

      {/* Scanning Line */}
      {stage === 'scanning' && (
        <motion.div 
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{ duration: 1.5, ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-void-purple z-20 shadow-[0_0_20px_rgba(109,40,217,0.8)]"
        />
      )}

      {/* Clean State (The Void) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === 'clean' ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-void-bg text-void-text flex flex-col overflow-hidden"
      >
        <div className="h-14 flex items-center justify-between px-6 border-b border-white/5 bg-void-panel/50 backdrop-blur-sm">
           <div className="flex items-center gap-2">
             <Shield className="w-4 h-4 text-void-green" />
             <span className="text-[10px] font-mono text-void-muted tracking-widest uppercase">Secured</span>
           </div>
           <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
             <div className="w-1 h-1 bg-white rounded-full" />
           </div>
        </div>

        <div className="p-6 overflow-y-auto">
          <h4 className="font-playfair text-2xl mb-4 leading-tight text-white">Minimalism<br />is Luxury.</h4>
          
          <div className="flex gap-2 mb-6">
            <span className="px-2 py-1 rounded border border-white/10 text-[10px] text-void-muted">Design</span>
            <span className="px-2 py-1 rounded border border-white/10 text-[10px] text-void-muted">Tech</span>
            <span className="px-2 py-1 rounded border border-white/10 text-[10px] text-void-green">5 min read</span>
          </div>

          <p className="font-poppins text-xs text-void-muted leading-relaxed mb-4">
             Minimalism is not about lack; it is about perfect utility. By removing the noise, we amplify the signal.
          </p>
          <div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <p className="font-poppins text-xs text-void-muted leading-relaxed">
             The Void browser strips away 99% of web clutter, leaving only the content you came for. It is the silence engine for a chaotic world.
          </p>
        </div>
        
        {/* Navigation Orb (Floating Bottom) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-void-purple/10">
             <Search size={18} className="text-white opacity-80" />
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default DeviceShowcase;