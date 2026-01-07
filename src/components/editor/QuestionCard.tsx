import { Card, Divider, FormControlLabel, Stack, Switch } from "@mui/material";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import type { Question, QuestionType } from "../../types/survey.types.ts";
import DeleteIconButton from "../common/DeleteIconButton.tsx";
import {questionTypes} from "./questions/QuestionSelector.tsx";

interface QuestionCardProps {
    question: Question;
    onDelete: (id: string) => void;
    onUpdate: (id: string, updates: Partial<Question>) => void;
}

const QuestionGeneralActions = ({
    isRequired,
    onToggleRequired,
    onDelete
}: {
    isRequired: boolean;
    onToggleRequired: () => void;
    onDelete: () => void;
}) => {
    return (
        <Stack direction="row" spacing={2}>
            <FormControlLabel
                control={<Switch checked={isRequired} onChange={onToggleRequired} />}
                label="Required"
                labelPlacement={'start'}
            />
            <DeleteIconButton tooltipText={'Delete question'} onClick={onDelete} />
        </Stack>
    );
};

const QuestionCard = ({ question, onDelete, onUpdate }: QuestionCardProps) => {
    const handleTypeChange = (e: SelectChangeEvent) => {
        onUpdate(question.id, { type: e.target.value as QuestionType });
    };

    const Component = questionTypes.find(q => q.type === question.type)?.component;

    return (
        <Card>
            <Stack spacing={2} direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Select
                    label="Question"
                    value={question.type}
                    onChange={handleTypeChange}
                    size="small"
                    sx={{ minWidth: 200 }}
                >
                    {questionTypes.map((item) => (
                        <MenuItem key={item.type} value={item.type}>
                            <Stack spacing={1} direction={'row'} sx={{ alignItems: 'center' }}>
                                <Box sx={{ color: 'primary.main', display: 'flex' }}>{item.icon}</Box>
                                <Box>{item.label}</Box>
                            </Stack>
                        </MenuItem>
                    ))}
                </Select>
                <Stack direction="row" spacing={2} alignItems="center">
                    <QuestionGeneralActions
                        isRequired={question.isRequired}
                        onToggleRequired={() => onUpdate(question.id, { isRequired: !question.isRequired })}
                        onDelete={() => onDelete(question.id)}
                    />
                </Stack>
            </Stack>
            <Divider />
            <Box sx={{ padding: 3 }}>
                {Component && <Component question={question} onUpdate={onUpdate} />}
            </Box>
        </Card>
    );
};

export default QuestionCard;