import Box from "@mui/material/Box";
import {Button, Stack, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {signUpSchema, type SignUpSchema} from "./auth.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod"

const RegisterForm = () => {

    const {
        register,
        formState: { errors },
    } = useForm<SignUpSchema>({
        mode: 'all',
        resolver: zodResolver(signUpSchema)
    })
    return (
        <Box width={'100%'}>
            <Stack sx={{gap: 2.5, py: 3}}>
                <TextField {...register('email')} label={'Email'} error={!!errors.email} />
                <TextField {...register('username')} label={'Username'} error={!!errors.username} />
                <TextField {...register('password')} label={'Password'} error={!!errors.password} />
                <TextField {...register('repeatPassword')} label={'Repeat password'} error={!!errors.repeatPassword} />
            </Stack>
            <Button variant={'contained'} color={'secondary'} sx={{ margin: '0 auto', display: 'block', width: '70%', }}>
                Continue
            </Button>
        </Box>
    );
};

export default RegisterForm;