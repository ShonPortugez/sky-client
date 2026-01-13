import Box from "@mui/material/Box";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import {lighten} from "@mui/material";

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
            })} />
        </Box>
    );
};

export default SurveyIcon;