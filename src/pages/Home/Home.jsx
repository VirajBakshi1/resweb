import React from 'react';
import CarouselFadeExample from '../../components/Carousel';
import AboutInformation from '../../components/AboutInformation';
import NewsSection from '../../components/News';
import HeroSection from '../../components/Herosection';
import ProfileCard from '../../components/ProfileCard';
import HomepageFeatures from '../../components/HomePageFeatures';
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
      <HomepageFeatures />
      <CarouselFadeExample />
      <NewsSection />
     
    </div>
  );
}

export default Home;