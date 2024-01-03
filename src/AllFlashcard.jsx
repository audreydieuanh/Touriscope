import React from 'react';
import { useState } from 'react';
import FlashCards from './SingleFlashcard.jsx';
import questionJson from './questionList.json';
import "./allFlashcard.css";
import { Link, Outlet } from "react-router-dom"


const Flashcard = () => {
    function addFlashCards(list) {
        return list.map((item) =>
            <FlashCards question={item.question} answer={item.answer} difficulty={item.difficulty} />);
    }

    function easyOnly() {
        const easyQuestion = questionJson.questionsList.filter(question => question.difficulty == 'easy');
        return addFlashCards(easyQuestion);
    }

    function mediumOnly() {
        const mediumQuestion = questionJson.questionsList.filter(question => question.difficulty == 'medium');
        return addFlashCards(mediumQuestion);
    }

    function hardOnly() {
        const hardQuestion = questionJson.questionsList.filter(question => question.difficulty == 'hard');
        return addFlashCards(hardQuestion);
    }

    function allQuestion() {
        return addFlashCards(questionJson.questionsList);
    }

    // const easyBtn = document.getElementById('easyOnly');
    // easyBtn.addEventListener('click', easyOnly);
    return (
        <>
            <div>
                <h2>Vietnamese Culture Quiz</h2>
                <h4>Let's learn about Vietnamese Culture!</h4>
                <h5> Number of cards: {questionJson.questionsList.length}
                </h5>
                <Link to="learn" className='link'>
                    <button>Learn</button></Link>
                <div className='allFlashcards'>
                    <button id="easyOnly">Show easy questions</button>
                    <button id="mediumOnly">Show medium questions</button>
                    <button id="hardOnly">Show hard questions</button>
                    <button id="allOnly">Show all questions</button>
                    <br></br>
                    {allQuestion()}
                </div>
            </div>
        </>
    )
}

export default Flashcard;