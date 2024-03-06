// Importando os dados das classes do módulo classData
const classData = require('../data/classData');

// Importando os dados dos professores do módulo teacherData
const teachersData = require('../data/teacherData');

// Importando os dados dos alunos do módulo studentData
const studentsData = require('../data/studentData');

// Função para obter todas as classes
const getAllClasses = (req, res) => {
    res.json(classData); // Enviando os dados das classes como resposta JSON
};

// Função para obter todos os alunos
const getAllStudents = (req, res) => {
    res.json(studentsData); // Enviando os dados dos alunos como resposta JSON
};

// Função para obter todos os professores
const getAllTeachers = (req, res) => {
    res.json(teachersData); // Enviando os dados dos professores como resposta JSON
};

// Exportando as funções para serem utilizadas em outros módulos
module.exports = {
    getAllClasses,
    getAllStudents,
    getAllTeachers,
};
