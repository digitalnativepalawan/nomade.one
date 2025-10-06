
import React from 'react';

interface HeaderProps {
  onNavClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-widest">
          NOMADS.ONE
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={onNavClick} className="hover:text-cyan-400 transition-colors">Stays</button>
          <button onClick={onNavClick} className="hover:text-cyan-400 transition-colors">W3 Card</button>
          <button onClick={onNavClick} className="hover:text-cyan-400 transition-colors">Community</button>
          <button onClick={onNavClick} className="hover:text-cyan-400 transition-colors">Blog</button>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block px-5 py-2 text-sm font-semibold rounded-full bg-transparent border border-white/20 text-gray-200 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_theme(colors.cyan.500/0.4)] active:scale-95">Log In</button>
          <button onClick={onNavClick} className="hidden sm:block px-5 py-2 text-sm font-semibold rounded-full bg-transparent border border-white/20 text-gray-200 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_theme(colors.cyan.500/0.4)] active:scale-95">Connect Wallet</button>
          <button className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
