import ongs from '../database/mock/ongs.json' assert { type: "json" };

export default class OngRepository {
  async getAll() {
    return ongs;
  }
  async getById(id) {
    return ongs.find(ong => ong.id === id);
  }
  async create(ong) {
    const newOng = {
      id: ongs.length + 1,
      ...ong,
    }

    ongs.push(newOng);

    return newOng;
  }
  async update(id, ong) {
    const index = ongs.findIndex(ong => ong.id === id);

    if (index === -1) {
      return null;
    }

    const updatedOng = {
      ...ongs[index],
      ...ong,
    }

    ongs[index] = updatedOng;

    return updatedOng;
  }
  async delete(id) {
    const index = ongs.findIndex((ong) => ong.id === id);
    ongs.splice(index, 1);
  }
}