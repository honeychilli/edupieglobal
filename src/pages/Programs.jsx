// src/pages/Programs.js
import React from 'react';

const Programs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl text-center font-semibold text-gray-800 mb-12">Our Programs</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Corporate Readiness Program</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Business Communication</li>
            <li>Spoken English</li>
            <li>Presentation Skills</li>
            <li>Email Etiquette</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Additional Services</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Stress Management Workshops</li>
            <li>Online Kannada Speaking Sessions</li>
            <li>Public Speaking and Ex-tempore</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programs;
