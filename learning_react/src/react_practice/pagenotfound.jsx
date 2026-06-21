import React, { useState, useEffect } from 'react';

export default function PageNotFound() {
  // Track mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Center the spotlight on initial load before mouse moves
    setCoords({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    setIsMounted(true);

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up event listener to prevent memory leaks
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Use your exact mask-image logic and values
  const maskStyle = isMounted
    ? {
        maskImage: `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, transparent 0%, black 150px)`,
        WebkitMaskImage: `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, transparent 0%, black 150px)`,
      }
    : {
        maskImage: `radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)`,
        WebkitMaskImage: `radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)`,
      };

  return (
    <div className="relative w-screen h-screen bg-gray-950 text-white overflow-hidden select-none font-sans">
      
      {/* Background Grid Pattern (Visible only through the spotlight) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Main Content Layer (Always visible, serves as the target text) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
          Error 404
        </span>
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400 mb-4">
          Lost in the Dark?
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-md mx-auto mb-8 font-medium">
          The page you are looking for has vanished. Use your cursor to look around.
        </p>
        
        {/* Clickable Action Button */}
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 pointer-events-auto transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Return to Safety
        </a>
      </div>

      {/* Dark Overlay Layer (Masked dynamically using your code logic) */}
      <div
        style={maskStyle}
        className="absolute inset-0 bg-gray-950 z-20 pointer-events-none transition-shadow duration-300"
      />
    </div>
  );
}
