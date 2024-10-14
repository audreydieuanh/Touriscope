import { pool } from '../config/database.js';

const getQuestions = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM questions ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}

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
    getQuestions
    // getQuestionById
};