import React from 'react';

const roadmapPhases = [
  { phase: 1, month: 1, title: 'PHASE 1 - MONTH 1', description: 'Research & strategy: define use cases, compliance pathways, and token/stablecoin rails.' },
  { phase: 2, month: 'M1 - M3', title: 'PHASE 2 - M1 - M3', description: 'Bank & network partners (Visa/Mastercard). Begin issuer-processor integration & licensing.' },
  { phase: 3, month: 'M2 - M5', title: 'PHASE 3 - M2 - M5', description: 'APIs, wallet, smart contracts; dashboard for balance, staking, security controls.' },
  { phase: 4, month: 'M3 - M6', title: 'PHASE 4 - M3 - M6', description: 'KYC/AML, PCI-DSS, audits & pen-tests; fraud rules and monitoring.' },
  { phase: 5, month: 'M5 - M7', title: 'PHASE 5 - M5 - M7', description: 'Pilot with virtual cards in Bali/Lisbon/Mexico City; iterate on UX and fees.' },
  { phase: 6, month: 'M6 - M8', title: 'PHASE 6 - M6 - M8', description: 'Physical EMV cards, Apple/Google Pay enablement, fulfillment & personalization.' }
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Web3 Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12 max-w-7xl mx-auto">
          {roadmapPhases.map(item => (
            <div key={item.phase} className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 h-full">
              <h3 className="font-bold text-cyan-400 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#apply" className="block text-center px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95">Apply for Early Access</a>
            <button className="px-8 py-3 font-semibold rounded-full bg-transparent border border-white/30 text-gray-200 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_theme(colors.cyan.500/0.5)] active:scale-95 active:bg-cyan-900/20">Learn How It Works</button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;