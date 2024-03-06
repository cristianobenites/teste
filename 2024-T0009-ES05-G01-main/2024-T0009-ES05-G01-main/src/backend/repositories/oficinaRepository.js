import oficinas from '../database/mock/oficinas.json' assert { type: "json" };


export default class OficinaRepository {
    async getAll() {
        return oficinas;
    }

    async getById(id) {
        return oficinas.find((oficina) => oficina.id === id);
    }

    async create(oficina) {
        const newOficina = {
            id: oficinas.length + 1,
            ...oficina,
        };

        oficinas.push(newOficina);

        return newOficina;
    }
    
    async update(id, oficina) {
        const index = oficinas.findIndex((of) => of.id === id);

        if (index === -1) {
            return null;
        }

        const updatedOficina = {
            ...oficinas[index],
            ...oficina,
        };

        oficinas[index] = updatedOficina;

        return updatedOficina;
    }

    async delete(id) {
        const index = oficinas.findIndex((of) => of.id === id);

        if (index === -1) {
            return null;
        }

        oficinas.splice(index, 1);

        return true;
    }
}