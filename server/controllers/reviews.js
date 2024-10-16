import { pool } from '../config/database.js';

const getReviews = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM reviews ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}

const postReview = async (req, res) => {
    try {
        const { destinationId, score, description, posterFirstName, posterLastName, posterUid } = req.body;
        const postQuery = 'INSERT INTO reviews (destinationid, score, description, posterfirstname, posterlastname, posteruid) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const results = await pool.query(postQuery, [destinationId, score, description, posterFirstName, posterLastName, posterUid]);
        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}

const getReviewById = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM reviews WHERE id = $1';
        const reviewId = req.params.id;
        const results = await pool.query(selectQuery, [reviewId]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}


export default {
    getReviews,
    postReview,
    getReviewById
};