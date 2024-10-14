import React from "react";
import { useState } from "react";
import './LearnFlashcard.css';

const LearnFlashcard = (props) => {
    const { front, setFront } = props;
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
        } else {
            setAnswerStatus('none');
        }

    }

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    return (
        <>
            <div className="learnContainer">
                <div className="flashCardLearn" id={`${difficulty == 'easy' ? 'easy' : (difficulty == 'medium' ? 'medium' : 'hard')}`}
                    onClick={() => { setFront(true) }}>
                    {front ?
                        <div className="question">
                            <div>{props.question}</div>
                        </div>
                        : <div className="answer">Answer: {props.answer}</div>}
                </div>
            </div>

            <div>
                <div className="formContainer">
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
                </div>
                <button type="submit" className="button submit" onClick={checkAnswer}>Submit</button>
                <button type="seeAnswer" className="button seeAnswer" onClick={() => { setFront(false) }}>See Answer</button>
            </div>
            <h3>{result}</h3>


        </>
    )
}

export default LearnFlashcard;
