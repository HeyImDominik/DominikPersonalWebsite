import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-32 px-4 border-t border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden">
       {/* Footer Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-t from-cyan-900/20 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
          Shaping a safer,<br/>smarter future for everyone.
        </h2>
        
        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg font-light">
          Open to collaborating on a wide range of projects, from AI, cybersecurity, and emerging technologies to innovative ideas outside these areas. If you think we could create something great together, feel free to reach out or connect with me on LinkedIn.
        </p>

        {/* Email Box / Badge */}
        <div className="flex justify-center mb-12">
            <a 
              href="mailto:hey@dominikwalser.com" 
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
                <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail size={16} className="text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white font-mono text-sm tracking-wide">
                    hey@dominikwalser.com
                </span>
            </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
           <a href="mailto:hey@dominikwalser.com" className="relative z-20 flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 group backdrop-blur-md">
             <Mail size={18} className="group-hover:scale-110 transition-transform" /> Contact Me
           </a>
           <a href="https://www.linkedin.com/in/walserdominik/" target="_blank" rel="noreferrer" className="relative z-20 flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0077b5] text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(0,119,181,0.5)] transition-all duration-300 shadow-lg shadow-black/50">
             <Linkedin size={18} /> LinkedIn
           </a>
        </div>

        <div className="flex justify-center items-center text-xs text-gray-600 font-mono border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Dominik Walser.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
