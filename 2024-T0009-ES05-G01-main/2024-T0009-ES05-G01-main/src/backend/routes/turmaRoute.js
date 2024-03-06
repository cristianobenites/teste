import { Router } from 'express';
import TurmaController from '../controllers/turmaController.js';
import { validaPermissoes } from '../middlewares/permissaoMiddleware.js';

const router = Router();

router
    .get('/turmas', validaPermissoes(['*']), TurmaController.getAll)
    .get('/turmas/:id', validaPermissoes(['*']), TurmaController.getById)
    .post('/turmas', validaPermissoes(['lider', 'prof']), TurmaController.create)
    .put('/turmas/:id', validaPermissoes(['lider', 'prof']), TurmaController.update)
    .post('/turmas/delete/:id', validaPermissoes(['lider']), TurmaController.delete)
    .get('/turmas/:id/presencas', validaPermissoes(['prof']), TurmaController.getPresencas);


export default router;
