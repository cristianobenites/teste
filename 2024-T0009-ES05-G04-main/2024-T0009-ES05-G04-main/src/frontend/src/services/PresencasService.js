import axios from 'axios'; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para buscar as presenças de uma aula específica
export const fetchPresencasByAulaId = async (idAula) => {
  try {
    const response = await axios.get(`${API_URL}/presencas/aula/${idAula}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para registrar a presença de um aluno em uma aula
export const registrarPresencas = async (idAula, idAluno, presente) => {
  try {
    const response = await axios.post(`${API_URL}/presencas/registrar`, { // Faz uma requisição POST para a API
      idAula,
      idAluno,
      presente,
    });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};
