// Definição da classe User
class User {
    // Construtor da classe que inicializa as propriedades do usuário
    constructor(id, name, email, password, job) {
        this.id = id;           // Identificador do usuário
        this.name = name;       // Nome do usuário
        this.email = email;     // Endereço de e-mail do usuário
        this.password = password; // Senha do usuário
        this.job = job;         // Cargo/função do usuário
    }
}

// Exportando a classe para que possa ser utilizada em outros módulos
module.exports = User;
