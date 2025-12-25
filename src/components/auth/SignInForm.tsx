import {Button, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import {signInSchema, type SignInSchema} from "./auth.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";

const SignInForm = () => {
    const {
        register,
        formState: { errors },
    } = useForm<SignInSchema>({
        mode: 'all',
        resolver: zodResolver(signInSchema)
    })
    return (
        <Box width={'100%'}>
            <Stack sx={{gap: 2.5, py: 3}}>
                <TextField {...register('email')} label={'Email'} error={!!errors.email} />
                <TextField {...register('password')} label={'Password'} error={!!errors.password} />
            </Stack>
            <Button variant={'contained'} color={'secondary'} sx={{ margin: '0 auto', display: 'block', width: '70%', }}>
                Continue
            </Button>
        </Box>
    );
};

export default SignInForm;