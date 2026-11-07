import express from "express"
import ControllerPartida from "../controller/partida.js"
const router = express.Router()

router.get("/buscar", ControllerPartida.Buscar)
router.get("/detalhe/:id", ControllerPartida.Detalhe)
router.post("/criar", ControllerPartida.Criar)
router.put("/alterar/:id", ControllerPartida.Alterar)
router.delete("/deletar/:id", ControllerPartida.Deletar)

export default router