import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";

const AuthDetails = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
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

    return (
        <div>
            {user ? <><UserProfile />
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