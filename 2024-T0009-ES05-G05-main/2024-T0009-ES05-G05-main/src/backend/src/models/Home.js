// Definição da classe Workshop
class Workshop {
  // Construtor da classe que inicializa as propriedades do workshop
  constructor(turmaId, title, icon) {
      this.turmaId = turmaId; // Identificador do workshop
      this.title = title;     // Título do workshop
      this.icon = icon;       // Ícone associado ao workshop
  }
}

// Exportando a classe para que possa ser utilizada em outros módulos
module.exports = Workshop;
