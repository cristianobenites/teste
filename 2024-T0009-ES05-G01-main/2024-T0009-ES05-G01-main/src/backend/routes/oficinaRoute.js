import { Router } from 'express';
import oficinaController from '../controllers/oficinaController.js';
import { validaPermissoes } from '../middlewares/permissaoMiddleware.js';

const router = Router();

router
    .get('/oficinas', validaPermissoes(['*']), oficinaController.getAll)
    .get('/oficinas/:id', validaPermissoes(['*']), oficinaController.getById)
    .post('/oficinas', validaPermissoes(['lider', 'prof']), oficinaController.create)
    .put('/oficinas/:id', validaPermissoes(['lider', 'prof']), oficinaController.update)
    .post('/oficinas/delete/:id', validaPermissoes(['lider']), oficinaController.delete);


export default router;