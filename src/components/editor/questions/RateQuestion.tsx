import { Stack } from "@mui/material";
import BaseQuestion from "./BaseQuestion.tsx";
import ControlledTextField from "../../common/ControlledTextField.tsx";

interface RateQuestionProps {
    questionIdPrefix: string;
}

const RateQuestion = ({ questionIdPrefix }: RateQuestionProps) => {
    return (
        <Stack spacing={2}>
            <BaseQuestion questionIdPrefix={questionIdPrefix} />

            <Stack direction="row" alignItems="center" spacing={2}>
                <ControlledTextField
                    name={`${questionIdPrefix}.maxValue`}
                    label="Max Stars"
                    type="number"
                    variant="outlined"
                    sx={{ width: 150 }}
                    value={5}
                    rules={{ min: { value: 1, message: "Must be at least 1" } }}
                />
            </Stack>
        </Stack>
    );
};

export default RateQuestion;
