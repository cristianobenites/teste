import lideres from '../database/mock/lideres.json' assert { type: "json" };


export default class LiderRepository {
    async getAll() {
        return lideres;
    }

    async getById(id) { 
        return lideres.find((lider) => lider.id === id);
    }

    async create(lider) {
        const newLider = {
            id: lideres.length + 1,
            ...lider,
        };

        lideres.push(newLider);

        return newLider;
    }

    async update (id, lider) {
        const liderIndex = lideres.findIndex((lider) => lider.id === id);

        if (liderIndex === -1) {
            return null;
        }

        const updatedLider = {
            ...lideres[liderIndex],
            ...lider,
        };

        lideres[liderIndex] = updatedLider;

        return updatedLider;
    }

    async delete(id) {
        const liderIndex = lideres.findIndex((lider) => lider.id === id);

        if (liderIndex === -1) {
            return null;
        }

        const deletedLider = lideres[liderIndex];

        lideres.splice(liderIndex, 1);

        return deletedLider;
    }

}