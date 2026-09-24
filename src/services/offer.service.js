import { Offer } from "../modules/offer.module.js"

export async function getAllOffersService() {
    try {
        const offer = new Offer()
        const result = await offer.findAll()

        return result
    } catch (error) {
        return error
    }
}