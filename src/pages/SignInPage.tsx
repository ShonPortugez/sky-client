import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import SignInForm from "../components/auth/SignInForm.tsx";

const SignUpText = () => {
    const navigate = useNavigate();
    return (
        <Stack direction={'row'} sx={{
            alignItems: 'center',
        }}>
            <Typography>
                No account yet?
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
                onClick={() => navigate('/sign-up')}
            >
                Sign up
            </Button>
        </Stack>
    );
};

const SignInPage = () => {
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
                <Typography variant={'h3'} fontSize={'xx-large'} fontWeight={'450'}>Sign in</Typography>
                <SignInForm />
                <SignUpText />
            </Stack>
        </Box>

    );
};

export default SignInPage;