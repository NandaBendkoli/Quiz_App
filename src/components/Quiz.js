import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quizData, submitQuiz }) => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [score, setScore] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  // Check if quizData is valid or not-->//done
  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return (
      <div className="container">
        <h2>No quiz available</h2>
        <p>Please create a quiz first before starting.</p>
        <button onClick={() => navigate('/create')}>Create New Quiz</button>
        {/* <button onClick={() => navigate('/start')}>Back to Home</button> */}
      </div>
    );
  }

  const handleNext = () => {
    if (selectedOption === quizData.questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }
    setSelectedOption(null);

    if (currentQuestionIndex < quizData.questions.length - 1) {

      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitQuiz(score);

      navigate('/result');

    }
  };

  return (
    <div className="quiz-container">
      <h2>{quizData.title}</h2>
      <p>{quizData.questions[currentQuestionIndex].question}</p>

      {quizData.questions[currentQuestionIndex].options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={index}
            checked={selectedOption === index}
            onChange={() => setSelectedOption(index)}
          />
          {option}
        </div>
      ))}

      <button onClick={handleNext} disabled={selectedOption === null}>
        Next
      </button>
    </div>
  );
};

export default Quiz;

