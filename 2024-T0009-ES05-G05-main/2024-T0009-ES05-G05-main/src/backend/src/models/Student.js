// Definição da classe Student
class Student {
    // Construtor da classe que inicializa as propriedades do estudante
    constructor(id, name, turmaId) {
        this.id = id;           // Identificador do estudante
        this.name = name;       // Nome do estudante
        this.turmaId = turmaId; // Identificador da turma do estudante
    }
}

// Exportando a classe para que possa ser utilizada em outros módulos
module.exports = Student;
