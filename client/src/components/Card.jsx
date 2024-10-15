import React from "react"
import { saveDestination, deleteDestination } from "./saveDestination";
import './Card.css'
import { useState, useEffect } from "react";
import { db, auth } from "../pages/user/firebase";
import { doc, getDoc } from "firebase/firestore";

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
                    <h3>{props.name}</h3>
                    <h3>{props.location}</h3>
                    <a href={props.link}>
                        <button className="linkButton">Link to Wikipedia</button>
                    </a>
                    <button
                        className={`save-button ${isSaved ? 'saved' : ''}`}
                        onClick={toggleSave}
                        aria-label={isSaved ? "Saved" : "Save Destination"}
                    >
                        ★
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;