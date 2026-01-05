import {Button, Card, Chip, Divider, lighten, Stack, Tooltip, Typography} from "@mui/material";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Box from "@mui/material/Box";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import IconButton from "@mui/material/IconButton";

const SurveyIcon = () => {
    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                backgroundColor: lighten(theme.palette.primary.light, 0.7),
                borderRadius: 1,
                alignItems: 'center',
            })}>
            <AssignmentOutlinedIcon sx={(theme) => ({
                color: lighten(theme.palette.primary.main, 0.1),
                margin: theme.spacing(1),
            })}/>
        </Box>
    );
};

const SurveyActions = () => {
    return (
        <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center'}}>
            <Tooltip title={'Copy survey link'}>
                <IconButton color={'secondary'} size={'small'}>
                    <ContentCopyOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Button variant={'contained'} color={'secondary'}>
                Start Survey
            </Button>
        </Stack>
    )
}

const SurveyCard = () => {
    return (
        <Card>
            <Stack direction="column" spacing={2}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
                    <Stack direction="row" spacing={2}>
                        <SurveyIcon />
                        <Stack direction="column">
                            <Typography>Title</Typography>
                            <Typography>Created Date</Typography>
                        </Stack>
                    </Stack>
                    <Chip label={'Active'} color={'success'} sx={{padding: 1.5}}/>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
                    <Stack direction="row" spacing={1}>
                        <Typography>0 Responses</Typography>
                        <Divider orientation="vertical" flexItem sx={(theme) => ({
                            backgroundColor: theme.palette.divider
                        })}/>
                        <Typography>0 Questions</Typography>
                    </Stack>
                    <SurveyActions />
                </Stack>
            </Stack>
        </Card>
    );
};

export default SurveyCard;