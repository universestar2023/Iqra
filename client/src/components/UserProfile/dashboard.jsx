import React from "react";
import Dashboard from "../LandingPage/Dashboard/dashboard.jsx"; // Import the card grid component
import RotatingMessages from "../LandingPage/Dashboard/RotatingMessages.jsx"; // Import the rotating messages component

const DashboardPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Your Dashboard</h1>
     
      <Dashboard /> {/* The card grid with profile, leaderboard, etc. */}
      
    </div>
  );
};

export default DashboardPage;
