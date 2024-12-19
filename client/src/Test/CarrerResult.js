import React, { useState, useEffect } from "react";

export default function CareerResult({ selectedAnswers }) {
  // State to hold the result information
  const [careerResult, setCareerResult] = useState({
    dominantCareer: "",
    explanation: "",
    fullTally: {},
  });

  useEffect(() => {
    // Initialize tally object based on the number of career options
    const tally = { 0: 0, 1: 0, 2: 0, 3: 0 };

    // Tally the answers
    selectedAnswers.forEach(answer => {
      tally[answer]++;
    });

    // Calculate the dominant career based on the tally
    const dominantCareerIndex = Object.keys(tally).reduce((a, b) =>
      tally[a] > tally[b] ? a : b
    );

    const careerPaths = [
      "Creative Careers (e.g., Writing, Designing)", // Index 0
      "Problem-Solving Careers (e.g., Math, Puzzles)", // Index 1
      "People-Oriented Careers (e.g., Teaching, Coaching)", // Index 2
      "Technical Careers (e.g., Programming, Engineering)", // Index 3
    ];

    const explanation = `You selected options that show a strong preference for ${careerPaths[dominantCareerIndex]}. This indicates your interests align with this career path.`;

    // Set the state with the result
    setCareerResult({
      dominantCareer: careerPaths[dominantCareerIndex],
      explanation,
      fullTally: tally,
    });
  }, [selectedAnswers]); // Dependency on selectedAnswers to recalculate when they change

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
    <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Your Career Result</h1>
    
    <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
      <p className="text-xl font-semibold text-gray-800 mb-2"><strong>Dominant Career:</strong></p>
      <p className="text-lg text-gray-700">{careerResult.dominantCareer}</p>
    </div>
  
    <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
      <p className="text-xl font-semibold text-gray-800 mb-2"><strong>Explanation:</strong></p>
      <p className="text-lg text-gray-700">{careerResult.explanation}</p>
    </div>
  
    {/* Enhanced Tally Section */}
    <div className="bg-gray-50 p-4 rounded-md shadow-md">
      <p className="text-xl font-semibold text-gray-800 mb-2"><strong>Career Category Tally:</strong></p>
      
      {/* Tally Display */}
      <div className="space-y-4">
        {Object.entries(careerResult.fullTally).map(([key, value], index) => {
          const careerPaths = [
            "Creative Careers (e.g., Writing, Designing)", // Index 0
            "Problem-Solving Careers (e.g., Math, Puzzles)", // Index 1
            "People-Oriented Careers (e.g., Teaching, Coaching)", // Index 2
            "Technical Careers (e.g., Programming, Engineering)", // Index 3
          ];
  
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-1/4 text-gray-800">{careerPaths[key]}</div>
              <div className="w-3/4 bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${
                    key == 2 ? "bg-indigo-500" : "bg-gray-400"
                  }`}
                  style={{ width: `${(value / Math.max(...Object.values(careerResult.fullTally))) * 100}%` }}
                ></div>
              </div>
              <div className="text-gray-700">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  
  );
}
