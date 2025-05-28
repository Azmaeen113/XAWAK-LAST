import React, { useRef, useEffect } from 'react';
import { Star, Zap, Globe, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.getBoundingClientRect().height || 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20;

      // Use custom smooth scrolling for better performance
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const duration = 800; // ms - longer duration for smoother feel
      let startTime: number | null = null;

      // Easing function for natural motion
      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo({
          top: startPosition + distance * easedProgress,
          behavior: 'auto' // Use our custom animation instead of browser's smooth scroll
        });

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          // Ensure we're exactly at the right position when animation ends
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto'
          });
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

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
      icon: <Star className="w-7 h-7 text-[#FFD700]" />,
      title: 'Built on XRPL',
      description: 'For lightning fast transactions'
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-4">
              The XAWAK Universe
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed font-roboto tracking-wide mb-8 max-w-2xl">
              <span className="text-[#FFD700]/80">XAWAK draws inspiration from the infinite cosmos</span>, encouraging users to expand their minds and consciousness
              alongside the ever-expanding universe. By gazing outward at the grand design of the cosmos and inward at
              the vastness of human consciousness, XAWAK fosters a deeper appreciation of existence and the mysteries of nature.
            </p>
            <div className="mt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 rounded-lg bg-gradient-to-br from-[#1E3A8A]/10 to-[#6A0DAD]/10 border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 shadow-lg shadow-[#FFD700]/5 hover:shadow-[#FFD700]/20 max-w-md"
                >
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[#1E3A8A]/30 to-[#6A0DAD]/30 rounded-lg border border-[#FFD700]/40 shadow-lg shadow-[#FFD700]/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold text-[#FFD700] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg font-roboto">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('#bundles')}
              className="mt-4 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FFD700]/20 font-orbitron group flex items-center gap-2"
            >
              Explore the Cosmos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative group">
            <div className="aspect-square relative">
              {/* Jupiter Image */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-black shadow-xl shadow-[#FFD700]/10 group-hover:shadow-[#FFD700]/30 transition-all duration-700">
                <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-[#FFD700]/10 group-hover:border-[#FFD700]/30 transition-all duration-700">
                  <video
                    ref={videoRef}
                    src="/jupiterfinal.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-auto h-auto min-w-full min-h-full max-w-none object-cover animate-slow-rotate"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      filter: 'brightness(1.2) contrast(1.2)'
                    }}
                  />
                </div>
              </div>

              {/* Cosmic particles effect */}
              <div className="absolute -inset-10 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/5 to-[#FFD700]/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;