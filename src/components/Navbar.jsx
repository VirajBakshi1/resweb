import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import coepwhitelogo from '../assets/coepwhitelogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/journey", label: "Journey" },
    { to: "/team", label: "Team" },
    { to: "/projects", label: "Projects" },
    { to: "/robocon", label: "ROBOCON" },
    { to: "/competitions", label: "Competitions" },
    { to: "/sponsors", label: "Sponsors " },
    { to: "/socialOutreach", label: "Social Outreach" }
  ];

  const dropdowns = [
    {
      name: 'achievements',
      label: 'Achievements',
      items: [
        { to: '/patents', label: 'Patents' },
        { to: '/papers-published', label: 'Papers' },
        { to: '/awards', label: 'Awards' },
        { to: '/alumni-startups', label: 'Alumni Startups' },
        { to: '/media-coverage', label: 'Media Coverage' },
        { to: '/distinguished-alumni', label: 'Distinguished Alumni' }
      ]
    },
    {
      name: 'organising',
      label: 'Organising',
      items: [
        { to: '/mindspark', label: 'Mindspark' },
        { to: '/robotex', label: 'Robotex' },
        { to: '/ftc', label: 'FTC' }
      ]
    },
    {
      name: 'studentChapter',
      label: 'Student\nChapter',
      items: [
        { to: '/trs', label: 'TRS' },
        { to: '/ieee', label: 'IEEE' }
      ]
    }
  ];

  return (
    <nav
      ref={navRef}
  className='bg-black relative z-50 transition-all duration-300 ease-in-out'
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img src={coepwhitelogo} alt="COEP Logo" className="h-12 w-auto" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
              border border-blue-500/30 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="text-2xl text-blue-400" />
            ) : (
              <FaBars className="text-2xl text-blue-400" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white 
                  transition-all duration-300 group whitespace-pre-line"
              >
                <span className="relative">
                  {link.label.split('\n').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && link.label.includes('\n') && <br />}
                    </React.Fragment>
                  ))}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 
                  to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform 
                  duration-300" />
              </Link>
            ))}

            {/* Dropdowns */}
            {dropdowns.map((dropdown) => (
              <div key={dropdown.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(dropdown.name)}
                  className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white 
                    transition-all duration-300  whitespace-pre-line"
                >
                  <span className="relative">
                    {dropdown.label.split('\n').map((part, i) => (
                      <React.Fragment key={i}>
                        {part}
                        {i === 0 && dropdown.label.includes('\n') && <br />}
                      </React.Fragment>
                    ))}
                    <span className="ml-1 text-xs inline-block transition-transform duration-300 
                      group-hover:rotate-180">▼</span>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 
                    to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform 
                    duration-300" />
                </button>

                {dropdownOpen === dropdown.name && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-black/90 
                    backdrop-blur-lg border border-blue-500/30 rounded-lg shadow-xl overflow-hidden">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setDropdownOpen(null)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white 
                          hover:bg-blue-500/10 transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Link */}
            <Link
              to="/contact"
              className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white 
                transition-all duration-300 group"
            >
              <span className="relative">Contact Us</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 
                to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform 
                duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden transition-all 
              duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-4 
              overflow-y-auto">
              {/* Mobile Links */}
              {mainLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-gray-300 hover:text-white transform hover:scale-105 
                    transition-all duration-300"
                >
                  {link.label.replace('\n', ' & ')}
                </Link>
              ))}

              {/* Mobile Dropdowns */}
              {dropdowns.map((dropdown) => (
                <div key={dropdown.name} className="w-full text-center">
                  <button
                    onClick={() => toggleDropdown(dropdown.name)}
                    className="text-xl text-gray-300 hover:text-white transform hover:scale-105 
                      transition-all duration-300 w-full"
                  >
                    {dropdown.label.replace('\n', ' ')}
                    <span className={`ml-1 inline-block transition-transform duration-300 
                      ${dropdownOpen === dropdown.name ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  <div className={`mt-2 space-y-2 bg-blue-500/10 rounded-lg overflow-hidden transition-all 
                    duration-300 ${dropdownOpen === dropdown.name ? 'max-h-96 p-4' : 'max-h-0'}`}>
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          setDropdownOpen(null);
                          setIsOpen(false);
                        }}
                        className="block text-gray-400 hover:text-white transition-all duration-300 
                          transform hover:translate-x-2 py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Contact Link */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-300 hover:text-white transform hover:scale-105 
                  transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;