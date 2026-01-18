import React from 'react';
import { motion } from 'framer-motion';

interface SuccessGatewayProps {
  onBack: () => void;
}

const SuccessGateway: React.FC<SuccessGatewayProps> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden font-poppins text-white selection:bg-void-purple selection:text-white">
      
      {/* Background Gradient - Much subtler, deeper darkness */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f0518_0%,_#000000_80%)] pointer-events-none" />

      {/* The Volumetric Core Visual */}
      <div className="relative flex items-center justify-center mb-32 scale-90 md:scale-100">
        
        {/* Layer 3: The Atmosphere (Subtle Breathing Glow) */}
        <motion.div 
           animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-[600px] h-[600px] bg-void-purple/10 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Layer 2: The Event Horizon (Darker Wireframe) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1, rotate: 360 }}
           transition={{ 
             opacity: { duration: 1, delay: 0.2 },
             scale: { duration: 1, delay: 0.2 },
             rotate: { duration: 30, repeat: Infinity, ease: "linear" }
           }}
           className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-dashed border-[#4c1d95]/40 shadow-[0_0_30px_rgba(76,29,149,0.1)]"
        />
        
        {/* Layer 2b: Counter-rotating inner ring */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1, rotate: -360 }}
           transition={{ 
             opacity: { duration: 1, delay: 0.3 },
             scale: { duration: 1, delay: 0.3 },
             rotate: { duration: 25, repeat: Infinity, ease: "linear" }
           }}
           className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border-[1px] border-[#6d28d9]/20 border-t-transparent border-l-transparent"
        />

        {/* Layer 1: The Core (Dark Energy) */}
        <motion.div 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ 
             type: "spring", 
             stiffness: 80, 
             damping: 15,
             delay: 0.5 
           }}
           className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#c084fc] via-[#7e22ce] to-[#3b0764] rounded-full shadow-[0_0_50px_10px_rgba(126,34,206,0.4)]"
        >
           {/* Inner flicker */}
           <motion.div 
             animate={{ opacity: [0.4, 0.7, 0.4] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute inset-0 bg-[#d8b4fe] rounded-full opacity-50 blur-[2px]"
           />
        </motion.div>

      </div>

      {/* Text Container */}
      <div className="relative z-20 text-center px-6 max-w-2xl flex flex-col items-center mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="font-playfair text-3xl md:text-5xl lg:text-6xl text-[#E0E0E0] mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        >
          The noise has ceased.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="font-playfair text-lg md:text-xl text-[#7e22ce] italic mb-10 drop-shadow-[0_0_8px_rgba(126,34,206,0.3)]"
        >
          You are confirmed.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="font-poppins text-[#666] text-xs md:text-sm leading-relaxed max-w-md mx-auto text-center font-light tracking-[0.1em]"
        >
          Your position is secured ahead of the crowd.<br/>Prepare for the silence.
        </motion.p>
      </div>

      {/* Return Link - The only escape */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        onClick={onBack}
        className="absolute bottom-12 font-poppins text-[10px] text-white/10 hover:text-white/40 transition-colors tracking-[0.3em] uppercase cursor-pointer"
      >
        Back to reality
      </motion.button>

    </div>
  );
};

export default SuccessGateway;