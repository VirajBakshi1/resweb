import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'rsc@coeptech.ac.in',
          subject: `Contact Form Submission from ${formData.name}`
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            We would love to hear from you. Feel free to contact us for any inquiries about the Robotics & Automation Lab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Map and Contact Info */}
          <div className="space-y-8">
            {/* Google Maps Embed */}
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
                to-purple-600 rounded-lg blur opacity-30"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6529314087928!2d73.85397067499179!3d18.529280982574395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0851b4ab945%3A0xe3b6c5c7d6c5c5c5!2sCollege%20of%20Engineering%20Pune!5e0!3m2!1sen!2sin!4v1628597123456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
              ></iframe>
            </div>

            {/* Contact Information Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 
                to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative p-6 bg-black/50 rounded-lg border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 
                  to-purple-400 bg-clip-text text-transparent">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaMapMarkedAlt className="w-6 h-6 mt-1 text-cyan-400" />
                    <div>
                      <p className="text-blue-100">
                        Robotics & Automation Lab,<br/>
                        Production Department,<br/>
                        College of Engineering Pune,<br/>
                        Wellesley Road, Shivajinagar, Pune.<br/>
                        411 005
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <FaPhone className="w-5 h-5 text-cyan-400" />
                      <span className="text-blue-100">020-25507366</span>
                    </div>
                    <div className="flex items-center gap-4 pl-9">
                      <span className="text-blue-100">+91 - 9527424416</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaEnvelope className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:rsc@coep.ac.in" 
                      className="text-blue-400 hover:text-blue-300 transition-colors">
                      rsc@coep.ac.in
                    </a>
                  </div>

                  <div className="space-y-4">
                    <a href="https://www.facebook.com/RobotStudyCircle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-blue-400 hover:text-blue-300 transition-colors">
                      <FaFacebook className="w-5 h-5 text-cyan-400" />
                      RobotStudyCircle
                    </a>

                    <a href="https://www.instagram.com/coep_robotics" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-blue-400 hover:text-blue-300 transition-colors">
                      <FaInstagram className="w-5 h-5 text-cyan-400" />
                      @coep_robotics
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-500/30">
                  <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 
                    bg-clip-text text-transparent">
                    Lab Incharge
                  </h4>
                  <p className="text-blue-100">
                    Dr. S. S. Ohol<br/>
                    Department of Mechanical Engineering,<br/>
                    College of Engineering, Pune
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <FaPhone className="w-5 h-5 text-cyan-400" />
                    <span className="text-blue-100">020-25507229</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
          <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
  <div className="relative p-6 bg-black/50 rounded-lg">
    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 
      to-purple-400 bg-clip-text text-transparent">
      Send us a Message
    </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-blue-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-blue-500/30 
                      text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-blue-100 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-blue-500/30 
                      text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-blue-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-blue-500/30 
                      text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your message"
                  />
                </div>

                {status && (
                  <div className={`text-sm ${
                    status === 'success' ? 'text-green-400' : 
                    status === 'error' ? 'text-red-400' : 'text-blue-400'
                  }`}>
                    {status === 'sending' && 'Sending message...'}
                    {status === 'success' && 'Message sent successfully!'}
                    {status === 'error' && 'Failed to send message. Please try again.'}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative group overflow-hidden px-8 py-3 rounded-lg bg-gradient-to-r 
                      from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold
                      transform transition-all duration-300 hover:scale-105 focus:outline-none
                      focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:opacity-50"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 
                      bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-transform 
                      duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;