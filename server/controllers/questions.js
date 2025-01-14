import { pool } from '../config/database.js';
import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY); 
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

const getQuestions = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM questions ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const postQuestion = async (req, res) => {
    try {
        const { question, answer, difficulty, category } = req.body;

        const postQuery =
            'INSERT INTO questions (question, answer, difficulty, category) VALUES ($1, $2, $3, $4) RETURNING *';
        const results = await pool.query(postQuery, [question, answer, difficulty, category]);

        // Fetch users with matching favorite category from Firestore
        const db = admin.firestore();
        const usersSnapshot = await db
            .collection('users')
            .where('favoriteCategory', '==', category)
            .get();

        if (usersSnapshot.empty) {
            console.log('No users found with this favorite category.');
        } else {
            const emailPromises = [];

            // Send email notifications
            usersSnapshot.forEach((doc) => {
                const user = doc.data();
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: user.email,
                    subject: `New Question in Your Favorite Category: ${category}`,
                    text: `Hi ${user.firstName},\n\nA new question has been added in your favorite category "${category}".\n\nQuestion: ${question}\nAnswer: ${answer}\n\nVisit the app to explore more questions!\n\nBest regards,\nTouriscope Team`,
                };

                emailPromises.push(transporter.sendMail(mailOptions));
            });

            await Promise.all(emailPromises);
            console.log('Email notifications sent to interested users.');
        }

        res.status(201).json(results.rows[0]);
    } catch (error) {
        console.error('Error in postQuestion:', error);
        res.status(409).json({ error: error.message });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM resources WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
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