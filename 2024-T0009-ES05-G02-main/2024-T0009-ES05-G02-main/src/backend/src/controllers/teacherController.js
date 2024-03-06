// Import the Ong model
import teacher from "../models/Teacher.js";

class teacherController {
  static async listTeachers(req, res) {
    try {
      const listTeachers = await teacher.find({});
      console.log('List of Teachers:', listTeachers);
      res.status(200).json(listTeachers);
    } catch (error) {
      console.error('Error listing teachers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async addTeacher(req, res) {
    try {
      const { name, gender, marital_states, breed, birth_date, rg, cpf, email, tel, geographic_status, adress, city} = req.body;
      if (!name || !gender || !marital_states || !breed || !birth_date|| !rg|| !cpf|| !tel || !email|| !geographic_status || !adress || !city) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const novoTeacher = new teacher({
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
      await novoTeacher.save();
      res.status(201).json({ message: 'Teacher added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async deleteTeachers(req, res) {
    const name = req.body;
    if (!name) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const deleteTeacher = await teacher.findOneAndDelete(name);
    if (!deleteTeacher) {
        return res.status(404).json({ error: 'Student not found' });
    }
    await teacher.findOneAndDelete(name);
    res.status(200).json({ message: 'Teacher deleted' });
  }

  static async updatedTeacher (req, res, next) {
    try {
      const filter = { name: req.body.nameToUpdate }; 
      const update = req.body.updatedData; 
      const updatedTeacher = await teacher.findOneAndUpdate(filter, update, { new: true });
      if (!updatedTeacher) {
        return res.status(404).json({ message: 'Teacher not found' });
      }
      res.status(200).json({ message: 'Successfully updated', updatedTeacher });
    } catch (error) {
      next(error);
    }
  }


}


// Export the OngController for use in other files
export default teacherController;
