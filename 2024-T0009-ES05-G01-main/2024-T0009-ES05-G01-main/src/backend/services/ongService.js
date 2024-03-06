import OngRepository from '../repositories/ongRepository.js';

const ongRepository = new OngRepository();

class OngService {
  async getAll() {
    return await ongRepository.getAll();
  }

  async getById(id) {
    const ong = await ongRepository.getById(id);
    if (!ong) {
      throw new Error('ONG não encontrada.');
    }

    return ong;
  }

  async create(ong) {
    const newOng = await ongRepository.create(ong);

    if (!newOng) {
      throw new Error('Erro ao criar ONG.');
    }

    return newOng;
  }

  async update(id, ong) {
    const updatedOng = await ongRepository.update(id, ong);

    if (!updatedOng) {
      throw new Error('ONG não encontrada!');
    }

    return updatedOng;
  }

  async delete(id) {
    return await ongRepository.delete(id);
  }
}

export default OngService;
