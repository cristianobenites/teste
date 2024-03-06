// Importando o modelo User do módulo User
const User = require('../models/User');

// Lista de usuários cadastrados
const users = [
    new User(1, 'Henrique', 'henrique@ottoboni.com.br', '123456', 'lider'),
    new User(2, 'Lucas', 'lucas@lider.com.br', '123', 'lider')
];

// Função para realizar o login do usuário
function loginUser(req, res) {
    const { email, password, job } = req.body;
    
    // Procurando pelo usuário com as credenciais fornecidas
    const user = users.find(user => user.email === email && user.password === password && user.job === job);

    if (user) {
        return res.status(200).json(user); // Retornando o usuário encontrado
    }

    return res.status(401).json({ message: 'Usuário não encontrado' }); // Retornando mensagem de erro se o usuário não for encontrado
}

// Função para obter todos os usuários
const getAllUsers = (req, res) => {
    res.json(users); // Enviando a lista de usuários como resposta JSON
}

// Exportando as funções para serem utilizadas em outros módulos
module.exports = { getAllUsers, loginUser };
