import { useQuery } from "@tanstack/react-query";
import { apiRequests } from "../lib/api.ts";
import type { SurveyPreview } from "../types/survey.types.ts";

const surveyQueryKey = "SURVEYS";

export const useSurvey = () => {
    const { data, isLoading, isError, refetch } = useQuery<SurveyPreview[]>({
        queryKey: [surveyQueryKey],
        queryFn: apiRequests.surveys.getSurveys,
    });

    return {
        surveys: data ?? [],
        isLoading,
        isError,
        refetch
    };
};

export const useSurveyById = (id: string) => {
    const { data, isLoading, isError } = useQuery<SurveyPreview>({
        queryKey: [surveyQueryKey, id],
        queryFn: () => apiRequests.surveys.getSurvey(id),
        enabled: !!id,
    });

    return {
        survey: data,
        isLoading,
        isError,
    };
};