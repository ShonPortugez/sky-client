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