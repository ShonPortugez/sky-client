import { Card, Divider, FormControlLabel, Stack, Switch } from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIconButton from "../common/DeleteIconButton.tsx";
import QuestionSelect, { questionTypes } from "./questions/QuestionSelect.tsx";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import type { QuestionType } from "../../types/question.types.ts";

interface QuestionContainerProps {
    index: number;
    onDelete: () => void;
}

const QuestionGeneralActions = ({ namePrefix, onDelete }: {
    namePrefix: string;
    onDelete: () => void;
}) => {
    const { control } = useFormContext();

    return (
        <Stack direction="row" spacing={2}>
            <Controller
                control={control}
                name={`${namePrefix}.isRequired`}
                render={({ field: { value, onChange } }) => (
                    <FormControlLabel
                        control={<Switch checked={!!value} onChange={onChange} />}
                        label="Required"
                        labelPlacement={'start'}
                    />
                )}
            />
            <DeleteIconButton tooltipText={'Delete question'} onClick={onDelete} />
        </Stack>
    );
};

const QuestionContainer = ({ index, onDelete }: QuestionContainerProps) => {
    const { control } = useFormContext();
    const namePrefix = `questions.${index}`;

    const questionType = useWatch({
        control,
        name: `${namePrefix}.type`
    }) as QuestionType;

    const Component = questionTypes.find(q => q.type === questionType)?.component;

    return (
        <Card>
            <Stack spacing={2} direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Controller
                    control={control}
                    name={`${namePrefix}.type`}
                    render={({ field }) => (
                        <QuestionSelect
                            question={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Stack direction="row" spacing={2} alignItems="center">
                    <QuestionGeneralActions
                        namePrefix={namePrefix}
                        onDelete={onDelete}
                    />
                </Stack>
            </Stack>
            <Divider />
            <Box sx={{ padding: 3 }}>
                {Component && <Component namePrefix={namePrefix} />}
            </Box>
        </Card>
    );
};

export default QuestionContainer;