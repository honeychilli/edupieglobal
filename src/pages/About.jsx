import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Institute Image */}
      <section className="mb-8">
        <img
          src="/src/assets/institute.jpeg" // Add your image path here
          alt="Institute"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* About the Institute */}
      <section className="mb-8">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          EDU-PIE GLOBAL was established with the vision to bridge the gap between academic education and the corporate world.
          Our mission is to make graduates and undergraduates 'corporate-ready' by equipping them with necessary soft skills, communication abilities, and practical knowledge.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our goal is to help students and professionals enhance their skills through various courses and workshops. We aim to create professionals who are well-prepared to meet the demands of the corporate world.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Over the years, we have trained hundreds of graduates, helping them secure jobs and excel in their careers. Our vision for the future is to continue to empower the youth and shape the future of corporate professionals.
        </p>
      </section>

      {/* Director's Section */}
      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">Our Director</h3>
        <div className="flex flex-col  justify-center items-center space-x-6">
          <img
            src="/src/assets/director.jpeg" // Add the director's image path here
            alt="Director"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />

<h4 className="text-2xl font-medium text-gray-800 "> M Bhimsen</h4>
            <p className="text-lg text-gray-600">Director, Edu-Pie Global, LLP</p>
            <p className="mt-4 text-lg text-gray-700">
            M Bhimsen is a visionary leader with over 20 years of experience in the corporate and education sectors. 
              His passion for shaping young minds and empowering students to achieve their career goals led him to establish EDU-PIE GLOBAL.
            </p>
          <div>
            
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="/path-to-team-member1-image.jpg" // Add team member's image path here
              alt="Team Member 1"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <h4 className="text-xl font-medium text-gray-800 mt-4">Alice Smith</h4>
            <p className="text-lg text-gray-600">Lead Trainer</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/path-to-team-member2-image.jpg" // Add team member's image path here
              alt="Team Member 2"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <h4 className="text-xl font-medium text-gray-800 mt-4">Bob Johnson</h4>
            <p className="text-lg text-gray-600">Program Coordinator</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/path-to-team-member3-image.jpg" // Add team member's image path here
              alt="Team Member 3"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <h4 className="text-xl font-medium text-gray-800 mt-4">Carol Lee</h4>
            <p className="text-lg text-gray-600">HR Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
