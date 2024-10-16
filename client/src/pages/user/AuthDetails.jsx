import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUserData from "./useUserData";

const AuthDetails = () => {
    const { firstName } = useUserData();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false); 
            } else {
                navigate('/sign-up');
            }
        })

        return () => {
            listen();
        }
    }, [navigate]);

    const userSignOut = () => {
        signOut(auth).then(() => {
            navigate('/log-in');
        }).catch((error) => {
            console.log(error.message);
        });
    }

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            {user ? <><h1>Welcome {firstName}!</h1>
                <Link to="/destinations" className='link'>
                    <button>Explore all destinations</button></Link>
                <Link to="/flashcard" className='link'>
                    <button>Continue with your learning</button></Link>
                <button onClick={userSignOut}>Sign Out</button></> :
                <div><LogIn /></div>}
        </div>
    )
}

export default AuthDetails;