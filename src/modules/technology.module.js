import { Base } from "../repositories/base.repository";

export class technology extends Base {
    constructor(){
        super("technology",
            [
                'name'
            ]
        )
    }
}