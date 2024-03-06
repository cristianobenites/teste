// dados mockados alunos
let alunos = [
  {
    idAluno: 1,
    idTurma: [1, 2],
    nome: "João Pedro Silva Oliveira",
    email: "joao@example.com",
    cpf: "09771520728",
    rg: "mg20398690",
    dataNasc: "19/07/2009",
    estadoCivil: "solteiro",
    endereco: "",
    telefone: "",
    celular: "(32) 984671038",
    raca: "",
    genero: "masculino",
    responsavel: "",
  },
  {
    idAluno: 2,
    idTurma: [2, 3],
    nome: "Breno Oliveira",
    email: "breno@example.com",
    cpf: "09111520728",
    rg: "mg20388690",
    dataNasc: "19/05/2009",
    estadoCivil: "solteiro",
    endereco: "",
    telefone: "",
    celular: "(32) 984671024",
    raca: "",
    genero: "masculino",
    responsavel: "",
  },
  {
    idAluno: 3,
    idTurma: [1],
    nome: "Maria Clara dos Santos",
    email: "maria@example.com",
    cpf: "09876543210",
    rg: "sp12345678",
    dataNasc: "05/12/2008",
    estadoCivil: "solteira",
    endereco: "",
    telefone: "",
    celular: "(32) 987654321",
    raca: "",
    genero: "feminino",
    responsavel: "",
  },
  {
    idAluno: 4,
    idTurma: [1],
    nome: "Pedro Gomes Souza",
    email: "pedro@example.com",
    cpf: "12345678901",
    rg: "rj98765432",
    dataNasc: "10/08/2009",
    estadoCivil: "solteiro",
    endereco: "",
    telefone: "",
    celular: "(32) 987654321",
    raca: "",
    genero: "masculino",
    responsavel: "",
  },
  {
    idAluno: 5,
    idTurma: [1],
    nome: "Ana Paula Oliveira de Souza Silva",
    email: "ana@example.com",
    cpf: "10987654321",
    rg: "rj12345678",
    dataNasc: "25/03/2008",
    estadoCivil: "solteira",
    endereco: "",
    telefone: "",
    celular: "(32) 987654321",
    raca: "",
    genero: "feminino",
    responsavel: "",
  },
];

class AlunoRepository {
  // findByTurma retorna os alunos de uma turma
  findByTurma(idTurma) {
    return new Promise((resolve) => {
      // Filtrar alunos cujo array idTurma inclui o idTurma fornecido
      const alunosEncontrados = alunos.filter((aluno) =>
        aluno.idTurma.includes(idTurma)
      );
      resolve(alunosEncontrados);
    });
  }

  // Método para encontrar alunos que não estão inscritos em uma turma específica
  findByNotInTurma(idTurma) {
    return new Promise((resolve) => {
      const alunosNaoInscritos = alunos.filter(
        (aluno) => !aluno.idTurma.includes(idTurma)
      );
      resolve(alunosNaoInscritos);
    });
  }

  // create cadastra um aluno com os dados fornecidos
  create(data) {
    return new Promise((resolve, reject) => {
      if (!data || Object.keys(data).length === 0) {
        // Checa se o objeto data não é nulo e não está vazio
        reject("Dados inválidos");
        return;
      }
      // Simula um incremento simples baseado na quantidade de alunos para geração do Id
      const novoIdAluno = alunos.length + 1;
      const novoAluno = {
        idAluno: novoIdAluno, // Atribui o novo ID calculado ao aluno
        ...data,
      };
      alunos.push(novoAluno);
      resolve(novoAluno);
    });
  }

  // addToTurma adiciona um aluno a uma turma
  addToTurma(idAluno, idTurmaToAdd) {
    return new Promise((resolve, reject) => {
      const alunoIndex = alunos.findIndex((aluno) => aluno.idAluno === idAluno);
      if (alunoIndex >= 0) {
        const aluno = alunos[alunoIndex];
        // Evitar adicionar duplicatas
        if (!aluno.idTurma.includes(idTurmaToAdd)) {
          aluno.idTurma.push(idTurmaToAdd);
          resolve(aluno);
        } else {
          reject("Aluno já está nesta turma.");
        }
      } else {
        reject("Aluno não encontrado.");
      }
    });
  }

  // removeFromTurma remove o aluno de uma turma
  removeFromTurma(idAluno, idTurmaToRemove) {
    return new Promise((resolve, reject) => {
      const alunoIndex = alunos.findIndex((aluno) => aluno.idAluno === idAluno);
      if (alunoIndex >= 0) {
        const aluno = alunos[alunoIndex];
        const turmaIndex = aluno.idTurma.indexOf(idTurmaToRemove);
        if (turmaIndex >= 0) {
          aluno.idTurma.splice(turmaIndex, 1);
          resolve(aluno);
        } else {
          reject("Aluno não está nesta turma.");
        }
      } else {
        reject("Aluno não encontrado.");
      }
    });
  }
}

module.exports = new AlunoRepository();
