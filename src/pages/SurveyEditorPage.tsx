import Box from "@mui/material/Box";
import {Stack, Typography} from "@mui/material";

const SurveyEditorPage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <Stack spacing={2} sx={{
                width: '70%',
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
            }}>
                <Stack>
                    <Typography variant={'h5'}>Create a new survey</Typography>
                    <Typography variant={'body1'} color={'textSecondary'}>Enter the details of your survey and you can start adding questions next!</Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default SurveyEditorPage;