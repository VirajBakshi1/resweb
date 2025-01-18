import React from 'react';
import CarouselFadeExample from '../../components/Carousel';

const AboutUs = () => {
  return (
    <div className="bg-black min-h-screen">
      <CarouselFadeExample />
      
      <div className="container mx-auto px-4 py-16">
        {/* Main title with glow effect */}
        <h1 className="text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 
              to-purple-600 blur-xl opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              About Us
            </span>
          </span>
        </h1>

        {/* Main content card */}
        <div className="relative group">
          {/* Animated border gradient */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
            to-purple-600 opacity-30 group-hover:opacity-100 transition duration-500 
            blur group-hover:blur-md rounded-lg"></div>
          
          {/* Card content */}
          <div className="relative bg-black border-l-2 border-t-2 border-blue-500/30 p-8 
            rounded-lg">
            {/* Decorative corner pieces */}
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 
              to-blue-500">
              <div className="absolute top-0 right-0 w-4 h-4 bg-black transform rotate-45 
                translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-gradient-to-bl from-blue-500 
              to-purple-600">
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-black transform rotate-45 
                -translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Main text content */}
            <div className="space-y-6">
              <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors 
                duration-300 leading-relaxed">
                The Robot Study Circle (RSC) is an undergraduate organization at College of 
                Engineering, Pune (COEP). Robot Study Circle is a community of students guided 
                by faculty members, industrial experts & alumni, who find pleasure in Robotics. 
                It is a platform for like-minded people to come together, share knowledge, and 
                strive to create futuristic automated machines.
              </p>
              
              <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors 
                duration-300 leading-relaxed">
                The objective of Robot Study Circle is to build international-quality robots 
                that will prove to be useful in a variety of environments, especially in 
                industries.
              </p>

              {/* Join section */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 
                  via-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
                  How can you join?
                </h2>
                
                <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors 
                  duration-300 mb-4">
                  The only requirements are:
                </p>
                
                <ul className="space-y-3 mb-6">
                  {[
                    "You must be an undergraduate student from COEP.",
                    "You must have a genuine interest in robotics.",
                    "You should clear the induction process conducted by Team RSC."
                  ].map((requirement, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                        transform rotate-45"></div>
                      <span className="text-blue-100/70 group-hover:text-blue-100 
                        transition-colors duration-300">{requirement}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors 
                  duration-300 leading-relaxed">
                  Even if you don't know much about robotics, to begin with, you'll learn a lot 
                  throughout the year. To be fully active, you need to work on some projects 
                  and interact with the more experienced members.
                </p>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
              from-transparent via-blue-500 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;