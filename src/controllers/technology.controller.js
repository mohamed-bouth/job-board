import {
	getAllTechnologiesService,
	getTechnologyByIdService,
	storeTechnologyService,
	updateTechnologyService,
	deleteTechnologyService
} from "../services/technology.service.js";

export async function getAllTechnologies(req, res) {
	try {
		const result = await getAllTechnologiesService()

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

export async function getTechnologyById(req, res) {
	try {
		const result = await getTechnologyByIdService(req.params.id)

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

export async function storeTechnology(req, res) {
	try {
		const result = await storeTechnologyService(req.body)

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

export async function updateTechnology(req, res) {
	try {
		const result = await updateTechnologyService(req.params.id, req.body)

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

export async function deleteTechnology(req, res) {
	try {
		const result = await deleteTechnologyService(req.params.id)

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
