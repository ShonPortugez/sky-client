import { Button, Card, Chip, Divider, Stack, Tooltip, Typography } from "@mui/material";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import IconButton from "@mui/material/IconButton";
import type { SurveyPreview } from "../../types/survey.types.ts";
import SurveyIcon from "./SurveyIcon.tsx";

interface SurveyCardProps {
    survey: SurveyPreview;
}

const SurveyActions = ({survey}: SurveyCardProps) => {

    const onCopyClick = async () => {
        const link: string = `${import.meta.env.VITE_WEBSITE_URL}/surveys/${survey.id}`;
        await navigator.clipboard.writeText(link)
    }

    return (
        <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
            <Tooltip title={'Copy survey link'}>
                <IconButton color={'secondary'} size={'small'} onClick={onCopyClick}>
                    <ContentCopyOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Button variant={'contained'} color={'secondary'}>
                Start Survey
            </Button>
        </Stack>
    )
}

const SurveyCard = ({ survey }: SurveyCardProps) => {
    return (
        <Card>
            <Stack direction="column" spacing={2}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction="row" spacing={2}>
                        <SurveyIcon />
                        <Stack direction="column">
                            <Typography>{survey.title}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {new Date(survey.createdAt).toLocaleDateString()}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Chip
                        label={survey.isActive ? 'Active' : 'Inactive'}
                        color={survey.isActive ? 'success' : 'warning'}
                        sx={{ padding: 1.5 }}
                    />
                </Stack>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction="row" spacing={1}>
                        <Typography>0 Responses</Typography>
                        <Divider orientation="vertical" flexItem sx={(theme) => ({
                            backgroundColor: theme.palette.divider
                        })} />
                        <Typography>0 Questions</Typography>
                    </Stack>
                    <SurveyActions survey={survey}/>
                </Stack>
            </Stack>
        </Card>
    );
};

export default SurveyCard;