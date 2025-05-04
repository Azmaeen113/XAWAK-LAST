import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const SparkleEffect: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  // Handle mouse movement
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset moving state after mouse stops
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  // Create sparkles when mouse is moving
  useEffect(() => {
    if (!isMoving) return;

    const interval = setInterval(() => {
      // Create new sparkle
      const newSparkle: Sparkle = {
        id: Date.now(),
        x: mousePosition.x,
        y: mousePosition.y,
        size: Math.random() * 10 + 5, // 5-15px
        opacity: 1
      };

      setSparkles(prev => [...prev, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
      }, 1000);
    }, 50);

    return () => clearInterval(interval);
  }, [isMoving, mousePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-[#FFD700] animate-ping-slow"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.7)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect;
