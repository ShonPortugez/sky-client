import { Stack } from "@mui/material";
import BaseQuestion from "./BaseQuestion.tsx";

interface DateQuestionProps {
    questionIdPrefix: string;
}

const DateQuestion = ({ questionIdPrefix }: DateQuestionProps) => {
    return (
        <Stack spacing={2}>
            <BaseQuestion questionIdPrefix={questionIdPrefix} />
        </Stack>
    );
};

export default DateQuestion;
