import { Router } from 'express';
import autenticacaoController from '../controllers/autenticacaoController.js';

const router = Router();

router
    .post('/login', autenticacaoController.login)
    .post('/refresh-token', autenticacaoController.refreshToken)
    .post('/logout', autenticacaoController.logout);


export default router;