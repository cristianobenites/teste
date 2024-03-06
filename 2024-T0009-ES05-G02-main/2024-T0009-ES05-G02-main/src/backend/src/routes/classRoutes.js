// Import necessary modules and files
import express from 'express';
import classController from '../controllers/classController.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/class', classController.listClass);  
routes.post('/class', classController.addClass);   

// Export the configured router
export default routes;
