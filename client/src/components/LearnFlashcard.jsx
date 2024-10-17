import React from "react";
import { useState } from "react";
import './LearnFlashcard.css';

const LearnFlashcard = (props) => {
    const { front, setFront, increaseStreak } = props;
    var difficulty = props.difficulty;

    const [guess, setGuess] = useState('');
    const [answerStatus, setAnswerStatus] = useState('none');
    const [result, setResult] = useState('');
    const [sawAnswer, setSawAnswer] = useState(false);

    const checkAnswer = () => {
        if (guess.toLowerCase() === props.answer.toLowerCase()) {
            setAnswerStatus('correct');
            setResult('Your answer is correct!');
            increaseStreak();
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

    const handleSeeAnswer = () => {
        setFront(false);
        setSawAnswer(true);
    }

    return (
        <>
            <div className="learnContainer">
                <div className={`flashCardLearn ${difficulty}`}>
                    {front ?
                        <div className="question">{props.question}</div>
                        : <div className="answer">Answer: {props.answer}</div>}
                </div>
            </div>

            <div>
                <div className="formContainer">
                    <form className='guess-space'>
                        <label className="label">Guess the answer:</label>
                        <input
                            id={answerStatus}
                            onChange={handleChange}
                            value={guess}
                            type="text"
                            className="inputField"
                            placeholder="Place your answer here..." />
                    </form>
                </div>
                <button type="submit" className="button submit" onClick={checkAnswer} disabled={sawAnswer}>Submit</button>
                <button type="seeAnswer" className="button seeAnswer" onClick={handleSeeAnswer}>See Answer</button>
            </div>
            <h3 className="result-text">{result}</h3>

        </>
    )
}

export default LearnFlashcard;
