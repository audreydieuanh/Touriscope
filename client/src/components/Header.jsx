import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
            <ul className="nav-list">
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="/destinations" className="nav-link">Destinations</a></li>
                    <li><a href="/flashcard" className="nav-link">Flashcard</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;