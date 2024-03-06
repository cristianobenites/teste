import ProfessorRepository from "../repositories/professorRepository.js";

const professorRepository = new ProfessorRepository();

class ProfessorService {
  async getAll() {
    return await professorRepository.getAll();
  }

  async getAllByOng(id_ong) {
    return await professorRepository.getAllByOng(id_ong);
  }

  async getById(id) {
    const professor = await professorRepository.getById(id);

    if (!professor) {
      throw new Error("Professor não encontrado!");
    }

    return professor;
  }

  async create(professor) {
    const newProfessor = await professorRepository.create(professor);

    if (!newProfessor) {
      throw new Error("Erro ao criar professor!");
    }

    return newProfessor;
  }

  async update(id, professor) {
    const updatedProfessor = await professorRepository.update(id, professor);

    if (!updatedProfessor) {
      throw new Error("Professor não encontrado!");
    }

    return updatedProfessor;
  }

  async delete(id) {
    const deletedProfessor = await professorRepository.delete(id);

    if (!deletedProfessor) {
      throw new Error("Professor não encontrado!");
    }

    return;
  }

  async marcarPresenca(id_aluno, id_turma) {
    const presenca = await professorRepository.marcarPresenca(
      id_aluno,
      id_turma,
    );

    if (!id_aluno || !id_turma) {
      throw new Error("Parâmetros inválidos!");
    }

    return presenca;
  }

  async desmarcarPresenca(id_presenca) {
    const presencaDesmarcada = await professorRepository.desmarcarPresenca(id_presenca);

    if (!presencaDesmarcada) {
      throw new Error("Presença não encontrada!");
    }

    return;
  }
}

export default ProfessorService;

