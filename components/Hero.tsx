import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronDown, Linkedin } from 'lucide-react';

// --- 1. Reusable Staggered Text Component ---
// This splits text into letters for that "ultra-premium" flow
const StaggeredText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }, // Fast, ripple effect
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(20px)', scale: 1.1 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.0,
        ease: [0.2, 0.65, 0.3, 0.9], // "Cinematic" easing
      },
    },
  };

  return (
    <motion.h1
      className={`flex flex-wrap justify-center gap-2 ${className}`}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((word, wIndex) => (
        <span key={wIndex} className="flex">
          {word.split("").map((char, cIndex) => (
            <motion.span
              key={`${wIndex}-${cIndex}`}
              variants={letterVariants}
              className="block will-change-transform" // Performance optimization
              style={{ willChange: 'filter, transform' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};

const Hero: React.FC = () => {
  // --- 2. Variants for general elements ---
  const blurUpVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(20px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
    },
  };

  // Animation for the pulsing background glow
  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      filter: ['blur(100px)', 'blur(130px)', 'blur(100px)'], // "Focus and blur" loop
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center perspective-1000 overflow-hidden bg-black">
      
      {/* --- Ambient Living Background --- */}
      {/* Top Center Glow - Breaths */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-600/20 rounded-[100%] pointer-events-none"
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-10 flex flex-col items-center">
        
        {/* --- Name with Ultra Stagger --- */}
        <div className="space-y-[-1rem] md:space-y-[-3rem]"> {/* Tighter line height for impact */}
           <StaggeredText 
             text="DOMINIK" 
             className="text-7xl md:text-[10rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-2xl" 
           />
           <StaggeredText 
             text="WALSER" 
             className="text-7xl md:text-[10rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-200 to-gray-500 drop-shadow-2xl" 
           />
        </div>

        {/* --- Titles with Smooth Blur Up --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.p 
            variants={blurUpVariants}
            className="text-xl md:text-3xl text-gray-200 font-light leading-relaxed tracking-wide"
          >
            Next-Gen AI Android Antivirus Developer
          </motion.p>
          <motion.p 
            variants={blurUpVariants}
            className="text-lg text-blue-400/80 font-mono tracking-[0.2em] uppercase"
          >
            LLM & Machine Learning Enthusiast
          </motion.p>
        </motion.div>

        {/* --- Button with Magnetic Feel --- */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
           animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
           transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
           className="pt-8"
        >
          <a 
            href="https://www.linkedin.com/in/walserdominik/" 
            target="_blank" 
            rel="noreferrer" 
            className="group relative inline-block"
          >
            {/* Glow Effect behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            
            <div className="relative flex items-center justify-center gap-3 px-10 py-4 bg-[#0a0a0a] rounded-xl leading-none text-white border border-white/10 group-hover:bg-gray-900/90 group-hover:scale-105 transition-all duration-300 ease-out">
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span className="font-medium text-lg tracking-wide">Connect on LinkedIn</span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* --- 3D Background Elements (Rotating & Blurring) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 perspective-1000 opacity-30 mix-blend-screen">
         <motion.div 
            animate={{ 
                rotateX: [0, 360], 
                rotateY: [0, 360],
                scale: [1, 1.2, 1] // Adding slight scale breathing
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] border-[1px] border-white/[0.05] rounded-full transform-style-3d blur-[2px]"
         />
         <motion.div 
            animate={{ 
                rotateX: [360, 0], 
                rotateY: [360, 0],
                filter: ["blur(5px)", "blur(0px)", "blur(5px)"] // Dynamic focus shifting
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] border border-dashed border-white/[0.08] rounded-full transform-style-3d"
         />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
