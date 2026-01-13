import { Card, Divider, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import QuestionSelect, { questionTypes } from "./questions/QuestionSelect.tsx";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import type { QuestionType } from "../../types/question.types.ts";
import QuestionGeneralActions from "./QuestionGeneralActions.tsx";

interface QuestionContainerProps {
    index: number;
    onDelete: () => void;
}

const QuestionContainer = ({ index, onDelete }: QuestionContainerProps) => {
    const { control } = useFormContext();
    const questionIdPrefix = `questions.${index}`;

    const questionType = useWatch({
        control,
        name: `${questionIdPrefix}.type`
    }) as QuestionType;

    const DynamicQuestionComponent = questionTypes.find(q => q.type === questionType)?.component;

    return (
        <Card>
            <Stack spacing={2} direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Controller
                    control={control}
                    name={`${questionIdPrefix}.type`}
                    render={({ field }) => (
                        <QuestionSelect
                            question={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Stack direction="row" spacing={2} alignItems="center">
                    <QuestionGeneralActions
                        idPrefix={questionIdPrefix}
                        onDelete={onDelete}
                    />
                </Stack>
            </Stack>
            <Divider />
            <Box sx={{ padding: 3 }}>
               {DynamicQuestionComponent && <DynamicQuestionComponent questionIdPrefix={questionIdPrefix} />}
            </Box>
        </Card>
    );
};

export default QuestionContainer;