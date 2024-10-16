import { pool } from './database.js';
import './dotenv.js';
import questionsData from '../data/questions.js';
import destinationsData from '../data/destinations.js';

const createQuestionsTable = async () => {
    const dropTableQuery = `
        DROP TABLE IF EXISTS questions;
    `;

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS questions (
            id SERIAL PRIMARY KEY,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            difficulty TEXT NOT NULL
        );
    `;


    try {
        // First, drop the table if it exists
        await pool.query(dropTableQuery);
        console.log("Dropped table if it existed.");

        const res = await pool.query(createTableQuery);
        console.log('table created successfully');
    } catch (error) {
        console.error('⚠️ error creating question table', error)
    }
}

const sendQuestionsTable = async () => {
    await createQuestionsTable();

    questionsData.forEach((question) => {
        const insertQuery = {
            text: 'INSERT INTO questions (question, answer, difficulty) VALUES ($1, $2, $3);'
        }

        const values = [
            question.question,
            question.answer,
            question.difficulty
        ]

        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ error inserting questions', error)
                return;
            }

            console.log(`✅ ${question.question} added successfully`)
        })
    })
}

const createDestinationsTable = async () => {
    const dropTableQuery = `
        DROP TABLE IF EXISTS destinations;
    `;

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS destinations (
            id SERIAL PRIMARY KEY,
            imgLink TEXT NOT NULL,
            name TEXT NOT NULL,
            location TEXT NOT NULL,
            resourceLink TEXT NOT NULL
        );
    `;


    try {
        // First, drop the table if it exists
        await pool.query(dropTableQuery);
        console.log("Dropped table if it existed.");

        const res = await pool.query(createTableQuery);
        console.log('table created successfully');
    } catch (error) {
        console.error('⚠️ error creating destination table', error)
    }
}

const sendDestinationsTable = async () => {
    await createDestinationsTable();

    destinationsData.forEach((destination) => {
        const insertQuery = {
            text: 'INSERT INTO destinations (imgLink, name, location, resourceLink) VALUES ($1, $2, $3, $4);'
        }

        const values = [
            destination.imgLink,
            destination.name,
            destination.location,
            destination.resourceLink
        ]

        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ error inserting destinations', error)
                return;
            }

            console.log(`✅ ${destination.name} added successfully`)
        })
    })
}

const createReviewsTable = async () => {
    const dropTableQuery = `
        DROP TABLE IF EXISTS reviews;
    `;

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS reviews (
            id SERIAL PRIMARY KEY,
            destinationId INTEGER NOT NULL,
            score REAL NOT NULL,
            description TEXT,
            posterFirstName TEXT NOT NULL,
            posterLastName TEXT NOT NULL,
            posterUid TEXT NOT NULL
        );
    `;


    try {
        // First, drop the table if it exists
        await pool.query(dropTableQuery);
        console.log("Dropped table if it existed.");

        const res = await pool.query(createTableQuery);
        console.log('table created successfully');
    } catch (error) {
        console.error('⚠️ error creating question table', error)
    }
}

sendQuestionsTable();
sendDestinationsTable();
createReviewsTable();