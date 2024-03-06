// Import necessary modules and files
import express from 'express';
import OngController from '../controllers/ongController.js';  // Import the OngController

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/ongs', OngController.listOngs);  // Define a route for listing ONGs and associate it with the listOngs method in OngController
routes.post('/ongs', OngController.addOng);  // Define a route for adding a new ONG and associate it with the addOng method in OngController
routes.delete('/ongs', OngController.deleteOng);  // Define a route for deleting an ONG and associate it with the deleteOng method in OngController
routes.patch('/ongs', OngController.updateOng);  // Define a route for updating an ONG and associate it with the updateOng method in OngController

// Export the configured router
export default routes;
