import { Stack } from "@mui/material";
import { z } from "zod";
import ControlledTextField from "../../common/ControlledTextField.tsx";

interface QuestionHeaderProps {
    namePrefix: string;
}

export const baseSchema = z.string().min(5, "Label must be at least 5 characters");

const BaseQuestion = ({ namePrefix }: QuestionHeaderProps) => {

    return (
        <Stack spacing={2}>
            <ControlledTextField
                name={`${namePrefix}.label`}
                label="Question Text"
                variant="outlined"
                fullWidth
                rules={{
                    validate: (value) => baseSchema.safeParse(value).success || baseSchema.safeParse(value).error?.issues[0].message
                }}
            />
            <ControlledTextField
                name={`${namePrefix}.description`}
                label="Description"
                variant="outlined"
                fullWidth
            />
        </Stack>
    );
};

export default BaseQuestion;
