import React from "react";
import { useState } from "react";
import FlashCards from './LearnFlashcard.jsx';
import questionJson from './questionList.json';
import './LearnMode.css';

const LearnMode = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const shuffleCard = () => {
        setCurrentCard(randomNumber(1, questionJson.questionsList.length - 1));
        if (!flip) {
            setFlip(true);
        }
    }

    const nextCard = () => {
        if (currentCard == questionJson.questionsList.length - 1) {
            setCurrentCard(1);
        } else {
            setCurrentCard(currentCard + 1);
        }
    }

    const prevCard = () => {
        if (currentCard == 1) {
            setCurrentCard(questionJson.questionsList.length - 1);
        } else {
            setCurrentCard(currentCard - 1);
        }
    }

    return (
        <>
            <div>
                <h2>Vietnamese Culture Quiz</h2>
                <h4>How well do you know about Vietnamese culture? Let's test your knowledge!</h4>
                <h5> Current Streak: , Best Streak:</h5>
            </div>
            <div className="learnFlashcard">
                <FlashCards
                    question={questionJson.questionsList[currentCard].question}
                    answer={questionJson.questionsList[currentCard].answer}
                    difficulty={questionJson.questionsList[currentCard].difficulty}>
                // </FlashCards>
            </div>
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