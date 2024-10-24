import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger and close button
import coepwhitelogo from '../assets/coepwhitelogo.png';
import rscwhitelogo from '../assets/rscwhitelogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For handling hamburger menu toggle
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null); // For handling dropdown toggle

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-black text-white px-4 md:px-16 lg:px-11 relative">
      <div className="container py-3  flex justify-between items-center">
        {/* Left: Logos (hidden on mobile when menu is open) */}
        <div className={`flex items-center space-x-3 ${isOpen ? 'hidden' : 'block'} md:flex`}>
          <img src={coepwhitelogo} alt="COEP Logo" className="h-10 w-auto" />
        </div>

        {/* Right: Hamburger and links */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Nav Links (hidden on small screens, shown on desktop) */}
          <div className={`hidden md:flex space-x-4 text-sm relative`}>
            <a href="/" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Home</a>
            <a href="/journey" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Journey</a>
            <a href="/team" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Team</a>
            <a href="/Projects" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Projects</a>
            <a href="/robocon" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">ROBOCON</a>
            <a href="/competitions" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Competitions</a>
            <a href="/sponsors" className="block text-center hover:text-blue-300 decoration-blue-300 decoration-2">Sponsors & Affliates</a>

            {/* New Achievements Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('achievementsDropdown')}
                className="block hover:text-blue-300 pt-2 decoration-blue-300 decoration-2 relative"
              >
                Achievements
                <span className="ml-1">▼</span> {/* Dropdown arrow */}
              </button>
              {dropdownOpen === 'achievementsDropdown' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center  bg-gray-400  text-black mt-10 rounded-lg shadow-lg z-50 w-48">
                  <div className="relative before:content-[''] before:absolute before:left-1/2 before:top-[-8px] before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-transparent before:border-b-black">
                  </div>
                  <a href="/patents" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Patents</a>
                  <a href="/papersPublished" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Papers</a>
                  <a href="/awards" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Awards</a>
                  <a href="/alumni-startups" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Alumni Startups</a>
                  <a href="/media-coverage" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Media Coverage</a>
                  <a href="/distinguishedAlumni" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Distinguished Alumni</a>
                </div>
              )}
            </div>

            {/* New Organising Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('organisingDropdown')}
                className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2 relative"
              >
                Organising
                <span className="ml-1">▼</span>
              </button>
              {dropdownOpen === 'organisingDropdown' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center  bg-gray-400  text-black mt-10 rounded-lg shadow-lg z-50 w-48">
                  <div className="relative before:content-[''] before:absolute before:left-1/2 before:top-[-8px] before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-transparent before:border-b-black">
                  </div>
                  <a href="/mindspark" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Mindspark</a>
                  <a href="/robotex" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Robotex</a>
                  <a href="/ftc" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">FTC</a>
                  <a href="/social-outreach" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Social Outreach</a>
                </div>
              )}
            </div>

            {/* New Student Chapter Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('studentChapterDropdown')}
                className="block hover:text-blue-300 decoration-blue-300 decoration-2 relative"
              >
                Student Chapter
                <span className="ml-1">▼</span>
              </button>
              {dropdownOpen === 'studentChapterDropdown' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center  bg-gray-400  text-black mt-6 rounded-lg shadow-lg z-50 w-48">
                  <div className="relative before:content-[''] before:absolute before:left-1/2 before:top-[-8px] before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-transparent before:border-b-black">
                  </div>
                  <a href="/trs" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">TRS</a>
                  <a href="/ieee" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">IEEE</a>
                </div>
              )}
            </div>

            <a href="/contact" className="block text-center hover:text-blue-300 decoration-blue-300 decoration-2">Contact Us</a>
          </div>

          {/* Search Feature - Hidden on mobile */}
          <form className="hidden md:flex items-center space-x-2" onSubmit={handleSearch}>
            <input
              type="text"
              className="px-3 py-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-1 bg-blue-700 rounded-lg hover:bg-blue-900 transition duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden fixed inset-0 bg-black backdrop-opacity-45 flex flex-col justify-center items-center space-y-4 z-50">
    <div className="absolute top-4 right-4">
      <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
        <FaTimes className="text-3xl" />
      </button>
    </div>
    <a href="/" className="block text-xl">Home</a>
    <a href="/journey" className="block text-xl">Journey</a>
    <a href="/team" className="block text-xl">Team</a>
    <a href="/Projects" className="block text-xl">Projects</a>
    <a href="/robocon" className="block text-xl">ROBOCON</a>
    <a href="/competitions" className="block text-xl">Competitions</a>
    <a href="/sponsors" className="block text-xl">Sponsors & Affliates</a>

    {/* Achievements Dropdown for Mobile */}
    <div className="relative">
      <button
        onClick={() => toggleDropdown('achievementsDropdown')}
        className="block text-xl"
      >
        Achievements <span className="ml-1">▼</span>
      </button>
      {dropdownOpen === 'achievementsDropdown' && (
        <div className="mt-2 bg-black  text-center text-white rounded shadow-lg z-50 w-48">
          <a href="/patents" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Patents</a>
          <a href="/papersPublished" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Papers</a>
          <a href="/awards" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Awards</a>
          <a href="/alumni-startups" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Alumni Startups</a>
          <a href="/media-coverage" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Media Coverage</a>
          <a href="/distinguishedAlumni" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Distinguished Alumni</a>
        </div>
      )}
    </div>

    {/* Organising Dropdown for Mobile */}
    <div className="relative">
      <button
        onClick={() => toggleDropdown('organisingDropdown')}
        className="block text-xl"
      >
        Organising <span className="ml-1">▼</span>
      </button>
      {dropdownOpen === 'organisingDropdown' && (
        <div className="mt-2 bg-black text-center text-white rounded shadow-lg z-50 w-48">
          <a href="/mindspark" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Mindspark</a>
          <a href="/robotex" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Robotex</a>
          <a href="/ftc" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">FTC</a>
          <a href="/social-outreach" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">Social Outreach</a>
        </div>
      )}
    </div>

    {/* Student Chapter Dropdown for Mobile */}
    <div className="relative">
      <button
        onClick={() => toggleDropdown('studentChapterDropdown')}
        className="block text-xl"
      >
        Student Chapter <span className="ml-1">▼</span>
      </button>
      {dropdownOpen === 'studentChapterDropdown' && (
        <div className="mt-2 bg-black text-center text-white rounded shadow-lg z-50 w-48">
          <a href="/trs" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">TRS</a>
          <a href="/ieee" className="block rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700">IEEE</a>
        </div>
      )}
    </div>

    <a href="/contact" className="block text-xl">Contact Us</a>
  </div>
)}
    </nav>
  );
};

export default Navbar;