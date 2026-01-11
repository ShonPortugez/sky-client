import { Stack } from "@mui/material";
import BaseQuestion from "./BaseQuestion.tsx";

interface DateQuestionProps {
    namePrefix: string;
}

const DateQuestion = ({ namePrefix }: DateQuestionProps) => {
    return (
        <Stack spacing={2}>
            <BaseQuestion namePrefix={namePrefix} />
        </Stack>
    );
};

export default DateQuestion;
