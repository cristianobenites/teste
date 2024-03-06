// dados mockados sobre turmas 
const turmas = [
  {
    idTurma: 1,
    idOficina: 1,
    name: 'Turma 02',
    idProfessor: 1,
    vagas: 20,
  },
  {
    idTurma: 2,
    idOficina: 1,
    name: 'Turma 03',
    idProfessor: 1,
    vagas: 30,
  },
  {
    idTurma: 3,
    idOficina: 2,
    name: 'Turma 06',
    idProfessor: 1,
    vagas: 20,
  },
  {
    idTurma: 4,
    idOficina: 2,
    name: 'Turma 04',
    idProfessor: 2,
    vagas: 40,
  },
  {
    idTurma: 7,
    idOficina: 1,
    name: 'Turma 01',
    idProfessor: 1,
    vagas: 30,
  },
  {
    idTurma: 6,
    idOficina: 2,
    name: 'Turma 05',
    idProfessor: 1,
    vagas: 20,
  },
  {
    idTurma: 5,
    idOficina: 2,
    name: 'Turma 04',
    idProfessor: 2,
    vagas: 40,
  }
];

class TurmaRepository {
  
  // Método para buscar turmas por ID do professor
  findByProfessorId(idProfessor) {
    return new Promise((resolve) => {
      resolve(turmas.filter((turma) => turma.idProfessor == idProfessor));
    });
  }
}

module.exports = new TurmaRepository();
