import express from 'express'
import { getAllOffers } from '../controllers/offer.controller.js'

const router = express.Router()

router.get('/', getAllOffers)
// router.get('/:id')
// router.post('/')
// router.put('/:id')
// router.delete('/:id')

export default router