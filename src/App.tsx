import React, { useEffect } from 'react';
import StarBackground from './components/StarBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import BundlesSection from './components/BundlesSection';
import TeamSection from './components/TeamSection';
import CommunitySection from './components/CommunitySection';
import WhitepaperSection from './components/WhitepaperSection';
import ScrollVideoSection from './components/ScrollVideoSection';
import Footer from './components/Footer';
import SparkleEffect from './components/SparkleEffect';
import { useMobileDetection } from './hooks/useMobileDetection';

function App() {
  const isMobile = useMobileDetection();

  // Use normal cursor for all devices
  useEffect(() => {
    document.body.style.cursor = 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Render sparkle effect for mouse movement
  const renderSparkleEffect = () => {
    // Only show sparkle effect on desktop
    if (isMobile) return null;
    return <SparkleEffect />;
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Sparkle effect for mouse movement - only on desktop */}
      {renderSparkleEffect()}

      <ScrollVideoSection />
      <StarBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <BundlesSection />
      <TeamSection />
      <CommunitySection />
      <WhitepaperSection />
      <Footer />
    </div>
  );
}

export default App;