import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCommunicationImage from '/src/assets/businesscom.jpeg'; // Replace with actual image paths
import SpokenEnglishImage from '/src/assets/spokeneng.jpeg';
import PresentationSkillsImage from '/src/assets/presentation.jpeg';
import EmailEtiquetteImage from '/src/assets/emailetiq.jpeg';
import StressManagementImage from '/src/assets/stressmanage.jpeg';
import KannadaSpeakingImage from '/src/assets/kannada.jpeg';
import PublicSpeakingImage from '/src/assets/publicspeaking.jpeg';

// src/pages/Programs.js


const Programs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl text-center font-semibold text-gray-800 mb-12">Our Programs</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Business Communication Card */}
        <button onClick={() => window.location.href = '/program/business-communication'}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img src={BusinessCommunicationImage} alt="Business Communication" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Business Communication</h3>
              <p className="text-gray-700">Learn effective business communication strategies to enhance your professional interactions.</p>
            </div>
          </div>
        </button>

        {/* Spoken English Card */}
        <button onClick={() => window.location.href = '/program/spoken-english'}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img src={SpokenEnglishImage} alt="Spoken English" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Spoken English</h3>
              <p className="text-gray-700">Improve your spoken English skills to confidently communicate in professional settings.</p>
            </div>
          </div>
        </button>

        {/* Presentation Skills Card */}
        <button onClick={() => window.location.href = '/program/presentation-skills'}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img src={PresentationSkillsImage} alt="Presentation Skills" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Presentation Skills</h3>
              <p className="text-gray-700">Master the art of delivering powerful and persuasive presentations.</p>
            </div>
          </div>
        </button>

        {/* Email Etiquette Card */}
        <button onClick={() => window.location.href = '/program/email-etiquette'}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img src={EmailEtiquetteImage} alt="Email Etiquette" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Email Etiquette</h3>
              <p className="text-gray-700">Learn the dos and don'ts of professional email communication.</p>
            </div>
          </div>
        </button>

        {/* Stress Management Card */}
        <button onClick={() => window.location.href = '/program/stress-management'}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img src={StressManagementImage} alt="Stress Management" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Stress Management</h3>
              <p className="text-gray-700">Learn techniques to manage stress and stay productive in high-pressure environments.</p>
            </div>
          </div>
        </button>

        {/* Kannada Speaking Card */}
        <button onClick={() => window.location.href = '/program/kannada-speaking'}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img src={KannadaSpeakingImage} alt="Kannada Speaking" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Online Kannada Speaking</h3>
              <p className="text-gray-700">Master spoken Kannada through interactive sessions.</p>
            </div>
          </div>
        </button>

        {/* Public Speaking Card */}
        <button onClick={() => window.location.href = '/program/public-speaking'}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img src={PublicSpeakingImage} alt="Public Speaking" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Public Speaking</h3>
              <p className="text-gray-700">Gain confidence and skills in public speaking and extemporaneous speaking.</p>
            </div>
          </div>
        </button>

      </div>
    </section>
  );
};

export default Programs;