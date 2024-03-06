// Import the Ong model
import classs from "../models/Class.js";

class classController {
  static async listClass(req, res) {
    try {
      const listClass = await classs.find({});
      console.log('List of class', listClass);
      res.status(200).json(listClass);
    } catch (error) {
      console.error('Error listing class:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async addClass(req, res) {
    try {
      const { date, ref_teacher_id, register, observation, states} = req.body;
      if (!date || !ref_teacher_id || !register || !observation || !states) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const novoClass = new classs({
        date,
        ref_teacher_id,
        register,
        observation,
        states
      });

      await novoClass.save();
      res.status(201).json({ message: 'Class added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}


// Export the OngController for use in other files
export default classController;
