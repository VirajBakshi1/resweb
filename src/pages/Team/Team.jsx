import React from 'react';
import { Users, User, GraduationCap, Lightbulb } from 'lucide-react';
import ProfileCard from '../../components/ProfileCard';
import data from '../../data.json';

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="relative mb-16 text-center">
    <h1 className="text-6xl font-bold">
      <span className="relative inline-block">
        <span className="absolute inset-0  blur-2xl opacity-80"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 
          to-purple-400/30 blur-xl"></span>
        <span className="relative flex items-center justify-center space-x-4">
          {Icon && <Icon className="w-12 h-12 text-cyan-400" />}
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
      {/* Corner decorations */}
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="absolute top-0 right-0 w-3 h-3 bg-black transform rotate-45 
          translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-bl from-blue-500 to-purple-600">
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-black transform rotate-45 
          -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="text-lg text-center bg-gradient-to-r from-cyan-400 via-blue-400 
        to-purple-400 bg-clip-text text-transparent group-hover:bg-gradient-to-l 
        transition-all duration-1000">
        {name}
      </div>

      {/* Animated borders */}
      <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 
        to-blue-500 group-hover:h-full transition-all duration-700"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-blue-500 
        to-purple-600 group-hover:h-full transition-all duration-700"></div>
    </div>
  </div>
);

const YearSection = ({ title, members, isFirstYear = false }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
        to-purple-400 bg-clip-text text-transparent mb-8 text-center">
        {title}
      </h2>
      <div className={`grid ${isFirstYear ? 'grid-cols-2 md:grid-cols-4 gap-6' : 
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'}`}>
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

const FullTeam = () => {
  const firstYear = data?.Team?.firstYear || [];
  const secondYear = data?.Team?.secondYear || [];
  const thirdYear = data?.Team?.thirdYear || [];

  return (
    <div className="mt-16">
      <SectionHeader title="CURRENT TEAM" icon={Users} />
      <div className="space-y-16">
        <YearSection title="Third Year" members={thirdYear} />
        <YearSection title="Second Year" members={secondYear} />
        <YearSection title="First Year" members={firstYear} isFirstYear={true} />
      </div>
    </div>
  );
};

const ProfileSection = ({ title, members, icon, cols = "lg:grid-cols-3" }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="mb-24">
      <SectionHeader title={title} icon={icon} />
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-12`}>
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

const Team = () => {
  const facad = data?.Team?.facad || [];
  const bTech = data?.Team?.bTech || [];
  const alumni = data?.Team?.alumni || [];

  return (
    <div className="min-h-screen bg-black p-8 md:p-12">
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
      <FullTeam />

      <br />
      <br />
      <br />

      <ProfileSection 
        title="ALUMNI" 
        members={alumni} 
        icon={User}
      />
    </div>
  );
};

export default Team;