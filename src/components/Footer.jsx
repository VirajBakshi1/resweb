import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: "RSC Portal", url: "https://example.com/rsc-portal" },
    { name: "COEP Official Website", url: "https://example.com/coep" },
    { name: "ROBOCON 2023 Cambodia", url: "https://example.com/robocon-2023-cambodia" },
    { name: "ROBOCON 2022 India", url: "https://example.com/robocon-2022-india" },
    { name: "ROBOCON 2021 China", url: "https://example.com/robocon-2021-china" },
    { name: "ROBOCON 2020 Suva Fiji", url: "https://example.com/robocon-2020-fiji" },
    { name: "ROBOCON 2019 Mongolia", url: "https://example.com/robocon-2019-mongolia" },
    { name: "ROBOCON 2018 Vietnam", url: "https://example.com/robocon-2018-vietnam" },
    { name: "ROBOCON 2017 Japan", url: "https://example.com/robocon-2017-japan" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", url: "https://facebook.com" },
    { icon: "fab fa-instagram", url: "https://instagram.com" },
    { icon: "fab fa-linkedin", url: "https://linkedin.com" },
    { icon: "fab fa-youtube", url: "https://youtube.com" }
  ];

  const contactDetails = {
    address: [
      "Robot Study Circle",
      "Robotics & Automation Lab,",
      "Production Dept., College of Engineering Pune,",
      "Wellesly Road, Shivajinagar, Pune - 411005"
    ],
    phoneNumbers: [
      { type: "Phone", number: "020-2550-7366", link: "tel:02025507366" },
      { type: "Mobile", number: "+91 9527 424 416", link: "tel:+919527424416" }
    ],
    mapLink: "https://maps.google.com?q=COEP+Robotics+Lab"
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              EXPLORE LEARN BUILD SHARE
            </h2>
            <p className="text-sm">© 2021 Robot Study Circle</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-100"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Quick Links and Contact Details */}
          <div className="flex flex-col md:flex-row md:space-x-20">
            {/* Quick Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-gray-100 mb-2">Quick Links</h3>
              <ul className="text-sm text-blue-500 space-y-1">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-bold text-gray-100 mb-2">Contact Us</h3>
              <address className="text-sm not-italic text-gray-100">
                {contactDetails.address.map((line, index) => (
                  <div key={index}>{line}<br /></div>
                ))}
              </address>
              <p className="text-sm text-gray-100">
                {contactDetails.phoneNumbers.map((phone, index) => (
                  <span key={index}>
                    {phone.type}: <a href={phone.link} className="text-blue-500">{phone.number}</a><br />
                  </span>
                ))}
              </p>
              <p className="text-sm">
                <a href={contactDetails.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;