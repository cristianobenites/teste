// Import necessary modules and files
import express from 'express';
import studentController from '../controllers/studentsController.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/students', studentController.listStudents);  
routes.post('/students', studentController.addStudent);
routes.patch('/students', studentController.updatedStudent);  
routes.delete('/students', studentController.deleteStudent);  

// Export the configured router
export default routes;
