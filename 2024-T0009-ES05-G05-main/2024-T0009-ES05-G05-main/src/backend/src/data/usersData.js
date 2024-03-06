const User = require('../models/User');

const users = [
    new User(1, 'Henrique', 'henrique@ottoboni.com.br', '123456', 'lider'),
    new User(2, 'Lucas', 'lucas@lider.com.br', '123', 'lider')
];


module.exports = users;