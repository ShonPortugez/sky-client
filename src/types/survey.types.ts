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

export type QuestionType = 'Text' | 'Date' | 'Multi answer' | 'Slider' | 'Rate' | 'Image' | 'Checkbox';

export interface Question {
    id: string;
    type: QuestionType;
    isRequired: boolean;
    min?: number;
    max?: number;
    text?: string;
    description?: string;
    options?: string[];
}