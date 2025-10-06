
import React from 'react';

interface LitepaperPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LitepaperPopup: React.FC<LitepaperPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="litepaper-title"
    >
      <div 
        className="bg-gray-900/90 border border-cyan-500/50 rounded-2xl max-w-3xl w-full text-left shadow-2xl shadow-cyan-500/20 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-700/50 flex justify-between items-center flex-shrink-0">
            <div className="flex flex-col">
                <h2 id="litepaper-title" className="text-2xl font-bold text-cyan-400">NOMADS.ONE Litepaper</h2>
                <p className="text-sm text-gray-400">Life Without Borders - October 2025</p>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto text-gray-300 space-y-6">
            <section>
                <h3 className="text-xl font-bold text-white mb-3">Introduction</h3>
                <p className="mb-4">Travel has always been about connection. In the early days of short-term rentals, travelers and property owners built trust directly through word-of-mouth, local advertisements, and personal interactions. Guests would often book by phone or pay in cash, creating personal bonds and authentic travel experiences.</p>
                <p className="mb-4">As technology advanced, online platforms made booking easier and more standardized. However, this convenience came at a cost. Online Travel Agencies (OTAs) such as Airbnb quickly rose to dominate the market, centralizing listings, imposing policies, and capturing outsized profits. While travelers gained convenience, they paid higher fees, and operators lost control of their businesses.</p>
                <p>Today, the industry is at a crossroads. Digital nomads, remote workers, and independent travelers represent one of the fastest-growing demographics in the global economy, yet their needs are poorly served by traditional platforms. NOMADS.ONE is building a new model: a decentralized, community-owned travel and lifestyle ecosystem powered by blockchain, designed to restore trust, reduce costs, and create a truly borderless way of living and working.</p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">The Problem</h3>
                <p className="mb-4">The global travel and nomad economy is massive, but it is constrained by deep inefficiencies. Airbnb and other OTAs charge 14–16% fees, cutting into host earnings and inflating costs for travelers. Bank remittance fees often range from 6–10%, creating additional burdens for digital nomads working across borders. Platforms impose policies that can override host autonomy, a weakness that was laid bare during the COVID-19 pandemic when cancellations left hosts without income and guests without clarity.</p>
                <p className="mb-4">Trust has also been eroded. Centralized dispute mechanisms frequently side with one party, creating dissatisfaction and undermining fairness. Independent hosts and small operators are often invisible in a market dominated by corporate marketing budgets. Meanwhile, nomads are forced to stitch together solutions across fragmented channels — from WhatsApp chats to Facebook groups — just to secure bookings or find work.</p>
                <p>These inefficiencies and inequities add up to billions in unnecessary costs every year. Nomads, freelancers, and small operators deserve better.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">Market Opportunity</h3>
                <p className="mb-4">The nomad economy is no longer a niche — it is a global force. In 2025, there are an estimated 40 million digital nomads worldwide, and this number is growing by 10–12% annually. Collectively, they represent over $1.5 trillion in annual spending power, spread across accommodation, workspaces, food, transportation, and experiences.</p>
                <p className="mb-4">The vacation rental market alone is projected to reach $119 billion by 2027 (Statista), while the freelance and remote work economy exceeds $500 billion annually (Upwork, 2024). If NOMADS.ONE captures even 0.5% of this total market, it represents a potential of $7.5 billion in GMV per year.</p>
                <p>This is a generational opportunity to build the financial and lifestyle infrastructure for a borderless, digital-first community.</p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">Our Solution</h3>
                <p className="mb-4">NOMADS.ONE offers a unified platform where digital nomads can live, work, and thrive. At its core, NOMADS.ONE integrates jobs, stays, food, activities, ads, and payments into a single ecosystem, powered by blockchain technology and the $DONE token.</p>
                <p className="mb-4">For travelers, NOMADS.ONE provides transparent peer-to-peer listings through decentralized search, AI-powered discovery, and flexible payment options that include both crypto and fiat. This ensures lower costs, personalized travel experiences, and freedom from the opaque algorithms of centralized OTAs.</p>
                <p className="mb-4">For operators, NOMADS.ONE delivers complete ownership and control. Properties can be listed on-chain directly or connected to existing platforms through integration tools. Operators retain control of pricing, data, and reputation. With blockchain-recorded reviews and transparent booking histories, trust is rebuilt on verifiable foundations rather than the policies of a single corporation.</p>
                <p>Payments are enabled through W3 Cards, a borderless wallet and debit card solution integrated into the platform. This allows instant global transactions with lower fees, cashback rewards, and seamless crypto-to-fiat conversion.</p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">The $DONE Token</h3>
                <p className="mb-4">The $DONE token is the lifeblood of the NOMADS.ONE ecosystem, serving as a utility, rewards, and governance asset.</p>
                <p className="mb-4">Users earn $DONE as cashback for bookings, job payments, and card transactions, incentivizing engagement and loyalty. Hosts, freelancers, and advertisers can stake tokens to increase visibility, creating a dynamic reputation and discovery system. All fees within the platform — from bookings to ads — can be paid in $DONE at discounted rates, driving ongoing demand.</p>
                <p className="mb-4">A portion of tokens collected through fees are burned, ensuring deflationary pressure as usage grows. The community also participates in governance through token voting, deciding on upgrades, new features, and treasury allocations.</p>
                <p>The token supply is fixed at 1 billion $DONE, with 30% allocated to community rewards, 25% to ecosystem growth, 20% to team (with vesting), 15% to strategic investors and partners, and 10% to public sale and liquidity.</p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">Revenue Model</h3>
                <p className="mb-4">NOMADS.ONE generates revenue through multiple streams. Booking and transaction fees are set at 3–5%, significantly lower than OTAs’ 15%, while still creating sustainable income. Advertising offers freelancers and hosts affordable access to targeted audiences at lower costs than LinkedIn or Facebook, where CPCs average $5–8 per click. Subscription tiers, represented by Nomad Passport NFTs, offer premium benefits such as insurance, co-working credits, and enhanced rewards.</p>
                <p>The platform also earns from currency conversions as payments flow between fiat and crypto, capturing spreads while still undercutting banks’ 6–10% fees. This creates a sustainable loop: users save money, the platform earns, and $DONE gains utility.</p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">Roadmap</h3>
                <p>NOMADS.ONE is launching in carefully chosen hubs where digital nomads thrive, such as Bali, Lisbon, and Mexico City.</p>
                <ul className="list-disc list-inside my-4 space-y-2">
                    <li><span className="font-bold">Phase 1 (2025):</span> Launch W3 Cards and the jobs marketplace.</li>
                    <li><span className="font-bold">Phase 2 (2026):</span> Add stays, food, and activities marketplaces.</li>
                    <li><span className="font-bold">Phase 3 (2027):</span> Release Nomad Passport NFTs, staking rewards, and governance features.</li>
                    <li><span className="font-bold">Phase 4 (2028+):</span> Expand globally to become the default wallet and lifestyle OS of the nomad economy.</li>
                </ul>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">Community and Participation</h3>
                <p className="mb-4">NOMADS.ONE is built for nomads, by nomads. Our governance model ensures that community members shape the future of the ecosystem. Token holders can propose and vote on policies, while developers, hosts, and travelers contribute to building the infrastructure of the platform.</p>
                <p>Early adopters will be rewarded with bonus tokens, NFT badges, and premium access to features. The community will be supported through regular updates, open forums, and partnerships with co-living, co-working, and travel networks worldwide.</p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">Conclusion</h3>
                <p className="mb-4">NOMADS.ONE is more than a travel platform — it is a movement to create a borderless lifestyle economy. By combining blockchain technology, tokenized incentives, and community ownership, NOMADS.ONE reduces costs, restores trust, and empowers users to live without borders.</p>
                <p>With 40 million nomads and $1.5 trillion in annual spending power, the opportunity is clear. NOMADS.ONE will redefine how nomads work, travel, and connect — delivering a platform where freedom, transparency, and community ownership come first.</p>
            </section>

            <p className="text-center font-bold text-lg text-cyan-400 pt-4">👉 One Wallet. One World. One Community.</p>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1);
        }
        /* Custom scrollbar for webkit browsers */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #06b6d4; /* cyan-500 */
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #0891b2; /* cyan-600 */
        }
      `}</style>
    </div>
  );
};

export default LitepaperPopup;
