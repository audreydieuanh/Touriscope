import express from 'express';
import DestinationController from '../controllers/destinations.js';

const destinationRouter = express.Router();

destinationRouter.get('/', DestinationController.getDestinations);
destinationRouter.get('/:id', DestinationController.getDestinationById);

export default destinationRouter;
