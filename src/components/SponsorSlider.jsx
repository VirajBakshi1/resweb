import React from 'react';
import data from '../data.json';

const SponsorSlider = () => {
  const sponsors = data["Sponsors&Affiliates"]?.sponsors || [];
  
  // Calculate total width including consistent spacing
  const totalWidth = sponsors.length * (192 + 48); // 192px (w-48) + 48px (space-x-12)

  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${totalWidth}px));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: calc(${totalWidth}px * 2);
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .sponsor-container {
          display: flex;
          gap: 3rem; /* Consistent with space-x-12 (48px) */
        }
      `}</style>
      
      <h2 className="text-5xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Sponsors
        </span>
      </h2>

      {/* Slider Container */}
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent"></div>

        {/* Sliding Track */}
        <div className="animate-scroll flex sponsor-container">
          {/* First Set of Sponsors */}
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.name} 
              className="flex-shrink-0 w-48 h-24 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 
                to-purple-600 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity 
                duration-500 blur"></div>
              
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative block bg-white p-2 rounded-lg h-full"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain filter transition-all duration-300 
                    group-hover:brightness-110"
                />
              </a>
            </div>
          ))}
          
          {/* Second Set - Exact Copy */}
          {sponsors.map((sponsor) => (
            <div 
              key={`${sponsor.name}-dup`} 
              className="flex-shrink-0 w-48 h-24 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 
                to-purple-600 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity 
                duration-500 blur"></div>
              
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative block bg-white p-2 rounded-lg h-full"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain filter transition-all duration-300 
                    group-hover:brightness-110"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorSlider;