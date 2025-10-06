
import React from 'react';
import { WalletIcon, CardIcon, CommunityIcon, PlatformIcon } from './icons';

const features = [
  {
    icon: <WalletIcon />,
    title: 'One Wallet',
    description: 'Global payments, crypto/fiat exchange, and borderless payouts in a single, secure wallet.'
  },
  {
    icon: <CardIcon />,
    title: 'One Card',
    description: 'Spend anywhere with the W3 Card. Earn cashback in $DONE tokens on every purchase.'
  },
  {
    icon: <CommunityIcon />,
    title: 'One Community',
    description: 'Connect with fellow nomads, find jobs, share experiences, and build your network.'
  },
  {
    icon: <PlatformIcon />,
    title: 'One Platform',
    description: 'Your entire nomad life—jobs, stays, food, and ads—all seamlessly integrated.'
  }
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:bg-gray-900/50">
    <div className="mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PowerOfOne: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Power of <span className="text-cyan-400">One</span></h2>
        <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">A unified platform to manage your entire nomad lifestyle, from work and travel to payments and community.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerOfOne;