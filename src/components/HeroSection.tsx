import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  // State to track the logo animation state
  const [logoAnimationState, setLogoAnimationState] = useState<'initial' | 'growing' | 'moving' | 'complete'>('initial');

  // State to track the content animation
  const [contentAnimationState, setContentAnimationState] = useState<'initial' | 'moving'>('initial');

  // Effect to handle the animation timing
  useEffect(() => {
    // First stage: Logo grows larger
    const growingTimer = setTimeout(() => {
      setLogoAnimationState('growing');
    }, 300); // Start growing after a short delay

    // Second stage: Logo moves to the corner
    const movingTimer = setTimeout(() => {
      setLogoAnimationState('moving');
    }, 1800); // 300ms initial delay + 1500ms for growing

    // Third stage: Content moves up to fill the space
    const contentMovingTimer = setTimeout(() => {
      setContentAnimationState('moving');
    }, 2000); // 1800ms for logo animation + 200ms delay

    return () => {
      clearTimeout(growingTimer);
      clearTimeout(movingTimer);
      clearTimeout(contentMovingTimer);
    };
  }, []);
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
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/20 via-[#6A0DAD]/20 to-transparent" />

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Star className="w-12 h-12 text-[#FFD700]/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Star className="w-8 h-8 text-[#FFD700]/30" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
          <Star className="w-16 h-16 text-[#FFD700]/10" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div
          className="space-y-6 transition-all duration-[2000ms] ease-in-out flex flex-col items-center"
          style={{
            transform: contentAnimationState === 'moving' ? 'translateY(-30vh)' : 'translateY(0)',
            marginTop: contentAnimationState === 'moving' ? '0' : '0'
          }}
        >
          {/* Logo with entrance animation and orbiting planets */}
          <div className="flex justify-center mb-12 overflow-visible">
            {logoAnimationState !== 'complete' && (
              <div
                className="relative transition-all duration-[1500ms] ease-in-out"
                style={{
                  transform: logoAnimationState === 'initial'
                    ? 'scale(1) translate(0, 0)'
                    : logoAnimationState === 'growing'
                    ? 'scale(1.9) translate(0, 100px)'
                    : 'scale(1) translate(-150%, -350px)',
                  opacity: 1,
                  position: 'relative',
                  zIndex: 30
                }}
              >
                {/* Main Logo */}
                <img
                  src="/logooo2.jpg"
                  alt="XAWAK Logo"
                  className="w-60 h-60 md:w-[21rem] md:h-[21rem] object-contain rounded-full shadow-xl shadow-[#FFD700]/40 z-20 relative"
                />
                <div className="absolute inset-0 bg-[#FFD700]/40 blur-2xl rounded-full z-10" />

                {/* Removed orbiting planets effect */}
              </div>
            )}
          </div>

          {/* Headline with Letter Glow Effect */}
          <div className="relative mb-6">
            {/* Headline text with letter glow */}
            <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-bold font-['Orbitron'] animate-fade-in text-center whitespace-pre-wrap">
              {/* First part of headline with word-by-word glow to prevent splitting */}
              <div className="inline">
                {/* Split text into words for glow effect */}
                {'Transcend the Speed of Light with '.split(' ').map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] mb-1">
                    {/* Split each word into letters */}
                    {word.split('').map((letter, letterIndex) => (
                      <span key={letterIndex} className="relative inline-block">
                        {/* Letter glow effect */}
                        <span
                          className="absolute inset-0 text-[#FFD700] blur-[2px] opacity-70 animate-pulse-glow z-0"
                          style={{ animationDuration: `${3 + Math.random()}s` }}
                          aria-hidden="true"
                        >
                          {letter}
                        </span>
                        {/* Actual letter */}
                        <span className="relative z-10 text-white">{letter}</span>
                      </span>
                    ))}
                  </span>
                ))}
              </div>

              {/* XAWAK with enhanced glow */}
              <span className="relative inline-block whitespace-nowrap">
                {/* Split XAWAK into individual letters */}
                {'XAWAK'.split('').map((letter, index) => (
                  <span key={index} className="relative inline-block">
                    {/* Multiple glow layers for XAWAK */}
                    <span
                      className="absolute inset-0 text-[#FFD700] blur-[4px] opacity-80 animate-pulse-glow z-0"
                      style={{ animationDuration: `${2 + Math.random()}s` }}
                      aria-hidden="true"
                    >
                      {letter}
                    </span>
                    <span
                      className="absolute inset-0 text-[#FFA500] blur-[2px] opacity-90 animate-pulse-glow z-0"
                      style={{ animationDuration: `${2.5 + Math.random()}s`, animationDelay: '0.5s' }}
                      aria-hidden="true"
                    >
                      {letter}
                    </span>
                    {/* Actual letter with gradient */}
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
                      {letter}
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Subtle light particles around letters */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, i) => {
                const size = Math.random() * 2 + 0.5; // 0.5-2.5px
                const x = Math.random() * 100; // 0-100%
                const y = Math.random() * 100; // 0-100%
                const delay = Math.random() * 5; // 0-5s delay
                const duration = Math.random() * 3 + 2; // 2-5s duration
                const color = i % 3 === 0 ? '#FFD700' : (i % 3 === 1 ? '#FFFFFF' : '#FFA500');

                return (
                  <span
                    key={i}
                    className="absolute rounded-full animate-pulse-glow"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: color,
                      boxShadow: `0 0 ${size * 2}px ${color}`,
                      left: `${x}%`,
                      top: `${y}%`,
                      opacity: Math.random() * 0.5 + 0.2, // 0.2-0.7 opacity
                      animationDuration: `${duration}s`,
                      animationDelay: `${delay}s`
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Subtitle - Centered taglines with enhanced styling and animations */}
          <div className="text-xl sm:text-2xl text-gray-300 mb-12 w-full px-4 mx-auto font-light leading-relaxed space-y-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-full text-center animate-tagline">
              <span className="text-[#FFD700] mr-2 opacity-80">-</span>
              <span>Beyond Light, Beyond Time <span className="text-[#FFD700]/80 font-medium">The Mind Travels First.</span></span>
            </div>
            <div className="flex items-center justify-center w-full text-center animate-tagline-delayed">
              <span className="text-[#FFD700] mr-2 opacity-80">-</span>
              <span>Light is Fast. <span className="text-[#FFD700]/80 font-medium">The Mind? Infinite.</span></span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#community"
              className="group px-8 py-4 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFE44D] transform hover:scale-105 transition-all duration-200 font-semibold flex items-center gap-2 shadow-lg shadow-[#FFD700]/20"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#community');
                // Add a small delay to ensure the section is loaded before scrolling to the CTA buttons
                setTimeout(() => {
                  const ctaSection = document.querySelector('#community .text-center:last-child');
                  if (ctaSection) {
                    const navbarHeight = document.querySelector('nav')?.getBoundingClientRect().height || 80;
                    const elementPosition = ctaSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }, 100);
              }}
            >
              Join the Odyssey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="group px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-black transform hover:scale-105 transition-all duration-200 font-semibold flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#community');
                // Add a small delay to ensure the section is loaded before scrolling to the CTA buttons
                setTimeout(() => {
                  const ctaSection = document.querySelector('#community .text-center:last-child');
                  if (ctaSection) {
                    const navbarHeight = document.querySelector('nav')?.getBoundingClientRect().height || 80;
                    const elementPosition = ctaSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }, 100);
              }}
            >
              Explore XAWAK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;