import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Lock, FileText, Eye, Shield, Zap, Terminal, Activity } from 'lucide-react';

const ActiveDefenseBento: React.FC = () => {
  return (
    <div className="w-full relative">
       {/* Header Section */}
       <h2 className="font-playfair text-4xl text-white mb-12 border-l-2 border-void-green pl-6">
         Zero Trust
       </h2>

       {/* Staggered Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Column 1: Tall -> Short */}
          <div className="flex flex-col gap-6">
             <ContextualSegmentation />
             <TelemetrySpoofing />
          </div>

          {/* Column 2: Short -> Tall (Offset) */}
          <div className="flex flex-col gap-6 md:mt-12">
             <HTTPSEnforcer />
             <ClipboardSentinel />
          </div>
       </div>
    </div>
  );
};

// --- Base Card Wrapper (Simplified for flexibility) ---
const BentoCard: React.FC<{ 
  children: React.ReactNode; 
  title: string; 
  text: string; 
  height: string;
  className?: string;
}> = ({ children, title, text, height, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative group w-full ${height} glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:border-void-green/40 flex flex-col ${className}`}
  >
     {/* Hover Glow Effect - Universal */}
     <div className="absolute inset-0 bg-gradient-to-tr from-void-green/0 via-void-green/0 to-void-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

     {/* Animation Stage */}
     <div className="flex-grow relative w-full overflow-hidden flex items-center justify-center p-6 z-10">
        {children}
     </div>

     {/* Text Content */}
     <div className="p-8 pt-0 relative z-20">
        <h3 className="font-playfair text-2xl text-white mb-3 group-hover:text-void-green transition-colors duration-300">{title}</h3>
        <p className="font-poppins text-xs md:text-sm text-void-muted group-hover:text-gray-300 transition-colors duration-300 leading-relaxed font-light">
          {text}
        </p>
     </div>
  </motion.div>
);

// --- Card 1: Contextual Segmentation (Tall) ---
const ContextualSegmentation: React.FC = () => {
  return (
    <BentoCard 
      height="h-[450px]"
      title="Contextual Segmentation"
      text="Social & Banking tabs are physically isolated. Processes never touch."
    >
      {/* Background: Vertical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px_100%]" />
      
      {/* Tech Label */}
      <div className="absolute top-6 right-6 flex flex-col items-end opacity-50">
        <span className="font-mono text-[9px] text-void-green tracking-widest uppercase">PID_ISOLATION</span>
        <div className="flex gap-1 mt-1">
             {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }} className="w-1 h-1 bg-void-green rounded-full" />)}
        </div>
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* The Wall */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 h-3/4 my-auto overflow-visible">
           {/* Active Barrier Field */}
           <motion.div 
             animate={{ 
               boxShadow: ['0 0 0px #10B981', '0 0 15px #10B981', '0 0 0px #10B981'],
               opacity: [0.3, 0.8, 0.3]
             }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute inset-0 bg-void-green/50"
           />
        </div>

        {/* Top Orb (Cyan - Social) */}
        <motion.div 
          className="absolute top-[20%] left-1/2"
          animate={{ x: -60, y: [0, 10, -10, 0] }} // Offset left
          transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        >
             <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center"
                >
                    <Activity size={16} className="text-cyan-400" />
                </motion.div>
                {/* Particles attempting to cross */}
                <motion.div
                    animate={{ x: [0, 60], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
                    className="absolute top-1/2 left-full w-2 h-2 bg-cyan-500 rounded-full"
                />
             </div>
        </motion.div>

        {/* Bottom Orb (Purple - Banking) */}
        <motion.div 
          className="absolute bottom-[20%] right-1/2"
          animate={{ x: 60, y: [0, -10, 10, 0] }} // Offset right
          transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
             <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-void-purple/20 border border-void-purple flex items-center justify-center"
                >
                    <Lock size={16} className="text-void-purple" />
                </motion.div>
                 {/* Particles attempting to cross */}
                 <motion.div
                    animate={{ x: [0, -60], opacity: [1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeIn", delay: 1 }}
                    className="absolute top-1/2 right-full w-2 h-2 bg-void-purple rounded-full"
                />
             </div>
        </motion.div>

        {/* Impact Event on Wall */}
        <motion.div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
           animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5] }}
           transition={{ duration: 1, repeat: Infinity, times: [0.4, 0.5, 0.6], repeatDelay: 1 }}
        >
            <div className="w-8 h-1 bg-white rounded-full blur-[2px]" />
        </motion.div>
      </div>
    </BentoCard>
  );
};

// --- Card 2: Telemetry Spoofing (Short) ---
const TelemetrySpoofing: React.FC = () => {
  return (
    <BentoCard 
      height="h-[280px]"
      title="Telemetry Spoofing"
      text="We feed trackers randomized coordinates."
    >
      {/* Background: Radial Radar */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
         <div className="w-[150%] h-[150%] border border-white rounded-full" />
         <div className="w-[100%] h-[100%] border border-white rounded-full absolute" />
         <div className="w-[50%] h-[50%] border border-white rounded-full absolute" />
         <div className="absolute w-full h-[1px] bg-white top-1/2 left-0" />
         <div className="absolute h-full w-[1px] bg-white left-1/2 top-0" />
      </div>

       {/* Tech Label - Bottom Left */}
       <div className="absolute bottom-6 left-6 font-mono text-[9px] text-void-green/60">
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 5 }}
          >
            SPOOFING...
          </motion.div>
       </div>

      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
         
         {/* Radar Sweep */}
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full bg-[conic-gradient(from_0deg,transparent_270deg,rgba(16,185,129,0.1)_360deg)] rounded-full scale-150"
         />

         {/* The Glitching Pin */}
         <motion.div
            animate={{ 
               x: [0, 80, -60, 40, 0],
               y: [0, -40, 50, -20, 0],
            }}
            transition={{ 
               duration: 4,
               times: [0, 0.2, 0.4, 0.6, 1],
               repeat: Infinity,
               ease: "circInOut"
            }}
            className="relative z-10"
         >
             <motion.div
                animate={{ opacity: [1, 0, 1, 0.5, 1], scale: [1, 1.2, 0.9, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
             >
                <MapPin className="text-void-green drop-shadow-[0_0_20px_#10B981] fill-void-green/20" size={32} />
             </motion.div>
             
             {/* Coordinates Tag */}
             <motion.div 
               className="absolute top-0 left-8 bg-void-panel border border-void-green/30 px-2 py-1 rounded text-[8px] font-mono text-void-green whitespace-nowrap"
               animate={{ opacity: [0, 1, 0] }}
               transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
             >
                LAT: {Math.random().toFixed(4)}
             </motion.div>
         </motion.div>
         
         {/* Ghost Pins (Decoys) */}
         {[1, 2, 3].map((i) => (
             <motion.div 
                key={i}
                animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 0.5, delay: i * 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="absolute text-void-green/20"
                style={{ 
                    top: `${20 + i * 20}%`, 
                    left: `${20 + i * 15}%` 
                }}
             >
                <MapPin size={20} />
             </motion.div>
         ))}
      </div>
    </BentoCard>
  );
};

// --- Card 3: HTTPS Enforcer (Short) ---
const HTTPSEnforcer: React.FC = () => {
  return (
    <BentoCard 
      height="h-[280px]"
      title="HTTPS Enforcer"
      text="Unencrypted traffic is upgraded instantly."
    >
      {/* Background: Horizontal Lines (Data Stream) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex flex-col justify-around py-12">
          {[1,2,3,4].map(i => (
              <motion.div 
                key={i}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                className="h-[1px] w-full bg-white"
              />
          ))}
      </div>

      {/* Tech Label - Top Left */}
      <div className="absolute top-6 left-6 font-mono text-[9px] text-white/40 tracking-widest uppercase flex items-center gap-2">
         <div className="w-1.5 h-1.5 bg-void-green rounded-full animate-pulse" />
         TLS_HANDSHAKE: ACTIVE
      </div>

      <div className="relative w-full px-12 flex flex-col items-center justify-center">
         
         {/* The Pipeline */}
         <div className="relative w-full h-12 flex items-center">
             {/* Base Track */}
             <div className="absolute inset-0 bg-white/5 rounded-full border border-white/5" />
             
             {/* Progress Bar */}
             <motion.div 
               className="absolute left-0 top-0 bottom-0 bg-void-green/10 rounded-full border-r border-void-green"
               animate={{ width: ["0%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* The Lock moving along the track */}
             <motion.div
               className="absolute z-10"
               animate={{ left: ["5%", "85%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             >
                <div className="bg-void-bg p-2 rounded-full border border-void-green shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                   <Lock size={18} className="text-void-green" />
                </div>
                
                {/* Shield Pulse when lock closes/arrives */}
                <motion.div 
                   animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                   transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5, delay: 1.5 }}
                   className="absolute inset-0 bg-void-green rounded-full -z-10"
                />
             </motion.div>
         </div>

         {/* Protocol Upgrade Text */}
         <div className="flex justify-between w-full mt-4 text-[9px] font-mono text-void-muted uppercase">
            <span className="opacity-50">HTTP/1.1</span>
            <div className="flex gap-1 items-center">
                <motion.span 
                    animate={{ opacity: [0, 1, 0] }} 
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    →
                </motion.span>
                <span className="text-void-green font-bold">HTTPS/2</span>
            </div>
         </div>
      </div>
    </BentoCard>
  );
};

// --- Card 4: Clipboard Sentinel (Tall) ---
const ClipboardSentinel: React.FC = () => {
  return (
    <BentoCard 
      height="h-[450px]"
      title="Clipboard Sentinel"
      text="Sites can write to clipboard, but cannot read history."
    >
      {/* Background: Dot Matrix */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Tech Label - Bottom Right */}
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-red-500/60 tracking-widest uppercase text-right">
         THREAT_DETECTED
         <br/>
         <span className="text-void-muted">ACTION: BLOCK</span>
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center py-12 gap-8">
         
         {/* The Eye (Intruder) */}
         <div className="relative">
             <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <Eye className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]" size={48} />
             </motion.div>
             
             {/* Scan Beam */}
             <motion.div 
               className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[80px] border-l-transparent border-r-transparent border-b-red-500/10"
               animate={{ opacity: [0.2, 0.6, 0.2], height: [40, 80, 40] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
         </div>

         {/* The Shield (Defense) */}
         <div className="relative z-10">
            <motion.div
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 1.8 }} // Impact shake
            >
               <Shield className="text-void-green fill-void-green/10 w-20 h-20 drop-shadow-[0_0_30px_#10B981]" />
            </motion.div>

            {/* Blocked Text Glitch */}
            <motion.div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-red-500 text-red-500 text-[10px] font-bold px-2 py-1 font-mono tracking-widest rounded"
                 animate={{ opacity: [0, 1, 0, 1, 0], x: [-2, 2, 0] }}
                 transition={{ duration: 2, times: [0.4, 0.45, 0.5, 0.55, 0.8], repeat: Infinity }}
               >
                 BLOCKED
            </motion.div>
         </div>

         {/* Protected Asset */}
         <div className="relative opacity-30 flex flex-col items-center gap-2">
            <FileText className="text-white" size={32} />
            <div className="w-16 h-1 bg-white/20 rounded-full" />
            <div className="w-10 h-1 bg-white/20 rounded-full" />
         </div>

      </div>
    </BentoCard>
  );
};

export default ActiveDefenseBento;