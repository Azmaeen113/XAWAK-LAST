import React, { useRef, useEffect } from 'react';

const InfinityLogoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simple direct approach to play the video
    const playVideo = () => {
      const video = videoRef.current;
      if (!video) return;

      // Set video properties
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      // Try to play
      video.play().catch(error => {
        console.error('Video play failed:', error);
      });
    };

    // Play video when component mounts
    playVideo();

    // Add click event to document to help with autoplay restrictions
    const handleDocumentClick = () => {
      playVideo();
    };

    document.addEventListener('click', handleDocumentClick, { once: true });

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <section id="infinity-logo" className="relative w-full h-screen overflow-hidden">
      {/* Full-screen video container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Enhanced glowing border */}
        <div className="absolute inset-0 border-t border-b border-[#1E90FF]/50 shadow-[0_0_50px_rgba(30,144,255,0.5)] z-10"></div>

        {/* Background color as fallback */}
        <div className="absolute inset-0 bg-black z-0"></div>

        {/* Infinity Video - full screen with enhanced size and scale effect */}
        <div className="absolute inset-0 scale-125 transform-gpu overflow-hidden z-1">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/planetjupiter.mp4" /* Using planetjupiter.mp4 instead since it's a copy of infinity.mp4 */
            loop
            muted
            playsInline
            autoPlay
            controls={false}
          />
        </div>

        {/* Video overlay gradient - reduced opacity for more vibrant video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/40 pointer-events-none z-2"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4">
        {/* Bottom text - enhanced with larger size and glow */}
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <p className="text-[#87CEEB] text-xl md:text-2xl font-medium tracking-wider drop-shadow-[0_0_8px_rgba(135,206,235,0.6)]">
            Cosmic innovation in motion
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfinityLogoSection;
