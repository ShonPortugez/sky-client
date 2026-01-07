import { Button, Stack } from "@mui/material";
import QuestionCard from "./QuestionCard.tsx";
import type { Question } from "../../types/survey.types.ts";
import AddIcon from '@mui/icons-material/Add';

interface QuestionListProps {
    questions: Question[];
    onAdd: (index: number) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, updates: Partial<Question>) => void;
}

const QuestionList = ({ questions, onAdd, onDelete, onUpdate }: QuestionListProps) => {
    const renderAddButton = (index: number) => (
        <Button
            variant={'outlined'}
            startIcon={<AddIcon />}
            onClick={() => onAdd(index)}
            sx={{ borderStyle: 'dashed', borderWidth: 2 }}
        >
            Add a question
        </Button>
    )

    if (questions.length === 0) {
        return (
            <Stack spacing={2}>
                {renderAddButton(0)}
            </Stack>
        )
    }

    return (
        <Stack spacing={2}>
            {questions.map((question, index) => (
                <div key={question.id}>
                    <QuestionCard
                        question={question}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                    <Stack sx={{ mt: 2 }}>
                        {renderAddButton(index + 1)}
                    </Stack>
                </div>
            ))}
        </Stack>
    );
};

export default QuestionList;