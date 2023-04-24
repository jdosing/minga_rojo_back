import { Router } from "express";
import read from '../controller/categories/read.js'
let router = Router();

router.get('/', read)

export default router;