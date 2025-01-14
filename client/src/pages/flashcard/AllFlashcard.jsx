import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleFlashcard from '../../components/SingleFlashcard.jsx';
import "./allFlashcard.css";
import { Link, Outlet } from "react-router-dom"
import Header from "../../components/Header.jsx";
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const Flashcard = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [questionLength, setQuestionLength] = useState(0);

    const auth = getAuth();
    const firestore = getFirestore();

    const addFlashCards = (list) => {
        return list.map((item) =>
            <SingleFlashcard key={item.id} className='flashcard' question={item.question} answer={item.answer} difficulty={item.difficulty} category={item.category} />);
    };

    const saveFavoriteCategory = async () => {
        const user = auth.currentUser;
        if (user && selectedCategory !== 'all') {
            try {
                const userDoc = doc(firestore, 'users', user.uid);
                await setDoc(userDoc, { favoriteCategory: selectedCategory }, { merge: true });
                alert(`Favorite category '${selectedCategory}' saved successfully!`);
            } catch (error) {
                console.error('Error saving favorite category:', error);
            }
        } else {
            alert('Please select a valid category or ensure you are logged in.');
        }
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:3001/questions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const text = await response.text();
                const data = JSON.parse(text);
                setQuestions(data);
                setFilteredQuestions(data);
                setFilteredCategories([...new Set(data.map(item => item.category))]);
                setQuestionLength(data.length);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchQuestions();
    }, []);

    useEffect(() => {
        const filterQuestions = () => {
            let filtered = questions;

            if (selectedDifficulty !== 'all') {
                filtered = filtered.filter(question => question.difficulty === selectedDifficulty);
            }

            if (selectedCategory !== 'all') {
                filtered = filtered.filter(question => question.category === selectedCategory);
            }

            setFilteredQuestions(filtered);
            setQuestionLength(filtered.length);
        };

        filterQuestions();
    }, [selectedDifficulty, selectedCategory, questions]);

    return (
        <>
            <div>
                <Header />
                <h2 className='quiz-title'>Culture Quiz</h2>
                <h4 className='quiz-subtitle'>Let's learn more about culture!</h4>
                <h5 className='card-count'> Number of cards: {questionLength}</h5>
                <Link to="learn" className='link'>
                    <button className='learn-button'>Learn</button>
                </Link>
                <Link to="add" className='link'>
                    <button className='add-button'>Add a question</button>
                </Link>
                <div className='diff-select'>
                    <label htmlFor="difficulty-select" className='difficulty-label'>Select difficulty:</label>
                    <select
                        id="difficulty-select"
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        <option value="all">All Questions</option>
                        <option value="easy">Easy Questions</option>
                        <option value="medium">Medium Questions</option>
                        <option value="hard">Hard Questions</option>
                    </select>
                </div>
                <div className='category-select'>
                    <label htmlFor="category-select" className='category-label'>Select category:</label>
                    <select
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        {filteredCategories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <button className='save-category-button' onClick={saveFavoriteCategory}>Save this category as favorite</button>
                <br />
                <div className='flashcards-container'>
                    {addFlashCards(filteredQuestions)}
                </div>
            </div>
        </>
    );
}

export default Flashcard;
