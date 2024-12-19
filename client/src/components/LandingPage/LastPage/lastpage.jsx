import React from "react";
import { Link } from "react-router-dom";
const LastPage = () => {
  return (
    <section id="insight">
    <div className="min-h-[60vh] bg-indigo-200 flex flex-col justify-center items-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black mt-10 mb-3">Insights</h2>
      <p className="mb-3 text-lg leading-8 text-gray-700">
      Explore Future Pathways, Unlock Higher Education Options.<br/>Plan Your Professional Journey, Navigate the Job Market
          </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-600 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
          </svg>
          <h3 className="text-lg font-semibold text-white">Class X</h3>
          <p className="text-sm text-indigo-600">This is the first card description.</p>
        </div>

        <div className="bg-indigo-600 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-pen-fill"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
          </svg>
          <h3 className="text-lg font-semibold text-white">Class XII</h3>
          <p className="text-sm text-indigo-600">This is the second card description.</p>
        </div>

        <div className="bg-indigo-600 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-mortarboard-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
          </svg>
          <h3 className="text-lg font-semibold text-white">UG</h3>
          <p className="text-sm text-indigo-600">This is the third card description.</p>
        </div>

        <div className="bg-indigo-600 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-person-workspace"
            viewBox="0 0 16 16"
          >
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
          </svg>
          <h3 className="text-lg font-semibold text-white">Job</h3>
          <p className="text-sm text-indigo-600">This is the fourth card description.</p>
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-10">
            <Link to="/signup">
            <button className="text-white bg-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-900 transition duration-200">
              Get Started
            </button>
            </Link>
          </div>
    </div>
    </section>
  );
};

export default LastPage;
