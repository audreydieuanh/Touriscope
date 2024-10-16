import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useUserData from "../user/useUserData";

const AddReview = () => {
    const { userId, firstName, lastName } = useUserData();
    const { id } = useParams();
    const [newReview, setNewReview] = useState({
        id: 0, destinationId: id, score: 0, description: "", posterFirstName: "", posterLastName: "", posterUid: ""
    });

    useEffect(() => {
        if (firstName && lastName && userId) {
            setNewReview((prev) => ({
                ...prev,
                posterFirstName: firstName,
                posterLastName: lastName,
                posterUid: userId,
            }));
        }
    }, [firstName, lastName, userId]);

    const handleChange = (event) => {
        const { name, value } = event.target

        setNewReview((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createReview = async (event) => {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview),
        }

        try {
            const response = await fetch('http://localhost:3001/reviews', options);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Review added:', result);

            // Redirect to the details page after successful submission
            window.location = `/destinations/${id}`;
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }

    }

    return (
        <div>
            <center><h1>Add a review</h1></center>
            <form onSubmit={createReview}>
                <label htmlFor="score">Rate your experience (0 - 10):</label>
                <input
                    type="range"
                    id="score"
                    name="score"
                    min="0"
                    max="10"
                    step="0.1"
                    value={newReview.score}
                    onChange={handleChange}
                    required
                />
                <output>{newReview.score}</output>
                <br />
                <label htmlFor="description">How was your experience?</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={newReview.description}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default AddReview;