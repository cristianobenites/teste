// Definição da classe Oficina
class Oficina {
    // Construtor da classe que inicializa as propriedades da oficina
    constructor(turmaId, esperados, atendidos, professores, freqVaga, freqMatricula, evasao) {
        this.turmaId = turmaId;           // Identificador da turma da oficina
        this.esperados = esperados;       // Número esperado de participantes
        this.atendidos = atendidos;       // Número de participantes que compareceram
        this.professores = professores;   // Número de professores/instrutores
        this.freqVaga = freqVaga;         // Frequência de ocupação das vagas
        this.freqMatricula = freqMatricula; // Frequência de matrícula
        this.evasao = evasao;             // Taxa de evasão
    }
}

// Exportando a classe para que possa ser utilizada em outros módulos
module.exports = Oficina;
