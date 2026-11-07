import express from 'express'
import database from './config/database.js'
import routerPartida from './router/partida.js'

const app = express()
app.use(express.json())

app.use('/api/v1/partida', routerPartida)

database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor rodando na 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })