// Import the Ong model
import student from "../models/Students.js";

// Define a controller for handling Ong-related operations
class studentController {
  static async listStudents(req, res) {
    try {
      const listStudents = await student.find({});
      console.log('List of Stidents:', listStudents);
      res.status(200).json(listStudents);
    } catch (error) {
      console.error('Error listing Students:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addStudent(req, res) {
    try {
      // Extract relevant fields from the request body
      const { name, gender, marital_states, breed, birth_date, rg, cpf, email, tel, geographic_status, adress, city, ref_responsible_id, presence, ref_team_id, recurence} = req.body;

      // Validate that all required fields are present
      if (!name || !gender || !marital_states || !breed || !birth_date || !rg || !cpf||!email||!tel||!geographic_status||!adress||!city || !presence|| !recurence) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      const novaStudent = new student({
        name,
        gender,
        marital_states,
        breed,
        birth_date,
        rg,
        cpf,
        email,
        tel,
        geographic_status,
        adress,
        city,
        presence,
        recurence

      });
      // Save the new Ong to the database
      await novaStudent.save();
      // Respond with a success message
      res.status(201).json({ message: 'Student added successfully' });
    } catch (error) {
      // Respond with a 500 Internal Server Error if an error occurs during the addition process
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteStudent(req, res) {
    const name = req.body;
    if (!name) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const deletedStudent = await student.findOneAndDelete(name);
    if (!deletedStudent) {
        return res.status(404).json({ error: 'Student not found' });
    }
    await student.findOneAndDelete(name);
    res.status(200).json({ message: 'Student deleted' });
  }

  static async updatedStudent (req, res, next) {
    try {
      const filter = { name: req.body.nameToUpdate }; 
      const update = req.body.updatedData; 
      const updatedStudent = await student.findOneAndUpdate(filter, update, { new: true });
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Successfully updated', updatedStudent });
    } catch (error) {
      next(error);
    }
  }
}

// Export the OngController for use in other files
export default studentController;
