import usuarios from '../database/mock/usuarios.json' assert { type: "json" };


export default class UsuarioRepository {
    async create(usuario) {
        const newUsuario = {
            id: usuarios.length + 1,
            ...usuario,
        };

        usuarios.push(newUsuario);

        return newUsuario;
    }
}