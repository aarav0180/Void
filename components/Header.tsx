import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Add hysteresis to prevent rapid toggling
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest < 40 && scrolled) {
      setScrolled(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none transition-[padding] duration-700 ease-in-out ${scrolled ? 'pt-6' : 'pt-0'}`}>
        <motion.header 
          layout
          className={`pointer-events-auto flex justify-between items-center backdrop-blur-md border ${
            scrolled 
              ? 'w-[92%] md:w-auto bg-void-panel/80 border-white/10 rounded-full py-3 px-6 md:px-8 shadow-2xl shadow-void-purple/5' 
              : 'w-full bg-transparent border-transparent rounded-none py-6 px-8'
          }`}
          transition={{ 
            layout: { duration: 0.6, type: "spring", stiffness: 100, damping: 20 },
            default: { duration: 0.6, ease: "easeInOut" }
          }}
        >
          <motion.div layout="position" className="flex items-center gap-0 pr-8">
            {/* <div className="w-13 h-8 rounded-lg flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(109,40,217,0.3)]">
              
            </div> */}
            <img src="/logoo.png" alt="Void Logo" className="w-13 h-10 rounded-lg" />
            <span className="font-playfair text-xl font-bold tracking-tight text-white">Void</span>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav layout="position" className="hidden md:flex gap-8 items-center">
            {[
              { label: 'Manifesto', id: 'manifesto' },
              { label: 'Features', id: 'features' },
              { label: 'Security', id: 'security' }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="font-poppins text-xs tracking-widest uppercase text-void-muted hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-void-purple transition-all group-hover:w-full" />
              </button>
            ))}
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <motion.button 
            layout="position"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </motion.button>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-void-bg flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="font-playfair text-2xl font-bold text-white">Void</span>
               <button onClick={() => setMobileMenuOpen(false)} className="text-void-muted hover:text-white">
                 <X size={24} />
               </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {[
                { label: 'Manifesto', id: 'manifesto' },
                { label: 'Features', id: 'features' },
                { label: 'Security', id: 'security' }
              ].map((item) => (
                <button 
                  key={item.id} 
                  className="font-playfair text-3xl text-white hover:text-void-purple transition-colors text-left"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto">
               <p className="text-void-muted text-xs font-poppins">v1.0.4 Beta</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;