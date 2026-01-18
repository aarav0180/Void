import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Search, Loader2 } from 'lucide-react';
import { storeEmail } from '../lib/firebase';

interface HeroProps {
  onSuccess?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (email && !loading) {
      setLoading(true);
      
      try {
        // Store email in Firebase
        const success = await storeEmail(email);
        
        if (success) {
          setLoading(false);
          if (onSuccess) {
            onSuccess();
          }
          setEmail('');
        } else {
          setError('Failed to save email. Please try again.');
          setLoading(false);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('An error occurred. Please try again.');
        setLoading(false);
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Gradient Spotlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-void-purple/10 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-void-green/5 rounded-full blur-[80px] md:blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10 max-w-4xl w-full flex flex-col items-center"
      >
        <h1 className="font-playfair text-5xl md:text-8xl lg:text-9xl font-semibold leading-[1.1] tracking-tight mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-void-muted">
          The Internet,<br />
          <span className="italic font-normal">Silenced.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-poppins text-void-muted text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12 px-4"
        >
          The beta is currently closed. Secure your spot in the queue.
        </motion.p>

        {/* Cyber-Noir Email Capture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-full max-w-sm md:max-w-md mx-auto relative mb-20 md:mb-24 z-30"
        >
          <motion.form 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} 
            className="flex flex-col md:flex-row gap-3 md:gap-4 w-full"
          >
            {/* Input Field */}
            <input 
              type="email" 
              placeholder="Enter your email..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="flex-grow w-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#333] rounded-lg px-5 py-4 text-white font-poppins font-light placeholder-[#555] focus:outline-none focus:border-void-purple focus:shadow-[0_0_20px_rgba(109,40,217,0.2)] transition-all duration-300 h-12 md:h-14 text-sm md:text-base disabled:opacity-50"
              required
            />
            
            {/* Request Invite Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-8 bg-transparent border border-[#E0E0E0] rounded-lg font-playfair text-[#E0E0E0] hover:bg-white hover:text-black hover:border-white transition-all duration-300 h-12 md:h-14 flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Request Invite</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
          
          {/* Error Message */}
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-3 text-center"
            >
              {error}
            </motion.p>
          )}
        </motion.div>

        {/* The Super Phone Visual - Below Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] shadow-[0_20px_50px_-12px_rgba(109,40,217,0.3)] rounded-[45px] z-20"
        >
           <PhoneFrame>
              <MobileAirlockDemo />
           </PhoneFrame>
        </motion.div>

      </motion.div>
    </section>
  );
};

// --- Phone Components ---

const PhoneFrame: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="relative w-full h-full drop-shadow-2xl">
      {/* Outer Rim (Titanium) */}
      <div className="absolute inset-0 rounded-[45px] bg-gradient-to-tr from-[#333] via-[#1a1a1a] to-[#333] p-[3px] shadow-2xl">
        {/* Inner Bezel (Black) */}
        <div className="absolute inset-[3px] bg-black rounded-[42px] overflow-hidden">
             {/* Screen Content */}
             <div className="w-full h-full bg-void-bg relative">
                {children}
             </div>
        </div>
      </div>
      
      {/* Dynamic Island */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-50 flex items-center justify-center gap-2 px-2 transition-all duration-300 hover:w-[120px]">
          <div className="w-2 h-2 rounded-full bg-void-green/50 animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-void-purple/50" />
      </div>
      
      {/* Glass Reflection Polish */}
      <div className="absolute inset-0 rounded-[45px] pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-white/10" />
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
    <div className="w-full h-full relative font-sans bg-white select-none overflow-hidden">
      
      {/* Dirty State (The Bad Web) */}
      <motion.div 
        animate={{ opacity: stage === 'clean' ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-white text-black overflow-hidden flex flex-col"
      >
        <div className="h-14 bg-gray-50 flex items-end pb-3 px-6 border-b border-gray-100 justify-between">
           <div className="w-6 h-6 rounded bg-gray-200" />
           <div className="w-32 h-3 bg-gray-200 rounded" />
           <div className="w-6 h-6 rounded bg-gray-200" />
        </div>
        <div className="p-4 flex-col gap-3 flex relative h-full">
           {/* Ad Banner */}
           <div className="w-full h-24 bg-gradient-to-r from-red-500 to-orange-500 animate-pulse flex items-center justify-center text-white font-bold text-center p-2 text-sm leading-tight shadow-md rounded-lg transform -rotate-1">
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
             className="absolute top-40 left-4 right-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-200 p-6 rounded-xl z-10 flex flex-col items-center text-center"
           >
              <div className="text-sm font-bold mb-2 text-gray-800">JOIN OUR LIST</div>
              <div className="w-full h-10 bg-gray-50 border border-gray-200 rounded mb-2" />
              <div className="w-full h-10 bg-blue-600 text-white font-bold rounded flex items-center justify-center text-xs tracking-wider shadow-lg shadow-blue-500/30">SUBSCRIBE</div>
              <div className="mt-3 text-[10px] text-gray-400 underline cursor-pointer">No thanks, I hate savings</div>
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
        {/* Mobile Header */}
        <div className="h-24 flex items-end justify-between px-6 pb-4 border-b border-white/5 bg-void-panel/50 backdrop-blur-sm z-10">
           <div className="flex items-center gap-2">
             <Shield className="w-4 h-4 text-void-green" />
             <span className="text-[10px] font-mono text-void-muted tracking-widest uppercase">Secured</span>
           </div>
           <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
             <div className="w-1 h-1 bg-white rounded-full" />
           </div>
        </div>

        <div className="p-6 overflow-y-auto pt-8">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-playfair text-2xl mb-4 leading-tight text-white">Minimalism<br />is Luxury.</h4>
            
            <div className="flex gap-2 mb-6">
              <span className="px-2 py-1 rounded border border-white/10 text-[10px] text-void-muted">Design</span>
              <span className="px-2 py-1 rounded border border-white/10 text-[10px] text-void-green">5 min read</span>
            </div>

            <p className="font-poppins text-xs text-void-muted leading-relaxed mb-6">
               Minimalism is not about lack; it is about perfect utility. By removing the noise, we amplify the signal.
            </p>
            <div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center grayscale transition-all duration-700" />
            </div>
            <p className="font-poppins text-xs text-void-muted leading-relaxed">
               The Void browser strips away 99% of web clutter, leaving only the content you came for.
            </p>
          </motion.div>
        </div>
        
        {/* Navigation Orb (Floating Bottom) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(109,40,217,0.2)]">
             <Search size={20} className="text-white" />
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;