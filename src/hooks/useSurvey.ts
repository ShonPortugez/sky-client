import {useQuery} from "@tanstack/react-query";
import {apiRequests} from "../lib/api.ts";
import type {SurveyPreview} from "../types/survey.types.ts";

const SURVEY_QUERY_KEY = "surveys";

export const useSurvey = () => {
    const { data, isLoading, isError } = useQuery<SurveyPreview[]>({
        queryKey: [SURVEY_QUERY_KEY],
        queryFn: apiRequests.surveys.getSurveys,
    });

    return {
        surveys: data ?? [],
        isLoading,
        isError,
    };
};