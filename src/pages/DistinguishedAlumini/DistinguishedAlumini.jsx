import React, { useState } from 'react';
import { User, Award, ExternalLink } from 'lucide-react';
import data from '../../data.json';

const AlumniProfile = ({ alumnus }) => {
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
      <div className="relative flex flex-col md:flex-row bg-black border-l-2 border-t-2 
        border-blue-500/30 overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500">
          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
            translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-bl from-blue-500 to-purple-600">
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform rotate-45 
            -translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Image section */}
        <div className="relative w-full md:w-64 h-64 md:h-auto overflow-hidden">
          <img 
            src={alumnus.photo} 
            alt={alumnus.name} 
            className="w-full h-full object-cover transition-all duration-700 
              transform group-hover:scale-110"
          />
          {/* Image overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          
          {/* Scanning line effect */}
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 
            to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            transform ${isHovered ? 'translate-y-full' : '-translate-y-full'} 
            transition-transform duration-1500 ease-in-out`} />
          
          {/* Profile icon overlay */}
          <div className="absolute top-4 left-4">
            <User className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 p-8 relative">
          <div className={`transform transition-all duration-500 
            ${isHovered ? 'translate-x-0' : '-translate-x-4'}`}>
            {/* Name with award icon */}
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
                to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
                transition-all duration-1000">
                {alumnus.name}
              </h2>
            </div>

            {/* Description */}
            <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors 
              duration-300 leading-relaxed">
              {alumnus.description}
            </p>

            {/* Learn More link */}
            <div className="mt-4 flex items-center space-x-2 text-cyan-400 
              hover:text-cyan-300 transition-colors duration-300">
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">View Full Profile</span>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 transform rotate-45 translate-x-32 
            -translate-y-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        </div>

        {/* Animated borders */}
        <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 
          to-blue-500 group-hover:h-full transition-all duration-700" />
        <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-blue-500 
          to-purple-600 group-hover:h-full transition-all duration-700" />
        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 
          via-blue-500 to-purple-500 transform transition-transform duration-700 
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}`} />
      </div>
    </div>
  );
};

const DistinguishedAlumni = () => {
  const alumniData = data.Achievements["Distinguished Alumni"].alumniData;

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
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
                DISTINGUISHED ALUMNI
              </span>
            </span>
          </h1>
          {/* Decorative line */}
          <div className="absolute left-1/2 -bottom-8 w-24 h-1 -translate-x-1/2 
            bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Alumni profiles */}
        <div className="space-y-8">
          {alumniData.map((alumnus, index) => (
            <AlumniProfile
              key={index}
              alumnus={alumnus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistinguishedAlumni;