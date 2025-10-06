
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-32 md:py-48 px-4">
      <div className="container mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] text-gray-400 mb-4">NOMADS.ONE</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
          Life Without <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">Borders</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 tracking-widest">ONE WALLET. ONE WORLD.</p>
        <div className="flex justify-center items-center space-x-4">
          <button className="px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95">
            Create Account
          </button>
          <button className="px-8 py-3 font-semibold rounded-full bg-transparent border border-white/30 text-gray-200 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_theme(colors.cyan.500/0.5)] active:scale-95 active:bg-cyan-900/20">
            Get W3 Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;