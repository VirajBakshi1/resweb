import React, { useState } from 'react';
import { Users, User, GraduationCap, Lightbulb } from 'lucide-react';
import ProfileCard from '../../components/ProfileCard';
import data from '../../data.json'

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-3 sm:px-6 py-2 text-base sm:text-lg font-semibold transition-all duration-300 border-b-2 
      ${active 
        ? 'text-blue-400 border-blue-400' 
        : 'text-gray-400 border-transparent hover:text-blue-300 hover:border-blue-300'}`}
  >
    {children}
  </button>
);

const TabBar = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-center mb-8 border-b border-gray-800 overflow-x-auto">
    <TabButton 
      active={activeTab === 'current'} 
      onClick={() => setActiveTab('current')}
    >
      Current Team
    </TabButton>
    <TabButton 
      active={activeTab === 'secretaries'} 
      onClick={() => setActiveTab('secretaries')}
    >
      Secretaries
    </TabButton>
    <TabButton 
      active={activeTab === 'alumni'} 
      onClick={() => setActiveTab('alumni')}
    >
      Alumni
    </TabButton>
    
  </div>
);

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="relative mb-16 text-center px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      <span className="relative inline-block">
        <span className="absolute inset-0 blur-2xl opacity-80"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 
          to-purple-400/30 blur-xl"></span>
        <span className="relative flex items-center justify-center space-x-2 sm:space-x-4">
          {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400" />}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
            bg-clip-text text-transparent">
            {title}
          </span>
        </span>
      </span>
    </h1>
    <div className="absolute left-1/2 -bottom-8 w-24 h-1 -translate-x-1/2 
      bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
  </div>
);

const FirstYearCard = ({ name }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
      opacity-30 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>
    
    <div className="relative bg-black/80 border-l-2 border-t-2 border-blue-500/30 p-4">
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-3 h-3 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-bl from-blue-500 to-purple-600">
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-black transform rotate-45 
          -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="text-base sm:text-lg text-center bg-gradient-to-r from-cyan-400 via-blue-400 
        to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
        transition-all duration-1000 break-words">
        {name}
      </div>
    </div>
  </div>
);

const YearSection = ({ title, members, isFirstYear = false }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
        to-purple-400 bg-clip-text text-transparent mb-8 text-center px-4">
        {title}
      </h2>
      <div className={`grid ${
        isFirstYear 
          ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6' 
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12'
      }`}>
        {members.map((member, index) => {
          if (isFirstYear) {
            return (
              <FirstYearCard
                key={index}
                name={typeof member === 'object' ? member.name : member}
              />
            );
          }
          return (
            <ProfileCard
              key={index}
              name={member.name}
              image={member.image}
              socials={member.socials}
              designation={member.designation || 'Member'}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProfileSection = ({ title, members, icon, cols = "lg:grid-cols-4" }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="mb-24">
      <SectionHeader title={title} icon={icon} />
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-6 sm:gap-8 lg:gap-12`}>
          {members.map((person, index) => (
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
    </div>
  );
};

const CurrentTeamContent = ({ data }) => {
  const facad = data?.Team?.facad || [];
  const bTech = data?.Team?.bTech || [];
  const thirdYear = data?.Team?.thirdYear || [];
  const secondYear = data?.Team?.secondYear || [];
  const firstYear = data?.Team?.firstYear || [];

  return (
    <div className="space-y-16">
      <ProfileSection 
        title="FACULTY ADVISOR" 
        members={facad} 
        icon={GraduationCap}
        cols="lg:grid-cols-1"
      />
      <ProfileSection 
        title="B.TECH TEAM" 
        members={bTech} 
        icon={Lightbulb}
      />
      <YearSection title="Third Year" members={thirdYear} />
      <YearSection title="Second Year" members={secondYear} />
      <YearSection title="First Year" members={firstYear} isFirstYear={true} />
    </div>
  );
};

const AlumniContent = ({ data }) => {
  const alumni = data?.Team?.alumni || [];
  return <ProfileSection title="ALUMNI" members={alumni} icon={User} />;
};

const SecretariesContent = ({ data }) => {
  const secretaries = data?.Home?.Secretaries || [];
  const secretariesWithImages = secretaries.map(secretary => ({
    ...secretary,
    image: secretary.image || "https://randomuser.me/api/portraits/men/75.jpg",
    designation: `Secretary ${secretary.year}`
  }));
  
  return <ProfileSection title="SECRETARIES" members={secretariesWithImages} icon={Users} />;
};

const Team = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8 lg:p-12">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'current' && <CurrentTeamContent data={data} />}
      {activeTab === 'alumni' && <AlumniContent data={data} />}
      {activeTab === 'secretaries' && <SecretariesContent data={data} />}
    </div>
  );
};

export default Team;