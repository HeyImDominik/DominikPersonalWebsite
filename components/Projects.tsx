import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ArrowRight, Brain, Zap, Loader2, AlertCircle } from 'lucide-react';

// IMPORT THE IMAGE HERE
// Ensure 'AVUI.jpg' is in the same directory as this component
import avuiImage from './AVUI.jpg';

const Projects: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  // Updated title text
  const titleLetters = "Next-Gen Antivirus".split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Speed up slightly for longer text
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    show: { 
        opacity: 1, 
        filter: 'blur(0px)', 
        y: 0,
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
    },
  };

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase mb-4 opacity-0 animate-blur-in">Portfolio</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 opacity-0 animate-blur-in [animation-delay:100ms]">Selected Works</h3>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative w-full min-h-[800px] rounded-[3rem] overflow-hidden glass-card"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
           {/* Dynamic Gradient Background */}
           <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10 transition-all duration-700 group-hover:scale-105" />
           <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] group-hover:bg-purple-600/20 transition-all duration-700" />
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-8 md:p-16 h-full items-center">
              
              {/* Content Side */}
              <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit">
                        <Loader2 className="w-3 h-3 text-yellow-500 animate-spin" />
                        <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase">Currently in Development</span>
                    </div>
                    
                    {/* Letter-by-letter animation - Font size adjusted to fit longer text */}
                    <motion.h3 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap text-4xl md:text-6xl font-display font-black text-white tracking-tight drop-shadow-lg"
                    >
                        {titleLetters.map((letter, i) => (
                            <motion.span key={i} variants={item} className={letter === " " ? "mr-4" : ""}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h3>
                    <p className="text-xl font-medium text-cyan-200 tracking-wide">AI-Powered Security</p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 font-light leading-relaxed max-w-xl">
                    A revolutionary mobile security system driven by <span className="text-white font-semibold">Artificial Intelligence</span>. 
                    Designed to detect sophisticated <span className="text-white font-semibold">Zero-Day threats</span> where traditional antiviruses fail. 
                    Features a multi-layered defense architecture (Signatures, Heuristics, Anomaly Detection) and complex <span className="text-white font-semibold">LLM integration</span> for advanced threat analysis, all while maintaining a privacy-first, on-device approach.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {['AI', 'TensorFlow Lite', 'Heuristic Analysis', 'Privacy-First Design', 'Firebase'].map(tech => (
                      <span key={tech} className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specific Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/5 mt-4">
                    <div>
                       <div className="text-2xl md:text-3xl font-bold text-white">7,025+</div>
                       <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">AI Training Params</div>
                    </div>
                    <div>
                       <div className="text-2xl md:text-3xl font-bold text-white">5</div>
                       <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">Malware Databases</div>
                    </div>
                    <div>
                       <div className="text-2xl md:text-3xl font-bold text-white">AI Powered</div>
                       <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">Core Technology</div>
                    </div>
                    <div>
                       <div className="text-2xl md:text-3xl font-bold text-white">17</div>
                       <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">Detection Modules</div>
                    </div>
                    <div>
                       <div className="text-2xl md:text-3xl font-bold text-white">7+</div>
                       <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">Original Innovations</div>
                    </div>
                    <div>
                       <div className="text-2xl md:text-3xl font-bold text-white">30+</div>
                       <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">Prototypes</div>
                    </div>
                </div>

                <div className="pt-6">
                  <a href="https://761IvQ.short.gy/OCLIjD" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    More info <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Visual Side - 3D Phone Effect with User Image */}
              <div className="relative flex items-center justify-center perspective-1000 order-1 lg:order-2 min-h-[500px]">
                <motion.div 
                  animate={{ 
                    rotateY: hovered ? -10 : -5,
                    rotateX: hovered ? 5 : 5,
                    scale: hovered ? 1.05 : 1
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="relative w-[320px] h-[650px] bg-black rounded-[40px] border-[4px] border-gray-800/50 shadow-2xl overflow-hidden transform-style-3d group-hover:border-cyan-500/30 transition-colors duration-500"
                >
                    {/* Seamless Screen - No Notch */}
                    <div className="w-full h-full bg-gray-900 relative overflow-hidden">
                        {/* MODIFIED IMAGE COMPONENT */}
                          <img 
                            src={avuiImage} 
                            alt="Next-Gen Antivirus Interface" 
                            className="w-full h-full object-cover object-top"
                          />

                        {/* Subtle overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    </div>
                </motion.div>

                {/* Glow behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[80px] -z-10 rounded-full"></div>
              </div>
           </div>
        </motion.div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            
           {/* Rino Project */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="group p-10 rounded-[3rem] bg-white/5 border border-white/5 backdrop-blur-lg hover:bg-white/[0.08] transition-colors flex flex-col"
           >
             <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <Smartphone className="text-blue-400" size={28} />
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-full">2018 - 2021</span>
                    <span className="text-[10px] font-bold text-red-400 bg-red-900/20 border border-red-500/20 px-2 py-1 rounded flex items-center gap-1">
                        <AlertCircle size={10} /> LEGACY / OUTDATED
                    </span>
                </div>
             </div>
             <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Rino Personal Assistant</h4>
             <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
               Rino Personal Assistant was an Android voice assistant featuring Text-to-Speech and Speech-to-Text capabilities. Utilizing Firebase for real-time data, it integrated with online services to provide weather, news, and smart home control. The app achieved over 1,500 installs on Google Play. <span className="text-gray-600 italic block mt-2">Note: This project is no longer developed.</span>
             </p>
             <div className="pt-4">
                <a href="https://761IvQ.short.gy/DFCZFA" target="_blank" rel="noreferrer" className="text-sm font-bold text-white border-b border-white/20 pb-1 hover:border-white transition-colors">
                   View Legacy Site
                </a>
             </div>
           </motion.div>

           {/* AI Workflow */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="group relative p-10 rounded-[3rem] bg-gradient-to-br from-[#0a0a0a] to-black border border-white/10 backdrop-blur-lg overflow-hidden flex flex-col"
           >
             <div className="absolute top-0 right-0 p-8 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                <Zap className="text-purple-500" size={32} />
             </div>
             
             <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <Brain className="text-purple-400" size={28} />
                </div>
             </div>
             
             <h4 className="text-3xl font-bold text-white mb-4">AI-Augmented Workflow</h4>
             <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
               I approach development with an AI-first mindset, using a custom workflow built for speed and clarity. By letting advanced LLMs handle the repetitive syntax, I work more on high-level logic, product feel, and delivering robust solutions faster than traditional workflows allow. If you'd like to know more about my custom LLM development framework and workflow, please feel free to contact me.
             </p>
           </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
