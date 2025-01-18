import React, { useState } from 'react';
import { Motion } from 'lucide-react';

const MediaCoverageCard = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
      
      {/* Main container */}
      <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 overflow-hidden">
        {/* Top right corner piece */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Bottom left corner piece */}
        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-bl from-blue-500 to-purple-600">
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform rotate-45 
            -translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Image container with hover effects */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 
            z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 
              transform group-hover:scale-110"
          />
          {/* Animated scan line effect */}
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            transform ${isHovered ? 'translate-y-full' : '-translate-y-full'} 
            transition-transform duration-1500 ease-in-out`}></div>
        </div>

        {/* Content section */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <Motion className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
              transition-all duration-1000">
              {title}
            </h3>
          </div>
        </div>

        {/* Animated border lines */}
        <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 to-blue-500 
          group-hover:h-full transition-all duration-700"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-blue-500 to-purple-600 
          group-hover:h-full transition-all duration-700"></div>
        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
          to-purple-500 transform transition-transform duration-700 
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}></div>
      </div>
    </div>
  );
};

export function MediaCoverage({ articles }) {
  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title section with enhanced glow effect */}
        <div className="relative mb-16 text-center">
          <h1 className="text-6xl font-bold">
            <span className="relative inline-block">
              {/* Multiple layered glows for depth */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600/50 via-blue-600/50 
                to-purple-600/50 blur-2xl opacity-80"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 
                to-purple-400/30 blur-xl"></span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                bg-clip-text text-transparent">
                Media Coverage
              </span>
            </span>
          </h1>
          {/* Decorative line */}
          <div className="absolute left-1/2 -bottom-8 w-24 h-1 -translate-x-1/2 
            bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Articles grid with enhanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <MediaCoverageCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaCoverage;