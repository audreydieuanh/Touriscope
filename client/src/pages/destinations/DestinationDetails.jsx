import { useOutletContext, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

const DestinationDetails = () => {
    const data = useOutletContext();
    const [destination, setDestination] = useState({ id: 0, imgLink: '', name: '', location: '', resourceLink: '' });
    const { id } = useParams();

    useEffect(() => {
        const fetchDestinationById = async () => {
            const response = await fetch(`http://localhost:3001/destinations/${id}`);
            const data = await response.json();
            setDestination(data);
        }

        fetchDestinationById();

    }, [data, id]);

    return (
        <>
            <div className="destination-details">
                <img src={destination.imgLink} alt={destination.name}></img>
                <h1>{destination.name}</h1>
                <h2>{destination.location}</h2>
                <a href={destination.resourceLink}>
                    <button>Learn more</button>
                </a>
                <Link to={`/destinations/add-review/${id}`}><button className="reviewBtn">Add a review</button></Link>
            </div>
        </>
    )

}


export default DestinationDetails;