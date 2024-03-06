// dados mockados da aulas
let aulas = [
    {
        idAula: 2,
        data: '29/02/2024',
        idTurma: 1,
    },
    {
        idAula: 1,
        data: '07/03/2024',
        idTurma: 1,
    },
    {
        idAula: 3,
        data: '10/01/2024',
        idTurma: 2,
    },
];

class AulaRepository {

        // Método para buscar aulas por ID de turma
    findByTurmaId(idTurma) {
        return new Promise((resolve) => {
            const aulasDaTurma = aulas.filter((aula) => aula.idTurma === idTurma);
            resolve(aulasDaTurma);
        });
    }
}

module.exports = new AulaRepository();