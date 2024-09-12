import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateQuiz from './components/CreateQuiz';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './styles.css';

function App() {
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCreated, setQuizCreated] = useState(false);

  const saveQuiz = (data) => {
    setQuizData(data);
    setQuizCreated(true);
  };

  const submitQuiz = (finalScore) => {
    setScore(finalScore);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/create">Create Quiz</Link> | 
          <Link to="/start">Start Quiz</Link> | 
          <Link to="/result">View Results</Link>
        </nav>

        <Routes>
          <Route path="/create" element={<CreateQuiz saveQuiz={saveQuiz} />} />
          <Route 
            path="/start" 
            element={
              quizCreated ? <Quiz quizData={quizData} submitQuiz={submitQuiz} /> 
              : <div>No quiz added yet. Please create a quiz first.</div>
            }
          />
          <Route path="/result" element={<Result score={score} quizData={quizData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
