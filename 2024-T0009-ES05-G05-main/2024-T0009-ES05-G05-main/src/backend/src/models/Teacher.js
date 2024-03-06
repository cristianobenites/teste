// Definição da classe Teacher
class Teacher {
    // Construtor da classe que inicializa as propriedades do professor
    constructor(id, name, turmaId) {
        this.id = id;           // Identificador do professor
        this.name = name;       // Nome do professor
        this.turmaId = turmaId; // Identificador da turma do professor
    }
}

// Exportando a classe para que possa ser utilizada em outros módulos
module.exports = Teacher;
