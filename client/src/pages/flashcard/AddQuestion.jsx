import React, { useState } from "react";
import Header from "../../components/Header";
import './AddQuestion.css';

const AddQuestion = () => {
    const [newQuestion, setNewQuestion] = useState({
        id: 0, question: "", answer: "", difficulty: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target

        setNewQuestion((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createQuestion = async (event) => {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuestion),
        }

        try {
            const response = await fetch('http://localhost:3001/questions', options);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Optionally, handle the response data if needed
            const result = await response.json();
            console.log('Question added:', result);

            // Redirect to flashcard page after successful submission
            window.location = '/flashcard';
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }

    }


    return (
        <div>
            <Header />
            <div className="add-question-container">
                <h1 className="form-title">Add a question</h1>
                <form onSubmit={createQuestion} className="question-form">
                    <label htmlFor="question" className="form-label">Question:</label>
                    <input
                        type="text"
                        id="question"
                        name="question"
                        value={newQuestion.question}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    <label htmlFor="answer" className="form-label">Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        name="answer"
                        value={newQuestion.answer}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    <label htmlFor="difficulty-select" className="form-label">Select difficulty for this question:</label>
                    <select
                        id="difficulty-select"
                        name="difficulty"
                        value={newQuestion.difficulty}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>

        </div>
    );

}

export default AddQuestion;