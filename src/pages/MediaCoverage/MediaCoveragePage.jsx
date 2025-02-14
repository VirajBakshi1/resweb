import React, { useState } from 'react';
import { ArrowRight, Newspaper } from 'lucide-react';
import data from '../../data.json';

const ArticleCard = ({ article, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
      
      {/* Main container */}
      <div className="relative bg-black/80 border-l-2 border-t-2 border-blue-500/30 overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-bl from-blue-500 to-purple-600">
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform rotate-45 
            -translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-all duration-700 
              transform group-hover:scale-110"
          />
          {/* Multiple overlay layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
            opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Scanning line effect */}
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            transform ${isHovered ? 'translate-y-full' : '-translate-y-full'} 
            transition-transform duration-1500 ease-in-out`} />
        </div>

        {/* Content section */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="space-y-4">
            {/* Title with icon */}
            <div className="flex items-center space-x-2">
              <Newspaper className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-100 via-blue-100 
                to-purple-100 bg-clip-text text-transparent  group-hover:bg-gradient-to-l 
                transition-all duration-1000">
                {article.title}
              </h3>
            </div>

            {/* Read More Button */}
            <div className="flex items-center transform translate-y-8 group-hover:translate-y-0 
              opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 
                transition-colors duration-300">
                <span>Read Article</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 
                  transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated borders */}
        <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 to-blue-500 
          group-hover:h-full transition-all duration-700" />
        <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-blue-500 to-purple-600 
          group-hover:h-full transition-all duration-700" />
        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 
          via-blue-500 to-purple-500 transform transition-transform duration-700 
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}`} />
      </div>
    </div>
  );
};

function MediaCoveragePage() {
  const articlesData = data.Achievements["Media Coverage"].articlesData;

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced title section */}
        <div className="relative mb-16 text-center">
          <h1 className="text-6xl font-bold">
            <span className="relative inline-block">
              {/* Multiple layered glows */}
              <span className="absolute inset-0  blur-2xl opacity-80" />
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 
                to-purple-400/30 blur-xl" />
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                bg-clip-text text-transparent">
                Media Coverage
              </span>
            </span>
          </h1>
          {/* Decorative line */}
          <div className="absolute left-1/2 -bottom-8 w-24 h-1 -translate-x-1/2 
            bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <ArticleCard 
              key={index}
              article={article}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 
        to-transparent pointer-events-none" />
    </div>
  );
}

export default MediaCoveragePage;