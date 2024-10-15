import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import questionRouter from './routes/questions.js';
import destinationRouter from './routes/destinations.js';
import QuestionController from './controllers/questions.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/questions', questionRouter);
app.use('/destinations', destinationRouter);
app.get('/', (req, res) => {
  console.log('Receive request for Touriscope API');
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Touriscope API</h1>');
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})