// Importa a função Router do módulo Express
const { Router } = require('express');

// Importa o controlador de Aula
const AulaController = require('../controllers/AulaController');

// Cria uma instância de Router
const router = Router();


router.get('/aulas/turma/:idTurma', AulaController.findByTurmaId); // Rota para buscar aulas por idTurma

// Exporta o router para ser utilizado em outras partes da aplicação
module.exports = router;
