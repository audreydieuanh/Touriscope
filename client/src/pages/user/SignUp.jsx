import React, { useState } from 'react';
import { db, auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import firebaseAuthError from './firebaseAuthError.json';

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
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <input type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}></input>
                <input type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}></input>
                <input type='text'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Sign Up</button>
                {error ? <p className='errorMessage'>{error}</p> : null}
            </form>
        </div>
    )
}

export default SignUp;
