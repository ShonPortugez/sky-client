import SurveyCard from "./SurveyCard.tsx";
import { useSurvey } from "../../hooks/useSurvey.ts";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const SurveyDataStatus = ({ children }: { children: React.ReactNode }) => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          {children}
      </Box>
    );
}

const SurveyList = () => {
    const { surveys, isLoading, isError } = useSurvey();

    if (isLoading) return <SurveyDataStatus children={<CircularProgress />} />;
    if (isError) return <SurveyDataStatus children={<Typography color="error">Failed to load surveys</Typography>} />;
    if (!surveys.length) return <SurveyDataStatus children={<Typography color="text.secondary">No surveys found</Typography>} />;

    return (
        <Stack spacing={2}>
            {surveys.map((survey) => (
                <SurveyCard key={survey.id} survey={survey} />
            ))}
        </Stack>
    );
};

export default SurveyList;