import React, { useState } from 'react';

const App = () => {
  const [percentage, setPercentage] = useState('');
  const [sgpa, setSgpa] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConversion = () => {
    setLoading(true);
    setTimeout(() => {
      if (percentage >= 0 && percentage <= 100) {
        const calculatedSgpa = (percentage / 10) + 0.85;
        setSgpa(calculatedSgpa.toFixed(2));

        if (calculatedSgpa >= 9) {
          setFeedbackMessage("Outstanding! You're a top achiever!");
          playSound('/high_achiever.mp3');
        } else if (calculatedSgpa >= 7.5) {
          setFeedbackMessage("Great job! You're doing well!");
          playSound('/high_achiever.mp3');
        } else {
          setFeedbackMessage("Keep improving! You can do better!");
          playSound('/needs_improvement.mp3');
        }
      } else {
        alert("Please enter a valid percentage between 0 and 100.");
      }

      setLoading(false);
    }, 2000);
  };

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[url('/bg-image.jpg')] bg-cover bg-center">
      {/* Main Content */}
      <div className="relative flex-grow flex items-center justify-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Form Content */}
        <div className="relative bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm mx-auto z-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Percentage to SGPA Converter
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Enter Percentage</label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="e.g., 75"
              className="w-full p-2 border border-gray-300 rounded"
              min="0"
              max="100"
            />
          </div>

          <button
            onClick={handleConversion}
            className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition-all duration-200 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              'Convert to SGPA'
            )}
          </button>

          {sgpa && (
            <div className="mt-4 text-lg font-semibold text-center text-gray-700">
              SGPA: {sgpa}
            </div>
          )}

          {feedbackMessage && (
            <div className="mt-4 text-lg font-semibold text-center text-green-800">
              {feedbackMessage}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-cyan-950 text-white text-center py-4">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} Curious Abhi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
