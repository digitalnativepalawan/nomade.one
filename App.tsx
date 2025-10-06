
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PowerOfOne from './components/PowerOfOne';
import NomadLife from './components/NomadLife';
import W3CardSection from './components/W3CardSection';
import Roadmap from './components/Roadmap';
import TokenUtility from './components/TokenUtility';
import Testimonials from './components/Testimonials';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';
import ComingSoonPopup from './components/ComingSoonPopup';
import LitepaperPopup from './components/LitepaperPopup';

const App: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLitepaperVisible, setLitepaperVisible] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (anchor) {
        const id = anchor.getAttribute('href');
        if (id && id.length > 1) { // Ensure it's not just "#"
          event.preventDefault();
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="bg-[#050505] text-gray-200 font-sans min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-gradient-radial from-purple-600/10 via-transparent to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onNavClick={() => setPopupVisible(true)} />
        <main className="flex-grow">
          <Hero />
          <PowerOfOne />
          <NomadLife />
          <W3CardSection />
          <Roadmap />
          <TokenUtility onShowLitepaper={() => setLitepaperVisible(true)} />
          <Testimonials />
          <EarlyAccess />
        </main>
        <Footer />
      </div>

      <ComingSoonPopup isOpen={isPopupVisible} onClose={() => setPopupVisible(false)} />
      <LitepaperPopup isOpen={isLitepaperVisible} onClose={() => setLitepaperVisible(false)} />
    </div>
  );
};

export default App;
