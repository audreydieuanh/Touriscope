import React, { useState } from 'react';
import { db, auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import firebaseAuthError from './firebaseAuthError.json';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                firstName,
                lastName,
                savedDestinations: [],
                highestStreak: 0
            });
            if (user) {
                navigate('/log-in');
            }
            console.log(`${user.email} Successfully signed up`);
        } catch (error) {
            const message = firebaseAuthError[error.code] || 'An unexpected error occurred. Please try again.';
            setError(message);
            console.log(error.code);
        };
    }

    return (
        <div className='signUpContainer'>
            <form onSubmit={signUp} className="signUpForm">
                <h1 className="signUpTitle">Sign Up</h1>
                <input
                    type='text'
                    className="signUpInput"
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type='text'
                    className="signUpInput"
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type='text'
                    className="signUpInput"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    className="signUpInput"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='signUpButton'>Sign Up</button>
                {error ? <p className='errorMessage'>{error}</p> : null}
                <div className="loginPrompt">
                    <p>Already signed up? Log in <Link to='/log-in' className="linkText">here</Link></p>
                </div>
            </form>
        </div>

    )
}

export default SignUp;
