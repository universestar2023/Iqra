import React from "react";
import Sidebar from "./navbar1"; // Sidebar component
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 mt-5 rounded-lg shadow-xl text-white py-16 px-6 text-center" >
          <h1 className="text-4xl font-bold mb-4">Shape Your Future With Confidence</h1>
          <p className="text-lg mb-8">
            Explore your career options and make informed decisions for a brighter future.
          </p>
          <Link to='/tt'><button className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
            Get Started Now
          </button></Link>
        </section>

        {/* Cards Section */}
        <section className="py-12 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Choose Your Path
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Link to='/classx'><div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src="https://img.freepik.com/free-vector/collection-high-school-students_1262-19750.jpg"
                alt="Class X Guidance"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Class X</h3>
              <p className="text-gray-600 mt-2">
                Explore future pathways and choose the right stream to shape your academic journey.
              </p>
            </div></Link>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src="https://img.freepik.com/premium-vector/happy-male-student-portrait-with-smiling-friends-group-outdoors_1316704-57454.jpg?semt=ais_hybrid"
                alt="Class XII Guidance"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Class XII</h3>
              <p className="text-gray-600 mt-2">
                Unlock higher education options and get guidance on courses and careers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg"
                alt="Undergraduate Guidance"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Undergraduate</h3>
              <p className="text-gray-600 mt-2">
                Plan your professional journey and explore postgraduate options.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <img
                src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg"
                alt="Job Market Guidance"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Job Market</h3>
              <p className="text-gray-600 mt-2">
                Navigate the job market and receive expert advice on securing jobs.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "This platform helped me choose the perfect stream after Class X. I feel more confident
                about my future."
              </p>
              <p className="mt-4 font-semibold text-gray-800">- Student A</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "The career guidance here was invaluable in making the right decision for my higher
                education."
              </p>
              <p className="mt-4 font-semibold text-gray-800">- Student B</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "I was able to navigate the job market easily and secure my dream job, thanks to the
                expert advice!"
              </p>
              <p className="mt-4 font-semibold text-gray-800">- Student C</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 mb-5 rounded-lg shadow-lg text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8">
            Join thousands of students in making informed career decisions.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
            Sign Up Today
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
