import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Skills: React.FC = () => {
  const expertSkills = [
    "PC Hardware Architecture",
    "Software Ecosystems",
    "LLM Prompt Engineering",
    "PowerPoint (Advanced Design)",
    "Large Language Models"
  ];

  const techStack = [
    "LLM Inference & Fine-Tuning",
    "Information Technology",
    "Google Firebase",
    "AWS Infrastructure",
    "Digital Marketing",
    "Creativity & Innovation",
    "Problem Solving",
    "Presentation Skills",
    "Entrepreneurship",
    "Linux Administration",
    "Arduino Prototyping"
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase mb-4">Capabilities</h2>
          <h3 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter">
            Technical<br/>Arsenal
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Column 1: Expert & Core */}
            <div>
                <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-8 border-b border-gray-800 pb-4">Core Competencies (Expert)</h4>
                <div className="space-y-4">
                    {expertSkills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] cursor-default"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-200 group-hover:text-white transition-colors font-display tracking-tight">
                                    {skill}
                                </h3>
                                <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_cyan]"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Column 2: Tech Stack */}
            <div>
                 <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-8 border-b border-gray-800 pb-4">Specialized Tech Stack & Soft Skills</h4>
                 <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="relative group px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <span className="text-base font-medium text-gray-300 group-hover:text-purple-300 transition-colors">
                                {tech}
                            </span>
                        </motion.div>
                    ))}
                 </div>

                 {/* Language - Moved higher with mt-4 instead of mt-8 */}
                 <div className="mt-4 p-8 rounded-[2rem] bg-gradient-to-br from-gray-900 to-black border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-mono text-gray-500 uppercase">Languages</span>
                        <ArrowUpRight className="text-gray-600" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-xl text-white">Slovak</span>
                            <span className="text-xs text-cyan-400 font-bold bg-cyan-900/20 px-2 py-1 rounded">NATIVE</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-xl text-white">English</span>
                            <span className="text-xs text-purple-400 font-bold bg-purple-900/20 px-2 py-1 rounded">C1 ADVANCED</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-xl text-white">German (Swiss)</span>
                            <span className="text-xs text-purple-400 font-bold bg-purple-900/20 px-2 py-1 rounded">C1 ADVANCED</span>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;