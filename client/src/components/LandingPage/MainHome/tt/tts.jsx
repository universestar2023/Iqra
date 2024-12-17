import React, { useState } from 'react';

// Expanded question set for a more accurate test
const hollandQuestions = [
  { type: 'Realistic', question: 'Do you enjoy working with your hands or with tools?' },
  { type: 'Realistic', question: 'Do you like physical activities and working outdoors?' },
  { type: 'Investigative', question: 'Do you enjoy solving puzzles or complex problems?' },
  { type: 'Investigative', question: 'Are you curious about how things work and like researching topics?' },
  { type: 'Artistic', question: 'Do you enjoy creative activities like painting, music, or writing?' },
  { type: 'Artistic', question: 'Do you prefer activities where you can express yourself and have freedom?' },
  { type: 'Social', question: 'Do you enjoy helping others and providing guidance or support?' },
  { type: 'Social', question: 'Do you like activities that involve teamwork or working closely with people?' },
  { type: 'Enterprising', question: 'Do you enjoy leading, persuading, or motivating people?' },
  { type: 'Enterprising', question: 'Are you comfortable making decisions and taking responsibility?' },
  { type: 'Conventional', question: 'Do you prefer structured environments and organized tasks?' },
  { type: 'Conventional', question: 'Are you detail-oriented and enjoy working with data or records?' },
];

const HollandCodeTest = () => {
  const [responses, setResponses] = useState(hollandQuestions.map(() => 0));
  const [result, setResult] = useState('');
  const [detailedResults, setDetailedResults] = useState(null);
  const [error, setError] = useState('');

  const handleResponseChange = (index, score) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = score;
    setResponses(updatedResponses);
  };

  const calculateHollandCode = () => {
    // Check if all questions are answered
    if (responses.includes(0)) {
      setError('Please answer all questions before submitting.');
      setResult('');
      setDetailedResults(null);
      return;
    }
    
    setError(''); // Clear error if all questions are answered

    const scores = { Realistic: 0, Investigative: 0, Artistic: 0, Social: 0, Enterprising: 0, Conventional: 0 };

    responses.forEach((score, index) => {
      scores[hollandQuestions[index].type] += score;
    });

    // Sort scores and get top three
    const sortedScores = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    // Display detailed result with scores for each type
    setDetailedResults(scores);
    setResult(`Your Holland Code is: ${sortedScores.map(([type]) => type[0]).join('')}`);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">Holland Code Career Test</h2>
      <p className="text-gray-700 text-center mb-6">Rate each statement based on how much it describes you.</p>

      {hollandQuestions.map((item, index) => (
        <div key={index} className="p-4 border rounded-md shadow-sm">
          <p className="text-lg font-medium text-gray-800">{item.question}</p>
          <div className="flex justify-around mt-2">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => handleResponseChange(index, score)}
                className={`px-4 py-2 rounded-md ${
                  responses[index] === score
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                } hover:bg-blue-400`}
              >
                {score}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={calculateHollandCode}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md mt-6"
      >
        Submit and Calculate
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md shadow-sm">
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md shadow-sm">
          <h3 className="text-xl font-semibold">Result</h3>
          <p className="text-lg">{result}</p>
        </div>
      )}

      {detailedResults && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Detailed Scores:</h4>
          <ul className="text-gray-700">
            {Object.entries(detailedResults).map(([type, score]) => (
              <li key={type} className="flex justify-between">
                <span>{type}</span>
                <span>{score}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HollandCodeTest;
