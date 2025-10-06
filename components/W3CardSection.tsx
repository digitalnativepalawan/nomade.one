
import React, { useState } from 'react';
import { GlobalAcceptanceIcon, MultiCurrencyIcon, EarningsIcon, SecureIcon, CheckCircleIcon } from './icons';

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
