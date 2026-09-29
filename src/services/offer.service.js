import { Company } from "../modules/company.module.js"
import { Offer } from "../modules/offer.module.js"
import { Offer_Technology } from "../modules/offer_technology.module.js"
import { Technology } from "../modules/technology.module.js"

export async function getAllOffersService() {
    try {
        const offer = new Offer()
        const result = await offer.with('technology')

        return result
    } catch (error) {
        return error
    }
}

export async function getOfferByIdService(id) {
    try {
        const iD = Number(id)
        const offer = new Offer()
        const result = await offer.with('technology', iD)

        return result
    } catch (error) {
        return error
    }
}

export async function createOfferService() {
    try {
        const technology = new Technology()
        const technologies = await technology.findAll()
        const compnay = new Company()
        const companies = await compnay.findAll()
        return { technologies, companies }
    } catch (error) {
        return error
    }
}


export async function storeOfferService(body) {
    const {
        title,
        city,
        contract_type,
        long_description,
        short_description,
        contact_email,
        application_link,
        publication_date,
        company_id,
        technology_ids
    } = body
    try {
        const offer = new Offer()
        const result = await offer.create({ title, city, contract_type, long_description, short_description, contact_email, application_link, publication_date, company_id })
        const offer_technology = new Offer_Technology()
        console.log(technology_ids)
        for (const id of technology_ids) {
            await offer_technology.create({
                offer_id: result.id,
                technology_id: id
            });
        }
        return result
    } catch (error) {
        return error
    }
}

export async function updateOfferService(id, body) {
    try {
        const iD = Number(id)
        const offer = new Offer()
        const result = await offer.update(iD, body)
        return result
    } catch (error) {
        return error
    }
}

export async function deleteOfferService(id) {
    try {
        const iD = Number(id)
        const offer = new Offer()
        const result = await offer.delete(iD)
        const offers = await offer.with('technology')
        return offers
    } catch (error) {
        return error
    }
}
