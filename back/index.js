import express from 'express'
import database from './config/database.js'
import routerJogo from './router/jogo.js'

const app = express()
app.use(express.json())

app.use('/api/v1/jogo', routerJogo)

database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor rodando na 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })