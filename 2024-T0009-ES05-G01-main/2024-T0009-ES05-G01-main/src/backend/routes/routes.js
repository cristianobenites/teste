import bodyParser from 'body-parser';
import oficinaRoute from './oficinaRoute.js';
import liderRoute from './liderRoute.js';
import ongRoute from './ongRoute.js';
import professorRoute from './professorRoute.js'
import autenticacaoRoute from './autenticacaoRoute.js';
import auth from '../middlewares/autenticacaoMiddleware.js';
import turmaRouter from './turmaRoute.js';
import beneficiadoRouter from './beneficiadoRoute.js';

/**
 * Função responsável por carregar todas as rotas da aplicação
 * @date 20/02/2024 - 14:45:39
 *
 * @export routes
 * @param {Express} app
 * @returns {void}
 */
export default function (app) {
    app.use(bodyParser.json());
    app.get('/', function (req, res) {
        res.status(200).json({ message: 'Back-end A.S.A.S em execução...' });
    });
    app.use(autenticacaoRoute);
    app.use(auth);
    app.use(oficinaRoute);
    app.use(ongRoute);
    app.use(liderRoute);
    app.use(professorRoute);
    app.use(turmaRouter);
    app.use(beneficiadoRouter);
};