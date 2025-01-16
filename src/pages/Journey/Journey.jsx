import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Rocket, Lightbulb, Globe } from 'lucide-react';
import data from '../../data.json';

const Journey = () => {
  const [activeHeight, setActiveHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const timelineData = data.Journey.Timeline.map((event, index) => {
    const icons = [Lightbulb, Rocket, Award, Globe, Calendar];
    const colors = [
      "from-cyan-500 via-blue-500 to-purple-600",
      "from-purple-500 via-blue-500 to-cyan-500",
      "from-blue-500 via-purple-500 to-cyan-500",
      "from-cyan-500 via-purple-500 to-blue-500",
      "from-purple-600 via-blue-500 to-cyan-500"
    ];
    
    return {
      date: event.date,
      title: event.title,
      description: event.description,
      image: event.image,
      icon: icons[index % icons.length],
      color: colors[index % colors.length]
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRef.current.offsetTop;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      const relativeScroll = scrollPosition + (viewportHeight * 0.5) - timelineTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const newHeight = Math.min(Math.max(relativeScroll, 0), timelineHeight);
      setActiveHeight(newHeight);

      let newActiveIndex = -1;
      itemRefs.current.forEach((itemRef, index) => {
        if (!itemRef) return;
        const rect = itemRef.getBoundingClientRect();
        const itemCenter = rect.top + (rect.height / 2);
        if (itemCenter < viewportHeight * 0.7) {
          newActiveIndex = index;
        }
      });
      
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black w-full overflow-hidden">
      <div className="px-4 md:px-8 py-12 max-w-full">
        {/* Main title with glow effect */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          <span className="relative inline-block">
            <span className="absolute inset-0  opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 
              to-purple-400 bg-clip-text text-transparent">
              Our Journey
            </span>
          </span>
        </h1>
        
        <p className="text-center text-blue-100/70 mb-16 text-base md:text-lg px-4 max-w-2xl mx-auto">
          RSC was started by 5 students with the same mission.
          Our story starts here... Strap in.
        </p>

        <div className="w-full max-w-full overflow-hidden">
          <div ref={timelineRef} className="relative max-w-3xl mx-auto">
            {/* Base timeline line */}
            <div className="absolute left-4 top-0 h-full w-3 bg-black/50 border 
              border-blue-500/30 rounded-full" />
            
            {/* Animated timeline overlay */}
            <div 
              className="absolute left-4 top-0 w-3 bg-gradient-to-b from-cyan-500 via-blue-500 
                to-purple-600 rounded-full"
              style={{
                height: `${activeHeight-96}px`,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                transition: 'none'
              }}
            />

            {timelineData.map((event, index) => {
              const { ref, inView } = useInView({
                triggerOnce: false,
                threshold: 0.2,
              });

              return (
                <div
                  key={index}
                  ref={(el) => {
                    ref(el);
                    itemRefs.current[index] = el;
                  }}
                  className="relative mb-24 pl-12 md:pl-16 pr-4 md:pr-8"
                >
                  {/* Timeline dot with icon */}
                  <div className={`absolute left-5 w-8 h-8 rounded-full
                    flex items-center justify-center transform -translate-x-1/2
                    ${index <= activeIndex 
                      ? `bg-gradient-to-r ${event.color} scale-100` 
                      : 'bg-black border-2 border-blue-500/30 scale-75'
                    }`}
                    style={{
                      boxShadow: index <= activeIndex ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
                      transition: 'all 150ms ease-in-out'
                    }}
                  >
                    <event.icon 
                      className={`w-3 h-3 ${
                        index <= activeIndex ? 'text-white' : 'text-blue-500/50'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className={`transition-all duration-500 transform
                    ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                    
                    <h3 className="text-xl md:text-4xl font-bold mb-4 bg-gradient-to-r 
                      from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {event.date}
                    </h3>

                    <div className="relative group">
                      {/* Card border gradient */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 
                        via-blue-500 to-purple-600 opacity-30 group-hover:opacity-100 
                        transition duration-500 blur group-hover:blur-md rounded-lg"></div>
                      
                      {/* Card content */}
                      <div className="relative p-4 md:p-6 bg-black border-l-2 border-t-2 
                        border-blue-500/30 rounded-lg">
                        {/* Decorative corner piece */}
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br 
                          from-cyan-500 to-blue-500">
                          <div className="absolute top-0 right-0 w-4 h-4 bg-black transform 
                            rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        <h1 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r 
                          from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {event.title}
                        </h1>
                        <p className="text-blue-100/70 group-hover:text-blue-100 
                          transition-colors duration-300 text-base md:text-lg">
                          {event.description}
                        </p>
                        
                        {event.image && (
                          <div className="relative mt-4 group-hover:transform 
                            group-hover:scale-[1.01] transition-all duration-500">
                            <div className="absolute -inset-1  opacity-30 blur transition-all 
                              duration-500 group-hover:opacity-75"></div>
                            <div className="relative">
                              <img 
                                src={event.image}
                                alt={event.date}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;