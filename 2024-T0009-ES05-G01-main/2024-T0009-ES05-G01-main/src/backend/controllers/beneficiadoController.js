import Joi from "joi";
import BeneficiadoService from "../services/beneficiadoService.js";

const beneficiadoService = new BeneficiadoService();


export default class BeneficiadoController {
  /**
   * Obtém uma lista de todos os beneficiados. Retorna um objeto JSON com a lista de beneficiados e um status 200.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a lista de beneficiados com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a lista de beneficiados é enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/', BeneficiadoController.getAll);
   */
  static async getAll(req, res) {
    const beneficiados = await beneficiadoService.getAll();

    res.status(200).json({ beneficiados });
  }

  /**
   * Obtém um beneficiado pelo ID. Retorna um objeto JSON com o beneficiado e um status 200.
   * Em caso de erro, retorna um erro 404 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID do beneficiado.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o beneficiado com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando o beneficiado é enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/:id', BeneficiadoController.getById);
   */
  static async getById(req, res) {
    const { id } = req.params;

    try {
      const beneficiado = await beneficiadoService.getById(Number(id));

      res.status(200).json({ beneficiado });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  /**
   * Cria um novo beneficiado. Retorna um objeto JSON com o beneficiado criado e um status 201.
   * Em caso de erro, retorna um erro 400 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados do beneficiado a ser criado.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o beneficiado criado com status 201.
   * @returns {Promise<void>} Uma promessa que resolve quando o beneficiado é criado e enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.post('/', BeneficiadoController.create);
   * 
   */
  static async create(req, res) {
    const schema = Joi.object({
      nome: Joi.string().required(),
      genero: Joi.string().required(),
      cpf: Joi.string().required(),
      cidade: Joi.string(),
      estado: Joi.string(),
      idade: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newBeneficiado = await beneficiadoService.create(value);

      res.status(201).json({ beneficiado: newBeneficiado });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * Atualiza um beneficiado pelo ID. Retorna um objeto JSON com o beneficiado atualizado e um status 200.
   * Em caso de erro, retorna um erro 400 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados do beneficiado a ser atualizado.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o beneficiado atualizado com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando o beneficiado é atualizado e enviado ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.put('/:id', BeneficiadoController.update);
    */
  static async update(req, res) {
    const { id } = req.params;

    const schema = Joi.object({
      nome: Joi.string().required(),
      genero: Joi.string().required(),
      cpf: Joi.string().required(),
      cidade: Joi.string(),
      estado: Joi.string(),
      idade: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const updatedBeneficiado = await beneficiadoService.update(
        Number(id),
        value,
      );

      res.status(200).json({ beneficiado: updatedBeneficiado });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * Deleta um beneficiado pelo ID. Retorna um status 204.
   * Em caso de erro, retorna um erro 400 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID do beneficiado a ser deletado.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o status 204.
   * @returns {Promise<void>} Uma promessa que resolve quando o beneficiado é deletado.
   * 
   * @example
   * // Exemplo de uso:
   * router.delete('/:id', BeneficiadoController.delete);
   */
  static async delete(req, res) {
    const { id } = req.params;

    try {
      await beneficiadoService.delete(Number(id));

      res.status(204).json({ message: "Beneficiado deletado com sucesso!" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  
  /**
   * Obtém uma lista de todos os beneficiados de uma ONG. Retorna um objeto JSON com a lista de beneficiados e um status 200.
   * Em caso de erro, retorna um erro 500 com detalhes do erro.
   * 
   * @date 3/2/2024 - 12:20:25 PM
   * 
   * @static
   * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID da ONG.
   * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a lista de beneficiados com status 200.
   * @returns {Promise<void>} Uma promessa que resolve quando a lista de beneficiados é enviada ao cliente.
   * 
   * @example
   * // Exemplo de uso:
   * router.get('/ongs/:id', BeneficiadoController.getAllByOng);
   */
  static async getAllByOng(req, res) {
    try {
      const { id } = req.params;
      const beneficiados = await beneficiadoService.getAllByOng(Number(id));
      res.json(beneficiados);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
