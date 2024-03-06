// Import necessary modules and files
import express from 'express';
import teamController from '../controllers/teamController.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/teams', teamController.listTeam);  // Define a route for listing ONGs and associate it with the listOngs method in OngController
routes.post('/teams', teamController.addTeam);  // Define a route for adding a new ONG and associate it with the addOng method in OngController

// Export the configured router
export default routes;
