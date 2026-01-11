import { Button, Stack, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import BaseQuestion from "./BaseQuestion.tsx";
import DeleteIconButton from "../../common/DeleteIconButton.tsx";
import { useFormContext, useWatch } from "react-hook-form";

interface MultipleChoiceQuestionProps {
    namePrefix: string;
}

const MultipleChoiceQuestion = ({ namePrefix }: MultipleChoiceQuestionProps) => {
    const { control, setValue, getValues } = useFormContext();
    const optionsPath = `${namePrefix}.options`;

    const options: string[] = useWatch({
        control,
        name: optionsPath
    }) || [];

    const handleAddOption = () => {
        const currentOptions = getValues(optionsPath) || [];
        const newOptions = [...currentOptions, `Option ${currentOptions.length + 1}`];
        setValue(optionsPath, newOptions);
    };

    const handleUpdateOption = (index: number, value: string) => {
        const currentOptions = getValues(optionsPath) || [];
        const newOptions = [...currentOptions];
        newOptions[index] = value;
        setValue(optionsPath, newOptions);
    };

    const handleDeleteOption = (index: number) => {
        const currentOptions = getValues(optionsPath) || [];
        const newOptions = currentOptions.filter((_val: string, i: number) => i !== index);
        setValue(optionsPath, newOptions);
    };

    return (
        <Stack spacing={2}>
            <BaseQuestion namePrefix={namePrefix} />

            <Stack spacing={1}>
                {options.map((option, index) => (
                    <Stack key={index} direction="row" spacing={1} alignItems="center">
                        <TextField
                            size="small"
                            fullWidth
                            value={option}
                            placeholder={`Option ${index + 1}`}
                            onChange={(e) => handleUpdateOption(index, e.target.value)}
                        />
                        <DeleteIconButton tooltipText={'Delete this option'} onClick={() => handleDeleteOption(index)} />
                    </Stack>
                ))}
                <Button
                    startIcon={<AddIcon />}
                    onClick={handleAddOption}
                    sx={{ alignSelf: 'start' }}
                >
                    Add Option
                </Button>
            </Stack>
        </Stack>
    );
};

export default MultipleChoiceQuestion;
