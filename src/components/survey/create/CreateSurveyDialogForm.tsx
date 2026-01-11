import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { type CreateSurveySchema } from "./createSurvey.schema.ts";
import { toast } from "sonner";
import { GenericFormLayout } from "../../common/GenericFormLayout.tsx";
import type { CreateSurveyData } from "../../../types/survey.types.ts";
import { apiRequests } from "../../../lib/api.ts";
import Box from "@mui/material/Box";


const SurveyForm = ({ onSuccess }: { onSuccess: () => void }) => {


    const onSubmit = async (data: CreateSurveySchema) => {
        const dto: CreateSurveyData = {
            ...data,
            isActive: true,
        };
        try {
            await apiRequests.surveys.createNewSurvey(dto);
            toast.success('Survey created successfully');
            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error('Failed to create survey');
        }
    }

    const createSurveyFields = [
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'text', required: false },
    ] as const;

    return (
        <Box sx={{ pb: 2 }}>
            <GenericFormLayout
                title={'Create a new survey'}
                fields={createSurveyFields}
                initialValues={{
                    title: '',
                    description: ''
                }}
                onSubmit={onSubmit}
            />
        </Box>
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