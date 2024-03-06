import turmas from "../database/mock/turmas.json" assert { type: "json" };
import presencas from "../database/mock/presenca.json" assert { type: "json" };

export default class TurmaRepository {
  async getAll() {
    return turmas;
  }

  async getById(id) {
    return turmas.find((turma) => turma.id === id);
  }

  async create(turma) {
    const newTurma = {
      id: turmas.length + 1,
      ...turma,
    };

    turmas.push(newTurma);

    return newTurma;
  }

  async update(id, turma) {
    const index = turmas.findIndex((of) => of.id === id);

    if (index === -1) {
      return null;
    }

    const updatedTurma = {
      ...turmas[index],
      ...turma,
    };

    turmas[index] = updatedTurma;

    return updatedTurma;
  }

  async delete(id) {
    const index = turmas.findIndex((of) => of.id === id);

    if (index === -1) {
      return null;
    }

    turmas.splice(index, 1);

    return true;
  }

  async getPresencas(id_turmas) {
    return presencas.filter((presenca) => presenca.id_turma === id_turmas);
  }
}

