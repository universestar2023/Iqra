import React from "react";
import img from "../page/lowb.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Fixed Centered Logo */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img src={img} alt="Logo" className="w-66 h-48 opacity-15" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 py-16">
        {/* Text Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Shape Your Future with Us!
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6">
            A centralized platform is ready to serve you, with what you need to make a decision. 
          </p>
          <button className="text-white bg-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-900 transition duration-200">
            Get Started
          </button>
        </div>

        {/* Fixed Size Image */}
        <div className="ml-12">
          <img
            src="https://hyderabadpsychologist.com/wp-content/uploads/2018/08/career-tree.png"
            alt="Career Guidance Illustration"
            className="w-104 h-104 object-contain " // Size between 96 and 112
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
