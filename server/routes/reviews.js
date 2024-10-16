import express from 'express';
import ReviewController from '../controllers/reviews.js';

const reviewRouter = express.Router();

reviewRouter.get('/', ReviewController.getReviews);
reviewRouter.post('/', ReviewController.postReview);

export default reviewRouter;