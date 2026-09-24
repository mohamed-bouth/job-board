import { Base } from "../repositories/base.repository.js";

export class Technology extends Base {
    constructor(){
        super("technology",
            [
                'name'
            ]
        )
    }
}