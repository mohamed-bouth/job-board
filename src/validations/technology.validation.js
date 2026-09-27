import { z } from "zod"

export const technologySchema = z.object({
    name : z.string().min('1')
})