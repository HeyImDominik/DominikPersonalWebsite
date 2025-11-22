import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none bg-[#030014]">
      {/* Hyper Blur Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob" />
      <div className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] bg-cyan-900/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />
      
      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

export default Background;