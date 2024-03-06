import pkg from 'jsonwebtoken';   
import dotenv from 'dotenv';

const { verify } = pkg;
dotenv.config();


export default (req, res, next) => {
  let accessToken = req.headers['authorization'];
  let refreshToken = req.cookies.refreshToken;

  // remove o Bearer do token
  accessToken = accessToken && accessToken.split(' ')[1];

  if (!accessToken || !refreshToken) {
    return res.status(401).send({ message: 'Acesso negado. Usuário não autenticado.' });
  }

  try {
    // verifica se o accessToken é válido
    const decoded = verify(accessToken, process.env.SECRET);
    // armazena o id do usuário no req
    req.usuario = decoded.usuario;
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Acesso negado. Token inválido.' });
  }
};