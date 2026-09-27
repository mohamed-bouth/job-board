import { z } from "zod";

export const companySchema = z.object({
    name : z.string().min(3).max(100)
})