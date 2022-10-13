import { Router } from "express";
import * as editoriales from "../controllers/editorial.controllers";
const router = Router();
router.get("/editorial", editoriales.geteditoriales);
router.get("/editorial/:id", editoriales.geteditorialesId);
export default router;
