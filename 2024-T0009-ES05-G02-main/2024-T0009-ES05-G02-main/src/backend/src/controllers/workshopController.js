// Import the Ong model
import workshop from "../models/Workshop.js";

class workshopController {
  static async listWorkshops(req, res) {
    try {
      const listWorkshops = await workshop.find({});
      console.log('List of Workshops', listWorkshops);
      res.status(200).json(listWorkshops);
    } catch (error) {
      console.error('Error listing workshopings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async addWorkshop(req, res) {
    try {
      const { name, duracion_start, duracion_end, category, states} = req.body;
      if (!name || !duracion_start || !duracion_end || !category || !states) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const novoWorkshop = new workshop({
        name,
        duracion_start,
        duracion_end,
        states,
        category
      });
      await novoWorkshop.save();
      res.status(201).json({ message: 'Workshop added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async deleteWorkshop(req, res) {
      const name = req.body;
      if (!name) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      const deleteWorkshop = await workshop.findOneAndDelete(name);
      if (!deleteWorkshop) {
        return res.status(404).json({ error: 'Workshop not found' });
    }
      await workshop.findOneAndDelete(name);
      res.status(200).json({ message: 'Workshop deleted' });
  }
    static async updateWorkshop (req, res, next) {
    try {
      const filter = { name: req.body.nameToUpdate }; 
      const update = req.body.updatedData; 
      const updatedWorkshop = await workshop.findOneAndUpdate(filter, update, { new: true });
      if (!updatedWorkshop) {
        return res.status(404).json({ message: 'Workshop not found' });
      }
      res.status(200).json({ message: 'Successfully updated', updatedWorkshop });
    } catch (error) {
      next(error);
    }
  }
    

}


// Export the OngController for use in other files
export default workshopController;
