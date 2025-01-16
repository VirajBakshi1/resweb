import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import data from '../../data.json';

const FullTeam = () => {
    // Get team data from JSON with null checks
    const firstYear = data?.Team?.firstYear || [];
    const secondYear = data?.Team?.secondYear || [];
    const thirdYear = data?.Team?.thirdYear || [];

    const renderYearSection = (title, members) => (
        <div className="bg-gray-800 rounded-lg p-4 border-2 border-gray-700 text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-bold mb-4 text-blue-300">{title}</h2>
            <ul className="pl-5">
                {members.map((member, index) => (
                    <li key={index} className="text-xl mb-2 hover:text-blue-300 transition-colors duration-300">
                        {typeof member === 'object' ? member.name : member}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="mt-12">
            <hr className="border-gray-400" />
            <h1 className="text-6xl font-bold text-blue-300 mt-8 text-center mb-8 hover:text-blue-400 transition-colors duration-300">
                FULL TEAM
            </h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                {renderYearSection("First Year", firstYear)}
                {renderYearSection("Second Year", secondYear)}
                {renderYearSection("Third Year", thirdYear)}
            </div>
        </div>
    );
};

const Team = () => {
    // Get team data from JSON with null checks
    const facad = data?.Team?.facad || [];
    const bTech = data?.Team?.bTech || [];
    const alumni = data?.Team?.alumni || [];

    const renderSection = (title, members, cols = "lg:grid-cols-3") => {
        if (!members || members.length === 0) return null;
        
        return (
            <>
                <h1 className="text-6xl font-bold text-blue-300 text-center mt-8 mb-8 hover:text-blue-400 transition-colors duration-300">
                    {title}
                </h1>
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
            </>
        );
    };

    return (
        <div className="min-h-screen bg-black p-12">
            {/* Faculty Advisor Section */}
            {renderSection("FACULTY ADVISOR", facad, "lg:grid-cols-1")}

            {/* BTech Team Section */}
            {renderSection("B.TECH TEAM", bTech)}

            {/* Current Year Teams */}
            <FullTeam />

            {/* Alumni Section */}
            {renderSection("ALUMNI", alumni)}
        </div>
    );
};

export default Team;