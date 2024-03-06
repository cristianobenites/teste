import Joi from "joi";
import ProfessorService from "../services/professorService.js";
import presencas from "../database/mock/presenca.json" assert { type: "json" };

const professorService = new ProfessorService();

class ProfessorController {
  /**
   * Obtém uma lista de todos os professores. Retorna um objeto JSON com a lista de professores e um status 200.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a lista de professores com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a lista de professores é enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/', ProfessorController.getAll);
   */
  static async getAll(req, res) {
    const professores = await professorService.getAll();

    res.status(200).json({ professores });
  }

  /**
   * Obtém uma lista de todos os professores de uma ONG. Retorna um objeto JSON com a lista de professores e um status 200.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID da ONG.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a lista de professores com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a lista de professores é enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/ong/:id', ProfessorController.getAllByOng);
   */
  static async getAllByOng(req, res) {
    const { id } = req.params;

    const professores = await professorService.getAllByOng(Number(id));

    res.status(200).json({ professores });
  }

  /**
   * Obtém um professor pelo ID. Retorna um objeto JSON com o professor e um status 200.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID do professor.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o professor com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando o professor é enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/:id', ProfessorController.getById);
   */
  static async getById(req, res) {
    const { id } = req.params;

    try {
      const professor = await professorService.getById(Number(id));

      res.status(200).json({ professor });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Cria um novo professor. Retorna um objeto JSON com o professor criado e um status 201.
   * Em caso de erro, retorna um erro 400 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados do novo professor.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o professor criado com status 201.
   * @returns {Promise<void>} Uma promessa que resolve quando o professor é criado e enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.post('/', ProfessorController.create);
   */
  static async create(req, res) {
    // Validação do corpo da requisição
    const schema = Joi.object({
      nome: Joi.string().required(),
      categoria: Joi.string().required(),
      idade: Joi.number().integer().required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newProfessor = await professorService.create(value);

      res.status(201).json({ professor: newProfessor });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * Atualiza um professor pelo ID. Retorna um objeto JSON com o professor atualizado e um status 200.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados do professor a ser atualizado.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o professor atualizado com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando o professor é enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.put('/:id', ProfessorController.update);
   */
  static async update(req, res) {
    const { id } = req.params;

    // Validação do corpo da requisição
    const schema = Joi.object({
      nome: Joi.string(),
      categoria: Joi.string(),
      idade: Joi.string(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const updatedProfessor = await professorService.update(Number(id), value);

      res.status(200).json({ professor: updatedProfessor });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Deleta um professor pelo ID. Retorna um status 204.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID do professor a ser deletado.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o status 204.
   * @returns {Promise<void>} Uma promessa que resolve quando o status 204 é enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.delete('/:id', ProfessorController.delete);
   */
  static async delete(req, res) {
    const { id } = req.params;

    try {
      await professorService.delete(Number(id));

      res.status(204).end();
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Marca a presença de um aluno em uma turma. Retorna um objeto JSON com a presença marcada e um status 201.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados da presença a ser marcada.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a presença marcada com status 201.
   * @returns {Promise<void>} Uma promessa que resolve quando a presença é marcada e enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.post('/presenca', ProfessorController.marcarPresenca);
   */
  static async marcarPresenca(req, res) {
    const schema = Joi.object({
      id_aluno: Joi.number().required(),
      id_turma: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const presenca = await professorService.marcarPresenca(
        value.id_aluno,
        value.id_turma,
      );

      res
        .status(201)
        .json({ message: "Presença marcada com sucesso", presenca });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Desmarca a presença de um aluno em uma turma. Retorna um objeto JSON com a presença desmarcada e um status 201.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados da presença a ser desmarcada.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a presença desmarcada com status 201.
   * @returns {Promise<void>} Uma promessa que resolve quando a presença é desmarcada e enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.delete('/presenca/:id', ProfessorController.desmarcarPresenca);
   */
  static async desmarcarPresenca(req, res) {
    const { id } = req.params;

    try {
      await professorService.desmarcarPresenca(Number(id));

      res.status(201).json({ presencas });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default ProfessorController;
