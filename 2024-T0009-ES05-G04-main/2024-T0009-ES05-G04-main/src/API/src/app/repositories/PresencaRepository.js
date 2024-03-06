// dados mockados da presenca
let presencas = [
  {
    idAula: 3,
    idAluno: 2,
    presente: true,
  },
  {
    idAula: 2,
    idAluno: 1,
    presente: true, 
  },
  {
    idAula: 2,
    idAluno: 4,
    presente: true, 
  },
  {
    idAula: 2,
    idAluno: 3,
    presente: true, 
  },
  {
    idAula: 2,
    idAluno: 5,
    presente: false, 
  },
];

class PresencaRepository {
    // Método para buscar presenças por ID de aula
  findPresencasByAulaId(idAula) {
    return new Promise((resolve) => {
      resolve(presencas.filter((presenca) => presenca.idAula === idAula));
    });
  }

  // Método para registrar presença
  registrarPresenca(idAula, idAluno, presente) {
    return new Promise((resolve, reject) => {
      const novaPresenca = { idAula, idAluno, presente };
      presencas.push(novaPresenca);
      resolve(novaPresenca);
    });
  }
}

module.exports = new PresencaRepository();
