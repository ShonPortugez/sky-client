import React, {type ReactNode} from 'react';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import LinearScaleOutlinedIcon from '@mui/icons-material/LinearScaleOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import type {QuestionType} from "../../../types/survey.types.ts";
import TextQuestion from "./TextQuestion.tsx";
import SliderQuestion from "./SliderQuestion.tsx";
import RateQuestion from "./RateQuestion.tsx";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.tsx";
import DateQuestion from "./DateQuestion.tsx";
import ImageQuestion from "./ImageQuestion.tsx";
import CheckboxQuestion from "./CheckboxQuestion.tsx";
import MenuItem from "@mui/material/MenuItem";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Select, {type SelectChangeEvent} from "@mui/material/Select";

export const questionTypes: { type: QuestionType; label: string; icon: ReactNode; component: React.ElementType }[] = [
    { type: 'Text', label: 'Text', component: TextQuestion, icon: <TextFieldsOutlinedIcon /> },
    { type: 'Slider', label: 'Slider', component: SliderQuestion, icon: <LinearScaleOutlinedIcon /> },
    { type: 'Rate', label: 'Rate', component: RateQuestion, icon: <StarOutlineOutlinedIcon /> },
    { type: 'Multi answer', label: 'Multi answer', component: MultipleChoiceQuestion, icon: <ListOutlinedIcon /> },
    { type: 'Date', label: 'Date', component: DateQuestion, icon: <DateRangeOutlinedIcon /> },
    { type: 'Image', label: 'Image', component: ImageQuestion, icon: <ImageOutlinedIcon /> },
    { type: 'Checkbox', label: 'Checkbox', component: CheckboxQuestion, icon: <CheckBoxOutlinedIcon /> },
];
interface QuestionSelectorProps {
    question: QuestionType;
    onChange: (question: QuestionType) => void;
}

const QuestionSelector = (props: QuestionSelectorProps) => {
    const handleChange = (e: SelectChangeEvent) => {
        props.onChange(e.target.value as QuestionType);
    };

    return (
        <Select
            label="Question"
            value={props.question}
            onChange={handleChange}
            size="small"
            sx={{ minWidth: 200 }}
        >
            {questionTypes.map((item) => (
                <MenuItem key={item.type} value={item.type}>
                    <Stack spacing={1} direction={'row'} sx={{ alignItems: 'center' }}>
                        <Box sx={{ color: 'primary.main', display: 'flex' }}>{item.icon}</Box>
                        <Box>{item.label}</Box>
                    </Stack>
                </MenuItem>
            ))}
        </Select>
    );
};

export default QuestionSelector;