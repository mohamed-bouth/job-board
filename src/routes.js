import express from 'express'
import companiesRoutes  from './routes/company.route.js'
import offersRoutes from './routes/offer.route.js'
import technologiesRoutes from './routes/technology.route.js'

const router = express.Router()

router.use('/companies' , companiesRoutes)
router.use('/offers' , offersRoutes)
router.use('/technologies' , technologiesRoutes)

export default router