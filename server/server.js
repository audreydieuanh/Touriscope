import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import questionRouter from './routes/questions.js';

const app = express();
dotenv.config();

app.use(cors());

app.use('/questions', questionRouter);
app.get('/', (req, res) => {
    console.log('Receive request for Touriscope API');
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Touriscope API</h1>');
  })

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})