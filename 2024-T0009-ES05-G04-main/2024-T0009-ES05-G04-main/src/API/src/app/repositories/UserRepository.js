// dados mockados sobre os usuários
const users = [
  {
    id: 1,
    username: "João",
    password: "joao123",
    roleId: 1,
    nomeCompleto: "Joao da Silva",
    email: "joao@example.com",
    cpf: "09181520728",
    rg: "mg20388690",
    telefone: "",
    celular: "(32) 984671024",
  },
  {
    id: 2,
    username: "Eduarda",
    password: "eduarda123",
    roleId: 1,
    nomeCompleto: "Eduarda da Silva",
    email: "eduarda@example.com",
    cpf: "09551520348",
    rg: "mg20321690",
    telefone: "",
    celular: "(32) 984671534",
  },
  {
    id: 3,
    username: "Breno",
    password: "breno123",
    roleId: 2,
    nomeCompleto: "Breno da Silva",
    email: "breno@example.com",
    cpf: "09131524728",
    rg: "mg20388690",
    telefone: "",
    celular: "(32) 984671024",
  },
  {
    id: 4,
    username: "Raissa",
    password: "raissa123",
    roleId: 3,
    nomeCompleto: "Raissa da Silva",
    email: "raissa@example.com",
    cpf: "02611520728",
    rg: "mg16388690",
    telefone: "",
    celular: "(19) 984548724",
  },
];

class UserRepository {
    // Método para buscar usuário por credenciais (username e password)
  findByCredentials(username, password) {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        resolve(user);
      } else {
        reject("Usuário não encontrado ou senha incorreta");
      }
    });
  }
}

module.exports = new UserRepository();
