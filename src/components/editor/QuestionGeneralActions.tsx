import {Controller, useFormContext} from "react-hook-form";
import {FormControlLabel, Stack, Switch} from "@mui/material";
import DeleteIconButton from "../common/DeleteIconButton.tsx";

interface QuestionGeneralActionsProps {
    idPrefix: string;
    onDelete: () => void;
}

const QuestionGeneralActions = ({ idPrefix, onDelete }: QuestionGeneralActionsProps) => {
    const { control } = useFormContext();

    return (
        <Stack direction="row" spacing={2}>
            <Controller
                control={control}
                name={`${idPrefix}.isRequired`}
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

export default QuestionGeneralActions;