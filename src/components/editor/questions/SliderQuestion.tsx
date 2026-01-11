import { Stack } from "@mui/material";
import BaseQuestion from "./BaseQuestion.tsx";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import ControlledTextField from "../../common/ControlledTextField.tsx";

interface SliderQuestionProps {
    namePrefix: string;
}

const sliderSchema = z.object({
    minValue: z.coerce.number().min(0, "Min cannot be negative"),
    maxValue: z.coerce.number().min(0, "Max cannot be negative"),
}).refine((data) => data.maxValue > data.minValue,
    {
        message: "Max value must be greater than min value",
        path: ["maxValue"],
    });

const SliderQuestion = ({ namePrefix }: SliderQuestionProps) => {
    const { trigger, getValues } = useFormContext();

    const validateRange = () => {
        const values = {
            minValue: getValues(`${namePrefix}.minValue`),
            maxValue: getValues(`${namePrefix}.maxValue`)
        };
        const result = sliderSchema.safeParse(values);
        return result.success || result.error?.issues.find(i => i.path.includes('maxValue'))?.message || true;
    };

    return (
        <Stack spacing={2}>
            <BaseQuestion namePrefix={namePrefix} />
            <Stack direction={'row'} spacing={2}>
                <ControlledTextField
                    name={`${namePrefix}.minValue`}
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
                        trigger(`${namePrefix}.maxValue`);
                    }}
                />
                <ControlledTextField
                    name={`${namePrefix}.maxValue`}
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