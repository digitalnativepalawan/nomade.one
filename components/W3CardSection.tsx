import React, { useState } from 'react';
import { GlobalAcceptanceIcon, MultiCurrencyIcon, EarningsIcon, SecureIcon, CheckCircleIcon } from './icons';

const W3CardVisual: React.FC = () => (
    <div className="group w-full max-w-sm mx-auto bg-gray-900 text-white p-6 rounded-2xl shadow-2xl border border-purple-500/30 aspect-[1.586/1] transition-all duration-500 ease-in-out cursor-pointer [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateY(8deg)_rotateX(-2deg)] hover:shadow-[0_10px_40px_rgba(139,92,246,0.3)] hover:border-purple-400/60 relative overflow-hidden font-['Roboto']">
      
      {/* New: Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a112a] via-[#050505] to-[#111827] z-[-2]"></div>
      
      {/* New: Faint grid pattern overlay */}
      <div 
        className="absolute inset-0 z-[-1] opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Improved shine effect */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-1/2 transition-transform duration-700 ease-in-out"></div>
      
      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between text-gray-200">
        
        {/* Top Row: Bank Name & Card Type */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
              <span className="font-semibold tracking-wider text-base" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>NOMADS.ONE</span>
          </div>
          <div className="font-semibold tracking-wider text-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>W3 CARD</div>
        </div>
  
        {/* Middle Area: Chip, Number, etc. */}
        <div className="flex-grow flex flex-col justify-center space-y-4 -mt-2">
            <div className="flex justify-between items-center">
                {/* Improved Chip */}
                <div className="w-12 h-10 bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-600 rounded-md flex items-center justify-center border border-yellow-700/50 shadow-inner shadow-black/30">
                    <div className="w-10 h-8 border border-yellow-500/80 rounded-sm grid grid-cols-2 gap-px p-0.5">
                        <div className="border-r border-b border-yellow-600/60"></div>
                        <div className="border-b border-yellow-600/60"></div>
                        <div className="border-r border-yellow-600/60"></div>
                        <div className="bg-gradient-to-br from-yellow-600/50 to-yellow-800/50"></div>
                    </div>
                </div>
                 {/* New: Holographic Logo (e.g., Visa/MC style) */}
                <div className="w-16 h-10 rounded-md bg-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-red-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-hologram"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-red-500/80 opacity-80 -mr-2"></div>
                        <div className="w-6 h-6 rounded-full bg-yellow-400/80 opacity-80 -ml-2 mix-blend-screen"></div>
                    </div>
                </div>
            </div>
  
            <div>
                {/* Improved Number Typography */}
                <div 
                  className="font-mono text-xl sm:text-2xl lg:text-3xl tracking-wider text-gray-100 flex justify-between"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.2)' }}
                >
                    <span>4532</span>
                    <span>3100</span>
                    <span>9999</span>
                    <span>1049</span>
                </div>
                <div className="font-mono text-xs sm:text-sm tracking-widest text-gray-300 ml-1 mt-1">
                    6324
                </div>
            </div>
        </div>
        
        {/* Bottom Row: Cardholder Name & Expiry */}
        <div className="flex justify-between items-end">
          <div 
            className="font-mono text-sm sm:text-base tracking-wider uppercase"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
          >
              Cardholder Name
          </div>
          <div className="text-right flex items-center space-x-2">
              <div className="text-[10px] text-gray-400 leading-tight uppercase font-sans">Expires<br/>End</div>
              <div className="font-mono text-sm sm:text-base">00/00</div>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes hologram {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-hologram {
            background-size: 200% 200%;
            animation: hologram 5s ease infinite;
        }
       `}</style>
    </div>
);

const W3CardSection: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');

  const benefitsData = {
    USD: {
      monthlyFee: '$0*',
    },
    EUR: {
      monthlyFee: '€0*',
    },
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">W3 Card – Borderless Payments for a Borderless Life</h2>
          <p className="text-gray-400 leading-relaxed">
            The W3 Card is your financial passport. Every booking, gig, or payout on NOMADS.ONE can be routed straight back to your multi-currency card, so you can spend instantly online or in-store worldwide. With crypto → fiat conversions, lower fees than banks, and cashback in $DONE, your daily spending becomes a growing stake in the community you belong to.
          </p>
        </div>

        {/* Mobile-only card display */}
        <div className="lg:hidden mb-12">
          <W3CardVisual />
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">Why it matters</h3>
            <p className="text-gray-400 mb-8">
              Nomads shouldn't juggle banks, apps, and exchange counters. W3 Card unifies it all: global acceptance via major networks, instant stablecoin payments, and a wallet-native dashboard to manage balances, staking, and security.
            </p>
            
            <div className="flex justify-end mb-4">
              <div className="bg-gray-800/60 p-1 rounded-full flex items-center text-sm">
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-1 rounded-full transition-colors duration-300 ${currency === 'USD' ? 'bg-cyan-500/50 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                >
                  USD
                </button>
                <button 
                  onClick={() => setCurrency('EUR')}
                  className={`px-4 py-1 rounded-full transition-colors duration-300 ${currency === 'EUR' ? 'bg-cyan-500/50 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                >
                  EUR
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-2 text-center">
                <div className="p-4"><div className="text-xs text-gray-400">CASHBACK</div><div className="text-lg font-bold">2-3% in $DONE</div></div>
                <div className="p-4"><div className="text-xs text-gray-400">NETWORKS</div><div className="text-lg font-bold">Visa / MC</div></div>
                <div className="p-4"><div className="text-xs text-gray-400">FX FEES</div><div className="text-lg font-bold">&lt; Banks</div></div>
                <div className="p-4"><div className="text-xs text-gray-400">MONTHLY FEE</div><div className="text-lg font-bold">{benefitsData[currency].monthlyFee}</div></div>
            </div>
            <p className="text-xs text-gray-500 text-center mb-8">*With qualifying activity.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 mt-1"><GlobalAcceptanceIcon /></div>
                <div>
                  <h4 className="font-bold">Global Acceptance</h4>
                  <p className="text-sm text-gray-400">Use online or in-store anywhere major cards are accepted.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 mt-1"><MultiCurrencyIcon /></div>
                <div>
                  <h4 className="font-bold">Multi-Currency</h4>
                  <p className="text-sm text-gray-400">Pay in local fiat, stablecoins, or crypto with instant conversion.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 mt-1"><EarningsIcon /></div>
                <div>
                  <h4 className="font-bold">Earnings Back on Card</h4>
                  <p className="text-sm text-gray-400">Bookings, jobs, and activities pay straight onto your card balance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 mt-1"><SecureIcon /></div>
                <div>
                  <h4 className="font-bold">Secure & Compliant</h4>
                  <p className="text-sm text-gray-400">KYC/AML onboarding, PCI-DSS, and bank-level fraud monitoring.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
            {/* Desktop-only card display */}
            <div className="hidden lg:block mb-10">
                <W3CardVisual />
            </div>
            <h3 className="text-2xl font-bold mb-6">How the money flows</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1"><CheckCircleIcon /></span>
                <span>Book a stay, complete a gig, or get paid by a vendor → funds settle to your wallet → auto-top-up converts to local currency for instant spend.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1"><CheckCircleIcon /></span>
                <span>Custodial & non-custodial wallet options</span>
              </li>
               <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1"><CheckCircleIcon /></span>
                <span>Apple Pay / Google Pay support</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1"><CheckCircleIcon /></span>
                <span>Stablecoin rails with bank payout corridors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default W3CardSection;