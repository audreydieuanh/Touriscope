import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleFlashcard from '../../components/SingleFlashcard.jsx';
import "./allFlashcard.css";
import { Link, Outlet } from "react-router-dom"
import Header from "../../components/Header.jsx";


const Flashcard = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [questionLength, setQuestionLength] = useState(0);

    const addFlashCards = (list) => {
        return list.map((item) =>
            <SingleFlashcard key={item.id} className='flashcard' question={item.question} answer={item.answer} difficulty={item.difficulty} />);
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:3001/questions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const text = await response.text();
                const data = JSON.parse(text);
                setQuestions(data);
                setFilteredQuestions(data);
                setQuestionLength(data.length);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        }

        fetchQuestions();
    }, []);

    useEffect(() => {
        const filterQuestions = () => {
            let filtered = questions;
            if (selectedDifficulty === 'easy') {
                filtered = questions.filter(question => question.difficulty === 'easy');
            } else if (selectedDifficulty === 'medium') {
                filtered = questions.filter(question => question.difficulty === 'medium');
            } else if (selectedDifficulty === 'hard') {
                filtered = questions.filter(question => question.difficulty === 'hard');
            }
            setFilteredQuestions(filtered);
            setQuestionLength(filtered.length);
        };

        filterQuestions();
    }, [selectedDifficulty, questions]);

    return (
        <>
            <div>
                <Header />
                <h2 className='quiz-title'>Culture Quiz</h2>
                <h4 className='quiz-subtitle'>Let's learn more about culture!</h4>
                <h5 className='card-count'> Number of cards: {questionLength}
                </h5>
                <Link to="learn" className='link'>
                    <button className='learn-button'>Learn</button>
                </Link>
                <Link to="add" className='link'>
                    <button className='add-button'>Add a question</button>
                </Link>
                <div className='diff-select'>
                    <label htmlFor="difficulty-select" className='difficulty-label'>Select difficulty:</label>
                    <select
                        id="difficulty-select"
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        <option value="all">All Questions</option>
                        <option value="easy">Easy Questions</option>
                        <option value="medium">Medium Questions</option>
                        <option value="hard">Hard Questions</option>
                    </select>
                </div>
                <br />
                <div className='flashcards-container'>
                    {addFlashCards(filteredQuestions)}
                </div>
            </div>
        </>
    );
}

export default Flashcard;