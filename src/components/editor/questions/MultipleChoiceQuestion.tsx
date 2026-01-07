import { Button, Stack, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import type { Question } from "../../../types/survey.types.ts";
import QuestionHeader from "./QuestionHeader.tsx";
import DeleteIconButton from "../../common/DeleteIconButton.tsx";

interface MultipleChoiceQuestionProps {
    question: Question;
    onUpdate: (id: string, updates: Partial<Question>) => void;
}

const MultipleChoiceQuestion = ({ question, onUpdate }: MultipleChoiceQuestionProps) => {
    const options = question.options || [];

    const handleAddOption = () => {
        const newOptions = [...options, `Option ${options.length + 1}`];
        onUpdate(question.id, { options: newOptions });
    };

    const handleUpdateOption = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        onUpdate(question.id, { options: newOptions });
    };

    const handleDeleteOption = (index: number) => {
        const newOptions = options.filter((_, i) => i !== index);
        onUpdate(question.id, { options: newOptions });
    };

    return (
        <Stack spacing={2}>
            <QuestionHeader question={question} onUpdate={onUpdate} />

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
