import React, { useState, useEffect } from "react";

const motivationalMessages = [
  "Believe in yourself! Every day is a chance to improve.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Stay focused and keep pushing forward.",
  "Learning never exhausts the mind. Keep growing!",
  "Don’t let yesterday take up too much of today."
];

const RotatingMessages = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % motivationalMessages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-blue-50 p-6 rounded-lg text-center mt-8">
      <h3 className="text-xl font-semibold mb-4">Motivational Tip of the Moment:</h3>
      <p className="text-gray-700 text-lg">{motivationalMessages[currentMessageIndex]}</p>
    </div>
  );
};

export default RotatingMessages;
