import React from "react";
import { motion } from 'framer-motion';
import data from '../../data.json';

const AwardCard = ({ award, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    {/* Animated border gradient */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
      opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
    
    {/* Main card container */}
    <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 h-full">
      {/* Decorative corner pieces */}
      <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Image section with overlay */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={award.image}
          alt={award.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Year badge with glow effect */}
        <div className="absolute bottom-4 left-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 
              blur-sm opacity-75"></div>
            <span className="relative px-4 py-1 text-white text-sm">
              {award.year}
            </span>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Title with gradient effect */}
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 
          to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
          transition-all duration-1000">
          {award.name}
        </h3>
        
        <div className="flex items-center justify-between">
          {/* Position text with custom colors */}
          <span className={`text-lg font-semibold ${
            award.position.includes('1st') || award.position === 'Winner'
              ? 'text-yellow-400'
              : award.position.includes('2nd')
              ? 'text-gray-300'
              : award.position.includes('3rd')
              ? 'text-orange-400'
              : 'text-white'
          } group-hover:brightness-125 transition-all duration-300`}>
            {award.position}
          </span>
          
          {/* Animated trophy icon */}
          {(award.position.includes('1st') || award.position === 'Winner') && (
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative w-8 h-8"
            >
              <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-50"></div>
              <svg viewBox="0 0 24 24" fill="currentColor" 
                className="relative text-yellow-400 transform group-hover:scale-110 
                transition-transform duration-300">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
        from-transparent via-blue-500 to-transparent opacity-50"></div>
    </div>
  </motion.div>
);

function AwardsPage() {
  const awardsData = data.Achievements.Awards.awardsData;

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main title with glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0  opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              Awards & Achievements
            </span>
          </span>
        </h1>

        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardsData.map((award, index) => (
            <AwardCard key={index} award={award} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AwardsPage;