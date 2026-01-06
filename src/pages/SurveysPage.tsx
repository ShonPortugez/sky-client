import Box from "@mui/material/Box";
import SurveyList from "../components/survey/SurveyList.tsx";
import {Stack, Typography} from "@mui/material";
import CreateSurveyDialogForm from "../components/survey/create/CreateSurveyDialogForm.tsx";



const SurveysPage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <Stack spacing={2} sx={{
                width: '70%',
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
            }}>
                <Stack direction={'row'} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <Stack>
                        <Typography variant={'h5'}>Recent Surveys</Typography>
                        <Typography variant={'subtitle1'} color={'textDisabled'}>View the surveys you can answer all in one place!</Typography>
                    </Stack>
                    <CreateSurveyDialogForm />
                </Stack>
                <SurveyList />
            </Stack>
        </Box>
    );
};

export default SurveysPage;