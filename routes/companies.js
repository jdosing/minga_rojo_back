import { Router } from "express";
import read from '../controller/companies/read.js'

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))

export default router;