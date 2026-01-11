import type { BaseQuestionSpec } from "./question.types.ts";

export interface SurveyPreview {
    id: string;
    title: string;
    description: string;
    userId: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreateSurveyData {
    title: string;
    description: string;
    isActive: boolean
}

export interface Survey extends SurveyPreview {
    questions?: BaseQuestionSpec[];
}