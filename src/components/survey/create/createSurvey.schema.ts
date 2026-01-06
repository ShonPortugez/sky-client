import {z} from "zod";

export const createSurveySchema = z.object({
    title: z.string().min(2, { message: 'Title must be more than 2 characters'}),
    description: z.string().min(2, { message: 'Description must be more than 2 characters'}),
})

export type CreateSurveySchema = z.infer<typeof createSurveySchema>