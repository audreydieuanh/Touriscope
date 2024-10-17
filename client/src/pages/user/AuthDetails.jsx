import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUserData from "./useUserData";
import "./AuthDetails.css";
import Header from "../../components/Header";

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
            <Header />
            <div className='welcomeContainer'>
                {user ? (
                    <>
                        <h1 className="welcomeMessage">Welcome {firstName}!</h1>
                        <div className="buttonGroup">
                            <Link to="/destinations" className="link">
                                <button className="actionButton">Explore All Destinations</button>
                            </Link>
                            <Link to="/flashcard" className="link">
                                <button className="actionButton">Continue with Your Learning</button>
                            </Link>
                            <button onClick={userSignOut} className="actionButton">Sign Out</button>
                        </div>
                    </>
                ) : (
                    <div><LogIn /></div>
                )}
            </div>


        </div>
    )
}

export default AuthDetails;