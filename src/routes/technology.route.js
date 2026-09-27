import express from 'express'
import { getAllTechnologies, getTechnologyById, storeTechnology, updateTechnology, deleteTechnology } from '../controllers/technology.controller.js'

const router = express.Router()

router.get('/', getAllTechnologies)
router.get('/:id', getTechnologyById)
router.post('/', storeTechnology)
router.put('/:id', updateTechnology)
router.delete('/:id', deleteTechnology)

export default router