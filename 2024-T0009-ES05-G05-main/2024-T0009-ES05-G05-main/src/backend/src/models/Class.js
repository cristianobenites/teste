// Definição da classe Class
class Class {
    // Construtor da classe que inicializa as propriedades da aula
    constructor(aulaId, className, date, turmaId) {
        this.aulaId = aulaId;         // Identificador da aula
        this.className = className;   // Nome da aula
        this.date = date;             // Data da aula
        this.turmaId = turmaId;       // Identificador da turma à qual a aula pertence
    }
}

// Exportando a classe para que possa ser utilizada em outros módulos
module.exports = Class;
