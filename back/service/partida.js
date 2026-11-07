import RepositoryJogo from '../repository/partida.js'

class ServiceJogo {

    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryJogo.Find()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const jogo = await RepositoryJogo.FindById(id)
        
        if(!jogo) {
            throw new Error(`ID ${id} da partida não encontrado`)
        }

        return jogo
    }
    // Função(parametros, parametros, parametros)
    async Criar(descricao, data, vencedor ) {
        if (!descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os dados")
        }

        const jogo = await RepositoryJogo.Create(descricao, data, vencedor)

        return jogo
    }

    async Alterar(id, descricao, data, vencedor) {
        if (!id) {
            throw new Error("Favor informar os dados");
        }

        const jogoAlterado = await RepositoryJogo.Update(id, descricao, data, vencedor)
        
        return jogoAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        
        const jogo = await RepositoryJogo.Delete(id)

        return jogo
    }

}

export default new ServiceJogo()