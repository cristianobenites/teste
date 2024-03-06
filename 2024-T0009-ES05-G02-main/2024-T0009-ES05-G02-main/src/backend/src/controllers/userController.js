// Import the Ong model
import user from "../models/User.js";
import bcrypt from 'bcrypt';


class userController {
  static async listUsers(req, res) {
    try {
      const listUsers = await user.find({});
      console.log('List of Users:', listUsers);
      res.status(200).json(listUsers);
    } catch (error) {
      console.error('Error listing users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async checkUser(req, res) {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const instanciaUsuario = await user.findOne({ email });
    if (!instanciaUsuario) {
      return res.status(404).json({ error: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, instanciaUsuario.password);
    if (instanciaUsuario.password != password) {
      return res.status(401).json({ error: 'Password incorrect' });
    }
    const perfil = instanciaUsuario.profile;
    const autenticado = true;
    res.status(200).json({ message: 'User authenticated' });
  } catch (error) {
    console.error('Error authenticated:', error);
    const autenticado = false;
    res.status(500).json({ error: 'Error server' });
  }
}


  static async addUser(req, res) {
    try {
      const { email, password, profile} = req.body;
      if (!email || !password || !profile) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const novoUser = new user({
        email,
        password,
        profile

      });
      await novoUser.save();
      res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async deleteUser(req, res) {
    const name = req.body;
    if (!name) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const deleteUser = await user.findOneAndDelete(name);
    if (!deleteUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    await user.findOneAndDelete(name);
    res.status(200).json({ message: 'User deleted' });
  }

  static async updatedUser (req, res, next) {
    try {
      const filter = { name: req.body.nameToUpdate }; 
      const update = req.body.updatedData; 
      const updatedUser = await user.findOneAndUpdate(filter, update, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'Successfully updated', updatedUser });
    } catch (error) {
      next(error);
    }
  }


}


// Export the OngController for use in other files
export default userController;
