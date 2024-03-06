import Joi from "joi";
import TurmaService from "../services/turmaService.js";

const turmaService = new TurmaService();

class TurmaController {
  /**
   * Obtém uma lista de todas as turmas. Retorna um objeto JSON com a lista de turmas e um status 200.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a lista de turmas com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a lista de turmas é enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/', TurmaController.getAll);
   */
  static async getAll(req, res) {
    const turmas = await turmaService.getAll();

    res.status(200).json({ turmas });
  }

  /**
   * Obtém uma turma pelo ID. Retorna um objeto JSON com a turma e um status 200.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID da turma.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a turma com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a turma é enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/:id', TurmaController.getById);
   */
  static async getById(req, res) {
    const { id } = req.params;

    try {
      const turma = await turmaService.getById(Number(id));

      res.status(200).json({ turma });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Cria uma nova turma. Retorna um objeto JSON com a turma criada e um status 201.
   * Em caso de erro, retorna um erro 400 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados da nova turma.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a turma criada com status 201.
   * @returns {Promise<void>} Uma promessa que resolve quando a turma é criada e enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.post('/', TurmaController.create);
   */
  static async create(req, res) {
    const schema = Joi.object({
      nome: Joi.string().required(),
      id_oficina: Joi.number().min(1).required(),
      beneficiados: Joi.array().items(Joi.number()),
      professores: Joi.array().items(Joi.number()),
      data_inicio: Joi.date().required(),
      data_fim: Joi.date().required(),
      horario: Joi.string().required(),
      local: Joi.string().required(),
      ativo: Joi.boolean().required(),
      dia: Joi.string().required(),
      capacidade_beneficiados: Joi.number().required(),
      repetir: Joi.string().valid("semanal", "quinzenal", "mensal"),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newTurma = await turmaService.create(value);

      res.status(201).json({ turma: newTurma });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * Atualiza uma turma pelo ID. Retorna um objeto JSON com a turma atualizada e um status 200.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados da turma a ser atualizada.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a turma atualizada com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a turma é atualizada e enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.put('/:id', TurmaController.update);
   */
  static async update(req, res) {
    const { id } = req.params;

    const schema = Joi.object({
      nome: Joi.string(),
      id_oficina: Joi.number().min(1),
      beneficiados: Joi.array().items(Joi.number()),
      professores: Joi.array().items(Joi.number()),
      data_inicio: Joi.date(),
      data_fim: Joi.date(),
      horario: Joi.string(),
      local: Joi.string(),
      ativo: Joi.boolean(),
      dia: Joi.string(),
      capacidade_beneficiados: Joi.number(),
      repetir: Joi.string().valid("semanal", "quinzenal", "mensal"),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const updatedTurma = await turmaService.update(Number(id), value);

      res.status(200).json({ turma: updatedTurma });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Deleta uma turma pelo ID. Retorna um status 204.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID da turma a ser deletada.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o status 204.
   * @returns {Promise<void>} Uma promessa que resolve quando o status 204 é enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.delete('/:id', TurmaController.delete);
   */
  static async delete(req, res) {
    const { id } = req.params;

    try {
      await turmaService.delete(Number(id));

      res.status(204).end();
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Obtém uma lista de presenças de uma turma pelo ID. Retorna um objeto JSON com a lista de presenças e um status 200.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID da turma.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a lista de presenças com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a lista de presenças é enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/:id/presencas', TurmaController.getPresencas);
   */
  static async getPresencas(req, res) {
    const schema = Joi.object({
      id: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.params);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const presencas = await turmaService.getPresencas(value.id);

      res.status(200).json({ presencas });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default TurmaController;

