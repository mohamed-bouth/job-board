import express from 'express'
import { getAllOffers , getOfferById , storeOffer , updateOffer , deleteOffer} from '../controllers/offer.controller.js'

const router = express.Router()

router.get('/', getAllOffers)
router.get('/:id', getOfferById)
router.post('/', storeOffer )
router.put('/:id', updateOffer)
router.delete('/:id', deleteOffer)

export default router