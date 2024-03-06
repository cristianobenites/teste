import professores from "../database/mock/professores.json" assert { type: "json" };
import presencas from "../database/mock/presenca.json" assert { type: "json" };

export default class ProfessorRepository {
  async getAll() {
    return professores;
  }

  async getAllByOng(id_ong) {
    return professores.filter((professor) => professor.ong.id === id_ong);
  }

  async getById(id) {
    return professores.find((professor) => professor.id === id);
  }

  async create(professor) {
    const newProfessor = {
      id: professores.length + 1,
      ...professor,
    };

    professores.push(newProfessor);

    return newProfessor;
  }

  async update(id, professor) {
    const index = professores.findIndex((of) => of.id === id);

    if (index === -1) {
      return null;
    }

    const updatedProfessor = {
      ...professores[index],
      ...professor,
    };

    professores[index] = updatedProfessor;

    return updatedProfessor;
  }

  async delete(id) {
    const index = professores.findIndex((of) => of.id === id);

    if (index === -1) {
      return null;
    }

    professores.splice(index, 1);

    return true;
  }

  async marcarPresenca(id_aluno, id_turma) {
    const presencaExistente = presencas.find(
      (p) => p.id_aluno === id_aluno && p.id_turma === id_turma,
    );

    if (presencaExistente) {
      throw new Error("Presença já marcada!");
    }

    const novaPresenca = {
      id: presencas.length + 1,
      id_aluno,
      id_turma,
    };

    presencas.push(novaPresenca);

    return novaPresenca;
  }

  async desmarcarPresenca(id_presenca) {
    const index = presencas.findIndex((p) => p.id === id_presenca);

    if (index === -1) {
      return null;
    }

    presencas.splice(index, 1);

    return true;
  }
}

