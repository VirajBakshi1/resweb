import React from 'react';
import { FaLightbulb, FaCog, FaBullhorn } from 'react-icons/fa';
import useVisibilityObserver from './Visibility';
import data from '../data.json';

const NewsSection = () => {
  const { isVisible, sectionRef } = useVisibilityObserver(0.2);

  const newsData = {
    Projects: {
      icon: <FaLightbulb className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 
        bg-clip-text text-transparent mr-2" />,
      items: data.Home.News.Projects
    },
    Notices: {
      icon: <FaCog className="text-3xl bg-gradient-to-r from-blue-400 to-purple-500 
        bg-clip-text text-transparent mr-2" />,
      items: data.Home.News.Notices
    },
    Activities: {
      icon: <FaBullhorn className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-500 
        bg-clip-text text-transparent mr-2" />,
      items: data.Home.News.Activities
    }
  };

  const renderCards = () => {
    return Object.entries(newsData).map(([title, { icon, items }], index) => (
      <div key={index} className="relative group">
        {/* Animated border gradient */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
          to-purple-600 opacity-30 group-hover:opacity-100 transition duration-500 
          blur group-hover:blur-md rounded-lg"></div>
        
        {/* Card content */}
        <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 p-6 h-full">
          {/* Decorative corner piece */}
          <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 
            to-blue-500">
            <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
              translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="flex items-center mb-6">
            {icon}
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">{title}</h2>
          </div>

          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="relative group/item">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                    transform rotate-45"></div>
                  <span className="text-blue-100/70 group-hover/item:text-blue-100 
                    transition-colors duration-300">{item}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
            from-transparent via-blue-500 to-transparent opacity-50"></div>
        </div>
      </div>
    ));
  };

  return (
    <div ref={sectionRef} className="w-full bg-black py-12 px-4">
      {/* Main title with glow effect */}
      <h1 className="text-5xl font-bold text-center mb-16">
        <span className="relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 
            to-purple-600 blur-xl opacity-50"></span>
          <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
            to-purple-400 bg-clip-text text-transparent">
            NEWS
          </span>
        </span>
      </h1>

      <div className={`container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transform 
        transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
        {renderCards()}
      </div>
    </div>
  );
};

export default NewsSection;