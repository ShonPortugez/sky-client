import { Stack } from "@mui/material";
import BaseQuestion from "./BaseQuestion.tsx";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import ControlledTextField from "../../common/ControlledTextField.tsx";

interface SliderQuestionProps {
    questionIdPrefix: string;
}

const sliderSchema = z.object({
    minValue: z.coerce.number().min(0, "Min cannot be negative"),
    maxValue: z.coerce.number().min(0, "Max cannot be negative"),
}).refine((data) => data.maxValue > data.minValue,
    {
        message: "Max value must be greater than min value",
        path: ["maxValue"],
    });

const SliderQuestion = ({ questionIdPrefix }: SliderQuestionProps) => {
    const { trigger, getValues } = useFormContext();

    const validateRange = () => {
        const values = {
            minValue: getValues(`${questionIdPrefix}.minValue`),
            maxValue: getValues(`${questionIdPrefix}.maxValue`)
        };
        const result = sliderSchema.safeParse(values);
        if (result.success) return true;

        const maxValidationStatus =
            result.error.issues.find(i => i.path.includes('maxValue'))?.message;
        return maxValidationStatus ?? false;
    };

    return (
        <Stack spacing={2}>
            <BaseQuestion questionIdPrefix={questionIdPrefix} />
            <Stack direction={'row'} spacing={2}>
                <ControlledTextField
                    name={`${questionIdPrefix}.minValue`}
                    label="Minimum value"
                    variant="outlined"
                    type="number"
                    fullWidth
                    rules={{
                        required: "Required",
                        validate: (value) => {
                            const result = sliderSchema.pick({ minValue: true }).safeParse({ minValue: value });
                            return result.success || result.error.issues[0].message;
                        }
                    }}
                    onChange={() => {
                        trigger(`${questionIdPrefix}.maxValue`);
                    }}
                />
                <ControlledTextField
                    name={`${questionIdPrefix}.maxValue`}
                    label="Maximum value"
                    variant="outlined"
                    type="number"
                    fullWidth
                    rules={{
                        required: "Required",
                        validate: validateRange
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default SliderQuestion;