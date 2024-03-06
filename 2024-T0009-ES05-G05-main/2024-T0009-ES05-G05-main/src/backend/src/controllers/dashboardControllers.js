// Importando o modelo Oficina do módulo Dashboard
const Oficina = require('../models/Dashboard');

// Dados das oficinas
const dados = [
    new Oficina(1, '10', '90%', '80%', '12', '5', '10'), // Exemplo de dados para a primeira oficina
    new Oficina(2, '13', '73%', '98%', '12', '9', '6'),  // Exemplo de dados para a segunda oficina
    new Oficina(3, '8', '87%', '56%', '9', '7', '9'),    // Exemplo de dados para a terceira oficina
];

// Função para obter os dados das oficinas
const getDados = (req, res) => {
    res.json(dados); // Enviando os dados das oficinas como resposta JSON
};

// Exportando a função para ser utilizada em outros módulos
module.exports = { getDados };
