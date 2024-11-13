import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Contact Form Section */}
      <section className="mb-8">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Your Message</label>
            <textarea id="message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Send Message</button>
        </form>
      </section>

      {/* Get In Touch via Social Media */}
      <section className="mb-8 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-700 mb-4">Follow us on social media or get in touch directly via email.</p>

        <div className="flex justify-center space-x-6">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-800">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600">
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Email Section */}
        <div className="mt-6 text-lg text-gray-700">
          <p className="mb-2">Or reach out to us via email:</p>
          <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">
            <FaEnvelope size={20} className="inline mr-2" />
            youremail@example.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
