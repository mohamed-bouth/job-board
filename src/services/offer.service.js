import { Offer } from "../modules/offer.module.js"

export async function getAllOffersService() {
    try {
        const offer = new Offer()
        const result = await offer.with('technology')

        return result
    } catch (error) {
        return error
    }
}