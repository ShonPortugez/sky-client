import Box from "@mui/material/Box";
import {Button, CircularProgress, Stack, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import { signUpSchema, type SignUpSchema} from "./auth.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {apiRequests} from "../../lib/api.ts";
import {toast} from "sonner";
import type {UserSignupData} from "../../types/user.types.ts";

const SignUpForm = () => {

    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchema>({
        mode: 'all',
        resolver: zodResolver(signUpSchema)
    })

    const onSubmit = async (data: UserSignupData) => {
        setIsPending(true);
        try {
            const success = await apiRequests.users.signup(data);

            if (!success) {
                toast.error("Something went wrong");
                return;
            }

            toast.success("Signup Successful");
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
            <Stack sx={{gap: 2.5, py: 3}}>
                <TextField {...register('email')} label={'Email'} error={!!errors.email} />
                <TextField {...register('username')} label={'Username'} error={!!errors.username} />
                <TextField {...register('password')} label={'Password'} error={!!errors.password} />
                <TextField {...register('repeatPassword')} label={'Repeat password'} error={!!errors.repeatPassword} />
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

export default SignUpForm;