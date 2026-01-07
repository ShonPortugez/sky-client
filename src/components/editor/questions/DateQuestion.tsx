import { Stack } from "@mui/material";
import type { Question } from "../../../types/survey.types.ts";
import QuestionHeader from "./QuestionHeader.tsx";

interface DateQuestionProps {
    question: Question;
    onUpdate: (id: string, updates: Partial<Question>) => void;
}

const DateQuestion = ({ question, onUpdate }: DateQuestionProps) => {
    return (
        <Stack spacing={2}>
            <QuestionHeader question={question} onUpdate={onUpdate} />
        </Stack>
    );
};

export default DateQuestion;
