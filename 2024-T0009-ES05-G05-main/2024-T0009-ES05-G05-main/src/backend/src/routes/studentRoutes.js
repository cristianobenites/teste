const express = require('express'); // Importando o framework Express
const router = express.Router(); // Criando um roteador usando o Express
const addClassesController = require('../controllers/addClassesControllers'); // Importando o controlador addClassesController

router.get('/', addClassesController.getAllStudents); // Definindo uma rota GET na raiz ("/") e vinculando-a à função getAllStudents do addClassesController

module.exports = router; // Exportando o roteador para que possa ser utilizado em outros módulos

