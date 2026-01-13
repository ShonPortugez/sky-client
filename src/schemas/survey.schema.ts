import { z } from 'zod';
import { QuestionType } from "../types/question.types.ts";

const BaseQuestionSchema = z.object({
    id: z.string(),
    text: z.string().min(1, "Question text is required"),
    description: z.string().optional(),
    isRequired: z.boolean(),
});

const TextQuestionSchema = BaseQuestionSchema.extend({
    type: z.literal(QuestionType.TEXT),
});

const MultiAnswerQuestionSchema = BaseQuestionSchema.extend({
    type: z.literal(QuestionType.MULTI),
    options: z.array(z.string()).optional(),
});

const DateQuestionSchema = BaseQuestionSchema.extend({
    type: z.literal(QuestionType.DATE),
});

const RateQuestionSchema = BaseQuestionSchema.extend({
    type: z.literal(QuestionType.RATE),
    max: z.number().min(1).max(10).optional(),
});

const SliderQuestionSchema = BaseQuestionSchema.extend({
    type: z.literal(QuestionType.SLIDER),
    min: z.number().optional(),
    max: z.number().optional(),
    step: z.number().optional(),
});

const CheckboxQuestionSchema = BaseQuestionSchema.extend({
    type: z.literal(QuestionType.CHECKBOX),
});

export const QuestionSchema = z.discriminatedUnion('type', [
    TextQuestionSchema,
    MultiAnswerQuestionSchema,
    DateQuestionSchema,
    RateQuestionSchema,
    SliderQuestionSchema,
    CheckboxQuestionSchema,
]);

export const createSurveySchema = z.object({
    title: z.string().min(2, { message: 'Title must be more than 2 characters' }),
    description: z.string().optional(),
})

export type CreateSurveySchema = z.infer<typeof createSurveySchema>

