import { pool } from '../config/database.js';

const getQuestions = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM questions ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}

const postQuestion = async (req, res) => {
    try {
        const { question, answer, difficulty } = req.body;
        const postQuery = 'INSERT INTO questions (question, answer, difficulty) VALUES ($1, $2, $3) RETURNING *';
        const results = await pool.query(postQuery, [question, answer, difficulty]);

        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}

const deleteQuestion = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM resources WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
  }

// const updateQuestion = async (req, res) => {
//     try {
//         const id = parseInt
//         res.status(200).json(results.rows[0]);
//     } catch (error) {
//         res.status(409).json( { error: error.message });
//     }
// }

// const getQuestionById = async (req, res) => {
//     try {
//         const selectQuery = 'SELECT * FROM questions WHERE id = $1';
//         const questionId = req.params.id;
//         const results = await pool.query(selectQuery, [questionId]);
//         res.status(200).json(results.rows[0]);
//     } catch (error) {
//         res.status(409).json( { error: error.message });
//     }
// }

export default {
    getQuestions,
    postQuestion,
    deleteQuestion
    // getQuestionById
};