import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamSection: React.FC = () => {
  // Define the pioneer colors with RGB values for elegant effects
  const pioneerColors = [
    {
      name: 'green',
      base: '#00FF00',
      rgb: 'rgb(0, 255, 0)',
      gradient: 'from-[#00FF00]/30 via-[#00FFAA]/20 to-[#00FF00]/30',
      glow: 'from-[#00FF00]/30 via-transparent to-transparent',
      text: 'text-[#00FF00]'
    },
    {
      name: 'red',
      base: '#FF0000',
      rgb: 'rgb(255, 0, 0)',
      gradient: 'from-[#FF0000]/30 via-[#FF5500]/20 to-[#FF0000]/30',
      glow: 'from-[#FF0000]/30 via-transparent to-transparent',
      text: 'text-[#FF0000]'
    },
    {
      name: 'blue',
      base: '#0000FF',
      rgb: 'rgb(0, 0, 255)',
      gradient: 'from-[#0000FF]/30 via-[#0055FF]/20 to-[#0000FF]/30',
      glow: 'from-[#0000FF]/30 via-transparent to-transparent',
      text: 'text-[#0000FF]'
    },
    {
      name: 'brown',
      base: '#8B4513',
      rgb: 'rgb(139, 69, 19)',
      gradient: 'from-[#8B4513]/30 via-[#A0522D]/20 to-[#8B4513]/30',
      glow: 'from-[#8B4513]/30 via-transparent to-transparent',
      text: 'text-[#8B4513]'
    }
  ];

  const team: TeamMember[] = [
    {
      name: 'Marshall',
      role: 'Moonshot',
      image: '/pioneer1.jpg',
      bio: 'Leading the quantum revolution in blockchain technology',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Constellation',
      role: 'Commander',
      image: '/pioneer2.jpg',
      bio: 'Architecting the future of decentralized systems',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Intergalactic',
      role: 'Pilot',
      image: '/pioneer3.jpg',
      bio: 'Mapping the trajectory of blockchain evolution',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Mia',
      role: 'Memeonaut',
      image: '/pioneer4.jpg',
      bio: 'Crafting the infrastructure of tomorrow',
      social: {
        github: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="team" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FF0000] animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.4,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-radial from-[#FF0000]/20 via-transparent to-transparent blur-3xl animate-pulse-glow" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-[#6A0DAD]/20 via-transparent to-transparent blur-3xl animate-pulse-glow" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-4">
            Meet the Pioneers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The visionaries and experts building the future of XAWAK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const color = pioneerColors[index % pioneerColors.length];
            return (
              <div
                key={index}
                className="relative group transform transition-all duration-500 hover:scale-105"
              >
                {/* Glowing border effect with RGB */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${color.gradient} rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 animate-rgb-pulse`}
                  style={{ animationDuration: `${4 + index}s` }}
                ></div>

                <div
                  className={`relative overflow-hidden rounded-lg aspect-square shadow-lg transition-all duration-500`}
                  style={{
                    boxShadow: `0 4px 20px rgba(${color.rgb.replace('rgb(', '').replace(')', '')}, 0.1)`
                  }}
                >
                  {/* Background glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-radial ${color.glow} opacity-0 group-hover:opacity-100 transition-all duration-500 animate-rgb-pulse`}
                    style={{ animationDuration: `${3 + index}s` }}
                  ></div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />

                  {/* Cosmic Overlay with animation and RGB */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${color.gradient} mix-blend-overlay animate-pulse-glow`}
                    style={{ animationDuration: `${8 + index}s` }}
                  />

                  {/* Interactive Particles */}
                  <div className="absolute inset-0 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full animate-ping-slow"
                        style={{
                          backgroundColor: color.base,
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${2 + Math.random() * 3}s`,
                          opacity: 0.6,
                          filter: 'brightness(1.5)'
                        }}
                      />
                    ))}
                  </div>

                  {/* Member info overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-1 font-orbitron">{member.name}</h3>
                    <p className={`${color.text} font-semibold mb-2 animate-rgb-text-pulse`} style={{ animationDuration: `${3 + index}s` }}>{member.role}</p>
                  </div>
                </div>

                <div
                  className="relative mt-6 p-4 rounded-lg backdrop-blur-sm transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(${color.rgb.replace('rgb(', '').replace(')', '')}, 0.1), rgba(30, 58, 138, 0.1), rgba(106, 13, 173, 0.1))`
                  }}
                >
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                  <div className="flex justify-center space-x-4">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:scale-110 transition-all duration-300 transform"
                      >
                        <Twitter className="w-5 h-5 hover:animate-rgb-text-pulse" style={{ color: color.base }} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:scale-110 transition-all duration-300 transform"
                      >
                        <Linkedin className="w-5 h-5 hover:animate-rgb-text-pulse" style={{ color: color.base }} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:scale-110 transition-all duration-300 transform"
                      >
                        <Github className="w-5 h-5 hover:animate-rgb-text-pulse" style={{ color: color.base }} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;