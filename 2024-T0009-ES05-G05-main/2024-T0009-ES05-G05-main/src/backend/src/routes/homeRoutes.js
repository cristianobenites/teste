// Importando o módulo express
const express = require('express');

// Criando um roteador usando o express.Router
const router = express.Router();

// Importando o controlador homeControllers para lidar com as requisições relacionadas aos workshops
const workshopController = require('../controllers/homeControllers');

// Definindo uma rota GET na raiz ("/") que será tratada pelo controlador getAllWorkshops do homeControllers
router.get('/', workshopController.getAllWorkshops);

// Exportando o roteador para que possa ser utilizado em outros módulos
module.exports = router;
