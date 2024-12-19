import React, { useState } from 'react';
import { CheckCircle, Lightbulb, XCircle } from 'lucide-react';

const CareerExplorationGame = () => {
  // Define the AI-based career matching questions with weighted options
  const questions = [
    {
      id: 1,
      text: 'What type of tasks do you prefer?',
      options: [
        { text: 'Working with data', weight: 5 },
        { text: 'Helping people', weight: 3 },
        { text: 'Creative design', weight: 2 },
        { text: 'Solving complex problems', weight: 4 },
      ],
    },
    {
      id: 2,
      text: 'What kind of work environment suits you?',
      options: [
        { text: 'Office', weight: 3 },
        { text: 'Remote', weight: 2 },
        { text: 'Fieldwork', weight: 5 },
        { text: 'Lab/Research', weight: 4 },
      ],
    },
    {
      id: 3,
      text: 'How do you feel about working in teams?',
      options: [
        { text: 'Love it', weight: 5 },
        { text: 'Prefer solo work', weight: 2 },
        { text: 'Indifferent', weight: 3 },
      ],
    },
    {
      id: 4,
      text: 'Do you enjoy working with technology?',
      options: [
        { text: 'Yes', weight: 5 },
        { text: 'No', weight: 1 },
        { text: 'Sometimes', weight: 3 },
      ],
    },
  ];

  // Define career options with weighted tags
  const careers = [
    { name: 'Software Engineer', tags: ['Working with data', 'Technology', 'Problem solving'], weight: 5 },
    { name: 'Doctor', tags: ['Helping people', 'Fieldwork', 'Teamwork'], weight: 4 },
    { name: 'Artist', tags: ['Creative design', 'Solo work', 'Technology'], weight: 2 },
    { name: 'Scientist', tags: ['Research', 'Technology', 'Problem solving'], weight: 5 },
    { name: 'Entrepreneur', tags: ['Creative design', 'Remote', 'Teamwork'], weight: 4 },
  ];

  const [answers, setAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [suggestedCareer, setSuggestedCareer] = useState('');

  // Handle selection of answers
  const handleAnswer = (questionId, optionText, weight) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { text: optionText, weight },
    }));
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionText,
    }));
  };

  // Check results based on weighted answers
  const checkResults = () => {
    let careerScores = {};

    // Calculate career scores based on user answers
    careers.forEach((career) => {
      let score = 0;
      Object.values(answers).forEach((answer) => {
        if (career.tags.includes(answer.text)) {
          score += answer.weight;
        }
      });
      careerScores[career.name] = score;
    });

    // Find the career with the highest score
    const highestScoreCareer = Object.keys(careerScores).reduce((a, b) =>
      careerScores[a] > careerScores[b] ? a : b
    );

    setSuggestedCareer(highestScoreCareer);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 text-white p-6">
      <div className="max-w-4xl mx-auto bg-blue-600 p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-center mb-6">Career Exploration Game</h1>
        <p className="text-lg text-center mb-8">
          Answer a few questions and discover which career path suits you best.
        </p>

        {/* Question Display */}
        {questions.map((question) => (
          <div key={question.id} className="mb-8">
            <p className="text-xl mb-4">{question.text}</p>
            <div className="flex flex-wrap justify-center space-x-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`${
                    selectedOptions[question.id] === option.text
                      ? 'bg-blue-800 text-white'
                      : 'bg-blue-400 text-gray-900'
                  } hover:bg-blue-500 hover:text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300`}
                  onClick={() => handleAnswer(question.id, option.text, option.weight)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        {!showResults && (
          <div className="text-center mt-8">
            <button
              onClick={checkResults}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Submit Answers
            </button>
          </div>
        )}

        {/* Display Suggested Career */}
        {showResults && (
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-green-400">Suggested Career Path:</h2>
            <p className="text-3xl font-semibold text-indigo-200 mt-4">{suggestedCareer}</p>
            <div className="mt-6 flex justify-center items-center space-x-4">
              <CheckCircle className="text-green-500 w-12 h-12" />
              <Lightbulb className="text-yellow-500 w-12 h-12" />
              <XCircle className="text-red-500 w-12 h-12" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerExplorationGame;
