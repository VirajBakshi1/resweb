import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import coepwhitelogo from '../assets/coepwhitelogo.png';
import rscwhitelogo from '../assets/rscwhitelogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    handleClose();
  }, [location]);

  const handleClose = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // Match this with your transition duration
    }
  };

  const toggleMenu = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-black text-white h-16 px-4 md:px-16 lg:px-11 relative">
      <div className="container py-3 flex justify-between md:justify-center items-center relative">
        {/* Left: Logos */}
        <div className={`absolute left-4 top-3 flex items-center space-x-3 ${isOpen ? 'hidden' : 'block'} md:flex`}>
          <img src={coepwhitelogo} alt="COEP Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden absolute top-5 right-4 z-50">
          <button onClick={toggleMenu} className="focus:outline-none transition-transform duration-300">
            {isOpen ? (
              <FaTimes className="text-2xl transition-all duration-300 rotate-90" />
            ) : (
              <FaBars className="text-2xl transition-all duration-300" />
            )}
          </button>
        </div>

          {/* Nav Links */}
          <div className={`hidden md:flex space-x-4 text-sm relative`}>
            <Link to="/" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Home</Link>
            <Link to="/journey" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Journey</Link>
            <Link to="/team" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Team</Link>
            <Link to="/Projects" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Projects</Link>
            <Link to="/robocon" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">ROBOCON</Link>
            <Link to="/competitions" className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2">Competitions</Link>
            <Link to="/sponsors" className="block text-center hover:text-blue-300 decoration-blue-300 decoration-2">Sponsors & <br />Affliates</Link>
            <Link to="/socialOutreach" className="block text-center hover:text-blue-300 decoration-blue-300 decoration-2">Social <br />Outreach</Link>

            {/* Achievements Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('achievementsDropdown')}
                className="block hover:text-blue-300 pt-2 decoration-blue-300 decoration-2 relative"
              >
                Achievements
                <span className="ml-1">▼</span>
              </button>
              {dropdownOpen === 'achievementsDropdown' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center bg-purple-400 font-bold text-black mt-10 rounded-lg shadow-lg z-50 w-48">
                  <div className="relative before:content-[''] before:absolute before:left-1/2 before:top-[-8px] before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-transparent before:border-b-black">
                  </div>
                  <Link to="/patents" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Patents</Link>
                  <Link to="/papersPublished" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Papers</Link>
                  <Link to="/awards" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Awards</Link>
                  <Link to="/alumni-startups" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Alumni Startups</Link>
                  <Link to="/media-coverage" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Media Coverage</Link>
                  <Link to="/distinguishedAlumni" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Distinguished Alumni</Link>
                </div>
              )}
            </div>

            {/* Organising Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('organisingDropdown')}
                className="block pt-2 hover:text-blue-300 decoration-blue-300 decoration-2 relative"
              >
                Organising
                <span className="ml-1">▼</span>
              </button>
              {dropdownOpen === 'organisingDropdown' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center bg-purple-400 font-bold text-black mt-10 rounded-lg shadow-lg z-50 w-48">
                  <div className="relative before:content-[''] before:absolute before:left-1/2 before:top-[-8px] before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-transparent before:border-b-black">
                  </div>
                  <Link to="/mindspark" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Mindspark</Link>
                  <Link to="/robotex" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">Robotex</Link>
                  <Link to="/FTC" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">FTC</Link>
                </div>
              )}
            </div>

            {/* Student Chapter Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('studentChapterDropdown')}
                className="block hover:text-blue-300 decoration-blue-300 decoration-2 relative"
              >
                Student <br />Chapter
                <span className="ml-1">▼</span>
              </button>
              {dropdownOpen === 'studentChapterDropdown' && (
                <div className="absolute font-bold left-1/2 transform -translate-x-1/2 text-center bg-purple-400 text-black mt-6 rounded-lg shadow-lg z-50 w-48">
                  <div className="relative before:content-[''] before:absolute before:left-1/2 before:top-[-8px] before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-transparent before:border-b-black">
                  </div>
                  <Link to="/trs" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">TRS</Link>
                  <Link to="/ieee" className="block rounded-lg px-4 py-2 hover:bg-cyan-400">IEEE</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="block text-center hover:text-blue-300 decoration-blue-300 decoration-2">Contact <br />Us</Link>
          </div>
        </div>


    {/* Mobile Menu with Animation */}
    <div 
    className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out ${
      isOpen 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-full pointer-events-none'
    } ${isClosing ? 'translate-x-full' : ''} z-40`}
  >
    <div className="flex flex-col items-center justify-center h-full space-y-4 overflow-y-auto">
      {/* Mobile menu links with hover animation */}
      <Link 
        to="/" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Home
      </Link>
      <Link 
        to="/journey" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Journey
      </Link>
      <Link 
        to="/team" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Team
      </Link>
      <Link 
        to="/Projects" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Projects
      </Link>
      <Link 
        to="/robocon" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        ROBOCON
      </Link>
      <Link 
        to="/competitions" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Competitions
      </Link>
      <Link 
        to="/sponsors" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Sponsors & Affliates
      </Link>
      <Link 
        to="/socialOutreach" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Social Outreach
      </Link>

      {/* Mobile Achievements Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('achievementsDropdown')}
          className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        >
          Achievements <span className="ml-1">▼</span>
        </button>
        {dropdownOpen === 'achievementsDropdown' && (
          <div className="mt-2 bg-purple-400 text-center text-black font-bold rounded-lg shadow-lg w-48 transition-all duration-200 ease-in-out">
            <Link to="/patents" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transform transition-all duration-200 hover:scale-105">Patents</Link>
            <Link to="/papersPublished" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transform transition-all duration-200 hover:scale-105">Papers</Link>
            <Link to="/awards" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transform transition-all duration-200 hover:scale-105">Awards</Link>
            <Link to="/alumni-startups" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transform transition-all duration-200 hover:scale-105">Alumni Startups</Link>
            <Link to="/media-coverage" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transform transition-all duration-200 hover:scale-105">Media Coverage</Link>
            <Link to="/distinguishedAlumni" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transform transition-all duration-200 hover:scale-105">Distinguished Alumni</Link>
          </div>
        )}
      </div>

      {/* Mobile Organising Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('organisingDropdown')}
          className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        >
          Organising <span className="ml-1">▼</span>
        </button>
        {dropdownOpen === 'organisingDropdown' && (
          <div className="mt-2 bg-gray-900 text-center text-white rounded-lg shadow-lg w-48 transition-all duration-200 ease-in-out">
            <Link to="/mindspark" className="block px-4 py-2 hover:bg-gray-700 transform transition-all duration-200 hover:scale-105">Mindspark</Link>
            <Link to="/robotex" className="block px-4 py-2 hover:bg-gray-700 transform transition-all duration-200 hover:scale-105">Robotex</Link>
            <Link to="/FTC" className="block px-4 py-2 hover:bg-gray-700 transform transition-all duration-200 hover:scale-105">FTC</Link>
          </div>
        )}
      </div>

      {/* Mobile Student Chapter Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('studentChapterDropdown')}
          className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        >
          Student Chapter <span className="ml-1">▼</span>
        </button>
        {dropdownOpen === 'studentChapterDropdown' && (
          <div className="mt-2 bg-gray-900 text-center text-white rounded-lg shadow-lg w-48 transition-all duration-200 ease-in-out">
            <Link to="/trs" className="block px-4 py-2 hover:bg-gray-700 transform transition-all duration-200 hover:scale-105">TRS</Link>
            <Link to="/ieee" className="block px-4 py-2 hover:bg-gray-700 transform transition-all duration-200 hover:scale-105">IEEE</Link>
          </div>
        )}
      </div>

      <Link 
        to="/contact" 
        className="block text-xl transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
        onClick={handleClose}
      >
        Contact Us
      </Link>
    </div>
  </div>
</nav>
);
};

export default Navbar;