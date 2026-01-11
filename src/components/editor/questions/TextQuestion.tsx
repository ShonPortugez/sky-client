import { Stack } from "@mui/material";
import BaseQuestion from "./BaseQuestion.tsx";

interface TextQuestionProps {
    namePrefix: string;
}

const TextQuestion = ({ namePrefix }: TextQuestionProps) => {
    return (
        <Stack spacing={2}>
            <BaseQuestion namePrefix={namePrefix} />
        </Stack>
    );
};

export default TextQuestion;