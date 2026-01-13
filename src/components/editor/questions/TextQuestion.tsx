import { Stack } from "@mui/material";
import BaseQuestion from "./BaseQuestion.tsx";

interface TextQuestionProps {
    questionIdPrefix: string;
}

const TextQuestion = ({ questionIdPrefix }: TextQuestionProps) => {
    return (
        <Stack spacing={2}>
            <BaseQuestion questionIdPrefix={questionIdPrefix} />
        </Stack>
    );
};

export default TextQuestion;