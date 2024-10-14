import express from 'express';
import QuestionController from '../controllers/questions.js';

const questionRouter = express.Router();

questionRouter.get('/', QuestionController.getQuestions);

export default questionRouter;
