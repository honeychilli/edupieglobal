// src/pages/ProgramDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProgramDetail = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data for the programs (now including YouTube video URLs)
  const programsData = {
    'business-communication': {
      name: 'Business Communication',
      description: 'Learn effective business communication strategies to enhance your professional interactions.',
      videoUrl: 'https://www.youtube.com/embed/WESGDi_ajUU', // Replace with actual video ID
    },
    'spoken-english': {
      name: 'Spoken English',
      description: 'Improve your spoken English skills to confidently communicate in professional settings.',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video ID
    },
    'presentation-skills': {
      name: 'Presentation Skills',
      description: 'Master the art of delivering powerful and persuasive presentations.',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video ID
    },
    'email-etiquette': {
      name: 'Email Etiquette',
      description: 'Learn the dos and don\'ts of professional email communication.',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video ID
    },
    'stress-management': {
      name: 'Stress Management',
      description: 'Learn techniques to manage stress and stay productive in high-pressure environments.',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video ID
    },
    'kannada-speaking': {
      name: 'Online Kannada Speaking',
      description: 'Master spoken Kannada through interactive sessions.',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video ID
    },
    'public-speaking': {
      name: 'Public Speaking',
      description: 'Gain confidence and skills in public speaking and extemporaneous speaking.',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video ID
    }
  };

  const program = programsData[id]; // Fetch the program details based on the ID

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-20 px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          {/* Embed YouTube video instead of an image */}
          <div className="w-full h-96 mb-8">
            <iframe 
              src={program.videoUrl} 
              title={program.name} 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="text-4xl font-semibold">{program.name}</h1>
          <p className="text-lg text-gray-700 mt-4">{program.description}</p>

          <button onClick={openModal} className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg">Enquire</button>
        </div>
        
        {/* Modal for enquiry */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Enquire About {program.name}</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Your Name</label>
                  <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Your Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Your Message</label>
                  <textarea id="message" className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-300 text-black rounded-lg mr-4">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramDetail;
