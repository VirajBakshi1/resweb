import React from "react";
import data from '../../data.json'
const ArticleCard = ({ article, index }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg transition-all duration-500
        transform hover:scale-105 bg-gray-800 border-2 border-gray-700 hover:border-blue-500"
    >
      {/* Image container with overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500
            group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
          opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-300
          group-hover:translate-y-0 group-hover:text-blue-300">
          {article.title}
        </h3>
        
        {/* Read More Button */}
        <div className="flex items-center transform translate-y-8 group-hover:translate-y-0 
          opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-2
            transition-colors duration-300">
            <span>Read Article</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

function MediaCoveragePage() {
  // Get articles data from JSON
  const articlesData = data.Achievements["Media Coverage"].articlesData;

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl text-center text-blue-300 font-bold mb-16 
          hover:text-blue-400 transition-colors duration-300">
          Media Coverage
        </h1>

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

      {/* Bottom gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent 
        pointer-events-none" />
    </div>
  );
}

export default MediaCoveragePage;