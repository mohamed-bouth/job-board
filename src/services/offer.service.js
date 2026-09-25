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


export async function storeOfferService(body) {
    try {
        const offer = new Offer()
        const result = await offer.create(body)
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
        return result
    } catch (error) {
        return error
    }
}
