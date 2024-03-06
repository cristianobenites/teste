import { Router } from 'express';
import professorController from '../controllers/professorController.js';
import { validaPermissoes } from '../middlewares/permissaoMiddleware.js';

const router = Router()

router
    .get('/professores',validaPermissoes(['lider', 'admin']) ,professorController.getAll)
    .get('/professores/ongs/:id', validaPermissoes(['lider', 'admin']) , professorController.getAllByOng)
    .get('/professores/:id',validaPermissoes(['lider', 'admin']) , professorController.getById)
    .post('/professores',validaPermissoes(['lider']) , professorController.create)
    .put('/professores/:id',validaPermissoes(['lider']) , professorController.update)
    .post('/professores/delete/:id',validaPermissoes(['lider']) , professorController.delete)
    .post('/professores/marcar-presenca',validaPermissoes(['prof']) , professorController.marcarPresenca)
    .post('/professores/desmarcar-presenca/:id',validaPermissoes(['prof']) , professorController.desmarcarPresenca);

export default router;
