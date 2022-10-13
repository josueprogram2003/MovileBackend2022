import { Router } from "express";
import * as bibliotecas from "../controllers/libro.controllers";
const router = Router();
router.get("/listar", bibliotecas.getBibliotecas);
router.get("/listar/:id", bibliotecas.getBibliotecasId);
export default router;
