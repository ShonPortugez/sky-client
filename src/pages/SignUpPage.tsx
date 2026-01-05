import {Button, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import SignUpForm from "../components/auth/SignUpForm.tsx";
import {useNavigate} from "react-router-dom";

const SignInText = () => {
    const navigate = useNavigate();
    return (
        <Stack direction={'row'} sx={{
            alignItems: 'center',
        }}>
            <Typography>
                Have an account already?
            </Typography>
            <Button
                variant="text"
                sx={{
                    color: 'primary.main',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'primary.dark',
                    },
                }}
                onClick={() => navigate('/sign-in')}
            >
                Sign in
            </Button>
        </Stack>
    );
};

const SignUpPage = () => {
    return (
        <Box sx={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        }}>
            <Stack
                sx={{
                    width: '25%',
                    margin: '0 auto',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Typography variant={'h3'} fontSize={'xx-large'} fontWeight={'450'}>Sign up</Typography>
                <SignUpForm />
                <SignInText />
            </Stack>
        </Box>
    );
};

export default SignUpPage;