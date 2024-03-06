// Importando o módulo express
const express = require('express');

// Criando um roteador usando o express.Router
const router = express.Router();

// Importando o controlador dashboardControllers para lidar com as requisições
const controller = require('../controllers/dashboardControllers');

// Definindo uma rota GET na raiz ("/") que será tratada pelo controlador getDados do dashboardControllers
router.get('/', controller.getDados); // Certifique-se de que 'getDados' esteja corretamente definido no seu controlador

// Exportando o roteador para que possa ser utilizado em outros módulos
module.exports = router;
