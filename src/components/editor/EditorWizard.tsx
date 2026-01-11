import { Button, Stack, Box } from "@mui/material";
import { type BaseQuestionSpec, QuestionType } from "../../types/question.types.ts";
import type { Survey } from "../../types/survey.types.ts";
import QuestionContainer from "./QuestionContainer.tsx";
import AddIcon from "@mui/icons-material/Add";
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

interface EditorWizardProps {
    survey: Survey;
}

interface FormValues {
    questions: BaseQuestionSpec[];
}

const EditorWizard = ({ survey }: EditorWizardProps) => {

    const methods = useForm<FormValues>({
        mode: "onChange",
        defaultValues: {
            questions: survey.questions || []
        }
    });

    const { control, handleSubmit } = methods;

    const { fields, insert, remove } = useFieldArray({
        control,
        name: "questions"
    });

    const handleAddQuestion = (index: number) => {
        const newQuestion: BaseQuestionSpec = {
            id: crypto.randomUUID(),
            label: '',
            type: QuestionType.TEXT,
            isRequired: false,
        };
        insert(index, newQuestion);
    };

    const handleDeleteQuestion = (index: number) => {
        remove(index);
    };

    const handlePublish = (data: FormValues) => {
        const surveyData = {
            ...survey,
            questions: data.questions.map(({ id, ...question }) => question),
        };

        // TODO: send survey data to api
    };

    const renderAddButton = (index: number) => (
        <Button
            variant={'outlined'}
            startIcon={<AddIcon />}
            onClick={() => handleAddQuestion(index)}
            sx={{ borderStyle: 'dashed', borderWidth: 2 }}
        >
            Add a question
        </Button>
    )

    if (fields.length === 0) {
        return (
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handlePublish)}>
                    <Stack spacing={2}>
                        {renderAddButton(0)}
                    </Stack>
                </form>
            </FormProvider>
        )
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handlePublish)}>
                <Stack spacing={2}>
                    {fields.map((field, index) => (
                        <Box key={field.id}>
                            <QuestionContainer
                                index={index}
                                onDelete={() => handleDeleteQuestion(index)}
                            />
                            <Stack sx={{ mt: 2 }}>
                                {renderAddButton(index + 1)}
                            </Stack>
                        </Box>
                    ))}
                    <Button
                        type="submit"
                        disabled={!methods.formState.isValid}
                        sx={{ display: 'flex', alignItems: 'center', mt: 2, width: '20%' }}
                        variant="contained"
                        endIcon={<RocketLaunchOutlinedIcon />}
                        size="large">
                        Publish
                    </Button>
                </Stack>
            </form>
        </FormProvider>
    );
};

export default EditorWizard;