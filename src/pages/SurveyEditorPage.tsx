import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSurveyById } from "../hooks/useSurvey.ts";
import EditorWizard from "../components/editor/EditorWizard.tsx";

const SurveyEditorPage = () => {
    const { id } = useParams<{ id: string }>();
    const { survey, isLoading, isError } = useSurveyById(id || '');

    if (isLoading) return <CircularProgress />
    if (isError || !survey) return <Typography color="error">Failed to load survey</Typography>

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Stack spacing={2} sx={{
                width: '70%',
                position: 'relative',
                overflow: 'hidden',
                padding: '2',
            }}>
                <Stack>
                    <Typography variant={'h5'}>{survey.title}</Typography>
                    <Typography variant={'body1'} color={'textSecondary'}>{survey.description}</Typography>
                </Stack>
                <EditorWizard survey={survey} />
            </Stack>
        </Box>
    );
};

export default SurveyEditorPage;