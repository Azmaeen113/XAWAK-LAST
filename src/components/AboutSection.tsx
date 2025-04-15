import React, { useRef, useEffect } from 'react';
import { Star, Zap, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Effect to handle smooth video looping
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to handle the timeupdate event
    const handleTimeUpdate = () => {
      // If we're near the end of the video, jump back slightly to create a seamless loop
      if (video.currentTime > video.duration - 0.3) {
        video.currentTime = 0.1;
      }
    };

    // Add event listener
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const features = [
    {
      icon: <Star className="w-6 h-6 text-[#FFD700]" />,
      title: 'Revolutionary Technology',
      description: 'Pushing the boundaries of blockchain innovation'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FFD700]" />,
      title: 'Lightning Fast',
      description: 'Instant transactions at minimal cost'
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FFD700]" />,
      title: 'Global Access',
      description: 'Available worldwide with no restrictions'
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-orbitron font-bold text-white">
              The XAWAK Universe
            </h2>
            <p className="text-gray-300 text-lg">
              XAWAK represents the next evolution in blockchain technology,
              combining cutting-edge innovation with unparalleled security and
              scalability. Our mission is to create a decentralized ecosystem
              that transcends traditional boundaries.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-space-blue/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-md hover:bg-[#FFD700] hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square relative">
              {/* Jupiter Image */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-black">
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <video
                    ref={videoRef}
                    src="/jupiterfinal.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-auto h-auto min-w-full min-h-full max-w-none object-cover"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotate(-15deg)',
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;