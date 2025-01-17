import React, { useState, useEffect, useRef } from '../../../node_modules/react';

// Array of carousel data with images and information
const carouselData = [
  {
    image: 'https://coeprobotics.com/application/files/thumbnails/large/1116/6913/9446/NSS.jpg',
    title: 'Robot Study Circle (RSC)',
    description: 'The Robot Study Circle mentor Dr. S. S. Ohol along with the members gave a seminar on humanoid technologies followed by a demonstration of Humanoids including Nao and Genibo at Vanvashi Ashram Mangaon. The activity was in collaboration with the NSS chapter at the College of Engineering Pune.'
  },
  {
    image: '/path-to-image2.jpg',
    title: 'ROBOCON Champion',
    description: 'RSC is the National Champion in ROBOCON, one of the world\'s best robotics competitions. In 2017, RSC represented India in Tokyo and secured 6th place internationally while winning the Nagase Award.'
  },
  {
    image: '/path-to-image3.jpg',
    title: 'Industrial Collaboration',
    description: 'RSC has strong industrial partnerships with Siemens PLM, Volkswagen, Janatics, Schmalz, and more. These collaborations help RSC in advancing its robotics projects and innovations.'
  }
];

const Updates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State for visibility
  const sectionRef = useRef(null); // Reference to the carousel section

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const moveX = e.clientX - startX;
      if (moveX > 50) {
        prevSlide();
        setIsDragging(false); // Prevent multiple triggers
      } else if (moveX < -50) {
        nextSlide();
        setIsDragging(false); // Prevent multiple triggers
      }
    }
  };

  // Add event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging]);

  // IntersectionObserver to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once it's visible
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
      className={`w-full bg-white flex flex-col items-center transition-opacity duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <h1 className="text-4xl pt-9 font-bold text-center mb-8 text-black">UPDATES</h1>
      
      {/* Image */}
      <div className="w-full h-64 md:h-96 lg:h-[30rem] relative overflow-hidden">
        <img
          src={carouselData[currentSlide].image}
          alt={carouselData[currentSlide].title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        
        {/* Arrow buttons */}
        <button
          onClick={prevSlide}
          onMouseDown={handleMouseDown}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg z-10"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          onMouseDown={handleMouseDown}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg z-10"
        >
          &gt;
        </button>
      </div>

      {/* Information */}
      <div className="w-full bg-gray-200 backdrop-blur-lg shadow-lg rounded-b-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          {carouselData[currentSlide].title}
        </h2>
        <p className="text-center text-gray-700 text-lg">
          {carouselData[currentSlide].description}
        </p>
      </div>
    </div>
  );
};

export default Updates;