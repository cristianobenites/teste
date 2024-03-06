// Importa o repositório de Presença
const PresencaRepository = require('../repositories/PresencaRepository');

class PresencaController {
  // Método para buscar presenças por ID de aula
  async getPresencasByAulaId(req, res) {
    const { idAula } = req.params;

    try {
      const presencas = await PresencaRepository.findPresencasByAulaId(
        Number(idAula)
      );
      res.json(presencas);
    } catch (error) {
      console.error('Erro ao buscar presenças:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  // Método para registrar presença
  async registrarPresenca(req, res) {
    const { idAula, idAluno, presente } = req.body;

    try {
      const presencaRegistrada = await PresencaRepository.registrarPresenca(
        idAula,
        idAluno,
        presente
      );
      res.status(201).json(presencaRegistrada);
    } catch (error) {
      console.error('Erro ao registrar presença:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

module.exports = new PresencaController();
