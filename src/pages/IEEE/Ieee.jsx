import React from 'react';
import { Cpu, BookOpen, Award, Newspaper } from 'lucide-react';
import data from '../../data.json';

const ContentSection = ({ title, children, icon: Icon }) => (
  <div className="relative group mb-8">
    {/* Animated border gradient */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
      opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
    
    {/* Main container */}
    <div className="relative bg-black/80 border-l-2 border-t-2 border-blue-500/30 p-8">
      {/* Corner decorations */}
      <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-bl from-blue-500 to-purple-600">
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform rotate-45 
          -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Title section */}
      {title && (
        <div className="flex items-center space-x-3 mb-6">
          {Icon && <Icon className="w-6 h-6 text-cyan-400" />}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
            transition-all duration-1000">
            {title}
          </h2>
        </div>
      )}

      {/* Content */}
      <div className="text-blue-100/70 group-hover:text-blue-100 transition-colors 
        duration-300 leading-relaxed space-y-6">
        {children}
      </div>

      {/* Animated borders */}
      <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 
        to-blue-500 group-hover:h-full transition-all duration-700"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-blue-500 
        to-purple-600 group-hover:h-full transition-all duration-700"></div>
    </div>
  </div>
);

const PaperList = ({ papers }) => (
  <div className="space-y-4">
    {papers.map((paper, index) => (
      <div key={index} className="relative pl-6 border-l border-cyan-500/30">
        <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 
          bg-cyan-400 rounded-full"></div>
        <h3 className="text-cyan-400 font-semibold mb-1">{paper}</h3>
      </div>
    ))}
  </div>
);

const IEEE = () => {
  const ieeeData = data.StudentChapter.IEEE;

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced title section */}
        <div className="relative mb-16 text-center">
          <h1 className="text-6xl font-bold">
            <span className="relative inline-block">
              {/* Multiple layered glows */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600/50 via-blue-600/50 
                to-purple-600/50 blur-2xl opacity-80"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 
                to-purple-400/30 blur-xl"></span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                bg-clip-text text-transparent">
                IEEE
              </span>
            </span>
          </h1>
          {/* Decorative line */}
          <div className="absolute left-1/2 -bottom-8 w-24 h-1 -translate-x-1/2 
            bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Introduction Section */}
        <ContentSection icon={Cpu}>
          {ieeeData.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ContentSection>

        {/* Activities Section */}
        <ContentSection title="Activities" icon={BookOpen}>
          <p>{ieeeData.activities.description}</p>
        </ContentSection>

        {/* Paper Publications Section */}
        <ContentSection title={ieeeData.activities.airEvents.title} icon={Award}>
          <PaperList papers={ieeeData.activities.airEvents.events} />
        </ContentSection>

        {/* Workshops Section */}
        <ContentSection title={ieeeData.activities.workshops.title} icon={Newspaper}>
          <p>{ieeeData.activities.workshops.description}</p>
        </ContentSection>
      </div>
    </div>
  );
};

export default IEEE;