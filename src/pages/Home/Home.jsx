import React from 'react';
import CarouselFadeExample from '../../components/Carousel';
import AboutInformation from '../../components/AboutInformation';
import Updates from '../../components/Update';
import NewsSection from '../../components/News';
import HeroSection from '../../components/Herosection';
import Update2 from '../../components/Update2';
import ProfileCard from '../../components/ProfileCard';

const secretary = [
  {
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    year: '2024',
    socials: {
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
      github: 'https://github.com/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
  },
  {
    name: 'Michael Smith',
    image: 'src/assets/team/michael.png',
    year: '2023',
    socials: {
      linkedin: 'https://www.linkedin.com/in/michaelsmith',
      github: '',
      twitter: 'https://twitter.com/michaelsmith',
    },
  },
  {
    name: 'Sarah Brown',
    image: 'src/assets/team/sarah.png',
    year: '2022',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sarahbrown',
      github: 'https://github.com/sarahbrown',
      twitter: '',
    },
  },
  {
    name: 'James Wilson',
    image: 'src/assets/team/james.png',
    year: '2021',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jameswilson',
      github: '',
      twitter: 'https://twitter.com/jameswilson',
    },
  },
  {
    name: 'Emily Davis',
    image: 'src/assets/team/emily.png',
    year: '2020',
    socials: {
      linkedin: 'https://www.linkedin.com/in/emilydavis',
      github: 'https://github.com/emilydavis',
      twitter: '',
    },
  },
  // You can continue adding more entries as needed
];

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      {/* <CarouselFadeExample /> */}
      <AboutInformation />
      <CarouselFadeExample />
      {/* <Update2 /> */}
      <NewsSection />
      <div className="min-h-screen bg-black p-12">
        <h1 className="text-4xl font-bold text-blue-300 text-center mb-8">SECRETARIES OVER THE YEARS</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secretary.map((person, index) => (
              <ProfileCard
                key={index}
                name={person.name}
                image={person.image}
                socials={person.socials}
                year={person.year} // Updated to use year instead of designation
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;