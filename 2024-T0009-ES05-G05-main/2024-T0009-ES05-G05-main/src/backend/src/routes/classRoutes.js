// Importando o módulo express
const express = require('express');

// Criando um roteador usando o express.Router
const router = express.Router();

// Importando o controlador addClassesController para lidar com as requisições
const addClassesController = require('../controllers/addClassesControllers');

// Definindo uma rota GET na raiz ("/") que será tratada pelo controlador getAllClasses do addClassesController
router.get('/', addClassesController.getAllClasses);

// Exportando o roteador para que possa ser utilizado em outros módulos
module.exports = router;
