// src/pages/Home.js
import React from 'react';
import Logo from '../assets/Logo.jpeg'; // Adjust the path as needed based on the file structure

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white pt-10">
  
    <div className="flex flex-col items-center text-center space-y-5 -mt-10">
      
      {/* Logo */}
      <img
        src={Logo}
        alt="Director"
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg mb-6"
      />
  
      {/* Business Name and Tagline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2">EDU-PIE GLOBAL, LLP</h1>
      <p className="text-lg md:text-xl font-light mb-4">Planning | Initiation | Evaluation</p>
      
      {/* Welcome Message */}
      <p className="text-lg max-w-lg">
        We Make Professionals out of Graduates
      </p>
      
      {/* Call to Action Button */}
      <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
        Learn More
      </button>
  
    </div>
  </section>
  
  );
};

export default Home;
