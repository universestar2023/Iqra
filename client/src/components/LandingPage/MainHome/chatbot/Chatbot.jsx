import React, { useState } from "react";

import ChatBotImg from "./bot.png";

const suggestiveSearches = [
  "What is career options?",
  "Explain career streams?",
  "What is Law.",
  "What does humanities include?",
  "What is Iqra?",
  "How can I improve my skills?",
];

function Chatbot() {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #6a11cb, #2575fc)",
      }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row h-[80vh] w-[900px] bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Left Panel - Chatbot */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <iframe
            className="w-full h-[500px] rounded-2xl border-0"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/db7483ef-394e-4313-a028-56e8399f6ca2"
            title="Dialogflow Chat"
          ></iframe>

          {/* Search Bar */}
          <div className="mt-4">
            {/* <input
              type="text"
              placeholder="Ask me something..."
              value={query}
              onChange={handleSearchChange}
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            /> */}
            <ul className="mt-2 bg-gray-100 rounded-lg shadow-md max-h-40 overflow-y-auto">
              {suggestiveSearches
                .filter((search) =>
                  search.toLowerCase().includes(query.toLowerCase())
                )
                .map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Right Panel - Chatbot Image */}
        <div className="flex-1 p-5 flex justify-center items-center bg-gradient-to-tl from-blue-400 to-indigo-500 rounded-3xl">
          <img
            src={ChatBotImg}
            alt="Chatbot"
            className="w-[250px] h-[250px] object-contain transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
