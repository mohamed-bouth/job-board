import express from 'express'
import { getAllCompanies, getCompanyById, storeCompany, updateCompany,deleteCompany } from '../controllers/company.controller.js'

const router = express.Router()

router.get('/', getAllCompanies)
router.get('/:id', getCompanyById)
router.post('/', storeCompany)
router.put('/:id', updateCompany)
router.delete('/:id', deleteCompany)

export default router