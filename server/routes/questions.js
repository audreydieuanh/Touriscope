import express from 'express';
import QuestionController from '../controllers/questions.js';

const questionRouter = express.Router();

questionRouter.get('/', QuestionController.getQuestions);
questionRouter.post('/', QuestionController.postQuestion);
questionRouter.delete('/:id', QuestionController.deleteQuestion);

export default questionRouter;
