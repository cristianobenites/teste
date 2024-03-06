const { Router } = require("express");

// Importa o controlador de Oficina
const OficinaController = require("../controllers/OficinaController");

const router = Router();


// Define a rota para buscar uma oficina por ID
router.get("/oficinas/:id", OficinaController.getById);

module.exports = router;
