import { z } from "zod";

export const storeOfferSchema = z.object({
    title: z.string().min(10),
    city: z.string(),
    contract_type: z.enum(['internship', 'apprenticeship']),
    long_description: z.string(),
    short_description: z.string(),
    contact_email: z.email().optional(),
    application_link: z.string().optional(),
    publication_date: z.coerce.date(),
    company_id: z.number().int().positive()
})

export const updateOfferSchema = z.object({
    title: z.string().min(10).optional(),
    city: z.string().optional(),
    contract_type: z.enum(['internship', 'apprenticeship']).optional(),
    long_description: z.string().optional(),
    short_description: z.string().optional(),
    contact_email: z.email().optional(),
    application_link: z.string().optional(),
    publication_date: z.coerce.date().optional(),
    company_id: z.number().int().positive().optional()
})
