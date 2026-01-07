import { Stack, TextField } from "@mui/material";
import type { Question } from "../../../types/survey.types.ts";
import QuestionHeader from "./QuestionHeader.tsx";

interface SliderQuestionProps {
    question: Question;
    onUpdate: (id: string, updates: Partial<Question>) => void;
}

const SliderQuestion = ({ question, onUpdate }: SliderQuestionProps) => {
    return (
        <Stack spacing={2}>
            <QuestionHeader question={question} onUpdate={onUpdate} />

            <Stack direction={'row'} spacing={2}>
                <TextField
                    label="Min Value"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={question.min ?? 0}
                    onChange={(e) => onUpdate(question.id, { min: Number(e.target.value) })}
                />
                <TextField
                    label="Max Value"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={question.max ?? 10}
                    onChange={(e) => onUpdate(question.id, { max: Number(e.target.value) })}
                />
            </Stack>
        </Stack>
    );
};

export default SliderQuestion;