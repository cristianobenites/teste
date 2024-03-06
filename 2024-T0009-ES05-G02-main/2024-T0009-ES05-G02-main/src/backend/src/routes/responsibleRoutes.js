// Import necessary modules and files
import express from 'express';
import responsibleController from '../controllers/responsibleController.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/responsibles', responsibleController.listResponsibles);  
routes.post('/responsibles', responsibleController.addResponsible);  
routes.delete('/responsibles', responsibleController.deleteResponsibles);  
routes.patch('/responsibles', responsibleController.updateResponsible);  

// Export the configured router
export default routes;
