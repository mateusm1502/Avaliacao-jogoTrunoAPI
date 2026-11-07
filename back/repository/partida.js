import partida from '../model/partida.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryPartida {
    
    async Find() {
        const Partida = await partida.findAll()

        return partida
    }

    async FindById(id) {
        const PartidaDetalhes = await partida.findByPk(id)

        return partidaDetalhes
    }

    async Create(descricao, data, vencedor) {
        const partidaCreate = await partida.create({ descricao, data, vencedor })

        return partidaCreate
    }

    async Update(id, descricao, data, vencedor) {
        const partidaAlterar = await partida.findByPk(id)

        if(!partidaAlterar) {
            throw new Error("Partida não encontrada")
        }

        partidaAlterar.descricao = descricao || partidaAlterar.descricao
        partidaAlterar.data = data || partidaAlterar.data
        partidaAlterar.vencedor = vencedor || partidaAlterar.vencedor

        await partidaAlterar.save()
    }

    async Delete(id) {
        const partidaDeletar = await partida.findByPk(id)

        if(!partidaDeletar){
            throw new Error("Partida não encontrado")
        }

        await partidaDeletar.destroy()

        return partidaDeletar
    }
}

export default new RepositoryPartida()