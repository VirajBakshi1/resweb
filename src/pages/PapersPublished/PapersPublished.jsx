import React, { useState } from '../../../node_modules/react';
import data from '../../data.json';

const PaperCard = ({ paper }) => {
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
      <div className="relative h-full bg-black border-l-2 border-t-2 border-blue-500/30 p-6">
        {/* Decorative corner pieces */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="flex flex-col h-full">
          {/* Title section */}
          <h3 className="text-lg font-bold mb-3">
            <a 
              href={paper.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-start"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                bg-clip-text text-transparent group-hover:bg-gradient-to-l 
                transition-all duration-1000">
                {paper.title}
              </span>
              {paper.award && (
                <div className="relative ml-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 
                    opacity-90 blur-sm rounded-full"></div>
                  <span className="relative px-3 py-1 text-xs font-medium text-black 
                    transform group-hover:scale-110 transition-all duration-300">
                    {paper.award}
                  </span>
                </div>
              )}
            </a>
          </h3>
          
          {/* Authors with glow effect */}
          <p className="text-sm text-blue-100/70 mb-2 flex-grow group-hover:text-blue-100 
            transition-colors duration-300">
            {paper.authors}
          </p>
          
          {/* Bottom section with ID and link */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-400 group-hover:text-gray-300 
              transition-colors duration-300">
              ID: {paper.id}
            </span>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                opacity-50 group-hover/btn:opacity-100 transition duration-300 blur"></div>
              <div className="relative px-3 py-1 bg-black leading-none flex items-center">
                <span className="text-blue-400 group-hover/btn:text-blue-300 text-sm 
                  transition duration-300">
                  View Paper
                </span>
                <svg
                  className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 
                    transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConferenceSection = ({ conference }) => {
  return (
    <div className="mb-16">
      {/* Conference title with glow effect */}
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 
            to-purple-600 blur-md opacity-50"></span>
          <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent">
            {conference.conference}
          </span>
        </span>
      </h2>
      
      {/* Papers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conference.papers.map((paper, idx) => (
          <PaperCard key={idx} paper={paper} />
        ))}
      </div>
    </div>
  );
};

const PapersPublished = () => {
  const papersData = data.Achievements.Papers.PapersPublishedData;

  return (
    <div className="bg-black text-white p-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main title with enhanced glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0  opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              PAPERS PUBLISHED
            </span>
          </span>
        </h1>
        
        {/* Conference sections */}
        {papersData.map((conference, index) => (
          <ConferenceSection key={index} conference={conference} />
        ))}
      </div>
    </div>
  );
};

export default PapersPublished;