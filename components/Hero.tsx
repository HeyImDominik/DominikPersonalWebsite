import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center perspective-1000 overflow-hidden">
      {/* Ambient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-8 flex flex-col items-center">
        
        {/* Name with Blur-in effect - Unified Color */}
        <h1 className="text-7xl md:text-[10rem] font-display font-black tracking-tighter text-white leading-[0.85] drop-shadow-2xl opacity-0 animate-blur-in">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">DOMINIK</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">WALSER</span>
        </h1>

        {/* Title with delayed blur-in */}
        <div className="max-w-3xl mx-auto opacity-0 animate-blur-in [animation-delay:200ms]">
            <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed tracking-wide">
                Next-Gen AI Android Antivirus Developer
            </p>
            <p className="mt-3 text-lg text-gray-500 font-mono tracking-widest uppercase">
                LLM & Machine Learning Enthusiast
            </p>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="pt-12"
        >
          {/* Prominent LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/walserdominik/" 
            target="_blank" 
            rel="noreferrer" 
            className="group relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-40 group-hover:opacity-80 transition duration-500 group-hover:duration-200 animate-pulse-glow"></div>
            <div className="relative flex items-center justify-center gap-3 px-12 py-5 bg-[#050505] rounded-xl leading-none text-white border border-white/10 hover:bg-gray-900 transition-all">
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-lg tracking-wide">Connect on LinkedIn</span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 perspective-1000 opacity-50">
         <motion.div 
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] border border-white/[0.02] rounded-full transform-style-3d"
         />
         <motion.div 
            animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] border border-dashed border-white/[0.03] rounded-full transform-style-3d"
         />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 text-white/30 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;