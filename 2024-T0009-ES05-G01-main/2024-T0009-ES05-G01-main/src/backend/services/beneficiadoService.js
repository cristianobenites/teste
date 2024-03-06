import BeneficiadoRepository from "../repositories/beneficiadoRepository.js";

const beneficiadoRepository = new BeneficiadoRepository();

export default class BeneficiadoService {
  async getAll() {
    return await beneficiadoRepository.getAll();
  }

  async getById(id) {
    const beneficiado = await beneficiadoRepository.getById(id);

    if (!beneficiado) {
      throw new Error("Beneficiado não encontrado!");
    }

    return beneficiado;
  }

  async create(beneficiado) {
    const newBeneficiado = await beneficiadoRepository.create(beneficiado);

    if (!newBeneficiado) {
      throw new Error("Erro ao criar Beneficiado!");
    }

    return newBeneficiado;
  }

  async update(id, beneficiado) {
    const updatedBeneficiado = await beneficiadoRepository.update(
      id,
      beneficiado,
    );

    if (!updatedBeneficiado) {
      throw new Error("Erro ao editar Beneficiado!");
    }

    return updatedBeneficiado;
  }

  async delete(id) {
    const deletedBeneficiado = await beneficiadoRepository.delete(id);

    if (!deletedBeneficiado) {
      throw new Error("Erro ao deletar Beneficiado!");
    }

    return deletedBeneficiado;
  }
  
  async getAllByOng(id) {
    return await beneficiadoRepository.getAllByOng(id);
  }
}
