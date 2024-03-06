// Importando o módulo express
const express = require('express');

// Criando um roteador usando o express.Router
const router = express.Router();

// Importando o controlador userControllers para lidar com as requisições relacionadas aos usuários
const userController = require('../controllers/userControllers');

// Definindo uma rota GET para '/login' que retorna os usuários como JSON (apenas para fins de demonstração)
router.get('/login', (req, res) => {
    res.json({ users });
});

// Definindo uma rota POST para '/login' que será tratada pela função loginUser do userController
router.post('/login', userController.loginUser);

// Exportando o roteador para que possa ser utilizado em outros módulos
module.exports = router;
