import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="w-full py-24 md:py-32 bg-void-bg relative overflow-hidden">
      {/* Background typographic noise */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="font-playfair text-[20vw] leading-none text-white whitespace-nowrap -rotate-12 transform origin-top-left">
          SILENCE NOISE VOID
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col gap-16 md:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l-2 border-void-purple pl-6 md:pl-12"
        >
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6">
            The web has become <span className="text-void-purple italic">hostile</span>.
          </h2>
          <p className="font-poppins text-void-muted text-base md:text-xl leading-relaxed max-w-2xl">
            Every click is tracked. Every pause is measured. Attention is the currency, and you are the product. The modern internet is a casino designed to extract your data and time.
          </p>
        </motion.div>

        {/* Visual Bridge */}
        <div className="relative h-20 md:h-32 flex items-center justify-center overflow-hidden">
            <motion.span 
               initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
               whileInView={{ opacity: 0.1, scale: 1, filter: "blur(4px)" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="font-playfair text-6xl md:text-9xl text-white font-bold tracking-widest italic"
            >
               SILENCE
            </motion.span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="self-end text-right border-r-2 border-void-green pr-6 md:pr-12 max-w-3xl"
        >
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6">
            We are the <span className="text-void-green italic">exit strategy</span>.
          </h2>
          <p className="font-poppins text-void-muted text-base md:text-xl leading-relaxed">
            Void is not just a browser. It is a shield. A tool designed to sever the connection between your identity and the surveillance state. We strip the web down to its raw components: Text. Image. Video. 
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="font-playfair text-xl md:text-3xl text-white italic px-8">
            "To browse is to remain unseen."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Manifesto;