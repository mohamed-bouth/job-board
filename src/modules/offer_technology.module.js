import { Base } from "../repositories/base.repository.js";

export class Offer_Technology extends Base {
    constructor(){
        super("offer_technology",
            [
                'offer_id',
                'technology_id'
            ]
        )
    }
}