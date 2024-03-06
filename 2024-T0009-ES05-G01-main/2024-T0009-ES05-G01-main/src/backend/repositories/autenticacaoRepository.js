import usuarios from '../database/mock/usuarios.json' assert { type: "json" };
import pkg from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { sign } = pkg;


export default class AutenticacaoRepository {
    constructor() {
        this.secret = process.env.SECRET;
        this.secret_refresh = process.env.SECRET_REFRESH;
        this.accessTokenExpiration = process.env.ACCESS_TOKEN_EXPIRATION;
        this.refreshTokenExpiration = process.env.REFRESH_TOKEN_EXPIRATION;
    }

    async buscarPorEmail(email) {
        return usuarios.find(usuario => usuario.email === email);
    }

    async gerarToken(usuario) {
        const accessToken = sign({ usuario: { id: usuario.id, email: usuario.email, nome: usuario.nome, perfil: usuario.perfil, ong: usuario.ong } }, this.secret, { expiresIn: this.accessTokenExpiration });
        return accessToken;
    }

    async gerarRefreshToken(usuario) {
        const refreshToken = sign({ usuario: { id: usuario.id, email: usuario.email } }, this.secret_refresh, { expiresIn: this.refreshTokenExpiration });
        return refreshToken;
    }

}