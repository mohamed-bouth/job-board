import { Company } from "../modules/company.module.js"

export async function getAllCompaniesService() {
	try {
		const company = new Company()
		const result = await company.findAll()

		return result
	} catch (error) {
		return error
	}
}

export async function getCompanyByIdService(id) {
	try {
		const iD = Number(id)
		const company = new Company()
		const result = await company.findById(iD)

		return result
	} catch (error) {
		return error
	}
}

export async function storeCompanyService(body) {
	try {
		const company = new Company()
		const result = await company.create(body)

		return result
	} catch (error) {
		return error
	}
}

export async function updateCompanyService(id, body) {
	try {
		const iD = Number(id)
		const company = new Company()
		const result = await company.update(iD, body)

		return result
	} catch (error) {
		return error
	}
}

export async function deleteCompanyService(id) {
	try {
		const iD = Number(id)
		const company = new Company()
		const result = await company.delete(iD)

		return result
	} catch (error) {
		return error
	}
}
