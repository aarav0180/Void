import React from 'react';
import { Github, Twitter } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="w-full border-t border-white/5 bg-void-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="font-playfair text-2xl text-white">Void</h2>
          {/* <p className="font-poppins text-xs text-void-muted mt-2">v1.0.4 • Stable • Arch/Linux/Mac</p> */}
        </div>

        <div className="flex gap-8">
           <a href="#manifesto" className="font-poppins text-sm text-void-muted hover:text-void-purple transition-colors">Manifesto</a>
           {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-poppins text-sm text-void-muted hover:text-void-purple transition-colors">Source Code</a> */}
           <button 
             onClick={onPrivacyClick} 
             className="font-poppins text-sm text-void-muted hover:text-void-purple transition-colors"
           >
             Privacy Policy
           </button>
        </div>

        <div className="flex gap-4">
           <a href="https://github.com/aarav0180" className="text-void-muted hover:text-white transition-colors"><Github size={20} /></a>
           <a href="https://x.com/18o2005" className="text-void-muted hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>

      </div>
      <div className="text-center mt-12">
        <p className="font-playfair italic text-void-muted/20 text-sm">"Silence is luxury."</p>
      </div>
    </footer>
  );
};

export default Footer;