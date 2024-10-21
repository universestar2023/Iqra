import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaUser } from "react-icons/fa"; // Import user icon from FontAwesome or use any other library

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-blue-800 text-white h-screen p-6 space-y-6 flex flex-col justify-between transition-all duration-300 fixed top-0 left-0 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div>
          {/* Sidebar Toggle Button */}
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          {/* Links */}
          <nav className="space-y-4 mt-6">
            {/* Home */}
            <Link
              to="/"
              className="flex items-center space-x-4 p-2 hover:bg-blue-700 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0L1.5 7.293V14.5A1.5 1.5 0 0 0 3 16h10a1.5 1.5 0 0 0 1.5-1.5V7.293L8.354 1.146zM14 14.5a.5.5 0 0 1-.5.5H10v-5H6v5H3.5a.5.5 0 0 1-.5-.5V7.707l5-5 5 5V14.5z" />
                <path d="M7 13h2v3H7v-3z" />
              </svg>
              {isOpen && <span className="text-lg">Home</span>}
            </Link>

            {/* Features */}
            <Link
              to="#"
              className="flex items-center space-x-4 p-2 hover:bg-blue-700 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
              </svg>
              {isOpen && <span className="text-lg">Features</span>}
            </Link>

            {/* Assessment */}
            <Link
              to="/test"
              className="flex items-center space-x-4 p-2 hover:bg-blue-700 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                />
              </svg>
              {isOpen && <span className="text-lg">Assessment</span>}
            </Link>

            {/* About Us */}
            <Link
              to="/about"
              className="flex items-center space-x-4 p-2 hover:bg-blue-700 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-file-earmark-person"
                viewBox="0 0 16 16"
              >
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
              {isOpen && <span className="text-lg">About Us</span>}
            </Link>

            {/* Contact Us */}
            <Link
              to="#"
              className="flex items-center space-x-4 p-2 hover:bg-blue-700 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm13.5 0h-11a.5.5 0 0 0-.287.088l5.511 3.575a.5.5 0 0 0 .552 0L13.5 4.088A.5.5 0 0 0 13.5 4zm.5.911v7.089l-4.511-2.932a1.5 1.5 0 0 0-1.478 0L1.5 12V4.911l5.511 3.576a1.5 1.5 0 0 0 1.478 0L14 4.911z" />
              </svg>
              {isOpen && <span className="text-lg">Contact Us</span>}
            </Link>

            <Link
            to="#"
            className="flex items-center space-x-4 p-2 hover:bg-blue-700 rounded-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
            {isOpen && <span className="text-lg">Logout</span>}
          </Link>
          </nav>
        </div>

        {/* User Profile Icon */}
        <div>
          <Link
            to="/userprofile" // Update this route to match your UserProfile component route
            className="flex items-center space-x-4 p-2 hover:bg-blue-700 rounded-lg transition"
          >
            <FaUser size={24} />
            {isOpen && <span className="text-lg">Profile</span>}
          </Link>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-grow p-6 ml-20">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
