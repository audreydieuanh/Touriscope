import { pool } from '../config/database.js';

const getDestinations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM destinations ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getDestinationById = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM destinations WHERE id = $1';
        const destinationId = req.params.id;
        const results = await pool.query(selectQuery, [destinationId]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default {
    getDestinations,
    getDestinationById
};