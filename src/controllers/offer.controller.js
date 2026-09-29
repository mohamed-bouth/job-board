import { getAllOffersService, getOfferByIdService, createOfferService, storeOfferService, updateOfferService, deleteOfferService } from "../services/offer.service.js";
import { storeOfferSchema, updateOfferSchema } from "../validations/offer.validation.js"
import { response, errorResponse } from "../utils/response.js";
import { getAllTechnologiesService } from "../services/technology.service.js";

export async function getAllOffers(req, res) {
    try {

        const result = await getAllOffersService()

        response(req, res, { offers: result }, "offers/index")

    } catch (error) {
        errorResponse(req, res , error, 500)
    }
}

export async function getOfferById(req, res) {
    try {

        const offers = await getOfferByIdService(req.params.id)
        const technologies = await getAllTechnologiesService()

        const offer = offers[0]

        response(req, res, { offer, technologies }, "offers/edit")

    } catch (error) {
        errorResponse(req, res , error, 500)
    }
}

export async function createOffer(req, res) {
    try {
        const { technologies, companies } = await createOfferService()

        response(req, res, { technologies, companies }, "offers/create")
    } catch (error) {
        errorResponse(req, res, error, 500)
    }
}

export async function storeOffer(req, res) {

    const valide = storeOfferSchema.safeParse(req.body)
    console.log(valide)

    if (!valide.success) {
        return res.status(400).json({
            success: false,
            error: valide.error.issues
        })
    }
    try {

        await storeOfferService(req.body)
        const result = await getAllOffersService()

        response(req, res, { offers: result }, "offers/index")

        

    } catch (error) {
        errorResponse(req, res , error, 500)
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

        const offers = await deleteOfferService(req.params.id)

        response(req, res, { offers }, "offers/index")

    } catch (error) {
        errorResponse(req, res , error, 500)
    }
}