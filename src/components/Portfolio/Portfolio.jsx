import React from 'react';

// Portfolio Component
 export const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center ">
      {/* About Me Section */}
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mb-12 mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I’m a full stack web developer with expertise in the MERN stack (MongoDB, Express, React, Node.js).
          I enjoy building intuitive web applications that solve real-world problems. 
          In my free time, I love traveling and exploring new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">React</span>
          <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg">Node.js</span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg">Express</span>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">MongoDB</span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">HTML & CSS</span>
          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg">Python</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-50 rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">E-Commerce Storefront</h3>
            <p className="text-gray-600 mb-4">
              A fully functional e-commerce website built using React and Node.js, featuring user authentication, 
              shopping cart, and payment integration.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">View Project</a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Task Management App</h3>
            <p className="text-gray-600 mb-4">
              A task management application built with the MERN stack that allows users to organize tasks and projects, 
              track progress, and set deadlines.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">View Project</a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Blog</h3>
            <p className="text-gray-600 mb-4">
              A personal blog platform created using Next.js, with features for writing, editing, and managing blog posts. 
              Includes a dynamic content editor and user authentication.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">View Project</a>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-50 rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Weather App</h3>
            <p className="text-gray-600 mb-4">
              A weather forecasting application using the OpenWeatherMap API, built with vanilla JavaScript, HTML, and CSS.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">View Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

