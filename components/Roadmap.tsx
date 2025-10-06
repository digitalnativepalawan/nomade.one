import React from 'react';

const roadmapPhases = [
  { phase: 1, month: 1, title: 'PHASE 1 - MONTH 1', description: 'Research & strategy: define use cases, compliance pathways, and token/stablecoin rails.' },
  { phase: 2, month: 'M1 - M3', title: 'PHASE 2 - M1 - M3', description: 'Bank & network partners (Visa/Mastercard). Begin issuer-processor integration & licensing.' },
  { phase: 3, month: 'M2 - M5', title: 'PHASE 3 - M2 - M5', description: 'APIs, wallet, smart contracts; dashboard for balance, staking, security controls.' },
  { phase: 4, month: 'M3 - M6', title: 'PHASE 4 - M3 - M6', description: 'KYC/AML, PCI-DSS, audits & pen-tests; fraud rules and monitoring.' },
  { phase: 5, month: 'M5 - M7', title: 'PHASE 5 - M5 - M7', description: 'Pilot with virtual cards in Bali/Lisbon/Mexico City; iterate on UX and fees.' },
  { phase: 6, month: 'M6 - M8', title: 'PHASE 6 - M6 - M8', description: 'Physical EMV cards, Apple/Google Pay enablement, fulfillment & personalization.' }
];

const W3CardVisual: React.FC = () => (
    <div className="group w-full max-w-sm mx-auto bg-[#0A0A0A] text-white p-6 rounded-2xl shadow-2xl border border-purple-500/30 aspect-[1.586/1] transition-all duration-500 ease-in-out cursor-pointer [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateY(8deg)_rotateX(-2deg)] hover:shadow-[0_10px_40px_rgba(139,92,246,0.3)] hover:border-purple-400/60 relative overflow-hidden font-['Roboto']">
      
      {/* Shine effect on hover */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-1/2 transition-transform duration-700 ease-in-out"></div>
      
      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between text-gray-200">
        
        {/* Top Row: Bank Name & Card Type */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
              <span className="font-semibold tracking-wider text-base">NOMADS.ONE</span>
          </div>
          <div className="font-semibold tracking-wider text-sm">W3 CARD</div>
        </div>
  
        {/* Middle Area: Chip, Number, etc. */}
        <div className="flex-grow flex flex-col justify-center space-y-4 -mt-2">
            <div className="flex justify-between items-center">
                {/* Chip */}
                <div className="w-12 h-10 bg-gradient-to-br from-[#fde047] to-[#eab308] rounded-md flex items-center justify-center border border-yellow-700/50">
                    <div className="w-10 h-8 border border-yellow-500/80 rounded-sm grid grid-cols-2 gap-px p-0.5">
                        <div className="border-r border-b border-yellow-500/80"></div>
                        <div className="border-b border-yellow-500/80"></div>
                        <div className="border-r border-yellow-500/80"></div>
                        <div></div>
                    </div>
                </div>
                 {/* Contactless Symbol */}
                <div className="w-7 h-7">
                    <svg className="w-full h-full text-white transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M7.5 12.5a5 5 0 0 1 5-5m-5 5a5 5 0 0 0 5 5m0-10a9 9 0 0 1 9 9m-9-9a9 9 0 0 0-9 9" />
                    </svg>
                </div>
            </div>
  
            <div>
                <div className="font-mono text-2xl md:text-3xl tracking-wider text-gray-100 flex justify-between">
                    <span>4532</span>
                    <span>3100</span>
                    <span>9999</span>
                    <span>1049</span>
                </div>
                <div className="font-mono text-sm tracking-widest text-gray-300 ml-1 mt-1">
                    6324
                </div>
            </div>
        </div>
        
        {/* Bottom Row: Cardholder Name & Expiry */}
        <div className="flex justify-between items-end">
          <div className="font-mono text-base tracking-wider uppercase">
              Cardholder Name
          </div>
          <div className="text-right flex items-center space-x-2">
              <div className="text-[10px] text-gray-400 leading-tight uppercase font-sans">Expires<br/>End</div>
              <div className="font-mono text-base">00-00</div>
          </div>
        </div>
      </div>
    </div>
);

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5">
            <h2 className="text-4xl font-bold mb-8">Web3 Roadmap (6–12 months)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadmapPhases.map(item => (
                <div key={item.phase} className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <h3 className="font-bold text-cyan-400 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/5 w-full">
            <div className="mb-12">
                <W3CardVisual />
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#apply" className="block text-center px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95">Apply for Early Access</a>
                <button className="px-8 py-3 font-semibold rounded-full bg-transparent border border-white/30 text-gray-200 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_theme(colors.cyan.500/0.5)] active:scale-95 active:bg-cyan-900/20">Learn How It Works</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;