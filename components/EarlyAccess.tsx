
import React, { useState } from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 mb-6">
        <h3 className="font-bold text-cyan-400 mb-3">{title}</h3>
        <div className="text-sm text-gray-300 space-y-2">{children}</div>
    </div>
);

const EarlyAccess: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        role: '',
        spend: '',
        currencies: 'USD, EUR, PHP',
        funding: 'Fiat',
        wallet: 'Custodial',
        referral: '',
        notes: '',
        agreed: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your application! We will be in touch.');
    };

    const inputStyle = "w-full bg-gray-800/50 p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60 outline-none transition-all duration-200";

    return (
        <section className="py-24 px-4" id="apply">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Apply for Early Access</h2>
                    <p className="text-gray-400 leading-relaxed">
                       We're onboarding hosts, freelancers, vendors, and power travelers in pilot hubs with cross-border spend. Early cohorts receive priority support, higher reward caps, and waived physical-card fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Info */}
                    <div>
                        <InfoCard title="Who should apply">
                            <ul className="list-disc list-inside">
                                <li>Hosts/operators with direct bookings and cross-border payouts</li>
                                <li>Freelancers and vendors transacting in multiple currencies</li>
                                <li>Community contributors in Bali, Lisbon, Mexico City (pilot)</li>
                            </ul>
                        </InfoCard>
                        <InfoCard title="Selection criteria">
                            <ul className="list-disc list-inside">
                                <li>Region fit & compliance readiness</li>
                                <li>Projected monthly volume & use case quality</li>
                                <li>KYC completeness and community contribution/referrals</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="What you'll need">
                            <ul className="list-disc list-inside">
                                <li>KYC: Government ID, selfie; L2 adds proof of address; L3 needs business docs</li>
                                <li>Optional non-custodial wallet address (if preferred)</li>
                                <li>Tax declarations (FATCA/CRS) where required</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Rollout timeline">
                            <ul className="list-disc list-inside">
                                <li>Review: 2–5 business days → virtual card immediately on approval</li>
                                <li>Physical card ships in 7–10 business days (region-dependent)</li>
                                <li>Onboarding: dashboard access, spend currency setup, Apple/Google Pay</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Founder-Cohort Perks">
                            <ul className="list-disc list-inside">
                                <li>Physical card fee waived</li>
                                <li>3% $DONE rewards for first 90 days (up to a cap)</li>
                                <li>Founder NFT badge & private community channel</li>
                            </ul>
                        </InfoCard>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                        <h3 className="text-2xl font-bold mb-6">Request Access</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="text-xs text-gray-400 block mb-1">FIRST NAME</label>
                                    <input id="firstName" type="text" name="firstName" onChange={handleInputChange} className={inputStyle} required aria-required="true" autoComplete="given-name" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="text-xs text-gray-400 block mb-1">LAST NAME</label>
                                    <input id="lastName" type="text" name="lastName" onChange={handleInputChange} className={inputStyle} required aria-required="true" autoComplete="family-name" />
                                </div>
                            </div>
                             <div>
                                <label htmlFor="email" className="text-xs text-gray-400 block mb-1">EMAIL</label>
                                <input id="email" type="email" name="email" onChange={handleInputChange} className={inputStyle} required aria-required="true" autoComplete="email"/>
                             </div>
                             <div>
                                <label htmlFor="country" className="text-xs text-gray-400 block mb-1">COUNTRY OF RESIDENCE</label>
                                <input id="country" type="text" name="country" onChange={handleInputChange} className={inputStyle} required aria-required="true" autoComplete="country-name" />
                             </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="role" className="text-xs text-gray-400 block mb-1">ROLE</label>
                                    <select id="role" name="role" onChange={handleInputChange} className={inputStyle} required aria-required="true">
                                        <option value="">Select...</option>
                                        <option>Host/Operator</option>
                                        <option>Freelancer</option>
                                        <option>Vendor</option>
                                        <option>Traveler</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="spend" className="text-xs text-gray-400 block mb-1">EXPECTED MONTHLY CARD SPEND (USD)</label>
                                    <input id="spend" type="number" name="spend" placeholder="e.g., 1500" onChange={handleInputChange} className={inputStyle} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="currencies" className="text-xs text-gray-400 block mb-1">MAIN CURRENCIES</label>
                                    <input id="currencies" type="text" name="currencies" value={formData.currencies} onChange={handleInputChange} className={inputStyle} />
                                </div>
                                <div>
                                    <label htmlFor="funding" className="text-xs text-gray-400 block mb-1">FUNDING PREFERENCE</label>
                                    <select id="funding" name="funding" onChange={handleInputChange} className={inputStyle}>
                                        <option>Fiat</option>
                                        <option>Crypto</option>
                                    </select>
                                </div>
                            </div>
                             <div>
                                <label htmlFor="wallet" className="text-xs text-gray-400 block mb-1">WALLET CHOICE</label>
                                <select id="wallet" name="wallet" onChange={handleInputChange} className={inputStyle}>
                                    <option>Custodial</option>
                                    <option>Non-Custodial</option>
                                </select>
                             </div>
                             <div>
                                <label htmlFor="referral" className="text-xs text-gray-400 block mb-1">REFERRAL CODE / COMMUNITY HANDLE</label>
                                <input id="referral" type="text" name="referral" placeholder="@handle or code" onChange={handleInputChange} className={inputStyle} autoComplete="off" />
                             </div>
                             <div>
                                <label htmlFor="notes" className="text-xs text-gray-400 block mb-1">NOTES (OPTIONAL)</label>
                                <textarea id="notes" name="notes" placeholder="Tell us about your use case..." onChange={handleInputChange} className={`${inputStyle} h-24`}></textarea>
                             </div>
                            
                            <div className="flex items-start space-x-3 pt-2">
                                <input type="checkbox" id="agree" name="agreed" onChange={handleInputChange} required aria-required="true" className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-500 bg-gray-800 text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"/>
                                <label htmlFor="agree" className="text-sm text-gray-400">I agree to the <a href="#" className="underline hover:text-cyan-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-gray-900">Terms</a> and <a href="#" className="underline hover:text-cyan-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-gray-900">Privacy Policy</a>.</label>
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <button type="submit" className="px-8 py-3 w-full font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 disabled:bg-gray-600 disabled:shadow-none disabled:from-gray-600 disabled:to-gray-700 disabled:scale-100 disabled:cursor-not-allowed disabled:brightness-100 focus:outline-none focus:ring-4 focus:ring-cyan-400/60" disabled={!formData.agreed}>Submit Application</button>
                            </div>
                             <p className="text-xs text-gray-500 pt-2">*Submitting does not guarantee issuance. Final availability, fees, and limits are set by the issuer/network and local regulations.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarlyAccess;