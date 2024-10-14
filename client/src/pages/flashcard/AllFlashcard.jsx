import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleFlashcard from '../../components/SingleFlashcard.jsx';
import "./allFlashcard.css";
import { Link, Outlet } from "react-router-dom"


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
                <h2>Vietnamese Culture Quiz</h2>
                <h4>Let's learn about Vietnamese Culture!</h4>
                <h5> Number of cards: {questionLength}
                </h5>
                <Link to="learn" className='link'>
                    <button>Learn</button></Link>
                <div className='allFlashcards'>
                    <label htmlFor="difficulty-select">Select difficulty:</label>
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
                    <br />
                    {addFlashCards(filteredQuestions)}
                </div>
            </div>
        </>
    )
}

export default Flashcard;