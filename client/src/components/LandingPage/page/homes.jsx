import React from "react";
import img from "./lowb.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="max-h-screen bg-white relative">
      {/* Fixed Centered Logo */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img src={img} alt="Logo" className="w-66 h-48 opacity-15" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-8 ">
        {/* Text Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-10">
            Shape Your Future with Us!
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">
            A centralized platform is ready to serve you, with what you need to make a decision. 
          </p>
          <Link to="/signup">
          <button  className="text-white bg-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-900 transition duration-200">
            Get Started
          </button>
          </Link>
        </div>
        <div>
          <img
            src="https://hyderabadpsychologist.com/wp-content/uploads/2018/08/career-tree.png"
            alt="Career Guidance Illustration"
            className="w-50 h-50 object-contain sm:w-[620px]" // Size between 96 and 112
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
