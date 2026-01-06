import {Button, Stack} from "@mui/material";
import QuestionCard from "./QuestionCard.tsx";

const QuestionList = () => {
    return (
        <Stack spacing={2}>
            <QuestionCard />
            <Button variant={'outlined'}>
                Add a question
            </Button>
            <QuestionCard />
        </Stack>
    );
};

export default QuestionList;