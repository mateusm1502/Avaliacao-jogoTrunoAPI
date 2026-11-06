import express from "express"
import ControllerJogo from "../controller/jogo.js"
const router = express.Router()

router.get("/buscar", ControllerJogo.Buscar)
router.get("/detalhe/:id", ControllerJogo.Detalhe)
router.post("/criar", ControllerJogo.Criar)
router.put("/alterar/:id", ControllerJogo.Alterar)
router.delete("/deletar/:id", ControllerJogo.Deletar)

export default router