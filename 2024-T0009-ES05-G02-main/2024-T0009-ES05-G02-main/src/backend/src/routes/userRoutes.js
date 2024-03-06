// Import necessary modules and files
import express from 'express';
import userController from '../controllers/userController.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/users', userController.listUsers);
routes.post('/users', userController.addUser); 
routes.post('/login', userController.checkUser);
routes.patch('/users', userController.updatedUser);  
routes.delete('/users', userController.deleteUser); 

// Export the configured router
export default routes;
