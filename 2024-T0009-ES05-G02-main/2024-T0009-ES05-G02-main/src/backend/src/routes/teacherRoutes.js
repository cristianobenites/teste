// Import necessary modules and files
import express from 'express';
import teacherController from '../controllers/teacherController.js';

// Create an Express Router
const routes = express.Router();

// Define routes and associate them with controller methods
routes.get('/teachers', teacherController.listTeachers);  
routes.post('/teachers', teacherController.addTeacher);  
routes.delete('/teachers', teacherController.deleteTeachers);  
routes.patch('/teachers', teacherController.updatedTeacher);  

// Export the configured router
export default routes;
