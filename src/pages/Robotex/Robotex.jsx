import React, { useState } from 'react';
import data from '../../data.json';

const PhotoWithInfo = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group h-full"
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
            src={image}
            alt={title}
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
            {title}
          </h3>
          <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300">
            {description}
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

const InitiativeCard = ({ title, content }) => (
  <div className="relative group">
    {/* Animated border gradient */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
      opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
    
    {/* Main card container */}
    <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 p-6">
      {/* Decorative corner piece */}
      <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 
        to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
        transition-all duration-1000">
        {title}
      </h3>
      <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300">
        {content}
      </p>
    </div>
  </div>
);

const ContentSection = ({ section }) => {
  // Handle regular content sections
  if (section.content) {
    return (
      <div className="relative group mb-8">
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
        </div>
      </div>
    );
  }

  // Handle initiatives section
  if (section.initiatives) {
    return (
      <div className="relative group mb-8">
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

          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
            transition-all duration-1000">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(section.initiatives).map(([title, content]) => (
              <InitiativeCard key={title} title={title} content={content} />
            ))}
          </div>
          {section.summary && (
            <p className="text-blue-100/70 group-hover:text-blue-100 mt-6 transition-colors 
              duration-300 leading-relaxed">
              {section.summary}
            </p>
          )}
        </div>
      </div>
    );
  }

  return null;
};

const Robotex = () => {
  const { imageArray, sections } = data.Organising.Robotex;

  const images = [
    {
      title: "ROBOTEX INTERNATIONAL",
      description: "The world's largest robotics festival connecting innovators globally"
    },
    {
      title: "STEM EDUCATION",
      description: "Promoting robotics and technology education for all"
    },
    {
      title: "INNOVATION HUB",
      description: "Platform for showcasing cutting-edge robotics solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main title with glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0  opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              ROBOTEX
            </span>
          </span>
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {imageArray.map((image, index) => (
            <PhotoWithInfo 
              key={index} 
              image={image} 
              title={images[index].title}
              description={images[index].description}
            />
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <ContentSection key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Robotex;