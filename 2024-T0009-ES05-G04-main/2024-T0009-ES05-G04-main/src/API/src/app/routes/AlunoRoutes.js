const { Router } = require("express");


// Importa o controlador de Aluno
const AlunoController = require("../controllers/AlunoController");

const router = Router();

router.get("/turmas/:id/alunos", AlunoController.findByTurma);  // Rota para buscar alunos por turma
router.get("/turmas/:id/alunosNaoInscritos", AlunoController.findByNotInTurma); // Rota para buscar alunos não inscritos em uma turma
router.post("/alunos", AlunoController.create);  // Rota para criar um novo aluno
router.post("/alunos/addToTurma", AlunoController.addToTurma); // Rota para adicionar um aluno a uma turma
router.post("/alunos/removeFromTurma", AlunoController.removeFromTurma); // Rota para remover um aluno de uma turma

module.exports = router;