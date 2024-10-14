import express from 'express';
import DestinationController from '../controllers/destinations.js';

const destinationRouter = express.Router();

destinationRouter.get('/', DestinationController.getDestinations);

export default destinationRouter;
