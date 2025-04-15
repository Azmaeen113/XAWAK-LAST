import React, { useRef, useEffect, useState } from 'react';

const ScrollVideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sparklesRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    // Create fire sparkles
    const createSparkles = () => {
      if (!sparklesRef.current) return;

      // Clear existing sparkles
      sparklesRef.current.innerHTML = '';

      // Create new sparkles
      for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');

        // Random properties for varied effect
        const size = Math.random() * 4 + 1; // 1-5px
        const duration = Math.random() * 4 + 3; // 3-7s
        const delay = Math.random() * 5; // 0-5s delay
        const startPosition = 30 + Math.random() * 40; // Random start position (30-70%)
        const startLeft = Math.random() * 30; // Random start left position (0-30%)

        // Apply styles
        Object.assign(sparkle.style, {
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: i % 3 === 0 ? '#FF4500' : (i % 3 === 1 ? '#FF8C00' : '#FFD700'),
          boxShadow: `0 0 ${size * 2}px ${i % 3 === 0 ? '#FF4500' : (i % 3 === 1 ? '#FF8C00' : '#FFD700')}`,
          opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8 opacity
          top: `${startPosition}%`,
          left: `${startLeft}%`,
          animation: `sparkleMove ${duration}s linear infinite ${delay}s`,
          transform: 'rotate(-15deg)',
          zIndex: '15'
        });

        sparklesRef.current.appendChild(sparkle);
      }
    };

    createSparkles();

    // Throttle function to limit how often the scroll handler runs
    const throttle = (callback: Function, delay: number) => {
      let lastCall = 0;
      return function(...args: any[]) {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCall = now;
          callback(...args);
        }
      };
    };

    // Function to update scroll progress
    const updateScrollProgress = () => {
      // Calculate how far down the page we've scrolled
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress (0 to 1)
      const progress = Math.min(Math.max(scrollPosition / (documentHeight - windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    // Throttled scroll handler (runs at most once every 50ms)
    const handleScroll = throttle(updateScrollProgress, 50);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial call to set scroll position
    updateScrollProgress();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="scroll-video"
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
    >
      {/* Background color as fallback */}
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Jupiter Video - cropped to center 768x768 pixels */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <div className="relative w-[768px] h-[768px] overflow-hidden rounded-none animate-jupiter-move">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              className="absolute w-auto h-auto min-w-[150%] min-h-[150%] opacity-70"
              src="/jupiterfinal.mp4"
              autoPlay
              loop
              muted
              playsInline
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

      {/* Fire sparkles container */}
      <div
        ref={sparklesRef}
        className="absolute inset-0 overflow-hidden z-10 pointer-events-none"
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 pointer-events-none"></div>
    </section>
  );
};

export default ScrollVideoSection;
