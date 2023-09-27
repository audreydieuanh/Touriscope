import React from "react";
import { useState } from "react";
import "./Flashcard.css";

const FlashCards = (props) => {
    const [flip, setFlip] = useState(true);
    return (
        <div className="flashCard" onClick={() => { setFlip(!flip) }}>
            {flip ?
                <div className="question">
                    <div>&lt;{props.difficulty}&gt;</div>
                    <div>{props.question}</div>
                </div>
                : <div className="answer">Answer: {props.answer}</div>}
        </div>
    )
}

export default FlashCards;