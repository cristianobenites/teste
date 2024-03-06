import axios from 'axios'; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para fazer login na API
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { // Faz uma requisição POST para a API
      username,
      password
    });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw error; // Lança o erro original caso não haja resposta da API
    }
  }
};
