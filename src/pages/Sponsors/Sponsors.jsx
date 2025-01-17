import React, { useState } from '../../../node_modules/react';
import data from '../../data.json';

const SponsorCard = ({ sponsor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
      
      {/* Main card container */}
      <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 p-8 h-full">
        {/* Decorative corner pieces */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-bl from-blue-500 to-purple-600">
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform rotate-45 
            -translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Logo container with hover effects */}
        <div className="relative mb-6 group-hover:transform group-hover:scale-110 
          transition-all duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 
            to-purple-600 opacity-30 blur transition-all duration-500 
            group-hover:opacity-75"></div>
          <div className="relative p-4 bg-black">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="h-24 w-auto mx-auto filter brightness-90 group-hover:brightness-110 
                transition-all duration-300"
            />
          </div>
        </div>

        {/* Sponsor name with gradient text */}
        <h2 className="text-center text-xl font-bold bg-gradient-to-r from-cyan-400 
          via-blue-400 to-purple-400 bg-clip-text text-transparent 
          group-hover:bg-gradient-to-l transition-all duration-1000">
          {sponsor.name}
        </h2>

        {/* Visit website text with animated arrow */}
        <div className="absolute inset-x-0 bottom-0 h-12 flex items-center justify-center 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-blue-300 flex items-center space-x-2">
            <span>Visit Website</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform 
                duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

const Sponsors = () => {
  const sponsors = data["Sponsors&Affiliates"].sponsors;
  const affiliates = data["Sponsors&Affiliates"].affiliates;

  const renderSection = (title, items) => (
    <div className="relative">
      {/* Section title with glow effect */}
      <h1 className="text-center text-6xl font-bold mb-16">
        <span className="relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 
            to-purple-600 blur-md opacity-50"></span>
          <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent">
            {title}
          </span>
        </span>
      </h1>

      {/* Grid layout */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-8 mb-16">
        {items.map((item, index) => (
          <SponsorCard key={index} sponsor={item} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-black p-4 py-16">      
      <div className="relative z-10">
        {/* Sponsors Section */}
        {renderSection("OUR SPONSORS", sponsors)}

        {/* Holographic divider */}
        <div className="relative w-2/3 mx-auto h-px my-24">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent 
            via-blue-500 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent 
            via-purple-500 to-transparent animate-pulse delay-75"></div>
        </div>

        {/* Affiliates Section */}
        {renderSection("OUR AFFILIATIONS", affiliates)}
      </div>
    </div>
  );
};

export default Sponsors;