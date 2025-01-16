import React, { useState } from 'react';

const Card = ({ title, description, points, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!title || !image) {
    console.error("Missing required card data", { title, image });
    return null;
  }

  return (
    <div className="relative group">
      {/* Animated border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 opacity-30 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur"></div>
      
      {/* Main card container */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black border-l-2 border-t-2 border-blue-500/30">
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute top-0 left-0 w-1/4 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
        
        {/* Content container */}
        <div className="relative p-6">
          {/* Image container with glowing effect */}
          <div className="relative mb-6 group-hover:transform group-hover:scale-[1.01] transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 opacity-30 group-hover:opacity-75 blur transition-all duration-500"></div>
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-56 object-contain bg-black/50"
              />
            </div>
          </div>

          {/* Title with animated gradient */}
          <h1 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l transition-all duration-1000">
            {title}
          </h1>

          {/* Expandable content */}
          <div className={`space-y-4 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <p className="text-blue-100/80 leading-relaxed">
              {description}
            </p>
            
            <ul className="space-y-3">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 transform rotate-45"></div>
                  </span>
                  <span className="text-gray-300/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expandable button with hover effects */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative group/btn"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded opacity-50 group-hover/btn:opacity-100 transition duration-300 blur"></div>
              <div className="relative px-6 py-2 bg-black leading-none flex items-center">
                <span className="text-blue-400 group-hover/btn:text-blue-300 transition duration-300">
                  {isExpanded ? 'Show Less' : 'Show More'}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 right-0 w-1/4 h-0.5 bg-gradient-to-l from-blue-500/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Card;