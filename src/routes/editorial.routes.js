import { Router } from "express";
import * as editoriales from "../controllers/editorial.controllers";
const router = Router();
router.get("/listar", editoriales.geteditoriales);
router.get("/listar/:id", editoriales.geteditorialesId);
export default router;
