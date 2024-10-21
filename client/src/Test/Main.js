import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import axios from "axios";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_SERVER_HOSTNAME}/api/route/questions`;
        console.log("Fetching data from:", url);  // Log the URL
        const response = await axios.post(url);
        console.log("Data fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Assestment</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-lg">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>You will be asked 10 questions.</li>
          <li>Think About Your Interests</li>
          <li>Consider Your Strengths and Weaknesses.</li>
          <li>Be Honest with Yourself.</li>
        </ol>
      </div>

      <div className="mb-4 w-full max-w-lg">
        <input
          ref={inputRef}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Username*"
        />
      </div>

      <div className="flex justify-between w-full max-w-lg">
        <div className="flex-1 mr-2">
          <Link to="/home" className="w-full block text-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300">
            Back
          </Link>
        </div>
        <div className="flex-1 ml-2">
          <Link to={"quiz"} onClick={startQuiz} className="w-full block text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}
