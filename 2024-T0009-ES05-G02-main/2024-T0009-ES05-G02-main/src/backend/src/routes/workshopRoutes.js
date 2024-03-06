// Import necessary modules and files
import express from 'express';
import workshopController from '../controllers/workShopController.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/workshops', workshopController.listWorkshops);  
routes.post('/workshops', workshopController.addWorkshop);  
routes.delete('/workshops', workshopController.deleteWorkshop);  
routes.patch('/workshops', workshopController.updateWorkshop);  

// Export the configured router
export default routes;
