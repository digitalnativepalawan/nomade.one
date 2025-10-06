
import React from 'react';

const testimonials = [
  {
    quote: "This is the all-in-one platform I've been dreaming of. Can't wait for launch!",
    author: 'Sarah T.',
    role: 'Developer'
  },
  {
    quote: 'Finally, a payment system that understands the needs of a global citizen. Game changer.',
    author: 'Marco P.',
    role: 'Designer'
  },
  {
    quote: 'The ability to find jobs and book stays in one place, with crypto, is incredible.',
    author: 'Lena R.',
    role: 'Content Creator'
  }
];

const TestimonialCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 h-full flex flex-col justify-between">
    <blockquote className="text-lg italic text-gray-300 mb-6">"{quote}"</blockquote>
    <footer className="text-right">
      <p className="font-bold text-cyan-400">- {author}, <span className="text-gray-400 font-normal">{role}</span></p>
    </footer>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Nomads, by Nomads</h2>
        <p className="text-lg text-gray-400 mb-4">Join a global community that understands your lifestyle.</p>
        <p className="text-sm font-bold tracking-widest text-cyan-400 mb-16">FIND US IN: THAILAND, BALI, PHILIPPINES & MORE</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;