import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Result = ({ score, quizData }) => {
  const navigate = useNavigate();

  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return (
      <div className="container result-container">
        <h2>No quiz taken yet.</h2>
        <button className="secondary" onClick={() => navigate('/start')}>Take Quiz</button>
        <button onClick={() => navigate('/create')}>Create New Quiz</button>
      </div>
    );
  }

  const totalQuestions = quizData.questions.length;
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  return (
    <div className="container result-container">
      <h2>Your Score</h2>
      <p>Total Questions: {totalQuestions}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Incorrect Answers: {incorrectAnswers}</p>
      <p>Score Percentage: {percentage}%</p>

      <button onClick={() => navigate('/start')}>Retake Quiz</button>
      <button onClick={() => navigate('/create')}>Create New Quiz</button>
    </div>
  );
};

export default Result;
