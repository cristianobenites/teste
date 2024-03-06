// Importando o módulo express
const express = require('express');

// Criando um roteador usando o express.Router
const router = express.Router();

// Importando o controlador addClassesController para lidar com as requisições relacionadas aos professores
const addClassesController = require('../controllers/addClassesControllers');

// Definindo uma rota GET na raiz ("/") que será tratada pelo controlador getAllTeachers do addClassesController
router.get('/', addClassesController.getAllTeachers);

// Exportando o roteador para que possa ser utilizado em outros módulos
module.exports = router;
