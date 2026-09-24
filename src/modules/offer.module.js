import { Base } from "../repositories/base.repository.js"

export class Offer extends Base{
    constructor(){
        super('offer',
            [
                'title',
                'city',
                'contract_type',
                'long_description',
                'short_description',
                'contact_email',
                'application_link',
                'publication_date',
                'company_id'
            ]
        )
    }
}