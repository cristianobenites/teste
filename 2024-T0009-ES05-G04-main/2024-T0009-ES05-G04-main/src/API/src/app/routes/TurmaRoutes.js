const { Router } = require("express");

// Importa o controlador de Turma
const TurmaController = require("../controllers/TurmaController");

const router = Router();

// Define a rota para buscar turmas por ID do professor
router.get("/turmas/:idProfessor", TurmaController.getByProfessorId);

module.exports = router;
