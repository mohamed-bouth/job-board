import { getAllOffersService } from "../services/offer.service.js";

export async function getAllOffers(req,res) {
    try {

        const result = await getAllOffersService()

        return res.status(200).json({
            success : true,
            data : result
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            error
        })
    }
}