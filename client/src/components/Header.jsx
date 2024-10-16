import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/destinations">Destinations</a></li>
                    <li><a href="/flashcard">Flashcard</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;