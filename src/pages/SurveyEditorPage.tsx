import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSurveyById } from "../hooks/useSurvey.ts";
import QuestionList from "../components/editor/QuestionList.tsx";

const SurveyEditorPage = () => {
    const { id } = useParams<{ id: string }>();
    const { survey, isLoading, isError } = useSurveyById(id || '');

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
                <QuestionList />
            </Stack>
        </Box>
    );
};

export default SurveyEditorPage;