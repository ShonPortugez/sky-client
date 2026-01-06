import { useState } from 'react';
import {Card, FormControlLabel, Stack, Switch, Tooltip} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextQuestion from "./questions/TextQuestion.tsx";
import SliderQuestion from "./questions/SliderQuestion.tsx";
import DateQuestion from "./questions/DateQuestion.tsx";
import MultipleChoiceQuestion from "./questions/MultipleChoiceQuestion.tsx";
import ImageQuestion from "./questions/ImageQuestion.tsx";
import RateQuestion from "./questions/RateQuestion.tsx";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckboxQuestion from "./questions/CheckboxQuestion.tsx";

const questions = [
    { label: 'Text', component: <TextQuestion /> },
    { label: 'Slider', component: <SliderQuestion /> },
    { label: 'Rate', component: <RateQuestion /> },
    { label: 'Multi answer', component: <MultipleChoiceQuestion /> },
    { label: 'Date', component: <DateQuestion /> },
    { label: 'Image', component: <ImageQuestion /> },
    { label: 'Checkbox', component: <CheckboxQuestion /> },
]

const QuestionGeneralActions = () => {
    return (
        <Stack direction="row" spacing={2}>
            <FormControlLabel control={<Switch />} label="Required" labelPlacement={'start'} />
            <Tooltip title={'Delete question'}>
                <IconButton
                    size="small"
                    sx={{
                        '&:hover': {
                            color: 'error.main',
                        },
                    }}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

const QuestionCard = () => {
    const [questionType, setQuestionType] = useState(questions[0].label);

    return (
        <Card>
            <Stack spacing={2} direction={'row'} sx={{ justifyContent: 'space-between' }}>
                <Select
                    label="Question"
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}>
                    {questions.map((item) => (
                        <MenuItem key={item.label} value={item.label}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
                <QuestionGeneralActions />
            </Stack>
            {questions.find(q => q.label === questionType)?.component}
        </Card>
    );
};

export default QuestionCard;