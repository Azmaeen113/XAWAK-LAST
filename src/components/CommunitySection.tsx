import React from 'react';
import { Users } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-[#FFD700]" />,
      value: '50K+',
      label: 'Community Members'
    }
  ];

  const testimonials = [
    {
      quote: "XAWAK has revolutionized how I think about blockchain technology. The speed and efficiency are unmatched.",
      author: "Michael R.",
      role: "Crypto Investor"
    },
    {
      quote: "The community support and development pace of XAWAK is incredible. Truly a game-changing project.",
      author: "Elena S.",
      role: "DeFi Developer"
    },
    {
      quote: "I've been in crypto for years, and XAWAK stands out with its innovative approach and strong fundamentals.",
      author: "David L.",
      role: "Blockchain Analyst"
    }
  ];

  return (
    <section id="community" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            Join the XAWAK Community
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Be part of a growing ecosystem of innovators and visionaries
          </p>
        </div>

        {/* Centered Community Members stat */}
        <div className="max-w-md mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-space-blue/10 rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-space-blue/20 to-space-purple/20 rounded-lg p-8 backdrop-blur-sm"
            >
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-[#FFD700] text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="px-8 py-4 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFE44D] transition-all duration-300 font-semibold"
          >
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;