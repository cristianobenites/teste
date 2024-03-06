import axios from 'axios'; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para buscar alunos de uma turma específica
export const fetchAlunos = async (idTurma) => {
  try {
    const response = await axios.get(`${API_URL}/turmas/${idTurma}/alunos`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para remover um aluno de uma turma
export const removeAlunoFromTurma = async (idAluno, idTurmaToRemove) => {
  try {
    const response = await axios.post(`${API_URL}/alunos/removeFromTurma`, { // Faz uma requisição POST para a API
      idAluno,
      idTurma: idTurmaToRemove,
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

// Função para buscar alunos não inscritos em uma turma específica
export const fetchAlunosNaoInscritos = async (idTurma) => {
  try {
    const response = await axios.get( // Faz uma requisição GET para a API
      `${API_URL}/turmas/${idTurma}/alunosNaoInscritos`
    );
    console.log(response.data); // Exibe os dados da resposta no console
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      console.log('Erro', error.response.data); // Exibe a mensagem de erro da resposta no console
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      console.error('Erro na requisição: ', error.message); // Exibe o erro no console
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para adicionar um aluno a uma turma
export const addAlunoToTurma = async (idAluno, idTurmaToAdd) => {
  try {
    const response = await axios.post(`${API_URL}/alunos/addToTurma`, { // Faz uma requisição POST para a API
      idAluno,
      idTurma: idTurmaToAdd,
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

// Função para criar um novo aluno
export const createAluno = async (alunoData) => {
  try {
    const response = await axios.post(`${API_URL}/alunos`, alunoData); // Faz uma requisição POST para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};
