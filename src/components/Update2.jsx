import React, { useEffect, useRef, useState } from '../../../node_modules/react';

const cardData = [
  {
    title: 'Card Title 1',
    image: 'src/assets/updates/updates1.png',
  },
  {
    title: 'Card Title 2',
    image: 'src/assets/updates/updates2.png',
  },
  {
    title: 'Card Title 3',
    image: 'src/assets/updates/updates3.png',
  },
];

const Update2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger the animation when 20% of the section is in view
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
      className={`bg-black min-h-screen flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h1 className="text-4xl font-bold text-blue-300 mb-8">UPDATES</h1> {/* Title above the cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative border-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden h-[400px]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-fit"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-30 backdrop-blur-lg">
              <h2 className="text-center text-lg font-semibold text-black">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update2;