import React from 'react';

const Home = ({ startQuiz }) => {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz Platform</h1>
      <button  className="secondary"  onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;
