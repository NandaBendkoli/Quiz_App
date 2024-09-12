import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = ({ saveQuiz }) => {
    const [title, setTitle] = useState('');

    const [questions, setQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState('');

    const [options, setOptions] = useState(['', '', '', '']);

    const [correctOption, setCorrectOption] = useState(null);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const addQuestion = () => {
        if (!currentQuestion.trim() ||
            options.some(option => option.trim() === '') ||
            correctOption === null) {
            setError('Please fill in all question details and choose a correct option.');
            return;
        }

        const newQuestion = {
            question: currentQuestion,
            options: options,
            correctOption: correctOption
        };
        setQuestions([...questions, newQuestion]);

        setCurrentQuestion('');

        setOptions(['', '', '', '']);

        setCorrectOption(null);

        setError('');
    };

    const save = () => {
        if (!title.trim() || questions.length === 0) {
            setError('Please add a Quiz title and At least one question Please. ');
            return;
        }

        const quiz = { title, questions };
        saveQuiz(quiz);
        navigate('/start');
    };

    return (
        <div className="container">
            <h2> Create New Quiz Here </h2>
            <input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Question"
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
            />
            {options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index] = e.target.value;
                        setOptions(newOptions);
                    }}
                />
            ))}
            <select
                value={correctOption}
                onChange={(e) => setCorrectOption(Number(e.target.value))}
            >
                <option value={null}> Choose the correct option of Question </option>
                {options.map((option, index) => (
                    <option key={index} value={index}>{`Option ${index + 1}`}</option>
                ))}
            </select>
            <button onClick={addQuestion}> Add Question</button>
            <button onClick={save}> Save The Quiz</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default CreateQuiz;
