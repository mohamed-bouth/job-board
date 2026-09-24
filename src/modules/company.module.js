import { Base } from "../repositories/base.repository.js";

export class Company extends Base {
    constructor(){
        super("company",
            [
                'name'
            ]
        )
    }
}