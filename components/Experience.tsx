import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Calendar, Trophy, GraduationCap, Code } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="awards" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Highlight Award - EUCYS */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24 p-1 rounded-[2.5rem] bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"
        >
            <div className="bg-[#050505] rounded-[2.3rem] p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-yellow-500/10 blur-[100px]"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/20 text-yellow-400 mb-6">
                        <Trophy size={32} />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                        Selected to Represent Slovakia at EUCYS 2026
                        <span className="block text-lg md:text-2xl text-gray-200 font-normal mt-2 mb-2">in Kiel, Germany</span>
                        <span className="text-yellow-500 text-xl md:text-2xl block">Festival of Science and Technology National Round</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
                        Selected from the National Round of the 28th Annual Festival of Science and Technology, competition for young researchers, to represent Slovakia at the European Union Contest for Young Scientists (EUCYS) 2026 with my Next-Generation Antivirus Project, an advanced Android antivirus leveraging machine learning. It incorporates multi-layered protection, including static app analysis, heuristic and anomaly detection, and AI-driven adaptive threat assessment. The project demonstrates innovation in cybersecurity, AI application, and mobile threat prevention, demonstrating both technical expertise and strong problem-solving skills.
                    </p>
                    <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-8">
                        EUCYS (European Union Contest for Young Scientists) is the European Union’s most prestigious competition for young researchers, bringing together top young scientists from ~40 countries across Europe and beyond to present their innovative projects on an international stage.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 font-mono">
                        <Calendar size={14} /> Nov 2025 • AMAVET
                    </div>
                </div>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Awards Column */}
            <div>
                <h3 className="text-2xl font-display font-bold text-white mb-10 flex items-center gap-3">
                    <Award className="text-cyan-400" /> Honors & Awards
                </h3>
                <div className="space-y-6">
                    <AwardCard 
                        title="2nd Place - Festival of Science and Technology (Festival vedy a techniky) - Bratislava Regional Round"
                        description="Achieved 2nd place in the Bratislava Regional Round of the 28th Annual Festival of Science and Technology, Slovakia’s leading national competition for young researchers. This recognition placed my project among the top innovations from the Bratislava and Trnava regions. The festival serves as a key national platform and a qualifier for internationally recognized science and technology fairs."
                        issuer="AMAVET - Association for Youth, Science, and Technology"
                        year="Oct 2025"
                        rank="Regional Silver"
                    />
                    <AwardCard 
                        title="Award for Exceptional Results and School Representation (Ocenenie za výnimočné výsledky a reprezentáciu školy)"
                        description="Received a prestigious award for 'exceptional results and representation of the school,' presented and signed by Juraj Droba, the Governor of the Bratislava Region. This annual award recognizes individuals who have made significant contributions to the development and reputation of the region through their outstanding achievements."
                        issuer="Bratislava Region (Associated with SOŠTAR)"
                        year="Jun 2025"
                        rank="Regional Honor"
                    />
                    <AwardCard 
                        title="3rd Place in the National Round – Secondary School Professional Activity (SOČ)"
                        description="Achieved 3rd place in the National Round of the Secondary School Professional Activity Competition (Stredoškolská odborná činnosť) with my Next-Generation Antivirus Project. It incorporates multi-layered protection, including static app analysis, heuristic and anomaly detection, and AI-driven adaptive threat assessment."
                        issuer="State Institute of Professional Education (SIOV)"
                        year="Apr 2025"
                        rank="National Bronze"
                    />
                    <AwardCard 
                        title="1st Place in the Regional Round – Secondary School Professional Activity (SOČ)"
                        description="Achieved 1st place in the Regional Round of the Secondary School Professional Activity Competition (Stredoškolská odborná činnosť)."
                        issuer="State Institute of Professional Education (SIOV)"
                        year="Mar 2025"
                        rank="Regional Gold"
                    />
                    <AwardCard 
                        title="Certificate of Successful Completion - Junior Coder Competition"
                        description="Awarded for the successful completion of the JUNIOR KÓDER (Junior Coder) competition organized by the University of Žilina by the Faculty of Management Science and Informatics (Žilinská univerzita v Žiline, Fakulta riadenia a informatiky)."
                        issuer="University of Žilina"
                        year="Mar 2024"
                        rank="Certificate"
                    />
                </div>
            </div>

            {/* Timeline Column */}
            <div>
                <h3 className="text-2xl font-display font-bold text-white mb-10 flex items-center gap-3">
                    <GraduationCap className="text-purple-400" /> Education & Experience
                </h3>
                
                <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-white/10">
                    
                    {/* Education */}
                    <div className="relative pl-12">
                        <div className="absolute left-[15px] top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-purple-500 border-4 border-[#030014]"></div>
                        <span className="text-xs font-mono text-purple-400 mb-2 block">2022 – PRESENT</span>
                        <h4 className="text-xl font-bold text-white">SOSTAR</h4>
                        <p className="text-gray-400 text-sm mt-1">Mechanic of Computer Networks</p>
                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                            Focus on network architecture, hardware security, and IT infrastructure protection.
                        </p>
                    </div>

                    {/* Experience */}
                    <div className="relative pl-12">
                        <div className="absolute left-[15px] top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-cyan-500 border-4 border-[#030014]"></div>
                        <span className="text-xs font-mono text-cyan-400 mb-2 block">NOV – DEC 2023</span>
                        <h4 className="text-xl font-bold text-white">Erasmus+ Internship</h4>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                           <MapPin size={14} /> GreenTek, Portugal
                        </div>
                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                            Specialized professional internship focusing on computer hardware recycling and sustainable IT practices.
                        </p>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

const AwardCard: React.FC<{title: string, description: string, issuer: string, year: string, rank: string}> = ({ title, description, issuer, year, rank }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:scale-[1.01]"
  >
    <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">{rank}</span>
        <span className="text-xs font-mono text-gray-500 whitespace-nowrap ml-2">{year}</span>
    </div>
    <h4 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors mb-2 leading-snug">{title}</h4>
    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{description}</p>
    <div className="pt-3 border-t border-white/5 text-xs text-gray-600 flex items-center gap-2">
        <Award size={12} /> {issuer}
    </div>
  </motion.div>
);

export default Experience;