import React, { useState } from '../../../node_modules/react';
import data from '../../data.json'
const AlumniProfile = ({ alumnus }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden
        transform transition-all duration-500 hover:scale-105 border-2 border-gray-700 
        hover:border-blue-500 mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full md:w-56 h-56">
        <img 
          src={alumnus.photo} 
          alt={alumnus.name} 
          className="w-full h-full object-cover transition-transform duration-500
            transform hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-black/50 to-transparent
          transition-opacity duration-300 ${isHovered ? 'opacity-50' : 'opacity-0'}`} />
      </div>

      {/* Content container */}
      <div className="flex-1 p-6 relative overflow-hidden">
        <div className={`transform transition-all duration-500
          ${isHovered ? 'translate-x-0' : '-translate-x-4'}`}>
          <h2 className="text-2xl font-bold text-blue-300 mb-4 hover:text-blue-400 
            transition-colors duration-300">
            {alumnus.name}
          </h2>
          <p className="text-gray-300 leading-relaxed hover:text-white 
            transition-colors duration-300">
            {alumnus.description}
          </p>
        </div>

        {/* Decorative elements */}
        <div className={`absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 
          -translate-y-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-opacity 
          duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  );
};

const DistinguishedAlumni = () => {
  // Get alumni data from JSON
  const alumniData = data.Achievements["Distinguished Alumni"].alumniData;

  return (
    <div className="min-h-screen bg-black text-white p-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl text-blue-300 font-bold mb-16 text-center
          hover:text-blue-400 transition-colors duration-300">
          DISTINGUISHED ALUMNI
        </h1>

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