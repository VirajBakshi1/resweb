import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaEnvelope, FaPlus, FaTimes } from 'react-icons/fa';

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/coep_robotics",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500"
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/RobotStudyCircle",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@coeproboticsv",
      color: "hover:bg-red-600"
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/robot-study-circle/",
      color: "hover:bg-blue-700"
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:rsc@coeptech.ac.in",
      color: "hover:bg-green-600"
    }
  ];

  // Desktop Version
  const DesktopSidebar = () => (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 p-3">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
          to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000"/>
        <div className="relative bg-black/80 rounded-lg border border-blue-500/30 flex flex-col gap-4 p-3">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 flex items-center justify-center rounded-lg 
                bg-black/50 text-gray-400 hover:text-white transition-all duration-300 
                ${social.color} transform hover:scale-110`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile Version
  const MobileSocials = () => (
    <div className="fixed left-6 bottom-6 lg:hidden z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 
          to-purple-600 text-white flex items-center justify-center transition-transform 
          duration-300 transform hover:scale-110 focus:outline-none"
      >
        {isOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
      </button>

      {/* Social Icons */}
      <div className={`absolute bottom-16 left-1 space-y-4 transition-all duration-500 
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center rounded-full 
              bg-black/80 border border-blue-500/30 text-gray-400 hover:text-white 
              transition-all duration-300 ${social.color} transform hover:scale-110
              backdrop-blur-sm`}
            style={{
              transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <DesktopSidebar />
      <MobileSocials />
    </>
  );
};

export default SocialSidebar;