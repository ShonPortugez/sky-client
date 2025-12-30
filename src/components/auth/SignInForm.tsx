import {Button, CircularProgress, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInSchema } from "./auth.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { apiRequests } from "../../lib/api.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignInForm = () => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchema>({
        mode: 'all',
        resolver: zodResolver(signInSchema)
    })

    const onSubmit = async (data: SignInSchema) => {
        setIsPending(true);
        try {
            const success = await apiRequests.auth.login(data);

            if (!success) {
                toast.error("Login failed");
                return;
            }

            toast.success("Login successful");
            navigate('/home');
        } catch (err) {
            const message = err instanceof Error ? err.message : "An unexpected error occurred";
            console.error(err);
            toast.error(message);
        } finally {
            setIsPending(false);
        }
    };


    return (
        <Box width={'100%'} component={'form'} onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ gap: 2.5, py: 3 }}>
                <TextField
                    {...register('email')}
                    label={'Email'}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    {...register('password')}
                    label={'Password'}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
            </Stack>
            <Button
                type={'submit'}
                variant={'contained'}
                color={'secondary'}
                disabled={isPending}
                sx={{ margin: '0 auto', display: 'block', width: '70%', }}
            >
                {isPending ? <CircularProgress size={20} color={'info'} /> : 'Continue'}
            </Button>
        </Box>
    );
};

export default SignInForm;