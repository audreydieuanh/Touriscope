import { useState, useEffect } from 'react'
import './AllDestination.css'
import Card from '../../components/Card.jsx'
import { Link, Outlet } from "react-router-dom"
import Header from '../../components/Header.jsx'

const AllDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:3001/destinations');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const text = await response.text();
        const data = JSON.parse(text);
        setDestinations(data);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };

    fetchDestinations();
  }, []);

  const addCards = (destinations) => {
    return destinations.map((destination) =>
      <Card key={destination.id} id={destination.id} img={destination.imglink} name={destination.name} location={destination.location} link={destination.resourcelink} />);
  }

  return (
    <>
      <div className='header-container'>
        <Header />
        <h1 className="header-title">Explore all destinations!</h1>
      </div>
      {/* <div>
        <Link to="/flashcard" className={styles.linkButton}>
          <button className={styles.content1}>Flashcard</button></Link>
      </div> */}

      <div className="card-container">
        {addCards(destinations)}
      </div>
      <Outlet context={destinations} />
    </>
  )
}


export default AllDestinations
