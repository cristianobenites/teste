import LiderRepository from '../repositories/liderRepository.js';

const liderRepository = new LiderRepository();

class LiderService {
    async getAll() {
        return await liderRepository.getAll();
    }

    async getById(id) {
        const lider = await liderRepository.getById(id);

        if (!lider) {
            throw new Error('Líder não encontrado!');
        }

        return lider;
    }

    async create(lider) {
        const newLider = await liderRepository.create(lider);

        if (!newLider) {
            throw new Error('Erro ao criar Líder!');
        }

        return newLider;
    }

    async update(id, lider) {
        const updatedLider = await liderRepository.update(id, lider);

        if (!updatedLider) {
            throw new Error('Erro ao editar Líder!');
        }

        return updatedLider;
    }

    async delete(id) {
        const deletedLider = await liderRepository.delete(id);

        if (!deletedLider) {
            throw new Error('Erro ao deletar Líder!');
        }

        return deletedLider;
    }
}



export default LiderService;