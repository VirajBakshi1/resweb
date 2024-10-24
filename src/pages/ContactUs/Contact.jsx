import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Reach Out to Us</h3>
            <p>We would love to hear from you. Feel free to contact us for any inquiries about the Robotics & Automation Lab.</p>
            
            <div className='mb-4 mt-8'>
                <FaMapMarkedAlt className='inline-block text-blue-500 mr-2'></FaMapMarkedAlt>
                <span>Robotics & Automation Lab,<br/>
                Production Department,<br/>
                College of Engineering Pune,<br/>
                Wellesley Road, Shivajinagar, Pune. <br/>
                411 005</span>
            </div>

            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>020-25507366</span><br/>
                <span>+91 - 9527424416</span>
            </div>

            <div className='mb-4'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:rsc@coep.ac.in" className='hover:underline text-blue-400'>
                    rsc@coep.ac.in
                </a>
            </div>

            <div className='mb-4 flex items-center'>
                <FaFacebook className='inline-block text-blue-600 mr-2'/>
                <a href="https://www.facebook.com/RobotStudyCircle" target="_blank" rel="noopener noreferrer" className='hover:underline text-blue-400'>
                    www.facebook.com/RobotStudyCircle
                </a>
            </div>

            <div className='mb-4 flex items-center'>
                <FaInstagram className='inline-block text-pink-500 mr-2'/>
                <a href="https://www.instagram.com/coep_robotics" target="_blank" rel="noopener noreferrer" className='hover:underline text-blue-400'>
                    www.instagram.com/coep_robotics
                </a>
            </div>

            <h4 className='mt-8 text-2xl font-bold text-blue-400'>Lab Incharge</h4>
            <p>Dr. S. S. Ohol<br/>
            Department of Mechanical Engineering,<br/>
            College of Engineering, Pune</p>

            <div className='mb-4 mt-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>020-25507229</span>
            </div>
          </div>
          
          {/* Form Section */}
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="email" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400'
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform 
                transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                  Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs