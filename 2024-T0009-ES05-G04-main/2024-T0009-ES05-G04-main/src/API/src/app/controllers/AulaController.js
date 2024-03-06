// Importa o repositório de Aula
const AulaRepository = require('../repositories/AulaRepository');

class AulaController {
    // Método para buscar aulas por ID de turma
    async findByTurmaId(req, res) {
        const { idTurma } = req.params;

        try {
            const aulas = await AulaRepository.findByTurmaId(Number(idTurma));
            res.json(aulas);
        } catch (error) {
            console.error("Erro ao buscar aulas para a turma:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

module.exports = new AulaController();
