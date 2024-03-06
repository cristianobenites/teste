// Importando o modelo Workshop do módulo Home
const Workshop = require('../models/Home');

// Lista de workshops disponíveis
const workshops = [
    new Workshop(1, "Dança", "music_icon.svg"),
    new Workshop(2, "Esporte", "sport_icon.svg"),
    new Workshop(3, "Cultura", "art_icon.svg"),
    new Workshop(4, "Qualificação Profissional", "profile_icon.svg"),
    new Workshop(5, "Empreendedorismo", "business_icon.svg"),
    new Workshop(6, "Empregabilidade", "graph_icon.svg"),
    new Workshop(7, "Cursos", "head_icon.svg"),
    new Workshop(8, "Mentorias", "people_icon.svg"),
];

// Função para obter todos os workshops
const getAllWorkshops = (req, res) => {
    res.json(workshops); // Enviando a lista de workshops como resposta JSON
};

// Exportando a função para ser utilizada em outros módulos
module.exports = {
    getAllWorkshops,
};
