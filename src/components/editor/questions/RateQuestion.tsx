import { Stack, TextField } from "@mui/material";
import type { Question } from "../../../types/survey.types.ts";
import QuestionHeader from "./QuestionHeader.tsx";

interface RateQuestionProps {
    question: Question;
    onUpdate: (id: string, updates: Partial<Question>) => void;
}

const RateQuestion = ({ question, onUpdate }: RateQuestionProps) => {
    return (
        <Stack spacing={2}>
            <QuestionHeader question={question} onUpdate={onUpdate} />

            <Stack direction="row" alignItems="center" spacing={2}>
                <TextField
                    label="Max Stars"
                    type="number"
                    variant="outlined"
                    sx={{ width: 150 }}
                    value={question.max || 5}
                    onChange={(e) => onUpdate(question.id, { max: Number(e.target.value) })}
                />
            </Stack>
        </Stack>
    );
};

export default RateQuestion;
