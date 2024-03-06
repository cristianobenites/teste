// Import necessary modules and files
import express from 'express';

import ongs from '../routes/ongRoutes.js';  // Import the ongs routes
import teachers from '../routes/teacherRoutes.js'
import responsible from '../routes/responsibleRoutes.js'
import classs from '../routes/classRoutes.js';
import team from '../routes/teamRoutes.js'
import user from '../routes/userRoutes.js'
import leaders from '../routes/leaderRoutes.js';  // Import the leaders routes
import workshops from '../routes/workshopRoutes.js';
import students from '../routes/studentRoutes.js';


// Define a function for configuring routes
const routes = (app) => {
  // Define a route for the root URL that responds with a simple message
  app.route('/').get((req, res) => res.status(200).send('Index Route :)'));

  // Use middleware to enable JSON parsing and include the ongs routes
  app.use(express.json(), ongs, teachers, responsible, classs, team, user, leaders,workshops, students );  // This line enables JSON parsing middleware 

};

// Export the configured routes function
export default routes;
