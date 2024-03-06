// Import the Leader model
import leaderModel from '../models/leader.js';

// Define a controller for handling Leader-related operations
class LeaderController {
  // Method for listing all Leaders
  static async listLeader(req, res) {
    try {
      // Retrieve and log the list of Leaders from the database
      const listLeader = await leaderModel.find({});
      console.log('List of Leaders:', listLeader);

      // Respond with the list of Leaders in JSON format
      res.status(200).json(listLeader);
    } catch (error) {
      // Log an error message and respond with a 500 Internal Server Error if an error occurs
      console.error('Error listing Leaders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Method for adding a new Leader
  static async addLeader(req, res) {
    try {
      // Extract relevant fields from the request body
      const { adress, email, telephone, name } = req.body;

      // Validate that all required fields are present
      if (!adress || !email || !telephone || !name) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create a new Leader instance with the provided data
      const novoLider = new leaderModel({
        adress,
        email,
        telephone,
        name,
      });

      // Save the new Leader to the database
      await novoLider.save();

      // Respond with a success message
      res.status(201).json({ message: 'Leader added successfully' });
    } catch (error) {
      // Respond with a 500 Internal Server Error if an error occurs during the addition process
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Method for deleting a Leader
  static async deleteLeader(req, res) {
    try {
        const name = req.body.name; // Assuming the name is passed in the request body
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        const deletedLeader = await leaderModel.findOneAndDelete({ name });
        if (!deletedLeader) {
            return res.status(404).json({ error: 'Leader not found' });
        }
        res.status(200).json({ message: 'Leader deleted' });
    } catch (error) {
        // Respond with a 500 Internal Server Error if an error occurs during the deletion process
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

  // Method for updating a Leader
  static async updateLeader(req, res, next) {
    try {
      const filter = { name: req.body.nameToUpdate };
      const update = req.body.updatedData;
      const updatedLeader = await leaderModel.findOneAndUpdate(filter, update, { new: true });
      if (!updatedLeader) {
        return res.status(404).json({ message: 'Leader not found' });
      }
    } catch (error) {
      // Respond with a 500 Internal Server Error if an error occurs during the update process
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

// Export the LeaderController for use in other files
export default LeaderController;
