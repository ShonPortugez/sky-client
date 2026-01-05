import Box from "@mui/material/Box";
import SurveyList from "../components/survey/SurveyList.tsx";
import {Stack, Typography} from "@mui/material";

const HomePage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <Stack spacing={2} sx={{
                width: '70%',
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
            }}>
                <Stack>
                    <Typography variant={'h5'}>Recent Forms</Typography>
                    <Typography variant={'subtitle1'} color={'textDisabled'}>View the surveys you can answer all in one place!</Typography>
                </Stack>
                <SurveyList />
            </Stack>
        </Box>
    );
};

export default HomePage;