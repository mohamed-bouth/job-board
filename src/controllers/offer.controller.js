import { getAllOffersService, getOfferByIdService, storeOfferService, updateOfferService, deleteOfferService } from "../services/offer.service.js";

export async function getAllOffers(req, res) {
    try {

        const result = await getAllOffersService()

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

export async function getOfferById(req, res) {
    try {

        const result = await getOfferByIdService(req.params.id)

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

export async function storeOffer(req, res) {
    try {
        console.log(req.body)
        const result = await storeOfferService(req.body)

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

export async function updateOffer(req, res) {
    try {

        const result = await updateOfferService(req.params.id, req.body)

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

export async function deleteOffer(req, res) {
    try {

        const result = await deleteOfferService(req.params.id)

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