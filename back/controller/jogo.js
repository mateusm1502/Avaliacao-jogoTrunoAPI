import ServiceJogo from '../service/jogo.js'

class ControllerJogo {
    // Recebimento e a Saida das info
    async Buscar(_, res) {
        try {
            const jogo = await ServiceJogo.Buscar()
            res.status(200).send({ mensagem: jogo })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const jogo = await ServiceJogo.Detalhe(id)

            res.status(200).send({ mensagem: jogo })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await ServiceJogo.Criar(descricao, data, vencedor)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { descricao, data, vencedor } = req.body
            const id = req.params.id

            await ServiceJogo.Alterar(id, descricao, data, vencedor)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceJogo.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerJogo()