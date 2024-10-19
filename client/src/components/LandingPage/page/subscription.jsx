import React from 'react';

function Subscription() {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-900 text-white">
      {/* Title Section */}
      <div className="mx-auto max-w-2xl lg:text-center mb-8"> {/* Added margin-bottom */}
        <h2 className="text-4xl font-bold text-white">
          Plans we Offer
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Purchase 1 Report Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs text-center">
          <h3 className="text-xl font-semibold mb-2">Free</h3>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Access to limited resources
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Access to Chatbot
            </li>
          </ul>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
            Sign Up
          </button>
        </div>

        {/* Starter Plan Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs text-center border-2 border-blue-500">
          <h3 className="text-xl font-semibold mb-2">Starter Plan</h3>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Access to all streams
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Assestment Support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Councelling Support
            </li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
            Avail Now
          </button>
        </div>

        {/* Agency Plan Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs text-center">
          <h3 className="text-xl font-semibold mb-2">Yearly Plan</h3>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Access to all resouces
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Career Guidance Support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Assestment Support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Chatbot Support
            </li>
          </ul>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
            Avail Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
