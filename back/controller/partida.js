import ServicePartida from '../service/partida.js';

class ControllerPartida {
    // Recebimento e a Saida das info
    async Buscar(_, res) {
        try {
            const partida = await ServicePartida.Buscar()
            res.status(200).send({ mensagem: partida })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const partida = await ServicePartida.Detalhe(id)

            res.status(200).send({ mensagem: partida })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await ServicePartida.Criar(descricao, data, vencedor)
            
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

            await ServicePartida.Alterar(id, descricao, data, vencedor)
            
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

            await ServicePartida.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerPartida()