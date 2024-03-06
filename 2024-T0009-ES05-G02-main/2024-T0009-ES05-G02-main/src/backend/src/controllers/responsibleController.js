// Import the Ong model
import responsible from "../models/Responsible.js";

class responsibleController {
  static async listResponsibles(req, res) {
    try {
      const listResponsibles = await responsible.find({});
      console.log('List of Responsibles:', listResponsibles);
      res.status(200).json(listResponsibles);
    } catch (error) {
      console.error('Error listing responsibles:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async addResponsible(req, res) {
    try {
      const { name, gender, marital_states, breed, birth_date, rg, cpf, email, tel, geographic_status, adress, city} = req.body;
      if (!name || !gender || !marital_states || !breed || !birth_date|| !rg|| !cpf|| !tel || !email|| !geographic_status || !adress || !city) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const novoResponsible = new responsible({
        name,
        gender,
        marital_states,
        breed,
        birth_date,
        rg,
        cpf,
        tel,
        email,
        geographic_status,
        adress,
        city

      });
      await novoResponsible.save();
      res.status(201).json({ message: 'Responsible added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async deleteResponsibles(req, res) {
      const name = req.body;
      if (!name) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      const deletedResponsible = await responsible.findOneAndDelete({ name });
      if (!deletedResponsible) {
          return res.status(404).json({ error: 'Responsible not found' });
      }

      await responsible.findOneAndDelete(name);
      res.status(200).json({ message: 'Responsible deleted' });
  }
    static async updateResponsible (req, res, next) {
    try {
      const filter = { name: req.body.nameToUpdate }; 
      const update = req.body.updatedData; 
      const updatedResponsible = await responsible.findOneAndUpdate(filter, update, { new: true });
      if (!updatedResponsible) {
        return res.status(404).json({ message: 'Responsible not found' });
      }
      res.status(200).json({ message: 'Successfully updated', updatedResponsible});
    } catch (error) {
      next(error);
    }
  }
    

}


// Export the OngController for use in other files
export default responsibleController;
