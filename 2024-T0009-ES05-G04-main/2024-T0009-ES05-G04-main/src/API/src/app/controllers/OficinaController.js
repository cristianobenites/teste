// importa o repositório da oficina
const OficinaRepository = require("../repositories/OficinaRepository");

class OficinaController {
  // getById retorna uma oficina específica com base no id
  async getById(req, res) {
    const { id } = req.params; 

    try {
      const idOficina = parseInt(id); 
      const oficina = await OficinaRepository.findById(idOficina);
      res.json(oficina);
    } catch (error) {
      console.log("Erro ao consultar a oficina com id:", id, error);
      res.status(404).json({ mensagem: "Oficina não encontrada" });
    }
  }
}

module.exports = new OficinaController();
