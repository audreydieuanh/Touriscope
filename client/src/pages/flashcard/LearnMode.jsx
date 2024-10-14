import React from "react";
import { useState, useEffect } from "react";
import FlashCards from '../../components/LearnFlashcard.jsx';
import './LearnMode.css';

const LearnMode = () => {
    const [questions, setQuestions] = useState([]);
    const [currentCard, setCurrentCard] = useState(0);
    const [front, setFront] = useState(true);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
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
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        }

        fetchQuestions();
    }, []);

    const shuffleCard = () => {
        if (questions.length > 1) {
            setCurrentCard(randomNumber(1, questions.length - 1));
            if (!front) {
                setFront(true);
            }
        }
    };

    const nextCard = () => {
        if (questions.length > 0) {
            setCurrentCard((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
            if (!front) {
                setFront(true);
            }
        }
    };

    const prevCard = () => {
        if (questions.length > 0) {
            setCurrentCard((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
            if (!front) {
                setFront(true);
            }
        }
    };

    return (
        <>
            <div className="textQuiz">
                <h2>Culture Quiz</h2>
                <h4>How well do you know about culture? Let's test your knowledge!</h4>
            </div>
            {questions.length > 0 ? (
                <div className="flashcardContainer">
                    <FlashCards
                        question={questions[currentCard].question}
                        answer={questions[currentCard].answer}
                        difficulty={questions[currentCard].difficulty}
                        front={front}
                        setFront={setFront}>
                // </FlashCards>
                </div>
            ) : (
                <div className="noFlashcard">No flashcard on the database. Add more cards to learn!</div>
            )}

            <br></br>
            <br></br>
            <div className='button cardMove'>
                <button onClick={prevCard} className="prevCard">&lt;--</button>
                <button onClick={nextCard} className="nextCard">--&gt;</button>
                <button onClick={shuffleCard} className="shuffleCard">Shuffle Cards</button>
            </div>
        </>
    );
};

export default LearnMode;