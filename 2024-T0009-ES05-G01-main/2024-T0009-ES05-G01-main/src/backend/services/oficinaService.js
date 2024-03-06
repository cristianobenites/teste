import OficinaRepository from '../repositories/oficinaRepository.js';

const oficinaRepository = new OficinaRepository();

class OficinaService {
    async getAll() {
        return await oficinaRepository.getAll();
    }

    async getById(id) {
        const oficina = await oficinaRepository.getById(id);

        if (!oficina) {
            throw new Error('Oficina não encontrada!');
        }

        return oficina;
    }

    async create(oficina) {
        const newOficina = await oficinaRepository.create(oficina);

        if (!newOficina) {
            throw new Error('Erro ao criar oficina!');
        }

        return newOficina;
    }

    async update(id, oficina) {
        const updatedOficina = await oficinaRepository.update(id, oficina);

        if (!updatedOficina) {
            throw new Error('Oficina não encontrada!');
        }

        return updatedOficina;
    }

    async delete(id) {
        const deletedOficina = await oficinaRepository.delete(id);

        if (!deletedOficina) {
            throw new Error('Oficina não encontrada!');
        }

        return;
    }
}

export default OficinaService;