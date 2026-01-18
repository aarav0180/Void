import React from 'react';

const words = [
  "ADS", "TRACKERS", "POP-UPS", "COOKIES", "PAYWALLS", "CLICKBAIT", "ALGORITHMS", "NOISE", "CLUTTER", "SPAM", "DATA MINING"
];

const NoiseMarquee: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-void-bg border-y border-white/5">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-void-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-void-bg to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee">
          {[...words, ...words, ...words].map((word, i) => (
            <span 
              key={i} 
              className="font-playfair text-4xl md:text-6xl text-void-muted/20 px-8 md:px-12 font-bold italic uppercase"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <p className="text-void-muted/40 font-poppins text-xs tracking-[0.3em] uppercase">Filtering Signal from Noise</p>
      </div>
    </section>
  );
};

export default NoiseMarquee;