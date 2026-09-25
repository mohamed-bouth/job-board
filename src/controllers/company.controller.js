import {
	getAllCompaniesService,
	getCompanyByIdService,
	storeCompanyService,
	updateCompanyService,
	deleteCompanyService
} from "../services/company.service.js";

export async function getAllCompanies(req, res) {
	try {
		const result = await getAllCompaniesService()

		return res.status(200).json({
			success: true,
			data: result
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			error
		})
	}
}

export async function getCompanyById(req, res) {
	try {
		const result = await getCompanyByIdService(req.params.id)

		return res.status(200).json({
			success: true,
			data: result
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			error
		})
	}
}

export async function storeCompany(req, res) {
	try {
		const result = await storeCompanyService(req.body)

		return res.status(201).json({
			success: true,
			data: result
		})
	} catch (error) {
		return res.status(400).json({
			success: false,
			error
		})
	}
}

export async function updateCompany(req, res) {
	try {
		const result = await updateCompanyService(req.params.id, req.body)

		return res.status(204).json({
			success: true,
			data: result
		})
	} catch (error) {
		return res.status(400).json({
			success: false,
			error
		})
	}
}

export async function deleteCompany(req, res) {
	try {
		const result = await deleteCompanyService(req.params.id)

		return res.status(204).json({
			success: true,
			data: result
		})
	} catch (error) {
		return res.status(400).json({
			success: false,
			error
		})
	}
}
