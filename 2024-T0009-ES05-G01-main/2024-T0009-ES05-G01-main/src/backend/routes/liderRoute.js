import { Router } from 'express';
import liderController from '../controllers/liderController.js';

const router = Router();

router
    .get('/lideres', liderController.getAll)
    .get('/lideres/:id', liderController.getById)
    .post('/lideres', liderController.create)
    .put('/lideres/:id', liderController.update)
    .post('/lideres/delete/:id', liderController.delete);

export default router;