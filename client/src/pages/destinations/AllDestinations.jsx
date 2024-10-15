import { useState, useEffect } from 'react'
import './AllDestination.css'
import Card from '../../components/Card.jsx'
import { Link, Outlet } from "react-router-dom"

const App = () => {
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
      <Card key={destination.id} img={destination.imglink} name={destination.name} location={destination.location} link={destination.resourcelink} />);
  }

  return (
    <>
      <div className="header">
        <h1>Touriscope</h1>
      </div>
      <div>
        <Link to="/flashcard" className='link'>
          <button>Flashcard</button></Link>
      </div>

      <div className="card">
        {addCards(destinations)}
      </div>
    </>
  )
}


export default App
