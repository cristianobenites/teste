import beneficiados from "../database/mock/beneficiados.json" assert { type: "json" };

export default class BeneficiadoRepository {
  async getAll() {
    return beneficiados;
  }

  async getById(id) {
    return beneficiados.find((beneficiado) => beneficiado.id === id);
  }

  async create(beneficiado) {
    const newBeneficiado = {
      id: beneficiados.length + 1,
      ...beneficiado,
    };

    beneficiados.push(newBeneficiado);

    return newBeneficiado;
  }

  async update(id, beneficiado) {
    const beneficiadoIndex = beneficiados.findIndex(
      (beneficiado) => beneficiado.id === id,
    );

    if (beneficiadoIndex === -1) {
      return null;
    }

    const updatedBeneficiado = {
      ...beneficiados[beneficiadoIndex],
      ...beneficiado,
    };

    beneficiados[beneficiadoIndex] = updatedBeneficiado;

    return updatedBeneficiado;
  }

  async delete(id) {
    const beneficiadoIndex = beneficiados.findIndex(
      (beneficiado) => beneficiado.id === id,
    );

    if (beneficiadoIndex === -1) {
      return null;
    }

    const deletedBeneficiado = beneficiados[beneficiadoIndex];

    beneficiados.splice(beneficiadoIndex, 1);

    return deletedBeneficiado;
  }
  
  async getAllByOng(id) {
    return beneficiados.filter(beneficiado => beneficiado.ong.id === id);
  }
}