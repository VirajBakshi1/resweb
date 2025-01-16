import React from 'react';
import CarouselFadeExample from '../../components/Carousel';
import AboutInformation from '../../components/AboutInformation';
import NewsSection from '../../components/News';
import HeroSection from '../../components/Herosection';
import ProfileCard from '../../components/ProfileCard';
import data from '../../data.json'

const Home = () => {
  // Get secretaries data from the JSON
  const secretaries = data.Home.Secretaries.map(secretary => ({
    name: secretary.name,
    image: 'https://randomuser.me/api/portraits/men/75.jpg', // Fallback image
    year: secretary.year,
    socials: secretary.socials
  }));

  return (
    <div>
      <HeroSection />
      <AboutInformation />
      <CarouselFadeExample />
      <NewsSection />
      
      {/* Secretaries Section */}
      <div className="min-h-screen bg-black p-12">
        <h1 className="text-4xl font-bold text-blue-300 text-center mb-8 hover:text-blue-400 transition-colors duration-300">
          SECRETARIES OVER THE YEARS
        </h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secretaries.map((person, index) => (
              <ProfileCard
                key={index}
                name={person.name}
                image={person.image}
                socials={person.socials}
                year={person.year}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;