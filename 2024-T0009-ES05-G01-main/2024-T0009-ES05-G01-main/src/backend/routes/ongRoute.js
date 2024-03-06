import { Router } from 'express'
import ongController from '../controllers/ongController.js';
import { validaPermissoes } from '../middlewares/permissaoMiddleware.js';

const router = Router()

router
  .get('/ongs', validaPermissoes(['admin', 'lider']), ongController.getAll)
  .get('/ongs/:id', validaPermissoes(['admin', 'lider']), ongController.getById)
  .post('/ongs', validaPermissoes(['admin']), ongController.create)
  .put('/ongs/:id', validaPermissoes(['admin']), ongController.update)
  .post('/ongs/delete/:id', validaPermissoes(['admin']), ongController.delete)

export default router;