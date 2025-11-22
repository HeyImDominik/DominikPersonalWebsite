import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-8 px-8 py-4 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-500/10">
        <a href="#" className="text-white hover:text-cyan-400 transition-colors p-1">
          <Terminal size={20} />
        </a>
        
        <div className="flex gap-8">
            <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Arsenal</a>
            <a href="#awards" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Awards</a>
        </div>

        <a 
            href="https://www.linkedin.com/in/walserdominik/" 
            target="_blank" 
            rel="noreferrer"
            className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-cyan-400 transition-colors"
        >
            HIRE ME
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;