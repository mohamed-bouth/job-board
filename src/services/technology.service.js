import { Technology } from "../modules/technology.module.js"

export async function getAllTechnologiesService() {
	try {
		const technology = new Technology()
		const result = await technology.findAll()

		return result
	} catch (error) {
		return error
	}
}

export async function getTechnologyByIdService(id) {
	try {
		const iD = Number(id)
		const technology = new Technology()
		const result = await technology.findById(iD)

		return result
	} catch (error) {
		return error
	}
}

export async function storeTechnologyService(body) {
	try {
		const technology = new Technology()
		const result = await technology.create(body)

		return result
	} catch (error) {
		return error
	}
}

export async function updateTechnologyService(id, body) {
	try {
		const iD = Number(id)
		const technology = new Technology()
		const result = await technology.update(iD, body)

		return result
	} catch (error) {
		return error
	}
}

export async function deleteTechnologyService(id) {
	try {
		const iD = Number(id)
		const technology = new Technology()
		const result = await technology.delete(iD)

		return result
	} catch (error) {
		return error
	}
}
