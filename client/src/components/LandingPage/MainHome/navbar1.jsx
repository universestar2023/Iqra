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


            <a
              href="/chatbot"
              className="flex items-center space-x-4 p-2 hover:bg-red-700 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                class="bi bi-wechat"
                viewBox="0 0 16 16"
              >
                <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356" />
                <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0" />
              </svg>
              {isOpen && <span className="text-lg">Chatbot</span>}
            </a>
              {/* Features */}
              <Link
              to="/feedback"
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
              {isOpen && <span className="text-lg">Feedback</span>}
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
              <Link to="/">
                {" "}
                {isOpen && <span className="text-lg">Logout</span>}
              </Link>
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
