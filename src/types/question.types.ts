export const QuestionType = {
    SLIDER: 0,
    RATE: 1,
    TEXT: 2,
    MULTI: 3,
    DATE: 4,
    CHECKBOX: 5,
} as const;

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];

export interface BaseQuestionSpec {
    id: string;
    type: QuestionType;
    isRequired: boolean;
    label: string;
    description?: string;
}