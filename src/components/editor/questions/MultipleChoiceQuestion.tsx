import OptionsQuestion from "./OptionsQuestion.tsx";

interface MultipleChoiceQuestionProps {
    questionIdPrefix: string;
}

const MultipleChoiceQuestion = ({ questionIdPrefix }: MultipleChoiceQuestionProps) => {
    return <OptionsQuestion questionIdPrefix={questionIdPrefix} />;
};

export default MultipleChoiceQuestion;
