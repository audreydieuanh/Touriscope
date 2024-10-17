import React from "react"
import { saveDestination, deleteDestination } from "./saveDestination";
import './Card.css'
import { useState, useEffect } from "react";
import { db, auth } from "../pages/user/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Card = (props) => {
    const [isSaved, setIsSaved] = useState(false);

    const checkIfSaved = async () => {
        if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const destinationRef = doc(db, 'users', userId);

            try {
                const userDoc = await getDoc(destinationRef);
                if (userDoc.exists()) {
                    const savedDestinations = userDoc.data().savedDestinations || [];
                    const exists = savedDestinations.some(
                        (dest) => dest.name === props.name && dest.location === props.location
                    );
                    setIsSaved(exists);
                }
            } catch (error) {
                console.error('Error checking saved destinations: ', error.message);
            }
        }
    };

    useEffect(() => {
        checkIfSaved();
    }, []);

    const toggleSave = async () => {
        const destination = {
            name: props.name,
            location: props.location,
            img: props.img,
            link: props.link,
        };

        if (isSaved) {
            await deleteDestination(destination);
            setIsSaved(false);
        } else {
            await saveDestination(destination);
            setIsSaved(true);
        }
    };

    return (
        <>
            <div className="Card">
                <img src={props.img}></img>
                <div className="cardText">
                    <h3 className="nameText">{props.name}</h3>
                    <h3 className="locationText">{props.location}</h3>
                    <a href={props.link}>
                        <button className="look-up-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.442 1.086a5.5 5.5 0 1 1 0-7.778 5.5 5.5 0 0 1 0 7.778z" />
                            </svg>
                        </button>
                    </a>
                    <Link to={`/destinations/${props.id}`}><button className="detail-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    </button></Link>

                    <button
                        className={`save-button ${isSaved ? 'saved' : ''}`}
                        onClick={toggleSave}
                        aria-label={isSaved ? "Saved" : "Save Destination"}
                    >
                        ★
                    </button>
                    <Link to={`/destinations/add-review/${props.id}`}><button className="review-btn">Add a review</button></Link>
                </div>
            </div>
        </>
    )
}

export default Card;