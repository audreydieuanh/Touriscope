import React from "react";
import { useState } from "react";

const LearnFlashcard = (props) => {
    const [flip, setFlip] = useState(true);
    var difficulty = props.difficulty;

    const [guess, setGuess] = useState('');
    const [answerStatus, setAnswerStatus] = useState('none');
    const [result, setResult] = useState('');

    const checkAnswer = () => {
        if (guess.toLowerCase() === props.answer.toLowerCase()) {
            setAnswerStatus('correct');
            setResult('Your answer is correct!');
        } else if (guess.toLowerCase() !== props.answer.toLowerCase()) {
            setAnswerStatus('incorrect');
            setResult('Your answer is incorrect. Try again!');
        } else{
            setAnswerStatus('none');
        }

    }

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    return (
        <>
            <div className="flashCard" id={`${difficulty == 'easy' ? 'easy' : (difficulty == 'medium' ? 'medium' : 'hard')}`}
                onClick={() => { setFlip(true) }}>
                {flip ?
                    <div className="question">
                        <div>&lt;{props.difficulty}&gt;</div>
                        <div>{props.question}</div>
                    </div>
                    : <div className="answer">Answer: {props.answer}</div>}
            </div>

            <div>
                <form className='guess-space'>
                    <label className="label">Guess the answer:
                        <input
                            id={answerStatus}
                            onChange={handleChange}
                            value={guess}
                            type="text"
                            placeholder="Place your answer here..." />
                    </label>
                </form>
                <button type="submit" className="button submit" onClick={checkAnswer}>Submit</button>
                <button type="seeAnswer" className="button seeAnswer" onClick={() => { setFlip(false) }}>See Answer</button>
            </div>
            <h3>{result}</h3>
            {/* {printResult()}
            <h3>{result}</h3> */}
        </>
    )
}

export default LearnFlashcard;
