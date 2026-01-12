import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Typography, Stack, TextField, CircularProgress } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CreateSurveyData } from "../../types/survey.types.ts";
import { apiRequests } from "../../lib/api.ts";
import { type CreateSurveySchema, createSurveySchema } from "../../schemas/survey.schema.ts";


const SurveyForm = ({ onSuccess }: { onSuccess: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<CreateSurveySchema>({
        resolver: zodResolver(createSurveySchema),
        defaultValues: {
            title: '',
            description: ''
        }
    });

    const onSubmit = async (data: CreateSurveySchema) => {
        const dto: CreateSurveyData = {
            ...data,
            isActive: true,
        };
        try {
            await apiRequests.surveys.createNewSurvey(dto);
            toast.success('Survey created successfully');
            reset();
            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error('Failed to create survey');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ gap: 2.5, py: 3 }}>
                <TextField
                    label="Title"
                    {...register("title")}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    required
                />
                <TextField
                    label="Description"
                    {...register("description")}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                />
            </Stack>
            <Button
                type={'submit'}
                variant={'contained'}
                color={'secondary'}
                disabled={isSubmitting}
                sx={{ margin: '0 auto', display: 'block', width: '70%', }}
            >
                {isSubmitting ? <CircularProgress size={20} color={'info'} /> : 'Continue'}
            </Button>
        </form>
    );
};

const CreateSurveyDialogForm = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant={'outlined'} onClick={handleClickOpen}>
                <AddOutlinedIcon />
                <Typography>New Survey</Typography>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <Typography fontSize={'x-large'}>Create new survey</Typography>
                    <Typography color={'textSecondary'}>Enter the following details to start crafting your next survey!</Typography>
                </DialogTitle>
                <DialogContent>
                    <SurveyForm onSuccess={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CreateSurveyDialogForm;