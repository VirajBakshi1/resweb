import React, { useState } from 'react';
import data from '../../data.json';

const PhotoWithInfo = ({ imageData, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
      
      {/* Main card container */}
      <div className="relative h-full bg-black border-l-2 border-t-2 border-blue-500/30">
        {/* Decorative corner pieces */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Image container with overlay */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={imageData.src}
            alt={imageData.title}
            className="w-full h-full object-cover transition-all duration-500
              transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
            transition-opacity duration-300" />
        </div>

        {/* Content section */}
        <div className="p-6">
          <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
            transition-all duration-1000">
            {imageData.title}
          </h3>
          <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300">
            {imageData.description}
          </p>
        </div>

        {/* Bottom accent line with animation */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
            transform transition-transform duration-500 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`} />
        </div>
      </div>
    </div>
  );
};

const ContentSection = ({ section }) => (
  <div className="relative group">
    {/* Animated border gradient */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
      opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
    
    {/* Main content container */}
    <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 p-8">
      {/* Decorative corner piece */}
      <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {section.title && (
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 
          to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
          transition-all duration-1000">
          {section.title}
        </h2>
      )}
      <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300 
        leading-relaxed">
        {section.content}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
        from-transparent via-blue-500 to-transparent opacity-50"></div>
    </div>
  </div>
);

const Mindspark = () => {
  const { imageArray, sections } = data.Organising.Mindspark;

  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main title with glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0 opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              MINDSPARK
            </span>
          </span>
        </h1>

        {/* Content Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <ContentSection key={index} section={section} />
          ))}
        </div>

        {/* Images Grid - Moved to bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {imageArray.map((image, index) => (
            <PhotoWithInfo key={index} imageData={image} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mindspark;