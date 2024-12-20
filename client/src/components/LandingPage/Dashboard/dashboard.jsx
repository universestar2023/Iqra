import React, { useEffect, useState } from "react";
import RotatingMessages from "./RotatingMessages";
import axios from "axios";
import ResultTable from "../../../Test/ResultTable";
import profile from "../../LandingPage/Images/profile.jpg"
import CareerResult from "../../../Test/CarrerResult";
import { useSelector } from "react-redux";
const user = {
  firstName: "John",
  lastName: "Doe",
  email: "Johndoe@gmail.com",
  profileImage: "https://via.placeholder.com/150", // Placeholder image
};

// DashboardCard Component (for layout purposes)
const DashboardCard = ({ title, content, actionText, actionLink }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      {actionText && (
        <a
          href={actionLink}
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {actionText}
        </a>
      )}
    </div>
  );
};

// Leaderboard Component
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch leaderboard data from the backend
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/route/result");
        setLeaderboardData(response.data); // Assuming the API returns an array of results
        setLoading(false);
      } catch (err) {
        setError("Failed to load leaderboard data.");
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  if (loading) {
    return <p>Loading leaderboard data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item, index) => (
            <tr key={index} className="bg-gray-50">
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const Dashboard = () => {
  const selectedAnswers = useSelector((state) => state.result.result);
  return (
    <div className="container mx-auto p-4">
      {/* User Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <img
          src={profile}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>
      </div>

      <RotatingMessages />

      {/* Grid Layout for Other Sections */}
      <div className="flex flex-wrap justify-between gap-6 mt-6">
    <div className="flex-1 min-w-[300px]"> {/* Minimum width for responsiveness */}
        <DashboardCard
            title="New Assessment"
            content="Start your new assessment today."
            actionText="Start Now"
            actionLink="/test"
        />
    </div>
    <div className="flex-1 min-w-[300px]"> {/* Minimum width for responsiveness */}
        <DashboardCard
            title="Feedback"
            content="Have feedback for us? Let us know!"
            actionText="Give Feedback"
            actionLink="/feedback"
        />
    </div>
    <div className="flex-1 min-w-[300px]"> {/* Minimum width for responsiveness */}
        <DashboardCard
            title="Home"
            content="Go back to the homepage."
            actionText="Go to Homepage"
            actionLink="/home"
        />
    </div>
    <div className="flex-1 min-w-[300px]"> {/* Minimum width for responsiveness */}
        <DashboardCard
            title="About Us"
            content="Learn more about our platform."
            actionText="Learn More"
            actionLink="/about"
        />
    </div>
</div>
      {/* <CareerResult selectedAnswers={selectedAnswers}/> */}
    </div>
  );
};

export default Dashboard;
