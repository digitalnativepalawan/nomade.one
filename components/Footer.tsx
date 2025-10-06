
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-4 bg-black/30">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div>
                        <h3 className="text-xl font-bold tracking-widest mb-2">NOMADS.ONE</h3>
                        <p className="text-sm text-gray-400 max-w-xs">
                            NOMADS.ONE is a licensed platform – global payments powered by W3 Cards.
                        </p>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                        <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Tokenomics</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Partners</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Careers</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear() + 1} NOMADS.ONE. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
