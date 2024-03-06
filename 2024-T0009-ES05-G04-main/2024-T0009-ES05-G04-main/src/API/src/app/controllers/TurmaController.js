// Importa classe TurmaRepository
const TurmaRepository = require("../repositories/TurmaRepository");

class TurmaController {
  // Método para buscar turmas por ID do professor
  async getByProfessorId(req, res) {
    const { idProfessor } = req.params;

    const turmas = await TurmaRepository.findByProfessorId(idProfessor);

    if (!turmas) {
      console.log("erro ao consultar turmas pelo id do professor", id);
    }

    return res.json(turmas);
  }
}

module.exports = new TurmaController();
