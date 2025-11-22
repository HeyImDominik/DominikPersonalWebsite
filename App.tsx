import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Background />
      
      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default App;