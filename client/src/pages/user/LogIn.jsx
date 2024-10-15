import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import firebaseAuthError from './firebaseAuthError.json';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(useCredential => {
                const user = useCredential.user;
                if (user) {
                    navigate('/');
                }
                console.log(`${user.email} Successfully signed in`);
            }).catch((error) => {
                const message = firebaseAuthError[error.code] || 'An unexpected error occurred. Please try again.';
                setError(message);
                console.log(error.message);
            });
    }

    return (
        <>
            <div className='logInContainer'>
                <form onSubmit={logIn}>
                    <h1>Log In</h1>
                    <input type='text'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit'>Log In</button>
                    {error ? <p className='errorMessage'>{error}</p> : null}
                </form>
            </div>
            <h3>First time user? Sign up <Link to="/sign-up" className="linkText">here</Link></h3>
        </>
    )
}

export default LogIn;
