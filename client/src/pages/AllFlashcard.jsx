import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleFlashcard from '../components/SingleFlashcard.jsx';
import questionJson from '../questionList.json';
import "./allFlashcard.css";
import { Link, Outlet } from "react-router-dom"


const Flashcard = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [filteredQuestions, setFilteredQuestions] = useState(questionJson.questionsList);
    const [questionLength, setQuestionLength] = useState(questionJson.questionsList.length);

    const addFlashCards = (list) => {
        return list.map((item) =>
            <SingleFlashcard className='flashcard' question={item.question} answer={item.answer} difficulty={item.difficulty} />);
    }

    useEffect(() => {
        const filterQuestions = () => {
            let filtered = questionJson.questionsList;
            if (selectedDifficulty === 'easy') {
                filtered = questionJson.questionsList.filter(question => question.difficulty === 'easy');
            } else if (selectedDifficulty === 'medium') {
                filtered = questionJson.questionsList.filter(question => question.difficulty === 'medium');
            } else if (selectedDifficulty === 'hard') {
                filtered = questionJson.questionsList.filter(question => question.difficulty === 'hard');
            }
            setFilteredQuestions(filtered);
            setQuestionLength(filtered.length);
        };

        filterQuestions();
    }, [selectedDifficulty]);

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