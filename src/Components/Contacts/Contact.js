import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import xtwiter from './twitter (1).png'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending the data to an API or email)
    console.log(formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full px-6 py-12 mt-10 bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 md:text-5xl">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600">
          We’d love to hear from you! Whether you have a question, feedback, or inquiry, feel free to reach out.
        </p>

        {/* Contact Form */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="flex items-center text-2xl font-semibold text-pink-600">
            <FaEnvelope className="mr-3 text-xl" /> Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex space-x-4">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 text-white bg-pink-600 rounded-md hover:bg-pink-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="flex items-center text-2xl font-semibold text-pink-600">
            <FaPhoneAlt className="mr-3 text-xl" /> Direct Inquiries
          </h3>
          <p className="mt-2 text-gray-600">
            You can also reach us directly via email or our social media channels. We’re happy to assist you!
          </p>
          <div className="mt-4 space-y-4">
            <p className="flex items-center text-gray-600">
              <FaEnvelope className="mr-3 text-xl" />
              <a href="mailto:info@example.com" className="text-pink-600 hover:underline">
                aimeblaise4@gmail.com
              </a>
            </p>
            <p className="flex items-center text-gray-600">
              <FaPhoneAlt className="mr-3 text-xl" />
              <span>+250786065249</span>
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.linkedin.com/in/aime-blaise-4b0a9b266/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-pink-600 hover:text-pink-800" />
              </a>
              <a href="https://x.com/BlaiseU_Academy" target="_blank" rel="noopener noreferrer">
                <img src={xtwiter} alt='twitter' className="text-pink-600 w-7 hover:text-pink-800" />
              </a>
            
              <a href="https://www.instagram.com/blaiseu_academy/?__pwa=1" target="_blank" rel="noopener noreferrer">
                <SiInstagram className="text-2xl text-pink-600 hover:text-pink-800" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
