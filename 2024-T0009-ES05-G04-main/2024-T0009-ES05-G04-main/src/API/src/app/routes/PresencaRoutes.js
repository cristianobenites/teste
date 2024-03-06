const { Router } = require('express');
const PresencaController = require('../controllers/PresencaController');

const router = Router();


router.get('/presencas/aula/:idAula', PresencaController.getPresencasByAulaId); // Rota para buscar presenças por ID da aula

router.post('/presencas/registrar', PresencaController.registrarPresenca); // Rota para registrar presença

module.exports = router;
