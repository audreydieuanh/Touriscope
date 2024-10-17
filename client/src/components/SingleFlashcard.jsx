import React from "react";
import { useState } from "react";
import "./SingleFlashcard.css";

const SingleFlashcard = (props) => {
    const [flip, setFlip] = useState(true);
    var difficulty = props.difficulty;
    return (
        <div className="flashCard" id={`${difficulty == 'easy' ? 'easy' : (difficulty == 'medium' ? 'medium' : 'hard')}`}
        onClick={() => { setFlip(!flip) }}>
            {flip ?
                    <div className="s-question">{props.question}</div>
                : <div className="s-answer">Answer: {props.answer}</div>}
        </div>
    )
}

export default SingleFlashcard;