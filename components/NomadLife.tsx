
import React from 'react';
import { JobsIcon, StaysIcon, FoodIcon, AdsIcon } from './icons';

const services = [
  {
    icon: <JobsIcon />,
    title: 'Jobs',
    description: 'Find verified remote gigs and projects. Get paid instantly in crypto or fiat, your choice.'
  },
  {
    icon: <StaysIcon />,
    title: 'Stays',
    description: 'Book short-term or long-term accommodation with lower fees through our direct booking engine.'
  },
  {
    icon: <FoodIcon />,
    title: 'Food & Activities',
    description: 'Discover and pay local vendors for food and activities directly with your W3 Card.'
  },
  {
    icon: <AdsIcon />,
    title: 'Ads',
    description: 'Promote your skills, services, or products to the nomad community affordably and effectively.'
  }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:bg-gray-900/50">
    <div className="mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const NomadLife: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Live Your Best <span className="text-cyan-400">Nomad Life</span></h2>
        <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">Access a curated ecosystem of services designed for the modern digital nomad.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NomadLife;