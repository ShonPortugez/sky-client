import OptionsQuestion from "./OptionsQuestion.tsx";

interface CheckboxQuestionProps {
    questionIdPrefix: string;
}

const CheckboxQuestion = ({ questionIdPrefix }: CheckboxQuestionProps) => {
    return <OptionsQuestion questionIdPrefix={questionIdPrefix} />;
};

export default CheckboxQuestion;