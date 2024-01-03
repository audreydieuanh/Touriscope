import React from "react";
import { useState } from "react";

const singleFlashcard = (props) => {
    const [flip, setFlip] = useState(true);
    var difficulty = props.difficulty;
    return (
        <div className="flashCard" id={`${difficulty == 'easy' ? 'easy' : (difficulty == 'medium' ? 'medium' : 'hard')}`}
        onClick={() => { setFlip(!flip) }}>
            {flip ?
                <div className="question">
                    <div>&lt;{props.difficulty}&gt;</div>
                    <div>{props.question}</div>
                </div>
                : <div className="answer">Answer: {props.answer}</div>}
        </div>
    )
}

export default singleFlashcard;