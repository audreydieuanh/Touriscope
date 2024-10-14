import { pool } from './database.js';
import './dotenv.js';
import questionsData from '../data/questions.js';

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

sendQuestionsTable();