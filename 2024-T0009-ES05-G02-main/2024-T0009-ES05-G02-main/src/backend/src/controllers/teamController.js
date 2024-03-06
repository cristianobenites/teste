// Import the Ong model
import team from "../models/Team.js";

class teamController {
  static async listTeam(req, res) {
    try {
      const listTeam = await team.find({});
      console.log('List of teams', listTeam);
      res.status(200).json(listTeam);
    } catch (error) {
      console.error('Error listing teams:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async addTeam(req, res) {
    try {
      const { local, period_start, period_end, recorrence, time } = req.body;

      if (!local || !period_start || !period_end || !recorrence || !time) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const novoTeam = new team({
        local,
        period_start,
        period_end,
        recorrence,
        time

      });

      await novoTeam.save();
      res.status(201).json({ message: 'Team added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}


// Export the OngController for use in other files
export default teamController;
