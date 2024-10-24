import React from 'react';
import ProfileCard from '../../components/ProfileCard';

const FullTeam = () => {
    const firstYear = [
        'First Year Member 1',
        'First Year Member 2',
        'First Year Member 3',
        'First Year Member 4',
    ];

    const secondYear = [
        'Second Year Member 1',
        'Second Year Member 2',
        'Second Year Member 3',
        'Second Year Member 4',
    ];

    const thirdYear = [
        'Third Year Member 1',
        'Third Year Member 2',
        'Third Year Member 3',
        'Third Year Member 4',
    ];

    return (
        <div className="mt-12">
          <hr />
            <h1 className="text-6xl font-bold text-blue-300 mt-8 text-center mb-8">FULL TEAM</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                <div className='bg-gray-800 rounded-lg p-4 border-2 text-center'>
                    <h2 className="text-4xl font-bold mb-4">First Year</h2>
                    <ul className=" pl-5">
                        {firstYear.map((name, index) => (
                            <li key={index} className="text-xl mb-2">{name}</li>
                        ))}
                    </ul>
                </div>
                <div className='bg-gray-800 rounded-lg p-4 border-2 text-center'>

                    <h2 className="text-4xl font-bold mb-4">Second Year</h2>
                    <ul className=" pl-5">
                        {secondYear.map((name, index) => (
                            <li key={index} className="text-xl mb-2">{name}</li>
                        ))}
                    </ul>
                </div>
                <div className='bg-gray-800 rounded-lg p-4 border-2 text-center'>
                    <h2 className="text-4xl font-bold mb-4">Third Year</h2>
                    <ul className=" pl-5">
                        {thirdYear.map((name, index) => (
                            <li key={index} className="text-xl mb-2">{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Team = () => {
  const facad = [
    {
      name: 'Dr. S. S. OHOL',
      image: 'src/assets/team/oholsir.png',
      designation: 'Faculty Advisor',
      socials: {
        linkedin: 'https://www.linkedin.com/in/dr-shantipal-ohol-8547b620?originalSubdomain=in',
        github: '',
        twitter: '',
      },
    },
  ];

  const team = [
    {
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      designation: 'Member',
      socials: {
        linkedin: 'https://www.linkedin.com/in/johndoe/',
        github: 'https://github.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      designation: 'Member',
      socials: {
        linkedin: 'https://www.linkedin.com/in/janesmith/',
        github: 'https://github.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    {
      name: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      designation: 'Member',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson/',
        github: 'https://github.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
      },
    },
  ];

  const alumini = [
    {
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      designation: 'Member',
      socials: {
        linkedin: 'https://www.linkedin.com/in/johndoe/',
        github: 'https://github.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      designation: 'Member',
      socials: {
        linkedin: 'https://www.linkedin.com/in/janesmith/',
        github: 'https://github.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    {
      name: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      designation: 'Member',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson/',
        github: 'https://github.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black p-12">
      <h1 className="text-6xl font-bold text-blue-300 text-center mb-8">FACULTY ADVISOR</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
          {facad.map((person, index) => (
            <ProfileCard
              key={index}
              name={person.name}
              image={person.image}
              socials={person.socials}
              designation={person.designation}
            />
          ))}
        </div>
      </div>

      <hr className="mt-8" />
      <h1 className="text-6xl font-bold text-blue-300 text-center mt-8 mb-8">TEAM</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((person, index) => (
            <ProfileCard
              key={index}
              name={person.name}
              image={person.image}
              socials={person.socials}
              designation={person.designation}
            />
          ))}
        </div>
      </div>

      <hr className="mt-8" />
      <h1 className="text-6xl font-bold text-blue-300 text-center mt-8 mb-8">ALUMINI</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {alumini.map((person, index) => (
            <ProfileCard
              key={index}
              name={person.name}
              image={person.image}
              socials={person.socials}
              designation={person.designation}
            />
          ))}
        </div>
      </div>

      {/* Full Team Component */}
      <FullTeam />
    </div>
  );
};

export default Team;