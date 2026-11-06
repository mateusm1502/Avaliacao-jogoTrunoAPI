import jogo from '../model/jogo.js';
import jogo from '../model/jogo.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryJogo {
    
    async Find() {
        const jogo = await jogo.findAll()

        return jogo
    }

    async FindById(id) {
        const jogoDetalhes = await jogo.findByPk(id)

        return jogoDetalhes
    }

    async Create(descricao, data, vencedor) {
        const jogoCreate = await jogo.create({ descricao, data, vencedor })

        return jogoCreate
    }

    async Update(id, descricao, data, vencedor) {
        const jogoAlterar = await jogo.findByPk(id)

        if(!jogoAlterar) {
            throw new Error("Partida não encontrada")
        }

        jogoAlterar.descricao = descricao || jogoAlterar.descricao
        jogoAlterar.data = data || jogoAlterar.data
        jogoAlterar.vencedor = vencedor || jogoAlterar.vencedor

        await jogoAlterar.save()
    }

    async Delete(id) {
        const jogoDeletar = await jogo.findByPk(id)

        if(!jogoDeletar){
            throw new Error("Partida não encontrado")
        }

        await jogoDeletar.destroy()

        return jogoDeletar
    }
}

export default new RepositoryJogo()