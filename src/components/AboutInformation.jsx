import React, { useEffect, useRef, useState } from 'react';

const AboutInformation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-black py-12 px-4 md:px-8 lg:px-16">
      <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Main container with gradient border */}
        <div className="relative group">
          {/* Animated border gradient */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
            to-purple-600 opacity-30 group-hover:opacity-100 transition duration-500 
            blur group-hover:blur-md rounded-lg"></div>
          
          {/* Content container */}
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

            {/* Title with glow effect */}
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 
                  to-purple-600 blur-xl opacity-50"></span>
                <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
                  to-purple-400 bg-clip-text text-transparent">
                  About Robot Study Circle (RSC)
                </span>
              </span>
            </h1>

            {/* Content paragraphs */}
            <div className="space-y-6">
              <p className="text-lg text-blue-100/70 leading-relaxed group-hover:text-blue-100 
                transition-colors duration-300">
                Robot Study Circle, known as <span className="bg-gradient-to-r from-cyan-400 
                via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">RSC</span>, 
                is the prestigious Robotics Club of COEP and one of the best robotics clubs in India. 
                It's a totally different world where club members have created hundreds of robots for society such as 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Drones</span>, 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Railway Track Surveillance Robot</span>, 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Bomb Disposal Robots</span>, and 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Badminton Playing Robots</span>.
              </p>

              <p className="text-lg text-blue-100/70 leading-relaxed group-hover:text-blue-100 
                transition-colors duration-300">
                Robot Study Circle is the <span className="bg-gradient-to-r from-cyan-400 
                via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">National 
                Champion in ROBOCON</span>, one of the best robotics competitions in the world. 
                RSC represented India in the <span className="bg-gradient-to-r from-cyan-400 
                via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">International 
                Robocon 2017</span> held in Tokyo, Japan, and won 6th international position, 
                along with the prestigious <span className="bg-gradient-to-r from-cyan-400 
                via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">Nagase Award</span>.
              </p>

              <p className="text-lg text-blue-100/70 leading-relaxed group-hover:text-blue-100 
                transition-colors duration-300">
                The Club has industrial collaborations with major companies like 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Siemens PLM</span> (as patron sponsor), 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Volkswagen</span>, 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Janatics</span>, 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Schmalz</span>, 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> PnF</span>, and 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                  bg-clip-text text-transparent font-bold"> Robolab Technologies</span>.
              </p>
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

export default AboutInformation;