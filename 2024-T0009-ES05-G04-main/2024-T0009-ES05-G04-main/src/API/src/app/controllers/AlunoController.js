// importa classe AlunoRepository
const AlunoRepository = require('../repositories/AlunoRepository');

class AlunoController {
  // findByTurma retorna alunos inscritos de uma turma
  async findByTurma(req, res) {
    const idTurma = Number(req.params.id);
    try {
      const alunos = await AlunoRepository.findByTurma(idTurma);
      res.send(alunos);
    } catch (error) {
      console.log('Erro ao consultar alunos de uma oficina: ', error);
    }
  }

  // findByNotInTurma para buscar alunos não inscritos em uma turma específica
  async findByNotInTurma(req, res) {
    const idTurma = Number(req.params.id);
    try {
      const alunosNaoInscritos = await AlunoRepository.findByNotInTurma(
        idTurma
      );
      res.send(alunosNaoInscritos);
    } catch (error) {
      console.log(
        'Erro ao consultar alunos não inscritos em uma turma: ',
        error
      );
      res.status(400).send(error);
    }
  }

  // create cria um aluno com os dados passados
  async create(req, res) {
    const data = req.body;

    try {
      const novo_aluno = await AlunoRepository.create(data);
      res.send(novo_aluno);
    } catch (error) {
      console.log('Erro ao criar aluno: ', error);
    }
  }

  // Adiciona um aluno a uma turma
  async addToTurma(req, res) {
    const idAluno = Number(req.body.idAluno);
    const idTurma = Number(req.body.idTurma);

    try {
      const alunoAtualizado = await AlunoRepository.addToTurma(
        idAluno,
        idTurma
      );
      res.status(200).json(alunoAtualizado);
    } catch (error) {
      console.log('Erro ao adicionar aluno à turma: ', error);
      res.status(400).json({ erro: error.toString() });
    }
  }

  // Remove um aluno de uma turma
  async removeFromTurma(req, res) {
    const { idAluno, idTurma } = req.body;

    try {
      const alunoAtualizado = await AlunoRepository.removeFromTurma(
        idAluno,
        idTurma
      );
      res.status(200).json(alunoAtualizado);
    } catch (error) {
      console.log('Erro ao remover aluno da turma: ', error);
      res.status(400).json({ erro: error.toString() });
    }
  }
}

module.exports = new AlunoController();
