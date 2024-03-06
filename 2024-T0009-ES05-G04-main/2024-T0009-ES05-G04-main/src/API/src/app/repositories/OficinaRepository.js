// dados mockados das oficinas
let oficinas = [
  {
    idOficina: 1,
    idOng: 1,
    nome: "oficina x",
    categoria: "esporte",
    subcategoria: "futebol",
    local: "rua x",
    observcoes: "-",
  },
  {
    idOficina: 2,
    idOng: 1,
    nome: "oficina y",
    categoria: "esporte",
    subcategoria: "basquete",
    local: "rua x",
    observcoes: "-",
  },
];

class OficinaRepository {
  // findById retorna a oficina com base no idOficina fornecido
  findById(idOficina) {
    return new Promise((resolve, reject) => {
      const oficinaEncontrada = oficinas.find((oficina) => oficina.idOficina === idOficina);

      if (oficinaEncontrada) {
        resolve(oficinaEncontrada);
      } else {
        reject("Oficina não encontrada.");
      }
    });
  }
}

module.exports = new OficinaRepository();
