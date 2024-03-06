import Joi from 'joi';
import LiderService from '../services/liderService.js';


const liderService = new LiderService();

class LiderController {
    /**
     * Obtém uma lista de todos os líderes. Retorna um objeto JSON com a lista de líderes e um status 200.
     * 
     * @date 3/2/2024 - 12:20:25 PM
     * 
     * @static
     * @param {Express.Request} req - O objeto de solicitação do Express.
     * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar a lista de beneficiados com status 200.
     * @returns {Promise<void>} Uma promessa que resolve quando a lista de líderes é enviada ao cliente.
     * 
     * @example
     * // Exemplo de uso:
     * router.get('/', LiderController.getAll);
     */
    static async getAll(req, res) {
        const lideres = await liderService.getAll();

        res.status(200).json({ lideres });
    }

    /**
     * Obtém um líder pelo ID. Retorna um objeto JSON com o líder e um status 200.
     * Em caso de erro, retorna um erro 404 com detalhes do erro.
     * 
     * @date 3/2/2024 - 12:20:25 PM
     * 
     * @static
     * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID do líder.
     * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o líder com status 200.
     * @returns {Promise<void>} Uma promessa que resolve quando o líder é enviado ao cliente.
     * 
     * @example
     * // Exemplo de uso:
     * router.get('/:id', LiderController.getById);
     */
    static async getById(req, res) {
        const { id } = req.params;

        try {
            const lider = await liderService.getById(Number(id));

            res.status(200).json({ lider });
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    /**
     * Cria um novo líder. Retorna um objeto JSON com o líder criado e um status 201.
     * Em caso de erro, retorna um erro 400 com detalhes do erro.
     * 
     * @date 3/2/2024 - 12:20:25 PM
     * 
     * @static
     * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados do líder a ser criado.
     * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o líder criado com status 201.
     * @returns {Promise<void>} Uma promessa que resolve quando o líder é criado e enviado ao cliente.
     * 
     * @example
     * // Exemplo de uso:
     * router.post('/', LiderController.create);
     */
    static async create(req, res) {

        // Validação do corpo da requisição
        const schema = Joi.object({
            nome: Joi.string().required(),
            ong: Joi.string().required()
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        try {
            const newLider = await liderService.create(value);

            res.status(201).json({ oficina: newLider });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    /**
     * Atualiza um líder pelo ID. Retorna um objeto JSON com o líder atualizado e um status 200.
     * Em caso de erro, retorna um erro 404 com detalhes do erro.
     * 
     * @date 3/2/2024 - 12:20:25 PM
     * 
     * @static
     * @param {Express.Request} req - O objeto de solicitação do Express, contendo os dados do líder a ser atualizado.
     * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar o líder atualizado com status 200.
     * @returns {Promise<void>} Uma promessa que resolve quando o líder é atualizado e enviado ao cliente.
     * 
     * @example
     * // Exemplo de uso:
     * router.put('/:id', LiderController.update);
     */
    static async update(req, res) {
        const { id } = req.params;

        // Validação do corpo da requisição
        const schema = Joi.object({
            nome: Joi.string().required(),
            ong: Joi.string().required()
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        try {
            const updatedLider = await liderService.update(Number(id), value);

            res.status(200).json({ oficina: updatedLider });
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
    
    /**
     * Deleta um líder pelo ID. Retorna um status 204.
     * Em caso de erro, retorna um erro 404 com detalhes do erro.
     * 
     * @date 3/2/2024 - 12:20:25 PM
     * 
     * @static
     * @param {Express.Request} req - O objeto de solicitação do Express, contendo o ID do líder a ser deletado.
     * @param {Express.Response} res - O objeto de resposta do Express, usado para enviar um status 204.
     * @returns {Promise<void>} Uma promessa que resolve quando o líder é deletado.
     * 
     * @example
     * // Exemplo de uso:
     * router.delete('/:id', LiderController.delete);
     */
    static async delete(req, res) {
        const { id } = req.params;

        try {
            await liderService.delete(Number(id));

            res.status(204).json({ message: 'Líder deletado com sucesso!' });
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

}


export default LiderController;