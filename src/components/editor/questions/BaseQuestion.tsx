import { Stack } from "@mui/material";
import { z } from "zod";
import ControlledTextField from "../../common/ControlledTextField.tsx";

interface QuestionHeaderProps {
    questionIdPrefix: string;
}

export const baseValidationSchema = z.string().min(5, "Label must be at least 5 characters");

const BaseQuestion = ({ questionIdPrefix }: QuestionHeaderProps) => {

    return (
        <Stack spacing={2}>
            <ControlledTextField
                name={`${questionIdPrefix}.label`}
                label="Question Text"
                variant="outlined"
                fullWidth
                rules={{
                    validate: (value) => baseValidationSchema.safeParse(value).success || baseValidationSchema.safeParse(value).error?.issues[0].message
                }}
            />
            <ControlledTextField
                name={`${questionIdPrefix}.description`}
                label="Description"
                variant="outlined"
                fullWidth
            />
        </Stack>
    );
};

export default BaseQuestion;
