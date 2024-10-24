import React, { useEffect, useRef, useState } from 'react';

const AboutInformation = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null);

  // Using IntersectionObserver to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after the section becomes visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
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
    <div
      ref={sectionRef}
      className={`bg-black py-12 px-8 md:px-24 lg:px-48 transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-300">
        About Robot Study Circle (RSC)
      </h1>
      <p className="text-lg text-white leading-relaxed mb-6">
        Robot Study Circle, known as <strong className="text-blue-300">RSC</strong>, is the prestigious Robotics Club of COEP and one of the best robotics clubs in India. 
        It’s a totally different world where club members have created hundreds of robots for society such as <strong className="text-blue-300">Drones</strong>, 
        <strong className="text-blue-300">Railway Track Surveillance Robot</strong>, <strong className="text-blue-300">Bomb Disposal Robots</strong>, and <strong className="text-blue-300">Badminton Playing Robots</strong>.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        Robot Study Circle is the <strong className="text-blue-300">National Champion in ROBOCON</strong>, one of the best robotics competitions in the world. 
        RSC represented India in the <strong className="text-blue-300">International Robocon 2017</strong> held in Tokyo, Japan, and won 6th international position, along with the prestigious 
        <strong className="text-blue-300">Nagase Award</strong>.
      </p>
      <p className="text-lg text-white leading-relaxed">
        The Club has industrial collaborations with major companies like <strong className="text-blue-300">Siemens PLM</strong> (as patron sponsor), 
        <strong className="text-blue-300">Volkswagen</strong>, <strong className="text-blue-300">Janatics</strong>, <strong className="text-blue-300">Schmalz</strong>, 
        <strong className="text-blue-300">PnF</strong>, and <strong className="text-blue-300">Robolab Technologies</strong>.
      </p>
    </div>
  );
};

export default AboutInformation;