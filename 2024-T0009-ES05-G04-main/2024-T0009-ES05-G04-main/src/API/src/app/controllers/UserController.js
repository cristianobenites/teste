// Importa o módulo jwt para gerar tokens JWT
const jwt = require('jsonwebtoken');

// Importa o repositório de Usuário
const UserRepository = require('../repositories/UserRepository');

class UserController {
     // Método para login de usuário
    async login(req, res) {
        const { username, password } = req.body;

        try {
            const user = await UserRepository.findByCredentials(username, password);
            
            const secret = process.env.JWT_SECRET;
            
            const token = jwt.sign({ userId: user.id, roleId: user.roleId }, secret, {
              expiresIn: '1h' 
            });
      
            res.json({ token, userId: user.id, roleId: user.roleId });
          } catch (error) {
            res.status(401).json({ error: 'Login inválido' });
          }
    }
}

module.exports = new UserController();