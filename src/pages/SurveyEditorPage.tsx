import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSurveyById } from "../hooks/useSurvey.ts";
import QuestionList from "../components/editor/QuestionList.tsx";
import { useState } from "react";
import type { Question } from "../types/survey.types.ts";

const SurveyEditorPage = () => {
    const { id } = useParams<{ id: string }>();
    const { survey, isLoading, isError } = useSurveyById(id || '');
    const [questions, setQuestions] = useState<Question[]>([]);

    const handleAddQuestion = (index: number) => {
        const newQuestion: Question = {
            id: crypto.randomUUID(),
            type: 'Text',
            isRequired: false,
        };
        const newQuestions = [...questions];
        newQuestions.splice(index, 0, newQuestion);
        setQuestions(newQuestions);
    };

    const handleDeleteQuestion = (id: string) => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    const handleUpdateQuestion = (id: string, updates: Partial<Question>) => {
        setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q));
    };

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError || !survey) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Typography color="error">Failed to load survey</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Stack spacing={2} sx={{
                width: '70%',
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
            }}>
                <Stack>
                    <Typography variant={'h5'}>{survey.title}</Typography>
                    <Typography variant={'body1'} color={'textSecondary'}>{survey.description}</Typography>
                </Stack>
                <QuestionList
                    questions={questions}
                    onAdd={handleAddQuestion}
                    onDelete={handleDeleteQuestion}
                    onUpdate={handleUpdateQuestion}
                />
            </Stack>
        </Box>
    );
};

export default SurveyEditorPage;