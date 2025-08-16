import express from "express";
import { saveAsFileContent, saveFileContent } from "../controllers/file.controller.js";


const router = express.Router();


router.post("/save", saveFileContent);
router.post("/save-as", saveAsFileContent);

export default router;