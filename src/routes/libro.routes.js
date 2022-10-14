import { Router } from "express";
import * as bibliotecas from "../controllers/libro.controllers";
const router = Router();
router.get("/listar", bibliotecas.readAllLibro);
router.get("/listar/:id", bibliotecas.getLibroId);
router.delete("/delete", bibliotecas.deleteLibro);
router.post("/create", bibliotecas.agregarLibro);
router.put("/update", bibliotecas.editarLibro);

export default router;
