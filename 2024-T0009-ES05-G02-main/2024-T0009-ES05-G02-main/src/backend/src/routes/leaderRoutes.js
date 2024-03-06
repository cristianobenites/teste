// Import necessary modules and files
import express from 'express';
import LeaderController from '../controllers/leaderControler.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/leaders', LeaderController.listLeader);  // Define a route for listing leaders and associate it with the listLeader method in LeaderController
routes.post('/leaders', LeaderController.addLeader);  // Define a route for adding a new leader and associate it with the addLeader method in LeaderController
routes.delete('/leaders', LeaderController.deleteLeader);  // Define a route for deleting a leader and associate it with the deleteLeader method in LeaderController
routes.patch('/leaders', LeaderController.updateLeader);  // Define a route for updating a leader and associate it with the updateLeader method in LeaderController

// Export the configured router
export default routes;
