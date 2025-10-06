
import React from 'react';
import { EarnIcon, StakeIcon, SpendIcon } from './icons';

const utilities = [
  {
    icon: <EarnIcon />,
    title: 'Earn',
    description: 'Get cashback, rewards, and referral bonuses in $DONE.'
  },
  {
    icon: <StakeIcon />,
    title: 'Stake',
    description: 'Stake tokens to boost visibility for your profile, listings, or ads.'
  },
  {
    icon: <SpendIcon />,
    title: 'Spend',
    description: 'Use $DONE to pay for platform fees, premium features, and services.'
  }
];

const UtilityCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="text-center p-8">
    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-black/20 border border-white/10 text-cyan-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 max-w-xs mx-auto">{description}</p>
  </div>
);

const TokenUtility: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">$DONE Token Utility</h2>
        <p className="text-lg text-gray-400 mb-16">The native token that powers the NOMADS.ONE ecosystem.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {utilities.map((utility, index) => (
            <UtilityCard key={index} {...utility} />
          ))}
        </div>
        <div className="mt-16">
          <button className="px-8 py-3 font-semibold rounded-full bg-transparent border border-white/30 text-gray-200 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_theme(colors.cyan.500/0.5)] active:scale-95 active:bg-cyan-900/20">
            Read Litepaper
          </button>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;