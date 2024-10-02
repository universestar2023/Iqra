import React from 'react'

function subscription() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 py-10 bg-gray-900 text-white">
      
      {/* Purchase 1 Report Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs text-center">
        <h3 className="text-xl font-semibold mb-2">Purchase 1 Report</h3>
        <p className="text-sm text-gray-400 mb-4">For individuals and freelancers</p>
        <p className="text-3xl font-bold mb-4">29 USD</p>
        <ul className="text-left space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> One off report
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit
          </li>
        </ul>
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
          Purchase
        </button>
      </div>

      {/* Starter Plan Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs text-center border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-2">Starter Plan</h3>
        <p className="text-sm text-gray-400 mb-4">For individuals and freelancers</p>
        <p className="text-3xl font-bold mb-4">19 USD/mo</p>
        <ul className="text-left space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit amet
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
          Get Started
        </button>
      </div>

      {/* Agency Plan Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs text-center">
        <h3 className="text-xl font-semibold mb-2">Agency Plan</h3>
        <p className="text-sm text-gray-400 mb-4">For individuals and freelancers</p>
        <p className="text-3xl font-bold mb-4">99 USD/mo</p>
        <ul className="text-left space-y-2 mb-6">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit amet
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Lorem ipsum dolor sit
          </li>
        </ul>
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
          Get Started
        </button>
      </div>
      
    </div>
  )
}

export default subscription
